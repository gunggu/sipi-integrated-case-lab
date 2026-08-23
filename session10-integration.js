(function(){
  const s10=sessions.find(s=>s.n===10);
  if(!s10)return;

  Object.assign(s10,{
    title:'ICoFR Assessment — Deficiency Evaluation Control Room',
    mission:'Gunakan Applied Case 10 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menyusun ICoFR scope dan risk-control matrix, menilai design/implementation serta operating effectiveness, mengevaluasi deficiency secara individual dan agregat termasuk qualitative factors dan compensating controls, lalu menentukan apakah kesimpulan ICoFR efektif dapat didukung oleh evidence dan governance communication yang lengkap.',
    metrics:[['6','Core ICoFR issues'],['3','Evaluation layers'],['2','Final conclusions']],
    modules:['Scoping, RCM & control precision','Design, implementation & operating effectiveness','Deficiency severity, remediation & governance'],
    moduleRecords:[
      [
        ['REV-10-01','Imprecise revenue review','Revenue review threshold is high enough that several material trends are not investigated','Design / precision concern','alert'],
        ['PAC-10-03','Incomplete privileged-access population','Emergency and vendor accounts are excluded from privileged-access review','Testing population incomplete','alert']
      ],
      [
        ['JRN-10-02','Late journals with conflicting access','Late manual journals were prepared and reviewed by persons with conflicting access','Operating / SoD concern','alert'],
        ['SUS-10-04','Recurring unresolved suspense items','Suspense account contains recurring unresolved items for three months','Recurring close deficiency','alert'],
        ['XBRL-10-05','Repeated XBRL tagging errors','Tagging errors reappeared after prior correction','Remediation effectiveness concern','alert']
      ],
      [
        ['OVR-10-06','Override indicator not communicated','Management-override indicator was identified but not communicated to the audit committee','Governance / qualitative factor','alert']
      ]
    ],
    records:[
      ['REV-10-01','Imprecise revenue review','Revenue review threshold is high enough that several material trends are not investigated','Design / precision concern','alert'],
      ['JRN-10-02','Late journals with conflicting access','Late manual journals were prepared and reviewed by persons with conflicting access','Operating / SoD concern','alert'],
      ['PAC-10-03','Incomplete privileged-access population','Emergency and vendor accounts are excluded from privileged-access review','Testing population incomplete','alert'],
      ['SUS-10-04','Recurring unresolved suspense items','Suspense account contains recurring unresolved items for three months','Recurring close deficiency','alert'],
      ['XBRL-10-05','Repeated XBRL tagging errors','Tagging errors reappeared after prior correction','Remediation effectiveness concern','alert'],
      ['OVR-10-06','Override indicator not communicated','Management-override indicator was identified but not communicated to the audit committee','Governance / qualitative factor','alert']
    ],
    evidence:[
      {id:'EV-10-01',title:'Revenue review threshold and precision pack',type:'Management-review control evidence',status:'Precision not demonstrated',reliability:'High',period:'Annual ICoFR assessment period',prepared:'Revenue controlling / financial reporting',detail:'The review control uses a threshold that leaves several material trends outside investigation. The retained pack shows the review criteria and exceptions generated under the current threshold.',limitation:'The evidence supports a design/precision concern, but severity still requires assessment of the risks that could be missed, potential magnitude, frequency, and whether other controls address those risks.'},
      {id:'EV-10-02',title:'Late manual-journal access and review trail',type:'Journal / SoD evidence',status:'Conflicting access identified',reliability:'High',period:'Year-end close',prepared:'General ledger / access administration',detail:'Late manual journals were prepared and reviewed by users whose access is not sufficiently segregated. The activity trail identifies preparation, review and access relationships.',limitation:'Conflicting access and late timing are strong control-risk indicators, not proof that every journal is misstated or improper. Broader population testing and independent review are required.'},
      {id:'EV-10-03',title:'Privileged-access review population definition',type:'IT-dependent control evidence',status:'Population incomplete',reliability:'High',period:'Annual access review',prepared:'IT security / control owner',detail:'The privileged-access review population excludes emergency and vendor accounts even though those account types can carry elevated access.',limitation:'Because the tested population is incomplete, a clean test result cannot support a conclusion over the full privileged-access control population. Additional scoping and testing are required.'},
      {id:'EV-10-04',title:'Suspense-account ageing and recurrence analysis',type:'Close-control evidence',status:'Recurring unresolved items',reliability:'High',period:'Three-month recurring pattern',prepared:'Financial close team',detail:'The suspense account contains unresolved items recurring across three months. The pack includes ageing and repeated-item patterns, but root cause and durable closure are incomplete.',limitation:'Recurring suspense items do not automatically establish a material weakness; however, repetition and unresolved causes increase the likelihood that the issue is systemic rather than isolated.'},
      {id:'EV-10-05',title:'XBRL remediation and re-performance evidence',type:'Financial-reporting review evidence',status:'Errors reappeared',reliability:'High',period:'Current reporting cycle',prepared:'External reporting team',detail:'XBRL tagging errors that had previously been corrected reappeared in subsequent output, indicating that prior remediation may not have addressed the underlying review or configuration weakness.',limitation:'Repeated errors support concern over remediation effectiveness, but evaluation should distinguish design, implementation and operation of the relevant reporting-review controls.'},
      {id:'EV-10-06',title:'Management-override indicator and communication trail',type:'Governance / qualitative-factor evidence',status:'Not communicated',reliability:'High',period:'Annual assessment',prepared:'Management / governance office',detail:'An indicator associated with potential management override was identified during the assessment but was not communicated to the audit committee.',limitation:'An override indicator is not itself proof of an actual override or misstatement. Its significance arises from the nature of the risk and the failure to communicate a potentially important qualitative factor to governance.'},
      {id:'EV-10-07',title:'Deficiency aggregation and severity worksheet',type:'ICoFR evaluation evidence',status:'Requires management conclusion',reliability:'Medium',period:'Annual assessment',prepared:'ICoFR assessment team',detail:'The worksheet brings together control objective, deficiency type, affected accounts/assertions/processes, potential magnitude, reasonable possibility, qualitative factors, compensating controls and aggregation considerations.',limitation:'Aggregation cannot be reduced to arithmetic. The quality of the conclusion depends on complete scoping, valid testing populations, evidence over compensating controls and explicit qualitative-factor analysis.'},
      {id:'EV-10-08',title:'Management conclusion and remediation communication pack',type:'ICoFR conclusion evidence',status:'Conclusion not yet supportable',reliability:'High',period:'Annual assessment',prepared:'Management / CFO office',detail:'Management argues that no material misstatement remains after year-end adjustments. The pack includes draft conclusion language and remediation tracking, but several control and communication issues remain unresolved.',limitation:'Correcting recorded misstatements does not by itself remediate control deficiencies. Management must evaluate potential misstatement, reasonable possibility, aggregation, qualitative factors, remediation evidence and required governance communication before concluding ICoFR effective.'}
    ],
    decision:['ICoFR effective','ICoFR ineffective'],
    instructor:{
      expected:[
        'Treat the DOCX as the primary case narrative and the mock app as supporting evidence, not as a separate case.',
        'Require a scoping memo that identifies significant accounts, assertions, processes, locations and IT dependencies before students jump to individual deficiencies.',
        'For every issue, separate design, implementation and operating-effectiveness assessment. A control can exist on paper yet be imprecise or fail in operation.',
        'The revenue review is primarily a design/precision issue: assess what risks the high threshold can miss and the potential magnitude of those missed items.',
        'Late manual journals with conflicting access create operating, segregation-of-duties and override risk. Test a broader population and require sufficiently independent review rather than inferring guilt from timing alone.',
        'The privileged-access review cannot support an effective conclusion while emergency and vendor accounts are excluded from the relevant population. Population completeness is part of control testing validity.',
        'Recurring suspense items require root-cause and recurrence analysis. Repetition across periods can increase severity because it suggests a process weakness rather than an isolated item.',
        'Repeated XBRL errors after correction indicate that remediation may not be operating effectively; distinguish correction of individual outputs from remediation of the underlying control.',
        'The uncommunicated management-override indicator is both a governance/communication failure and a qualitative severity factor. The indicator is not proof of misconduct, but its nature matters in deficiency evaluation.',
        'Do not accept management’s argument that no material misstatement remains after adjustment. Corrected misstatement is not the same as remediated deficiency; evaluate potential magnitude and reasonable possibility.',
        'Evaluate deficiencies individually and in aggregate, including qualitative factors and any compensating controls whose design and operating effectiveness are themselves supported by evidence.',
        'An ICoFR-effective conclusion requires complete documentation, valid testing populations, supported remediation and appropriate communication. Based on the official teaching note, an ineffective conclusion is defensible unless evidence disproves a material weakness individually or in aggregate.'
      ],
      rubric:'Scoping and RCM 20%; design/operating evaluation 25%; deficiency severity and aggregation 25%; communication/remediation 15%; conclusion and memo 15%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="10"]');
  if(opt)opt.textContent='Sesi 10 — '+s10.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===10){
    select.dispatchEvent(new Event('change'));
  }
})();