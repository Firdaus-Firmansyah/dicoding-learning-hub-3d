/**
 * ==============================================================================
 * DICODING LEARNING HUB - DATABASE METADATA MODUL & PROYEK
 * Coding Camp 2026 3.0 powered by DBS Foundation
 * ==============================================================================
 * 
 * Berkas data ini memetakan seluruh kurikulum dari 3 kelas:
 * 1. Belajar Dasar Pemrograman Web
 * 2. Belajar Dasar Pemrograman JavaScript
 * 3. Belajar Membuat Front-End Web untuk Pemula
 */

const LEARNING_CLASSES = [
  {
    id: 'fe-pemula',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    shortTitle: 'Front-End Pemula',
    icon: '🎨',
    color: '#6366f1',
    description: 'Menguasai Browser Object Model (BOM), Document Object Model (DOM), Event Handling, Web Storage (localStorage & sessionStorage), serta Proyek Aplikasi Interaktif.',
    modulesCount: 26
  },
  {
    id: 'js-dasar',
    title: 'Belajar Dasar Pemrograman JavaScript',
    shortTitle: 'Dasar JavaScript',
    icon: '⚡',
    color: '#eab308',
    description: 'Fondasi bahasa JavaScript modern (ES6+): Tipe Data, Struktur Data (Array/Object/Map/Set), OOP, Functional Programming, Asynchronous (Promise & Async/Await), serta Automated Testing.',
    modulesCount: 45
  },
  {
    id: 'web-dasar',
    title: 'Belajar Dasar Pemrograman Web',
    shortTitle: 'Dasar Pemrograman Web',
    icon: '🌐',
    color: '#0ea5e9',
    description: 'Dasar pembuatan halaman web: Struktur HTML5 semantik, CSS Selector, Box Model, Flexbox, Layouting Responsif, dan Proyek Portofolio Profil Bandung & Landing Page.',
    modulesCount: 3
  }
];

const MODULES_DATA = [
  // ============================================================================
  // KELAS 3: BELAJAR MEMBUAT FRONT-END WEB UNTUK PEMULA
  // ============================================================================
  {
    id: 'fe-submission',
    classId: 'fe-pemula',
    category: 'Proyek Akhir & Submission',
    title: '🏆 Submission: Personal Finance & Expense Tracker App',
    shortTitle: 'Expense Tracker App',
    icon: '💎',
    badge: 'Submission Bintang 5',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/Submission - Membangun Expense Tracker App/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/Submission - Membangun Expense Tracker App/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/Submission - Membangun Expense Tracker App/css/style.css', language: 'css' },
      { name: 'js/main.js', path: './Belajar Membuat Front-End Web untuk Pemula/Submission - Membangun Expense Tracker App/js/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Tentang Proyek Akhir Submission</h3>
      <p>Aplikasi <b>Personal Finance & Expense Tracker App</b> adalah proyek akhir submission kelas Front-End Web Pemula dengan kriteria penilaian tingkat mahir (Bintang 5). Aplikasi ini menerapkan Manipulasi DOM murni, arsitektur Custom Events, dan persistensi Web Storage (<code>localStorage</code>).</p>
      
      <h4>Fitur Unggulan Proyek:</h4>
      <ul>
        <li><b>Dasbor Keuangan Dinamis</b>: Rekap kalkulasi real-time untuk Total Saldo, Total Pemasukan, dan Total Pengeluaran dengan format mata uang Rupiah (IDR).</li>
        <li><b>Pembagian Rak Transaksi Otomatis</b>: Memisahkan item ke rak <i>Pemasukan</i> (Aksen Clay Mint) dan <i>Pengeluaran</i> (Aksen Clay Coral).</li>
        <li><b>Persistensi Data Penuh</b>: Data tersimpan aman di <code>localStorage</code> dan langsung termuat saat halaman di-reload.</li>
        <li><b>Pencarian Real-Time</b>: Filter transaksi berdasarkan judul/deskripsi via event <code>input</code>, otomatis memulihkan daftar saat pencarian dikosongkan.</li>
        <li><b>Interaktivitas Cepat</b>: Tombol switch tipe transaksi (*income* &harr; *expense*), tombol hapus, serta mode edit data langsung.</li>
        <li><b>Desain 3D Claymorphism</b>: Kartu 3D empuk dengan tombol tactile membal.</li>
      </ul>
    `,
    keyPoints: [
      'Manipulasi DOM terstruktur dengan Custom Events (render-transactions, saved-transactions)',
      'Sinkronisasi dua arah antara array memori dan Web Storage (JSON.stringify / parse)',
      'Live search filter dengan auto-recovery saat input dikosongkan',
      'Format nominal otomatis ke standar Rupiah (Intl.NumberFormat)'
    ],
    evaluationCriteria: [
      'Kriteria 1: Mengubah susunan antarmuka (DOM) secara dinamis & menampilkan rak terpisah.',
      'Kriteria 2: Menyimpan, memuat, mengedit, dan menghapus data menggunakan Web Storage.',
      'Kriteria 3 (Opsional Mahir): Menambahkan fitur pencarian real-time dan switch tipe transaksi instan.'
    ]
  },
  {
    id: 'fe-24',
    classId: 'fe-pemula',
    category: 'Web Storage & Apps',
    title: '24 - Proyek Todo Apps Lengkap dengan Web Storage',
    shortTitle: 'Todo Apps Web Storage',
    icon: '💾',
    badge: 'Proyek Utama',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/css/style.css', language: 'css' },
      { name: 'js/script.js', path: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/js/script.js', language: 'javascript' }
    ],
    description: `
      <h3>Penyimpanan Data Todo ke Web Storage</h3>
      <p>Mengintegrasikan fungsionalitas <code>localStorage</code> ke dalam Todo Apps agar daftar tugas tidak hilang ketika browser di-refresh atau ditutup.</p>
      <h4>Alur Kerja:</h4>
      <ol>
        <li>Setiap mutasi (tambah, selesai, undo, hapus) memanggil fungsi <code>saveData()</code>.</li>
        <li>Data array dikonversi menjadi JSON String dengan <code>JSON.stringify(todos)</code> lalu disimpan dengan kunci <code>TODO_APPS</code>.</li>
        <li>Saat event <code>DOMContentLoaded</code> berjalan, fungsi <code>loadDataFromStorage()</code> membaca dan mem-parse kembali data ke memori aplikasi.</li>
      </ol>
    `,
    keyPoints: [
      'Penggunaan isStorageExist() untuk deteksi dukungan browser',
      'Event SAVED_EVENT untuk konfirmasi penyimpanan data',
      'Pemulihan state task secara otomatis saat web dibuka'
    ]
  },
  {
    id: 'fe-24-toast',
    classId: 'fe-pemula',
    category: 'Web Storage & Apps',
    title: 'Tantangan: Todo Apps dengan Toast Notification',
    shortTitle: 'Todo Apps + Toast',
    icon: '🚀',
    badge: 'Tantangan Modul',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/todoapps/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/todoapps/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/todoapps/css/style.css', language: 'css' },
      { name: 'js/script.js', path: './Belajar Membuat Front-End Web untuk Pemula/todoapps/js/script.js', language: 'javascript' }
    ],
    description: `
      <h3>Tantangan Eksplorasi: Floating Toast Notification</h3>
      <p>Memodifikasi listener <code>SAVED_EVENT</code> untuk memicu notifikasi mengambang (Toast) yang elegan setiap kali data berhasil disimpan ke Local Storage.</p>
    `,
    keyPoints: [
      'Pembuatan elemen notifikasi dinamis pada DOM',
      'Auto-dismiss setelah 3 detik menggunakan setTimeout()',
      'Animasi slide-in dan pop-in 3D Claymorphism'
    ]
  },
  {
    id: 'fe-23-app',
    classId: 'fe-pemula',
    category: 'Web Storage & Apps',
    title: '23 - Proyek Todo Apps (DOM Manipulation Dasar)',
    shortTitle: 'Todo Apps DOM',
    icon: '📝',
    badge: 'DOM Manipulation',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/css/style.css', language: 'css' },
      { name: 'js/script.js', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/js/script.js', language: 'javascript' }
    ],
    description: `
      <h3>Todo Apps: Add, Complete, Undo, & Delete</h3>
      <p>Penerapan dasar manipulasi DOM terstruktur untuk mengelola tugas harian dalam 2 rak: <i>"Yang harus dilakukan"</i> dan <i>"Yang sudah dilakukan"</i>.</p>
    `,
    keyPoints: [
      'Pemisahan logika data (array todos) dan visualisasi DOM (makeTodo)',
      'Penggunaan RENDER_EVENT untuk merefresh UI saat data berubah',
      'Pembuatan ID unik menggunakan UNIX Timestamp (+new Date())'
    ]
  },
  {
    id: 'fe-23-json',
    classId: 'fe-pemula',
    category: 'Web Storage',
    title: '23 - Menyimpan Data Kompleks JSON pada Storage',
    shortTitle: 'Data Kompleks JSON',
    icon: '📦',
    badge: 'Web Storage',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/23-[Modul MENYIMPAN DATA KOMPLEKS JSON PADA STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Modul MENYIMPAN DATA KOMPLEKS JSON PADA STORAGE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Modul MENYIMPAN DATA KOMPLEKS JSON PADA STORAGE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Serialisasi Objek JSON pada Web Storage</h3>
      <p>Web Storage hanya dapat menyimpan nilai bertipe <b>String</b>. Untuk menyimpan array atau objek yang kompleks, kita menggunakan <code>JSON.stringify()</code> saat menyimpan dan <code>JSON.parse()</code> saat membaca data kembali.</p>
    `,
    keyPoints: [
      'JSON.stringify(array) untuk mengonversi data memori ke string',
      'JSON.parse(string) untuk mengembalikan data ke bentuk array of objects',
      'Studi kasus form input user dengan pembatasan 5 entri terbaru via unshift() & pop()'
    ]
  },
  {
    id: 'fe-22',
    classId: 'fe-pemula',
    category: 'Web Storage',
    title: '22 - Proyek Permainan Tebak Angka 123',
    shortTitle: 'Tebak Angka 123',
    icon: '🎮',
    badge: 'Proyek Game',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/22-[Modul PROYEK PERMAINAN TEBAK ANGKA 123]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/22-[Modul PROYEK PERMAINAN TEBAK ANGKA 123]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/22-[Modul PROYEK PERMAINAN TEBAK ANGKA 123]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Integrasi localStorage dan sessionStorage pada Game Interaktif</h3>
      <p>Permainan menebak 3 digit angka unik acak ("1", "2", "3"). Proyek ini mendemonstrasikan kolaborasi sempurna antara <code>sessionStorage</code> (untuk status sesi permainan aktif) dan <code>localStorage</code> (untuk statistik rekor kemenangan global).</p>
    `,
    keyPoints: [
      'sessionStorage: Menyimpan kunci jawaban dan jumlah salah tebak sesi ini',
      'localStorage: Menyimpan total kemenangan dan rekor percobaan salah terbanyak',
      'Fitur Destroy Data untuk membersihkan kedua storage sekaligus'
    ]
  },
  {
    id: 'fe-21',
    classId: 'fe-pemula',
    category: 'Web Storage',
    title: '21 - Session Storage Dasar',
    shortTitle: 'Session Storage',
    icon: '⏱️',
    badge: 'Web Storage',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/21-[Modul SESSION STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/21-[Modul SESSION STORAGE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/21-[Modul SESSION STORAGE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Karakteristik Session Storage</h3>
      <p>Menyimpan data yang hanya bertahan selama tab browser aktif. Jika tab ditutup atau dibuka di jendela baru, data akan otomatis ter-reset.</p>
    `,
    keyPoints: [
      'sessionStorage.setItem(key, value) & getItem(key)',
      'Data bertahan saat refresh, hilang saat tab ditutup',
      'Cocok untuk data sesi login sementara atau formulir multi-step'
    ]
  },
  {
    id: 'fe-20',
    classId: 'fe-pemula',
    category: 'Web Storage',
    title: '20 - Local Storage Dasar',
    shortTitle: 'Local Storage',
    icon: '💾',
    badge: 'Web Storage',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/20-[Modul LOCAL STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/20-[Modul LOCAL STORAGE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/20-[Modul LOCAL STORAGE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Karakteristik Local Storage</h3>
      <p>Menyimpan data persisten tanpa batas waktu. Data tetap ada bahkan setelah browser ditutup dan laptop dimatikan.</p>
    `,
    keyPoints: [
      'localStorage.setItem(key, value) & getItem(key)',
      'localStorage.removeItem(key) & clear()',
      'Kapasitas penyimpanan browser standar ~5MB per origin'
    ]
  },
  {
    id: 'fe-19',
    classId: 'fe-pemula',
    category: 'Form & Input Event',
    title: '19 - Form Validasi Lengkap & Captcha',
    shortTitle: 'Form Validasi & Captcha',
    icon: '🛡️',
    badge: 'Form Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/19-[Modul FORM VALIDASI LENGKAP & CAPTCHA]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/19-[Modul FORM VALIDASI LENGKAP & CAPTCHA]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/19-[Modul FORM VALIDASI LENGKAP & CAPTCHA]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Integrasi Lengkap Form Event & Captcha</h3>
      <p>Menggabungkan seluruh event input (<code>input</code>, <code>focus</code>, <code>blur</code>, <code>change</code>, <code>copy</code>, <code>paste</code>, <code>submit</code>) ke dalam satu formulir pendaftaran interaktif.</p>
    `,
    keyPoints: [
      'Pengecekan sisa karakter real-time dengan peringatan visual',
      'Validasi Captcha otomatis mengaktifkan tombol Submit',
      'Deteksi aksi clipboard (copy & paste)'
    ]
  },
  {
    id: 'fe-18',
    classId: 'fe-pemula',
    category: 'Form & Input Event',
    title: '18 - Event onChange, onCopy & onPaste',
    shortTitle: 'onChange, onCopy, onPaste',
    icon: '📋',
    badge: 'Form Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/18-[Modul EVENT ONCHANGE, ONCOPY & ONPASTE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/18-[Modul EVENT ONCHANGE, ONCOPY & ONPASTE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/18-[Modul EVENT ONCHANGE, ONCOPY & ONPASTE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Menangani Event Perubahan Nilai & Clipboard</h3>
      <p>Mempelajari event <code>change</code> yang terpicu saat nilai input berubah dan kehilangan fokus, serta event <code>copy</code> dan <code>paste</code>.</p>
    `,
    keyPoints: [
      'Perbedaan event input (seketika) vs change (setelah blur/enter)',
      'Mencegah atau mendeteksi aksi salin-tempel pada formulir sensitif'
    ]
  },
  {
    id: 'fe-17',
    classId: 'fe-pemula',
    category: 'Form & Input Event',
    title: '17 - Event onInput, onFocus & onBlur',
    shortTitle: 'onInput, onFocus, onBlur',
    icon: '✍️',
    badge: 'Form Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/17-[Modul EVENT ONINPUT, ONFOCUS & ONBLUR]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/17-[Modul EVENT ONINPUT, ONFOCUS & ONBLUR]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/17-[Modul EVENT ONINPUT, ONFOCUS & ONBLUR]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Penghitungan Karakter Real-time & Efek Fokus</h3>
      <p>Memanfaatkan event <code>focus</code> untuk memunculkan panduan, <code>input</code> untuk menghitung sisa karakter secara langsung, dan <code>blur</code> untuk menyembunyikan bantuan.</p>
    `,
    keyPoints: [
      'Menghitung panjang string dengan event.target.value.length',
      'Mengubah warna badge menjadi merah saat sisa karakter kritis (<= 5)'
    ]
  },
  {
    id: 'fe-16',
    classId: 'fe-pemula',
    category: 'Form & Input Event',
    title: '16 - Input Event Menyiapkan Halaman Web',
    shortTitle: 'Menyiapkan Input Event',
    icon: '📏',
    badge: 'Form Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/16-[Modul INPUT EVENT MENYIAPKAN HALAMAN WEB]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/16-[Modul INPUT EVENT MENYIAPKAN HALAMAN WEB]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/16-[Modul INPUT EVENT MENYIAPKAN HALAMAN WEB]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Inisialisasi DOMContentLoaded untuk Input Element</h3>
      <p>Membaca atribut <code>maxLength</code> dari elemen input secara dinamis dan menampilkannya sebagai batas maksimal karakter saat dokumen siap.</p>
    `,
    keyPoints: [
      'Penggunaan DOMContentLoaded untuk eksekusi script yang aman',
      'Membaca properti elemen input.maxLength'
    ]
  },
  {
    id: 'fe-15',
    classId: 'fe-pemula',
    category: 'Form & Input Event',
    title: '15 - Pengenalan Form & Prevent Default',
    shortTitle: 'Form & Prevent Default',
    icon: '🚫',
    badge: 'Form Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/15-[Modul PENGENALAN FORM & PREVENT DEFAULT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/15-[Modul PENGENALAN FORM & PREVENT DEFAULT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/15-[Modul PENGENALAN FORM & PREVENT DEFAULT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Mencegah Reload Form Bawaan Browser</h3>
      <p>Secara default, pengiriman form HTML akan me-reload halaman. Dengan memanggil <code>event.preventDefault()</code>, kita dapat memproses data menggunakan JavaScript murni (Single Page Experience).</p>
    `,
    keyPoints: [
      'event.preventDefault() pada handler submit form',
      'Mengambil nilai input dan menampilkan pesan kustom ke DOM'
    ]
  },
  {
    id: 'fe-14',
    classId: 'fe-pemula',
    category: 'Event & DOM',
    title: '14 - Event Bubbling & Capturing',
    shortTitle: 'Bubbling & Capturing',
    icon: '🌊',
    badge: 'Event Propagation',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/14-[Modul EVENT BUBBLING & CAPTURING]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/14-[Modul EVENT BUBBLING & CAPTURING]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/14-[Modul EVENT BUBBLING & CAPTURING]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Mekanisme Propagasi Event pada DOM Tree</h3>
      <p>Memahami bagaimana event merambat pada elemen bersarang: <b>Event Bubbling</b> (dari elemen terdalam ke terluar) dan <b>Event Capturing</b> (dari elemen terluar ke terdalam via <code>useCapture: true</code>).</p>
    `,
    keyPoints: [
      'Event Bubbling vs Event Capturing',
      'Menghentikan propagasi dengan event.stopPropagation()'
    ]
  },
  {
    id: 'fe-13',
    classId: 'fe-pemula',
    category: 'Event & DOM',
    title: '13 - Custom Event',
    shortTitle: 'Custom Event',
    icon: '🎯',
    badge: 'Custom Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/13-[Modul CUSTOM EVENT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/13-[Modul CUSTOM EVENT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/13-[Modul CUSTOM EVENT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Mendefinisikan & Membangkitkan Event Kustom</h3>
      <p>Membuat event dengan nama yang kita tentukan sendiri menggunakan <code>new Event('namaEvent')</code> dan memicunya secara programatis lewat <code>element.dispatchEvent()</code>.</p>
    `,
    keyPoints: [
      'new Event() & element.dispatchEvent()',
      'Pemisahan arsitektur logika manipulasi data dan re-render tampilan'
    ]
  },
  {
    id: 'fe-12',
    classId: 'fe-pemula',
    category: 'Event & DOM',
    title: '12 - Event Handler dengan addEventListener()',
    shortTitle: 'addEventListener()',
    icon: '👂',
    badge: 'Event Handlers',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/12-[Modul EVENT HANDLER ADDEVENTLISTENER]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/12-[Modul EVENT HANDLER ADDEVENTLISTENER]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/12-[Modul EVENT HANDLER ADDEVENTLISTENER]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Standar Industri Penanganan Event</h3>
      <p>Keunggulan <code>addEventListener</code> dibandingkan properti <code>onclick</code>: dapat mendaftarkan beberapa event listener sekaligus pada satu elemen tanpa saling menimpa.</p>
    `,
    keyPoints: [
      'element.addEventListener(eventName, callback)',
      'Multiple event listeners pada satu elemen tunggal'
    ]
  },
  {
    id: 'fe-11',
    classId: 'fe-pemula',
    category: 'Event & DOM',
    title: '11 - Event Handler Property (onclick)',
    shortTitle: 'Property onclick',
    icon: '🖱️',
    badge: 'Event Handlers',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/11-[Modul EVENT HANDLER PROPERTY ONCLICK]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/11-[Modul EVENT HANDLER PROPERTY ONCLICK]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/11-[Modul EVENT HANDLER PROPERTY ONCLICK]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Menerapkan Event Handler via Properti JavaScript</h3>
      <p>Mengatur fungsi callback langsung pada properti objek elemen (misal: <code>btn.onclick = handler</code>). Mempelajari batasan jika ditimpa handler baru.</p>
    `,
    keyPoints: [
      'element.onclick = function() {}',
      'Kelemahan: Handler sebelumnya akan ter-overwrite jika didefinisikan ulang'
    ]
  },
  {
    id: 'fe-10',
    classId: 'fe-pemula',
    category: 'Event & DOM',
    title: '10 - Event Handler Onload',
    shortTitle: 'Event Onload',
    icon: '⏳',
    badge: 'Window Events',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/10-[Modul EVENT HANDLER ONLOAD]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/10-[Modul EVENT HANDLER ONLOAD]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/10-[Modul EVENT HANDLER ONLOAD]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Inisialisasi Halaman saat Selesai Dimuat</h3>
      <p>Menggunakan event <code>onload</code> untuk memastikan seluruh aset halaman (HTML, CSS, gambar) telah siap sebelum script JavaScript dijalankan.</p>
    `,
    keyPoints: [
      'window.onload vs document.body.onload',
      'Perbedaan onload (tunggu seluruh aset) vs DOMContentLoaded (tunggu struktur DOM)'
    ]
  },
  {
    id: 'fe-09',
    classId: 'fe-pemula',
    category: 'Event & DOM',
    title: '09 - Pengenalan Event & Inline Handler',
    shortTitle: 'Inline Event Handler',
    icon: '🔔',
    badge: 'Event Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/09-[Modul PENGENALAN EVENT & INLINE HANDLER]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/09-[Modul PENGENALAN EVENT & INLINE HANDLER]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/09-[Modul PENGENALAN EVENT & INLINE HANDLER]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Konsep Event & Atribut Inline HTML</h3>
      <p>Pengenalan konsep event pada halaman web dan cara tradisional memasang handler langsung di atribut elemen HTML (seperti <code>onclick="alert('Hello')"</code>).</p>
    `,
    keyPoints: [
      'Pengertian event (aksi user / kondisi browser)',
      'Kelebihan & kekurangan pendekatan inline handler'
    ]
  },
  {
    id: 'fe-08',
    classId: 'fe-pemula',
    category: 'Document Object Model (DOM)',
    title: '08 - Mengubah Konten & Atribut HTML (Cube World)',
    shortTitle: 'Mengubah Konten & Atribut',
    icon: '🧊',
    badge: 'DOM Manipulation',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/08-[Modul MENGUBAH KONTEN HTML]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/08-[Modul MENGUBAH KONTEN HTML]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/08-[Modul MENGUBAH KONTEN HTML]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Manipulasi Teks, Gambar, Link, & Tombol</h3>
      <p>Studi kasus komprehensif <i>Cube World</i> untuk mengubah <code>innerText</code>, mengganti sumber gambar (<code>src</code>), mengubah tautan (<code>href</code>), dan mengaktifkan tombol yang awalnya <code>disabled</code>.</p>
    `,
    keyPoints: [
      'element.setAttribute() & element.removeAttribute()',
      'element.disabled = false untuk mengaktifkan tombol'
    ]
  },
  {
    id: 'fe-07',
    classId: 'fe-pemula',
    category: 'Document Object Model (DOM)',
    title: '07 - Menambahkan Elemen ke DOM (Memasak Air)',
    shortTitle: 'Menambahkan Elemen ke DOM',
    icon: '🫖',
    badge: 'DOM Manipulation',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/07-[Modul MENAMBAHKAN ELEMEN KE DOM]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/07-[Modul MENAMBAHKAN ELEMEN KE DOM]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/07-[Modul MENAMBAHKAN ELEMEN KE DOM]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Menyisipkan Node Baru dengan appendChild & insertBefore</h3>
      <p>Studi kasus menyusun urutan langkah memasak air: menambahkan elemen di akhir parent dengan <code>appendChild()</code> dan menyisipkan elemen di posisi tertentu dengan <code>insertBefore()</code>.</p>
    `,
    keyPoints: [
      'parent.appendChild(newChild)',
      'parent.insertBefore(newChild, referenceNode)'
    ]
  },
  {
    id: 'fe-06',
    classId: 'fe-pemula',
    category: 'Document Object Model (DOM)',
    title: '06 - Membuat Elemen HTML Baru',
    shortTitle: 'Membuat Elemen HTML',
    icon: '🏗️',
    badge: 'DOM Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/06-[Modul MEMBUAT ELEMEN HTML]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/06-[Modul MEMBUAT ELEMEN HTML]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/06-[Modul MEMBUAT ELEMEN HTML]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>document.createElement() & innerText vs innerHTML</h3>
      <p>Membuat simpul elemen HTML baru dari JavaScript serta memahami perbedaan keamanan antara <code>innerText</code> (hanya teks) dan <code>innerHTML</code> (parsing HTML tag).</p>
    `,
    keyPoints: [
      'document.createElement(tagName)',
      'Keamanan teks: innerText vs potensi XSS pada innerHTML'
    ]
  },
  {
    id: 'fe-05',
    classId: 'fe-pemula',
    category: 'Document Object Model (DOM)',
    title: '05 - Struktur DOM Tree & Query Elemen',
    shortTitle: 'DOM Tree & Query Elemen',
    icon: '🌲',
    badge: 'DOM Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/05-[Modul DOM TREE & QUERY ELEMEN]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/05-[Modul DOM TREE & QUERY ELEMEN]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/05-[Modul DOM TREE & QUERY ELEMEN]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Menyeleksi Node Elemen pada Pohon DOM</h3>
      <p>Mengenal struktur pohon simpul (DOM Tree) serta metode seleksi elemen modern: <code>getElementById()</code>, <code>getElementsByClassName()</code>, <code>querySelector()</code>, dan <code>querySelectorAll()</code>.</p>
    `,
    keyPoints: [
      'Perbedaan HTMLCollection vs NodeList',
      'Kekuatan CSS Selector pada querySelector()'
    ]
  },
  {
    id: 'fe-04',
    classId: 'fe-pemula',
    category: 'Browser Object Model (BOM)',
    title: '04 - Console Browser & Debugging',
    shortTitle: 'Console Browser',
    icon: '💻',
    badge: 'BOM Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/04-[Modul CONSOLE BROWSER]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/04-[Modul CONSOLE BROWSER]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/04-[Modul CONSOLE BROWSER]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Debugging Modern dengan Console API</h3>
      <p>Menguasai berbagai metode objek <code>console</code>: <code>console.log()</code>, <code>console.info()</code>, <code>console.warn()</code>, <code>console.error()</code>, dan <code>console.table()</code>.</p>
    `,
    keyPoints: [
      'Tingkat keparahan pesan (Log, Info, Warning, Error)',
      'Visualisasi data tabular dengan console.table()'
    ]
  },
  {
    id: 'fe-03',
    classId: 'fe-pemula',
    category: 'Browser Object Model (BOM)',
    title: '03 - Method Prompt (Input Interaktif)',
    shortTitle: 'Method Prompt',
    icon: '💬',
    badge: 'BOM Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/03-[Modul METHOD PROMPT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/03-[Modul METHOD PROMPT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/03-[Modul METHOD PROMPT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Menerima Input Pengguna dengan prompt()</h3>
      <p>Mengambil teks dari kotak dialog pengguna, menangani nilai balik string, konversi ke angka via <code>Number()</code>, dan menangani pembatalan (<code>null</code>).</p>
    `,
    keyPoints: [
      'window.prompt(pesan, defaultValue)',
      'Penanganan nilai null saat tombol Cancel ditekan'
    ]
  },
  {
    id: 'fe-02',
    classId: 'fe-pemula',
    category: 'Browser Object Model (BOM)',
    title: '02 - Method Alert (Kotak Dialog Peringatan)',
    shortTitle: 'Method Alert',
    icon: '⚠️',
    badge: 'BOM Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/02-[Modul METHOD ALERT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/02-[Modul METHOD ALERT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/02-[Modul METHOD ALERT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Menampilkan Dialog Peringatan Modal</h3>
      <p>Mempelajari fungsi modal <code>window.alert()</code> yang menghentikan sementara eksekusi kode sampai pengguna menekan tombol OK.</p>
    `,
    keyPoints: [
      'Sifat blocking modal dari dialog alert()',
      'Mengirim string literal dan ekspresi variabel'
    ]
  },
  {
    id: 'fe-01',
    classId: 'fe-pemula',
    category: 'Browser Object Model (BOM)',
    title: '01 - Cara Memanggil Anggota BOM',
    shortTitle: 'Anggota BOM',
    icon: '🧭',
    badge: 'BOM Basics',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/01-[Modul CARA MEMANGGIL ANGGOTA BOM]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/01-[Modul CARA MEMANGGIL ANGGOTA BOM]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/01-[Modul CARA MEMANGGIL ANGGOTA BOM]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>Objek Global window & Function Shadowing</h3>
      <p>Memahami objek <code>window</code> sebagai global context di browser dan fenomena <i>function shadowing/overriding</i> ketika membuat fungsi dengan nama yang sama dengan method BOM.</p>
    `,
    keyPoints: [
      'window.alert() vs alert()',
      'Bahaya shadowing fungsi bawaan browser'
    ]
  },

  // ============================================================================
  // KELAS 1: BELAJAR DASAR PEMROGRAMAN WEB
  // ============================================================================
  {
    id: 'web-submission-1',
    classId: 'web-dasar',
    category: 'Submission & Proyek',
    title: '🏆 Submission: Halaman Profil Kota Bandung',
    shortTitle: 'Profil Kota Bandung',
    icon: '🏛️',
    badge: 'Submission Web Dasar',
    type: 'html',
    filePath: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/halaman-profil-bandung/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/halaman-profil-bandung/index.html', language: 'html' },
      { name: 'assets/styles/style.css', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/halaman-profil-bandung/assets/styles/style.css', language: 'css' }
    ],
    description: `
      <h3>Submission Proyek Akhir: Halaman Web Profil</h3>
      <p>Halaman profil informatif Kota Bandung yang dibangun dengan struktur HTML5 Semantik (<code>header</code>, <code>nav</code>, <code>main</code>, <code>article</code>, <code>aside</code>, <code>footer</code>) serta layouting CSS Flexbox dan Media Queries responsif.</p>
    `,
    keyPoints: [
      'Penggunaan elemen semantik HTML5',
      'Layouting Flexbox 2 kolom (Konten Utama & Profil Aside)',
      'Responsive design dengan CSS Media Queries'
    ]
  },
  {
    id: 'web-landing',
    classId: 'web-dasar',
    category: 'Proyek Latihan',
    title: 'Landing Page Dicoding Academy',
    shortTitle: 'Landing Page Dicoding',
    icon: '🚀',
    badge: 'CSS Layouting',
    type: 'html',
    filePath: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/landing-page-dicoding/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/landing-page-dicoding/index.html', language: 'html' },
      { name: 'assets/styles/style.css', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/landing-page-dicoding/assets/styles/style.css', language: 'css' }
    ],
    description: `
      <h3>Praktek Pembuatan Landing Page Modern</h3>
      <p>Implementasi Hero Section, Kartu Layanan, Testimoni, dan Form Kontak menggunakan CSS Grid dan Flexbox.</p>
    `,
    keyPoints: [
      'Hero banner dengan CTA button interaktif',
      'Grid kartu fitur yang adaptif',
      'Tipografi modern dan skema warna harmonis'
    ]
  },
  {
    id: 'web-anchor-labs',
    classId: 'web-dasar',
    category: 'Lab HTML Dasar',
    title: 'Lab 203: Menerapkan Elemen Anchor pada Halaman Profil',
    shortTitle: 'Anchor Link Labs',
    icon: '🔗',
    badge: 'HTML5 Basics',
    type: 'html',
    filePath: './Belajar Dasar Pemrograman Web/webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Dasar Pemrograman Web/webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/index.html', language: 'html' },
      { name: 'assets/styles/style.css', path: './Belajar Dasar Pemrograman Web/webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/assets/styles/style.css', language: 'css' }
    ],
    description: `
      <h3>Navigasi Internal Halaman dengan Anchor Tag</h3>
      <p>Menggunakan elemen <code>&lt;a href="#idSection"&gt;</code> untuk melompat langsung ke bagian tertentu pada halaman panjang dengan navigasi mulus (*smooth scrolling*).</p>
    `,
    keyPoints: [
      'Anchor tag href dengan ID target',
      'Navigasi internal tanpa me-reload halaman'
    ]
  },

  // ============================================================================
  // KELAS 2: BELAJAR DASAR PEMROGRAMAN JAVASCRIPT
  // ============================================================================
  {
    id: 'js-final-assessment',
    classId: 'js-dasar',
    category: 'Proyek Akhir & Testing',
    title: '🏆 Final Assessment: Evaluasi Pembelajaran JavaScript',
    shortTitle: 'Final Assessment JS',
    icon: '🥇',
    badge: 'Assessment JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/final-assessment/01-writing-text/index.js',
    sourceFiles: [
      { name: '01-writing-text/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/01-writing-text/index.js', language: 'javascript' },
      { name: '02-code-style/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/02-code-style/index.js', language: 'javascript' },
      { name: '03-writing-test/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/03-writing-test/index.js', language: 'javascript' },
      { name: 'optional-01-dice/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-01-dice/index.js', language: 'javascript' },
      { name: 'optional-02-format-number/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-02-format-number/index.js', language: 'javascript' }
    ],
    description: `
      <h3>Evaluasi Pembelajaran Akhir JavaScript</h3>
      <p>Paket proyek uji kompetensi komprehensif yang mencakup penulisan teks, standarisasi kode ESLint, unit testing (Node Test Runner & Bun), simulasi pelemparan dadu, serta pemformatan angka.</p>
    `,
    keyPoints: [
      'Unit testing kode dengan assertions',
      'Format angka internasional dan representasi mata uang',
      'Penerapan Code Style Guide standar industri'
    ]
  },
  {
    id: 'js-44-test',
    classId: 'js-dasar',
    category: 'Automated Testing',
    title: '44 - Automated Testing dengan Bun Test',
    shortTitle: 'Bun Test Runner',
    icon: '🧪',
    badge: 'Testing',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js',
    sourceFiles: [
      { name: '44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js', path: './Belajar Dasar Pemrograman JavaScript/44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js', language: 'javascript' },
      { name: '44-[Modul AUTOMATED TESTING DENGAN BUN TEST].test.js', path: './Belajar Dasar Pemrograman JavaScript/44-[Modul AUTOMATED TESTING DENGAN BUN TEST].test.js', language: 'javascript' }
    ],
    description: `
      <h3>Unit Testing Cepat dengan Bun Test</h3>
      <p>Menguji fungsi aplikasi menggunakan runner modern <code>bun test</code> dengan fungsi <code>describe</code>, <code>test</code>, dan <code>expect()</code>.</p>
    `,
    keyPoints: [
      'Struktur describe() dan test() / it()',
      'Matchers: expect(result).toBe(), toEqual()'
    ]
  },
  {
    id: 'js-43-node-test',
    classId: 'js-dasar',
    category: 'Automated Testing',
    title: '43 - Automated Testing dengan Node.js Test Runner',
    shortTitle: 'Node Test Runner',
    icon: '🟢',
    badge: 'Testing',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js',
    sourceFiles: [
      { name: '43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js', path: './Belajar Dasar Pemrograman JavaScript/43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js', language: 'javascript' }
    ],
    description: `
      <h3>Native Testing di Node.js (node:test)</h3>
      <p>Membuat automated test bawaan tanpa library eksternal menggunakan modul native <code>node:test</code> dan <code>node:assert</code>.</p>
    `,
    keyPoints: [
      'import { describe, it } from "node:test"',
      'import assert from "node:assert"'
    ]
  },
  {
    id: 'js-39-async-await',
    classId: 'js-dasar',
    category: 'Asynchronous JavaScript',
    title: '39 - Asynchronous JavaScript: Async / Await',
    shortTitle: 'Async / Await',
    icon: '⚡',
    badge: 'Async JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/39-[Modul ASYNC AWAIT].js',
    sourceFiles: [
      { name: '39-[Modul ASYNC AWAIT].js', path: './Belajar Dasar Pemrograman JavaScript/39-[Modul ASYNC AWAIT].js', language: 'javascript' }
    ],
    description: `
      <h3>Sintaks Modern Asynchronous: async & await</h3>
      <p>Menulis kode asynchronous dengan gaya synchronous yang sangat bersih, mudah dibaca, dan penanganan error menggunakan blok <code>try ... catch</code>.</p>
    `,
    keyPoints: [
      'Kata kunci async function & await promise',
      'Penanganan error bersih via try / catch / finally'
    ]
  },
  {
    id: 'js-38-promise-concurrency',
    classId: 'js-dasar',
    category: 'Asynchronous JavaScript',
    title: '38 - Promise Concurrency (all, allSettled, race, any)',
    shortTitle: 'Promise Concurrency',
    icon: '🏎️',
    badge: 'Async JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/38-[Modul PROMISE CONCURRENCY].js',
    sourceFiles: [
      { name: '38-[Modul PROMISE CONCURRENCY].js', path: './Belajar Dasar Pemrograman JavaScript/38-[Modul PROMISE CONCURRENCY].js', language: 'javascript' }
    ],
    description: `
      <h3>Menjalankan Beberapa Promise Bersamaan</h3>
      <p>Mempelajari fungsi kombinasi promise: <code>Promise.all()</code>, <code>Promise.allSettled()</code>, <code>Promise.race()</code>, dan <code>Promise.any()</code>.</p>
    `,
    keyPoints: [
      'Promise.all: Tunggu semua selesai, gagal jika salah satu reject',
      'Promise.allSettled: Dapatkan hasil seluruh promise (status & value/reason)'
    ]
  },
  {
    id: 'js-37-promise-dasar',
    classId: 'js-dasar',
    category: 'Asynchronous JavaScript',
    title: '37 - Promise Dasar & Promise Chaining',
    shortTitle: 'Promise & Chaining',
    icon: '🤝',
    badge: 'Async JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/37-[Modul PROMISE DASAR & CHAINING].js',
    sourceFiles: [
      { name: '37-[Modul PROMISE DASAR & CHAINING].js', path: './Belajar Dasar Pemrograman JavaScript/37-[Modul PROMISE DASAR & CHAINING].js', language: 'javascript' }
    ],
    description: `
      <h3>Konsep Objek Promise pada JavaScript</h3>
      <p>Memahami 3 status promise (<i>Pending</i>, <i>Fulfilled</i>, <i>Rejected</i>) serta perangkaian operasi bertingkat menggunakan <code>.then()</code>, <code>.catch()</code>, dan <code>.finally()</code>.</p>
    `,
    keyPoints: [
      'new Promise((resolve, reject) => {})',
      'Chaining .then() untuk menghindari Callback Hell'
    ]
  },
  {
    id: 'js-34-hof',
    classId: 'js-dasar',
    category: 'Functional Programming',
    title: '34 - Higher-Order Functions (map, filter, reduce)',
    shortTitle: 'Higher-Order Functions',
    icon: '🔄',
    badge: 'Functional',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/34-[Modul HIGHER-ORDER FUNCTION].js',
    sourceFiles: [
      { name: '34-[Modul HIGHER-ORDER FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/34-[Modul HIGHER-ORDER FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>Fungsi yang Menerima atau Mengembalikan Fungsi</h3>
      <p>Menguasai metode array deklaratif: <code>map()</code> untuk transformasi, <code>filter()</code> untuk seleksi, dan <code>reduce()</code> untuk agregasi data.</p>
    `,
    keyPoints: [
      'First-Class Functions di JavaScript',
      'Kombinasi map(), filter(), dan reduce() untuk pengolahan data efisien'
    ]
  },
  {
    id: 'js-25-oop',
    classId: 'js-dasar',
    category: 'Object-Oriented Programming (OOP)',
    title: '25 - 29: Paradigma OOP (Class, Inheritance, Encapsulation, Polymorphism)',
    shortTitle: 'OOP JavaScript',
    icon: '🏛️',
    badge: 'OOP Paradigms',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/25-[Modul PARADIGMA BERBASIS OBJEK].js',
    sourceFiles: [
      { name: '25-[Modul PARADIGMA BERBASIS OBJEK].js', path: './Belajar Dasar Pemrograman JavaScript/25-[Modul PARADIGMA BERBASIS OBJEK].js', language: 'javascript' },
      { name: '26-[Modul INHERITANCE].js', path: './Belajar Dasar Pemrograman JavaScript/26-[Modul INHERITANCE].js', language: 'javascript' },
      { name: '27-[Modul ENCAPSULATION].js', path: './Belajar Dasar Pemrograman JavaScript/27-[Modul ENCAPSULATION].js', language: 'javascript' },
      { name: '28-[Modul POLYMORPHISM].js', path: './Belajar Dasar Pemrograman JavaScript/28-[Modul POLYMORPHISM].js', language: 'javascript' },
      { name: '29-[Modul OBJECT COMPOSITION].js', path: './Belajar Dasar Pemrograman JavaScript/29-[Modul OBJECT COMPOSITION].js', language: 'javascript' }
    ],
    description: `
      <h3>Pemrograman Berorientasi Objek di ES6+</h3>
      <p>Mendalami konsep Class, Constructor, Private Fields (<code>#privateProp</code>), Pewarisan (<code>extends</code> & <code>super</code>), Overriding method, serta Komposisi Objek.</p>
    `,
    keyPoints: [
      'Class & constructor',
      'Private identifier (#field)',
      'Inheritance vs Object Composition'
    ]
  },
  {
    id: 'js-14-19-data-structures',
    classId: 'js-dasar',
    category: 'Struktur Data',
    title: '14 - 19: Struktur Data Modern (Object, Array, Map, Set, Spread & Rest)',
    shortTitle: 'Struktur Data JS',
    icon: '📚',
    badge: 'Data Structures',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/14-[Modul OBJECT].js',
    sourceFiles: [
      { name: '14-[Modul OBJECT].js', path: './Belajar Dasar Pemrograman JavaScript/14-[Modul OBJECT].js', language: 'javascript' },
      { name: '15-[Modul ARRAY].js', path: './Belajar Dasar Pemrograman JavaScript/15-[Modul ARRAY].js', language: 'javascript' },
      { name: '16-[Modul SPREAD OPERATOR].js', path: './Belajar Dasar Pemrograman JavaScript/16-[Modul SPREAD OPERATOR].js', language: 'javascript' },
      { name: '17-[Modul REST OPERATOR & PARAMETER].js', path: './Belajar Dasar Pemrograman JavaScript/17-[Modul REST OPERATOR & PARAMETER].js', language: 'javascript' },
      { name: '18-[Modul MAP].js', path: './Belajar Dasar Pemrograman JavaScript/18-[Modul MAP].js', language: 'javascript' },
      { name: '19-[Modul SET].js', path: './Belajar Dasar Pemrograman JavaScript/19-[Modul SET].js', language: 'javascript' }
    ],
    description: `
      <h3>Struktur Data Esensial JavaScript</h3>
      <p>Eksplorasi mendalam pengelolaan data: Objek literal, Array methods, pemanfaatan operator <code>...</code> (Spread & Rest), serta koleksi data unik (Set) dan pasangan kunci-nilai fleksibel (Map).</p>
    `,
    keyPoints: [
      'Spread vs Rest Operator (...)',
      'Map untuk key non-string & Set untuk kumpulan nilai unik',
      'Destructuring Assignment pada Object & Array'
    ]
  },
  {
    id: 'js-01-13-basics',
    classId: 'js-dasar',
    category: 'Dasar Bahasa & Functions',
    title: '01 - 13: Dasar Sintaks, Variabel, Tipe Data & Functions',
    shortTitle: 'Dasar Sintaks & Functions',
    icon: '🔤',
    badge: 'JS Basics',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/1-[Modul EXPRESSION DAN STATEMENT].js',
    sourceFiles: [
      { name: '1-[Modul EXPRESSION DAN STATEMENT].js', path: './Belajar Dasar Pemrograman JavaScript/1-[Modul EXPRESSION DAN STATEMENT].js', language: 'javascript' },
      { name: '3-[Modul VARIABEL].js', path: './Belajar Dasar Pemrograman JavaScript/3-[Modul VARIABEL].js', language: 'javascript' },
      { name: '4-[Modul TIPE DATA].js', path: './Belajar Dasar Pemrograman JavaScript/4-[Modul TIPE DATA].js', language: 'javascript' },
      { name: '6-[Modul OPERATOR].js', path: './Belajar Dasar Pemrograman JavaScript/6-[Modul OPERATOR].js', language: 'javascript' },
      { name: '13-[Modul ARROW FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/13-[Modul ARROW FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>Fondasi Bahasa JavaScript</h3>
      <p>Mencakup deklarasi variabel (<code>let</code>, <code>const</code>, <code>var</code>), tipe data primitif, operator perbandingan & logika, konversi tipe data, serta variasi pembuatan fungsi (Declaration, Expression, Arrow Function).</p>
    `,
    keyPoints: [
      'Perbedaan let vs const vs var',
      'Arrow Function syntax & implisit return',
      'Type Coercion & Strict Equality (===)'
    ]
  }
];

if (typeof window !== 'undefined') {
  window.LEARNING_CLASSES = LEARNING_CLASSES;
  window.MODULES_DATA = MODULES_DATA;
}
