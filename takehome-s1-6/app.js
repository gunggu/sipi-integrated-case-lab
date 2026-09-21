const PASSWORD_HASH="975066a9148853b47647931ca89bd19270098a87449275375741b435c8dfc9f5";
const evidence=[
{id:"E01",tag:"S1",title:"System Landscape",text:"POS, webstore, dan tiga marketplace terhubung ke API gateway, cloud ERP, data lake, dashboard CFO, dan AI summary."},
{id:"E02",tag:"S2",title:"Data Lineage",text:"Satu marketplace terlambat 11 jam; API retry menghasilkan 38 duplicate messages; 17 rejected records belum direkonsiliasi."},
{id:"E03",tag:"S2",title:"Customer Master",text:"4,8% probable duplicate customer records; definisi active customer berbeda antara Sales dan Finance."},
{id:"E04",tag:"S3",title:"ERP Selection",text:"Vendor dipilih terutama karena subscription price; scorecard tidak memasukkan exit risk, partner capability, dan full TCO."},
{id:"E05",tag:"S3",title:"Fit-Gap",text:"Sebagian credit approval memakai spreadsheet workaround karena configuration ERP belum disepakati."},
{id:"E06",tag:"S3",title:"Migration",text:"Opening balance A/R dan A/P dimuat tetapi belum direkonsiliasi ke legacy dan supporting schedules."},
{id:"E07",tag:"S3",title:"Access",text:"Power user dapat mengubah vendor bank account dan menyiapkan payment batch; final release oleh Treasury Manager."},
{id:"E08",tag:"S3",title:"UAT / Cutover",text:"Happy-path selesai; interface failure, rejected payment, period close, dan rollback belum diuji end-to-end."},
{id:"E09",tag:"S4",title:"Internal Control",text:"Quarterly privileged review terlambat; exception queue memiliki owner tetapi belum memiliki escalation threshold."},
{id:"E10",tag:"S4",title:"Reporting",text:"Dashboard CFO berlabel current saat marketplace feed terlambat; AI narrative dikirim tanpa human validation."},
{id:"E11",tag:"S5",title:"Audit Evidence",text:"Privileged activity log tersedia 45 hari dari scope enam bulan; IAM tickets dan review reports masih tersedia."},
{id:"E12",tag:"S5",title:"Cloud Assurance",text:"SOC report tidak mencakup satu subservice integrasi material; CUECs menyebut user provisioning tanggung jawab customer."},
{id:"E13",tag:"S6",title:"Revenue Cycle",text:"12 shipment belum diinvoice; 7 credit overrides tanpa independent approval; Rp680 juta cash receipt masih unmatched."},
{id:"E14",tag:"S6",title:"Expenditure Cycle",text:"Supplier portal membuat dua duplicate PO akibat retry; receiving report dibuat sebelum independent count; satu vendor bank-change tanpa callback."},
{id:"E15",tag:"S6",title:"Payment",text:"Bank menolak tiga transaksi tetapi A/P menandai seluruh invoice paid dan GL mencatat seluruh batch sebagai cash outflow."}
];

async function sha256(text){
  const data=new TextEncoder().encode(text);
  const digest=await crypto.subtle.digest("SHA-256",data);
  return [...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,"0")).join("");
}
const gate=document.getElementById("gate"), app=document.getElementById("app"), msg=document.getElementById("gate-msg");
document.getElementById("unlock").addEventListener("click",async()=>{
  const val=document.getElementById("pw").value;
  if(await sha256(val)===PASSWORD_HASH){
    localStorage.setItem("sipi_case_unlocked","1");
    if(!localStorage.getItem("sipi_case_started")) localStorage.setItem("sipi_case_started",String(Date.now()));
    gate.classList.add("hidden"); app.classList.remove("hidden"); boot();
  } else msg.textContent="Password tidak cocok.";
});
document.getElementById("pw").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("unlock").click()});

function boot(){
  renderFilters(); renderEvidence("ALL"); startTimer();
}
function renderFilters(){
  const tags=["ALL","S1","S2","S3","S4","S5","S6"];
  const box=document.getElementById("filters"); box.innerHTML="";
  tags.forEach(tag=>{
    const b=document.createElement("button"); b.textContent=tag==="ALL"?"Semua":tag;
    if(tag==="ALL")b.classList.add("active");
    b.onclick=()=>{[...box.children].forEach(x=>x.classList.remove("active"));b.classList.add("active");renderEvidence(tag)};
    box.appendChild(b);
  });
}
function renderEvidence(tag){
  const grid=document.getElementById("evidence-grid");
  const rows=tag==="ALL"?evidence:evidence.filter(x=>x.tag===tag);
  grid.innerHTML=rows.map(x=>'<article class="evidence"><div class="id">'+x.id+' — '+x.title+'</div><p>'+x.text+'</p><span class="tag">'+x.tag+'</span></article>').join("");
}
document.getElementById("reset-view").onclick=()=>{document.querySelector("#filters button").click();window.scrollTo({top:0,behavior:"smooth"})};

function startTimer(){
  const started=Number(localStorage.getItem("sipi_case_started")||Date.now());
  const end=started+24*60*60*1000;
  const el=document.getElementById("timer");
  const tick=()=>{
    const left=Math.max(0,end-Date.now());
    const h=Math.floor(left/3600000),m=Math.floor((left%3600000)/60000),s=Math.floor((left%60000)/1000);
    el.textContent=[h,m,s].map(v=>String(v).padStart(2,"0")).join(":");
    if(left<=0)el.textContent="00:00:00";
  };
  tick(); setInterval(tick,1000);
}
if(localStorage.getItem("sipi_case_unlocked")==="1"){
  gate.classList.add("hidden"); app.classList.remove("hidden"); boot();
}
