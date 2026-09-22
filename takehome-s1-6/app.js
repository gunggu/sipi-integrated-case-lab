const PASSWORD_HASH="975066a9148853b47647931ca89bd19270098a87449275375741b435c8dfc9f5";
const STORAGE_KEY="sipi_takehome_workspace_v2";
const START_KEY="sipi_case_started";
const UNLOCK_KEY="sipi_case_unlocked";

const state={
  currentId:null,
  workspace:loadWorkspace()
};

function loadWorkspace(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{"reviewed":[],"bookmarks":[],"notes":{},"classifications":{},"events":[]}');
  }catch(e){
    return {reviewed:[],bookmarks:[],notes:{},classifications:{},events:[]};
  }
}
function saveWorkspace(){
  localStorage.setItem(STORAGE_KEY,JSON.stringify(state.workspace));
  updateMetrics();
}
function logEvent(action,id){
  state.workspace.events.push({ts:new Date().toISOString(),action,id});
  if(state.workspace.events.length>500) state.workspace.events=state.workspace.events.slice(-500);
  saveWorkspace();
}
function uniq(arr){return [...new Set(arr)]}
function esc(v){return String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]))}

async function sha256(text){
  const data=new TextEncoder().encode(text);
  const digest=await crypto.subtle.digest("SHA-256",data);
  return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("");
}

const gate=document.getElementById("gate");
const app=document.getElementById("app");
const msg=document.getElementById("gate-msg");
const modal=document.getElementById("modal");
const noteEl=document.getElementById("note");
const classificationEl=document.getElementById("classification");

document.getElementById("unlock").addEventListener("click",async()=>{
  const val=document.getElementById("pw").value;
  if(await sha256(val)===PASSWORD_HASH){
    localStorage.setItem(UNLOCK_KEY,"1");
    if(!localStorage.getItem(START_KEY)) localStorage.setItem(START_KEY,String(Date.now()));
    gate.classList.add("hidden"); app.classList.remove("hidden"); boot();
  }else{
    msg.textContent="Password tidak cocok.";
  }
});
document.getElementById("pw").addEventListener("keydown",e=>{
  if(e.key==="Enter") document.getElementById("unlock").click();
});

function boot(){
  populateCategories();
  renderEvidence();
  updateMetrics();
  startTimer();
}

function populateCategories(){
  const categories=uniq(EVIDENCE_DATA.map(x=>x.category)).sort();
  const sel=document.getElementById("category-filter");
  sel.innerHTML='<option value="ALL">Semua kategori</option>'+categories.map(c=>'<option value="'+esc(c)+'">'+esc(c)+'</option>').join("");
}

function getFilteredEvidence(){
  const q=document.getElementById("search").value.trim().toLowerCase();
  const cat=document.getElementById("category-filter").value;
  const rf=document.getElementById("review-filter").value;
  return EVIDENCE_DATA.filter(x=>{
    const blob=[x.id,x.category,x.title,x.type,x.source,x.date,x.summary,...x.sections.flatMap(s=>[
      s.heading||"",s.text||"",...(s.headers||[]),...(s.rows||[]).flat()
    ])].join(" ").toLowerCase();
    if(q && !blob.includes(q)) return false;
    if(cat!=="ALL" && x.category!==cat) return false;
    if(rf==="BOOKMARKED" && !state.workspace.bookmarks.includes(x.id)) return false;
    if(rf==="UNREVIEWED" && state.workspace.reviewed.includes(x.id)) return false;
    if(rf==="NOTED" && !(state.workspace.notes[x.id]||"").trim()) return false;
    return true;
  });
}

function renderEvidence(){
  const rows=getFilteredEvidence();
  const grid=document.getElementById("evidence-grid");
  grid.innerHTML="";
  if(!rows.length){
    grid.innerHTML='<div class="empty">Tidak ada artefak yang cocok dengan filter.</div>';
    return;
  }
  rows.forEach(x=>{
    const article=document.createElement("article");
    article.className="evidence";
    const reviewed=state.workspace.reviewed.includes(x.id);
    const bookmarked=state.workspace.bookmarks.includes(x.id);
    const cls=state.workspace.classifications[x.id]||"";
    article.innerHTML=
      '<div class="evidence-top">'+
        '<div><div class="id">'+esc(x.id)+' — '+esc(x.title)+'</div>'+
        '<div class="meta-line">'+esc(x.type)+' • '+esc(x.source)+' • '+esc(x.date)+'</div></div>'+
        '<button class="bookmark-mini '+(bookmarked?'active':'')+'" data-id="'+esc(x.id)+'" title="Bookmark">'+(bookmarked?'★':'☆')+'</button>'+
      '</div>'+
      '<p>'+esc(x.summary)+'</p>'+
      '<div class="card-footer">'+
        '<span class="tag">'+esc(x.category)+'</span>'+
        (cls?'<span class="class-chip">'+esc(cls)+'</span>':'')+
        '<span class="review-state">'+(reviewed?'Reviewed':'Not reviewed')+'</span>'+
      '</div>'+
      '<button class="inspect" data-id="'+esc(x.id)+'">Inspect evidence</button>';
    grid.appendChild(article);
  });

  grid.querySelectorAll(".inspect").forEach(b=>b.addEventListener("click",()=>openEvidence(b.dataset.id)));
  grid.querySelectorAll(".bookmark-mini").forEach(b=>b.addEventListener("click",e=>{
    e.stopPropagation(); toggleBookmark(b.dataset.id); renderEvidence();
  }));
}

function renderSection(section){
  let html='<section class="artifact-section"><h3>'+esc(section.heading||"Evidence")+'</h3>';
  if(section.text) html+='<p>'+esc(section.text)+'</p>';
  if(section.headers && section.rows){
    html+='<div class="table-wrap"><table><thead><tr>'+section.headers.map(h=>'<th>'+esc(h)+'</th>').join("")+'</tr></thead><tbody>';
    html+=section.rows.map(row=>'<tr>'+row.map(v=>'<td>'+esc(v)+'</td>').join("")+'</tr>').join("");
    html+='</tbody></table></div>';
  }
  return html+'</section>';
}

function openEvidence(id){
  const x=EVIDENCE_DATA.find(e=>e.id===id);
  if(!x) return;
  state.currentId=id;
  if(!state.workspace.reviewed.includes(id)){
    state.workspace.reviewed.push(id);
    logEvent("inspect",id);
  }else{
    saveWorkspace();
  }
  document.getElementById("modal-eyebrow").textContent=x.category+" • "+x.id;
  document.getElementById("modal-title").textContent=x.title;
  document.getElementById("modal-summary").textContent=x.summary;
  document.getElementById("modal-meta").innerHTML=[
    ["Artifact type",x.type],["Source",x.source],["Date",x.date],["Evidence ID",x.id]
  ].map(([k,v])=>'<div><span>'+esc(k)+'</span><strong>'+esc(v)+'</strong></div>').join("");
  document.getElementById("modal-sections").innerHTML=x.sections.map(renderSection).join("");
  noteEl.value=state.workspace.notes[id]||"";
  classificationEl.value=state.workspace.classifications[id]||"";
  updateBookmarkButton();
  document.getElementById("save-state").textContent="Disimpan lokal di browser ini.";
  modal.classList.remove("hidden");
  document.body.classList.add("modal-open");
  updateMetrics();
  renderEvidence();
}

function closeModal(){
  modal.classList.add("hidden");
  document.body.classList.remove("modal-open");
  state.currentId=null;
}
document.getElementById("close-modal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal) closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&!modal.classList.contains("hidden")) closeModal()});

function toggleBookmark(id){
  const idx=state.workspace.bookmarks.indexOf(id);
  if(idx>=0) state.workspace.bookmarks.splice(idx,1);
  else state.workspace.bookmarks.push(id);
  state.workspace.bookmarks=uniq(state.workspace.bookmarks);
  logEvent(idx>=0?"bookmark-remove":"bookmark-add",id);
  updateBookmarkButton();
}

function updateBookmarkButton(){
  if(!state.currentId) return;
  const active=state.workspace.bookmarks.includes(state.currentId);
  const b=document.getElementById("bookmark-btn");
  b.textContent=active?"★ Bookmarked":"☆ Bookmark";
  b.classList.toggle("active",active);
}

document.getElementById("bookmark-btn").addEventListener("click",()=>{
  if(state.currentId) toggleBookmark(state.currentId);
});

document.getElementById("save-note").addEventListener("click",()=>{
  const id=state.currentId;
  if(!id) return;
  state.workspace.notes[id]=noteEl.value.trim();
  state.workspace.classifications[id]=classificationEl.value;
  logEvent("note-save",id);
  document.getElementById("save-state").textContent="Tersimpan "+new Date().toLocaleTimeString("id-ID",{hour:"2-digit",minute:"2-digit"});
  renderEvidence();
});

classificationEl.addEventListener("change",()=>{
  if(!state.currentId) return;
  state.workspace.classifications[state.currentId]=classificationEl.value;
  logEvent("classification-change",state.currentId);
  renderEvidence();
});

function updateMetrics(){
  document.getElementById("metric-reviewed").textContent=state.workspace.reviewed.length;
  document.getElementById("metric-bookmarks").textContent=state.workspace.bookmarks.length;
  document.getElementById("metric-notes").textContent=Object.values(state.workspace.notes).filter(v=>(v||"").trim()).length;
  document.getElementById("metric-classified").textContent=Object.values(state.workspace.classifications).filter(Boolean).length;
}

["search","category-filter","review-filter"].forEach(id=>{
  document.getElementById(id).addEventListener(id==="search"?"input":"change",renderEvidence);
});

document.getElementById("reset-view").addEventListener("click",()=>{
  document.getElementById("search").value="";
  document.getElementById("category-filter").value="ALL";
  document.getElementById("review-filter").value="ALL";
  renderEvidence();
  window.scrollTo({top:0,behavior:"smooth"});
});

document.getElementById("print-btn").addEventListener("click",()=>window.print());

document.getElementById("export-btn").addEventListener("click",()=>{
  const payload={
    case:"PT NusaNiaga Digital — SIPI Professional Take-Home",
    exportedAt:new Date().toISOString(),
    reviewed:state.workspace.reviewed,
    bookmarks:state.workspace.bookmarks,
    classifications:state.workspace.classifications,
    notes:state.workspace.notes,
    activity:state.workspace.events
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:"application/json"});
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download="SIPI_takehome_workspace_"+new Date().toISOString().slice(0,10)+".json";
  document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);
  logEvent("workspace-export","ALL");
});

function startTimer(){
  const started=Number(localStorage.getItem(START_KEY)||Date.now());
  const end=started+24*60*60*1000;
  const el=document.getElementById("timer");
  const tick=()=>{
    const left=Math.max(0,end-Date.now());
    const h=Math.floor(left/3600000);
    const m=Math.floor((left%3600000)/60000);
    const s=Math.floor((left%60000)/1000);
    el.textContent=[h,m,s].map(v=>String(v).padStart(2,"0")).join(":");
    el.classList.toggle("warning",left>0&&left<2*60*60*1000);
    if(left<=0) el.textContent="00:00:00";
  };
  tick(); setInterval(tick,1000);
}

if(localStorage.getItem(UNLOCK_KEY)==="1"){
  gate.classList.add("hidden");
  app.classList.remove("hidden");
  boot();
}
