'use strict';
const $=id=>document.getElementById(id),escapeHTML=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SECTIONS=['Mandat & ruang lingkup','Payroll','Financial close','ICoFR','ERP & data','Risiko digital','Memo akhir'];
let KEYDATA=null,submissions=[],selected=null,ratings={};
let ratingsDirty=false;
const fieldByLabel=new Map(FIELDS.map(x=>[x.label,x.id]));
const num=s=>{const str=String(s??'').trim();if(!/^\d+(?:[.,]\d{3})*$/.test(str))return null;const x=Number(str.replace(/[.,]/g,''));return Number.isSafeInteger(x)?x:null};
const fmt=n=>Number.isFinite(n)?new Intl.NumberFormat('id-ID').format(n):'—';
function setStatus(s){$('status').textContent=s||''}
function bytes64(s){const raw=atob(s);return Uint8Array.from(raw,c=>c.charCodeAt(0))}
async function decryptKey(password){
const response=await fetch('./key.enc.json',{cache:'no-store'});if(!response.ok)throw Error('Berkas kunci tidak tersedia');
const blob=await response.json();if(blob.version!==CASE_VERSION||blob.algorithm!=='AES-256-GCM'||blob.compression!=='gzip')throw Error('Versi atau algoritme kunci tidak cocok');
const pass=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);
const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:bytes64(blob.salt),iterations:blob.iterations,hash:'SHA-256'},pass,{name:'AES-GCM',length:256},false,['decrypt']);
const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:bytes64(blob.iv)},key,bytes64(blob.ciphertext));
const stream=new Blob([plain]).stream().pipeThrough(new DecompressionStream('gzip'));
const result=JSON.parse(await new Response(stream).text());
if(result.version!==CASE_VERSION||result.categories.reduce((n,c)=>n+c.weight,0)!==100)throw Error('Referensi kunci tidak valid');
return result
}

function persistRatings(){
 try{
  localStorage.setItem(REVIEW_STORAGE,JSON.stringify({format:'SIPI_UAS_REG_INSTRUCTOR_REVIEW',version:CASE_VERSION,ratings,savedAt:new Date().toISOString()}));
  ratingsDirty=false;return true;
 }catch(e){setStatus('Penyimpanan penilaian gagal. Ekspor cadangan JSON sebelum menutup halaman.');return false}
}
function loadPersistedRatings(){
 try{
  const saved=JSON.parse(localStorage.getItem(REVIEW_STORAGE)||'null');
  if(!saved||saved.version!==CASE_VERSION||saved.format!=='SIPI_UAS_REG_INSTRUCTOR_REVIEW'||!saved.ratings||typeof saved.ratings!=='object')return;
  validateRatings(saved.ratings);ratings=saved.ratings;
 }catch(e){setStatus('Cadangan lokal penilaian tidak terbaca; gunakan file backup JSON.')}
}
function validateRatings(values){
 if(!values||typeof values!=='object'||Array.isArray(values))throw Error('Data skor tidak valid');
 for(const cats of Object.values(values)){
  if(!cats||typeof cats!=='object'||Array.isArray(cats))throw Error('Kategori skor tidak valid');
  for(const [cid,v] of Object.entries(cats)){
   const cat=KEYDATA.categories.find(c=>c.id===cid);
   if(!cat||!v||typeof v!=='object'||(v.score!==''&&(typeof v.score!=='number'||!Number.isFinite(v.score)||v.score<0||v.score>cat.weight))||typeof v.comment!=='string'||v.comment.length>20000)throw Error('Nilai atau komentar tidak valid');
  }
 }
}

function showWorkspace(){const l=$('login'),w=$('workspace');l.classList.add('hidden');w.classList.remove('hidden');$('pass').value='';renderKey();renderList();renderReview()}
async function unlock(){const pwd=$('pass').value;$('unlock').disabled=true;$('loginStatus').textContent='Membuka referensi terenkripsi…';try{KEYDATA=await decryptKey(pwd);loadPersistedRatings();showWorkspace()}catch(e){$('loginStatus').textContent='Sandi tidak cocok atau berkas terenkripsi tidak dapat dibuka.'}finally{$('unlock').disabled=false}}

const REVIEW_STORAGE='sipi-reg-uas-instructor-ratings-v2';
const countWords=s=>String(s??'').trim().split(/\s+/).filter(Boolean).length;
const parseNumber=s=>{const v=String(s??'').trim();if(!/^\d+(?:[.,]\d{3})*$/.test(v))return null;const n=Number(v.replace(/[.,]/g,''));return Number.isSafeInteger(n)?n:null};
function validateAnswers(answers){
 if(!answers||typeof answers!=='object'||Array.isArray(answers))throw Error('Struktur jawaban tidak valid');
 const keys=new Set(FIELDS.map(f=>f.id));
 if(Object.entries(answers).some(([k,v])=>!keys.has(k)||typeof v!=='string'||v.length>25000))throw Error('Field atau isi jawaban tidak dikenal');
 for(const f of FIELDS){
  const v=answers[f.id];
  if(typeof v!=='string')throw Error('Isian wajib tidak ditemukan: '+f.id);
  const ok=f.type==='essay'?countWords(v)>=f.min:f.type==='text'?v.trim().length>=f.min:f.type==='number'?parseNumber(v)!==null:f.type==='select'?f.options.some(o=>o[0]&&o[0]===v):f.type==='check'?v==='yes':false;
  if(!ok)throw Error('Isian belum lengkap: '+f.id);
 }
}
function validateDocumentIDs(ids){
 if(!Array.isArray(ids)||ids.some(x=>typeof x!=='string')||new Set(ids).size!==ids.length)throw Error('Daftar dokumen tidak valid');
 const expected=new Set(DOCUMENTS.map(d=>d.id));
 if(ids.length!==expected.size||ids.some(x=>!expected.has(x)))throw Error('Penelaahan 15 dokumen belum lengkap');
}
function validateInvestigationEntries(entries,requireCommitted){
 if(!Array.isArray(entries)||entries.length!==INVESTIGATIONS.length)throw Error('Jumlah tahap investigasi tidak sesuai');
 if(new Set(entries.map(x=>x?.step)).size!==entries.length)throw Error('Tahap investigasi duplikat');
 for(const p of INVESTIGATIONS){
  const e=entries.find(z=>z?.step===p.step);
  if(!e||!Array.isArray(e.chosen)||e.chosen.length!==p.max||new Set(e.chosen).size!==p.max)throw Error('Pilihan investigasi tidak lengkap pada tahap '+p.step);
  if(e.chosen.some(id=>!p.options.some(z=>z[0]===id)))throw Error('Kode investigasi tidak dikenal');
  if(requireCommitted&&e.committed!==true)throw Error('Investigasi belum ditetapkan pada tahap '+p.step);
  if(e.results!==undefined){
   if(!Array.isArray(e.results)||e.results.length!==p.max||new Set(e.results.map(x=>x?.id)).size!==p.max||e.results.some(x=>!e.chosen.includes(x?.id)||x.result!==p.options.find(z=>z[0]===x.id)?.[2]))throw Error('Hasil investigasi tidak sesuai data kasus');
  }
 }
}
function validSubmission(x){
 if(!x||typeof x!=='object'||Array.isArray(x)||x.format!=='SIPI_UAS_REG_INDIVIDUAL_SUBMISSION')throw Error('Bukan JSON final UAS reguler');
 if(x.caseVersion!==CASE_VERSION)throw Error('Versi kasus tidak cocok');
 if(x.locked!==true||typeof x.lockedAt!=='string'||!x.lockedAt.trim())throw Error('Berkas belum difinalisasi secara lokal');
 if(typeof x.identity!=='string'||x.identity.trim().length<8||x.identity.length>500)throw Error('Identitas tidak valid');
 validateAnswers(x.answers);
 if(x.identity.trim()!==x.answers.identity.trim())throw Error('Identitas header dan jawaban tidak konsisten');
 validateDocumentIDs(x.documentsRead);
 validateInvestigationEntries(x.investigations,true);
 return {kind:'json',identity:x.identity.trim(),version:x.caseVersion,answers:Object.fromEntries(Object.entries(x.answers)),docs:x.documentsRead,investigations:x.investigations,locked:true,exported:x.exportedAt||'',source:'JSON',raw:x}
}


function validHTML(text){
 if(!/^<!doctype html>|^<html/i.test(text.trim()))throw Error('Bukan laporan HTML yang dikenal');
 const doc=new DOMParser().parseFromString(text,'text/html');
 if(!(doc.querySelector('h1')?.textContent||'').includes('UAS SIPI Reguler'))throw Error('Laporan HTML bukan UAS reguler');
 const meta=doc.querySelector('.meta')?.textContent||'';
 const identity=(meta.match(/Nama\s*\/\s*NIU\s*\/\s*Kelas:\s*([^\n]+?)(?=Kasus|Versi|Status|$)/i)||[])[1]?.trim()||'';
 if(!identity||!/Status\s*Final lokal/i.test(meta))throw Error('Laporan HTML belum final atau identitas tidak terbaca');
 const answers={};
 for(const h of doc.querySelectorAll('h3')){
  const id=fieldByLabel.get(h.textContent.trim());
  if(id){if(Object.prototype.hasOwnProperty.call(answers,id))throw Error('Field HTML duplikat: '+id);const n=h.nextElementSibling;if(n?.classList.contains('answer'))answers[id]=n.textContent.trim()}
 }
 validateAnswers(answers);
 if(identity!==answers.identity.trim())throw Error('Identitas HTML tidak konsisten');
 const docMatches=[...doc.querySelectorAll('h2')].map(h=>h.nextElementSibling?.textContent||'').join(' ');
 const docs=[...new Set((docMatches.match(/\b(?:SC|PY|CL|IC|IT|DR)-\d{2}\b/g)||[]))];
 validateDocumentIDs(docs);
 const investigations=INVESTIGATIONS.map(p=>({step:p.step,chosen:[]}));
 for(const h of doc.querySelectorAll('h3'))if(h.textContent.trim()==='Pemeriksaan lanjutan'){
  let n=h.nextElementSibling;while(n&&n.tagName!=='H2'&&n.tagName!=='H3'){
   const t=n.textContent||'',id=t.match(/\b(PYA|PYB|PYC|CLA|CLB|CLC|ICA|ICB|ICC|ITA|ITB|ITC|DRA|DRB|DRC)\b/)?.[1];
   if(id){const p=INVESTIGATIONS.find(x=>x.options.some(o=>o[0]===id));if(p){const row=investigations.find(x=>x.step===p.step);if(!row.chosen.includes(id))row.chosen.push(id)}}
   n=n.nextElementSibling;
  }
 }
 validateInvestigationEntries(investigations,false);
 return {kind:'html',identity,version:CASE_VERSION,answers,docs,investigations,locked:true,exported:'',source:'HTML',raw:null}
}

function norm(v){return String(v||'').trim().toLocaleLowerCase('id').replace(/\s+/g,' ')}
function replaceOrAdd(row){const key=norm(row.identity),pos=submissions.findIndex(s=>norm(s.identity)===key);if(pos<0)submissions.push({id:key,identity:row.identity,json:null,html:null});const obj=submissions.find(s=>s.id===key);if(obj[row.kind]&&!confirm('Sudah ada '+row.kind.toUpperCase()+' untuk '+row.identity+'. Ganti berkas?'))return false;obj[row.kind]=row;selected=selected||key;return true}
async function importFiles(fileList){if(!KEYDATA)return;let ok=0,errors=[];for(const f of fileList){try{if(f.size>3000000)throw Error('Ukuran melebihi 3 MB');const text=await f.text();const row=f.name.toLowerCase().endsWith('.json')?validSubmission(JSON.parse(text)):f.name.toLowerCase().endsWith('.html')?validHTML(text):null;if(!row)throw Error('Hanya JSON final atau HTML laporan');if(replaceOrAdd(row))ok++}catch(e){errors.push(f.name+': '+e.message)}}submissions.sort((a,b)=>a.identity.localeCompare(b.identity,'id'));setStatus(ok+' berkas diterima.'+(errors.length?' Ditolak: '+errors.join('; '):''));renderList();renderReview()}
function renderList(){$('fileCount').textContent=submissions.length+' mahasiswa';$('students').innerHTML=submissions.length?submissions.map(s=>'<button data-id="'+escapeHTML(s.id)+'" class="'+(s.id===selected?'selected':'')+'">'+escapeHTML(s.identity)+'<br><small>'+(s.json?'JSON ':'')+(s.html?'HTML':'')+'</small></button>').join(''):'<p class="small">Belum ada berkas.</p>';$('students').querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>{selected=b.dataset.id;renderList();renderReview()})}
function current(){return submissions.find(x=>x.id===selected)||null}

function pairDifferences(s){
 if(!s.json||!s.html)return ['Pasangan JSON/HTML belum lengkap'];
 const diff=FIELDS.filter(f=>String(s.json.answers[f.id]||'').trim()!==String(s.html.answers[f.id]||'').trim()).map(f=>f.id);
 if([...s.json.docs].sort().join('|')!==[...s.html.docs].sort().join('|'))diff.push('documentsRead');
 for(const p of INVESTIGATIONS){
  const j=s.json.investigations.find(x=>x.step===p.step),h=s.html.investigations.find(x=>x.step===p.step);
  if((j?.chosen||[]).slice().sort().join('|')!==(h?.chosen||[]).slice().sort().join('|'))diff.push('investigation_'+p.step);
 }
 if(s.json.identity!==s.html.identity)diff.push('identity');
 return diff;
}
function compareFiles(s){
 const diff=pairDifferences(s);
 if(!s.json||!s.html)return '<div class="flag">Pasangan '+(s.json?'HTML':'JSON final')+' belum diimpor. Penilaian sebaiknya dilakukan setelah kedua berkas tersedia.</div>';
 return diff.length?'<div class="flag"><strong>PERBEDAAN HTML–JSON:</strong> '+escapeHTML(diff.join(', '))+'. Verifikasi dengan mahasiswa dan eLOK sebelum menilai.</div>':'<p class="match">Isi dan investigasi HTML–JSON konsisten. Keaslian tetap diverifikasi melalui eLOK.</p>';
}

function numericTable(row){return'<h3>Rekonsiliasi numerik · pembanding, bukan nilai otomatis</h3><div class="tablewrap"><table class="smalltable"><tr><th>Field</th><th>Mahasiswa</th><th>Kunci</th><th>Indikasi</th></tr>'+Object.entries(KEYDATA.exactNumbers).map(([key,correct])=>{const n=num(row.answers[key]);return'<tr><td>'+escapeHTML(FIELDS.find(f=>f.id===key)?.label||key)+'</td><td>'+escapeHTML(row.answers[key]??'—')+'</td><td>'+fmt(correct)+'</td><td class="'+(n===correct?'match':'difference')+'">'+(n===correct?'Sesuai':'Tinjau')+'</td></tr>'}).join('')+'</table></div>'}
function investigationTable(row){const inv=row.investigations||[];return'<h3>Investigasi yang tercatat</h3><div class="tablewrap"><table><tr><th>Tahap</th><th>Dipilih</th><th>Hasil menurut kasus</th></tr>'+INVESTIGATIONS.map(p=>{const entry=inv.find(x=>x.step===p.step)||{chosen:[]};const chosen=entry.chosen||[];return'<tr><td>'+escapeHTML(p.title)+'</td><td>'+escapeHTML(chosen.join(', ')||'—')+'</td><td>'+p.options.filter(o=>chosen.includes(o[0])).map(o=>'<p><b>'+escapeHTML(o[0])+'</b>: '+escapeHTML(o[2])+'</p>').join('')+'</td></tr>'}).join('')+'</table></div>'}
function gradeRow(id){const r=ratings[id]||{};return r}
function gradeForm(s){const values=gradeRow(s.id);return '<h3>Rubrik dan skor manual (100 poin)</h3>'+KEYDATA.categories.map(cat=>{const v=values[cat.id]||{score:'',comment:''};return'<div class="rubric"><div class="statline"><b>'+escapeHTML(cat.title)+'</b><label>Skor <input aria-label="Skor '+escapeHTML(cat.title)+'" type="number" min="0" max="'+cat.weight+'" step="0.5" data-score="'+cat.id+'" value="'+escapeHTML(v.score)+'"> / '+cat.weight+'</label></div><ul>'+cat.anchors.map(a=>'<li>'+escapeHTML(a)+'</li>').join('')+'</ul><label class="small" for="comment_'+cat.id+'">Catatan dosen</label><textarea id="comment_'+cat.id+'" data-comment="'+cat.id+'">'+escapeHTML(v.comment)+'</textarea></div>'}).join('')+'<div class="statline"><strong id="total">Belum lengkap</strong><button id="saveReview" class="secondary">Simpan dan cadangkan penilaian</button></div><p class="small">Skor tetap manual. Kunci numerik dan opsi kuat tidak memberi nilai secara otomatis; dosen wajib membaca argumen dan bukti yang tersedia bagi mahasiswa.</p>'}
function answersView(row){return'<h3>Jawaban mahasiswa</h3>'+FIELDS.map(f=>'<div><b>'+escapeHTML(f.label)+'</b><p class="answertext">'+escapeHTML(row.answers[f.id]||'—')+'</p></div>').join('')}
function refreshTotal(){const s=current();if(!s||!KEYDATA)return;const values=ratings[s.id]||{};const complete=KEYDATA.categories.every(c=>values[c.id]&&values[c.id].score!==''&&values[c.id].score!==undefined&&Number.isFinite(Number(values[c.id].score)));$('total').textContent=complete?'Total manual: '+KEYDATA.categories.reduce((x,c)=>x+Number(values[c.id].score),0).toFixed(1)+' / 100':'Penilaian belum lengkap'}
function renderReview(){if(!KEYDATA)return;const s=current();if(!s){$('review').innerHTML='<h2>Pilih mahasiswa</h2><p class="small">Impor JSON atau laporan HTML yang diekspor mahasiswa.</p>';return}const row=s.json||s.html;$('review').innerHTML='<div class="statline"><div><h2>'+escapeHTML(s.identity)+'</h2><p class="small">'+(s.json?'JSON final':'Tanpa JSON')+' · '+(s.html?'HTML laporan':'Tanpa HTML')+' · Final lokal: '+(row.locked?'Ya':'Tidak')+'</p></div><span class="pill">Penilaian dosen</span></div><div class="note">Metadata dan kelengkapan bukan bukti independensi kerja. Verifikasi identitas dan jam pengumpulan melalui LMS.</div>'+compareFiles(s)+'<p><b>Dokumen yang ditandai:</b> '+escapeHTML(row.docs.join(', ')||'—')+'</p>'+numericTable(row)+investigationTable(row)+answersView(row)+gradeForm(s);
$('review').querySelectorAll('[data-score]').forEach(e=>e.oninput=()=>{const cat=KEYDATA.categories.find(c=>c.id===e.dataset.score),v=e.value===''?'':Number(e.value);if(v!==''&&(!Number.isFinite(v)||v<0||v>cat.weight)){e.setCustomValidity('Rentang 0 sampai '+cat.weight);return}e.setCustomValidity('');ratings[s.id]??={};ratings[s.id][cat.id]??={score:'',comment:''};ratings[s.id][cat.id].score=v;ratingsDirty=true;persistRatings();refreshTotal()});
$('review').querySelectorAll('[data-comment]').forEach(e=>e.oninput=()=>{ratings[s.id]??={};ratings[s.id][e.dataset.comment]??={score:'',comment:''};ratings[s.id][e.dataset.comment].comment=e.value;ratingsDirty=true;persistRatings()});
$('saveReview').onclick=()=>{setStatus(persistRatings()?'Penilaian tersimpan di browser ini. Unduh backup JSON untuk cadangan terpisah.':'Gagal menyimpan; unduh backup JSON.')};refreshTotal()
}
function renderKey(){if(!KEYDATA)return;$('keyBody').innerHTML='<p>'+escapeHTML(KEYDATA.judgement)+'</p><h3>Prinsip penilaian</h3><ul>'+KEYDATA.gradingPrinciples.map(x=>'<li>'+escapeHTML(x)+'</li>').join('')+'</ul><h3>Referensi pertimbangan keputusan</h3>'+Object.entries(KEYDATA.preferredDecisions).map(([k,x])=>'<div class="info"><b>'+escapeHTML(k)+' · '+escapeHTML(x.strong.join(' / '))+'</b><p>'+escapeHTML(x.note)+'</p></div>').join('')}
function csvSafe(x){let s=String(x??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"'}
function createDownload(name,data,type){const url=URL.createObjectURL(new Blob([data],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)}
function exportScores(){if(!KEYDATA)return;persistRatings();const cols=['identity','hasJSON','hasHTML','verification',...KEYDATA.categories.map(x=>x.id),'total','notes'];const rows=submissions.map(s=>{const v=ratings[s.id]||{},complete=KEYDATA.categories.every(x=>v[x.id]&&v[x.id].score!==''&&v[x.id].score!==undefined);const total=complete?KEYDATA.categories.reduce((n,x)=>n+Number(v[x.id].score),0):'';const all={identity:s.identity,hasJSON:!!s.json,hasHTML:!!s.html,verification:pairDifferences(s).length?'PERLU VERIFIKASI':'COCOK',total,notes:KEYDATA.categories.map(x=>x.title+': '+(v[x.id]?.comment||'')).join(' | ')};KEYDATA.categories.forEach(c=>all[c.id]=v[c.id]?.score??'');return cols.map(k=>csvSafe(all[k])).join(',')});createDownload('UAS_SIPI_Reguler_Nilai_Manual.csv','\ufeff'+[cols.map(csvSafe).join(','),...rows].join('\r\n'),'text/csv;charset=utf-8')}
function exportReview(){persistRatings();const data={format:'SIPI_UAS_REG_INSTRUCTOR_REVIEW',version:CASE_VERSION,exportedAt:new Date().toISOString(),students:submissions.map(s=>({identity:s.identity,id:s.id,hasJSON:!!s.json,hasHTML:!!s.html})),ratings};createDownload('UAS_SIPI_Reguler_Penilaian_Backup.json',JSON.stringify(data,null,2),'application/json')}
async function importReview(file){try{if(file.size>1000000)throw Error('Berkas terlalu besar');const x=JSON.parse(await file.text());if(x.format!=='SIPI_UAS_REG_INSTRUCTOR_REVIEW'||x.version!==CASE_VERSION)throw Error('Bukan cadangan penilaian');validateRatings(x.ratings);if(!confirm('Ganti penilaian saat ini dengan cadangan ini?'))return;ratings=x.ratings;persistRatings();renderReview();setStatus('Penilaian dipulihkan dan disimpan di browser ini.')}catch(e){setStatus('Cadangan penilaian ditolak: '+e.message)}}
$('unlock').onclick=unlock;$('pass').onkeydown=e=>{if(e.key==='Enter')unlock()};
$('browseFiles').onclick=()=>$('fileImport').click();$('fileImport').onchange=e=>{if(e.target.files.length)importFiles(e.target.files);e.target.value=''};
$('exportScores').onclick=exportScores;$('exportReview').onclick=exportReview;
$('loadScores').onclick=()=>$('scoreImport').click();$('scoreImport').onchange=e=>{if(e.target.files[0])importReview(e.target.files[0]);e.target.value=''};
$('clear').onclick=()=>{if(confirm('Kosongkan berkas dan nilai yang ada di memori sesi ini?')){submissions=[];ratings={};selected=null;persistRatings();renderList();renderReview();setStatus('Sesi dan nilai lokal dikosongkan.')}};
$('lock').onclick=()=>{persistRatings();KEYDATA=null;submissions=[];ratings={};selected=null;$('workspace').classList.add('hidden');$('login').classList.remove('hidden');$('pass').value='';$('loginStatus').textContent='';setStatus('')}
$('toggleKey').onclick=()=>$('keyBody').classList.toggle('hidden');
