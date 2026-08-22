(function(){
  const s3=sessions.find(s=>s.n===3);
  if(!s3)return;

  Object.assign(s3,{
    title:'ERP Selection, Fit-Gap, dan Go-Live Readiness',
    mission:'Gunakan Applied Case 3 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menilai selection process, fit-gap, data migration, access, UAT, training, cutover, dan rollback sebelum menentukan Go, Conditional go, atau No-go.',
    metrics:[['7%','Vendor master duplicates'],['62%','Training completion'],['+2h','Cutover delay']],
    modules:['Selection & fit-gap','Data & access readiness','UAT, training & cutover'],
    moduleRecords:[
      [
        ['SEL-03-01','Vendor selection file','Subscription price dominates; TCO, roadmap, partner capability, references, and exit risk not formally analysed','Review','warn'],
        ['GAP-03-02','Pricing requirement','Requires customisation beyond standard configuration','High','alert'],
        ['GAP-03-03','Returns process','Manual workaround remains outside standard ERP workflow','High','warn']
      ],
      [
        ['DAT-03-04','Vendor master migration','Duplicate rate 7%; disposition not completed','Block','alert'],
        ['REC-03-05','Opening balance','Reconciliation not completed','Block','alert'],
        ['ACC-03-06','Finance privileged role','Selected finance role includes administrator access','Block','alert']
      ],
      [
        ['UAT-03-07','UAT coverage','Normal transactions tested; exception, interface failure, and period close scenarios absent','Incomplete','alert'],
        ['TRN-03-08','User readiness','62% of assigned users completed training','At risk','warn'],
        ['CUT-03-09','Cutover rehearsal','Rehearsal exceeded planned window by two hours','At risk','warn'],
        ['RBK-03-10','Rollback plan','Document exists but no executed rollback test evidence','Block','alert']
      ]
    ],
    records:[
      ['SEL-03-01','Vendor selection file','Subscription price dominates; TCO, roadmap, partner capability, references, and exit risk not formally analysed','Review','warn'],
      ['GAP-03-02','Pricing requirement','Requires customisation beyond standard configuration','High','alert'],
      ['GAP-03-03','Returns process','Manual workaround remains outside standard ERP workflow','High','warn'],
      ['DAT-03-04','Vendor master migration','Duplicate rate 7%; disposition not completed','Block','alert'],
      ['REC-03-05','Opening balance','Reconciliation not completed','Block','alert'],
      ['ACC-03-06','Finance privileged role','Selected finance role includes administrator access','Block','alert'],
      ['UAT-03-07','UAT coverage','Normal transactions tested; exception, interface failure, and period close scenarios absent','Incomplete','alert'],
      ['TRN-03-08','User readiness','62% of assigned users completed training','At risk','warn'],
      ['CUT-03-09','Cutover rehearsal','Rehearsal exceeded planned window by two hours','At risk','warn'],
      ['RBK-03-10','Rollback plan','Document exists but no executed rollback test evidence','Block','alert']
    ],
    evidence:[
      {id:'EV-03-01',title:'Vendor selection working paper',type:'Selection assessment',status:'Incomplete evidence',reliability:'Medium',period:'Pre-contract selection',prepared:'ERP selection team',detail:'The working paper documents a short vendor demo and a strong emphasis on subscription price. Sections for total cost of ownership, vendor roadmap, implementation-partner capability, customer references, and exit risk are blank or not evidenced.',limitation:'The file shows what was documented in the selection process; it does not prove that undocumented considerations were never discussed.'},
      {id:'EV-03-02',title:'Fit-gap register',type:'Implementation register',status:'Confirmed fact',reliability:'High',period:'Current design phase',prepared:'ERP functional team',detail:'Pricing requires customisation. Returns remain dependent on a manual workaround. The register records open owners and decisions for both items, but closure evidence is not complete.',limitation:'The register identifies open gaps; it does not by itself quantify business impact or prove that the proposed response is acceptable.'},
      {id:'EV-03-03',title:'Vendor-master migration quality report',type:'Data migration report',status:'Corroborated',reliability:'High',period:'Latest migration cycle',prepared:'Data migration team',detail:'Duplicate-rate analysis identifies 7% of vendor-master records as potential duplicates. Disposition, merge approval, and bank-account verification are not yet complete.',limitation:'Potential duplicates require source verification; the report does not establish fraud or confirm that every flagged record is a true duplicate.'},
      {id:'EV-03-04',title:'Opening-balance reconciliation pack',type:'Reconciliation',status:'Incomplete evidence',reliability:'High',period:'Pre-cutover',prepared:'Finance migration lead',detail:'Legacy closing balances and ERP opening balances have not been fully reconciled. Several reconciling items remain open without documented closure.',limitation:'The pack shows unresolved differences but does not yet establish the final financial-statement impact.'},
      {id:'EV-03-05',title:'Finance role-access matrix',type:'Access-control matrix',status:'Confirmed fact',reliability:'High',period:'Pre-production roles',prepared:'IAM / ERP security team',detail:'A finance operational role includes administrator-level privileges in addition to transaction-processing access. No approved mitigating control is attached.',limitation:'Assigned access demonstrates a segregation and privilege risk; it does not prove that the privilege has been misused.'},
      {id:'EV-03-06',title:'UAT scenario coverage report',type:'Testing evidence',status:'Incomplete evidence',reliability:'High',period:'UAT cycle',prepared:'UAT coordinator',detail:'Normal end-to-end transactions were executed. The test inventory does not include exception handling, interface failure, or period-close scenarios.',limitation:'Successful normal-flow tests cannot be extrapolated to untested exception and close conditions.'},
      {id:'EV-03-07',title:'Training completion dashboard',type:'Readiness report',status:'Confirmed fact',reliability:'Medium',period:'Three weeks before go-live',prepared:'Change-management team',detail:'62% of assigned users have completed required training. Completion is tracked, but proficiency and role-specific readiness are not evidenced for all users.',limitation:'Completion percentage does not by itself prove competence or readiness to operate production processes.'},
      {id:'EV-03-08',title:'Cutover rehearsal and rollback pack',type:'Cutover evidence',status:'Conflicting evidence',reliability:'High',period:'Latest rehearsal',prepared:'ERP PMO',detail:'The rehearsal exceeded the planned cutover window by two hours. A rollback procedure is documented, but no executed rollback test evidence is attached. The vendor recommends maintaining the planned go-live date to avoid delay cost.',limitation:'Vendor recommendation is a stakeholder position, not independent evidence that blocking conditions are closed.'}
    ],
    decision:['Go','Conditional go','No-go'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and this app as supporting evidence, not as a separate case.',
        'Evaluate solution-selection quality as well as implementation readiness; do not reduce the decision to cutover timing only.',
        'Duplicate master data, unreconciled opening balances, excessive finance privilege, incomplete UAT coverage, and untested rollback require explicit closure logic before Go.',
        'A vendor recommendation to proceed because delay is costly is not equivalent to readiness evidence.',
        'Accept a defensible Conditional go only when blocking issues, owners, evidence of closure, and timing are explicit.'
      ],
      rubric:'Vendor/solution scorecard 20%; fit-gap judgement 20%; lifecycle/readiness gates 25%; evidence and blocking-issue closure 25%; steering-committee memo 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="3"]');
  if(opt)opt.textContent='Sesi 3 — '+s3.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===3){
    select.dispatchEvent(new Event('change'));
  }
})();
