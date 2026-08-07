# Kasus Citibank — 117 Transfer

Aplikasi imersif berbahasa Indonesia untuk pembelajaran **Sistem Informasi Akuntansi tingkat Magister Akuntansi**.

## Tujuan pembelajaran

Mahasiswa berperan sebagai tim review forensik independen dan menilai bagaimana transaksi dapat diproses oleh sistem perbankan tetapi tetap bermasalah dari sisi:

- otorisasi nasabah;
- verifikasi transaksi;
- segregasi tugas;
- kewenangan relationship manager, teller, cash officer, dan cash supervisor;
- audit trail;
- exception monitoring;
- kecukupan dan reliabilitas bukti.

Kasus tidak meminta mahasiswa menentukan kesalahan pidana individu. Fokusnya adalah **sistem, proses, kontrol, bukti, dan judgment profesional**.

## Struktur aplikasi

1. **Briefing** — konteks, peran mahasiswa, batas bukti.
2. **Transaksi** — subset transaksi yang dapat diverifikasi dari sumber publik.
3. **Jaringan Rekening** — hubungan pengirim-penerima dari subset terverifikasi.
4. **Form Transfer** — rekonstruksi pembelajaran, bukan scan dokumen asli.
5. **Wawancara & Bukti** — pelepasan bukti bertahap berdasarkan sumber publik.
6. **Notebook Investigasi** — clue, risiko, kontrol, bukti, keterbatasan.
7. **Kesimpulan** — kesimpulan kontrol dan rekomendasi berbasis bukti.

## Provenance

Aplikasi menggunakan tiga label utama:

- **BUKTI PRIMER** — putusan Mahkamah Agung atau dokumen resmi;
- **BUKTI SEKUNDER** — pelaporan kontemporer kredibel;
- **REKONSTRUKSI** — artefak antarmuka atau dokumen yang dibuat semata untuk pembelajaran.

Tidak ada field yang tidak tersedia publik yang boleh disajikan sebagai record historis asli.

## Sumber utama versi 1

- Putusan MA 1607 K/PID.SUS/2012 — Inong Malinda Dee.
- Putusan MA 99 PK/Pid.Sus/2016 — Novianty Iriane & Betharia Panjaitan.
- ANTARA — pelaporan persidangan dan investigasi kontemporer.

## Batas data versi 1

Dataset transaksi **bukan populasi lengkap 117 transfer**. Hanya baris dan field yang dapat diverifikasi dari sumber publik yang dimasukkan. Rekening dimasking pada tampilan mahasiswa meskipun sebagian nomor muncul dalam sumber publik.

## Menjalankan

Buka `index.html` langsung di browser atau jalankan server statis:

```bash
python -m http.server 8000
```

Lalu akses:

```text
http://localhost:8000/kasus-citibank/
```

Progress mahasiswa disimpan di `localStorage`; tidak ada data yang dikirim ke server.

## Tahap pengembangan berikutnya

- memperluas ekstraksi transaksi dari putusan lengkap;
- menambah timeline investigasi;
- menambah mode pengajar untuk mengatur pelepasan bukti;
- menambah rubric scoring berbasis evidence linkage;
- menambah export notebook/kesimpulan ke file;
- menambah visualisasi jaringan yang lebih kaya tanpa library eksternal;
- audit aksesibilitas dan penggunaan di layar kelas/mobile.
