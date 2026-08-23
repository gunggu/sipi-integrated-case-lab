(function(){
  const s14=sessions.find(s=>s.n===14);
  if(!s14)return;

  Object.assign(s14,{
    title:'Capstone Review, Mock Certification & Readiness Plan',
    mission:'Gunakan Student Learning Pack Sesi 14 sebagai sumber utama mock case, strategi ujian, I-P-A-R-E-C framework, dan required submission. Gunakan mock app ini sebagai evidence environment untuk menguji kemampuan menghubungkan fakta, prinsip SIPI, evidence, rekomendasi, closure, dan keputusan lintas operasi, financial statements, XBRL, AI narrative, serta ICoFR.',
    metrics:[['9','Core capstone issues'],['5','Separate decisions'],['I-P-A-R-E-C','Answer framework']],
    modules:['Process, ERP & payroll','Close, reporting & digital outputs','Remediation, aggregation & final decision'],
    moduleRecords:[
      [
        ['VEN-14-01','Duplicate vendors and shared bank accounts','Potential duplicate vendors and shared beneficiary details remain in the master population','Investigate / contain','alert'],
        ['ERP-14-02','ERP role conflict','A role conflict permits incompatible activities within the ERP process','Redesign / compensate','alert'],
        ['CHG-14-03','Pricing change without UAT','A pricing configuration change was moved without adequate UAT evidence','Validate impact / retest','alert'],
        ['PAY-14-04','Terminated employees still paid','Terminated employees remain in payroll and have been paid','Recover / remediate','alert'],
        ['BANK-14-05','Bank file edited after approval','Approved bank-payment file was subsequently edited','Block / investigate / reapprove','alert']
      ],
      [
        ['REC-14-06','Sales subledger differs from GL','Sales subledger and GL do not reconcile','Reporting blocker','alert'],
        ['JRN-14-07','Unsupported manual journal','A manual journal lacks adequate supporting evidence','Investigate / close risk','alert'],
        ['XBRL-14-08','Repeated XBRL errors','Digital-reporting validation errors recur after prior correction','Publication blocker','alert'],
        ['AI-14-09','AI narrative uses pre-close data','AI narrative is based on a pre-close snapshot','Do not publish','alert']
      ],
      [
        ['REM-14-10','Remediation not mature enough for retest','Recent remediation has not operated for a sufficient period to support retesting and sustained-effectiveness conclusions','Closure not proven','alert']
      ]
    ],
    records:[
      ['VEN-14-01','Duplicate vendors/shared bank accounts','Potential duplicates/shared beneficiary details remain','Investigate / contain','alert'],
      ['ERP-14-02','ERP role conflict','Incompatible ERP activities exist in one role','Redesign / compensate','alert'],
      ['CHG-14-03','Pricing change without UAT','Configuration change lacks adequate UAT evidence','Validate / retest','alert'],
      ['PAY-14-04','Terminated employees still paid','Terminated employees remain in paid population','Recover / remediate','alert'],
      ['BANK-14-05','Bank file edited after approval','Post-approval edit breaks reliance on prior approval','Block / reapprove','alert'],
      ['REC-14-06','Sales subledger-GL difference','Sales subledger and GL do not reconcile','Reporting blocker','alert'],
      ['JRN-14-07','Unsupported journal','Manual journal lacks adequate support','Investigate','alert'],
      ['XBRL-14-08','Repeated XBRL errors','Context/scale or validation issues recur','Publication blocker','alert'],
      ['AI-14-09','AI pre-close narrative','Narrative uses pre-close data','Do not publish','alert'],
      ['REM-14-10','Remediation not yet retestable','Operating period is insufficient for sustained-effectiveness evidence','Closure not proven','alert']
    ],
    evidence:[
      {id:'EV-14-01',title:'Vendor master duplicate/shared-bank report',type:'Master-data evidence',status:'Potential high-risk population',reliability:'High',period:'Current master snapshot',prepared:'Procure-to-pay data owner',detail:'Vendor-master analytics identify potential duplicate vendors and shared bank-account relationships requiring validation and cleansing.',limitation:'Potential duplicates or shared accounts are risk indicators, not proof of fraud. Validate legitimate relationships, population completeness and downstream transactions.'},
      {id:'EV-14-02',title:'ERP role and conflict matrix',type:'Access/SoD evidence',status:'Conflict identified',reliability:'High',period:'Current ERP roles',prepared:'ERP security team',detail:'The role design includes incompatible activities that can affect transaction initiation, approval or master-data governance.',limitation:'A design conflict does not establish misuse. Assess mitigating review, actual assignments, transaction population and redesign/compensating-control evidence.'},
      {id:'EV-14-03',title:'Pricing change/UAT package',type:'Change-management evidence',status:'UAT evidence inadequate',reliability:'High',period:'Recent configuration change',prepared:'ERP change team',detail:'Pricing configuration was changed and migrated, but retained UAT evidence is not sufficient to demonstrate tested impact and acceptance.',limitation:'The absence of adequate UAT evidence is a control/evidence deficiency; it does not by itself quantify financial impact. Perform retrospective testing and assess affected population.'},
      {id:'EV-14-04',title:'Termination-payroll reconciliation',type:'Payroll evidence',status:'Terminated employees paid',reliability:'High',period:'Current payroll',prepared:'HR/payroll',detail:'Terminated employees remain in the paid population after their termination dates.',limitation:'Known cases establish a control failure but not the size of the wider population problem. Reconcile termination register to active roster and payroll population.'},
      {id:'EV-14-05',title:'Bank-file approval and post-approval change log',type:'Payment-integrity evidence',status:'Approval reliance broken',reliability:'High',period:'Current payment cycle',prepared:'Treasury / system log',detail:'A payment file was altered after approval, so the approved version and executed version are not identical.',limitation:'The change requires investigation and independent reapproval; the log alone does not establish intent or loss.'},
      {id:'EV-14-06',title:'Sales subledger-to-GL reconciliation',type:'Close/reporting evidence',status:'Unreconciled difference',reliability:'High',period:'Current close',prepared:'Financial close team',detail:'Sales subledger and general ledger balances do not agree and the difference remains unresolved.',limitation:'The difference is a reporting blocker until root cause, correction, approval and wider-impact assessment are evidenced.'},
      {id:'EV-14-07',title:'Manual-journal support pack',type:'Journal/override evidence',status:'Insufficient support',reliability:'High',period:'Current close',prepared:'GL team',detail:'A manual journal in the close population lacks adequate retained support for its business basis and amount.',limitation:'Unsupported or unusual journals are risk indicators, not proof of management override. Test authorisation, timing, user, accounts and broader population.'},
      {id:'EV-14-08',title:'XBRL validation and remediation history',type:'Digital-reporting evidence',status:'Repeated errors',reliability:'High',period:'Current filing cycle',prepared:'External reporting team',detail:'XBRL validation errors recur after prior correction, raising questions over remediation and review-control effectiveness.',limitation:'Differentiate correction of specific tags from sustained remediation of taxonomy, context, unit, scale and review processes.'},
      {id:'EV-14-09',title:'AI narrative source/version/reviewer trace',type:'AI publication evidence',status:'Pre-close source',reliability:'High',period:'Draft narrative',prepared:'Management reporting',detail:'AI narrative is linked to a pre-close data snapshot rather than the approved final close population.',limitation:'Treat AI narrative as a separate publication output requiring source, version, validation, reviewer and approval evidence.'},
      {id:'EV-14-10',title:'Remediation operating-period and retest tracker',type:'Closure evidence',status:'Not yet mature',reliability:'Medium',period:'Post-remediation',prepared:'Control owners / assurance',detail:'Several remediation actions have been implemented recently but have not operated long enough to support reliable retesting or sustained-effectiveness conclusions.',limitation:'Implementation is not closure. Closure requires operation for a sufficient period, retest, exception resolution, residual-risk assessment and appropriate approval.'}
    ],
    decision:[
      'Mixed decisions — document operations, statements, XBRL, AI narrative and ICoFR separately',
      'All releasable / ICoFR effective',
      'Operations conditional / publication outputs held / ICoFR ineffective',
      'Insufficient basis — obtain further evidence'
    ],
    instructor:{
      expected:[
        'This is a capstone mock-certification session, not a new technology chapter. Reward correct application of Bab 1–9 concepts, not definition length.',
        'Require I-P-A-R-E-C: Issue, Principle, Analysis, Recommendation, Evidence, Conclusion. Each issue block should link fact, cause/impact/interdependency, evidence, action/owner/timing and closure.',
        'Require students to prioritise blockers and material cross-process issues rather than treating every issue as equally important.',
        'Duplicate vendors/shared bank accounts require validation and population analysis; do not infer fraud from the indicator alone.',
        'ERP role conflict is a design/SoD risk. Assess actual access, mitigating controls and transaction population before concluding impact.',
        'Pricing change without UAT is a change-management/evidence deficiency. Quantify impact through retrospective testing rather than assuming all pricing is wrong.',
        'Terminated employees paid require correction/recovery plus remediation of termination-master/payroll controls; correction alone is not closure.',
        'A bank file edited after approval invalidates reliance on the prior approval unless the final file is independently reviewed and reapproved.',
        'An unreconciled sales-subledger/GL difference is a reporting blocker until resolved or appropriately qualified with defensible evidence.',
        'Unsupported manual journal requires basis, authorisation and population testing; treat it as a risk/override indicator, not automatic fraud.',
        'Repeated XBRL errors and AI pre-close narrative are separate publication-output issues and may remain blocked even if core statements are corrected.',
        'Remediation that has not operated long enough cannot support a sustained operating-effectiveness conclusion merely because implementation is complete.',
        'Require separate conclusions for operations, financial statements, XBRL, AI narrative and ICoFR. The Decision Gate is only a summary and must not replace those five decisions.',
        'Allow alternative conclusions only where assumptions and evidence are explicit and internally consistent.',
        'Use peer review to diagnose reasoning gaps, then require a three-action personal readiness plan tied to specific competency weaknesses.'
      ],
      rubric:'Issue identification and concept selection 20%; integrated analysis and evidence use 25%; prioritisation and aggregation 15%; recommendation, owner, timing and closure evidence 20%; publication/ICoFR conclusion 15%; professional structure and clarity 5%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="14"]');
  if(opt)opt.textContent='Sesi 14 — '+s14.title;
  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===14) select.dispatchEvent(new Event('change'));
})();