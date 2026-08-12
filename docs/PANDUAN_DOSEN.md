# Panduan Dosen

## SIPI Integrated Case & Certification Lab

## 1. Peran aplikasi

Aplikasi ini adalah mock case environment PT NusaNiaga untuk latihan eksplorasi sistem, evaluasi evidence, professional reasoning, dan mock certification. Aplikasi **bukan** pengganti Modul SIPI IAI, ERP nyata, atau auto-grading engine.

Gunakan bersama RPKPS, slide, Student Learning Pack, Applied Case, Teaching Note, kuis, dan rubrik.

## 2. Student Mode dan Instructor Mode

- **Student Mode** menyembunyikan debrief guidance dan rubric guidance.
- **Instructor Mode** menampilkan expected reasoning dan rubric guidance untuk Sesi 11–14.

Karena repo dan GitHub Pages bersifat publik, Instructor Mode adalah **pemisahan pedagogis, bukan security boundary**. Jangan menaruh model answer rahasia, data mahasiswa, atau materi ujian berisiko tinggi di source code publik.

## 3. Persiapan sebelum kelas

1. Buka sesi yang akan digunakan.
2. Periksa briefing, module-specific records, evidence, limitation, dan decision options.
3. Cocokkan dengan paket sesi di Google Drive.
4. Tentukan evidence mana yang wajib diperiksa.
5. Tentukan minimum citation requirement dan output.
6. Siapkan alternative defensible judgments untuk debrief.
7. Tentukan apakah timer Sesi 14 digunakan.

## 4. Alur 75–150 menit

| Tahap | Aktivitas |
|---|---|
| Briefing | Role, objective, required decision, time limit |
| ERP exploration | Periksa module-specific records dan transaction/control conditions |
| Evidence review | Nilai status, reliability, limitation, dan conflict |
| Investigation | Pilih material clues dan evidence citations |
| Decision | Structured justification berbasis evidence |
| Debrief | Bandingkan reasoning paths dan alternative judgments |

## 5. Evidence discipline

Evidence pada Sesi 11–14 sekarang memiliki:

- Evidence ID;
- type;
- status;
- reliability;
- period;
- preparer/source;
- observed content;
- limitation.

Status evidence mencakup confirmed fact, incomplete evidence, conflicting evidence, management representation, dan corroborated evidence. Mahasiswa harus memahami bahwa `high reliability` tidak sama dengan `complete evidence`.

Decision Gate mewajibkan minimal satu evidence citation sebelum basis keputusan dapat disimpan.

## 6. Fokus Sesi 11–14

### Sesi 11 — Integrated Data, ERP, Control, and Audit

Expected issues meliputi duplicate-vendor indicators, role conflict, interface exception, perubahan konfigurasi tanpa UAT/rollback evidence, population limitation, dan sales-to-GL reconciliation. Dosen harus meminta separate operational dan reporting decision.

### Sesi 12 — Payroll, Close, Reporting, and ICoFR

Fokus pada terminated employees, post-approval bank-file change, payroll reconciliation, unsupported journal, old suspense, XBRL/AI reporting, deficiency aggregation, publication gates, dan ICoFR conclusion.

### Sesi 13 — Technology Readiness

Fokus pada cloud shared responsibility, SOC scope/CUECs, bot identity, AI traceability, biometric privacy, remediation ownership, dan 30/60/90 prioritisation.

### Sesi 14 — Mock Certification

Gunakan timer 45 menit bila sesuai. Mahasiswa harus:

1. mengidentifikasi priority issues;
2. menghubungkan principle dan control objective;
3. cite evidence;
4. membedakan corroborated evidence dari management representation;
5. menilai residual uncertainty;
6. menghasilkan separate operational, publication, dan ICoFR judgments bila relevan.

## 7. Debrief yang disarankan

Urutan:

1. confirmed facts;
2. conflicting/incomplete evidence;
3. evidence reliability dan limitation;
4. affected objective/assertion;
5. expected control;
6. issue severity dan interdependency;
7. immediate action;
8. sustainable remediation;
9. closure evidence;
10. decision;
11. alternative defensible judgment.

Jangan menilai hanya pilihan keputusan. Dua mahasiswa dapat memilih `hold` dengan kualitas reasoning yang sangat berbeda.

## 8. Rubrik generik

| Kriteria | Bobot contoh |
|---|---:|
| Issue dan principle | 20–25% |
| Analysis dan prioritisation | 20–25% |
| Evidence use dan limitation | 20–25% |
| Recommendation dan closure | 15–25% |
| Conclusion consistency | 10–20% |
| Professional communication | 5–10% |

Gunakan rubrik spesifik yang muncul pada Instructor Mode untuk Sesi 11–14 dan sesuaikan dengan paket resmi sesi.

## 9. Export dan pengumpulan

- `Export JSON` menghasilkan structured result berisi reviewed records/evidence, clues, citations, notes, decision, justification, dan progress.
- `Print/PDF` dapat digunakan untuk arsip atau pengumpulan manual.
- File export bukan verified assessment record dan tidak membuktikan identitas mahasiswa.
- Untuk penilaian formal, hasil tetap dikumpulkan melalui eLOK atau mekanisme program studi.

## 10. Batas aplikasi yang masih berlaku

- Aplikasi tetap mock-up dan tidak melakukan posting atau calculation akuntansi nyata.
- Sesi 11–14 memiliki dataset modular yang lebih realistis; Sesi 1–10 masih lebih ringkas.
- Belum ada centralized instructor dashboard atau backend.
- Tidak ada authentication yang aman pada static GitHub Pages.
- Belum ada auto-grading professional judgment.
- End-to-end transaction database masih bersifat pedagogical trace, bukan ledger engine nyata.

## 11. Pilot dan QA

Sebelum penggunaan kelas penuh:

1. uji Student Mode dan Instructor Mode;
2. uji semua tab Sesi 11–14;
3. buka seluruh evidence dan periksa Evidence ID;
4. uji citation requirement pada Decision Gate;
5. uji JSON export dan Print/PDF;
6. uji timer Sesi 14;
7. lakukan debrief pilot dan catat ambiguity atau alternative judgments yang muncul.