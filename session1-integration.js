(function(){
  const s1=sessions.find(s=>s.n===1);
  if(!s1)return;

  Object.assign(s1,{
    title:'Sistem Informasi, Tanggung Jawab, Risiko, dan Tata Kelola',
    mission:'Gunakan Applied Case 1 mahasiswa sebagai sumber konteks dan tugas utama. Gunakan mock app ini sebagai evidence environment untuk memetakan system boundary, enam komponen sistem informasi, pihak eksternal, ownership, risiko, control design, evidence, monitoring, goal conflict, dan responsible digitalization. Jangan memperlakukan indikator di aplikasi sebagai kesimpulan; gunakan bukti untuk mendukung risk-control-evidence matrix dan memo CFO.',
    metrics:[['10+','Risks required'],['6','SI components'],['1','Cross-functional governance conclusion']],
    modules:['System boundary & responsibility','Access, interfaces & operations','Responsible digitalization & reporting'],
    moduleRecords:[
      [
        ['CLD-01-01','Cloud responsibility','Company retains responsibility for selected user configuration and backup controls','Assess ownership','warn'],
        ['EXT-01-02','External ecosystem','Marketplace, gateway, bank, cloud vendor, suppliers and digital platforms participate in the information flow','Map boundary','ok']
      ],
      [
        ['IF-01-03','Interface transactions','Missing and duplicate transactions have occurred; interface logs are not routinely reviewed','Investigate / reconcile','alert'],
        ['ACC-01-04','Administrator access','A shared administrator account exists','Review / remediate','alert'],
        ['IOT-01-05','Warehouse IoT','Sensor feed was offline for six hours','Assess fallback / completeness','warn'],
        ['SET-01-06','Settlement reconciliation','Reconciliation is triggered only when cash differences exceed Rp100 million','Assess threshold / frequency','warn']
      ],
      [
        ['PRV-01-07','Customer data use','Marketplace customer data is combined without documented purpose and retention rules','Governance gap','alert'],
        ['BC-01-08','Blockchain source','Shipment status depends on manual supplier input before being recorded','Validate source/oracle','warn'],
        ['AI-01-09','AI performance narrative','AI used a spreadsheet without final approval and stated sales increased before one marketplace feed arrived','Do not rely without validation','alert']
      ]
    ],
    records:[
      ['CLD-01-01','Cloud responsibility','Company retains responsibility for selected user configuration and backup controls','Assess ownership','warn'],
      ['EXT-01-02','External ecosystem','Marketplace, gateway, bank, cloud vendor, suppliers and digital platforms participate in the information flow','Map boundary','ok'],
      ['IF-01-03','Interface transactions','Missing and duplicate transactions have occurred; interface logs are not routinely reviewed','Investigate / reconcile','alert'],
      ['ACC-01-04','Administrator access','A shared administrator account exists','Review / remediate','alert'],
      ['IOT-01-05','Warehouse IoT','Sensor feed was offline for six hours','Assess fallback / completeness','warn'],
      ['SET-01-06','Settlement reconciliation','Reconciliation is triggered only when cash differences exceed Rp100 million','Assess threshold / frequency','warn'],
      ['PRV-01-07','Customer data use','Marketplace customer data is combined without documented purpose and retention rules','Governance gap','alert'],
      ['BC-01-08','Blockchain source','Shipment status depends on manual supplier input before being recorded','Validate source/oracle','warn'],
      ['AI-01-09','AI performance narrative','AI used a spreadsheet without final approval and stated sales increased before one marketplace feed arrived','Do not rely without validation','alert']
    ],
    evidence:[
      {id:'EV-01-01',title:'System boundary and responsibility map',type:'Governance / architecture evidence',status:'Shared responsibilities identified',reliability:'High',period:'Current operating model',prepared:'Finance / IT governance',detail:'The operating ecosystem includes internal business units, cloud ERP, marketplaces, payment gateway, bank, warehouse IoT, supplier-provided blockchain traceability, analytics and AI. The cloud contract states that selected user configuration and backup responsibilities remain with NusaNiaga.',limitation:'A responsibility map documents design expectations; it does not prove that each control is assigned, performed, monitored or evidenced.'},
      {id:'EV-01-02',title:'Interface exception and reconciliation pack',type:'Interface / transaction evidence',status:'Missing and duplicate items identified',reliability:'High',period:'Last three months',prepared:'Integration operations / finance',detail:'Interface records show missing and duplicate transactions. Operational interface logs are retained, but routine review and named exception ownership are not consistently evidenced.',limitation:'The pack demonstrates exceptions and a monitoring gap, but students must determine affected population, financial impact, control objective, owner, review frequency and closure evidence.'},
      {id:'EV-01-03',title:'Privileged-access listing',type:'Access-control evidence',status:'Shared administrator account confirmed',reliability:'High',period:'Current access',prepared:'IAM administrator',detail:'A shared administrator account is active across part of the environment. Individual attribution for activities performed through the account is limited.',limitation:'Assigned/shared access does not by itself prove misuse or fraud. Evaluate accountability, least privilege, individual identity, monitoring and compensating controls.'},
      {id:'EV-01-04',title:'IoT uptime and fallback record',type:'Operational / source-data evidence',status:'Six-hour outage confirmed',reliability:'High',period:'Recent warehouse operation',prepared:'Warehouse operations',detail:'Warehouse sensors were unavailable for approximately six hours while physical activity continued. A complete documented fallback-and-reconciliation record is not available for the full outage window.',limitation:'The outage does not prove inventory records are wrong. Students must evaluate source completeness, fallback capture, reconciliation, ownership and residual uncertainty.'},
      {id:'EV-01-05',title:'Settlement reconciliation rule and recent sign-offs',type:'Financial reconciliation evidence',status:'Threshold-based review design',reliability:'High',period:'Recent settlements',prepared:'Treasury / finance',detail:'Settlement reconciliation is performed when cash differences exceed Rp100 million. Smaller differences may remain outside the formal escalation threshold.',limitation:'The existence of a threshold is not automatically a deficiency. Evaluate objective, frequency, aggregation risk, transaction volume, detective precision and evidence of review.'},
      {id:'EV-01-06',title:'Customer-data purpose and retention register',type:'Privacy / data-governance evidence',status:'Documentation incomplete',reliability:'Medium',period:'Current marketing data use',prepared:'Marketing / data team',detail:'Customer data from marketplaces is combined for promotion, but purpose documentation, retention period, deletion rules and formal business ownership are incomplete.',limitation:'Customer complaints indicate stakeholder concern, not proof of unlawful processing. Students should distinguish purpose, minimisation, access, retention, accountability and evidence.'},
      {id:'EV-01-07',title:'Blockchain source/oracle trace',type:'Third-party / source-validation evidence',status:'Manual supplier input identified',reliability:'Medium',period:'Current traceability design',prepared:'Supply-chain team',detail:'Shipment status is entered manually by the supplier before becoming a tamper-evident blockchain record.',limitation:'Immutability after entry does not prove validity at entry. Evaluate supplier identity, authorisation, source corroboration, exception handling and reconciliation with physical evidence.'},
      {id:'EV-01-08',title:'AI narrative source and approval trace',type:'AI / reporting evidence',status:'Unapproved source and incomplete feed',reliability:'High',period:'Current performance summary',prepared:'Finance / analytics',detail:'The AI narrative used a spreadsheet that had not received final approval. At generation time, one marketplace data feed had not yet arrived, yet the narrative stated that sales had increased.',limitation:'This demonstrates source-quality and validation risk, not that all AI-generated content is unreliable. Evaluate approved source, completeness/freshness, prompt/output retention, human review and release approval.'}
    ],
    decision:[
      'Governance and control response adequate',
      'Material cross-functional remediation required',
      'Insufficient basis — obtain further evidence'
    ],
    instructor:{
      expected:[
        'Treat the Applied Case 1 mahasiswa as the primary case and task source; the mock app is supporting evidence, not a separate case.',
        'Require a system-boundary map covering internal units and relevant external parties, including cloud vendor, marketplace, payment gateway, bank, IoT, supplier/blockchain, analytics and AI.',
        'Outsourcing an activity does not remove management responsibility or control ownership. Distinguish provider responsibility, company responsibility and named control ownership.',
        'Students must connect technology facts to organisational objectives, information quality, risk, controls, owners, frequency, evidence, monitoring, residual risk and escalation; a technology list alone is insufficient.',
        'Missing/duplicate transactions and unreviewed interface logs indicate completeness/accuracy and monitoring risks; require reconciliation, exception ownership, review evidence and closure.',
        'A shared administrator account weakens accountability and traceability but is not proof of misuse. Require individual identity, least privilege, monitoring and evidence.',
        'The IoT outage requires evaluation of fallback capture and reconciliation. Do not assume an outage automatically means inventory records are wrong.',
        'Manual supplier input into blockchain creates source/oracle-validity risk. Tamper-evident recording after input does not prove the underlying event was valid.',
        'Customer-data use must be evaluated for purpose, retention, access, ownership and stakeholder/privacy responsibility without assuming a legal violation merely from a complaint.',
        'AI source quality, completeness/freshness, approval and human validation are the central issues; the AI output is not reliable merely because it is generated automatically.',
        'The task requires at least 10 risks across technology, process, data, governance and responsible digitalization. Multiple justified risk-control-evidence rows may arise from one case fact; do not invent unrelated incidents.',
        'Require students to identify goal conflict, especially speed/promotion/reporting pressure versus data quality, privacy and control evidence, and propose mechanisms for goal congruence.',
        'The final CFO memo should conclude on cross-functional governance and information-quality responsibility rather than treating all issues as IT/vendor-only matters.'
      ],
      rubric:'System and stakeholder map 15%; risk diagnosis 25%; control/evidence design 25%; goal congruence and responsible digitalization 15%; professional memo 20%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="1"]');
  if(opt)opt.textContent='Sesi 1 — '+s1.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===1){
    select.dispatchEvent(new Event('change'));
  }
})();