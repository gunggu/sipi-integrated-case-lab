(function(){
  const s2=sessions.find(s=>s.n===2);
  if(!s2)return;

  Object.assign(s2,{
    title:'Data dan Sistem Informasi — Dari Kejadian Ekonomi sampai Informasi Andal',
    mission:'Gunakan Applied Case 2 mahasiswa sebagai sumber konteks dan tugas utama. Gunakan mock app ini sebagai evidence environment untuk menelusuri marketplace, webstore, POS, API, ERP, master data, data lake, dashboard CFO, dan AI summary. Petakan input-storage-processing-output, bedakan batch/real-time/hybrid, nilai lineage dan data quality, susun risk-control-evidence matrix, lalu buat keputusan publication gate untuk dashboard dan AI summary secara terpisah.',
    metrics:[['12+','Risks required'],['8+','Critical data elements'],['2','Publication decisions']],
    modules:['Input & source capture','Storage, master data & processing','Output, ownership & publication'],
    moduleRecords:[
      [
        ['API-02-01','Marketplace API retry','Repeated requests can create duplicate orders','Investigate / deduplicate','alert'],
        ['POS-02-02','POS nightly batch','Current POS feed is 12 hours late','Freshness issue','alert']
      ],
      [
        ['CUS-02-03','Customer master','Duplicate customer IDs exist','Resolve master','alert'],
        ['MAP-02-04','Product mapping','Mapping changed without documented approval','Validate / rollback if needed','alert'],
        ['LIN-02-05','Data-lake lineage','Source-transform-target trace is incomplete for selected fields','Evidence gap','warn']
      ],
      [
        ['DASH-02-06','CFO dashboard','Dashboard presents figures as complete despite delayed source','Publication blocker','alert'],
        ['ACC-02-07','Dashboard access','Access is granted broadly without clear business need','Review access','warn'],
        ['OWN-02-08','Data ownership','No formal business data owner has been assigned','Governance gap','alert']
      ]
    ],
    records:[
      ['API-02-01','Marketplace API retry','Repeated requests can create duplicate orders','Investigate / deduplicate','alert'],
      ['POS-02-02','POS nightly batch','Current POS feed is 12 hours late','Freshness issue','alert'],
      ['CUS-02-03','Customer master','Duplicate customer IDs exist','Resolve master','alert'],
      ['MAP-02-04','Product mapping','Mapping changed without documented approval','Validate / rollback if needed','alert'],
      ['LIN-02-05','Data-lake lineage','Source-transform-target trace is incomplete for selected fields','Evidence gap','warn'],
      ['DASH-02-06','CFO dashboard','Dashboard presents figures as complete despite delayed source','Publication blocker','alert'],
      ['ACC-02-07','Dashboard access','Access is granted broadly without clear business need','Review access','warn'],
      ['OWN-02-08','Data ownership','No formal business data owner has been assigned','Governance gap','alert']
    ],
    evidence:[
      {id:'EV-02-01',title:'Marketplace source-to-target order reconciliation',type:'Interface reconciliation',status:'Duplicate/retry exceptions identified',reliability:'High',period:'Current processing day',prepared:'Integration operations',detail:'Marketplace source records and ERP target records show repeated request identifiers associated with duplicate order creation. Source totals, accepted records, duplicates, and rejected items are available for reconciliation.',limitation:'The presence of repeated requests does not by itself establish the financial impact. Students must determine valid population, duplicate disposition, control totals, and reprocessing or cancellation evidence.'},
      {id:'EV-02-02',title:'POS batch and freshness log',type:'Batch-processing evidence',status:'12-hour delay confirmed',reliability:'High',period:'Current day',prepared:'POS integration team',detail:'POS data is transmitted nightly in batch. The current feed reached the integration layer approximately 12 hours later than expected while other channels continued updating.',limitation:'A delayed batch can still be accurate. The key issue is whether users understand cut-off/freshness and whether reports represent the incomplete period transparently.'},
      {id:'EV-02-03',title:'Customer-master duplicate report',type:'Master-data quality report',status:'Potential duplicate IDs confirmed',reliability:'High',period:'Current master',prepared:'Master-data team',detail:'Multiple customer IDs contain overlapping identity attributes. Some transaction histories are split across the duplicate IDs.',limitation:'Potential duplicates require source verification and survivorship rules before merge. Do not assume every flagged pair is the same customer.'},
      {id:'EV-02-04',title:'Product-mapping change history',type:'Configuration/change evidence',status:'Approval evidence incomplete',reliability:'High',period:'Recent mapping change',prepared:'ERP/data integration',detail:'A product mapping used in downstream transformation changed before the current reporting period. The technical change is logged, but documented business approval and independent validation are not retained in the case evidence.',limitation:'A missing approval record does not prove the mapping is wrong. Validate source-to-target logic, affected population, timing, and any compensating review.'},
      {id:'EV-02-05',title:'Data-lineage and critical-data-element trace',type:'Lineage evidence',status:'Partially documented',reliability:'Medium',period:'Current reporting flow',prepared:'Data platform team',detail:'The flow marketplace/webstore/POS → integration → ERP/master data → data lake → dashboard/AI is documented at system level, but several field-level source-transform-target rules, owners, and quality checks are incomplete.',limitation:'System architecture alone is not sufficient lineage. Students should identify at least eight critical data elements and specify source, transformation, owner, quality rule, and evidence for each.'},
      {id:'EV-02-06',title:'Dashboard freshness and publication record',type:'Reporting/publication evidence',status:'Misleading completeness risk',reliability:'High',period:'Current dashboard refresh',prepared:'Management reporting',detail:'The CFO dashboard refreshed successfully even though the POS source remained 12 hours behind. The visible output does not clearly distinguish current-channel data from delayed POS data.',limitation:'A dashboard can technically refresh while still being incomplete. Publication judgment should consider completeness, freshness, reconciliation, warning/qualification, reviewer, and release sign-off.'},
      {id:'EV-02-07',title:'Dashboard access listing',type:'Access-control evidence',status:'Broad access population',reliability:'High',period:'Current access',prepared:'IAM administrator',detail:'Dashboard access is assigned to a broad user group. Business justification, periodic review evidence, and data-owner approval are incomplete for several users.',limitation:'The listing proves assigned access, not misuse. Evaluate least privilege, role need, review frequency, confidentiality/privacy impact, and ownership.'},
      {id:'EV-02-08',title:'Data-ownership and release-governance matrix',type:'Governance evidence',status:'No formal business data owner',reliability:'High',period:'Current governance design',prepared:'Finance / IT governance',detail:'IT system responsibilities are identifiable, but formal business data ownership and named control ownership for key data-quality and publication gates are not assigned consistently.',limitation:'IT system ownership is not a substitute for business data ownership. Students must propose owner, frequency, evidence, exception escalation, and follow-up for controls.'}
    ],
    decision:[
      'Dashboard RELEASE / AI summary RELEASE',
      'Mixed decisions — document dashboard and AI separately',
      'Dashboard HOLD / AI summary HOLD',
      'Insufficient basis — obtain further evidence'
    ],
    instructor:{
      expected:[
        'Treat the Applied Case 2 mahasiswa as the primary case and task source; the mock app is supporting evidence, not a separate case.',
        'Require an input-storage-processing-output map that includes activity-resource-party, documents, master/transaction files, journal/ledger implications, database, and outputs.',
        'Students must distinguish marketplace/API real-time processing from POS nightly batch and recognise the overall architecture as hybrid where appropriate.',
        'Repeated API requests create a duplicate-processing risk; require control totals, idempotency/duplicate prevention, exception ownership, reconciliation, and evidence of disposition rather than simply deleting duplicate rows.',
        'Duplicate customer IDs are a master-data integrity issue. Require source verification, ownership, survivorship/merge rules, audit trail, and downstream impact assessment.',
        'An unapproved product mapping is a transformation/change-governance issue. Missing approval is an evidence/control gap; it is not automatic proof that the mapping is incorrect.',
        'A 12-hour POS delay is principally a timeliness/freshness issue and can also create completeness risk for consolidated output if the cut-off is not transparent.',
        'Do not accept the term data lineage unless students identify source-transform-target and control evidence. The required data dictionary should include at least eight critical data elements.',
        'Dashboard access should be assessed for least privilege, need-to-know, review, privacy/confidentiality, and owner approval. Broad access is not proof of misuse.',
        'Business data owner, IT system owner, and control owner are different roles. Require named ownership for critical data and publication controls.',
        'The task requires at least 12 risks across input, storage, processing, and output. Multiple justified risk-control-evidence rows may arise from one case issue; do not invent unrelated incidents merely to reach 12.',
        'Publication decisions must be made separately for the CFO dashboard and AI summary. The Decision Gate is only an overall summary; students must document release/hold/qualification and supporting evidence for each output in their decision log.',
        'A technically accurate number can still be misleading if it is late or incomplete. Hold or clearly qualify dashboard/AI output until reconciliation and freshness gates pass.',
        'Generic recommendations without owner, frequency, evidence, exception handling, and follow-up should receive limited credit.'
      ],
      rubric:'CA Core mapping 20%; risk diagnosis 25%; control and evidence 25%; processing-method judgment 15%; professional memo 15%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="2"]');
  if(opt)opt.textContent='Sesi 2 — '+s2.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===2){
    select.dispatchEvent(new Event('change'));
  }
})();