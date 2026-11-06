# SIPI UAS — Integrated Assurance Case (Sesi 7–12)

Aplikasi terpisah untuk UAS kasus individual PT NusaNiaga. File aplikasi: `index.html`.

## Pengaturan pelaksanaan
- Jendela pengumpulan: **48 jam diatur di eLOK/Moodle**, bukan dalam aplikasi.
- Estimasi waktu aktif: **240 menit**; bukan timer yang diverifikasi sistem.
- Identitas, tanggal penerimaan, otentikasi, dan integritas pengumpulan **hanya ditentukan oleh eLOK/Moodle**.
- Mahasiswa mengunduh **Laporan lengkap HTML** dan **Paket final JSON**, lalu mengunggah sesuai instruksi dosen. Backup JSON dipakai untuk pemulihan pekerjaan, **bukan** bukti pengumpulan.
- Hindari membagikan panduan dosen atau kunci di repo publik.

## Fitur R2
- 7 tahap berurutan, 12 dokumen simulasi, 40 kolom, dan lima rangkaian pemilihan investigasi (dua dari tiga prosedur).
- Gerbang penyelesaian mencakup isian minimum, penandaan penelaahan dokumen, dan pemilihan prosedur. **Pemeriksaan ini administratif, bukan penilaian isi jawaban.**
- Hasil prosedur dibuka setelah dipilih; pengetahuan teknis dan kualitas justifikasi tetap dinilai dosen.
- Keputusan sebelum evidence shock disimpan sebagai snapshot.
- Ekspor HTML mencakup **seluruh tahap**, data bukti dan hasil investigasi; cetak menggunakan laporan lengkap.
- Backup JSON divalidasi berdasarkan struktur, field, pilihan, batas ukuran, dan identitas prosedur.
- Data disimpan di localStorage browser; mahasiswa perlu mengunduh backup berkala.

## Risiko yang tidak dapat diselesaikan GitHub Pages
1. Data kasus dan hasil investigasi ada di JavaScript publik dan dapat dilihat tanpa mengikuti alur UI.
2. Penguncian lokal dan timestamp browser **bukan bukti integritas**, identitas, atau waktu pengerjaan.
3. Tidak ada server-side submission, monitoring durasi, maupun deteksi plagiarisme.
4. Pencocokan kata atau panjang isian tidak membuktikan keterampilan profesional. Rubrik dan telaah substantif tetap diperlukan.

## Pemeriksaan penerimaan sebelum rilis ujian
1. Buka halaman GitHub Pages di Chrome desktop dan Android; pastikan nomor versi R2 terlihat.
2. Isi sebagian, refresh, dan pastikan jawaban tetap tersimpan.
3. Pilih 2 prosedur per tahap; verifikasi informasi hasil muncul setelah dipilih.
4. Lakukan ekspor backup, lalu impor di perangkat/browser baru dengan konfirmasi penggantian.
5. Selesaikan kasus dan unduh laporan lengkap HTML serta paket final JSON.
6. Buka HTML, cetak ke PDF, lalu uji unggah berkas ke eLOK memakai akun mahasiswa percobaan.
7. Pastikan deadline Moodle dan pelaporan status penerimaan berfungsi.
