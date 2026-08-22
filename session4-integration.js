(function(){
  const s4=sessions.find(s=>s.n===4);
  if(!s4)return;

  Object.assign(s4,{
    title:'Internal Control, Frameworks, dan Accountability',
    mission:'Gunakan Applied Case 4 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menilai apakah pengendalian PT NusaNiaga benar-benar ada, berfungsi, dan terintegrasi; petakan objective-risk-control-evidence, COSO/ERM/COBIT relevance, deficiency type, Three Lines accountability, escalation, dan remediation sebelum menyusun memo audit committee.',
    metrics:[['5','Control issues'],['0','Cash loss required'],['3','Lines of accountability']],
    modules:['Transaction & access controls','Information & automation controls','Governance, monitoring & Three Lines'],
    moduleRecords:[
      [
        ['VEN-04-01','Vendor bank-account change','Change approved internally but no independent callback / beneficiary verification','High risk','alert'],
        ['ACC-04-02','Privileged access review','Scheduled review completed late; privileged population requires complete follow-up','Overdue','warn']
      ],
      [
        ['IF-04-03','Interface exception queue','Exceptions accumulate without named owner, ageing target, or documented closure','Open','alert'],
        ['DASH-04-04','Management dashboard release','Dashboard released although underlying data freshness is stale and exception summary is absent','Released','alert'],
        ['AI-04-05','AI-generated narrative','Narrative sent without retained human-validation evidence','Unvalidated','alert']
      ],
      [
        ['RISK-04-06','Risk-function issue log','Risk function records findings but does not evidence challenge, escalation, or closure tracking','Incomplete','warn'],
        ['IA-04-07','Internal audit involvement','Internal audit has not yet performed independent assurance over the five issues','Not assessed','warn'],
        ['AC-04-08','Audit-committee information pack','Committee receives dashboard without consolidated exception summary or control-status view','Incomplete','alert'],
        ['MGMT-04-09','Management conclusion','Management argues no control failure exists because no cash loss has occurred','Challenge','warn']
      ]
    ],
    records:[
      ['VEN-04-01','Vendor bank-account change','Change approved internally but no independent callback / beneficiary verification','High risk','alert'],
      ['ACC-04-02','Privileged access review','Scheduled review completed late; privileged population requires complete follow-up','Overdue','warn'],
      ['IF-04-03','Interface exception queue','Exceptions accumulate without named owner, ageing target, or documented closure','Open','alert'],
      ['DASH-04-04','Management dashboard release','Dashboard released although underlying data freshness is stale and exception summary is absent','Released','alert'],
      ['AI-04-05','AI-generated narrative','Narrative sent without retained human-validation evidence','Unvalidated','alert'],
      ['RISK-04-06','Risk-function issue log','Risk function records findings but does not evidence challenge, escalation, or closure tracking','Incomplete','warn'],
      ['IA-04-07','Internal audit involvement','Internal audit has not yet performed independent assurance over the five issues','Not assessed','warn'],
      ['AC-04-08','Audit-committee information pack','Committee receives dashboard without consolidated exception summary or control-status view','Incomplete','alert'],
      ['MGMT-04-09','Management conclusion','Management argues no control failure exists because no cash loss has occurred','Challenge','warn']
    ],
    evidence:[
      {id:'EV-04-01',title:'Vendor bank-change workflow and approval log',type:'Process/control evidence',status:'Incomplete evidence',reliability:'High',period:'Current month',prepared:'Accounts payable / master-data team',detail:'The workflow shows maker-checker approval for a vendor bank-account change. No independent callback, beneficiary verification, or equivalent evidence is attached before payment eligibility.',limitation:'The record demonstrates a control-design gap or incomplete control chain; it does not establish that a fraudulent payment occurred.'},
      {id:'EV-04-02',title:'Privileged-access review pack',type:'Access monitoring evidence',status:'Confirmed fact',reliability:'High',period:'Quarterly review cycle',prepared:'IAM / IT security',detail:'The privileged-access review was completed after its scheduled due date. The review pack lists high-privilege IDs, but timely removal/recertification evidence for all exceptions is not complete.',limitation:'Late review and incomplete follow-up indicate monitoring/operating weakness; assigned privilege alone does not prove misuse.'},
      {id:'EV-04-03',title:'Interface exception ageing report',type:'Exception-monitoring report',status:'Corroborated',reliability:'High',period:'Current processing cycle',prepared:'Integration operations',detail:'Open interface exceptions have accumulated. Several items have no named owner, target resolution date, or documented disposition/closure evidence.',limitation:'The report proves unresolved exceptions, but each item still requires root-cause and impact assessment before financial or operational consequences are concluded.'},
      {id:'EV-04-04',title:'Dashboard freshness and release record',type:'Management-reporting evidence',status:'Conflicting evidence',reliability:'High',period:'Latest dashboard release',prepared:'Reporting team',detail:'The dashboard was released while one underlying source was stale. The release record does not include a visible freshness warning or exception summary presented to decision makers.',limitation:'The evidence demonstrates a release-control and information-quality concern; it does not by itself quantify the decision impact.'},
      {id:'EV-04-05',title:'AI narrative preparation pack',type:'AI governance evidence',status:'Incomplete evidence',reliability:'Medium',period:'Latest reporting cycle',prepared:'Reporting / analytics team',detail:'An AI-generated narrative was distributed. The pack references source data but does not retain a completed human-validation checklist, reviewer sign-off, or documented challenge of generated statements.',limitation:'Absence of retained validation evidence does not prove every statement is wrong; it weakens traceability and accountability over the release.'},
      {id:'EV-04-06',title:'Risk-function issue register',type:'Second-line monitoring record',status:'Incomplete evidence',reliability:'Medium',period:'Current quarter',prepared:'Risk function',detail:'The five issues are recorded in the risk register. Fields for management response exist, but challenge notes, escalation criteria, due-date enforcement, and closure validation are incomplete.',limitation:'Recording a risk is not the same as demonstrating effective second-line challenge or remediation oversight.'},
      {id:'EV-04-07',title:'Internal-audit coverage memo',type:'Third-line assurance record',status:'Confirmed fact',reliability:'High',period:'Current audit plan',prepared:'Internal audit',detail:'The current audit plan does not yet include independent assurance over the five post-go-live issues. No testing conclusion on design or operating effectiveness has been issued.',limitation:'Lack of internal-audit work does not itself make first- or second-line controls ineffective; it means independent assurance is not yet available.'},
      {id:'EV-04-08',title:'Audit-committee reporting pack',type:'Oversight information',status:'Incomplete evidence',reliability:'High',period:'Latest committee meeting',prepared:'Management / corporate secretary',detail:'The committee pack contains the dashboard but no consolidated exception summary, deficiency classification, ageing, named control owners, or remediation status for the five issues.',limitation:'The pack shows an information/oversight gap; the evidence does not establish what committee members may have learned through other channels.'},
      {id:'EV-04-09',title:'Management position on control failure',type:'Management representation',status:'Management representation',reliability:'Low',period:'Post-go-live review',prepared:'Management',detail:'Management states that no control failure should be concluded because no cash loss has occurred to date.',limitation:'This is a management assertion, not independent evidence. A control deficiency can exist without realised cash loss; students must distinguish control condition from realised outcome.'}
    ],
    decision:['Controls integrated and adequate','Controls present but not integrated','Material remediation required','Escalate to audit committee'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and this app as supporting evidence, not as a separate case.',
        'Require students to identify objective and risk before naming a framework or control; framework labels alone are not analysis.',
        'Do not accept the absence of cash loss as evidence that no deficiency exists.',
        'Differentiate design, operating, and monitoring deficiencies; one issue may involve more than one layer when justified.',
        'Map accountability explicitly: management owns controls, risk/compliance challenges and monitors, internal audit provides independent assurance, and the audit committee oversees escalation and remediation.',
        'Require owner, frequency, evidence, escalation trigger, and remediation/closure evidence for proposed controls.'
      ],
      rubric:'Framework selection and integration 20%; risk/control diagnosis 25%; deficiency and evidence 25%; Three Lines and escalation 15%; audit-committee memo 15%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="4"]');
  if(opt)opt.textContent='Sesi 4 — '+s4.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===4){
    select.dispatchEvent(new Event('change'));
  }
})();
