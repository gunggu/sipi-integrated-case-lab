# Audit Konten SIPI Integrated Case & Certification Lab

## Ringkasan keputusan

**Status setelah revisi: layak untuk demonstrasi, diskusi kelompok, formative assessment, latihan evidence-based professional judgment, dan mock certification terbimbing.**

Aplikasi tetap **bukan** pengganti Modul SIPI, ERP training system, atau alat penilaian sumatif otomatis. Namun, beberapa kelemahan MVP utama sudah diperbaiki secara substantif.

## Perbaikan yang telah diterapkan

### 1. Evidence tidak lagi sepenuhnya generik pada Sesi 11–14

Evidence kini memiliki:

- Evidence ID;
- jenis/source;
- status;
- reliability;
- period;
- preparer;
- observed content;
- limitation.

Status mencakup confirmed fact, incomplete evidence, conflicting evidence, management representation, dan corroborated evidence.

### 2. Dataset modul Sesi 11–14 sudah berbeda

Setiap tab modul pada Sesi 11–14 menampilkan record yang berbeda dan relevan dengan fungsi modul, sehingga ERP mock-up tidak lagi hanya mengganti nama tab untuk empat sesi integratif/lanjutan tersebut.

### 3. Decision Gate sudah memiliki traceability requirement

Mahasiswa harus memilih evidence citation sebelum basis keputusan dapat disimpan. Basis keputusan juga harus cukup substantif dan mengikuti reasoning yang menghubungkan issue, principle, analysis, recommendation, evidence, residual uncertainty, dan conclusion.

### 4. Student Mode dan Instructor Mode sudah dipisahkan

Instructor Mode menampilkan debrief guidance dan rubric guidance untuk Sesi 11–14. Student Mode menyembunyikannya.

**Catatan penting:** ini pemisahan pedagogis, bukan security boundary. Karena source code repo publik, materi rahasia tidak boleh disimpan di Instructor Mode.

### 5. Sesi 11–14 sudah disinkronkan dengan paket pembelajaran terbaru

- Sesi 11: duplicate vendor, role conflict, interface exception, change tanpa UAT/rollback, sales-to-GL reconciliation, audit evidence, blocking condition.
- Sesi 12: terminated employees, bank-file change, payroll reconciliation, unsupported journal, suspense ageing, XBRL/AI reporting, deficiency aggregation, ICoFR.
- Sesi 13: cloud shared responsibility, SOC/CUECs, AI/RPA governance, bot identity, biometric privacy, remediation.
- Sesi 14: integrated certification case, evidence conflict, management representation, publication gates, ICoFR, timer.

### 6. Export hasil tersedia

Aplikasi menyediakan:

- Export JSON berisi reviewed records/evidence, clues, citations, notes, decision, justification, dan progress;
- Print/PDF melalui browser.

### 7. Mock certification diperkuat

Sesi 14 memiliki timer 45 menit opsional, evidence dengan reliability/limitation berbeda, management representation yang perlu dikorroborasi, dan structured decision requirement.

## Penilaian per fungsi setelah revisi

| Fungsi | Status | Catatan |
|---|---|---|
| Briefing kasus | Baik | Ringkas dan relevan per sesi |
| ERP mock-up Sesi 1–10 | Cukup | Masih ringkas |
| ERP mock-up Sesi 11–14 | Baik untuk mock case | Dataset modular berbeda |
| Evidence Room Sesi 1–10 | Cukup | Legacy evidence masih sederhana |
| Evidence Room Sesi 11–14 | Baik | ID, status, reliability, limitation tersedia |
| Investigation Notebook | Baik | Material clue + evidence citation |
| Decision Gate | Baik untuk formative use | Citation requirement + structured justification |
| Student/Instructor Mode | Baik secara pedagogis | Bukan security boundary |
| Export | Baik untuk pengumpulan formative | JSON dan Print/PDF |
| Mock certification | Baik untuk latihan terbimbing | Timer dan evidence conflict tersedia |
| Penilaian sumatif otomatis | Belum layak | Professional judgment tetap dinilai dosen |

## Batas yang masih tersisa

### A. Belum merupakan transaction-processing database

Aplikasi tidak benar-benar melakukan posting, calculation, subledger processing, atau journal generation. Record dan evidence membentuk pedagogical trace, bukan ledger engine.

### B. Sesi 1–10 belum sekaya Sesi 11–14

Empat sesi terakhir telah menerima evidence model dan modular dataset yang lebih dalam. Sesi 1–10 masih menggunakan evidence yang lebih ringkas.

### C. Authentication aman belum tersedia

GitHub Pages adalah static public site. Instructor Mode tidak boleh digunakan untuk menyimpan model answer rahasia atau data sensitif.

### D. Belum ada centralized instructor analytics

Progress masih tersimpan di browser mahasiswa. JSON export dapat dikumpulkan, tetapi belum ada backend/dashboard.

### E. Belum ada auto-grading professional judgment

Ini sengaja dipertahankan sebagai human-in-the-loop assessment. Alternative defensible judgment harus tetap dapat diterima bila reasoning dan evidence konsisten.

### F. Staged evidence release belum otomatis

Dosen masih perlu mengontrol waktu/urutan evidence melalui instruksi kelas. Timer tersedia pada Sesi 14, tetapi evidence belum dirilis otomatis per tahap.

## Cara penggunaan yang disarankan

### Layak digunakan untuk

- demonstrasi dosen;
- diskusi kelompok;
- latihan identifikasi risiko dan kontrol;
- evidence-based questioning;
- formative assessment;
- latihan release/hold/go/no-go;
- deficiency and ICoFR reasoning;
- technology-readiness review;
- mock certification;
- debrief antarsesi.

### Belum disarankan untuk

- menggantikan Modul SIPI IAI;
- menggantikan RPKPS, slide, atau teaching note;
- menghitung nilai akhir secara otomatis;
- menyimpan data sensitif mahasiswa;
- menyimpan answer key rahasia di repo publik;
- menyimpulkan mahasiswa menguasai ERP nyata hanya karena mampu menggunakan mock-up.

## Prioritas pengembangan berikutnya

1. Enrich evidence Sesi 1–10 menggunakan model Evidence ID/status/reliability/limitation yang sama.
2. Tambahkan explicit transaction/journal trace IDs lintas dokumen dan modul.
3. Tambahkan staged evidence release yang dikendalikan dosen.
4. Tambahkan optional local rubric checklist tanpa mengubahnya menjadi rigid auto-grading.
5. Jika dibutuhkan untuk penilaian formal, pindahkan Instructor Mode dan analytics ke backend/authenticated environment.

## Kesimpulan

Aplikasi sekarang sudah melampaui mock-up navigasi sederhana. Untuk Sesi 11–14, mahasiswa harus mengevaluasi evidence dengan kualitas berbeda, mengutip evidence, menyusun reasoning, dan membuat keputusan yang traceable. Ini cukup kuat untuk formative assessment dan mock certification terbimbing, tetapi professional judgment tetap harus dinilai dan didebrief oleh dosen.