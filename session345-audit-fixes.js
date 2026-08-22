(function(){
  const s3=sessions.find(s=>s.n===3);
  const s4=sessions.find(s=>s.n===4);
  const s5=sessions.find(s=>s.n===5);

  if(s3){
    // Align exactly with the official Session 3 teaching-note rubric.
    s3.instructor.rubric='Vendor and solution evaluation 20%; fit-gap and implementation alternatives 20%; readiness and evidence 25%; success/failure analysis 15%; decision and memo 20%.';

    // The teaching note expects broader readiness thinking, but the case does not state
    // that security/performance/recovery testing is absent. Preserve that distinction.
    const uat=s3.evidence.find(e=>e.id==='EV-03-06');
    if(uat){
      uat.limitation='Successful normal-flow tests cannot be extrapolated to untested exception and close conditions. This evidence also does not establish whether security, performance, and recovery testing exists elsewhere; request and evaluate such evidence before concluding overall readiness.';
    }

    if(!s3.instructor.expected.includes('Assess critical success/failure factors explicitly; the official case requires this as a separate analysis, not merely as part of the go-live recommendation.')){
      s3.instructor.expected.push('Assess critical success/failure factors explicitly; the official case requires this as a separate analysis, not merely as part of the go-live recommendation.');
    }
  }

  if(s4){
    // The case asks whether controls are present, functioning, and integrated. Escalation
    // is a recommendation, not a mutually exclusive overall control conclusion.
    s4.decision=[
      'Present, functioning, and integrated',
      'Present but not functioning / not integrated',
      'Control design inadequate',
      'Insufficient basis'
    ];

    if(!s4.instructor.expected.includes('The required risk-control-evidence matrix has at least 10 rows; this does not mean the mock app must contain 10 separate findings. Students may derive multiple control rows from the five case issues when justified.')){
      s4.instructor.expected.push('The required risk-control-evidence matrix has at least 10 rows; this does not mean the mock app must contain 10 separate findings. Students may derive multiple control rows from the five case issues when justified.');
    }
    if(!s4.instructor.expected.includes('Treat escalation to the audit committee as part of recommendation and governance response, not as a substitute for the required assessment of whether controls are present, functioning, and integrated.')){
      s4.instructor.expected.push('Treat escalation to the audit committee as part of recommendation and governance response, not as a substitute for the required assessment of whether controls are present, functioning, and integrated.');
    }
  }

  if(s5){
    // The DOCX requires a conclusion for each of six audit objectives. The existing
    // simulator Decision Gate stores one value, so define it explicitly as an OVERALL
    // evidence-basis assessment and require objective-level conclusions in the notes.
    s5.decision=[
      'Overall basis sufficient',
      'Overall basis limited',
      'Overall basis insufficient'
    ];

    if(!s5.instructor.expected.includes('The Decision Gate is only the overall evidence-basis assessment. Students must still document a separate conclusion for each of the six audit objectives in the Investigation Notebook and final memo, as required by the case.')){
      s5.instructor.expected.push('The Decision Gate is only the overall evidence-basis assessment. Students must still document a separate conclusion for each of the six audit objectives in the Investigation Notebook and final memo, as required by the case.');
    }
    if(!s5.instructor.expected.includes('Do not convert a missing document automatically into a control failure: distinguish control exception, evidence gap, and scope limitation before selecting an audit response.')){
      s5.instructor.expected.push('Do not convert a missing document automatically into a control failure: distinguish control exception, evidence gap, and scope limitation before selecting an audit response.');
    }
  }

  const select=document.getElementById('sessionSelect');
  if(select && [3,4,5].includes(Number(select.value))){
    select.dispatchEvent(new Event('change'));
  }
})();