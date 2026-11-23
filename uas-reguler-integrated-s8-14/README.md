# UAS SIPI Reguler — Integrated Control & Reporting Lab

**Alamat aplikasi:** https://gunggu.github.io/sipi-integrated-case-lab/uas-reguler-integrated-s8-14/

## Tujuan
Asesmen individual take-home berbasis kasus PT Cakrawala Distribusi Industri, selaras dengan RPKPS reguler pasca-UTS Sesi 8–14.

**Jendela pengumpulan:** 2 × 24 jam, ditentukan dan dikendalikan sepenuhnya oleh eLOK/Moodle. **Kerja efektif:** ±360 menit yang disarankan, bukan timer pada halaman publik.

| Tahap | Fokus | Menit |
|---|---|---:|
| 1 | Penugasan & ruang lingkup | 20 |
| 2 | Payroll & HRIS (S8) | 55 |
| 3 | GL & financial close (S9) | 60 |
| 4 | ICoFR & pengujian kontrol (S10) | 65 |
| 5 | Data lineage & ERP (S11) | 60 |
| 6 | Cloud, cyber & AI reporting (S12–13) | 55 |
| 7 | Keputusan & memo akhir (S12–14) | 45 |
| **Total** | | **360** |

## Fitur
- Aplikasi statis dengan 15 dokumen kasus, lima set investigasi dengan pemilihan dua dari tiga prosedur yang harus dikonfirmasi dan dikunci sebelum hasil ditampilkan, rekonsiliasi numerik, evaluasi kontrol, dan keputusan bercabang.
- Penyimpanan otomatis localStorage hanya pada perangkat dan browser mahasiswa.
- Backup JSON dapat diimpor untuk melanjutkan progres, dengan validasi versi, struktur dan status investigasi.
- Hasil final sebagai JSON terstruktur dan laporan HTML yang dapat dicetak atau disimpan PDF melalui browser.
- Tahap berikutnya terbuka setelah dokumen ditelaah, dua investigasi dipilih, dan semua isian minimum terisi.
- Finalisasi lokal mengunci jawaban tetapi bukan tanda terima LMS.

## Penggunaan
1. Bagikan tautan melalui eLOK sebagai sumber kegiatan ujian yang hanya terlihat selama jendela 48 jam.
2. Mahasiswa mengisi nama, NIU, dan kelas; menyelesaikan tahap 1–7 secara individual; unduh backup berkala.
3. Mahasiswa mengunduh laporan HTML dan JSON final, kemudian unggah keduanya melalui Assignment eLOK.
4. Dosen menilai bukti, perhitungan, argumentasi, kualitas keputusan, dan rencana tindakan; tidak ada skor otomatis untuk mahasiswa.

## Pedagogi
Level setara dengan kelas profesional pada integrasi proses dan mutu bukti, tetapi lebih terstruktur agar tidak mengandaikan pengalaman praktisi. Kasus baru berfokus pada Sesi 8–14 dan berbeda dari kasus UAS profesional Sesi 7–12.

## Batasan
- Tidak ada backend, login, deteksi plagiarisme, server penyerahan, atau sinkronisasi lintas-perangkat.
- Jangan menyimpan kunci jawaban atau data mahasiswa dalam repositori publik.
- Tenggat 48 jam bukan pembatasan keamanan GitHub Pages. Akses terjadwal serta submission harus dikendalikan LMS.
- Isian minimum hanya mengukur kelengkapan, bukan kebenaran substantif.
- Uji alur pada browser mahasiswa dan impor pengumpulan sebelum ujian resmi.

## Perbaikan setelah audit instruktur (23 November 2026)
- Opsi keputusan diperhalus agar pilihan salah tidak selalu ekstrem atau mengungkap jawaban kuat dari bentuk kalimat.
- Pilihan dua investigasi per tahap sekarang harus dikonfirmasi melalui tombol penetapan; hasil baru terlihat setelah keputusan dikunci.
- Halaman instruktur ada di subfolder `instructor/` dengan kunci dan rubrik terenkripsi, impor JSON/HTML, dan penilaian manual 100 poin.
- Pada berkas JSON final, setiap investigasi juga menyimpan status `committed` untuk membantu pemeriksaan; status ini tidak menjadi bukti anti-manipulasi.

## Pembaruan ruang kerja dan evidensi simulasi (23 November 2026)
- Antarmuka arsip dokumen disajikan sebagai *case workspace*, dengan metadata dokumen, nama file, nomor referensi, pemilik, status, tabel detail, dan riwayat sistem yang disimulasikan.
- Sebanyak 15 dokumen pada `data.js` dilengkapi artefak terstruktur dalam `evidence.js`. Data dan riwayat tambahan bersifat fiktif, bukan arsip sebenarnya; tidak dimaksudkan sebagai jawaban atau penilaian otomatis.
- Mahasiswa dapat menelusuri arsip melalui pencarian lokal, melihat setiap dokumen, dan menandai status penelaahan tanpa otomatis menutup dokumen.
- Investigasi tetap dibatasi pada dua prosedur yang harus ditetapkan; berkas hasil baru tersedia setelah penetapan. Pemilihan awal tidak lagi mereset dokumen yang dibuka.
- Format jawaban, CASE_VERSION, localStorage, cadangan, ekspor final JSON/HTML, dan penilaian instruktur dipertahankan untuk kompatibilitas dengan pekerjaan mahasiswa yang telah ada.
- Laporan HTML/JSON hanya mencatat artefak investigasi yang dipilih. Seluruh artefak tambahan merupakan referensi tampilan lokal dan tidak memerlukan backend.
- Pemeriksaan statis telah memvalidasi sintaks JavaScript dan keberadaan seluruh 15 artefak. Pengujian end-to-end dalam browser, tampilan mobile, dan integrasi dengan eLOK perlu dilakukan sebelum ujian resmi.

## Hardening dan audit ulang operasional — 23 November 2026

### Pengumpulan mahasiswa
- JSON final hanya dapat diekspor setelah **Finalisasi lokal** dan semua tahap lengkap. Backup progres tetap tersedia sebelum finalisasi.
- Validasi pemulihan backup memeriksa struktur, kode investigasi dan bahwa semua investigasi pada state terkunci sudah ditetapkan.
- Peringatan kegagalan `localStorage` diperjelas; mahasiswa diminta menyimpan backup di luar browser.
- `CASE_VERSION` tetap `SIPI-UAS-REG-S8-14-v1`, sehingga struktur penyerahan dan pekerjaan lama tetap dikenali.

### Validasi instruktur
- JSON wajib berstatus final, memiliki identitas yang konsisten, 23 field lengkap, 15 dokumen ditelaah, lima tahap investigasi dengan dua pilihan valid dan status `committed`.
- Hasil investigasi JSON diperiksa terhadap kode dan data kasus. Ini **bukan validasi kriptografis**; JSON dapat diedit dan semua data kasus publik.
- HTML diparsing sebagai dokumen inert dan diwajibkan konsisten secara struktural: identitas, status final, field wajib, daftar dokumen serta pilihan investigasi.
- Saat HTML dan JSON sama-sama diimpor, seluruh field, daftar dokumen, identitas, dan pilihan investigasi dibandingkan. Ekspor CSV mencatat kolom `verification` (COCOK / PERLU VERIFIKASI).
- Nilai dosen disimpan otomatis dalam `localStorage` **hanya di browser instruktur** dan dipulihkan setelah sandi instruktur dibuka lagi. Nilai tidak dikirim ke server. Simpan pula backup penilaian JSON secara berkala dan jangan gunakan perangkat bersama karena cache nilai tidak terenkripsi.
- Form penilaian tetap manual. Status cocok bukan bukti keaslian atau kepatuhan tenggat.

### Hasil audit ulang (pengujian JavaScript dengan DOM/browser tiruan)
- 25/25 skenario mahasiswa lulus: render tujuh tahap, 15 arsip, progres, finalisasi, backup, payload dan laporan.
- 14/14 skenario instruktur lulus: satu JSON valid diterima; variasi kosong, belum final, identitas berbeda, dokumen kurang, investigasi tidak lengkap, hasil berbeda dan field ilegal ditolak; autosave/restore nilai serta peringatan beda HTML–JSON.
- Pengujian silang menggunakan output mahasiswa yang dibentuk dari aplikasi: laporan HTML dan JSON diterima, 23 field terpetakan, 15 dokumen terbaca, lima tahap investigasi masing-masing dua pilihan, selisih nol.
- Semua file JavaScript lolos pemeriksaan sintaks.
- **Belum dilakukan**: browser end-to-end sungguhan, pengukuran performa pada perangkat, pemeriksaan visual mobile, uji eLOK, dan tes sandi/dekripsi dengan browser. Pengujian DOM tiruan tidak boleh disamakan dengan hasil browser sungguhan.

### Risiko tersisa
1. Karena seluruh aplikasi berjalan di GitHub Pages tanpa backend, semua bukti kasus dan hasil prosedur yang tidak dipilih tetap dapat ditemukan oleh mahasiswa yang mengakses sumber aplikasi. Menjamin kerahasiaan hasil investigasi memerlukan layanan server dengan otorisasi dan distribusi bukti per mahasiswa.
2. Waktu ekspor, status final, identitas, dan isi JSON/HTML dapat diubah oleh pemilik perangkat. Rekaman waktu serta penyerahan resmi wajib diverifikasi di eLOK.
3. Penyimpanan penilaian lokal tidak menyinkronkan data antarperangkat dan tidak mengenkripsi isi nilai. Gunakan perangkat tepercaya, ekspor backup berkala, dan hapus cache selesai penilaian.
4. Perlu tes ujung-ke-ujung dan pilot sebelum UAS resmi.
