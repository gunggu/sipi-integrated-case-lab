'use strict';
const $=id=>document.getElementById(id),escapeHTML=x=>String(x??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const SECTIONS=['Mandat & ruang lingkup','Payroll','Financial close','ICoFR','ERP & data','Risiko digital','Memo akhir'];
let KEYDATA=null,submissions=[],selected=null,ratings={};
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
function showWorkspace(){const l=$('login'),w=$('workspace');l.classList.add('hidden');w.classList.remove('hidden');$('pass').value='';renderKey();renderList();renderReview()}
async function unlock(){const pwd=$('pass').value;$('unlock').disabled=true;$('loginStatus').textContent='Membuka referensi terenkripsi…';try{KEYDATA=await decryptKey(pwd);showWorkspace()}catch(e){$('loginStatus').textContent='Sandi tidak cocok atau berkas terenkripsi tidak dapat dibuka.'}finally{$('unlock').disabled=false}}
function validSubmission(x){
if(!x||typeof x!=='object'||Array.isArray(x)||x.format!=='SIPI_UAS_REG_INDIVIDUAL_SUBMISSION')throw Error('Bukan JSON final UAS reguler');
if(x.caseVersion!==CASE_VERSION)throw Error('Versi kasus tidak cocok');
if(!x.answers||typeof x.answers!=='object'||Array.isArray(x.answers))throw Error('Jawaban tidak valid');
if(typeof x.identity!=='string'||x.identity.trim().length<3||x.identity.length>500)throw Error('Identitas tidak valid');
const fieldSet=new Set(FIELDS.map(f=>f.id));if(Object.entries(x.answers).some(([k,v])=>!fieldSet.has(k)||typeof v!=='string'||v.length>25000))throw Error('Field jawaban tidak cocok');
if(!Array.isArray(x.documentsRead)||x.documentsRead.some(v=>typeof v!=='string'))throw Error('Dokumen ditelaah tidak valid');
if(!Array.isArray(x.investigations)||x.investigations.length!==5)throw Error('Struktur investigasi tidak valid');
const validIds=new Set(INVESTIGATIONS.flatMap(p=>p.options.map(x=>x[0])));
if(x.investigations.some(p=>!Number.isInteger(p.step)||!Array.isArray(p.chosen)||p.chosen.length>2||p.chosen.some(id=>!validIds.has(id))))throw Error('Pilihan investigasi tidak valid');
return {kind:'json',identity:x.identity.trim(),version:x.caseVersion,answers:Object.fromEntries(Object.entries(x.answers)),docs:x.documentsRead.filter(d=>DOCUMENTS.some(x=>x.id===d)),investigations:x.investigations,locked:x.locked===true,exported:x.exportedAt||'',source:'JSON',raw:x}
}
function validHTML(text){
if(!/^<!doctype html>|^<html/i.test(text.trim()))throw Error('Bukan laporan HTML yang dikenal');
const doc=new DOMParser().parseFromString(text,'text/html');
const heading=doc.querySelector('h1')?.textContent||'';
if(!heading.includes('UAS SIPI Reguler'))throw Error('Laporan HTML tidak sesuai aplikasi UAS reguler');
const meta=doc.querySelector('.meta')?.textContent||'',identity=(meta.match(/Nama\s*\/\s*NIU\s*\/\s*Kelas:\s*([^\n]+?)(?=Kasus|Versi|Status|$)/i)||[])[1]?.trim()||'';
if(!identity)throw Error('Identitas laporan HTML tidak terbaca');
const answers={};for(const h of doc.querySelectorAll('h3')){const id=fieldByLabel.get(h.textContent.trim());if(id){const n=h.nextElementSibling;if(n?.classList.contains('answer'))answers[id]=n.textContent.trim()}}
if(!Object.keys(answers).length)throw Error('Tidak ada isian jawaban dalam HTML');
const docMatches=[...doc.querySelectorAll('h2')].map(h=>h.nextElementSibling?.textContent||'').join(' ');
const docs=[...new Set((docMatches.match(/\b(?:SC|PY|CL|IC|IT|DR)-\d{2}\b/g)||[]))];
const investigations=INVESTIGATIONS.map(p=>({step:p.step,chosen:[],results:[]}));
for(const h of doc.querySelectorAll('h3'))if(h.textContent.trim()==='Pemeriksaan lanjutan'){
let n=h.nextElementSibling;while(n&&n.tagName!=='H2'&&n.tagName!=='H3'){const t=n.textContent||'';const id=t.match(/\b(PYA|PYB|PYC|CLA|CLB|CLC|ICA|ICB|ICC|ITA|ITB|ITC|DRA|DRB|DRC)\b/)?.[1];if(id){const p=INVESTIGATIONS.find(x=>x.options.some(o=>o[0]===id));if(p){const row=investigations.find(x=>x.step===p.step);if(!row.chosen.includes(id))row.chosen.push(id)}}n=n.nextElementSibling}}
return {kind:'html',identity,version:CASE_VERSION,answers,docs,investigations,locked:/Status\s*Final lokal/i.test(meta),exported:'',source:'HTML',raw:null}
}
function norm(v){return String(v||'').trim().toLocaleLowerCase('id').replace(/\s+/g,' ')}
function replaceOrAdd(row){const key=norm(row.identity),pos=submissions.findIndex(s=>norm(s.identity)===key);if(pos<0){submissions.push({id:key,identity:row.identity,json:null,html:null});}const obj=submissions.find(s=>s.id===key);if(obj[row.kind]){if(!confirm('Sudah ada '+row.kind.toUpperCase()+' untuk '+row.identity+'. Ganti berkas?'))return false;}obj[row.kind]=row;selected=selected||key;return true}
async function importFiles(fileList){if(!KEYDATA)return;let ok=0,errors=[];for(const f of fileList){try{if(f.size>3000000)throw Error('Ukuran melebihi 3 MB');const text=await f.text();const row=f.name.toLowerCase().endsWith('.json')?validSubmission(JSON.parse(text)):f.name.toLowerCase().endsWith('.html')?validHTML(text):null;if(!row)throw Error('Hanya JSON final atau HTML laporan');if(replaceOrAdd(row))ok++}catch(e){errors.push(f.name+': '+e.message)}}submissions.sort((a,b)=>a.identity.localeCompare(b.identity,'id'));setStatus(ok+' berkas diterima.'+(errors.length?' Ditolak: '+errors.join('; '):''));renderList();renderReview()}
function renderList(){$('fileCount').textContent=submissions.length+' mahasiswa';$('students').innerHTML=submissions.length?submissions.map(s=>'<button data-id="'+escapeHTML(s.id)+'" class="'+(s.id===selected?'selected':'')+'">'+escapeHTML(s.identity)+'<br><small>'+(s.json?'JSON ':'')+(s.html?'HTML':'')+'</small></button>').join(''):'<p class="small">Belum ada berkas.</p>';$('students').querySelectorAll('[data-id]').forEach(b=>b.onclick=()=>{selected=b.dataset.id;renderList();renderReview()})}
function current(){return submissions.find(x=>x.id===selected)||null}
function compareFiles(s){if(!s.json||!s.html)return'<p class="small">Satu format saja tersedia. Unggah pasangan JSON/HTML untuk melihat konsistensi.</p>';const diff=FIELDS.filter(f=>String(s.json.answers[f.id]||'').trim()!==String(s.html.answers[f.id]||'').trim()).map(f=>f.id);return diff.length?'<div class="flag">Perbedaan JSON vs HTML: '+escapeHTML(diff.join(', '))+'. Periksa versi unggahan sebelum menilai.</div>':'<p class="match">Isian JSON dan HTML cocok untuk seluruh field yang terpetakan.</p>'}
function numericTable(row){return'<h3>Rekonsiliasi numerik · pembanding, bukan nilai otomatis</h3><div class="tablewrap"><table class="smalltable"><tr><th>Field</th><th>Mahasiswa</th><th>Kunci</th><th>Indikasi</th></tr>'+Object.entries(KEYDATA.exactNumbers).map(([key,correct])=>{const n=num(row.answers[key]);return'<tr><td>'+escapeHTML(FIELDS.find(f=>f.id===key)?.label||key)+'</td><td>'+escapeHTML(row.answers[key]??'—')+'</td><td>'+fmt(correct)+'</td><td class="'+(n===correct?'match':'difference')+'">'+(n===correct?'Sesuai':'Tinjau')+'</td></tr>'}).join('')+'</table></div>'}
function investigationTable(row){const inv=row.investigations||[];return'<h3>Investigasi yang tercatat</h3><div class="tablewrap"><table><tr><th>Tahap</th><th>Dipilih</th><th>Hasil menurut kasus</th></tr>'+INVESTIGATIONS.map(p=>{const entry=inv.find(x=>x.step===p.step)||{chosen:[]};const chosen=entry.chosen||[];return'<tr><td>'+escapeHTML(p.title)+'</td><td>'+escapeHTML(chosen.join(', ')||'—')+'</td><td>'+p.options.filter(o=>chosen.includes(o[0])).map(o=>'<p><b>'+escapeHTML(o[0])+'</b>: '+escapeHTML(o[2])+'</p>').join('')+'</td></tr>'}).join('')+'</table></div>'}
function gradeRow(id){const r=ratings[id]||{};return r}
function gradeForm(s){const values=gradeRow(s.id);return '<h3>Rubrik dan skor manual (100 poin)</h3>'+KEYDATA.categories.map(cat=>{const v=values[cat.id]||{score:'',comment:''};return'<div class="rubric"><div class="statline"><b>'+escapeHTML(cat.title)+'</b><label>Skor <input aria-label="Skor '+escapeHTML(cat.title)+'" type="number" min="0" max="'+cat.weight+'" step="0.5" data-score="'+cat.id+'" value="'+escapeHTML(v.score)+'"> / '+cat.weight+'</label></div><ul>'+cat.anchors.map(a=>'<li>'+escapeHTML(a)+'</li>').join('')+'</ul><label class="small" for="comment_'+cat.id+'">Catatan dosen</label><textarea id="comment_'+cat.id+'" data-comment="'+cat.id+'">'+escapeHTML(v.comment)+'</textarea></div>'}).join('')+'<div class="statline"><strong id="total">Belum lengkap</strong><button id="saveReview" class="secondary">Catatan tersimpan dalam sesi</button></div><p class="small">Skor tetap manual. Kunci numerik dan opsi kuat tidak memberi nilai secara otomatis; dosen wajib membaca argumen dan bukti yang tersedia bagi mahasiswa.</p>'}
function answersView(row){return'<h3>Jawaban mahasiswa</h3>'+FIELDS.map(f=>'<div><b>'+escapeHTML(f.label)+'</b><p class="answertext">'+escapeHTML(row.answers[f.id]||'—')+'</p></div>').join('')}
function refreshTotal(){const s=current();if(!s||!KEYDATA)return;const values=ratings[s.id]||{};const complete=KEYDATA.categories.every(c=>values[c.id]&&values[c.id].score!==''&&values[c.id].score!==undefined&&Number.isFinite(Number(values[c.id].score)));$('total').textContent=complete?'Total manual: '+KEYDATA.categories.reduce((x,c)=>x+Number(values[c.id].score),0).toFixed(1)+' / 100':'Penilaian belum lengkap'}
function renderReview(){if(!KEYDATA)return;const s=current();if(!s){$('review').innerHTML='<h2>Pilih mahasiswa</h2><p class="small">Impor JSON atau laporan HTML yang diekspor mahasiswa.</p>';return}const row=s.json||s.html;$('review').innerHTML='<div class="statline"><div><h2>'+escapeHTML(s.identity)+'</h2><p class="small">'+(s.json?'JSON final':'Tanpa JSON')+' · '+(s.html?'HTML laporan':'Tanpa HTML')+' · Final lokal: '+(row.locked?'Ya':'Tidak')+'</p></div><span class="pill">Penilaian dosen</span></div><div class="note">Metadata dan kelengkapan bukan bukti independensi kerja. Verifikasi identitas dan jam pengumpulan melalui LMS.</div>'+compareFiles(s)+'<p><b>Dokumen yang ditandai:</b> '+escapeHTML(row.docs.join(', ')||'—')+'</p>'+numericTable(row)+investigationTable(row)+answersView(row)+gradeForm(s);
$('review').querySelectorAll('[data-score]').forEach(e=>e.oninput=()=>{const cat=KEYDATA.categories.find(c=>c.id===e.dataset.score),v=e.value===''?'':Number(e.value);if(v!==''&&(!Number.isFinite(v)||v<0||v>cat.weight)){e.setCustomValidity('Rentang 0 sampai '+cat.weight);return}e.setCustomValidity('');ratings[s.id]??={};ratings[s.id][cat.id]??={score:'',comment:''};ratings[s.id][cat.id].score=v;refreshTotal()});
$('review').querySelectorAll('[data-comment]').forEach(e=>e.oninput=()=>{ratings[s.id]??={};ratings[s.id][e.dataset.comment]??={score:'',comment:''};ratings[s.id][e.dataset.comment].comment=e.value});
$('saveReview').onclick=()=>{setStatus('Catatan tersimpan dalam sesi browser; cadangkan penilaian untuk penggunaan berikutnya.')};refreshTotal()
}
function renderKey(){if(!KEYDATA)return;$('keyBody').innerHTML='<p>'+escapeHTML(KEYDATA.judgement)+'</p><h3>Prinsip penilaian</h3><ul>'+KEYDATA.gradingPrinciples.map(x=>'<li>'+escapeHTML(x)+'</li>').join('')+'</ul><h3>Referensi pertimbangan keputusan</h3>'+Object.entries(KEYDATA.preferredDecisions).map(([k,x])=>'<div class="info"><b>'+escapeHTML(k)+' · '+escapeHTML(x.strong.join(' / '))+'</b><p>'+escapeHTML(x.note)+'</p></div>').join('')}
function csvSafe(x){let s=String(x??'');if(/^[=+\-@\t\r]/.test(s))s="'"+s;return '"'+s.replace(/"/g,'""')+'"'}
function createDownload(name,data,type){const url=URL.createObjectURL(new Blob([data],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1500)}
function exportScores(){if(!KEYDATA)return;const cols=['identity','hasJSON','hasHTML',...KEYDATA.categories.map(x=>x.id),'total','notes'];const rows=submissions.map(s=>{const v=ratings[s.id]||{},complete=KEYDATA.categories.every(x=>v[x.id]&&v[x.id].score!==''&&v[x.id].score!==undefined);const total=complete?KEYDATA.categories.reduce((n,x)=>n+Number(v[x.id].score),0):'';const all={identity:s.identity,hasJSON:!!s.json,hasHTML:!!s.html,total,notes:KEYDATA.categories.map(x=>x.title+': '+(v[x.id]?.comment||'')).join(' | ')};KEYDATA.categories.forEach(c=>all[c.id]=v[c.id]?.score??'');return cols.map(k=>csvSafe(all[k])).join(',')});createDownload('UAS_SIPI_Reguler_Nilai_Manual.csv','\ufeff'+[cols.map(csvSafe).join(','),...rows].join('\r\n'),'text/csv;charset=utf-8')}
function exportReview(){const data={format:'SIPI_UAS_REG_INSTRUCTOR_REVIEW',version:CASE_VERSION,exportedAt:new Date().toISOString(),students:submissions.map(s=>({identity:s.identity,id:s.id,hasJSON:!!s.json,hasHTML:!!s.html})),ratings};createDownload('UAS_SIPI_Reguler_Penilaian_Backup.json',JSON.stringify(data,null,2),'application/json')}
async function importReview(file){try{if(file.size>1000000)throw Error('Berkas terlalu besar');const x=JSON.parse(await file.text());if(x.format!=='SIPI_UAS_REG_INSTRUCTOR_REVIEW'||x.version!==CASE_VERSION||!x.ratings||typeof x.ratings!=='object')throw Error('Bukan cadangan penilaian');for(const [sid,cats]of Object.entries(x.ratings)){if(typeof cats!=='object')throw Error('Data tidak valid');for(const [cid,r]of Object.entries(cats)){const cat=KEYDATA.categories.find(c=>c.id===cid);if(!cat||!r||typeof r!=='object'||(r.score!==''&&(typeof r.score!=='number'||r.score<0||r.score>cat.weight))||typeof r.comment!=='string')throw Error('Skor di luar rentang')} }if(!confirm('Ganti penilaian pada sesi browser dengan cadangan ini?'))return;ratings=x.ratings;renderReview();setStatus('Penilaian dipulihkan; unggah berkas mahasiswa jika belum tersedia.')}catch(e){setStatus('Cadangan penilaian ditolak: '+e.message)}}
$('unlock').onclick=unlock;$('pass').onkeydown=e=>{if(e.key==='Enter')unlock()};
$('browseFiles').onclick=()=>$('fileImport').click();$('fileImport').onchange=e=>{if(e.target.files.length)importFiles(e.target.files);e.target.value=''};
$('exportScores').onclick=exportScores;$('exportReview').onclick=exportReview;
$('loadScores').onclick=()=>$('scoreImport').click();$('scoreImport').onchange=e=>{if(e.target.files[0])importReview(e.target.files[0]);e.target.value=''};
$('clear').onclick=()=>{if(confirm('Kosongkan berkas dan nilai yang ada di memori sesi ini?')){submissions=[];ratings={};selected=null;renderList();renderReview();setStatus('Sesi dikosongkan.')}};
$('lock').onclick=()=>{KEYDATA=null;submissions=[];ratings={};selected=null;$('workspace').classList.add('hidden');$('login').classList.remove('hidden');$('pass').value='';$('loginStatus').textContent='';setStatus('')}
$('toggleKey').onclick=()=>$('keyBody').classList.toggle('hidden');
