(function(){
  const s8=sessions.find(s=>s.n===8);
  if(!s8)return;

  Object.assign(s8,{
    title:'Payroll Integrity — Release Control Room',
    mission:'Gunakan Applied Case 8 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menelusuri employee master, time/overtime, payroll calculation, payment file, posting, remittance, dan reconciliation; identifikasi blockers dan control failures; tentukan employee/payment yang harus hold, reverse, recalculate, atau investigate; lalu nilai apakah payroll file layak dirilis.',
    metrics:[['6','Core payroll issues'],['12+','Risks required'],['5','Reconciliation layers']],
    modules:['HR master & self-service','Payroll calculation & approval','Payment, posting & reconciliation'],
    moduleRecords:[
      [
        ['EMP-08-01','Terminated employee remains active','Employee terminated two weeks earlier remains active in payroll and has been paid','Block / recover','alert'],
        ['BNK-08-02','Self-service bank change','Bank-account change approved after ordinary login without independent verification','Hold affected payment','alert']
      ],
      [
        ['OT-08-03','Overtime approved after payroll run','Supervisor approval occurred after payroll calculation/run','Recalculate / investigate','alert'],
        ['TAX-08-04','Tax table not updated','Payroll calculation uses an outdated tax table','Recalculate payroll/liability','alert']
      ],
      [
        ['PAY-08-05','Post-approval payment-file edit','Payment file was manually edited after payroll-register approval to change one bank account','Invalidate/reapprove','alert'],
        ['REC-08-06','Payroll-bank-GL-liability mismatch','Payroll register, bank payment, GL, and tax liability do not reconcile','Hold release','alert']
      ]
    ],
    records:[
      ['EMP-08-01','Terminated employee remains active','Employee terminated two weeks earlier remains active in payroll and has been paid','Block / recover','alert'],
      ['BNK-08-02','Self-service bank change','Bank-account change approved after ordinary login without independent verification','Hold affected payment','alert'],
      ['OT-08-03','Overtime approved after payroll run','Supervisor approval occurred after payroll calculation/run','Recalculate / investigate','alert'],
      ['TAX-08-04','Tax table not updated','Payroll calculation uses an outdated tax table','Recalculate payroll/liability','alert'],
      ['PAY-08-05','Post-approval payment-file edit','Payment file was manually edited after payroll-register approval to change one bank account','Invalidate/reapprove','alert'],
      ['REC-08-06','Payroll-bank-GL-liability mismatch','Payroll register, bank payment, GL, and tax liability do not reconcile','Hold release','alert']
    ],
    evidence:[
      {id:'EV-08-01',title:'Active-roster versus termination register',type:'HR master-data evidence',status:'Confirmed mismatch',reliability:'High',period:'Current payroll cycle',prepared:'HR operations',detail:'The active payroll roster includes one employee whose termination record is dated two weeks before the payroll run. The employee also appears in the paid population.',limitation:'The evidence confirms a master-data/termination control failure for this employee; it does not establish whether similar cases exist elsewhere in the population.'},
      {id:'EV-08-02',title:'Employee self-service bank-change trail',type:'Identity/master-data control evidence',status:'Control gap',reliability:'High',period:'Current payroll cycle',prepared:'HRIS / payroll administration',detail:'A bank-account change was submitted through employee self-service and approved after ordinary account login. No retained independent verification, out-of-band confirmation, or secondary review is attached.',limitation:'The evidence supports a beneficiary-change control weakness but does not establish that the requested bank account is fraudulent.'},
      {id:'EV-08-03',title:'Overtime approval timing report',type:'Time and attendance evidence',status:'Late approval',reliability:'High',period:'Current payroll cycle',prepared:'Payroll operations',detail:'Selected overtime hours were included in the payroll calculation before supervisor approval was completed. Approval timestamps occur after the payroll run.',limitation:'The timing establishes an authorisation/cut-off issue; the evidence does not by itself determine whether the hours worked were invalid.'},
      {id:'EV-08-04',title:'Payroll tax-table configuration record',type:'Payroll configuration evidence',status:'Outdated configuration',reliability:'High',period:'Current payroll cycle',prepared:'Payroll systems team',detail:'The tax table/configuration used in the current calculation has not been updated to the current required version before payroll processing.',limitation:'The configuration gap requires recalculation of affected payroll and liabilities; the evidence does not quantify the final misstatement until recalculation is completed.'},
      {id:'EV-08-05',title:'Payroll-register approval and payment-file change log',type:'Payment-integrity evidence',status:'Post-approval change',reliability:'High',period:'Current payroll cycle',prepared:'Payroll / treasury',detail:'The payroll register was approved, after which the payment file was manually edited to change one bank account. The edit occurred after the approval timestamp.',limitation:'The evidence invalidates reliance on the earlier approval for the changed file, but does not prove misuse; compare register-to-file-to-bank and obtain independent reapproval.'},
      {id:'EV-08-06',title:'Payroll-bank-GL-liability reconciliation',type:'Release reconciliation evidence',status:'Unreconciled',reliability:'High',period:'Current payroll cycle',prepared:'Finance control team',detail:'Payroll register, bank payment total, GL payroll posting, and tax liability do not agree. Reconciling items remain unresolved.',limitation:'This is a material release blocker until differences are explained, corrected where necessary, and evidenced.'},
      {id:'EV-08-07',title:'Cloud payroll responsibility matrix',type:'Cloud/control-ownership evidence',status:'Requires evaluation',reliability:'Medium',period:'Current service model',prepared:'HRIS / IT governance',detail:'The cloud provider operates the payroll platform infrastructure, while PT NusaNiaga retains responsibility for employee master data, user access, approval rules, payment release, reconciliation, and user-entity controls.',limitation:'Provider controls may support the service but do not replace user-entity controls over HR authorisation, payroll accuracy, treasury release, and accounting reconciliation.'},
      {id:'EV-08-08',title:'Self-service identity and privacy assessment',type:'Privacy/control-design evidence',status:'Incomplete evidence',reliability:'Medium',period:'Current self-service design',prepared:'HR / privacy / IT',detail:'The assessment identifies sensitive payroll and beneficiary data handled through employee self-service and notes the need for strong identity verification, least-privilege access, logging, notification, and privacy safeguards.',limitation:'The case brief does not establish that biometric authentication is currently used. Students should evaluate biometric/privacy implications only if such a control is proposed or evidenced, and should not assume biometric use from the case alone.'}
    ],
    decision:['Release','Release only after blockers cleared and independent reapproval','Hold / No-go'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and the mock app as supporting evidence, not as a separate case.',
        'Distinguish HR authorisation, payroll processing, treasury release, and accounting reconciliation; do not collapse them into one generic payroll control issue.',
        'Terminated employee: classify as a master-data/termination control failure; block or recover the affected payment and test the wider active-roster population.',
        'Bank self-service change: classify as a high-risk beneficiary/master-data change; require strong identity, independent verification, notification, and review before payment.',
        'Late overtime approval: classify as authorisation/cut-off failure; recalculate or exclude affected overtime until approval is valid before release.',
        'Outdated tax table: classify as configuration/regulatory-update failure; recalculate payroll and tax liabilities before release.',
        'Post-approval payment-file edit: invalidate the prior approval for the changed file; compare payroll register, payment file, and bank output, then obtain independent reapproval.',
        'Payroll-register/bank/GL/tax-liability differences are a material release blocker until resolved and evidenced.',
        'Payment recovery does not remediate the underlying HR/master-data control failure; require root-cause correction and wider-population testing.',
        'Cloud-provider controls do not replace PT NusaNiaga user-entity controls.',
        'Privacy controls and payroll accuracy are complementary objectives. Do not trade one off against the other.',
        'The task requires at least 12 risks; six case issues may generate multiple justified risk-control-evidence rows across master data, authorisation, calculation, payment integrity, reconciliation, privacy, and cloud responsibility. Do not invent unrelated incidents.',
        'The case asks students to evaluate biometric/privacy risk, but the narrative does not state that biometric authentication is currently deployed. Do not mark students down for refusing to assume a biometric fact that is not in evidence.'
      ],
      rubric:'Process/SoD mapping 20%; risk diagnosis 25%; control/evidence design 25%; reconciliation/release judgment 20%; CFO/HR Director memo 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="8"]');
  if(opt)opt.textContent='Sesi 8 — '+s8.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===8){
    select.dispatchEvent(new Event('change'));
  }
})();