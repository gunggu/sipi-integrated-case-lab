const EVIDENCE_DATA = [
{
 id:"E01",category:"Systems",title:"Enterprise System Landscape",type:"Architecture note",source:"Enterprise Architecture Office",date:"2026-09-15",
 summary:"Ringkasan arsitektur aplikasi dan aliran informasi utama PT NusaNiaga Digital.",
 sections:[
  {heading:"Landscape",headers:["Layer","Components"],rows:[
   ["Channels","POS stores; webstore; Marketplace A, B, C"],
   ["Integration","API gateway; supplier portal; bank host-to-host"],
   ["Core","Cloud ERP: Sales, A/R, Procurement, A/P, GL"],
   ["Data & reporting","Nightly data lake; CFO dashboard; AI narrative service"]
  ]},
  {heading:"Notes",text:"Tidak semua source menggunakan jadwal refresh yang sama. ERP adalah system of record untuk transaksi yang berhasil diposting."}
 ]
},
{
 id:"E02",category:"Data",title:"Source-to-Target Reconciliation Snapshot",type:"Reconciliation extract",source:"Integration Operations",date:"2026-09-14",
 summary:"Snapshot jumlah pesan dari tiga marketplace untuk satu hari operasi.",
 sections:[
  {heading:"Daily counts",headers:["Source","Source messages","Gateway received","ERP posted","Rejected","Retry-tagged"],rows:[
   ["Marketplace A","3,984","3,984","3,984","0","0"],
   ["Marketplace B","3,211","3,211","3,194","17","0"],
   ["Marketplace C","3,045","3,083","3,045","0","38"]
  ]},
  {heading:"Queue status",headers:["Queue","Open items","Oldest age"],rows:[
   ["Rejected interface","17","11h 42m"],
   ["Retry review","38","10h 58m"]
  ]}
 ]
},
{
 id:"E03",category:"Data",title:"Customer Master Quality Scan",type:"Analytics output",source:"Data Governance",date:"2026-09-10",
 summary:"Hasil matching awal terhadap customer master. Kandidat duplicate belum seluruhnya dikonfirmasi.",
 sections:[
  {heading:"Population",headers:["Metric","Value"],rows:[
   ["Active customer records","48,620"],
   ["Probable duplicate candidates","2,334"],
   ["Candidate rate","4.8%"]
  ]},
  {heading:"Example candidates",headers:["Record A","Record B","Similarity note"],rows:[
   ["C01882 — CV Sinar Abadi","C44107 — CV. Sinar Abadi","Name 96%; same tax ID"],
   ["C10221 — PT Lestari Jaya","C37911 — Lestari Jaya Group","Name 82%; different tax ID"],
   ["C24019 — Toko Mentari","C24077 — Toko Mentari 2","Same phone; different address"]
  ]}
 ]
},
{
 id:"E04",category:"ERP",title:"ERP Vendor Selection Scorecard",type:"Selection worksheet",source:"ERP Steering Committee",date:"2025-11-18",
 summary:"Scorecard final yang digunakan untuk memilih cloud ERP.",
 sections:[
  {heading:"Criteria",headers:["Criterion","Weight","Vendor Alpha","Vendor Beta"],rows:[
   ["Functional fit","30%","86","89"],
   ["Subscription price","45%","92","74"],
   ["Implementation duration","15%","84","86"],
   ["Local support","10%","78","88"]
  ]},
  {heading:"Items not scored",headers:["Item","Status"],rows:[
   ["Five-year TCO","Narrative only"],
   ["Exit / data portability","Not scored"],
   ["Partner capability","Not scored"],
   ["Product roadmap","Not scored"]
  ]}
 ]
},
{
 id:"E05",category:"ERP",title:"Fit-Gap Register Extract",type:"Fit-gap log",source:"ERP PMO",date:"2026-01-22",
 summary:"Cuplikan fit-gap register setelah design workshop.",
 sections:[
  {heading:"Items",headers:["ID","Process","Decision","Owner","Status"],rows:[
   ["FG-11","Order entry","Standard configuration","Sales Ops","Closed"],
   ["FG-17","Credit approval","Spreadsheet workaround pending configuration","Finance/Sales","Open"],
   ["FG-23","Supplier onboarding","Workflow configuration","Procurement","Closed"],
   ["FG-31","Bank file approval","Standard configuration","Treasury","Closed"]
  ]},
  {heading:"FG-17 note",text:"Spreadsheet disimpan di shared drive. ERP order release menggunakan status yang diinput kembali oleh sales operations."}
 ]
},
{
 id:"E06",category:"ERP",title:"Opening Balance Migration Reconciliation",type:"Migration workbook",source:"Finance Transformation",date:"2026-03-28",
 summary:"Ringkasan perbandingan legacy dan ERP pada cutover rehearsal terakhir.",
 sections:[
  {heading:"Balances",headers:["Account","Legacy","ERP loaded","Difference","Sign-off"],rows:[
   ["Accounts receivable","12,480,000,000","12,550,000,000","+70,000,000","Pending"],
   ["Accounts payable","9,700,000,000","9,660,000,000","-40,000,000","Pending"],
   ["Inventory","18,220,000,000","18,220,000,000","0","Signed"]
  ]},
  {heading:"Open items",text:"A/R and A/P differences are assigned to the migration team. Supporting-schedule reconciliation is not attached to this workbook."}
 ]
},
{
 id:"E07",category:"Access",title:"High-Risk Role Capability Matrix",type:"Access matrix",source:"IAM Administration",date:"2026-09-12",
 summary:"Capability matrix untuk empat user dengan elevated access selama stabilisation.",
 sections:[
  {heading:"Capabilities",headers:["User","Vendor bank change","Prepare payment batch","Release payment","Privileged admin"],rows:[
   ["U-AP07 — AP Power User","Yes","Yes","No","No"],
   ["U-TR02 — Treasury Manager","No","No","Yes","No"],
   ["U-IT03 — ERP Admin","No","No","No","Yes"],
   ["U-FI09 — Finance Controller","No","No","No","No"]
  ]},
  {heading:"Access note",text:"U-AP07 access was approved for stabilisation. Approval record does not state an expiry date."}
 ]
},
{
 id:"E08",category:"ERP",title:"UAT and Cutover Coverage Matrix",type:"Test matrix",source:"ERP PMO",date:"2026-03-30",
 summary:"Status end-to-end UAT dan cutover rehearsal sebelum production launch.",
 sections:[
  {heading:"Coverage",headers:["Scenario","Status","Evidence"],rows:[
   ["Order-to-cash happy path","Pass","UAT-101"],
   ["Procure-to-pay happy path","Pass","UAT-204"],
   ["API interface failure","Not executed","—"],
   ["Rejected bank payment","Not executed","—"],
   ["Month-end close","Partial","UAT-330"],
   ["Rollback rehearsal","Not executed","—"]
  ]}
 ]
},
{
 id:"E09",category:"Access",title:"Privileged Review and Exception Ageing",type:"Control evidence",source:"IT Risk",date:"2026-09-13",
 summary:"Dua kontrol monitoring yang berjalan pada periode berjalan.",
 sections:[
  {heading:"Privileged review",headers:["Quarter","Due","Completed","Reviewer"],rows:[
   ["Q1","2026-04-05","2026-04-03","IT Security Manager"],
   ["Q2","2026-07-05","2026-07-26","IT Security Manager"]
  ]},
  {heading:"Exception queue",headers:["Age bucket","Open items"],rows:[
   ["0–7 days","21"],["8–30 days","14"],[">30 days","9"]
  ]},
  {heading:"Procedure note",text:"Queue has named owners. The procedure contains no documented escalation threshold by age or severity."}
 ]
},
{
 id:"E10",category:"Reporting",title:"CFO Dashboard and AI Narrative Metadata",type:"Reporting metadata",source:"Management Reporting",date:"2026-09-14",
 summary:"Metadata untuk dashboard dan AI-generated daily narrative.",
 sections:[
  {heading:"Refresh status",headers:["Source","Last refresh","Dashboard label"],rows:[
   ["ERP","06:05","Current"],
   ["Marketplace A","06:02","Current"],
   ["Marketplace B","18:47 previous day","Current"],
   ["Marketplace C","05:58","Current"]
  ]},
  {heading:"AI narrative",headers:["Run","Source snapshot","Human reviewer","Release"],rows:[
   ["AI-0914-01","06:10 data lake snapshot","—","06:19"]
  ]}
 ]
},
{
 id:"E11",category:"Audit",title:"Privileged Activity Log Availability",type:"Evidence inventory",source:"Internal Audit",date:"2026-09-16",
 summary:"Availability map atas evidence untuk audit period enam bulan.",
 sections:[
  {heading:"Evidence map",headers:["Evidence","Coverage available","Requested audit period"],rows:[
   ["Privileged activity log","2026-08-17 to 2026-09-30","2026-04-01 to 2026-09-30"],
   ["IAM change tickets","2026-04-01 to 2026-09-30","2026-04-01 to 2026-09-30"],
   ["Quarterly access reviews","Q1 and Q2","Q1 and Q2"],
   ["HR termination report","Monthly Apr–Sep","Monthly Apr–Sep"]
  ]}
 ]
},
{
 id:"E12",category:"Third Party",title:"Cloud Assurance Scope Extract",type:"Assurance summary",source:"Vendor Management",date:"2026-09-09",
 summary:"Ringkasan scope SOC report dan complementary user entity controls.",
 sections:[
  {heading:"Scope",headers:["Service area","In report?","Note"],rows:[
   ["Core cloud infrastructure","Yes","Security and availability controls"],
   ["Managed database","Yes","Included"],
   ["Integration subservice IX-Bridge","No","Separate subservice provider"],
   ["Customer user provisioning","CUEC","Customer responsibility"]
  ]},
  {heading:"Period",text:"Report period: 2025-10-01 through 2026-06-30. No bridge letter is attached in the evidence folder."}
 ]
},
{
 id:"E13",category:"Revenue",title:"Revenue Exception Pack",type:"Exception register",source:"Revenue Operations",date:"2026-09-14",
 summary:"Exception register untuk shipment-to-bill, credit override, dan cash application.",
 sections:[
  {heading:"Shipment-to-bill",headers:["Shipment","Date","Amount","Invoice"],rows:[
   ["SH-4821","09-10","124,000,000","INV-8921"],
   ["SH-4822","09-10","78,000,000","—"],
   ["SH-4823","09-11","91,000,000","INV-8922"],
   ["SH-4830","09-11","66,500,000","—"]
  ]},
  {heading:"Exception counts",headers:["Exception","Population count","Open"],rows:[
   ["Shipment without invoice","12","12"],
   ["Credit override flagged","7","7"],
   ["Unmatched cash receipts","9","9"]
  ]}
 ]
},
{
 id:"E14",category:"Procurement",title:"Procure-to-Pay Exception Pack",type:"Exception register",source:"Procurement Operations",date:"2026-09-14",
 summary:"Cuplikan exception pada supplier portal, receiving, dan vendor master.",
 sections:[
  {heading:"PO retry pair",headers:["Request ID","PO","Created","Amount"],rows:[
   ["REQ-7719","PO-55181","10:14:02","185,000,000"],
   ["REQ-7719","PO-55182","10:14:09","185,000,000"]
  ]},
  {heading:"Receiving",headers:["GRN","PO qty visible?","Count method","Received qty"],rows:[
   ["GR-8841","Yes","Barcode first-scan","500"],
   ["GR-8842","No","Blind count","240"]
  ]},
  {heading:"Vendor bank change",headers:["Ticket","Maker","Checker","Callback record"],rows:[
   ["VM-2207","AP-04","AP-09","—"]
  ]}
 ]
},
{
 id:"E15",category:"Payments",title:"Payment Settlement Reconciliation",type:"Reconciliation extract",source:"Treasury",date:"2026-09-14",
 summary:"Status batch pembayaran setelah respons bank diterima.",
 sections:[
  {heading:"Rejected items",headers:["Payment","Invoice","Bank status","A/P status","GL cash status"],rows:[
   ["PAY-9911","AP-77401","Rejected","Paid","Posted"],
   ["PAY-9914","AP-77418","Rejected","Paid","Posted"],
   ["PAY-9918","AP-77433","Rejected","Paid","Posted"]
  ]},
  {heading:"Batch control",headers:["Batch amount","Bank accepted","Bank rejected","GL posted"],rows:[
   ["4,200,000,000","4,020,000,000","180,000,000","4,200,000,000"]
  ]}
 ]
},
{
 id:"E16",category:"Systems",title:"Board Assurance Request",type:"Board memo excerpt",source:"Board Secretariat",date:"2026-09-01",
 summary:"Mandat awal Board kepada CFO dan Head of Internal Audit.",
 sections:[
  {heading:"Excerpt",text:"Revenue grew 18% year-on-year. Cash conversion cycle did not improve. The Board requests assurance over the reliability of management information, ERP stabilisation, access, interfaces, and key revenue/payment controls."}
 ]
},
{
 id:"E17",category:"Data",title:"Business Definition Register",type:"Data dictionary",source:"Data Governance",date:"2026-08-29",
 summary:"Dua definisi yang digunakan untuk atribut 'active customer'.",
 sections:[
  {heading:"Definitions",headers:["Function","Definition"],rows:[
   ["Sales","Customer with an order in the last 12 months"],
   ["Finance","Customer with open A/R or cash activity in the last 6 months"]
  ]},
  {heading:"Governance",text:"Business glossary owner field is blank. Both definitions are used in different dashboard tiles."}
 ]
},
{
 id:"E18",category:"Data",title:"API Message Log Sample",type:"System log",source:"API Gateway",date:"2026-09-14",
 summary:"Sample message-level log around a timeout event.",
 sections:[
  {heading:"Messages",headers:["Message ID","Source","Event","Gateway status","ERP order"],rows:[
   ["MSG-C-4410","Marketplace C","Create order","202 Accepted","SO-77811"],
   ["MSG-C-4410-R1","Marketplace C","Retry","202 Accepted","SO-77812"],
   ["MSG-C-4411","Marketplace C","Create order","202 Accepted","SO-77813"],
   ["MSG-B-9920","Marketplace B","Create order","422 Rejected","—"]
  ]}
 ]
},
{
 id:"E19",category:"Data",title:"Duplicate Customer Review Sample",type:"Review worksheet",source:"Master Data Team",date:"2026-09-11",
 summary:"Manual review atas beberapa duplicate candidates.",
 sections:[
  {heading:"Review",headers:["Pair","Reviewer assessment","Action"],rows:[
   ["C01882 / C44107","Likely duplicate — same tax ID","Merge pending"],
   ["C10221 / C37911","Likely related entities — different tax ID","Keep separate"],
   ["C24019 / C24077","Needs customer confirmation","Open"]
  ]}
 ]
},
{
 id:"E20",category:"Procurement",title:"Vendor Bank Change Log",type:"Master-data log",source:"ERP Audit Trail",date:"2026-09-12",
 summary:"Audit trail atas perubahan rekening vendor untuk ticket VM-2207.",
 sections:[
  {heading:"Log",headers:["Time","User","Action"],rows:[
   ["09:11","AP-04","Changed bank account"],
   ["09:18","AP-09","Approved change"],
   ["09:44","SYS","Change effective"]
  ]},
  {heading:"Attached fields",headers:["Field","Value"],rows:[
   ["Vendor request email","Attached"],
   ["Independent callback","Blank"],
   ["Original approved contact used","Blank"]
  ]}
 ]
},
{
 id:"E21",category:"Procurement",title:"Supplier Portal Retry Log",type:"Technical log",source:"Supplier Portal",date:"2026-09-13",
 summary:"Log retry untuk tiga request pada periode dua jam.",
 sections:[
  {heading:"Retry events",headers:["Request","Initial result","Retry","PO outcome"],rows:[
   ["REQ-7719","Timeout","7 sec later","Two PO IDs"],
   ["REQ-7720","Timeout","6 sec later","One PO ID"],
   ["REQ-7728","200 OK","None","One PO ID"]
  ]},
  {heading:"Configuration",text:"Retry enabled up to 3 attempts. No idempotency-key field is present in the current request schema."}
 ]
},
{
 id:"E22",category:"Procurement",title:"Receiving Procedure and Two GRNs",type:"Procedure + records",source:"Warehouse Control",date:"2026-09-13",
 summary:"Prosedur receiving dan dua record yang diproses oleh petugas berbeda.",
 sections:[
  {heading:"Procedure",text:"Receiver should record actual quantity before comparing to purchase order. Exceptions above tolerance require supervisor review."},
  {heading:"Records",headers:["GRN","User","PO quantity display","Recorded qty","Supervisor review"],rows:[
   ["GR-8841","WH-17","Enabled","500","—"],
   ["GR-8842","WH-09","Hidden","240","Not required"]
  ]}
 ]
},
{
 id:"E23",category:"Procurement",title:"Three-Way Match Configuration",type:"Configuration extract",source:"ERP Configuration",date:"2026-08-25",
 summary:"Current tolerance settings used by automated invoice matching.",
 sections:[
  {heading:"Tolerance",headers:["Rule","Tolerance","Action"],rows:[
   ["Quantity difference","±5%","Auto-match within tolerance"],
   ["Price difference","±2%","Auto-match within tolerance"],
   ["Missing receiving record","0%","Block"],
   ["Duplicate supplier invoice number","Exact match","Block"]
  ]}
 ]
},
{
 id:"E24",category:"Revenue",title:"Unapplied Cash Queue",type:"Cash application report",source:"A/R Operations",date:"2026-09-14",
 summary:"Nine cash receipts remain unapplied; total equals Rp680 million.",
 sections:[
  {heading:"Queue sample",headers:["Receipt","Amount","Age","Reference"],rows:[
   ["RC-6620","240,000,000","1 day","Partial remittance"],
   ["RC-6601","180,000,000","4 days","No invoice reference"],
   ["RC-6572","110,000,000","8 days","Customer ID mismatch"],
   ["RC-6544","75,000,000","13 days","Multiple possible invoices"],
   ["Other 5","75,000,000","0–6 days","Mixed"]
  ]}
 ]
},
{
 id:"E25",category:"Revenue",title:"Credit Override Register",type:"Approval register",source:"Sales Operations",date:"2026-09-14",
 summary:"Tujuh override yang teridentifikasi oleh monthly credit review.",
 sections:[
  {heading:"Overrides",headers:["Order","Customer","Limit before","Order exposure","Requested by","Independent approval"],rows:[
   ["SO-77011","C-103","500m","630m","Sales Mgr A","—"],
   ["SO-77052","C-211","750m","910m","Sales Mgr A","—"],
   ["SO-77103","C-882","300m","365m","Sales Mgr B","—"],
   ["SO-77120","C-103","500m","590m","Sales Mgr A","—"],
   ["SO-77184","C-418","1.2b","1.34b","Sales Mgr B","—"],
   ["SO-77202","C-515","400m","470m","Sales Mgr A","—"],
   ["SO-77233","C-882","300m","345m","Sales Mgr B","—"]
  ]}
 ]
},
{
 id:"E26",category:"ERP",title:"Change Ticket with Complete Evidence",type:"Change record",source:"Change Management",date:"2026-09-05",
 summary:"Contoh satu change ticket yang telah ditutup.",
 sections:[
  {heading:"Ticket CHG-4408",headers:["Control evidence","Status"],rows:[
   ["Business approval","Present"],
   ["Configuration comparison","Present"],
   ["UAT evidence","Present"],
   ["Production migration log","Present"],
   ["Post-implementation review","Present"]
  ]}
 ]
},
{
 id:"E27",category:"Access",title:"Termination Access Reconciliation",type:"Control report",source:"IAM / HR",date:"2026-09-07",
 summary:"Monthly comparison HR termination list dengan active ERP identities.",
 sections:[
  {heading:"August report",headers:["HR terminations","Matched disabled accounts","Open exceptions"],rows:[
   ["24","24","0"]
  ]},
  {heading:"Reviewer",text:"Reviewed and signed by IAM Lead on 2026-09-07."}
 ]
},
{
 id:"E28",category:"Third Party",title:"Provider Bridge Communication",type:"Vendor communication",source:"Cloud Vendor",date:"2026-09-08",
 summary:"Email mengenai periode setelah SOC report end date.",
 sections:[
  {heading:"Excerpt",text:"Provider states there were no material changes to core infrastructure controls through 2026-08-31. The communication does not cover IX-Bridge, which is operated by a separate subservice provider."}
 ]
},
{
 id:"E29",category:"Audit",title:"Prior Internal Audit Follow-Up",type:"Follow-up record",source:"Internal Audit",date:"2026-06-20",
 summary:"Prior finding mengenai exception queue ownership telah ditandai closed oleh management.",
 sections:[
  {heading:"Finding IA-25-17",headers:["Original issue","Management action","IA retest"],rows:[
   ["No owner for integration exceptions","Owners assigned by process","Not performed — planned Q4"]
  ]},
  {heading:"Closure basis",text:"Management submitted a revised owner list. No ageing or escalation design was included in the submitted evidence."}
 ]
},
{
 id:"E30",category:"Governance",title:"Management Representation Excerpt",type:"Management statement",source:"CFO / CIO",date:"2026-09-15",
 summary:"Pernyataan tertulis manajemen sebelum Board assurance review.",
 sections:[
  {heading:"Excerpt",text:"Management believes the new platform is operating effectively. No fraud loss or material reporting error has been identified since go-live. Known exceptions are being handled by responsible teams."},
  {heading:"Attachments",text:"No control effectiveness matrix or exception ageing report is attached to this representation."}
 ]
}
];