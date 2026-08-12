# Panduan Mahasiswa

## SIPI Integrated Case & Certification Lab

## 1. Tujuan aplikasi

SIPI Integrated Case & Certification Lab adalah lingkungan mock case PT NusaNiaga. Aplikasi membantu Anda memahami kasus melalui eksplorasi modul, record, evidence, clue, evidence citation, dan decision gate.

Aplikasi ini **bukan ERP sungguhan** dan bukan pengganti Modul SIPI. Gunakan bersama modul, slide, kasus, dan instruksi dosen.

## 2. Hasil belajar yang diharapkan

Setelah menggunakan aplikasi, Anda diharapkan mampu:

- memahami konteks proses dan sistem;
- mengenali fakta dan anomali;
- membedakan confirmed fact, incomplete evidence, conflicting evidence, management representation, dan corroborated evidence;
- menghubungkan issue, risk, control, evidence, dan decision;
- menyatakan limitation serta evidence yang belum tersedia;
- membuat keputusan profesional yang traceable dan dapat dipertanggungjawabkan.

## 3. Sebelum mulai

1. Gunakan browser modern pada laptop atau tablet.
2. Gunakan perangkat dan browser yang sama sampai tugas selesai.
3. Progres disimpan pada browser menggunakan `localStorage`, bukan pada server.
4. Jangan menghapus browser data sebelum hasil diekspor atau dikumpulkan.
5. Pastikan aplikasi berada pada **Student Mode** kecuali dosen menginstruksikan lain.

## 4. Struktur aplikasi

### Briefing

Menampilkan fokus sesi, misi investigasi, indikator awal, alur kerja, dan pada Sesi 14 timer mock certification opsional.

Indikator dashboard adalah **signal awal**, bukan kesimpulan.

### ERP Mock-up

Menampilkan modul dan record simulasi. Pada Sesi 11–14, setiap tab modul memiliki dataset yang berbeda sehingga eksplorasi tidak hanya mengganti nama tab.

Saat membaca record, tanyakan:

- objective atau assertion apa yang terdampak;
- actor dan proses mana yang terlibat;
- control apa yang seharusnya ada;
- evidence apa yang mendukung atau masih hilang;
- apakah record perlu digunakan sebagai clue material.

### Evidence Room

Setiap evidence memiliki **Evidence ID**, tipe, status, reliability, observed content, dan limitation. Evidence ID digunakan sebagai citation token pada catatan dan keputusan.

Jangan menerima evidence begitu saja. Nilai:

- source;
- period;
- completeness;
- reliability;
- approval;
- logic;
- limitation;
- conflict dengan evidence lain;
- hubungan dengan record.

### Investigation Notebook

Pilih clue material, pilih evidence citation yang relevan, lalu tulis catatan I-P-A-R-E-C.

Format minimum:

> Issue → Principle → Analysis → Recommendation → Evidence IDs → Residual uncertainty → Conclusion

### Decision Gate

Pilih keputusan sesuai konteks. Basis keputusan **tidak dapat disimpan tanpa minimal satu evidence citation** dan harus memuat reasoning yang cukup substantif.

## 5. Alur penggunaan yang disarankan

1. Baca misi dan required decision.
2. Eksplorasi setiap modul yang relevan.
3. Buka record dan evidence.
4. Bedakan fakta, limitation, conflict, dan management explanation.
5. Pilih clue material.
6. Pilih evidence citation.
7. Tulis I-P-A-R-E-C notes.
8. Pilih keputusan.
9. Tulis structured justification.
10. Export JSON atau gunakan Print/PDF sesuai instruksi dosen.

## 6. Evidence citation

Citation bukan sekadar formalitas. Gunakan evidence hanya bila benar-benar mendukung analisis.

Contoh:

> Sales-to-GL difference belum dapat dijelaskan dan masih menjadi reporting blocker (`EV-11-05`). Perubahan pricing juga tidak memiliki retained UAT/rollback evidence (`EV-11-04`).

Jangan menyebut Evidence ID yang belum diperiksa.

## 7. I-P-A-R-E-C

- **Issue:** fakta dan risiko yang relevan.
- **Principle:** konsep SIPI, assertion, framework, atau control objective.
- **Analysis:** sebab, dampak, interdependency, evidence, limitation, dan uncertainty.
- **Recommendation:** immediate action, sustainable remediation, owner, dan timing.
- **Evidence:** bukti implementasi, operation, retest, closure, serta Evidence ID.
- **Conclusion:** release/hold/go/no-go, ICoFR, readiness, atau insufficient basis.

## 8. Sesi 11–14

### Sesi 11

Fokus pada vendor/master data, SoD, interface exception, change management, sales-to-GL reconciliation, audit evidence, blocking condition, dan separate operational/reporting decision.

### Sesi 12

Fokus pada terminated employees, bank-file integrity, payroll reconciliation, unsupported journal, suspense ageing, XBRL/AI reporting, deficiency aggregation, publication gates, dan ICoFR.

### Sesi 13

Fokus pada cloud shared responsibility, SOC report, CUECs, RPA identity, AI traceability, biometric privacy, dan remediation 30/60/90 hari.

### Sesi 14

Fokus pada mock certification terpadu. Timer 45 menit bersifat opsional. Management representation harus dinilai bersama corroborating evidence. Alternative defensible judgment diperbolehkan jika reasoning, evidence, dan safeguards konsisten.

## 9. Export hasil

- **Export JSON** menghasilkan file berisi sesi, record yang direview, evidence yang direview, material clues, citations, notes, decision, justification, dan progress.
- **Print/PDF** menggunakan fitur cetak browser untuk menghasilkan ringkasan yang dapat disimpan sebagai PDF.
- Export bukan bukti identitas atau keaslian pengerjaan. Pengumpulan formal tetap mengikuti instruksi dosen/eLOK.

## 10. Aturan penggunaan akademik

- Jangan menganggap indikator merah otomatis fraud atau material weakness.
- Jangan membuat fakta yang tidak ditampilkan.
- Nyatakan asumsi bila informasi tidak lengkap.
- Bedakan correction, containment, remediation, dan closure.
- Alternative judgment diperbolehkan jika reasoning dan evidence konsisten.
- Aplikasi mendukung professional judgment; keputusan final tetap tanggung jawab Anda.

## 11. Checklist sebelum mengumpulkan

- [ ] Semua modul yang relevan sudah diperiksa.
- [ ] Record material sudah dibuka.
- [ ] Evidence utama sudah dibuka.
- [ ] Reliability dan limitation evidence sudah dipertimbangkan.
- [ ] Clue material sudah dipilih.
- [ ] Evidence citations sudah dipilih.
- [ ] Catatan menggunakan struktur I-P-A-R-E-C.
- [ ] Decision konsisten dengan analysis.
- [ ] Residual uncertainty dinyatakan.
- [ ] Hasil sudah diekspor atau disimpan sesuai instruksi dosen.