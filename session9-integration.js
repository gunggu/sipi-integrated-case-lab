(function(){
  const s9=sessions.find(s=>s.n===9);
  if(!s9)return;

  Object.assign(s9,{
    title:'Financial Close & Reporting — Publication Control Room',
    mission:'Gunakan Applied Case 9 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menelusuri aliran source-subledger-interface-GL-close-consolidation-report, menilai journal dan reconciliation evidence, menguji XBRL dan AI narrative terhadap approved close snapshot, lalu menentukan release, hold, atau qualify untuk setiap output berdasarkan blockers, alternative procedures, adjustments, dan residual uncertainty.',
    metrics:[['6','Material close/reporting issues'],['12+','Risks required'],['3','Publication actions']],
    modules:['Source, interface & ledger close','Consolidation & manual adjustments','Digital filing, narrative & publication'],
    moduleRecords:[
      [
        ['INT-09-01','Revenue interface vs GL difference','Revenue interface differs from GL by Rp2.1 billion; source-to-interface-to-GL reconciliation remains open','Hold','alert'],
        ['SUS-09-03','Unresolved suspense balance','Suspense account of Rp860 million remains unresolved at close','Hold / investigate','alert']
      ],
      [
        ['JRN-09-02','Late unsupported manual journal','Rp3.4 billion manual journal posted late at night with insufficient retained support','Investigate / reapprove','alert'],
        ['IC-09-04','Intercompany and elimination mismatch','Intercompany balances and elimination entries do not agree','Consolidation blocker','alert']
      ],
      [
        ['XBRL-09-05','Digital filing validation failures','Outdated taxonomy with wrong context and scale in XBRL filing','Do not publish','alert'],
        ['AI-09-06','Narrative from pre-close snapshot','AI narrative states margin improved using a pre-close snapshot before final adjustment','Do not publish','alert']
      ]
    ],
    records:[
      ['INT-09-01','Revenue interface vs GL difference','Revenue interface differs from GL by Rp2.1 billion; source-to-interface-to-GL reconciliation remains open','Hold','alert'],
      ['JRN-09-02','Late unsupported manual journal','Rp3.4 billion manual journal posted late at night with insufficient retained support','Investigate / reapprove','alert'],
      ['SUS-09-03','Unresolved suspense balance','Suspense account of Rp860 million remains unresolved at close','Hold / investigate','alert'],
      ['IC-09-04','Intercompany and elimination mismatch','Intercompany balances and elimination entries do not agree','Consolidation blocker','alert'],
      ['XBRL-09-05','Digital filing validation failures','Outdated taxonomy with wrong context and scale in XBRL filing','Do not publish','alert'],
      ['AI-09-06','Narrative from pre-close snapshot','AI narrative states margin improved using a pre-close snapshot before final adjustment','Do not publish','alert']
    ],
    evidence:[
      {id:'EV-09-01',title:'Revenue source-to-interface-to-GL reconciliation',type:'Close/reconciliation evidence',status:'Open material difference',reliability:'High',period:'Current close',prepared:'Revenue accounting / finance systems',detail:'The reconciliation compares revenue source totals, extracted/interface totals, and GL postings. A Rp2.1 billion difference remains open at the reporting cut-off.',limitation:'The reconciliation establishes a material completeness/accuracy issue but does not by itself identify whether the root cause is extraction, interface processing, mapping, timing, or GL posting.'},
      {id:'EV-09-02',title:'Manual journal support and activity trail',type:'Journal-entry evidence',status:'Insufficient support',reliability:'High',period:'Current close',prepared:'Financial close team',detail:'A Rp3.4 billion manual journal was posted late at night. The log identifies user, timing, accounts and posting event, but retained support and evidence of sufficient independent approval are incomplete.',limitation:'Late timing and weak support are risk indicators, not proof of misconduct. Corroborate the business basis, approval, accounts affected, and broader journal population before concluding.'},
      {id:'EV-09-03',title:'Suspense-account ageing and ownership report',type:'Close-item evidence',status:'Unresolved',reliability:'High',period:'Current close',prepared:'General ledger team',detail:'The suspense account carries Rp860 million. The report shows ageing and partial notes, but root cause, final classification, responsible owner and closure evidence remain incomplete.',limitation:'A suspense balance is not automatically misstated, but unresolved classification and ownership weaken close completeness and may block publication if material or pervasive.'},
      {id:'EV-09-04',title:'Intercompany balance and elimination reconciliation',type:'Consolidation evidence',status:'Not reconciled',reliability:'High',period:'Current close',prepared:'Consolidation team',detail:'Counterparty balances do not agree and proposed elimination entries therefore do not fully reconcile. Rate/timing differences and entity-level adjustments remain under review.',limitation:'The pack establishes a consolidation blocker but further work is required to distinguish timing, FX/rate, mapping, cut-off, or unrecorded adjustments.'},
      {id:'EV-09-05',title:'XBRL taxonomy and validation report',type:'Digital-reporting evidence',status:'Validation failures',reliability:'High',period:'Draft filing',prepared:'External reporting team',detail:'The draft XBRL filing uses an outdated taxonomy and validation identifies incorrect context and scale on selected tagged facts.',limitation:'A correct underlying amount can still be misleading when taxonomy, context, unit, scale, or period attributes are wrong. This evidence does not imply the financial statements themselves are wrong in every affected item.'},
      {id:'EV-09-06',title:'AI narrative source-snapshot trace',type:'Narrative/reporting evidence',status:'Wrong source snapshot',reliability:'High',period:'Draft management narrative',prepared:'Management reporting / AI workflow',detail:'The generated narrative is linked to a pre-close snapshot and states that margin improved. The final close adjustment has not yet been incorporated into the source used for generation.',limitation:'The evidence shows snapshot inconsistency, not whether the final narrative conclusion will be positive or negative after regeneration. The narrative must be regenerated from the approved final snapshot and independently validated.'},
      {id:'EV-09-07',title:'Close-quality blocker dashboard',type:'Close governance evidence',status:'Open blockers',reliability:'Medium',period:'Current close',prepared:'Financial close PMO',detail:'The dashboard lists key close items with owner, status, evidence reference, blocker flag and due date. Several material items remain open, including interface, consolidation and digital-reporting issues.',limitation:'A dashboard documents monitoring; it does not prove that the underlying controls or reconciliations are complete unless closure evidence is retained and reviewed.'},
      {id:'EV-09-08',title:'Approved-close snapshot and publication checklist',type:'Publication-gate evidence',status:'Not ready',reliability:'High',period:'Current reporting cycle',prepared:'CFO reporting office',detail:'The publication checklist requires financial statements, XBRL filing and narrative outputs to be tied to the same approved close snapshot. Final approval is pending because multiple blockers remain unresolved.',limitation:'The checklist provides governance criteria, but publication readiness depends on closure or appropriate qualification of each material issue and evidence of final approval.'}
    ],
    decision:['Release','Release with qualification','Hold'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and the mock app as supporting evidence, not as a separate case.',
        'Require students to map source-subledger-interface-GL-close-consolidation-report flow and connect each issue to completeness, accuracy, authorisation, cut-off, consolidation, or presentation objectives as appropriate.',
        'The Rp2.1 billion interface difference is a material completeness/accuracy issue; reconcile source-extract-interface-GL before release.',
        'The Rp3.4 billion manual journal requires inspection of business basis, user, timing, accounts, support, approval, and broader journal analytics. Journal analytics identify risk, not guilt.',
        'The Rp860 million suspense balance requires owner, ageing, root cause, supported classification and closure evidence; a journal adjustment alone does not remediate the underlying control failure.',
        'Intercompany mismatch is a consolidation blocker until counterpart balances, rates, adjustments and elimination entries reconcile.',
        'XBRL is a separate publication-quality control layer: update taxonomy and validate tags, context, unit, scale and period before digital filing release.',
        'AI narrative must not be released from a pre-close snapshot. Regenerate it from the same approved final close snapshot used for the financial and digital-reporting outputs, then independently validate the narrative.',
        'The student matrix requires at least 12 risks. Six case issues can generate multiple justified risk-control-evidence rows across different reporting objectives; do not invent additional incidents merely to reach 12.',
        'Publication decisions are per output. Financial statements, XBRL filing, narrative and managerial outputs may have different release/hold/qualification conclusions, but all must be anchored to the same approved close snapshot.',
        'Alternative procedures and accounting adjustments can reduce uncertainty, but students must separately state residual uncertainty and whether the underlying control deficiency has actually been remediated.'
      ],
      rubric:'Process/reporting map 20%; risk diagnosis 20%; control/evidence design 25%; close/publication judgment 25%; memo 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="9"]');
  if(opt)opt.textContent='Sesi 9 — '+s9.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===9){
    select.dispatchEvent(new Event('change'));
  }
})();