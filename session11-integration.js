(function(){
  const s11=sessions.find(s=>s.n===11);
  if(!s11)return;

  Object.assign(s11,{
    title:'Integrated Case I — ERP Readiness & Reporting Gate',
    mission:'Gunakan Applied Case 11 sebagai sumber konteks dan deliverables utama. Gunakan mock app ini sebagai evidence environment untuk menghubungkan master data, access, interface, change management, reconciliation, monitoring, dan reporting; nilai objective-risk-control-evidence-finding-impact-closure untuk setiap isu; analisis dependencies dan aggregate effects; klasifikasikan blockers versus conditional issues; lalu tentukan keputusan operasi dan monthly reporting secara terpisah.',
    metrics:[['34','Potential duplicate vendors'],['Rp2,6 M','Sales subledger–GL gap'],['17','Issues >30 days']],
    modules:['Master data & access','Interface & change management','Reporting, monitoring & closure'],
    moduleRecords:[
      [
        ['VEN-11-01','Vendor duplicate/shared-bank indicators','34 potential duplicate vendors; 9 share bank accounts','Validate / contain','alert'],
        ['ACC-11-02','Buyer role conflict','Buyer can create vendor and approve purchase order','Redesign / independent review','alert']
      ],
      [
        ['IF-11-03','Incomplete exception queue','Rejected marketplace orders are excluded from the daily exception report','Reconcile / redesign monitoring','alert'],
        ['CHG-11-04','Pricing change without UAT evidence','Pricing change has approval but no UAT or rollback evidence','Retrospective test / contain','alert']
      ],
      [
        ['REC-11-05','Sales subledger–GL difference','Sales subledger exceeds GL by Rp2.6 billion','Reporting blocker','alert'],
        ['AGE-11-06','Unowned ageing issues','17 items are older than 30 days; 8 have no owner','Governance / closure gap','alert']
      ]
    ],
    records:[
      ['VEN-11-01','Vendor duplicate/shared-bank indicators','34 potential duplicate vendors; 9 share bank accounts','Validate / contain','alert'],
      ['ACC-11-02','Buyer role conflict','Buyer can create vendor and approve purchase order','Redesign / independent review','alert'],
      ['IF-11-03','Incomplete exception queue','Rejected marketplace orders are excluded from the daily exception report','Reconcile / redesign monitoring','alert'],
      ['CHG-11-04','Pricing change without UAT evidence','Pricing change has approval but no UAT or rollback evidence','Retrospective test / contain','alert'],
      ['REC-11-05','Sales subledger–GL difference','Sales subledger exceeds GL by Rp2.6 billion','Reporting blocker','alert'],
      ['AGE-11-06','Unowned ageing issues','17 items are older than 30 days; 8 have no owner','Governance / closure gap','alert']
    ],
    evidence:[
      {id:'EV-11-01',title:'Vendor duplicate report',type:'Master-data analytics',status:'Potential duplicates identified',reliability:'Medium',period:'Post-ERP migration review',prepared:'Master-data / analytics team',detail:'The official case evidence pack identifies 34 potential duplicate vendors, including 9 records that share bank accounts.',limitation:'Potential duplicate and shared-bank indicators are risk signals, not proof of duplicate vendors or fraud. Verify legitimate relationships against source master data, disposition the population, and test whether preventive/review controls are complete.'},
      {id:'EV-11-02',title:'Buyer role matrix',type:'Access / SoD evidence',status:'Conflicting role identified',reliability:'High',period:'Current post-migration roles',prepared:'Access administration',detail:'The role matrix shows that a buyer can create vendor master records and approve purchase orders.',limitation:'Assigned access demonstrates a segregation-of-duties design issue but does not prove actual misuse. Evaluate role redesign or a specific independent review over the affected vendor/PO population.'},
      {id:'EV-11-03',title:'Marketplace interface log and exception-queue evidence',type:'Interface-control evidence',status:'Population incomplete',reliability:'High',period:'Current operating period',prepared:'Integration / operations team',detail:'Rejected marketplace orders exist, but the daily exception report excludes some rejected orders.',limitation:'The evidence establishes an exception-population/control failure. Reconcile source, rejected, and target populations before concluding completeness or designing a closure response.'},
      {id:'EV-11-04',title:'Pricing configuration change ticket',type:'Change-management evidence',status:'Approval without testing evidence',reliability:'High',period:'Current ERP change',prepared:'ERP / change-management team',detail:'The pricing configuration change has approval, but retained UAT and rollback evidence are absent from the case evidence pack.',limitation:'Approval does not demonstrate that the change operated correctly. Validate affected transactions, perform retrospective testing where appropriate, and establish rollback/version evidence before treating the issue as closed.'},
      {id:'EV-11-05',title:'Sales subledger-to-GL reconciliation',type:'Financial-reporting reconciliation',status:'Material unresolved difference',reliability:'High',period:'Monthly close',prepared:'Controller / finance',detail:'The sales subledger exceeds the general ledger by Rp2.6 billion.',limitation:'The difference is a reporting blocker until reconciled, corrected where necessary, independently reviewed, and the wider impact assessed. The evidence does not yet establish root cause.'},
      {id:'EV-11-06',title:'Ageing issue register',type:'Monitoring / governance evidence',status:'Ownership gaps',reliability:'High',period:'Current issue register',prepared:'ERP readiness / governance team',detail:'The official evidence pack lists 17 issues older than 30 days; 8 of those issues have no assigned owner.',limitation:'Age alone does not determine severity. Each issue requires severity, owner, due date, escalation path, closure criteria, evidence of closure, and residual-risk assessment.'}
    ],
    decision:[
      'Operations GO / Reporting GO',
      'Operations CONDITIONAL GO / Reporting HOLD',
      'Operations NO-GO / Reporting HOLD',
      'Mixed decision — document operations and reporting separately'
    ],
    instructor:{
      expected:[
        'Treat the DOCX as the primary case and assignment brief; the mock app is supporting evidence, not a separate case.',
        'Require an integrated map linking ERP master data, roles/access, marketplace interface, pricing change, sales subledger, GL, monitoring and reporting. The official task requires at least 12 risks, but the six case issues may legitimately generate multiple risk-control-evidence rows; do not invent unrelated incidents merely to reach 12.',
        'For each issue require objective, risk, expected control, evidence, finding, impact and closure. Closure must include owner/due date, closure criteria and residual risk where relevant.',
        'Duplicate vendor/shared-bank indicators create master-data and fraud risk, but indicators are not proof. Cleanse and verify the population, distinguish legitimate relationships, implement duplicate/preventive review controls and test the wider population.',
        'Buyer ability to create vendors and approve POs is a material SoD issue. Redesign the role or require a sufficiently specific independent review over the affected vendor/PO population.',
        'Rejected orders missing from the exception report are an interface population/control failure. Reconcile source/rejected/target populations and redesign complete monitoring before relying on the queue.',
        'A pricing change approved without UAT/rollback evidence is a change-management deficiency. Validate impact, perform retrospective testing as appropriate, and establish rollback/version evidence.',
        'The Rp2.6 billion sales-subledger-to-GL difference is a reporting blocker until reconciled, corrected where necessary, approved and the broader impact assessed.',
        'The 17 ageing issues, including 8 without owners, represent monitoring/governance weakness. Require severity, named owner, due date, escalation and evidence-based closure.',
        'Assess dependencies and aggregate effects. Do not classify all six issues as equally severe; identify common causes and cross-process dependence.',
        'Separate operational-continuity judgment from reporting-publication judgment. The official teaching note supports NO-GO for reporting while the Rp2.6 billion difference remains unresolved; operations may be CONDITIONAL GO only if high-risk master/access/interface issues are contained and actively monitored.',
        'Management promises are not closure evidence. Conditional-go criteria must specify blocker/conditional status, missing evidence, owner, due date, closure criteria and residual risk.',
        'The Decision Gate is an overall summary only. Students must document operations and monthly-reporting decisions separately in the Investigation Notebook, 7-minute presentation and 300-word memo.'
      ],
      rubric:'Integrated mapping 20%; risk-control-evidence analysis 25%; aggregation and prioritisation 20%; remediation and closure design 20%; decision/presentation 15%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="11"]');
  if(opt)opt.textContent='Sesi 11 — '+s11.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===11){
    select.dispatchEvent(new Event('change'));
  }
})();