(function(){
  const s13=sessions.find(s=>s.n===13);
  if(!s13)return;

  Object.assign(s13,{
    title:'Professional Update, Remediation & Readiness Review',
    mission:'Gunakan Student Learning Pack Sesi 13 sebagai sumber konteks dan tugas utama. Gunakan mock app ini sebagai evidence environment untuk memetakan technology risk ke objective-risk-control-owner-evidence-monitoring-remediation-residual risk; bedakan correction, containment, remediation, risk acceptance dan closure; susun prioritas containment/30/60/90 hari; lalu tentukan ready, conditionally ready, atau not ready berdasarkan operating evidence dan residual risk.',
    metrics:[['6','Core readiness issues'],['4','Action horizons'],['3','Readiness outcomes']],
    modules:['Cloud, SOC & cyber/access','AI, RPA & privacy','Remediation, retest & readiness'],
    moduleRecords:[
      [
        ['CUEC-13-01','Cloud CUECs','Complementary user entity controls exist but have no assigned NusaNiaga owner','Ownership gap','alert'],
        ['ACC-13-02','Privileged access population','Vendor and emergency accounts are excluded from the access-review population','Population incomplete','alert'],
        ['SOC-13-03','Relevant SOC exception','A relevant service-organisation exception has no documented management response','Response missing','alert']
      ],
      [
        ['AI-13-04','AI reporting evidence','Prompts and outputs are not retained','Traceability gap','alert'],
        ['RPA-13-05','RPA identity/change','Automation uses a shared account and direct production changes','Control design gap','alert'],
        ['BIO-13-06','Biometric/privacy','Biometric data has no retention/deletion rule or fallback procedure','Privacy/control gap','alert']
      ],
      [
        ['REM-13-07','30/60/90 remediation plan','Owners, closure evidence, retest and residual-risk decisions must be defined for each issue','Plan required','warn'],
        ['RDY-13-08','Bab 1–9 readiness matrix','Organisational readiness and three personal study priorities must be completed before final assessment','Review required','warn']
      ]
    ],
    records:[
      ['CUEC-13-01','Cloud CUECs','Complementary user entity controls exist but have no assigned NusaNiaga owner','Ownership gap','alert'],
      ['ACC-13-02','Privileged access population','Vendor and emergency accounts are excluded from the access-review population','Population incomplete','alert'],
      ['SOC-13-03','Relevant SOC exception','A relevant service-organisation exception has no documented management response','Response missing','alert'],
      ['AI-13-04','AI reporting evidence','Prompts and outputs are not retained','Traceability gap','alert'],
      ['RPA-13-05','RPA identity/change','Automation uses a shared account and direct production changes','Control design gap','alert'],
      ['BIO-13-06','Biometric/privacy','Biometric data has no retention/deletion rule or fallback procedure','Privacy/control gap','alert'],
      ['REM-13-07','30/60/90 remediation plan','Owners, closure evidence, retest and residual-risk decisions must be defined for each issue','Plan required','warn'],
      ['RDY-13-08','Bab 1–9 readiness matrix','Organisational readiness and three personal study priorities must be completed before final assessment','Review required','warn']
    ],
    evidence:[
      {id:'EV-13-01',title:'Cloud shared-responsibility and CUEC matrix',type:'Cloud governance evidence',status:'Ownership incomplete',reliability:'High',period:'Current service arrangement',prepared:'Cloud governance / process owners',detail:'Provider and customer responsibilities are mapped, but several complementary user entity controls relevant to NusaNiaga do not have a named internal owner or defined evidence source.',limitation:'A responsibility matrix demonstrates design intent, not operating effectiveness. Students must identify owner, evidence, monitoring, closure and residual risk for customer-side controls.'},
      {id:'EV-13-02',title:'Privileged-access population and review extract',type:'Cyber/access evidence',status:'Population incomplete',reliability:'High',period:'Current review cycle',prepared:'IAM / security administration',detail:'The periodic privileged-access review population excludes vendor accounts and emergency accounts.',limitation:'A clean review result cannot support a conclusion if the population is incomplete. Students must define a complete population, review criteria, exception handling and recovery/incident evidence where relevant.'},
      {id:'EV-13-03',title:'SOC report exception and management-response pack',type:'Third-party assurance evidence',status:'Management response missing',reliability:'High',period:'Relevant service period',prepared:'Service auditor / vendor-management team',detail:'A relevant SOC exception is documented, but NusaNiaga has no recorded assessment of applicability, impact, complementary controls, alternative procedures or remediation response.',limitation:'A SOC report is not self-executing assurance. Scope, period, subservice organisations, CUECs and exception relevance must be matched to NusaNiaga use before reliance.'},
      {id:'EV-13-04',title:'AI source-prompt-output-review evidence log',type:'AI governance evidence',status:'Traceability incomplete',reliability:'High',period:'Current AI-assisted reporting process',prepared:'Reporting / AI process owner',detail:'Approved source data may be identified, but prompts and generated outputs are not retained consistently, preventing complete source-to-output-to-review traceability.',limitation:'Missing retained prompt/output evidence does not by itself prove the published content is wrong; it limits reproducibility, validation, review and accountability.'},
      {id:'EV-13-05',title:'RPA bot register, credential and change log',type:'Automation evidence',status:'Shared identity / uncontrolled change',reliability:'High',period:'Current production bots',prepared:'Automation team',detail:'Production automation uses a shared account, and direct production changes can occur outside an independently approved change path.',limitation:'The evidence demonstrates identity and change-control weaknesses, not misuse or loss. Sustainable remediation requires unique bot identity, controlled credentials, least privilege, approved change, logging and exception ownership.'},
      {id:'EV-13-06',title:'Biometric/privacy control assessment',type:'Privacy and responsible-digitalisation evidence',status:'Retention/fallback gap',reliability:'High',period:'Current processing design',prepared:'Privacy / HR / security team',detail:'Biometric data is processed without a defined retention/deletion rule and without a documented fallback procedure for users who cannot use the biometric mechanism.',limitation:'Students must assess purpose, proportionality/minimisation, access, accuracy/correction, security, retention/deletion and fallback. The case does not state that a privacy breach has occurred.'},
      {id:'EV-13-07',title:'30/60/90 remediation and retest dashboard',type:'Readiness-management evidence',status:'To be completed',reliability:'Medium',period:'Forward-looking plan',prepared:'Cross-functional management',detail:'The required dashboard must distinguish immediate containment from 30-day, 60-day and 90-day actions and record owner, due date, closure evidence, retest, residual risk and approval.',limitation:'A planned action is not closure. Closure requires implementation, sufficient operation, retesting and resolution of exceptions; risk acceptance must be explicit where residual exposure remains.'},
      {id:'EV-13-08',title:'Bab 1–9 organisational and personal readiness matrix',type:'Readiness-review evidence',status:'To be completed',reliability:'Medium',period:'Pre-final assessment',prepared:'Student group / individual',detail:'The readiness matrix should identify organisational control/evidence gaps across Bab 1–9 and three personal study priorities before final assessment.',limitation:'This is a review and planning artefact, not evidence that operational controls are effective. Keep organisational readiness separate from individual learning readiness.'}
    ],
    decision:[
      'Ready — operating evidence supports closure and residual risk is acceptable',
      'Conditionally ready — specified closure/retest conditions remain',
      'Not ready — critical control/evidence gaps remain'
    ],
    instructor:{
      expected:[
        'Treat the Student Learning Pack as the primary task source; the mock app provides supporting evidence and does not replace the readiness matrix or 30/60/90 deliverables.',
        'Do not teach Session 13 as a stand-alone technology chapter. Every cloud, cyber, AI, RPA, analytics or privacy issue must be analysed using objective, risk, control, owner, evidence, monitoring, remediation and residual-risk concepts from Bab 1–9.',
        'For cloud/SOC, require explicit provider-versus-customer responsibility, CUEC ownership, scope/period/subservice relevance, exception response and alternative procedures where evidence coverage is insufficient.',
        'For cyber/access, challenge any conclusion based on an incomplete population. Vendor and emergency accounts must be considered in the privileged-access population and exception/recovery evidence must be evaluated where relevant.',
        'For AI-assisted reporting, require retained approved source, prompt/output version, validation, reviewer and approval evidence. Missing traceability is an evidence/governance weakness, not automatic proof that the output is wrong.',
        'For RPA, require unique bot identity, controlled credential/vault, least privilege, approved change, logging and exception ownership. Shared credentials and direct production changes are not sustainable controls.',
        'For biometric/privacy, assess purpose, minimisation/proportionality, access, accuracy/correction, security, retention/deletion and fallback. Do not infer a breach merely because governance rules are incomplete.',
        'Do not accept “update policy” or “fix the record” as closure. Separate correction, containment, remediation, risk acceptance and closure.',
        'A control is not closed until redesigned/implemented as needed, operated for a sufficient period, retested, and exceptions are resolved or residual risk is explicitly accepted by an authorised owner.',
        'The 30/60/90 plan should be prioritised using impact, likelihood, exploitability, interdependency and evidence readiness; each action needs owner, due date, closure evidence, retest and residual-risk treatment.',
        'The readiness decision must preserve assumptions, evidence, residual risk, dissent, approval and next review. Conditionally ready requires explicit conditions rather than a vague promise to improve later.',
        'Use the Bab 1–9 readiness matrix to separate organisational/control gaps from individual student-learning gaps, and require three personal study priorities as stated in the Student Learning Pack.',
        'Analytics appears in the Technology and Evidence Matrix as required conceptual coverage, but the case narrative does not state a separate analytics failure. Do not invent one; evaluate analytics governance using the professional questions provided in the learning pack.'
      ],
      rubric:'Risk/responsibility mapping 20%; control and remediation design 25%; 30/60/90 prioritisation 20%; evidence, retesting and residual risk 25%; professional communication 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="13"]');
  if(opt)opt.textContent='Sesi 13 — '+s13.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===13){
    select.dispatchEvent(new Event('change'));
  }
})();