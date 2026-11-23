'use strict';
const CASE_VERSION='SIPI-UAS-REG-S8-14-v1';
const STEPS=[
['Penugasan & ruang lingkup',20,'Sesi 8–14'],
['Payroll & HRIS',55,'Sesi 8'],
['GL & financial close',60,'Sesi 9'],
['ICoFR & kontrol kunci',65,'Sesi 10'],
['Data lineage & ERP',60,'Sesi 11'],
['Cloud, cyber & AI reporting',55,'Sesi 12–13'],
['Keputusan & memo akhir',45,'Sesi 12–14']
];
const DOCUMENTS=[
{id:'SC-01',step:0,title:'Mandat penelaahan',source:'Sekretariat komite',fact:'PT Cakrawala Distribusi Industri menyiapkan laporan Q3 2026. ERP cloud, payroll, warehouse dan general ledger terhubung melalui interface serta jurnal manual. Anda diminta menilai integritas data, bukti kontrol, dan keandalan pelaporan sebelum komite audit memberikan arahan.',limit:'Semua nama dan data bersifat simulasi. Penugasan bukan audit eksternal.'},
{id:'SC-02',step:0,title:'Parameter penugasan',source:'Finance Controller',fact:'Materialitas perencanaan ilustratif Rp1,2 miliar. Ada dua prioritas: pembayaran pegawai yang tepat waktu dan laporan Q3 yang dapat dipertanggungjawabkan. Laporan sementara akan dibahas setelah pekerjaan Anda disampaikan. Setiap rekomendasi harus membedakan fakta, indikasi, dan kekurangan bukti.',limit:'Materialitas tidak otomatis menentukan klasifikasi kelemahan ICoFR.'},
{id:'PY-01',step:1,title:'HR roster & payroll register',source:'HRIS / Payroll',fact:'Gross payroll September Rp2.460.000.000. Potongan total Rp405.000.000. Net register yang disetujui Rp2.055.000.000. Register berisi 86 entri; active roster 85 pegawai. EMP-019 terminated pada 18 September, tetapi memiliki draft final settlement Rp17.000.000. Approval perhitungan final belum tersedia.',limit:'Satu entri tambahan belum berarti pegawai fiktif.'},
{id:'PY-02',step:1,title:'Staged payment file',source:'Treasury',fact:'Bank staging sebesar Rp2.071.000.000. Ada tambahan EX-011 reimbursement Rp16.000.000 setelah persetujuan net register. Dua bank account berubah mendekati cut-off, termasuk EMP-044 dengan net pay Rp13.000.000. Log menunjukkan perubahan oleh user yang memiliki izin akses; bukti callback independen tidak ada.',limit:'File staging bukan settlement bank aktual.'},
{id:'PY-03',step:1,title:'Deductions & liabilities',source:'Payroll Accounting',fact:'Deduction schedule Rp405.000.000; GL deduction liability Rp390.000.000; remittance yang tercatat Rp375.000.000. Dua dari lima sampel withholding berbeda dari parameter sistem terbaru. Rincian kategori potongan dan tanggal jatuh tempo belum disertakan.',limit:'Jumlah deduction tidak identik dengan PPh 21.'},
{id:'CL-01',step:2,title:'Revenue source & GL interface',source:'Revenue Accounting',fact:'Revenue source Q3 Rp48.750.000.000, GL revenue Rp48.130.000.000. Error queue memuat 42 transaksi rejected dengan nilai total Rp620.000.000. Ada 18 pesan pending, tetapi nilainya belum diketahui. Data source dan GL memakai zona waktu transaksi berbeda.',limit:'Tidak semua rejected otomatis merupakan pendapatan yang harus dicatat pada kuartal ini.'},
{id:'CL-02',step:2,title:'Manual adjustment & suspense',source:'GL Controller',fact:'Jurnal manual Rp950.000.000 diposting pukul 23.47 pada 30 September dengan deskripsi quarter adjustment. Pembuat dan penyetuju memakai identitas user yang sama. Saldo suspense Rp360.000.000 berumur 45–90 hari; 40% item belum memiliki owner. Rekonsiliasi bank tidak memuat approval supervisor.',limit:'Basis perhitungan jurnal dan dokumen otorisasi belum tersedia.'},
{id:'CL-03',step:2,title:'XBRL & reporting snapshot',source:'Financial Reporting',fact:'Narasi v12 menyatakan margin 14,2%; data approved v14 menunjukkan 13,6%. Tag XBRL revenue menggunakan konteks periode yang salah dan validator memberi peringatan. Ekspor file sukses secara teknis.',limit:'Keberhasilan ekspor tidak membuktikan akurasi tag atau narasi.'},
{id:'IC-01',step:3,title:'Risk-control matrix',source:'Internal Audit',fact:'Kontrol review jurnal bulanan menggunakan batas Rp1 miliar. Risk assessment menyebut jurnal manual di bawah batas itu dapat berdampak pada fraud. Review akses triwulanan menggunakan daftar user dari satu aplikasi meskipun terdapat dua aplikasi ERP terintegrasi. Kebijakan rekonsiliasi memerlukan independent signoff.',limit:'Dokumen rancangan tidak membuktikan pengendalian beroperasi efektif.'},
{id:'IC-02',step:3,title:'Control testing log',source:'Internal Audit',fact:'Dari 15 rekonsiliasi yang diuji, empat tidak memiliki bukti review independen. Dua dari 20 jurnal sampel memakai preparer dan approver yang sama. Tiga admin vendor tetap aktif setelah migrasi. Manajemen menyebut review secara verbal, tetapi tidak ada log transaksi atau pengecualian yang dibahas.',limit:'Severity memerlukan analisis likelihood dan magnitude; sampel tidak boleh disimpulkan otomatis sebagai keseluruhan populasi.'},
{id:'IT-01',step:4,title:'Data lineage & interface rejected',source:'IT Integration',fact:'Payroll master data dikirim melalui interface. Source payroll 86 baris dan received 86 baris, tetapi staging GL hanya memuat 85 baris. Satu baris gagal karena cost center tidak ditemukan. Data staging digunakan oleh dashboard manajemen.',limit:'Status received tidak sama dengan posted atau complete.'},
{id:'IT-02',step:4,title:'Master data change control',source:'ERP Administrator',fact:'Delapan perubahan beneficiary dilakukan dalam dua hari terakhir September. Tiga tidak memiliki nomor tiket dan dua belum disetujui process owner. Pemindahan batch dilakukan dengan shared service account. Log hanya menunjukkan akun teknis, bukan operator individual.',limit:'Belum ada bukti bahwa seluruh perubahan menghasilkan pembayaran tidak sah.'},
{id:'DR-01',step:5,title:'Cloud assurance coverage',source:'Technology Risk',fact:'Laporan assurance SaaS mencakup Januari–Juni 2026. Data center subservice dikecualikan; periode Juli–September tidak termasuk. Customer user entity controls (CUECs) mensyaratkan review akses bulanan. Bukti pelanggan hanya ada untuk Juli.',limit:'SLA uptime 99,9% bukan assurance tentang akses atau integritas data.'},
{id:'DR-02',step:5,title:'Cyber recovery test',source:'Security Operations',fact:'Terdapat 17 percobaan login gagal akibat credential stuffing. Log yang masih ada tidak menunjukkan login sukses tetapi disimpan hanya 30 hari. Target RPO 4 jam dan RTO 8 jam. Uji restore database berlangsung 5 jam menggunakan backup enam jam sebelum kegagalan. Uji aplikasi terintegrasi belum tersedia.',limit:'Pemulihan database bukan bukti bahwa seluruh layanan sudah pulih.'},
{id:'DR-03',step:5,title:'AI narrative & alert monitoring',source:'Reporting Analytics',fact:'Narasi AI mengambil snapshot v12 (margin 14,2%), bukan approved v14 (13,6%). Dari 23 exception alerts, tujuh belum memiliki owner dan lima ditutup tanpa bukti. Operator dapat mengubah threshold serta menandai alert selesai.',limit:'Validasi redaksi narasi tidak sama dengan verifikasi angka sumber.'}
];
const INVESTIGATIONS=[
{step:1,max:2,title:'Investigasi payroll',options:[
['PYA','Verifikasi settlement pegawai','Surat termination ada tetapi kalkulasi final settlement belum ditandatangani reviewer HR.'],
['PYB','Tinjau hash & rekening','Hash staged file berubah setelah approval; callback ke nomor lama untuk EMP-044 tidak terekam.'],
['PYC','Periksa rincian potongan','Dari Rp405 juta, Rp127 juta berkategori withholding; kategori lain terdiri atas manfaat dan potongan lain.']]},
{step:2,max:2,title:'Investigasi financial close',options:[
['CLA','Reperform interface','42 rejected messages memiliki ID unik senilai Rp620 juta; belum ada bukti shipping untuk memastikan cut-off.'],
['CLB','Tinjau jurnal manual','Worksheet jurnal Rp950 juta bertanda estimate; formula dan bukti persetujuan independen tidak tersedia.'],
['CLC','Bandingkan dua versi laporan','Version diff mengonfirmasi margin berbeda; tag XBRL masih merujuk periode sebelumnya.']]},
{step:3,max:2,title:'Investigasi pengendalian',options:[
['ICA','Review exceptions','Empat reconciling items tidak memiliki bukti signoff dan dua belum ditangani lebih dari 30 hari.'],
['ICB','Akses dan jurnal','Tiga admin vendor aktif; satu aktivitas ekspor data terlihat tanpa bukti perubahan jurnal dari log yang tersedia.'],
['ICC','Kontrol kompensasi','Manajemen menampilkan dashboard review harian tetapi tidak ada reviewer signoff atau daftar penyelesaian.']]},
{step:4,max:2,title:'Investigasi data dan ERP',options:[
['ITA','Total sumber terhadap staging','86 baris sumber bernilai Rp2,055 miliar; 85 baris di staging Rp2,046 miliar; satu rejected Rp9 juta.'],
['ITB','Master beneficiary','Tiga perubahan tanpa tiket memakai akun integrasi; owner perubahan tidak dapat dibuktikan.'],
['ITC','UAT dan migrasi','Migration status complete, tetapi signoff reconciliation belum ada dan skenario rejected cost center tidak diuji.']]},
{step:5,max:2,title:'Investigasi risiko digital',options:[
['DRA','SOC dan CUECs','Review akses pelanggan bulan Agustus dan September belum dilakukan; tidak ada bridge assurance untuk gap.'],
['DRB','RTO/RPO dan backup','Backup yang berhasil dipulihkan berumur enam jam dibanding target kehilangan data maksimal empat jam.'],
['DRC','Uji output AI dan alert','Review hanya membaca gaya bahasa; angka belum dicocokkan dengan v14 dan lima alert closed tidak punya evidence ID.']]}
];
const FIELDS=[
{step:0,id:'identity',type:'text',label:'Nama lengkap · NIU · kelas',min:8},
{step:0,id:'scope',type:'essay',label:'Ruang lingkup, tujuan penelaahan, dan batas bukti',min:40},
{step:1,id:'paygross',type:'number',label:'Net payroll = gross dikurangi potongan (Rp)'},
{step:1,id:'paydiff',type:'number',label:'Staged payment file dikurangi approved net register (Rp)'},
{step:1,id:'payliability',type:'number',label:'Deduction schedule dikurangi GL liability (Rp)'},
{step:1,id:'payremit',type:'number',label:'Deduction schedule dikurangi remittance (Rp)'},
{step:1,id:'paydecision',type:'select',label:'Keputusan payroll',options:[['','— Pilih —'],['hold','Tunda seluruh penggajian sambil merekonsiliasi semua pengecualian'],['separate','Siapkan batch terpisah dan minta otorisasi ulang atas populasi terverifikasi'],['release','Proses staging dengan konfirmasi Treasury dan review pascapembayaran']]},
{step:1,id:'payanalysis',type:'essay',label:'Analisis payroll: perbedaan, hak pegawai, bukti, dan tindak lanjut',min:90},
{step:2,id:'revGap',type:'number',label:'Revenue source dikurangi GL revenue (Rp)'},
{step:2,id:'unowned',type:'number',label:'Nilai suspense tanpa owner (40% × Rp360 juta)'},
{step:2,id:'closeDecision',type:'select',label:'Keputusan atas draft laporan Q3',options:[['','— Pilih —'],['publish','Publikasikan draft dengan penjelasan manajemen atas item terbuka'],['conditional','Tunda publikasi hingga exception kritis dan versi laporan direkonsiliasi'],['stop','Tunda seluruh closing sambil menuntaskan semua saldo suspense']]},
{step:2,id:'closeAnalysis',type:'essay',label:'Rekonsiliasi interface, cut-off, jurnal manual, XBRL dan versi pelaporan',min:105},
{step:3,id:'icofrDecision',type:'select',label:'Kesimpulan sementara ICoFR',options:[['','— Pilih —'],['effective','Simpulkan efektif berdasarkan review rutin dan hasil sampel tersedia'],['uncertain','Tahan kesimpulan efektivitas hingga pengujian dan severity dievaluasi'],['allMaterial','Perlakukan seluruh exception sebagai indikasi kelemahan berat sementara']]},
{step:3,id:'icoAnalysis',type:'essay',label:'Design versus operating effectiveness, asersi, severity dan rencana bukti',min:115},
{step:4,id:'rowDiff',type:'number',label:'Selisih jumlah baris payroll source dan loaded staging'},
{step:4,id:'erpDecision',type:'select',label:'Keputusan kontrol interface ERP',options:[['','— Pilih —'],['accept','Gunakan receipt count sebagai indikasi completeness sementara'],['reconcile','Cocokkan source-target, nilai, rejected queue, dan otorisasi perbaikan'],['delete','Tunda seluruh interface hingga mapping cost center diperbarui']]},
{step:4,id:'erpAnalysis',type:'essay',label:'Data lineage, risiko master data, kontrol akses, dan evidence of correction',min:100},
{step:5,id:'cloudDecision',type:'select',label:'Kesimpulan atas assurance SaaS',options:[['','— Pilih —'],['rely','Gunakan SOC Jan–Jun dengan representasi penyedia untuk periode Q3'],['bridge','Uji gap periode, subservice, CUECs melalui prosedur dan bukti tambahan'],['sla','Prioritaskan SLA dan log insiden penyedia untuk penilaian layanan']]},
{step:5,id:'digitalAnalysis',type:'essay',label:'Cyber recovery, cloud, CUEC, validitas AI dan continuous monitoring',min:110},
{step:6,id:'memo',type:'essay',label:'Memo final kepada komite audit (temuan, bukti, ketidakpastian, keputusan)',min:180},
{step:6,id:'remediation',type:'essay',label:'Rencana 30/60/90 hari: prioritas, owner, dan evidence of closure',min:110},
{step:6,id:'limits',type:'essay',label:'Keterbatasan bukti dan pertimbangan etika/profesional',min:55},
{step:6,id:'declaration',type:'check',label:'Saya menyusun jawaban secara individual dan akan mengunggahnya melalui LMS sesuai tenggat.'}
];