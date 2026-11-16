# SIPI UAS — Integrated Assurance Case (Sesi 7–12)

Aplikasi terpisah untuk UAS kasus individual PT NusaNiaga. File aplikasi: `index.html`.

## Pengaturan pelaksanaan
- Jendela pengumpulan: **48 jam diatur di eLOK/Moodle**, bukan dalam aplikasi.
- Estimasi waktu aktif: **240 menit**; bukan timer yang diverifikasi sistem.
- Mahasiswa tidak login: memasukkan **NIU singkat (3–20 huruf/angka)** dan **nama lengkap**, serta kelas; tanggal penerimaan resmi dan otentikasi pengumpulan **tetap ditentukan oleh eLOK/Moodle**.
- Mahasiswa mengunduh **Laporan lengkap HTML** dan **Paket final JSON** `SIPI_UAS_Final_<NIU>.json`, lalu mengunggah JSON ke tugas eLOK sebelum deadline. Backup JSON dipakai untuk pemulihan pekerjaan, **bukan** bukti pengumpulan.
- Area instruktur: `instructor.html`. Pada kunjungan pertama, instruktur mengatur kata sandi minimal 12 karakter **di browser instruktur sendiri**, bukan disimpan di repository. Instruktur dapat mengimpor banyak paket final JSON, memeriksa jawaban per mahasiswa, menandai NIU duplikat, dan mengunduh rekap CSV.
- Proteksi area instruktur berbasis password **lokal di browser**, bukan proteksi akses server. Jangan menganggapnya sebagai autentikasi terhadap seluruh pengguna internet. Data yang diimpor berada di memori tab, dan hilang saat reload/kunci halaman. Tidak ada database pusat.
- Hindari membagikan panduan dosen atau kunci di repo publik.

## Fitur R4 (static + penilaian JSON)
- 7 tahap berurutan, 12 dokumen simulasi, 40 kolom, dan lima rangkaian pemilihan investigasi (dua dari tiga prosedur).
- Gerbang penyelesaian mencakup isian minimum, penandaan penelaahan dokumen, dan pemilihan prosedur. **Pemeriksaan ini administratif, bukan penilaian isi jawaban.**
- Hasil prosedur dibuka setelah dipilih; pengetahuan teknis dan kualitas justifikasi tetap dinilai dosen.
- Keputusan sebelum evidence shock disimpan sebagai snapshot.
- Ekspor HTML mencakup **seluruh tahap**, data bukti dan hasil investigasi; cetak menggunakan laporan lengkap.
- Backup JSON divalidasi berdasarkan struktur, field, pilihan, batas ukuran, dan identitas prosedur.
- Data disimpan di localStorage browser; mahasiswa perlu mengunduh backup berkala.

## Risiko yang tidak dapat diselesaikan GitHub Pages
1. Halaman instruktur dan kode validasinya dapat diakses publik karena hosting statis. Kata sandi lokal hanya membatasi tampilan di browser masing-masing, bukan akses aplikasi secara global. Jangan memasukkan data nilai rahasia di kode sumber.
2. Data kasus dan hasil investigasi ada di JavaScript publik dan dapat dilihat tanpa mengikuti alur UI.
3. Penguncian lokal dan timestamp browser **bukan bukti integritas**, identitas, atau waktu pengerjaan.
4. Tidak ada server-side submission, monitoring durasi, maupun deteksi plagiarisme.
5. Pencocokan kata atau panjang isian tidak membuktikan keterampilan profesional. Rubrik dan telaah substantif tetap diperlukan.

## Pemeriksaan penerimaan sebelum rilis ujian
1. Buka halaman GitHub Pages di Chrome desktop dan Android; pastikan nomor versi R2 terlihat.
2. Isi sebagian, refresh, dan pastikan jawaban tetap tersimpan.
3. Pilih 2 prosedur per tahap; verifikasi informasi hasil muncul setelah dipilih.
4. Lakukan ekspor backup, lalu impor di perangkat/browser baru dengan konfirmasi penggantian.
5. Selesaikan kasus dan unduh laporan lengkap HTML serta paket final JSON.
6. Buka HTML, cetak ke PDF, lalu uji unggah berkas ke eLOK memakai akun mahasiswa percobaan.
7. Pastikan deadline Moodle dan pelaporan status penerimaan berfungsi.
8. Di perangkat instruktur, buat kata sandi lokal, impor tiga JSON percobaan termasuk NIU sama, periksa detail dan unduh CSV. Tutup/refresh tab untuk membuktikan data impor tidak persisten.
9. Jangan mengandalkan timestamp JSON untuk menilai keterlambatan, karena jam lokal bisa diubah. Gunakan timestamp penerimaan eLOK.
