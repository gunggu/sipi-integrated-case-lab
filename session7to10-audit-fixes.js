(function(){
  const s7=sessions.find(s=>s.n===7);
  const s8=sessions.find(s=>s.n===8);
  const s9=sessions.find(s=>s.n===9);
  const s10=sessions.find(s=>s.n===10);

  if(s7){
    // Make the Decision Gate explicitly about the report named in the official case.
    s7.decision=['Margin/WIP report: Release','Margin/WIP report: Release with clear qualification','Margin/WIP report: Hold'];
    if(!s7.instructor.expected.includes('The official teaching note allows a clearly qualified release only when residual uncertainty is explicitly bounded and disclosed; otherwise HOLD remains the defensible decision while material gaps remain open.')){
      s7.instructor.expected.push('The official teaching note allows a clearly qualified release only when residual uncertainty is explicitly bounded and disclosed; otherwise HOLD remains the defensible decision while material gaps remain open.');
    }
  }

  if(s8){
    // The official task separates item-level actions (hold/reverse/recalculate/investigate)
    // from the overall payroll release decision. Avoid a pseudo-conditional release option.
    s8.decision=['Overall payroll: Release','Overall payroll: Hold / No-go'];
    if(!s8.instructor.expected.includes('Use record-level actions for individual employees/payments (hold, reverse/recover, recalculate, investigate). Use the Decision Gate only for the overall payroll-file release decision.')){
      s8.instructor.expected.push('Use record-level actions for individual employees/payments (hold, reverse/recover, recalculate, investigate). Use the Decision Gate only for the overall payroll-file release decision.');
    }
    if(!s8.instructor.expected.includes('Under the current case facts, HOLD/NO-GO is the teaching-note conclusion until critical issues are corrected, reconciled, independently reapproved where required, and evidenced.')){
      s8.instructor.expected.push('Under the current case facts, HOLD/NO-GO is the teaching-note conclusion until critical issues are corrected, reconciled, independently reapproved where required, and evidenced.');
    }
  }

  if(s9){
    // The student DOCX requires release/hold/qualify PER OUTPUT, while the simulator
    // offers one Decision Gate. Reframe that gate as an overall package summary and
    // require output-level decisions in the Investigation Notebook.
    s9.decision=['Overall publication package: Release','Mixed per-output decisions — document each output','Overall publication package: Hold'];
    if(!s9.instructor.expected.includes('The Decision Gate is only an overall package summary. Students must document a separate Release / Hold / Qualify decision for each relevant output (financial statements, XBRL, AI narrative, and any managerial output) in the Investigation Notebook and memo.')){
      s9.instructor.expected.push('The Decision Gate is only an overall package summary. Students must document a separate Release / Hold / Qualify decision for each relevant output (financial statements, XBRL, AI narrative, and any managerial output) in the Investigation Notebook and memo.');
    }
    if(!s9.instructor.expected.includes('With the current official case facts, financial statements/XBRL/narrative outputs should remain on HOLD while material blockers are open; qualification is potentially defensible for a managerial output only when uncertainty is bounded, decision-useful, approved, and transparently disclosed.')){
      s9.instructor.expected.push('With the current official case facts, financial statements/XBRL/narrative outputs should remain on HOLD while material blockers are open; qualification is potentially defensible for a managerial output only when uncertainty is bounded, decision-useful, approved, and transparently disclosed.');
    }
  }

  if(s10){
    s10.decision=['ICoFR effective — supported by complete evidence','ICoFR ineffective'];
    if(!s10.instructor.expected.includes('Do not treat the six displayed issues as the complete ICoFR scope. The student scoping memo must still identify significant accounts, assertions, processes, locations, and IT dependencies before the deficiency conclusion is finalised.')){
      s10.instructor.expected.push('Do not treat the six displayed issues as the complete ICoFR scope. The student scoping memo must still identify significant accounts, assertions, processes, locations, and IT dependencies before the deficiency conclusion is finalised.');
    }
    if(!s10.instructor.expected.includes('An effective conclusion requires affirmative support from complete scoping, valid populations, effective key controls, resolved severity/aggregation analysis, remediation evidence, and required governance communication; absence of an uncorrected year-end misstatement is not sufficient.')){
      s10.instructor.expected.push('An effective conclusion requires affirmative support from complete scoping, valid populations, effective key controls, resolved severity/aggregation analysis, remediation evidence, and required governance communication; absence of an uncorrected year-end misstatement is not sufficient.');
    }
  }

  const select=document.getElementById('sessionSelect');
  if(select && [7,8,9,10].includes(Number(select.value))){
    select.dispatchEvent(new Event('change'));
  }
})();