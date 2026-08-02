window.SIPI_DATA = {
  company: "PT NusaNiaga",
  iparec: [
    ["Issue", "Fakta relevan dan risiko utama."],
    ["Principle", "Konsep SIPI, assertion, framework, atau control objective yang tepat."],
    ["Analysis", "Penyebab, dampak, keterkaitan, kualitas bukti, dan ketidakpastian."],
    ["Recommendation", "Tindakan, owner, prioritas, dan waktu."],
    ["Evidence", "Bukti implementasi, operasi, retest, dan closure."],
    ["Conclusion", "Release, hold, investigate, escalate, go/no-go, atau ICoFR conclusion."]
  ],
  sessions: [
    {
      id:1, title:"Orientasi Sistem Informasi dan Pengendalian Internal", badge:"SI",
      summary:"Memetakan tujuan, aktor, komponen sistem, risiko, kontrol, tata kelola, dan peran akuntan pada ekosistem digital PT NusaNiaga.",
      objectives:["Membedakan sistem informasi dan teknologi informasi.","Menghubungkan tujuan, risiko, kontrol, informasi, dan monitoring.","Menilai goal conflict dan accountability antaraktor."],
      decisionPrompt:"Apakah landscape sistem PT NusaNiaga sudah mendukung tujuan operasi, pelaporan, dan kepatuhan secara seimbang?",
      decisions:["Adequate","Conditionally adequate","Not adequate"],
      facts:["Marketplace, POS, ERP, payroll, dan bank terhubung melalui beberapa interface.","Owner data pelanggan dan vendor belum ditetapkan secara formal.","Dashboard penjualan menggunakan definisi KPI yang berbeda antarunit."],
      evidence:[
        ["System landscape","Architecture","Marketplace → API → ERP → GL → dashboard. Payroll dan bank memakai koneksi terpisah."],
        ["Organisation chart","Governance","Finance, operations, IT, HR, treasury, and internal audit roles; data ownership belum jelas."],
        ["KPI glossary","Management report","Revenue, fulfilled order, dan active customer memiliki definisi berbeda antarunit."]
      ]
    },
    {
      id:2, title:"Data dan Sistem Informasi", badge:"DATA",
      summary:"Menelusuri economic event dari source document sampai database, processing, output, lineage, dan quality gate.",
      objectives:["Memetakan data processing cycle.","Menilai source-data, master, transaction, dan output controls.","Mengevaluasi completeness, accuracy, lineage, dan exception closure."],
      decisionPrompt:"Apakah data order marketplace dapat digunakan untuk dashboard dan posting ke GL?",
      decisions:["Release","Hold","Investigate"],
      facts:["1.248 order diterima marketplace, tetapi hanya 1.231 masuk ERP.","Rejected queue menampilkan 9 records; 8 records belum terjelaskan.","Customer ID pada source dan ERP memakai format berbeda."],
      evidence:[
        ["Source order extract","CSV extract","1.248 records; source total Rp4,82 miliar."],
        ["Interface control totals","Interface log","ERP accepted 1.231; rejected 9; total gap 8 records."],
        ["Data dictionary","Master data","Customer ID source: alphanumeric; ERP: numeric mapping table."],
        ["Exception queue","Operations report","9 rejects; only 1 has owner and disposition."]
      ]
    },
    {
      id:3, title:"Enterprise Resource Planning", badge:"ERP",
      summary:"Menilai fit-gap, configuration, customisation, implementation strategy, migration, testing, cutover, dan benefits realisation.",
      objectives:["Mengevaluasi vendor dan solution fit.","Membedakan configuration, extension, interface, dan core modification.","Menentukan go, conditional go, atau no-go pada cutover."],
      decisionPrompt:"Apakah ERP baru siap cutover pada awal bulan depan?",
      decisions:["Go","Conditional go","No-go"],
      facts:["Vendor score tertinggi memiliki gap pada tax localisation.","2.4% vendor master gagal migrasi.","Pricing configuration disetujui tetapi belum memiliki UAT dan rollback evidence."],
      evidence:[
        ["Vendor scorecard","Selection","Functional fit 35%, controls 20%, TCO 20%, implementation 15%, resilience 10%."],
        ["Fit-gap register","Implementation","Tax localisation gap classified as extension; owner and due date incomplete."],
        ["Migration report","Data migration","97.6% success; 418 vendor records rejected."],
        ["Cutover checklist","Readiness","UAT and rollback evidence missing for pricing configuration."]
      ]
    },
    {
      id:4, title:"Pengendalian Internal dan Kerangka Tata Kelola", badge:"CTRL",
      summary:"Menerapkan COSO Internal Control, COSO ERM, COBIT, control taxonomy, deficiency classification, dan accountability.",
      objectives:["Memilih framework sesuai kebutuhan.","Menilai design, operating, dan monitoring deficiency.","Menghubungkan objective, risk, control, owner, evidence, dan assurance."],
      decisionPrompt:"Apakah control design atas vendor-bank changes dan privileged access memadai?",
      decisions:["Adequate","Needs redesign","Escalate"],
      facts:["Perubahan rekening vendor tidak memerlukan independent callback.","Privileged access review terlambat dua bulan.","AI narrative dikirim tanpa human validation."],
      evidence:[
        ["Vendor change workflow","Process design","Maker-checker exists, but no independent beneficiary verification."],
        ["Access review report","Monitoring","Vendor and emergency IDs included; review completed 63 days late."],
        ["AI narrative procedure","Policy","Requires approval, but no validation checklist or retained source version."]
      ]
    },
    {
      id:5, title:"Audit Sistem Informasi", badge:"AUDIT",
      summary:"Merancang risk-based audit, system review, control testing, CAATs, population validation, evidence evaluation, dan audit finding.",
      objectives:["Menentukan audit objective dan procedure.","Memilih inquiry, inspection, observation, reperformance, test data, parallel simulation, atau GAS.","Menyusun finding berbasis condition–criteria–cause–effect–recommendation."],
      decisionPrompt:"Apakah auditor memiliki basis yang cukup untuk menyimpulkan controls efektif?",
      decisions:["Sufficient basis","Limited basis","Insufficient basis"],
      facts:["Access population mengecualikan emergency IDs.","Interface analytics memakai complete-looking extract tanpa source reconciliation.","Restore test belum dilakukan setelah cloud migration."],
      evidence:[
        ["Audit planning memo","Audit","Six objectives and risk-based scope; emergency access omitted."],
        ["Access population","Data extract","2.814 IDs; source completeness not reconciled."],
        ["Interface analytics","CAAT output","17 exceptions; query parameters documented, source total absent."],
        ["Backup report","IT operations","Successful backups; no post-migration restore test."]
      ]
    },
    {
      id:6, title:"Revenue-to-Cash dan Procure-to-Pay", badge:"CYCLES",
      summary:"Menilai dual-cycle flow, master data, SoD, credit, three-way match, payment, reconciliation, dan exception governance.",
      objectives:["Memetakan revenue dan expenditure cycles.","Menilai preventive, detective, corrective, dan monitoring controls.","Menentukan release, hold, reverse, investigate, atau escalate."],
      decisionPrompt:"Transaksi dan payment batch mana yang dapat dirilis?",
      decisions:["Release","Hold","Reverse","Investigate","Escalate"],
      facts:["Credit override dilakukan tanpa approval.","Dua purchase order duplikat dibuat untuk vendor yang sama.","Perubahan rekening vendor tidak memiliki callback independen."],
      evidence:[
        ["Sales order exception","Revenue","Credit limit exceeded by Rp420 juta; override user is sales manager."],
        ["PO duplicate report","Procurement","Two POs share vendor, date, amount, and item lines."],
        ["Vendor change log","Master data","Bank account changed two days before payment; maker-checker complete, callback absent."],
        ["Three-way match report","A/P","Receiving mismatch and duplicate invoice warning unresolved."]
      ]
    },
    {
      id:7, title:"Produksi dan Akuntansi Biaya", badge:"MFG",
      summary:"Menghubungkan BOM, routing, MPS/MRP, material, MES/IoT, quality, WIP, costing, variance, dan release gate.",
      objectives:["Menelusuri physical–digital–cost flow.","Merekonsiliasi material, yield, WIP, dan cost.","Menilai design for failure dan fallback evidence."],
      decisionPrompt:"Apakah WIP dan product margin dapat dirilis?",
      decisions:["Release","Adjust","Hold","Escalate"],
      facts:["BOM diubah tanpa approved effective date.","ERP material issue 9.800 kg; physical usage 10.250 kg.","Empat jam MES/IoT data hilang; WIP berbeda Rp1,24 miliar."],
      evidence:[
        ["BOM change log","Engineering","Version changed; approver and effective date blank."],
        ["Material reconciliation","Production","ERP issue 9.800 kg; physical usage 10.250 kg; return not posted."],
        ["MES outage report","Operations","Four-hour outage; manual fallback sheets incomplete."],
        ["WIP reconciliation","Cost accounting","Unexplained difference Rp1,24 miliar."]
      ]
    },
    {
      id:8, title:"Manajemen SDM dan Penggajian", badge:"PAY",
      summary:"Menilai employee master, attendance, payroll calculation, payment-file integrity, liabilities, remittance, privacy, dan reconciliation.",
      objectives:["Menelusuri hire–change–terminate sampai remittance.","Menilai SoD dan payroll integrity.","Merekonsiliasi roster–payroll–bank–GL–liability."],
      decisionPrompt:"Apakah payroll dapat dirilis?",
      decisions:["Release","Hold","Reverse","Recalculate","Investigate","Escalate"],
      facts:["Dua pegawai terminasi masih aktif dan dibayar.","Bank file diedit setelah approval.","Tax table belum diperbarui; payroll–bank–GL berbeda."],
      evidence:[
        ["Termination roster","HR","Two employees terminated before cut-off remain active."],
        ["Payroll register","Payroll","Register approved; includes two terminated staff."],
        ["Bank-file audit log","Treasury","Beneficiary file changed 37 minutes after approval."],
        ["Payroll reconciliation","Accounting","Register, bank, GL, and liability differ by Rp780 juta."]
      ]
    },
    {
      id:9, title:"Buku Besar dan Pelaporan", badge:"GL",
      summary:"Menghubungkan source-to-GL, journals, reconciliation, close, statements, managerial reports, XBRL, AI narrative, dan publication gate.",
      objectives:["Menilai interface and journal governance.","Mengevaluasi close and reconciliation evidence.","Membuat keputusan terpisah untuk statements, XBRL, dan narrative."],
      decisionPrompt:"Output mana yang dapat dipublikasikan?",
      decisions:["Release statements","Hold statements","Release XBRL","Hold XBRL","Release narrative","Hold narrative"],
      facts:["Revenue extract berbeda dari GL Rp2,1 miliar.","Manual journal Rp3,4 miliar tidak memiliki support memadai.","XBRL context/scale salah dan AI narrative memakai pre-close snapshot."],
      evidence:[
        ["Source-to-GL reconciliation","Close","Difference Rp2,1 miliar; eight interface items unresolved."],
        ["Manual journal listing","Close","Late journal Rp3,4 miliar; support describes purpose but not calculation."],
        ["XBRL validation","Digital reporting","Context and scale errors remain."],
        ["AI narrative pack","Reporting","Generated from D+1 snapshot; final close is D+3."]
      ]
    },
    {
      id:10, title:"Internal Control over Financial Reporting", badge:"ICoFR",
      summary:"Melakukan scoping, RCM, walkthrough, testing, population validation, deficiency evaluation, aggregation, communication, dan conclusion.",
      objectives:["Melakukan risk-based scoping.","Membedakan design, implementation, dan operating effectiveness.","Menentukan deficiency severity dan ICoFR conclusion."],
      decisionPrompt:"Apakah manajemen dapat menyimpulkan ICoFR efektif?",
      decisions:["Effective","Ineffective","Insufficient basis"],
      facts:["Revenue review threshold terlalu tinggi.","Privileged review mengecualikan vendor/emergency IDs.","Management-override indicator belum dikomunikasikan ke audit committee."],
      evidence:[
        ["ICoFR scoping memo","Scoping","Revenue, A/P, payroll, close, and ITGC in scope."],
        ["Revenue review control","Walkthrough","Signed monthly; threshold and follow-up undocumented."],
        ["Access test population","Testing","Vendor and emergency IDs excluded."],
        ["Deficiency summary","Evaluation","Six issues listed separately; aggregation not documented."]
      ]
    },
    {
      id:11, title:"Kasus Integratif I", badge:"CASE I",
      summary:"Mengintegrasikan data, ERP, processes, controls, audit evidence, interdependencies, remediation, dan quality gates.",
      objectives:["Membangun process–data–system map.","Menilai root causes and aggregation.","Membuat separate operational and reporting decisions."],
      decisionPrompt:"Apakah operasi dan monthly reporting dapat dilanjutkan?",
      decisions:["Go","Conditional go","No-go operations","Release reporting","Hold reporting"],
      facts:["34 potential duplicate vendors; 9 shared bank accounts.","Buyer dapat membuat vendor dan menyetujui PO.","Rejected orders hilang dari queue; sales subledger berbeda dari GL Rp2,6 miliar."],
      evidence:[
        ["Integrated process map","Architecture","Order-to-cash, procure-to-pay, master data, interfaces, GL."],
        ["Vendor analytics","Master data","34 potential duplicates and 9 shared bank accounts."],
        ["Role matrix","Access","Buyer role can create vendor and approve PO."],
        ["Sales reconciliation","Reporting","Subledger differs from GL by Rp2,6 miliar."]
      ]
    },
    {
      id:12, title:"Kasus Integratif II", badge:"CASE II",
      summary:"Mengintegrasikan payroll, financial close, reporting, XBRL, AI narrative, deficiency aggregation, communication, dan ICoFR.",
      objectives:["Memetakan payroll-to-report.","Mengevaluasi deficiencies individual dan aggregate.","Membuat separate publication and ICoFR decisions."],
      decisionPrompt:"Apakah statements, XBRL, AI narrative, dan ICoFR dapat disetujui?",
      decisions:["Release statements","Hold statements","Release XBRL","Hold XBRL","Release AI narrative","Hold AI narrative","ICoFR effective","ICoFR ineffective"],
      facts:["Dua pegawai terminasi dibayar; payroll difference Rp780 juta.","Unsupported journal Rp1,9 miliar; suspense Rp430 juta >90 hari.","Repeated XBRL errors dan AI pre-close narrative."],
      evidence:[
        ["Payroll-to-report pack","Integrated","Roster, register, bank, GL, liability reconciliation."],
        ["Journal and suspense pack","Close","Rp1,9bn unsupported journal; Rp430m suspense >90 days."],
        ["XBRL remediation log","Digital reporting","Context/scale error repeated after correction."],
        ["ICoFR deficiency summary","Assessment","No aggregation or audit-committee communication documented."]
      ]
    },
    {
      id:13, title:"Professional Update dan Readiness Review", badge:"READY",
      summary:"Menerjemahkan cloud, cyber, AI, RPA, analytics, biometric, privacy, vendor assurance, dan remediation menjadi evidence-backed readiness.",
      objectives:["Menilai shared responsibility and technology governance.","Menyusun 30/60/90-day remediation.","Menentukan ready, conditionally ready, atau not ready."],
      decisionPrompt:"Apakah ekosistem digital PT NusaNiaga siap dan dapat dipertanggungjawabkan?",
      decisions:["Ready","Conditionally ready","Not ready"],
      facts:["Cloud CUECs belum memiliki owner; backup belum diuji.","Vendor/emergency IDs tidak direview; AI evidence tidak disimpan.","RPA shared account; biometric data tanpa retention/deletion/fallback."],
      evidence:[
        ["SOC report extract","Vendor assurance","Relevant backup-recovery exception and CUECs."],
        ["Cloud responsibility matrix","Governance","Several CUECs have no owner."],
        ["Bot register","Automation","Two bots share one credential; direct production change."],
        ["Privacy assessment","Biometric","Purpose described; retention, deletion, and fallback absent."]
      ]
    },
    {
      id:14, title:"Capstone dan Mock Certification", badge:"FINAL",
      summary:"Mengintegrasikan seluruh Bab 1–9 menggunakan I‑P‑A‑R‑E‑C, evidence pack, prioritisation, peer review, publication gates, dan ICoFR conclusion.",
      objectives:["Memilih konsep yang tepat untuk fakta material.","Menyusun jawaban I‑P‑A‑R‑E‑C.","Membuat final readiness plan."],
      decisionPrompt:"Apa kesimpulan akhir untuk operasi, statements, XBRL, AI narrative, dan ICoFR?",
      decisions:["Go operations","Conditional operations","No-go operations","Release statements","Hold statements","Release XBRL","Hold XBRL","Release narrative","Hold narrative","ICoFR effective","ICoFR ineffective"],
      facts:["21 potential duplicate vendors; 7 shared bank accounts; buyer role conflict.","Pricing change tanpa UAT; terminated employees paid; bank file edited.","Subledger–GL Rp2,8 miliar; journal Rp2,2 miliar; XBRL repeated error; controls operate one week."],
      evidence:[
        ["Final vendor analytics","Master data","21 potential duplicates; 7 shared bank accounts."],
        ["Final role/change report","ERP","Buyer conflict; pricing approval without UAT/rollback."],
        ["Final payroll and close pack","Reporting","Terminated employees; edited bank file; Rp2.8bn difference; Rp2.2bn journal."],
        ["Final digital and remediation pack","ICoFR","Repeated XBRL error; AI pre-close snapshot; one-week control operation."]
      ]
    }
  ]
};
