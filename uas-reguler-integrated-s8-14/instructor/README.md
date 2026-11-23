# Ruang Instruktur — UAS SIPI Reguler Sesi 8–14

Alamat: https://gunggu.github.io/sipi-integrated-case-lab/uas-reguler-integrated-s8-14/instructor/

## Kunci dan akses
- Halaman instruktur menggunakan **kunci rubrik terenkripsi AES-256-GCM**, derivasi password PBKDF2-HMAC-SHA256 (310.000 iterasi) dan dekompresi gzip di browser.
- Password **tidak** disimpan di repositori, tidak ada password default di JavaScript, dan harus diberikan oleh dosen secara terpisah.
- Halaman HTML/CSS/JS statis tetap publik dan **bukan sistem autentikasi kampus**. Enkripsi melindungi isi rubrik dari pengunjung tanpa sandi tetapi tidak melindungi alamat atau mencegah upaya menebak sandi secara offline.
- Jangan unggah berkas mahasiswa ke repositori. Semua unggahan diproses di memori browser dan hilang bila halaman dimuat ulang; gunakan tombol ekspor untuk pencadangan penilaian.

## Format didukung
- JSON final dari tombol **Unduh JSON final** dengan format SIPI_UAS_REG_INDIVIDUAL_SUBMISSION dan versi kasus SIPI-UAS-REG-S8-14-v1.
- HTML dari tombol **Unduh laporan HTML**; pembacaan memetakan setiap heading h3 dan blok answer.
- JSON cadangan mahasiswa tidak diterima sebagai hasil final.
- Jika kedua berkas tersedia untuk identitas yang sama, pemeriksaan menampilkan perbedaan isi.
- Data field dan metadata dapat diubah oleh pengguna sebelum diunggah: hasil validasi **bukan bukti autentisitas**. Waktu penerimaan, identitas dan ketepatan waktu harus menggunakan eLOK.

## Rubrik
| Area | Bobot |
|---|---:|
| Mandat & ruang lingkup | 5 |
| Payroll, HRIS dan remittance | 18 |
| General ledger & close | 18 |
| ICoFR | 20 |
| ERP dan data lineage | 14 |
| Cloud, cyber, AI, monitoring | 15 |
| Memo, rekomendasi, etika | 10 |
| **Total** | **100** |

- Masukkan skor manual 0 sampai batas setiap kategori (kelipatan 0,5 bila diperlukan).
- Nilai numerik yang dibandingkan **tidak otomatis** menambah/mengurangi skor.
- Jawaban yang berbeda boleh diterima apabila dasar dan prasyarat tindakannya kredibel.
- Simpan nilai dosen melalui unduhan CSV dan cadangan JSON. Cadangan skor dapat diimpor kembali.
- Jika ingin nilai PDF, gunakan fitur cetak browser pada tampilan instruktur.

## Masalah pedagogis yang perlu dipertimbangkan
1. Distraktor pilihan keputusan saat ini terlalu ekstrem sehingga tidak seluruhnya menguji professional judgment.
2. Pergantian prosedur investigasi masih mungkin; mahasiswa dapat menelusuri semua alternatif secara bertahap.
3. Mekanisme kelengkapan hanya memverifikasi jumlah kata/angka dan penandaan berkas, bukan validitas kesimpulan.
4. Semua timestamp pada ekspor dibuat browser; jangan perlakukan sebagai bukti pengumpulan.
5. Waktu efektif 360 menit merupakan estimasi rancangan; diperlukan pilot untuk menguji waktu nyata.

## Audit penerimaan
- JavaScript halaman dan dataset diparsing tanpa error.
- Encrypted key lolos dekripsi AES-256-GCM dengan sandi valid dan menolak sandi salah.
- Jumlah kategori rubrik 7 dengan total bobot 100; 7 jawaban numerik acuan.
- Pemeriksaan struktur JSON final, versi kasus, numerik Indonesia dan penolakan berkas backup diuji.
- Struktur HTML laporan ditinjau terhadap implementasi student-side; browser Chromium diuji untuk ekstraksi identitas.
- Uji impor penuh dari LMS dan uji end-to-end lintas perangkat belum dilakukan.

## Privasi
Selalu tutup/kunci laman setelah selesai. Berkas hasil peserta dan komentar nilai tidak disimpan server situs ini. Jika sandi bocor, ganti dengan meng-enkripsi ulang key.enc.json menggunakan sandi baru.
