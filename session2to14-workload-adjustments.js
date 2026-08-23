(function(){
  const get=n=>sessions.find(s=>s.n===n);
  const add=(s,text)=>{ if(s && s.instructor && !s.instructor.expected.includes(text)) s.instructor.expected.push(text); };

  // Session 2 — reduce artefact count; retain core data-cycle judgement.
  let s=get(2);
  if(s){
    s.metrics=[['8–10','Key risks'],['6+','CDEs embedded in analysis'],['2','Publication decisions']];
    s.mission='Gunakan Applied Case 2 sebagai sumber konteks dan tugas utama. Untuk beban mingguan yang proporsional, hasil kelompok cukup berupa: (1) satu data-flow map yang menggabungkan activity-resource-party, dokumen/file dan batch/real-time/hybrid; (2) risk-control-evidence matrix 8–10 risiko utama; dan (3) keputusan terpisah untuk dashboard dan AI summary disertai memo singkat. Critical data elements tetap dianalisis, tetapi tidak perlu menjadi dokumen data-dictionary terpisah; masukkan minimal 6 CDE ke map/matrix.';
    add(s,'Workload rule: collect only three formal outputs—one integrated data-flow map, one 8–10 row risk-control-evidence matrix, and one publication-decision memo covering dashboard and AI separately. Do not require a separate standalone data dictionary.');
  }

  // Session 3 — conceptually rich, but keep deliverables to three synthesis outputs.
  s=get(3);
  if(s){
    s.metrics=[['3','Formal outputs'],['1','Readiness gate summary'],['1','Go-live decision']];
    add(s,'Workload rule: do not require separate written submissions for vendor scorecard, fit-gap, and readiness evidence. Combine them into three outputs only: vendor/fit-gap assessment, readiness-gate table, and steering-committee decision memo.');
  }

  // Session 4 — reduce framework overload.
  s=get(4);
  if(s){
    s.metrics=[['6–8','Key RCE rows'],['1–2','Relevant frameworks'],['1','Control conclusion']];
    s.mission='Gunakan Applied Case 4 sebagai sumber konteks utama dan mock app sebagai evidence environment. Fokuskan pekerjaan pada 6–8 objective-risk-control-evidence rows yang paling penting, klasifikasi design/operating/monitoring deficiency, Three Lines, dan conclusion apakah controls present, functioning, and integrated. Mahasiswa tidak wajib menggunakan COSO, ERM, dan COBIT sekaligus; pilih framework yang paling relevan dan jelaskan alasannya.';
    add(s,'Workload rule: require 6–8 strong rows, not a 10-row quantity target, and do not require simultaneous use of COSO, ERM, and COBIT. One or two well-justified frameworks are sufficient.');
  }

  // Session 5 — full audit program over all six objectives is too heavy for weekly homework.
  s=get(5);
  if(s){
    s.metrics=[['3 of 6','Objectives for full audit work'],['3','Formal findings max'],['1','Overall evidence-basis view']];
    s.mission='Gunakan Applied Case 5 sebagai sumber konteks utama. Untuk tugas mingguan, pilih 3 dari 6 audit objectives untuk dianalisis secara penuh: system-review procedure, control test, evidence assessment, alternative procedure bila perlu, dan conclusion. Mahasiswa tetap membaca seluruh evidence untuk memberi overall evidence-basis assessment, tetapi tidak perlu menyusun full audit program untuk keenam objective.';
    s.instructor.rubric='Selected-objective mapping 20%; audit-program quality 25%; analytics/evidence validation 25%; findings and conclusions 20%; audit-committee memo 10%.';
    add(s,'Workload rule: full-depth audit work is required for only three of the six objectives. Limit formal findings to the three most material; use the remaining issues only for the overall evidence-basis discussion.');
  }

  // Session 6 — keep practical nature, moderate the quantity target.
  s=get(6);
  if(s){
    s.metrics=[['8–10','Key risks'],['6','Core exceptions'],['4','Decision actions']];
    s.mission='Gunakan Applied Case 6 sebagai konteks utama. Petakan revenue dan expenditure cycle secara ringkas, pilih 8–10 risiko paling material dari enam exception utama, rancang control/evidence response, lalu tentukan record-level action release, hold, reverse/cancel, atau escalate. Satu exception dapat menghasilkan lebih dari satu risk row bila objective atau downstream consequence berbeda.';
    add(s,'Workload rule: 8–10 well-justified risk rows are sufficient; do not force 12 rows. Prioritise the six core exceptions and cross-cycle consequences.');
  }

  // Session 7 — focus on three reconciliation blocks and eight key rows.
  s=get(7);
  if(s){
    s.metrics=[['8','Key threat-control rows'],['3','Reconciliation blocks'],['1','Margin/WIP decision']];
    s.mission='Gunakan Applied Case 7 dan mock app untuk menghubungkan physical, digital, and cost flow. Hasil formal cukup: (1) satu integrated flow map; (2) 8 key threat-control-evidence rows; (3) tiga reconciliation blocks—material, WIP, dan margin-release readiness—yang memasukkan isu BOM/MRP/MES/scrap/overhead bila relevan; dan (4) memo release/qualify/hold. Tidak perlu membuat rekonsiliasi terpisah untuk setiap artefak.';
    add(s,'Workload rule: require eight key rows and only three formal reconciliation blocks—material, WIP, and margin-release readiness. BOM, MRP, MES, scrap, and overhead should feed those blocks rather than become separate deliverables.');
  }

  // Session 8 — keep concrete payroll case but remove unnecessary row inflation.
  s=get(8);
  if(s){
    s.metrics=[['8–10','Key risks'],['6','Core payroll issues'],['1','Overall payroll decision']];
    add(s,'Workload rule: 8–10 risk-control-evidence rows are sufficient. Keep the six core payroll issues and record-level actions; do not require additional risks merely to reach 12.');
  }

  // Session 9 — preserve per-output judgement, reduce matrix size.
  s=get(9);
  if(s){
    s.metrics=[['8–10','Key reporting risks'],['3+','Per-output decisions'],['1','Close/publication memo']];
    s.mission='Gunakan Applied Case 9 sebagai konteks utama. Fokus pada 8–10 material reporting risks, satu close-blocker table, dan keputusan Release/Hold/Qualify per output. Financial statements, XBRL, AI narrative, dan managerial output tetap dinilai terpisah bila relevan; jangan memperbesar beban dengan matriks 12+ rows bila isu utama sudah tercakup.';
    add(s,'Workload rule: cap the formal matrix at 8–10 key rows. Preserve the per-output publication decision because that is the highest-value professional judgement in this session.');
  }

  // Session 10 — guided ICoFR case; do not make students build full scoping from zero.
  s=get(10);
  if(s){
    s.metrics=[['4','Key controls for full evaluation'],['1','Guided scope'],['1','ICoFR conclusion']];
    s.mission='Gunakan Applied Case 10 sebagai guided ICoFR case. Gunakan initial scope yang disediakan dosen/case sebagai starting point; mahasiswa tidak perlu membangun full ICoFR scope dari nol. Evaluasi secara penuh 4 key controls: revenue review precision; manual journals/SoD; privileged-access review; dan close/reporting review (menggunakan suspense/XBRL evidence). Gunakan management-override communication sebagai qualitative factor dalam aggregation, lalu simpulkan ICoFR effective atau ineffective.';
    s.instructor.rubric='Guided scoping and RCM 15%; four-control design/operating evaluation 30%; deficiency severity and aggregation 25%; communication/remediation 15%; conclusion and memo 15%.';
    add(s,'Workload rule: provide an initial scope and require full design/implementation/operating-effectiveness analysis for four key controls only. Use the remaining case issues as aggregation or qualitative-factor evidence, not as separate full control workpapers.');
  }

  // Session 11 — integrated case remains more demanding, but still bounded.
  s=get(11);
  if(s){
    s.metrics=[['10','Key integrated risks'],['2','Separate decisions'],['7 min','Presentation']];
    s.mission='Gunakan Applied Case 11 sebagai integrated homework. Hasil formal dibatasi pada satu integrated map, 10 key objective-risk-control-evidence rows, satu closure-priority table, keputusan operations dan reporting secara terpisah, presentasi 7 menit, dan memo 300 kata. Jangan membuat workpaper tambahan di luar artefak tersebut.';
    add(s,'Workload rule: ten integrated risk rows are sufficient. Keep the seven-minute presentation and 300-word memo to force prioritisation rather than exhaustive documentation.');
  }

  // Session 12 — large synthesis, but bounded to ten risks and four decisions.
  s=get(12);
  if(s){
    s.metrics=[['10','Key integrated risks'],['4','Separate decisions'],['8 min','Presentation']];
    s.mission='Gunakan Student Learning Pack Sesi 12 sebagai integrated synthesis case. Hasil formal: satu payroll-to-report map, 10 key risk-control-evidence rows, satu deficiency-aggregation table, empat keputusan terpisah—financial statements, XBRL, AI narrative, dan ICoFR—serta presentasi 8 menit/memo ringkas. Tidak perlu membuat workpaper terpisah untuk setiap evidence object.';
    add(s,'Workload rule: ten key rows are sufficient. Keep four separate decisions, but collapse detailed workpapers into one aggregation table and one concise presentation/memo.');
  }

  // Session 13 — not weekly homework; streamline in-class readiness outputs.
  s=get(13);
  if(s){
    s.metrics=[['6','Core technology issues'],['1','30/60/90 plan'],['1','Readiness decision']];
    s.mission='Gunakan Student Learning Pack Sesi 13 sebagai readiness review, bukan PR mingguan. Analisis enam core technology issues dalam satu objective-risk-control-owner-evidence-remediation matrix, gabungkan tindak lanjut ke satu 30/60/90 plan, lalu tetapkan Ready/Conditionally ready/Not ready dan tiga personal study priorities. Jangan membuat matrix terpisah untuk tiap teknologi.';
    add(s,'Workload rule: one consolidated six-issue matrix plus one 30/60/90 plan is enough. The Bab 1–9 readiness reflection may be concise and should not duplicate the technology matrix.');
  }

  // Session 14 — capstone should test prioritisation, not exhaustive writing on every record.
  s=get(14);
  if(s){
    s.metrics=[['5','Priority I-P-A-R-E-C issue blocks'],['5','Separate decisions'],['3','Personal actions']];
    s.mission='Gunakan Sesi 14 sebagai capstone/mock certification, bukan tugas exhaustif atas seluruh evidence. Pilih 5 priority issues yang paling material untuk dijawab penuh dengan I-P-A-R-E-C. Evidence lainnya digunakan untuk aggregation/context. Tetap buat lima keputusan terpisah—operations, financial statements, XBRL, AI narrative, ICoFR—lalu peer review dan tiga-action personal readiness plan.';
    add(s,'Workload rule: require five full I-P-A-R-E-C issue blocks, not one full block for every evidence object. Reward prioritisation and integrated judgement.');
  }

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)>=2 && Number(select.value)<=14){
    select.dispatchEvent(new Event('change'));
  }
})();