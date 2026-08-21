(function(){
  const esc=(v)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const nl=(v)=>esc(v||'Belum diisi').replace(/\n/g,'<br>');
  const yesNo=(v)=>v?'Ya':'Tidak';
  const fmtDate=(d)=>new Intl.DateTimeFormat('id-ID',{dateStyle:'long',timeStyle:'medium'}).format(d);

  function syncLiveAnswerFields(){
    const notes=document.getElementById('notes');
    const why=document.getElementById('why');
    if(notes) state[`notes-${current}`]=notes.value;
    if(why) state[`why-${current}`]=why.value;
    save();
  }

  function answerStatus(value){
    return String(value||'').trim()?'<span class="pr-ok">Terisi</span>':'<span class="pr-missing">Belum diisi</span>';
  }

  function detailedEvidenceRows(s){
    return s.evidence.map((_,i)=>{
      const e=evidenceObj(s,i);
      const reviewed=!!state[`ev-${current}-${i}`];
      const cited=!!state[`cite-${current}-${e.id}`];
      return `<tr><td><strong>${esc(e.id)}</strong><br><span>${esc(e.type)}</span></td><td><strong>${esc(e.title)}</strong><br>${esc(e.detail)}</td><td>${esc(e.status)}<br>Reliability: ${esc(e.reliability)}<br>Period: ${esc(e.period)}</td><td>${yesNo(reviewed)}</td><td>${yesNo(cited)}</td><td>${esc(e.limitation)}</td></tr>`;
    }).join('');
  }

  function recordRows(s){
    return s.records.map((r,i)=>`<tr><td><strong>${esc(r[0])}</strong></td><td>${esc(r[1])}</td><td>${esc(r[2])}</td><td>${esc(r[3])}</td><td>${yesNo(!!state[`rec-${current}-${i}`])}</td><td>${yesNo(!!state[`clue-${current}-${i}`])}</td></tr>`).join('');
  }

  function buildPrintReport(){
    syncLiveAnswerFields();
    const s=session();
    const citations=selectedCitations(s);
    const notes=state[`notes-${current}`]||'';
    const decision=state[`decision-${current}`]||'';
    const justification=state[`why-${current}`]||'';
    const material=s.records.filter((_,i)=>state[`clue-${current}-${i}`]).map(r=>r[0]);
    const reviewedRecords=s.records.filter((_,i)=>state[`rec-${current}-${i}`]).map(r=>r[0]);
    const reviewedEvidence=s.evidence.map((_,i)=>({e:evidenceObj(s,i),i})).filter(x=>state[`ev-${current}-${x.i}`]).map(x=>x.e.id);
    const progress=document.getElementById('progressText')?.textContent||'';
    const missing=[];
    if(!notes.trim()) missing.push('Investigation Notebook / I-P-A-R-E-C notes');
    if(!decision.trim()) missing.push('Decision Gate');
    if(!justification.trim()) missing.push('Structured justification');
    if(!citations.length) missing.push('Evidence citations');

    const root=document.createElement('div');
    root.id='printReportRoot';
    root.innerHTML=`<article class="pr-report">
      <header class="pr-header"><div><div class="pr-kicker">PPAk FEB UGM • Sistem Informasi dan Pengendalian Internal</div><h1>SIPI Integrated Case &amp; Certification Lab</h1><h2>Sesi ${s.n} — ${esc(s.title)}</h2><p>PT NusaNiaga • Laporan jawaban mahasiswa lengkap</p></div><div class="pr-meta"><div><b>Dicetak:</b> ${esc(fmtDate(new Date()))}</div><div><b>Mode:</b> ${esc(role)}</div><div><b>Progress:</b> ${esc(progress)}</div></div></header>
      <section class="pr-section pr-summary"><h3>1. Ringkasan Kelengkapan Jawaban</h3><div class="pr-grid4"><div><span>Catatan investigasi</span>${answerStatus(notes)}</div><div><span>Keputusan</span>${answerStatus(decision)}</div><div><span>Justifikasi</span>${answerStatus(justification)}</div><div><span>Evidence citation</span>${citations.length?`<span class="pr-ok">${citations.length} dipilih</span>`:'<span class="pr-missing">Belum dipilih</span>'}</div></div>${missing.length?`<div class="pr-warning"><b>Bagian belum lengkap:</b> ${missing.map(esc).join('; ')}.</div>`:'<div class="pr-success"><b>Semua komponen jawaban utama terisi.</b></div>'}</section>
      <section class="pr-section"><h3>2. Investigation Notebook — I-P-A-R-E-C</h3><div class="pr-answer">${nl(notes)}</div></section>
      <section class="pr-section"><h3>3. Material Clues yang Dipilih Mahasiswa</h3><p><b>Material clues:</b> ${material.length?material.map(esc).join(', '):'Tidak ada yang dipilih.'}</p><table class="pr-table"><thead><tr><th>ID</th><th>Area</th><th>Condition</th><th>Status</th><th>Record dibuka</th><th>Material clue</th></tr></thead><tbody>${recordRows(s)}</tbody></table><p class="pr-small"><b>Record yang telah dibuka:</b> ${reviewedRecords.length?reviewedRecords.map(esc).join(', '):'Tidak ada.'}</p></section>
      <section class="pr-section"><h3>4. Evidence Review dan Citation Trace</h3><p><b>Evidence yang telah direview:</b> ${reviewedEvidence.length?reviewedEvidence.map(esc).join(', '):'Tidak ada.'}</p><p><b>Evidence yang dicite dalam basis keputusan:</b> ${citations.length?citations.map(esc).join(', '):'Tidak ada.'}</p><table class="pr-table pr-evidence-table"><thead><tr><th>Evidence</th><th>Isi</th><th>Status / reliability</th><th>Direview</th><th>Dicite</th><th>Limitation</th></tr></thead><tbody>${detailedEvidenceRows(s)}</tbody></table></section>
      <section class="pr-section pr-page-break"><h3>5. Decision Gate</h3><div class="pr-decision"><span>Keputusan mahasiswa</span><strong>${esc(decision||'Belum dipilih')}</strong></div><h4>Structured justification</h4><div class="pr-answer">${nl(justification)}</div><h4>Evidence citations</h4><div class="pr-citations">${citations.length?citations.map(x=>`<span>${esc(x)}</span>`).join(''):'<em>Belum ada evidence citation.</em>'}</div></section>
      <section class="pr-section"><h3>6. Auditability / Submission Trace</h3><table class="pr-keyvalue"><tr><th>Session</th><td>${s.n} — ${esc(s.title)}</td></tr><tr><th>Mission</th><td>${esc(s.mission)}</td></tr><tr><th>Progress saat ekspor</th><td>${esc(progress)}</td></tr><tr><th>Browser storage</th><td>Jawaban bersumber dari state/localStorage aplikasi pada browser saat laporan dibuat.</td></tr><tr><th>Catatan</th><td>Textarea aktif disinkronkan sebelum print agar seluruh jawaban panjang dirender sebagai teks biasa, bukan sebagai kotak textarea yang terpotong.</td></tr></table></section>
      <footer class="pr-footer">Generated by SIPI Integrated Case &amp; Certification Lab • PT NusaNiaga simulation • ${esc(new Date().toISOString())}</footer>
    </article>`;
    return root;
  }

  function cleanupPrintReport(){
    document.body.classList.remove('printing-detailed-report');
    document.getElementById('printReportRoot')?.remove();
  }

  function prepareDetailedReport(){
    if(document.body.classList.contains('printing-detailed-report')&&document.getElementById('printReportRoot')) return;
    cleanupPrintReport();
    document.body.appendChild(buildPrintReport());
    document.body.classList.add('printing-detailed-report');
  }

  function printDetailedReport(){
    prepareDetailedReport();
    requestAnimationFrame(()=>requestAnimationFrame(()=>window.print()));
  }

  window.addEventListener('beforeprint',()=>{
    prepareDetailedReport();
  });
  window.addEventListener('afterprint',()=>{
    cleanupPrintReport();
  });

  const btn=document.getElementById('printReport');
  if(btn){
    btn.textContent='Print/PDF Lengkap';
    btn.title='Cetak seluruh jawaban mahasiswa secara lengkap. Berlaku juga untuk Ctrl+P / Print dari browser.';
    btn.onclick=printDetailedReport;
  }
  window.printDetailedReport=printDetailedReport;
  window.prepareDetailedReport=prepareDetailedReport;
})();
