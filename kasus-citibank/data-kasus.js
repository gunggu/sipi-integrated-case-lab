const KASUS={
  metadata:{
    judul:'117 Transfer',
    subjudul:'Kasus Citibank Indonesia — Investigasi Pengendalian Transaksi',
    periode:'2007–2011',
    tujuan:'Menilai bagaimana transaksi yang secara teknis dapat diproses oleh sistem perbankan tetap dapat gagal dari sisi otorisasi, verifikasi, segregasi tugas, dan monitoring.'
  },
  sumber:[
    {id:'S01',jenis:'primer',lembaga:'Mahkamah Agung RI',judul:'Putusan 1607 K/PID.SUS/2012 — Inong Malinda Dee',url:'https://putusan3.mahkamahagung.go.id/direktori/putusan/b3eadb9806be6073c8dc468767cf2da5.html'},
    {id:'S02',jenis:'primer',lembaga:'Mahkamah Agung RI',judul:'Putusan 99 PK/Pid.Sus/2016 — Novianty Iriane & Betharia Panjaitan',url:'https://putusan3.mahkamahagung.go.id/direktori/putusan/403cf367970d94f69c977b72679fb80e.html'},
    {id:'S03',jenis:'sekunder',lembaga:'ANTARA',judul:'Sidang Malinda Dee hadirkan pihak Citibank',url:'https://www.antaranews.com/berita/285795/sidang-malinda-dee-hadirkan-pihak-citibank'},
    {id:'S04',jenis:'sekunder',lembaga:'ANTARA',judul:'Penyidik Polri Audit Rekening Milik Malinda Dee',url:'https://www.antaranews.com/berita/252961/penyidik-polri-audit-rekening-milik-malinda-dee'}
  ],
  transaksi:[
    {id:'TX-001',tanggal:'10 Mei 2010',form:'—',pengirim:'Rohli bin Pateni',rekeningPengirim:'8000032818',penerima:'Vigor Aw Yoshuara',rekeningPenerima:'1462080888',bank:'BCA Kuta Bali',jumlah:500000000,mataUang:'IDR',narasi:'',sumber:'S02',provenance:'primer'},
    {id:'TX-002',tanggal:'31 Agustus 2010',form:'AM 93712',pengirim:'Rohli bin Pateni',rekeningPengirim:'800032818',penerima:'Sukardi',rekeningPenerima:'8006041109',bank:'Citibank N.A.',jumlah:150000,mataUang:'USD',narasi:'',sumber:'S01',provenance:'primer'},
    {id:'TX-003',tanggal:'29 September 2010',form:'AM 124134',pengirim:'Rohli bin Pateni',rekeningPengirim:'800032818',penerima:'PT Graha Putranusa',rekeningPenerima:'1040004112798',bank:'Bank Mandiri',jumlah:6200,mataUang:'USD',narasi:'pembayaran tower 3 lantai 22A',sumber:'S01',provenance:'primer'},
    {id:'TX-004',tanggal:'1 Oktober 2010',form:'124135',pengirim:'Rohli bin Pateni',rekeningPengirim:'800032818',penerima:'PT Exclusive Jaya Perkasa (EJP)',rekeningPenerima:'4363008782',bank:'Tidak terekspos pada kutipan yang diverifikasi',jumlah:null,mataUang:'',narasi:'',sumber:'S01',provenance:'primer'},
    {id:'TX-005',tanggal:'16 Desember 2010',form:'110423',pengirim:'Ahmad Riyad',rekeningPengirim:'8000027838',penerima:'Ismail bin Janim',rekeningPenerima:'2761354762',bank:'BCA',jumlah:61000000,mataUang:'IDR',narasi:'untuk pembelian propolis Bpk A. Riyad',sumber:'S01',provenance:'primer'},
    {id:'TX-006',tanggal:'28 Desember 2010',form:'—',pengirim:'Gaby M',rekeningPengirim:'2150044146',penerima:'Ismail bin Janim',rekeningPenerima:'2761354762',bank:'BCA',jumlah:300000000,mataUang:'IDR',narasi:'DP untuk apartemen Regata',sumber:'S01',provenance:'primer'},
    {id:'TX-007',tanggal:'Tanggal tidak terekspos pada kutipan yang diverifikasi',form:'—',pengirim:'Collin Latung',rekeningPengirim:'8000171490',penerima:'Ismail bin Janim',rekeningPenerima:'27613554762',bank:'BCA',jumlah:10000,mataUang:'USD',narasi:'pembayaran Bpk Collin Latung untuk pembelian obat',sumber:'S02',provenance:'primer'}
  ],
  kontrol:[
    {id:'K01',area:'Verifikasi transaksi',fakta:'Putusan terkait menyebut Transaction Verification SOP No. 30 Revisi 2007 sebagai kriteria proses verifikasi.',implikasi:'Mahasiswa harus memisahkan keberadaan SOP dari efektivitas desain dan pelaksanaannya.',sumber:'S02'},
    {id:'K02',area:'Struktur peran',fakta:'Novianty Iriane disebut sebagai Cash Officer dan Betharia Panjaitan sebagai Cash Supervisor pada Landmark.',implikasi:'Bangun peta segregasi tugas antara relationship manager, teller, cash officer, dan cash supervisor.',sumber:'S02'},
    {id:'K03',area:'Verifikasi nilai besar',fakta:'Catatan putusan menggambarkan 18 formulir transfer melalui satu supervisor dan 8 transaksi di atas Rp300 juta diverifikasi olehnya.',implikasi:'Uji konsentrasi verifier, ambang otorisasi, dan apakah verifikasi independen benar-benar terjadi.',sumber:'S02'},
    {id:'K04',area:'Keaslian tanda tangan',fakta:'Dalam catatan PK disebut dua formulir transaksi yang diperiksa laboratorium forensik tidak memiliki tanda tangan yang identik dengan tanda tangan asli nasabah.',implikasi:'Gunakan sebagai bukti forensik terbatas; jangan menggeneralisasi ke seluruh populasi.',sumber:'S02'},
    {id:'K05',area:'Inventaris bukti',fakta:'Catatan perkara menyebut account summaries, banking relationship summaries, guest logbook, dan dokumen kepegawaian sebagai bagian bukti.',implikasi:'Mahasiswa harus menilai keterkaitan, reliabilitas, dan kecukupan bukti lintas sumber.',sumber:'S02'},
    {id:'K06',area:'Form transfer yang disita',fakta:'Pelaporan kontemporer menyebut penyidik menyita 29 formulir transfer.',implikasi:'Gunakan untuk diskusi chain of custody dan completeness populasi bukti.',sumber:'S04'}
  ],
  saksi:[
    {id:'W01',nama:'Inong Malinda Dee',peran:'Senior Relationship Manager',tahap:2,ringkas:'Tokoh utama perkara. Perannya penting untuk memahami hubungan nasabah, instruksi transfer, dan batas kewenangan relationship manager.',sumber:'S01',pertanyaan:['Apa peran relationship manager dalam proses transfer?','Dokumen apa yang menjadi dasar instruksi transfer?','Siapa yang memproses dan memverifikasi transaksi setelah instruksi diterima?']},
    {id:'W02',nama:'Novianty Iriane',peran:'Cash Officer',tahap:3,ringkas:'Relevan untuk memahami pemrosesan kas dan verifikasi. Putusan PK 2016 harus dibaca terpisah dari fakta kontrol yang dibahas dalam perkara.',sumber:'S02',pertanyaan:['Apa fungsi Cash Officer dalam alur transaksi?','Apa yang seharusnya diverifikasi sebelum transaksi diproses?','Bagaimana hubungan antara SOP dan bukti yang tersedia?']},
    {id:'W03',nama:'Betharia Panjaitan',peran:'Cash Supervisor',tahap:3,ringkas:'Relevan untuk kontrol transaksi bernilai tinggi dan konsentrasi verifikasi. Putusan PK mengharuskan mahasiswa membedakan isu kontrol dari tanggung jawab pidana.',sumber:'S02',pertanyaan:['Kapan supervisor wajib melakukan verifikasi?','Bagaimana ambang transaksi memengaruhi prosedur?','Apakah satu supervisor yang sering muncul merupakan bukti pelanggaran atau hanya indikator risiko?']},
    {id:'W04',nama:'Nasabah Citibank',peran:'Pemilik rekening',tahap:2,ringkas:'Perspektif nasabah diperlukan untuk menilai apakah transfer benar-benar diotorisasi dan bagaimana transaksi terlihat pada rekening.',sumber:'S01',pertanyaan:['Apakah transaksi ini Anda kenali?','Bagaimana biasanya Anda memberi instruksi transfer?','Apakah Anda menerima konfirmasi independen atas transaksi bernilai besar?']},
    {id:'W05',nama:'Penyidik',peran:'Investigasi dan rekonstruksi',tahap:4,ringkas:'Membawa perspektif chain of custody, rekonstruksi proses, formulir yang disita, dan penelusuran aliran dana.',sumber:'S04',pertanyaan:['Bukti fisik apa yang diamankan?','Mengapa rekonstruksi proses diperlukan?','Bagaimana Anda menghubungkan formulir, rekening, dan aliran dana?']}
  ],
  artefak:[
    {id:'E01',judul:'Ringkasan Putusan 1607 K/PID.SUS/2012',jenis:'Putusan pengadilan',tahap:2,provenance:'primer',sumber:'S01',isi:'Gunakan putusan sebagai sumber utama kronologi dan fakta transaksi. Aplikasi ini hanya mengekstrak bidang yang dapat diverifikasi dari sumber publik dan tidak mengklaim menampilkan keseluruhan 117 transaksi.'},
    {id:'E02',judul:'Transaction Verification SOP No. 30 Revisi 2007',jenis:'Kriteria kontrol',tahap:3,provenance:'primer',sumber:'S02',isi:'Keberadaan SOP menjadi kriteria untuk menilai desain dan pelaksanaan verifikasi. Teks SOP lengkap tidak direproduksi bila tidak tersedia sebagai dokumen publik terpisah.'},
    {id:'E03',judul:'Catatan Verifikasi Transaksi Nilai Besar',jenis:'Bukti kontrol',tahap:3,provenance:'primer',sumber:'S02',isi:'Catatan perkara menggambarkan 18 formulir transfer melalui satu supervisor dan delapan transaksi di atas Rp300 juta diverifikasi olehnya. Ini adalah indikator yang perlu dianalisis, bukan kesimpulan otomatis.'},
    {id:'E04',judul:'Hasil Pemeriksaan Tanda Tangan Terbatas',jenis:'Bukti forensik',tahap:4,provenance:'primer',sumber:'S02',isi:'Dua formulir yang diperiksa dalam konteks perkara disebut memiliki tanda tangan yang tidak identik dengan spesimen asli. Bukti ini tidak boleh digeneralisasi ke semua transaksi.'},
    {id:'E05',judul:'29 Formulir Transfer yang Disita',jenis:'Bukti investigasi',tahap:4,provenance:'sekunder',sumber:'S04',isi:'Pelaporan kontemporer menyebut 29 formulir transfer disita. Gunakan untuk mengevaluasi completeness bukti dan kebutuhan rekonsiliasi dengan transaksi yang diketahui.'},
    {id:'E06',judul:'Mock-up Formulir Transfer',jenis:'Rekonstruksi pembelajaran',tahap:1,provenance:'rekonstruksi',sumber:null,isi:'Formulir dalam aplikasi adalah rekonstruksi antarmuka pembelajaran berdasarkan bidang transaksi yang terekspos publik. Bukan scan formulir asli Citibank.'}
  ]
};
