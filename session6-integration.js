(function(){
  const s6=sessions.find(s=>s.n===6);
  if(!s6)return;

  Object.assign(s6,{
    title:'Revenue & Expenditure Cycles — Exception Control Room',
    mission:'Gunakan Applied Case 6 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menelusuri exception yang menyeberangi siklus pendapatan dan pengeluaran; petakan transaksi, dokumen, master data, receivable/payable, kas, dan GL; klasifikasikan risiko per subproses/objective; rancang preventive, detective, corrective, dan monitoring controls; lalu tentukan release, hold, reverse, atau escalate berdasarkan evidence.',
    metrics:[['6','Cross-cycle exceptions'],['12+','Risks required'],['4','Decision actions']],
    modules:['Revenue & credit exceptions','Procure-to-pay & receiving','Matching, payment & cross-cycle reconciliation'],
    moduleRecords:[
      [
        ['CRD-06-01','Credit override on customer order','Order released after credit override to support sales target; independent approval/rationale evidence is incomplete','Hold','alert']
      ],
      [
        ['PO-06-02','Duplicate purchase order','Supplier portal retry created a second PO for the same underlying request','Reverse/cancel candidate','alert'],
        ['VND-06-03','Vendor bank-account change','Bank details changed from email request without retained independent callback/beneficiary verification','Block payment','alert'],
        ['RCV-06-04','Receiving mismatch','System receipt quantity differs from physical count; recount/reconciliation not yet evidenced','Hold','alert']
      ],
      [
        ['INV-06-05','Duplicate invoice passed automated match','Matching tolerance is configured broadly enough that a duplicate invoice passed the automated check','Block/reverse','alert'],
        ['PAY-06-06','Payment batch before reconciliation','Treasury batch prepared before A/P-bank-GL/control-total reconciliation is complete','Do not release','alert']
      ]
    ],
    records:[
      ['CRD-06-01','Credit override on customer order','Order released after credit override to support sales target; independent approval/rationale evidence is incomplete','Hold','alert'],
      ['PO-06-02','Duplicate purchase order','Supplier portal retry created a second PO for the same underlying request','Reverse/cancel candidate','alert'],
      ['VND-06-03','Vendor bank-account change','Bank details changed from email request without retained independent callback/beneficiary verification','Block payment','alert'],
      ['RCV-06-04','Receiving mismatch','System receipt quantity differs from physical count; recount/reconciliation not yet evidenced','Hold','alert'],
      ['INV-06-05','Duplicate invoice passed automated match','Matching tolerance is configured broadly enough that a duplicate invoice passed the automated check','Block/reverse','alert'],
      ['PAY-06-06','Payment batch before reconciliation','Treasury batch prepared before A/P-bank-GL/control-total reconciliation is complete','Do not release','alert']
    ],
    evidence:[
      {id:'EV-06-01',title:'Credit-override approval trail',type:'Revenue-cycle control evidence',status:'Incomplete evidence',reliability:'High',period:'Current sales cycle',prepared:'Sales / credit operations',detail:'The order exceeded the normal credit rule and was released through an override. The retained workflow shows the override event, but independent credit approval and documented business rationale are incomplete.',limitation:'The evidence supports a goal-conflict and authorization concern; it does not prove customer default or financial loss.'},
      {id:'EV-06-02',title:'Supplier-portal request and PO trace',type:'Procurement/interface evidence',status:'Corroborated',reliability:'High',period:'Current procurement cycle',prepared:'Procurement / integration operations',detail:'Two purchase orders reference the same supplier request and commercial terms. The integration trace shows a retry event consistent with duplicate creation.',limitation:'The trace establishes duplicate processing risk, but open commitment, receipt, invoice, and cancellation status still need to be checked before final disposition.'},
      {id:'EV-06-03',title:'Vendor bank-change request pack',type:'Master-data control evidence',status:'Incomplete evidence',reliability:'High',period:'Latest vendor-master change',prepared:'Accounts payable / vendor master team',detail:'A vendor bank-account change was initiated from an email request and updated in master data. No independent callback, beneficiary verification, or equivalent out-of-band confirmation is retained.',limitation:'The missing verification creates a high-risk master-data control gap; the evidence does not establish that the request was fraudulent.'},
      {id:'EV-06-04',title:'Receiving record versus physical-count sheet',type:'Inventory/receiving evidence',status:'Conflicting evidence',reliability:'High',period:'Current receipt',prepared:'Warehouse operations',detail:'The ERP receipt quantity does not agree with the physical-count sheet. No completed independent recount, inspection conclusion, or reconciliation adjustment is attached.',limitation:'The mismatch must be resolved before concluding whether the error is in physical count, receipt entry, quantity, or another source.'},
      {id:'EV-06-05',title:'Automated match configuration and duplicate-invoice trace',type:'Application-control evidence',status:'Confirmed control concern',reliability:'High',period:'Current A/P processing cycle',prepared:'A/P systems team',detail:'The automated matching rule uses a broad tolerance. A duplicate invoice with materially similar vendor/reference details passed the rule and entered the payable workflow.',limitation:'One observed duplicate demonstrates a control-design/analytics concern, but population-wide impact requires broader duplicate testing and exception follow-up.'},
      {id:'EV-06-06',title:'Payment-batch readiness pack',type:'Treasury release evidence',status:'Incomplete evidence',reliability:'High',period:'Current payment run',prepared:'Treasury / A/P',detail:'The payment batch is prepared for release while A/P-to-bank-to-GL/control-total reconciliation remains open. Final approval evidence exists, but the reconciliation prerequisite is not complete.',limitation:'The evidence supports withholding release until reconciliation and exception clearance are complete; it does not prove that all items in the batch are invalid.'},
      {id:'EV-06-07',title:'Cross-cycle exception ageing register',type:'Exception-management evidence',status:'Incomplete evidence',reliability:'Medium',period:'Current operating period',prepared:'Process control office',detail:'The six major exceptions are listed, but several entries lack a named owner, severity rationale, due date, escalation trigger, or retained closure evidence.',limitation:'An exception register documents awareness; it does not demonstrate effective remediation unless ownership, ageing, escalation, and closure are evidenced.'},
      {id:'EV-06-08',title:'Revenue-to-expenditure control-total reconciliation',type:'Cross-cycle reconciliation',status:'Requires evaluation',reliability:'Medium',period:'Current cycle cut-off',prepared:'Finance control team',detail:'A draft reconciliation links sales/order activity, purchasing commitments, receipts, invoices, payables, payment batches, cash, and GL control totals. Several reconciling items remain open.',limitation:'The draft provides a cross-cycle view, but unresolved reconciling items prevent a clean release conclusion until investigated and closed.'}
    ],
    decision:['Release','Hold','Reverse / cancel','Escalate'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and the mock app as supporting evidence, not as a separate case.',
        'Require students to connect every issue to transaction flow, documents/master data, receivable/payable or cash/GL consequences, and a stated control objective.',
        'Credit override should normally be held unless independent approval and documented rationale are evidenced; connect the issue to sales-versus-credit goal conflict.',
        'Duplicate PO requires duplicate/idempotency analysis, cancellation or reversal logic, and validation of open commitments and any downstream receipt/invoice activity.',
        'Vendor bank change is a high-risk master-data issue; payment should remain blocked until independent verification is complete.',
        'Receiving mismatch requires independent recount/inspection and reconciliation before receipt/invoice processing proceeds.',
        'Automated matching is not equivalent to effective control when tolerance, duplicate analytics, or exception handling are weak; assess both design and population impact.',
        'Payment batch should not be released until A/P-bank-GL/control totals reconcile and required approvals are complete.',
        'The student matrix requires at least 12 risks. Six case issues may legitimately generate multiple risk-control-evidence rows across different objectives and downstream consequences; do not invent six extra incidents merely to reach 12.',
        'Exception management is incomplete without owner, severity, due date, escalation rule, action, and retained closure evidence.',
        'For the professional-class debrief, extend the analysis to downstream production/cost or working-capital effects where justified by the evidence.'
      ],
      rubric:'Process/document mapping 20%; risk diagnosis 25%; control/evidence design 25%; exception decision 20%; CFO/COO memo 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="6"]');
  if(opt)opt.textContent='Sesi 6 — '+s6.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===6){
    select.dispatchEvent(new Event('change'));
  }
})();
