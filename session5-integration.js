(function(){
  const s5=sessions.find(s=>s.n===5);
  if(!s5)return;

  Object.assign(s5,{
    title:'Audit SI, CAATs, dan Kualitas Bukti',
    mission:'Gunakan Applied Case 5 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menilai enam tujuan audit, membedakan control exception, evidence gap, dan scope limitation, merancang system-review procedure dan control test, memvalidasi populasi serta analytics logic, menentukan alternative procedures, dan menyusun temuan serta conclusion per audit objective.',
    metrics:[['30 hari','Privileged logs available'],['4','Changes without UAT/sign-off'],['6 bulan','Audit period']],
    modules:['Access & change evidence','Interface & analytics validation','Third-party & AI evidence'],
    moduleRecords:[
      [
        ['LOG-05-01','Privileged activity logs','Only 30 days of privileged logs are available for a six-month audit period','Evidence gap','alert'],
        ['CHG-05-02','Configuration changes','Four configuration changes lack retained UAT and user sign-off evidence','Control exception','alert'],
        ['SOD-05-03','Developer migration activity','Two configuration changes were migrated by the same developer involved in the change','SoD risk','alert']
      ],
      [
        ['IF-05-04','Interface exception reporting','Exception report omits rejected records from the reported population','Incomplete population','alert'],
        ['CAA-05-05','Full transaction extract','Auditor extracted the full transaction file but source-to-extract totals have not been reconciled','Unvalidated','alert']
      ],
      [
        ['SOC-05-06','Cloud provider SOC report','Report excludes the subservice data center and ends two months before the audit date','Scope/period gap','alert'],
        ['AI-05-07','AI exception summary','AI summary uses an input snapshot that has not been approved','Unreliable input','warn']
      ]
    ],
    records:[
      ['LOG-05-01','Privileged activity logs','Only 30 days of privileged logs are available for a six-month audit period','Evidence gap','alert'],
      ['CHG-05-02','Configuration changes','Four configuration changes lack retained UAT and user sign-off evidence','Control exception','alert'],
      ['SOD-05-03','Developer migration activity','Two configuration changes were migrated by the same developer involved in the change','SoD risk','alert'],
      ['IF-05-04','Interface exception reporting','Exception report omits rejected records from the reported population','Incomplete population','alert'],
      ['CAA-05-05','Full transaction extract','Auditor extracted the full transaction file but source-to-extract totals have not been reconciled','Unvalidated','alert'],
      ['SOC-05-06','Cloud provider SOC report','Report excludes the subservice data center and ends two months before the audit date','Scope/period gap','alert'],
      ['AI-05-07','AI exception summary','AI summary uses an input snapshot that has not been approved','Unreliable input','warn']
    ],
    evidence:[
      {id:'EV-05-01',title:'Privileged-log retention extract',type:'Security log evidence',status:'Incomplete evidence',reliability:'High',period:'Most recent 30 days of a six-month audit period',prepared:'IAM / security operations',detail:'Privileged activity logs are available only for the most recent 30 days. No complete six-month privileged-log population is currently available in the audit file.',limitation:'A 30-day extract cannot support a six-month conclusion by itself. Alternative evidence such as backups, SIEM exports, provider records, or incident tickets may be needed; remaining coverage limitations must be disclosed.'},
      {id:'EV-05-02',title:'Configuration-change register',type:'Change-management evidence',status:'Corroborated',reliability:'High',period:'Six-month audit period',prepared:'ERP change team',detail:'Four configuration changes are listed without retained UAT evidence and user sign-off. Approval and migration metadata are present, but testing and user acceptance support are incomplete.',limitation:'Missing UAT/sign-off evidence is a control and evidence concern; it does not by itself prove that the resulting configurations were technically incorrect.'},
      {id:'EV-05-03',title:'Migration and privileged-activity trace',type:'Change / access audit trail',status:'Confirmed fact',reliability:'High',period:'Relevant change dates',prepared:'ERP platform audit log',detail:'Two of the four changes were moved into the target environment by the same developer associated with the change activity. Independent post-implementation review evidence is not attached.',limitation:'The trace supports a segregation-of-duties risk and need for further testing; it does not establish unauthorized intent or financial impact.'},
      {id:'EV-05-04',title:'Interface exception and rejected-record reconciliation',type:'Processing evidence',status:'Conflicting evidence',reliability:'High',period:'Current audit sample period',prepared:'Integration operations',detail:'The standard exception report lists processing exceptions but does not include rejected records identified in the source/rejected queue. The populations therefore do not reconcile.',limitation:'The report cannot be treated as complete until rejected records are incorporated or separately reconciled and error-handling controls are tested.'},
      {id:'EV-05-05',title:'CAATs population-validation pack',type:'Audit analytics evidence',status:'Incomplete evidence',reliability:'Medium',period:'Six-month transaction population',prepared:'Internal audit analytics team',detail:'The auditor obtained an extract described as the full transaction population. Query logic and filters are documented, but source-to-extract record counts and control totals have not been independently reconciled.',limitation:'Full-population analytics do not compensate for an unvalidated population. Results should not be relied upon until completeness and extraction logic are validated.'},
      {id:'EV-05-06',title:'Cloud provider SOC report and coverage note',type:'Third-party assurance',status:'Incomplete evidence',reliability:'High',period:'SOC period ending two months before audit date',prepared:'Independent service auditor / audit team coverage note',detail:'The SOC report covers the primary service provider but excludes the subservice data center. The report period also ends two months before the audit date. CUECs are listed but have not yet been fully matched to NusaNiaga controls.',limitation:'The report cannot provide complete period and scope coverage by itself. Bridge evidence, subservice assurance, CUEC testing, or alternative procedures are required for uncovered scope and time.'},
      {id:'EV-05-07',title:'AI exception-summary evidence pack',type:'AI-assisted audit evidence',status:'Unverified',reliability:'Low',period:'Current audit analysis',prepared:'Internal audit / analytics team',detail:'AI was used to summarize identified exceptions. The input came from a snapshot that had not yet been formally approved or reconciled to the validated audit population.',limitation:'The summary must not be relied upon until the source is approved, input/population validity is established, output is checked against underlying exceptions, and human review is documented.'},
      {id:'EV-05-08',title:'Alternative-procedure tracker',type:'Audit planning / follow-up record',status:'Requires evaluation',reliability:'Medium',period:'Current audit',prepared:'Internal audit team',detail:'The audit team has identified possible alternative procedures for evidence gaps, including archived logs, SIEM exports, provider records, incident tickets, bridge evidence, subservice assurance, and reperformance of selected changes.',limitation:'The tracker records planned responses only; planned procedures are not evidence until performed, documented, and evaluated.'}
    ],
    decision:['Sufficient basis','Limited basis','Insufficient basis'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and this app as supporting evidence, not as a separate case.',
        'Require separate conclusions for each audit objective; do not collapse all issues into one global audit conclusion.',
        'Distinguish control exception, evidence gap, and scope limitation. The correct audit response differs for each.',
        'Do not accept full-population testing as persuasive until source-to-extract completeness, filters, logic, and rejected items are validated.',
        'For the 30-day log gap and SOC scope/period gap, require alternative procedures and explicit disclosure of any remaining limitation.',
        'Technology-produced evidence, including SOC reports, system extracts, analytics, and AI summaries, still requires scope, reliability, completeness, and corroboration assessment.',
        'Findings should use condition-criteria-cause-effect-recommendation and cite the evidence used.'
      ],
      rubric:'Six-objective mapping 20%; audit-program quality 25%; analytics/evidence validation 25%; findings and conclusions 20%; audit-committee memo 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="5"]');
  if(opt)opt.textContent='Sesi 5 — '+s5.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===5){
    select.dispatchEvent(new Event('change'));
  }
})();
