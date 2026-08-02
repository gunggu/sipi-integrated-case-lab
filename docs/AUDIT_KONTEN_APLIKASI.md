# Audit Konten SIPI Integrated Case Lab

## Ringkasan keputusan

**Status saat ini: layak untuk demonstrasi, orientasi kasus, diskusi kelompok, dan latihan professional judgment terbimbing.**

Aplikasi **belum layak digunakan sebagai pengganti modul SIPI, ERP training system, atau alat penilaian sumatif otomatis**. Konten simulasi saat ini adalah mock-up pedagogis: mahasiswa mengeksplorasi layar sistem, record, evidence, clue, dan decision gate, tetapi transaksi, dokumen, dan log belum membentuk database akuntansi yang benar-benar memproses transaksi.

## Basis audit

Audit dilakukan terhadap:

- struktur 14 skenario pada `simulator.js`;
- alur halaman utama pada `index.html`;
- fungsi ERP mock-up, Evidence Room, Investigation Notebook, Decision Gate, dan local progress;
- dokumentasi repositori pada `README.md`;
- kesesuaian umum dengan struktur materi SIPI yang telah digunakan untuk Sesi 1–14.

## Temuan positif

### 1. Satu perusahaan simulasi untuk seluruh semester

PT NusaNiaga digunakan secara konsisten sehingga mahasiswa dapat melihat hubungan antarsesi, bukan 14 kasus yang tidak saling terkait.

### 2. Alur pedagogis sudah benar

Aplikasi memaksa mahasiswa mengikuti urutan:

1. membaca briefing;
2. membuka modul mock ERP;
3. memeriksa record;
4. membuka evidence;
5. memilih clue;
6. menulis catatan investigasi;
7. membuat keputusan.

Urutan ini lebih kuat daripada memberi kasus dan pertanyaan sekaligus karena mahasiswa harus membangun pemahaman sebelum menyimpulkan.

### 3. Cakupan 14 sesi sudah representatif

Semua area utama tersedia:

- sistem, aktor, risiko, dan tata kelola;
- data, dokumen, interface, dan lineage;
- ERP selection dan implementation;
- internal control frameworks;
- audit SI dan CAATs;
- revenue, expenditure, production, payroll, GL, reporting, dan ICoFR;
- kasus integratif;
- cloud, cyber, AI, RPA, biometric, privacy, remediation, dan capstone.

### 4. Tidak memberikan jawaban benar terlalu cepat

Record dan evidence menggunakan prompt investigasi, bukan label jawaban final. Ini mendukung professional judgment.

### 5. Privasi MVP memadai

Catatan dan progres disimpan pada `localStorage`. Aplikasi tidak mengirim data mahasiswa ke server.

## Temuan yang perlu diperhatikan

### A. Evidence masih generik

Evidence Room saat ini menampilkan template penilaian yang hampir sama untuk banyak bukti. Isi belum selalu menyerupai dokumen nyata seperti invoice, role matrix, reconciliation, SOC exception, payroll register, atau XBRL validation report.

**Implikasi:** aplikasi membantu memahami pola analisis, tetapi belum cukup untuk melatih pemeriksaan dokumen secara detail.

**Prioritas pengembangan:** tinggi.

### B. Record belum membentuk transaksi end-to-end

Record dalam setiap sesi berdiri sebagai baris kasus. Belum ada relasi eksplisit seperti:

`purchase order → receipt → invoice → payment → journal → GL`.

**Implikasi:** mahasiswa dapat menemukan anomali, tetapi belum sepenuhnya menelusuri konsekuensinya ke transaksi, account, assertion, dan laporan.

**Prioritas pengembangan:** tinggi.

### C. Tab modul belum benar-benar menyaring data

Nama modul berubah saat dipilih, tetapi record kasus masih berasal dari daftar sesi yang sama. Modul belum memiliki dataset dan layar yang benar-benar berbeda.

**Implikasi:** kesan ERP masih berupa mock-up navigasi, belum simulasi modul.

**Prioritas pengembangan:** tinggi.

### D. Clue tidak memiliki tingkat reliability atau conflict

Clue dipilih sebagai material atau tidak material, tetapi belum dibedakan menjadi:

- confirmed fact;
- allegation;
- incomplete evidence;
- conflicting evidence;
- management explanation;
- auditor corroboration.

**Implikasi:** mahasiswa belum cukup dilatih mengelola uncertainty dan conflicting evidence.

**Prioritas pengembangan:** menengah–tinggi.

### E. Decision gate belum memiliki structured justification

Keputusan dan reasoning tersedia, tetapi aplikasi belum mewajibkan mahasiswa mengaitkan keputusan dengan record dan evidence tertentu.

**Implikasi:** mahasiswa masih dapat memberi kesimpulan generik tanpa traceability yang cukup.

**Prioritas pengembangan:** tinggi.

### F. Belum ada rubric atau model-answer logic di dalam aplikasi

Aplikasi belum menilai:

- ketepatan issue;
- penggunaan principle;
- evidence sufficiency;
- alternative defensible judgment;
- consistency antara severity, remediation, dan conclusion.

**Implikasi:** penilaian tetap harus dilakukan dosen menggunakan teaching note dan rubrik eksternal.

**Prioritas pengembangan:** tinggi sebelum digunakan untuk penilaian sumatif.

### G. Sesi 1–5 lebih abstrak daripada sesi transaksi

Sesi 6–14 memiliki anomali yang lebih konkret. Sesi 1–5 masih banyak menggunakan register atau daftar konseptual.

**Implikasi:** dosen perlu memberi briefing tambahan agar mahasiswa memahami apa yang harus “dilakukan” dalam mock-up.

**Prioritas pengembangan:** menengah.

### H. Belum ada mode dosen dan mahasiswa yang terpisah

Semua pengguna melihat struktur yang sama. Tidak ada hidden clue, staged evidence release, timer, rubric, atau model answer khusus dosen.

**Implikasi:** dosen harus mengendalikan briefing dan debrief di luar aplikasi.

**Prioritas pengembangan:** tinggi.

## Penilaian per fungsi

| Fungsi | Status | Catatan |
|---|---|---|
| Briefing kasus | Baik | Ringkas dan relevan per sesi |
| ERP mock-up | Cukup | Visual dan navigasi ada; data belum benar-benar modular |
| Evidence Room | Cukup | Konsep benar; dokumen masih generik |
| Investigation Notebook | Baik untuk latihan | Belum ada structured citation ke evidence |
| Decision Gate | Baik untuk diskusi | Belum cukup untuk auto-grading |
| Progress | Memadai | Hanya pada browser/perangkat yang sama |
| Instructor analytics | Belum tersedia | Perlu ekspor atau backend pada fase berikutnya |
| Alignment 14 sesi | Baik | Tema utama terwakili |
| Penilaian sumatif | Belum layak | Membutuhkan rubric, answer logic, dan identitas pengguna |

## Cara penggunaan yang disarankan

### Layak digunakan untuk

- demonstrasi dosen;
- diskusi kelompok;
- latihan identifikasi risiko dan kontrol;
- evidence-based questioning;
- latihan keputusan release/hold/go/no-go;
- formative assessment;
- debrief antarsesi;
- persiapan mock certification.

### Belum disarankan untuk

- menggantikan Modul SIPI IAI;
- menggantikan RPKPS, slide, atau teaching note;
- menghitung nilai akhir secara otomatis;
- menyimpan data sensitif mahasiswa;
- menilai kemampuan audit dokumen tanpa bukti tambahan;
- menyimpulkan bahwa mahasiswa menguasai ERP hanya karena mampu menggunakan mock-up.

## Rekomendasi prioritas pengembangan

1. Buat evidence artefact yang realistis untuk Sesi 6, 8, 9, 10, 11, 12, dan 14.
2. Hubungkan record end-to-end dengan ID transaksi dan journal trail.
3. Buat data berbeda untuk setiap tab modul.
4. Wajibkan citation dari decision ke record dan evidence.
5. Tambahkan reliability, completeness, conflict, dan limitation status pada evidence.
6. Pisahkan Student Mode dan Instructor Mode.
7. Tambahkan rubric manual dan answer-key logic yang menerima alternative defensible judgment.
8. Tambahkan ekspor JSON/PDF agar hasil dapat dikumpulkan di eLOK.
9. Tambahkan skenario bercabang dan staged evidence release.
10. Lakukan pilot pada satu sesi sebelum digunakan untuk semua sesi.

## Kesimpulan audit

Aplikasi saat ini sudah memenuhi tujuan sebagai **mock-up sederhana tetapi profesional untuk membantu mahasiswa memasuki konteks kasus**. Nilai pedagogisnya terletak pada eksplorasi dan reasoning, bukan pada realisme transaksi atau penilaian otomatis. Untuk penggunaan kelas, aplikasi harus dipasangkan dengan modul, slide, kasus, teaching note, dan debrief dosen.