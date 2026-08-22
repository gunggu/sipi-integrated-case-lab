(function(){
  const s7=sessions.find(s=>s.n===7);
  if(!s7)return;

  Object.assign(s7,{
    title:'Production & Costing — WIP and Margin Integrity',
    mission:'Gunakan Applied Case 7 sebagai sumber konteks utama. Gunakan mock app ini sebagai evidence environment untuk menilai apakah physical flow, digital flow, dan cost flow PT NusaNiaga konsisten; identifikasi critical documents/master/transaction data; analisis threats dan controls; lakukan reconciliation atas material, output, scrap, labour, overhead, WIP, finished goods, dan COGS; lalu tentukan apakah margin/WIP report dapat dirilis, harus ditahan, atau hanya dapat dirilis dengan qualification yang jelas.',
    metrics:[['450 kg','Material issue difference'],['4 jam','MES/IoT gap'],['Rp1,24 M','WIP difference']],
    modules:['Design, planning & master data','Production execution & quality evidence','Costing, WIP & release reconciliation'],
    moduleRecords:[
      [
        ['BOM-07-01','BOM sensor change','Engineering changed sensor BOM without retained approval and effective date','Block/validate','alert'],
        ['PLN-07-02','Forecast and capacity planning','MRP uses an old forecast and planner applied a capacity override without complete independent approval evidence','Review','warn']
      ],
      [
        ['MAT-07-03','Material issue quantity','ERP shows 9,800 kg issued while physical records show 10,250 kg','Unreconciled','alert'],
        ['MES-07-04','MES/IoT production log','Four hours of production activity are absent from MES/IoT records','Evidence gap','alert'],
        ['SCR-07-05','Scrap and rework recording','Scrap and rework were entered three days after the underlying production activity','Cut-off risk','warn']
      ],
      [
        ['OHR-07-06','Standard overhead rate','Standard overhead rate has not been reviewed for the current costing period','Review','warn'],
        ['WIP-07-07','WIP roll-forward','Cost-ledger WIP differs from physical roll-forward by Rp1.24 billion','Blocker','alert'],
        ['MAR-07-08','Product margin release','CFO plans to publish product margin the next day while material gaps remain unresolved','Hold candidate','alert']
      ]
    ],
    records:[
      ['BOM-07-01','BOM sensor change','Engineering changed sensor BOM without retained approval and effective date','Block/validate','alert'],
      ['PLN-07-02','Forecast and capacity planning','MRP uses an old forecast and planner applied a capacity override without complete independent approval evidence','Review','warn'],
      ['MAT-07-03','Material issue quantity','ERP shows 9,800 kg issued while physical records show 10,250 kg','Unreconciled','alert'],
      ['MES-07-04','MES/IoT production log','Four hours of production activity are absent from MES/IoT records','Evidence gap','alert'],
      ['SCR-07-05','Scrap and rework recording','Scrap and rework were entered three days after the underlying production activity','Cut-off risk','warn'],
      ['OHR-07-06','Standard overhead rate','Standard overhead rate has not been reviewed for the current costing period','Review','warn'],
      ['WIP-07-07','WIP roll-forward','Cost-ledger WIP differs from physical roll-forward by Rp1.24 billion','Blocker','alert'],
      ['MAR-07-08','Product margin release','CFO plans to publish product margin the next day while material gaps remain unresolved','Hold candidate','alert']
    ],
    evidence:[
      {id:'EV-07-01',title:'BOM version and engineering-change pack',type:'Design/master-data evidence',status:'Incomplete evidence',reliability:'High',period:'Current product revision',prepared:'Engineering / product master team',detail:'The sensor-component BOM was changed in the system. The retained pack does not include complete approval evidence or a clear effective date for the changed version.',limitation:'The evidence demonstrates a master-data governance gap, but does not by itself quantify the financial impact of the BOM change. Impact analysis and identification of affected production orders are still required.'},
      {id:'EV-07-02',title:'Forecast, MRP and capacity-override record',type:'Planning evidence',status:'Conflicting evidence',reliability:'Medium',period:'Current production planning cycle',prepared:'Production planning',detail:'The MRP run references an older forecast. A planner capacity override is visible, but independent approval and documented rationale are incomplete.',limitation:'An old forecast or override does not automatically mean the production plan is wrong. Demand, capacity, timing, rationale, and approval must be evaluated before concluding the planning impact.'},
      {id:'EV-07-03',title:'Material issue and physical movement reconciliation',type:'Material-flow evidence',status:'Unreconciled',reliability:'High',period:'Current production period',prepared:'Warehouse / production accounting',detail:'ERP records show 9,800 kg of material issued while physical movement records indicate 10,250 kg. Issue, return, scrap, transfer, and physical-count explanations have not been fully reconciled.',limitation:'The 450 kg difference is a confirmed inconsistency, but the evidence does not establish which source is correct until issue/return/scrap/count records are reconciled.'},
      {id:'EV-07-04',title:'MES/IoT availability and fallback pack',type:'Production-activity evidence',status:'Incomplete evidence',reliability:'Medium',period:'Four-hour system gap',prepared:'Manufacturing systems / operations',detail:'MES/IoT data contain a four-hour gap during production. Some manual/fallback records exist, but completeness, approval, sequence, and subsequent reconciliation have not been fully demonstrated.',limitation:'Technology-generated evidence cannot be presumed complete merely because the system normally operates automatically. The missing population, fallback controls, and reconciliation must be assessed.'},
      {id:'EV-07-05',title:'Scrap and rework register with posting timestamps',type:'Quality/cut-off evidence',status:'Corroborated',reliability:'High',period:'Current production period',prepared:'Quality / production accounting',detail:'Scrap and rework events occurred during production but were posted three days later. The register supports the delayed entry and identifies affected orders.',limitation:'Delayed posting supports cut-off and yield concerns, but the broader population must be reviewed before concluding that all scrap/rework is misstated.'},
      {id:'EV-07-06',title:'Standard overhead-rate support and variance pack',type:'Costing evidence',status:'Requires evaluation',reliability:'Medium',period:'Current costing period',prepared:'Cost accounting',detail:'The standard overhead rate in use has not been formally reviewed for the current period. Historical driver assumptions are available, but current-period approval and recalculation evidence are incomplete.',limitation:'An unreviewed rate is a costing-control concern; it does not establish the amount of over- or under-absorption until the rate, driver, volume, and variance are recalculated.'},
      {id:'EV-07-07',title:'Physical-digital-cost WIP roll-forward',type:'WIP reconciliation',status:'Material difference',reliability:'High',period:'Current close',prepared:'Production accounting / finance',detail:'The cost-ledger WIP balance differs from the physical roll-forward by Rp1.24 billion. Material, operation, scrap/rework, overhead, and completion components are not yet fully reconciled.',limitation:'The difference is a material blocker for a clean release decision, but a journal entry alone would not demonstrate that the underlying production/control failures are remediated.'},
      {id:'EV-07-08',title:'Product-margin release pack',type:'Reporting/release evidence',status:'Incomplete evidence',reliability:'Medium',period:'Planned next-day release',prepared:'Finance / management reporting',detail:'A product-margin report is scheduled for release the next day. The pack references the cost ledger but does not document closure of the material issue difference, MES/IoT gap, delayed scrap/rework, overhead-rate review, and WIP reconciliation.',limitation:'The pack supports a release-control concern. Students must determine whether evidence can be completed, whether a qualified release is defensible, or whether the report must remain on hold.'},
      {id:'EV-07-09',title:'Adjustment and residual-uncertainty tracker',type:'Close/remediation evidence',status:'Requires evaluation',reliability:'Medium',period:'Current close',prepared:'Controller / production accounting',detail:'Potential adjustments and alternative procedures are listed for the identified gaps, but several items lack final approval, evidence of reperformance, or explicit residual-uncertainty assessment.',limitation:'A proposed adjustment or alternative procedure is not closure evidence until performed, approved, and linked to the affected population and control issue.'}
    ],
    decision:['Release','Release with qualification','Hold'],
    instructor:{
      expected:[
        'Treat the DOCX case as the primary narrative and this app as supporting evidence, not as a separate case.',
        'Require students to distinguish physical flow, digital flow, and cost flow, and show where each can diverge across design, planning, material movement, production operations, quality, costing, WIP, finished goods, and COGS.',
        'BOM change is an unauthorized design/master-data change until approved version, effective date, and impact analysis are evidenced; identify affected orders before allowing clean use.',
        'Old forecast and capacity override indicate planning-control weakness; validate demand/capacity assumptions and require independent approval/rationale before concluding impact.',
        'The 9,800 kg versus 10,250 kg material difference must be reconciled across issue, return, scrap, transfer, and physical-count records before cost release.',
        'The four-hour MES/IoT gap is an evidence-completeness problem. Use approved fallback records and subsequent reconciliation, and assess the missing population rather than assuming automated evidence is complete.',
        'Delayed scrap/rework creates cut-off and yield distortion. Correct the affected period and review whether the issue extends beyond the identified entries.',
        'An unreviewed overhead rate requires validation of the approved rate and cost driver plus variance/recalculation; do not infer the adjustment amount without calculation.',
        'The Rp1.24 billion WIP difference is a material blocker. Require physical-digital-cost roll-forward and approved adjustment/closure evidence before a clean release.',
        'A journal adjustment alone does not remediate the underlying control failure. Students must separate accounting correction from control remediation.',
        'The case requires at least 12 threat-control-evidence rows. The seven substantive issues may generate multiple risks across completeness, accuracy, authorization, cut-off, valuation, occurrence, and reporting; do not invent extra incidents merely to reach 12.',
        'HOLD is the most defensible default while material gaps remain unresolved. A qualified release is acceptable only if remaining uncertainty is explicitly bounded, decision-useful, approved, and supported by sufficient evidence.'
      ],
      rubric:'Process/data mapping 20%; risk diagnosis 20%; control/evidence design 25%; reconciliation and release judgment 25%; memo 10%.'
    }
  });

  const opt=document.querySelector('#sessionSelect option[value="7"]');
  if(opt)opt.textContent='Sesi 7 — '+s7.title;

  const select=document.getElementById('sessionSelect');
  if(select && Number(select.value)===7){
    select.dispatchEvent(new Event('change'));
  }
})();