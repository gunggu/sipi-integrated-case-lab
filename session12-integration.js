(function(){
  const s12=sessions.find(s=>s.n===12);
  if(!s12)return;

  Object.assign(s12,{
    title:'Integrated Case II — Payroll, Close, Reporting & ICoFR',
    mission:'Gunakan Student Learning Pack Sesi 12 sebagai sumber konteks dan tugas utama. Gunakan mock app ini sebagai evidence environment untuk menelusuri alur employee master-payroll-bank-GL-liability-close-reporting-ICoFR; lakukan reconciliation; nilai control design/operation dan evidence quality; evaluasi deficiency secara individual dan agregat; lalu tentukan publication decision secara terpisah untuk financial statements, XBRL, AI narrative, dan ICoFR conclusion.',
    metrics:[['6','Core integrated issues'],['12+','Risks required'],['4','Separate decisions']],
    modules:['Payroll & reconciliation','Close & reporting','Deficiency aggregation & ICoFR'],
    moduleRecords:[
      [
        ['EMP-12-01','Terminated employees remain paid','Two terminated employees remain in payroll population and have been paid','Investigate / recover','alert'],
        ['REC-12-02','Payroll-bank-GL mismatch','Payroll, bank and GL differ by Rp780 million','Release blocker','alert']
      ],
      [
        ['JRN-12-03','Unsupported manual journal','Rp1.9 billion manual journal lacks sufficient support','Investigate / block','alert'],
        ['SUS-12-04','Old suspense balance','Rp430 million remains unresolved for more than 90 days','Close blocker','alert'],
        ['XBRL-12-05','Repeated XBRL context/scale errors','Digital-reporting errors recur after prior correction','Publication blocker','alert'],
        ['AI-12-06','AI narrative uses pre-close data','Narrative uses data before close and contains an unproven explanation','Do not publish','alert']
      ],
      [
        ['DEF-12-07','Deficiency aggregation not completed','Issues exist across payroll, close and reporting but aggregate evaluation and governance conclusion remain incomplete','Assessment incomplete','alert']
      ]
    ],
    records:[
      ['EMP-12-01','Terminated employees remain paid','Two terminated employees remain in payroll population and have been paid','Investigate / recover','alert'],
      ['REC-12-02','Payroll-bank-GL mismatch','Payroll, bank and GL differ by Rp780 million','Release blocker','alert'],
      ['JRN-12-03','Unsupported manual journal','Rp1.9 billion manual journal lacks sufficient support','Investigate / block','alert'],
      ['SUS-12-04','Old suspense balance','Rp430 million remains unresolved for more than 90 days','Close blocker','alert'],
      ['XBRL-12-05','Repeated XBRL context/scale errors','Digital-reporting errors recur after prior correction','Publication blocker','alert'],
      ['AI-12-06','AI narrative uses pre-close data','Narrative uses data before close and contains an unproven explanation','Do not publish','alert'],
      ['DEF-12-07','Deficiency aggregation not completed','Issues exist across payroll, close and reporting but aggregate evaluation and governance conclusion remain incomplete','Assessment incomplete','alert']
    ],
    evidence:[
      {id:'EV-12-01',title:'Employee termination and active-roster report',type:'HR/payroll master-data evidence',status:'Confirmed mismatch',reliability:'High',period:'Current payroll cycle',prepared:'HR operations / payroll',detail:'The active payroll population includes two employees whose termination dates precede the payroll run. Payment records show both were paid.',limitation:'This confirms identified termination/master-data failures but does not establish whether the wider payroll population contains similar cases. Test population completeness and remediation.'},
      {id:'EV-12-02',title:'Payroll register-bank-GL-liability reconciliation',type:'Integrated reconciliation evidence',status:'Material difference',reliability:'High',period:'Current payroll and close',prepared:'Payroll controller / finance',detail:'Payroll register, bank payment result, GL payroll posting and related liability balances do not reconcile; the net unresolved difference is Rp780 million.',limitation:'The reconciliation demonstrates inconsistency, not root cause. Separate calculation, payment, posting, cut-off and liability causes before concluding on impact and required correction.'},
      {id:'EV-12-03',title:'Manual-journal listing and support pack',type:'Journal/close evidence',status:'Insufficient support',reliability:'High',period:'Current close',prepared:'General ledger team',detail:'A Rp1.9 billion manual journal appears in the close population. Approval exists, but retained calculation support and independent corroborating evidence are insufficient.',limitation:'Approval does not replace substantive support. The evidence does not prove intentional override; assess business basis, timing, user access, affected accounts and broader journal population.'},
      {id:'EV-12-04',title:'Suspense ageing and resolution history',type:'Close-control evidence',status:'Recurring unresolved item',reliability:'High',period:'More than 90 days',prepared:'Financial close team',detail:'A Rp430 million suspense balance remains unresolved for more than 90 days. Ageing is documented, but ownership, root cause, final classification and durable closure evidence are incomplete.',limitation:'An old suspense balance is not automatically a material misstatement; severity depends on classification, potential magnitude, recurrence, qualitative factors and other controls.'},
      {id:'EV-12-05',title:'XBRL validation and remediation history',type:'Digital-reporting evidence',status:'Repeated validation errors',reliability:'High',period:'Current reporting cycle',prepared:'External reporting team',detail:'XBRL context and scale errors reappear after prior correction. The validation log identifies affected facts and prior remediation attempts.',limitation:'Repeated errors suggest remediation or review-control weakness, but students must distinguish correction of specific tags from sustained remediation of the underlying process/control.'},
      {id:'EV-12-06',title:'AI narrative source/version/reviewer log',type:'Narrative/publication evidence',status:'Wrong source snapshot / unproven explanation',reliability:'High',period:'Draft narrative',prepared:'Management reporting',detail:'The AI-generated narrative is tied to a pre-close data snapshot and includes an explanation that has not been independently evidenced or reviewed against the final close population.',limitation:'The narrative must be evaluated as a separate publication output. Correct financial statements do not automatically make the AI narrative releasable.'},
      {id:'EV-12-07',title:'ICoFR deficiency summary and communication log',type:'ICoFR/governance evidence',status:'Aggregation incomplete',reliability:'Medium',period:'Assessment date',prepared:'Management assessment team',detail:'Payroll, close and reporting deficiencies are listed individually, but common cause, aggregation, qualitative factors, compensating controls, governance communication and remediation status are not fully documented.',limitation:'An effective ICoFR conclusion cannot be supported merely by correcting amounts. Deficiencies must be evaluated individually and in aggregate, and any material weakness at the assessment date prevents an effective conclusion.'}
    ],
    decision:[
      'All outputs releasable / ICoFR effective',
      'Mixed per-output decisions — document each output and ICoFR separately',
      'Publication package hold / ICoFR ineffective',
      'Insufficient basis — obtain further evidence'
    ],
    instructor:{
      expected:[
        'Treat the Student Learning Pack as the primary case and task source; the mock app is supporting evidence, not a separate case.',
        'Require an end-to-end employee-master to payroll to bank to GL/liability to close/reporting to ICoFR map before students jump directly to isolated findings.',
        'Two terminated employees still paid indicate master-data completeness/timeliness and termination-control failure. Recovering payments does not by itself remediate the underlying control.',
        'The Rp780 million payroll-bank-GL-liability difference is a material reconciliation blocker until calculation, payment, posting and liability causes are identified and closure evidence is obtained.',
        'The Rp1.9 billion manual journal requires business-basis support, authorisation assessment, account/assertion impact and broader journal analysis. An unusual journal is a risk indicator, not proof of fraud or override.',
        'The Rp430 million suspense balance older than 90 days requires owner, root cause, supported classification and closure; recurrence can increase deficiency severity.',
        'Repeated XBRL context/scale errors may indicate ineffective remediation or reporting-review controls. Distinguish corrected output from sustained operating effectiveness.',
        'AI narrative is a separate publication output. It may remain blocked even after the financial statements are corrected if source/version/reviewer evidence is not adequate.',
        'Students must distinguish correction, containment, remediation and sustained operating effectiveness.',
        'Evaluate deficiencies individually and in aggregate using potential magnitude, reasonable possibility, qualitative significance and any compensating controls supported by evidence.',
        'Publication decisions must be made separately for financial statements, XBRL and AI narrative; ICoFR conclusion is a separate control-effectiveness conclusion and must not be collapsed into publication readiness.',
        'Fraud or management-override indicators require prompt governance communication. The case does not establish fraud merely because manual journals or payroll anomalies exist.',
        'The task requires at least 12 risks. The six core case issues can generate multiple justified risk-control-evidence rows across assertions and dependencies; do not invent unrelated incidents merely to reach 12.',
        'One material weakness at the assessment date prevents an effective ICoFR conclusion.'
      ],
      rubric:'Payroll-to-report mapping and reconciliation 20%; control and evidence analysis 20%; deficiency severity and aggregation 25%; publication/ICoFR decisions and communication 25%; professional presentation 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="12"]');
  if(opt)opt.textContent='Sesi 12 — '+s12.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===12){
    select.dispatchEvent(new Event('change'));
  }
})();