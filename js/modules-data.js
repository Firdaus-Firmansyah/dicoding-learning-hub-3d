/**
 * ==============================================================================
 * DICODING LEARNING HUB - DATABASE METADATA MODUL & PROYEK LENGKAP
 * Coding Camp 2026 3.0 powered by DBS Foundation
 * ==============================================================================
 */

const LEARNING_CLASSES = [
  {
    id: 'fe-pemula',
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    shortTitle: 'Front-End Pemula',
    icon: '🎨',
    color: '#6366f1',
    description: 'Menguasai Browser Object Model (BOM), Document Object Model (DOM), Event Handling, Web Storage (localStorage & sessionStorage), serta Proyek Aplikasi Interaktif.'
  },
  {
    id: 'js-dasar',
    title: 'Belajar Dasar Pemrograman JavaScript',
    shortTitle: 'Dasar JavaScript',
    icon: '⚡',
    color: '#eab308',
    description: 'Fondasi bahasa JavaScript modern (ES6+): Tipe Data, Struktur Data (Array/Object/Map/Set), OOP, Functional Programming, Asynchronous (Promise & Async/Await), serta Automated Testing.'
  },
  {
    id: 'web-dasar',
    title: 'Belajar Dasar Pemrograman Web',
    shortTitle: 'Dasar Pemrograman Web',
    icon: '🌐',
    color: '#0ea5e9',
    description: 'Dasar pembuatan halaman web: Struktur HTML5 semantik, CSS Selector, Box Model, Flexbox, Layouting Responsif, dan Proyek Portofolio Profil Bandung & Landing Page.'
  }
];

const MODULES_DATA = [
  // ============================================================================
  // KELAS 1: BELAJAR DASAR PEMROGRAMAN WEB
  // ============================================================================
  {
    id: 'web-profil-bandung',
    classId: 'web-dasar',
    category: 'Proyek Akhir & Submission',
    title: '🏆 Submission: Halaman Profil Kota Bandung (Paris van Java)',
    shortTitle: 'Halaman Profil Bandung',
    icon: '🏛️',
    badge: 'Submission Bintang 5',
    type: 'html',
    filePath: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/halaman-profil-bandung/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/halaman-profil-bandung/index.html', language: 'html' },
      { name: 'assets/styles/style.css', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/halaman-profil-bandung/assets/styles/style.css', language: 'css' }
    ],
    description: `
      <h3>🏛️ Halaman Profil Kota Bandung</h3>
      <p>Proyek akhir kelas Belajar Dasar Pemrograman Web yang menampilkan halaman profil informatif Kota Bandung dengan struktur semantik HTML5 yang lengkap, navigasi fixed, layout flexbox responsif, kartu wisata & kuliner, serta sidebar profil interaktif.</p>
    `,
    keyPoints: [
      'Struktur HTML5 Semantik: <header>, <nav>, <main>, <article>, <section>, <aside>, dan <footer>',
      'Layouting Flexbox & Grid adaptif untuk Desktop, Tablet, dan Mobile',
      'Desain modern dengan tipografi Quicksand & Plus Jakarta Sans',
      'Menu navigasi internal (smooth scrolling) & tombol profil eksternal'
    ],
    evaluationCriteria: [
      'Memiliki elemen semantik HTML5 yang terstruktur dan bermakna',
      'Memiliki tata letak (layout) responsif menggunakan CSS Flexbox/Grid',
      'Menampilkan konten teks, gambar, dan styling CSS yang rapi',
      'Memiliki bagian aside yang berisi profil/biodata diri pembuat'
    ]
  },
  {
    id: 'web-landing-page',
    classId: 'web-dasar',
    category: 'Proyek Showcase',
    title: '🚀 Landing Page Platform Pendidikan Dicoding Indonesia',
    shortTitle: 'Landing Page Dicoding',
    icon: '💻',
    badge: 'Proyek Showcase',
    type: 'html',
    filePath: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/landing-page-dicoding/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/landing-page-dicoding/index.html', language: 'html' },
      { name: 'css/app.css', path: './Belajar Dasar Pemrograman Web/Submission Tugas Akhir Membuat Website/landing-page-dicoding/css/app.css', language: 'css' }
    ],
    description: `
      <h3>🚀 Landing Page Dicoding Indonesia</h3>
      <p>Showcase halaman beranda interaktif bertema platform edukasi Dicoding Indonesia dengan fitur hero section, grid program belajar, testimoni, dan kartu profil pengembang.</p>
    `,
    keyPoints: [
      'Desain modern bernuansa Dicoding Indigo & Navy',
      'Hero banner dengan statistik dinamis dan CTA button',
      'Grid program pembelajaran teknologi terdepan',
      'Responsif penuh pada resolusi ponsel, tablet, dan desktop'
    ],
    evaluationCriteria: [
      'Struktur kode semantik dan terorganisir dengan baik',
      'Kompatibilitas tampilan lintas perangkat',
      'Integrasi ikon Font Awesome dan tipografi web Google Fonts'
    ]
  },
  {
    id: 'web-labs-anchor',
    classId: 'web-dasar',
    category: 'Lab Latihan Mandiri',
    title: '🧪 Lab 203: Menerapkan Elemen Anchor pada Halaman Profil',
    shortTitle: 'Lab 203 Elemen Anchor',
    icon: '⚓',
    badge: 'Lab Web Dasar',
    type: 'html',
    filePath: './Belajar Dasar Pemrograman Web/webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/halaman-profil-bandung/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Dasar Pemrograman Web/webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/halaman-profil-bandung/index.html', language: 'html' },
      { name: 'styles/style.css', path: './Belajar Dasar Pemrograman Web/webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/halaman-profil-bandung/styles/style.css', language: 'css' }
    ],
    description: `
      <h3>⚓ Lab 203: Menerapkan Elemen Anchor</h3>
      <p>Latihan praktis implementasi tautan (hyperlink) internal menggunakan elemen <code>&lt;a href="#target"&gt;</code> untuk melompat antar section dokumen HTML secara mulus.</p>
    `,
    keyPoints: [
      'Penggunaan atribut href="#id" untuk navigasi in-page',
      'Target ID pada elemen tujuan (sejarah, geografis, wisata)',
      'Optimasi aksesibilitas tautan web'
    ]
  },

  // ============================================================================
  // KELAS 2: BELAJAR DASAR PEMROGRAMAN JAVASCRIPT (44 MODUL + FINAL ASSESSMENT)
  // ============================================================================
  {
    id: 'js-01-expression-statement',
    classId: 'js-dasar',
    category: '01. Sintaks & Dasar',
    title: '01 - Expression dan Statement',
    shortTitle: '01 Expression & Statement',
    icon: '📝',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/1-[Modul EXPRESSION DAN STATEMENT].js',
    sourceFiles: [
      { name: '1-[Modul EXPRESSION DAN STATEMENT].js', path: './Belajar Dasar Pemrograman JavaScript/1-[Modul EXPRESSION DAN STATEMENT].js', language: 'javascript' }
    ],
    description: `
      <h3>📝 Expression vs Statement</h3>
      <p><strong>Expression</strong> adalah potongan kode yang menghasilkan nilai (misal: <code>5 + 5</code>, <code>myVar</code>). <strong>Statement</strong> adalah instruksi lengkap yang melakukan suatu tindakan (misal: deklarasi variabel, percabangan <code>if</code>, perulangan <code>for</code>).</p>
    `,
    keyPoints: [
      'Expression selalu dievaluasi menjadi sebuah nilai',
      'Statement adalah satu baris atau blok eksekusi yang diakhiri semicolon',
      'Contoh: let x = (5 + 10); // (5 + 10) adalah expression, keseluruhan baris adalah statement'
    ]
  },
  {
    id: 'js-02-comment',
    classId: 'js-dasar',
    category: '01. Sintaks & Dasar',
    title: '02 - Comment / Komentar Kode',
    shortTitle: '02 Comment',
    icon: '💬',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/2-[Modul COMMENT].js',
    sourceFiles: [
      { name: '2-[Modul COMMENT].js', path: './Belajar Dasar Pemrograman JavaScript/2-[Modul COMMENT].js', language: 'javascript' }
    ],
    description: `
      <h3>💬 Single-line & Multi-line Comment</h3>
      <p>Komentar digunakan untuk memberikan dokumentasi, penjelasan kode, atau menonaktifkan kode sementara saat debugging tanpa dieksekusi oleh mesin JavaScript.</p>
    `,
    keyPoints: [
      'Single line: // Komentar satu baris',
      'Multi line: /* Komentar banyak baris */',
      'Komentar yang baik menjelaskan alasan (why), bukan hanya apa (what)'
    ]
  },
  {
    id: 'js-03-variabel',
    classId: 'js-dasar',
    category: '01. Sintaks & Dasar',
    title: '03 - Variabel (let, const, var)',
    shortTitle: '03 Variabel',
    icon: '📦',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/3-[Modul VARIABEL].js',
    sourceFiles: [
      { name: '3-[Modul VARIABEL].js', path: './Belajar Dasar Pemrograman JavaScript/3-[Modul VARIABEL].js', language: 'javascript' }
    ],
    description: `
      <h3>📦 Deklarasi Variabel Modern</h3>
      <p>Memahami perbedaan <code>let</code> (bisa diubah, block scoped), <code>const</code> (tidak bisa di-reassign, block scoped), dan <code>var</code> (legacy, function scoped, sebaiknya dihindari).</p>
    `,
    keyPoints: [
      'Gunakan const secara default untuk menjaga immutabilitas referensi',
      'Gunakan let jika nilai variabel memang perlu diubah/di-reassign',
      'Hindari var karena sifat hoisting dan function-scope yang rentan bug'
    ]
  },
  {
    id: 'js-04-tipe-data',
    classId: 'js-dasar',
    category: '01. Sintaks & Dasar',
    title: '04 - Tipe Data Primitif & Kompleks',
    shortTitle: '04 Tipe Data',
    icon: '🔢',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/4-[Modul TIPE DATA].js',
    sourceFiles: [
      { name: '4-[Modul TIPE DATA].js', path: './Belajar Dasar Pemrograman JavaScript/4-[Modul TIPE DATA].js', language: 'javascript' }
    ],
    description: `
      <h3>🔢 7 Tipe Data Primitif di JavaScript</h3>
      <p>JavaScript memiliki tipe data primitif: <code>String</code>, <code>Number</code>, <code>BigInt</code>, <code>Boolean</code>, <code>Null</code>, <code>Undefined</code>, dan <code>Symbol</code>, serta tipe data kompleks <code>Object</code>.</p>
    `,
    keyPoints: [
      'String: teks dalam kutip ("...", \'...\', `...`)',
      'Number: bilangan bulat maupun desimal (termasuk NaN dan Infinity)',
      'Boolean: true atau false',
      'Null vs Undefined: null adalah nilai kosong yang disengaja, undefined belum didefinisikan'
    ]
  },
  {
    id: 'js-05-konversi-tipe',
    classId: 'js-dasar',
    category: '01. Sintaks & Dasar',
    title: '05 - Mengubah Nilai Antar Tipe Data (Type Conversion)',
    shortTitle: '05 Konversi Tipe Data',
    icon: '🔄',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/5-[Modul MENGUBAH NILAI ANTAR TIPE DATA].js',
    sourceFiles: [
      { name: '5-[Modul MENGUBAH NILAI ANTAR TIPE DATA].js', path: './Belajar Dasar Pemrograman JavaScript/5-[Modul MENGUBAH NILAI ANTAR TIPE DATA].js', language: 'javascript' }
    ],
    description: `
      <h3>🔄 Konversi Eksplisit & Implisit</h3>
      <p>Mengubah tipe data dengan fungsi bawaan: <code>String(val)</code>, <code>Number(val)</code>, <code>parseInt()</code>, <code>parseFloat()</code>, dan <code>Boolean(val)</code> (falsy vs truthy values).</p>
    `,
    keyPoints: [
      'Explicit: Number("123") -> 123, String(100) -> "100"',
      'Falsy values: false, 0, -0, "", null, undefined, NaN',
      'Hindari type coercion implisit tak terduga dengan operator ==='
    ]
  },
  {
    id: 'js-06-operator',
    classId: 'js-dasar',
    category: '01. Sintaks & Dasar',
    title: '06 - Operator Aritmatika, Logika & Komparasi',
    shortTitle: '06 Operator',
    icon: '➕',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/6-[Modul OPERATOR].js',
    sourceFiles: [
      { name: '6-[Modul OPERATOR].js', path: './Belajar Dasar Pemrograman JavaScript/6-[Modul OPERATOR].js', language: 'javascript' }
    ],
    description: `
      <h3>➕ Operator JavaScript Lengkap</h3>
      <p>Meliputi operator aritmatika (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>, <code>**</code>), assignment, komparasi (<code>===</code>, <code>!==</code>, <code>&gt;</code>, <code>&lt;</code>), logika (<code>&&</code>, <code>||</code>, <code>!</code>), dan ternary (<code>condition ? a : b</code>).</p>
    `,
    keyPoints: [
      'Gunakan strict equality (===) bukan loose equality (==)',
      'Short-circuit evaluation pada && dan ||',
      'Nullish coalescing operator (??) untuk fallback nilai null/undefined'
    ]
  },
  {
    id: 'js-07-function',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '07 - Pengenalan Function',
    shortTitle: '07 Function',
    icon: '⚙️',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/7-[Modul FUNCTION].js',
    sourceFiles: [
      { name: '7-[Modul FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/7-[Modul FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>⚙️ Konsep Dasar Fungsi</h3>
      <p>Fungsi adalah blok kode yang dapat digunakan kembali (reusable) untuk menjalankan tugas tertentu dan menghindari duplikasi kode (DRY principle).</p>
    `,
    keyPoints: [
      'Membuat kode modular, bersih, dan mudah dirawat',
      'Dapat menerima input (parameter) dan menghasilkan output (return value)'
    ]
  },
  {
    id: 'js-08-function-declaration',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '08 - Deklarasi Function',
    shortTitle: '08 Deklarasi Function',
    icon: '📌',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/8-[Modul DEKLARASI FUNCTION].js',
    sourceFiles: [
      { name: '8-[Modul DEKLARASI FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/8-[Modul DEKLARASI FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>📌 Function Declaration & Hoisting</h3>
      <p>Mendeklarasikan fungsi dengan keyword <code>function namaFungsi(param) { ... }</code>. Fungsi ini mengalami hoisting sehingga bisa dipanggil sebelum baris deklarasinya.</p>
    `,
    keyPoints: [
      'Sintaks: function greet(name) { return `Halo, ${name}!`; }',
      'Hoisting memungkinkan pemanggilan fungsi di bagian atas file'
    ]
  },
  {
    id: 'js-09-function-call',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '09 - Pemanggilan Function',
    shortTitle: '09 Pemanggilan Function',
    icon: '📞',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/9-[Modul PEMANGGILAN FUNCTION].js',
    sourceFiles: [
      { name: '9-[Modul PEMANGGILAN FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/9-[Modul PEMANGGILAN FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>📞 Eksekusi & Call Stack</h3>
      <p>Memanggil fungsi dengan tanda kurung <code>namaFungsi()</code> dan memahami alur eksekusi program melalui Call Stack JavaScript.</p>
    `,
    keyPoints: [
      'Tanpa tanda kurung () merujuk pada referensi fungsi, dengan () mengeksekusinya',
      'Call stack mengatur urutan eksekusi fungsi LIFO (Last In First Out)'
    ]
  },
  {
    id: 'js-10-parameter-argument',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '10 - Parameter dan Argument',
    shortTitle: '10 Parameter & Argument',
    icon: '📥',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/10-[Modul PARAMETER DAN ARGUMENT].js',
    sourceFiles: [
      { name: '10-[Modul PARAMETER DAN ARGUMENT].js', path: './Belajar Dasar Pemrograman JavaScript/10-[Modul PARAMETER DAN ARGUMENT].js', language: 'javascript' }
    ],
    description: `
      <h3>📥 Parameter vs Argument & Default Values</h3>
      <p><strong>Parameter</strong> adalah variabel dalam definisi fungsi. <strong>Argument</strong> adalah nilai nyata yang dikirimkan saat fungsi dipanggil. Fitur ES6 <strong>Default Parameter</strong> memberikan nilai bawaan jika argumen undefined.</p>
    `,
    keyPoints: [
      'Default Parameter: function hitungLuas(panjang, lebar = 10)',
      'Pass by Value untuk primitif, Pass by Reference untuk objek/array'
    ]
  },
  {
    id: 'js-11-return-value',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '11 - Return Value pada Function',
    shortTitle: '11 Return Value',
    icon: '📤',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/11-[Modul RETURN VALUE].js',
    sourceFiles: [
      { name: '11-[Modul RETURN VALUE].js', path: './Belajar Dasar Pemrograman JavaScript/11-[Modul RETURN VALUE].js', language: 'javascript' }
    ],
    description: `
      <h3>📤 Keyword Return</h3>
      <p>Keyword <code>return</code> mengembalikan hasil perhitungan ke pemanggil fungsi dan seketika menghentikan eksekusi kode di dalam fungsi tersebut.</p>
    `,
    keyPoints: [
      'Fungsi tanpa return secara default mengembalikan nilai undefined',
      'Early return pattern untuk mengurangi nesting percabangan if yang dalam'
    ]
  },
  {
    id: 'js-12-function-expression',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '12 - Function Expression',
    shortTitle: '12 Function Expression',
    icon: '🧩',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/12-[Modul FUNCTION EXPRESSION].js',
    sourceFiles: [
      { name: '12-[Modul FUNCTION EXPRESSION].js', path: './Belajar Dasar Pemrograman JavaScript/12-[Modul FUNCTION EXPRESSION].js', language: 'javascript' }
    ],
    description: `
      <h3>🧩 First-Class Citizen</h3>
      <p>Menyimpan fungsi anonymous ke dalam variabel <code>const myFunc = function() { ... };</code>. Karena diperlakukan sebagai first-class citizen, fungsi bisa disimpan di variabel, array, atau dikirim sebagai argumen.</p>
    `,
    keyPoints: [
      'Function expression tidak di-hoist seperti function declaration',
      'Cocok untuk callback dan modularitas'
    ]
  },
  {
    id: 'js-13-arrow-function',
    classId: 'js-dasar',
    category: '02. Fungsi & Parameter',
    title: '13 - Arrow Function (ES6)',
    shortTitle: '13 Arrow Function',
    icon: '🏹',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/13-[Modul ARROW FUNCTION].js',
    sourceFiles: [
      { name: '13-[Modul ARROW FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/13-[Modul ARROW FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>🏹 Sintaks Ringkas & Lexical This</h3>
      <p>Sintaks fungsi modern menggunakan panah <code>=&gt;</code> dengan fitur *implicit return* untuk satu baris ekspresi dan pewarisan nilai <code>this</code> secara leksikal.</p>
    `,
    keyPoints: [
      'Sintaks satu baris: const kaliDua = n => n * 2;',
      'Tidak memiliki konteks "this", "arguments", atau "super" sendiri'
    ]
  },
  {
    id: 'js-14-object',
    classId: 'js-dasar',
    category: '03. Struktur Data',
    title: '14 - Object (Properti & Method)',
    shortTitle: '14 Object',
    icon: '🗂️',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/14-[Modul OBJECT].js',
    sourceFiles: [
      { name: '14-[Modul OBJECT].js', path: './Belajar Dasar Pemrograman JavaScript/14-[Modul OBJECT].js', language: 'javascript' }
    ],
    description: `
      <h3>🗂️ Pasangan Key-Value</h3>
      <p>Struktur data utama untuk menyimpan data terstruktur dalam pasangan properti dan fungsi (method). Mengakses via Dot notation (<code>user.name</code>) atau Bracket notation (<code>user['name']</code>).</p>
    `,
    keyPoints: [
      'Destructuring object: const { name, age } = user;',
      'Menghapus properti: delete user.age',
      'Optional chaining: user?.address?.city'
    ]
  },
  {
    id: 'js-15-array',
    classId: 'js-dasar',
    category: '03. Struktur Data',
    title: '15 - Array & Method Bawaan (push, pop, filter, map, reduce)',
    shortTitle: '15 Array',
    icon: '📚',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/15-[Modul ARRAY].js',
    sourceFiles: [
      { name: '15-[Modul ARRAY].js', path: './Belajar Dasar Pemrograman JavaScript/15-[Modul ARRAY].js', language: 'javascript' }
    ],
    description: `
      <h3>📚 Manipulasi Array Modern</h3>
      <p>Struktur data berurutan dengan zero-based indexing. Menguasai method manipulasi: <code>push</code>, <code>pop</code>, <code>shift</code>, <code>unshift</code>, <code>splice</code>, <code>slice</code>, <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>find</code>, dan <code>some/every</code>.</p>
    `,
    keyPoints: [
      'Mutating vs Non-mutating methods',
      'Transformasi data deklaratif dengan .map() dan .filter()',
      'Destructuring array: const [first, second] = items;'
    ]
  },
  {
    id: 'js-16-spread-operator',
    classId: 'js-dasar',
    category: '03. Struktur Data',
    title: '16 - Spread Operator (...)',
    shortTitle: '16 Spread Operator',
    icon: '✨',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/16-[Modul SPREAD OPERATOR].js',
    sourceFiles: [
      { name: '16-[Modul SPREAD OPERATOR].js', path: './Belajar Dasar Pemrograman JavaScript/16-[Modul SPREAD OPERATOR].js', language: 'javascript' }
    ],
    description: `
      <h3>✨ Melebarkan Elemen & Immutabilitas</h3>
      <p>Menggunakan sintaks titik tiga (<code>...</code>) untuk menyalin atau menggabungkan array dan object tanpa memutasi data asli (shallow copy).</p>
    `,
    keyPoints: [
      'Gabung array: const all = [...arr1, ...arr2];',
      'Kloning object & update properti: const updated = { ...user, active: true };'
    ]
  },
  {
    id: 'js-17-rest-operator',
    classId: 'js-dasar',
    category: '03. Struktur Data',
    title: '17 - Rest Parameter & Destructuring',
    shortTitle: '17 Rest Operator',
    icon: '🎁',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/17-[Modul REST OPERATOR & PARAMETER].js',
    sourceFiles: [
      { name: '17-[Modul REST OPERATOR & PARAMETER].js', path: './Belajar Dasar Pemrograman JavaScript/17-[Modul REST OPERATOR & PARAMETER].js', language: 'javascript' }
    ],
    description: `
      <h3>🎁 Mengumpulkan Argumen Tak Terbatas</h3>
      <p>Mengumpulkan sisa argumen menjadi sebuah array utuh dalam fungsi (<code>function sum(...numbers)</code>) atau dalam pemisahan destructuring.</p>
    `,
    keyPoints: [
      'Rest parameter harus selalu diletakkan di urutan paling akhir',
      'Menggantikan objek lawas "arguments" dengan array asli yang fleksibel'
    ]
  },
  {
    id: 'js-18-map',
    classId: 'js-dasar',
    category: '03. Struktur Data',
    title: '18 - Map (Key-Value dengan Tipe Apapun)',
    shortTitle: '18 Map',
    icon: '🗺️',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/18-[Modul MAP].js',
    sourceFiles: [
      { name: '18-[Modul MAP].js', path: './Belajar Dasar Pemrograman JavaScript/18-[Modul MAP].js', language: 'javascript' }
    ],
    description: `
      <h3>🗺️ Map vs Object</h3>
      <p>Struktur data koleksi key-value di mana key dapat berupa tipe data apapun (bukan hanya string), menjaga urutan penyisipan, dan memiliki method <code>set()</code>, <code>get()</code>, <code>has()</code>, <code>delete()</code>, serta properti <code>size</code>.</p>
    `,
    keyPoints: [
      'Cocok ketika key sering ditambah/dihapus secara dinamis',
      'Key bisa berupa object atau fungsi'
    ]
  },
  {
    id: 'js-19-set',
    classId: 'js-dasar',
    category: '03. Struktur Data',
    title: '19 - Set (Kumpulan Nilai Unik)',
    shortTitle: '19 Set',
    icon: '💎',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/19-[Modul SET].js',
    sourceFiles: [
      { name: '19-[Modul SET].js', path: './Belajar Dasar Pemrograman JavaScript/19-[Modul SET].js', language: 'javascript' }
    ],
    description: `
      <h3>💎 Nilai Unik Tanpa Duplikasi</h3>
      <p>Struktur data yang hanya menyimpan nilai unik. Jika menambahkan nilai yang sudah ada, nilai tersebut otomatis diabaikan. Sangat efektif untuk membuang duplikat dari array (<code>[...new Set(array)]</code>).</p>
    `,
    keyPoints: [
      'Method: add(), has(), delete(), clear()',
      'O(1) lookup efficiency untuk pengecekan keberadaan elemen'
    ]
  },
  {
    id: 'js-20-conditional',
    classId: 'js-dasar',
    category: '04. Kontrol Alur (Flow Control)',
    title: '20 - Conditional (if, else if, else, switch)',
    shortTitle: '20 Conditional',
    icon: '🔀',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/20-[Modul CONDITIONAL].js',
    sourceFiles: [
      { name: '20-[Modul CONDITIONAL].js', path: './Belajar Dasar Pemrograman JavaScript/20-[Modul CONDITIONAL].js', language: 'javascript' }
    ],
    description: `
      <h3>🔀 Percabangan Kondisi</h3>
      <p>Mengarahkan jalannya program berdasarkan evaluasi kondisi boolean dengan <code>if...else</code>, <code>switch...case</code>, dan ternary operator.</p>
    `,
    keyPoints: [
      'Switch case cocok untuk evaluasi banyak nilai diskrit dari satu variabel',
      'Gunakan break pada switch untuk menghindari fall-through'
    ]
  },
  {
    id: 'js-21-looping',
    classId: 'js-dasar',
    category: '04. Kontrol Alur (Flow Control)',
    title: '21 - Looping (for, while, do-while, for..of, for..in)',
    shortTitle: '21 Looping',
    icon: '🔁',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/21-[Modul LOOPING].js',
    sourceFiles: [
      { name: '21-[Modul LOOPING].js', path: './Belajar Dasar Pemrograman JavaScript/21-[Modul LOOPING].js', language: 'javascript' }
    ],
    description: `
      <h3>🔁 Perulangan Program</h3>
      <p>Mengeksekusi blok kode berulang kali sampai kondisi berhenti tercapai. Memahami perbedaan <code>for..of</code> (iterasi nilai array/string) dan <code>for..in</code> (iterasi properti key object).</p>
    `,
    keyPoints: [
      'Keyword break untuk keluar loop, continue untuk melewati satu iterasi',
      'Gunakan for..of untuk struktur iterable'
    ]
  },
  {
    id: 'js-22-error-handling',
    classId: 'js-dasar',
    category: '04. Kontrol Alur (Flow Control)',
    title: '22 - Error Handling (try, catch, finally, throw)',
    shortTitle: '22 Error Handling',
    icon: '🛡️',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/22-[Modul ERROR HANDLING].js',
    sourceFiles: [
      { name: '22-[Modul ERROR HANDLING].js', path: './Belajar Dasar Pemrograman JavaScript/22-[Modul ERROR HANDLING].js', language: 'javascript' }
    ],
    description: `
      <h3>🛡️ Penanganan Eksepsi / Error</h3>
      <p>Mencegah aplikasi crash saat terjadi error tidak terduga dengan blok <code>try...catch...finally</code> serta melempar error kustom dengan <code>throw new Error("Pesan")</code>.</p>
    `,
    keyPoints: [
      'Blok finally selalu dijalankan terlepas terjadi error atau tidak',
      'Objek Error memiliki properti name, message, dan stack trace'
    ]
  },
  {
    id: 'js-23-flow-control',
    classId: 'js-dasar',
    category: '04. Kontrol Alur (Flow Control)',
    title: '23 - Implementasi Kontrol Alur Nyata',
    shortTitle: '23 Flow Control Nyata',
    icon: '🚦',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/23-[Modul FLOW CONTROL IMPLEMENTASI].js',
    sourceFiles: [
      { name: '23-[Modul FLOW CONTROL IMPLEMENTASI].js', path: './Belajar Dasar Pemrograman JavaScript/23-[Modul FLOW CONTROL IMPLEMENTASI].js', language: 'javascript' }
    ],
    description: `
      <h3>🚦 Studi Kasus Kontrol Alur</h3>
      <p>Menggabungkan conditional, looping, dan error handling untuk menyelesaikan studi kasus validasi transaksi dan alur bisnis.</p>
    `,
    keyPoints: [
      'Pemisahan logika validasi dari eksekusi utama',
      'Defensive programming untuk mencegah state tidak valid'
    ]
  },
  {
    id: 'js-24-modules-export-import',
    classId: 'js-dasar',
    category: '05. Modularitas ES6',
    title: '24 - ES6 Module (Export & Import)',
    shortTitle: '24 Export & Import',
    icon: '📦',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/24-[Modul ES6 MODULE EXPORT & IMPORT].js',
    sourceFiles: [
      { name: '24-[Modul ES6 MODULE EXPORT & IMPORT].js', path: './Belajar Dasar Pemrograman JavaScript/24-[Modul ES6 MODULE EXPORT & IMPORT].js', language: 'javascript' }
    ],
    description: `
      <h3>📦 Pembagian Kode Modular</h3>
      <p>Memecah kode ke dalam berkas-berkas terpisah menggunakan standard ES Modules: <strong>Named Export/Import</strong> dan <strong>Default Export/Import</strong>.</p>
    `,
    keyPoints: [
      'Named export: export { funcA, funcB }; import { funcA } from "./module.js";',
      'Default export: export default MainClass; import MainClass from "./module.js";'
    ]
  },
  {
    id: 'js-25-oop-dasar',
    classId: 'js-dasar',
    category: '06. Object-Oriented Programming (OOP)',
    title: '25 - Paradigma Berbasis Objek (Class & Constructor)',
    shortTitle: '25 Class & Constructor',
    icon: '🏛️',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/25-[Modul PARADIGMA BERBASIS OBJEK].js',
    sourceFiles: [
      { name: '25-[Modul PARADIGMA BERBASIS OBJEK].js', path: './Belajar Dasar Pemrograman JavaScript/25-[Modul PARADIGMA BERBASIS OBJEK].js', language: 'javascript' }
    ],
    description: `
      <h3>🏛️ Cetak Biru Objek (Blueprint)</h3>
      <p>Mendefinisikan class ES6, method constructor untuk inisialisasi properti, dan instansiasi objek dengan keyword <code>new</code>.</p>
    `,
    keyPoints: [
      'Class adalah blueprint untuk membuat banyak instance objek',
      'Constructor dipanggil otomatis setiap kali keyword new digunakan'
    ]
  },
  {
    id: 'js-26-inheritance',
    classId: 'js-dasar',
    category: '06. Object-Oriented Programming (OOP)',
    title: '26 - Pewarisan / Inheritance (extends & super)',
    shortTitle: '26 Inheritance',
    icon: '🧬',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/26-[Modul INHERITANCE].js',
    sourceFiles: [
      { name: '26-[Modul INHERITANCE].js', path: './Belajar Dasar Pemrograman JavaScript/26-[Modul INHERITANCE].js', language: 'javascript' }
    ],
    description: `
      <h3>🧬 Hubungan Induk & Anak (Is-A)</h3>
      <p>Mewariskan properti dan method dari parent class ke child class menggunakan <code>extends</code> dan memanggil constructor induk dengan <code>super()</code>.</p>
    `,
    keyPoints: [
      'Menghindari duplikasi logika umum pada child class',
      'Super() wajib dipanggil sebelum mengakses "this" di constructor child class'
    ]
  },
  {
    id: 'js-27-encapsulation',
    classId: 'js-dasar',
    category: '06. Object-Oriented Programming (OOP)',
    title: '27 - Enkapsulasi & Private Field (#)',
    shortTitle: '27 Encapsulation',
    icon: '🔒',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/27-[Modul ENCAPSULATION].js',
    sourceFiles: [
      { name: '27-[Modul ENCAPSULATION].js', path: './Belajar Dasar Pemrograman JavaScript/27-[Modul ENCAPSULATION].js', language: 'javascript' }
    ],
    description: `
      <h3>🔒 Menyembunyikan Detail Internal</h3>
      <p>Melindungi data internal objek dari akses langsung luar menggunakan prefix tanda pagar (<code>#privateField</code>) serta menyediakan method <code>getter</code> dan <code>setter</code>.</p>
    `,
    keyPoints: [
      'Private identifier (#) menjamin data tidak bisa diubah sembarangan dari luar class',
      'Getter & Setter untuk validasi sebelum data dimodifikasi'
    ]
  },
  {
    id: 'js-28-polymorphism',
    classId: 'js-dasar',
    category: '06. Object-Oriented Programming (OOP)',
    title: '28 - Polimorfisme & Method Overriding',
    shortTitle: '28 Polymorphism',
    icon: '🎭',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/28-[Modul POLYMORPHISM].js',
    sourceFiles: [
      { name: '28-[Modul POLYMORPHISM].js', path: './Belajar Dasar Pemrograman JavaScript/28-[Modul POLYMORPHISM].js', language: 'javascript' }
    ],
    description: `
      <h3>🎭 Banyak Bentuk / Satu Antarmuka</h3>
      <p>Kemampuan child class untuk menimpa (override) implementasi method dari parent class sesuai kebutuhan spesifiknya tanpa mengubah nama method.</p>
    `,
    keyPoints: [
      'Memungkinkan interaksi yang seragam pada objek yang berbeda tipe',
      'Method overriding memberikan perilaku unik pada subclass'
    ]
  },
  {
    id: 'js-29-object-composition',
    classId: 'js-dasar',
    category: '06. Object-Oriented Programming (OOP)',
    title: '29 - Komposisi Objek (Composition over Inheritance)',
    shortTitle: '29 Object Composition',
    icon: '🧱',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/29-[Modul OBJECT COMPOSITION].js',
    sourceFiles: [
      { name: '29-[Modul OBJECT COMPOSITION].js', path: './Belajar Dasar Pemrograman JavaScript/29-[Modul OBJECT COMPOSITION].js', language: 'javascript' }
    ],
    description: `
      <h3>🧱 Merakit Objek dari Kemampuan (Has-A / Can-Do)</h3>
      <p>Merancang objek fleksibel dengan merakit fungsi-fungsi kemampuan kecil menggunakan <code>Object.assign()</code> daripada hierarki pewarisan yang kaku.</p>
    `,
    keyPoints: [
      'Prinsip Composition over Inheritance untuk menghindari monkey patching',
      'Membangun objek dinamis berdasarkan kapabilitas'
    ]
  },
  {
    id: 'js-30-fp-paradigm',
    classId: 'js-dasar',
    category: '07. Functional Programming (FP)',
    title: '30 - Paradigma Functional Programming',
    shortTitle: '30 FP Paradigm',
    icon: '🧮',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/30-[Modul PARADIGMA FUNCTIONAL PROGRAMMING].js',
    sourceFiles: [
      { name: '30-[Modul PARADIGMA FUNCTIONAL PROGRAMMING].js', path: './Belajar Dasar Pemrograman JavaScript/30-[Modul PARADIGMA FUNCTIONAL PROGRAMMING].js', language: 'javascript' }
    ],
    description: `
      <h3>🧮 Gaya Pemrograman Deklaratif</h3>
      <p>Menyusun program melalui komposisi fungsi murni matematis, menghindari state yang dapat berubah (mutable state), dan menghindari efek samping (side effects).</p>
    `,
    keyPoints: [
      'Pendekatan deklaratif: fokus pada "apa yang ingin dicapai" bukan "bagaimana langkahnya"',
      'Kode lebih mudah diuji, diprediksi, dan di-refactor'
    ]
  },
  {
    id: 'js-31-pure-function',
    classId: 'js-dasar',
    category: '07. Functional Programming (FP)',
    title: '31 - Pure Function (Fungsi Murni)',
    shortTitle: '31 Pure Function',
    icon: '🧼',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/31-[Modul PURE FUNCTION].js',
    sourceFiles: [
      { name: '31-[Modul PURE FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/31-[Modul PURE FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>🧼 Deterministik & Tanpa Side Effect</h3>
      <p>Fungsi yang jika diberikan input yang sama akan selalu menghasilkan output yang sama persis, tanpa memodifikasi variabel di luar scope-nya (seperti DOM, I/O, variabel global).</p>
    `,
    keyPoints: [
      'Menghilangkan bug tersembunyi akibat mutasi variabel global',
      'Sangat ideal untuk unit testing mandiri'
    ]
  },
  {
    id: 'js-32-immutability',
    classId: 'js-dasar',
    category: '07. Functional Programming (FP)',
    title: '32 - Immutabilitas (Data Tidak Berubah)',
    shortTitle: '32 Immutability',
    icon: '🧊',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/32-[Modul IMMUTABILITY].js',
    sourceFiles: [
      { name: '32-[Modul IMMUTABILITY].js', path: './Belajar Dasar Pemrograman JavaScript/32-[Modul IMMUTABILITY].js', language: 'javascript' }
    ],
    description: `
      <h3>🧊 Menghasilkan Data Baru Bukan Mengubah Asli</h3>
      <p>Konsep bahwa objek yang sudah dibuat tidak boleh diubah nilainya. Setiap modifikasi menghasilkan salinan baru dengan nilai baru menggunakan spread operator atau <code>Object.freeze()</code>.</p>
    `,
    keyPoints: [
      'Menjaga riwayat state yang stabil (predictable state)',
      'Gunakan .map, .filter, .concat daripada .push, .splice, .sort langsung'
    ]
  },
  {
    id: 'js-33-recursive',
    classId: 'js-dasar',
    category: '07. Functional Programming (FP)',
    title: '33 - Fungsi Rekursif (Recursive Function)',
    shortTitle: '33 Rekursif',
    icon: '🌀',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/33-[Modul RECURSIVE FUNCTION].js',
    sourceFiles: [
      { name: '33-[Modul RECURSIVE FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/33-[Modul RECURSIVE FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>🌀 Memanggil Diri Sendiri</h3>
      <p>Fungsi yang memanggil dirinya sendiri untuk memecahkan masalah besar menjadi sub-masalah yang lebih kecil, dilengkapi dengan <strong>Base Case</strong> agar tidak terjadi stack overflow.</p>
    `,
    keyPoints: [
      'Wajib memiliki base case untuk menghentikan perulangan',
      'Sangat ampuh untuk traversing struktur pohon (Tree/DOM) dan perhitungan faktorial'
    ]
  },
  {
    id: 'js-34-hof',
    classId: 'js-dasar',
    category: '07. Functional Programming (FP)',
    title: '34 - Higher-Order Function',
    shortTitle: '34 Higher-Order Function',
    icon: '🚀',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/34-[Modul HIGHER-ORDER FUNCTION].js',
    sourceFiles: [
      { name: '34-[Modul HIGHER-ORDER FUNCTION].js', path: './Belajar Dasar Pemrograman JavaScript/34-[Modul HIGHER-ORDER FUNCTION].js', language: 'javascript' }
    ],
    description: `
      <h3>🚀 Fungsi yang Menerima atau Mengembalikan Fungsi</h3>
      <p>Fungsi yang menerima fungsi lain sebagai argumen (callback) atau menghasilkan fungsi baru sebagai return value (closure & currying).</p>
    `,
    keyPoints: [
      'Contoh bawaan: Array.prototype.map, filter, reduce',
      'Mendukung abstraksi logika tingkat tinggi yang elegan'
    ]
  },
  {
    id: 'js-35-async-proses',
    classId: 'js-dasar',
    category: '08. Asynchronous JavaScript',
    title: '35 - Pengenalan Proses Asinkron (Event Loop)',
    shortTitle: '35 Asynchronous Proses',
    icon: '⏳',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/35-[Modul ASYNCHRONOUS PROSES].js',
    sourceFiles: [
      { name: '35-[Modul ASYNCHRONOUS PROSES].js', path: './Belajar Dasar Pemrograman JavaScript/35-[Modul ASYNCHRONOUS PROSES].js', language: 'javascript' }
    ],
    description: `
      <h3>⏳ Non-Blocking I/O & Event Loop</h3>
      <p>Memahami bagaimana single-threaded JavaScript dapat menjalankan operasi berat (fetch API, timer) tanpa membekukan browser berkat Event Loop, Callback Queue, dan Microtask Queue.</p>
    `,
    keyPoints: [
      'Synchronous berjalan berurutan memblokir antrean',
      'Asynchronous mendelegasikan tugas ke Web API dan berjalan di background'
    ]
  },
  {
    id: 'js-36-callback',
    classId: 'js-dasar',
    category: '08. Asynchronous JavaScript',
    title: '36 - Callback Pattern & Callback Hell',
    shortTitle: '36 Callback Pattern',
    icon: '📞',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/36-[Modul CALLBACK & ERROR HANDLING].js',
    sourceFiles: [
      { name: '36-[Modul CALLBACK & ERROR HANDLING].js', path: './Belajar Dasar Pemrograman JavaScript/36-[Modul CALLBACK & ERROR HANDLING].js', language: 'javascript' }
    ],
    description: `
      <h3>📞 Callback Asinkron & Error-First Pattern</h3>
      <p>Pola klasik penanganan proses asinkron dan masalah <em>Callback Hell</em> (piramida nested callback) yang sulit dibaca dan dirawat.</p>
    `,
    keyPoints: [
      'Pola error-first callback: callback(err, data)',
      'Kelemahan callback bertingkat dipecahkan oleh Promise di ES6'
    ]
  },
  {
    id: 'js-37-promise-dasar',
    classId: 'js-dasar',
    category: '08. Asynchronous JavaScript',
    title: '37 - Promise Dasar & Promise Chaining',
    shortTitle: '37 Promise Dasar',
    icon: '🤝',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/37-[Modul PROMISE DASAR & CHAINING].js',
    sourceFiles: [
      { name: '37-[Modul PROMISE DASAR & CHAINING].js', path: './Belajar Dasar Pemrograman JavaScript/37-[Modul PROMISE DASAR & CHAINING].js', language: 'javascript' }
    ],
    description: `
      <h3>🤝 3 State Promise: Pending, Fulfilled, Rejected</h3>
      <p>Objek Promise merepresentasikan nilai masa depan. Menggunakan method <code>.then()</code> untuk menangani sukses, <code>.catch()</code> untuk error, dan chaining berantai.</p>
    `,
    keyPoints: [
      'new Promise((resolve, reject) => { ... })',
      'Promise chaining membuat alur asinkron linear dan rapi'
    ]
  },
  {
    id: 'js-38-promise-concurrency',
    classId: 'js-dasar',
    category: '08. Asynchronous JavaScript',
    title: '38 - Promise Concurrency (Promise.all, allSettled, race, any)',
    shortTitle: '38 Promise Concurrency',
    icon: '⚡',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/38-[Modul PROMISE CONCURRENCY].js',
    sourceFiles: [
      { name: '38-[Modul PROMISE CONCURRENCY].js', path: './Belajar Dasar Pemrograman JavaScript/38-[Modul PROMISE CONCURRENCY].js', language: 'javascript' }
    ],
    description: `
      <h3>⚡ Menjalankan Banyak Promise Paralel</h3>
      <p>Memahami method concurrency bawaan: <code>Promise.all()</code> (semua harus sukses), <code>Promise.allSettled()</code> (tunggu semua selesai apapun hasilnya), <code>Promise.race()</code> (yang pertama selesai), dan <code>Promise.any()</code>.</p>
    `,
    keyPoints: [
      'Promise.all mempercepat request dengan eksekusi paralel',
      'Promise.allSettled mencegah kegagalan satu request menggagalkan yang lain'
    ]
  },
  {
    id: 'js-39-async-await',
    classId: 'js-dasar',
    category: '08. Asynchronous JavaScript',
    title: '39 - Async / Await Sintaks Modern',
    shortTitle: '39 Async Await',
    icon: '🪄',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/39-[Modul ASYNC AWAIT].js',
    sourceFiles: [
      { name: '39-[Modul ASYNC AWAIT].js', path: './Belajar Dasar Pemrograman JavaScript/39-[Modul ASYNC AWAIT].js', language: 'javascript' }
    ],
    description: `
      <h3>🪄 Menulis Kode Asinkron seperti Sinkron</h3>
      <p>Syntactic sugar di atas Promise yang membuat kode asinkron tampak seperti kode sekuensial menggunakan keyword <code>async</code> dan <code>await</code> bersama blok <code>try...catch</code>.</p>
    `,
    keyPoints: [
      'Keyword await hanya bisa digunakan di dalam fungsi yang diawali async',
      'Error handling natural menggunakan standar try...catch'
    ]
  },
  {
    id: 'js-40-style-guide',
    classId: 'js-dasar',
    category: '09. Standar & Kualitas Kode',
    title: '40 - Style Guide & Code Convention',
    shortTitle: '40 Code Style Guide',
    icon: '📏',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/40-[Modul STYLE GUIDE & CODE CONVENTION].js',
    sourceFiles: [
      { name: '40-[Modul STYLE GUIDE & CODE CONVENTION].js', path: './Belajar Dasar Pemrograman JavaScript/40-[Modul STYLE GUIDE & CODE CONVENTION].js', language: 'javascript' }
    ],
    description: `
      <h3>📏 Standar Penulisan Kode Standar Industri</h3>
      <p>Panduan penamaan variabel (camelCase), class (PascalCase), konstanta (UPPER_SNAKE_CASE), indentasi, linter (ESLint), dan formatter (Prettier).</p>
    `,
    keyPoints: [
      'Konsistensi penulisan meningkatkan keterbacaan tim',
      'Gunakan linter otomatis untuk mendeteksi potensi bug sejak dini'
    ]
  },
  {
    id: 'js-41-jsdoc',
    classId: 'js-dasar',
    category: '09. Standar & Kualitas Kode',
    title: '41 - JSDoc Dokumentasi Kode',
    shortTitle: '41 JSDoc Dokumentasi',
    icon: '📑',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/41-[Modul JSDOC DOKUMENTASI KODE].js',
    sourceFiles: [
      { name: '41-[Modul JSDOC DOKUMENTASI KODE].js', path: './Belajar Dasar Pemrograman JavaScript/41-[Modul JSDOC DOKUMENTASI KODE].js', language: 'javascript' }
    ],
    description: `
      <h3>📑 Dokumentasi Standar Industri dengan JSDoc</h3>
      <p>Memberikan anotasi tipe data parameter dan return value menggunakan komentar JSDoc (<code>@param</code>, <code>@returns</code>, <code>@typedef</code>) untuk auto-completion IDE yang akurat.</p>
    `,
    keyPoints: [
      'Memudahkan kolaborasi dan integrasi IDE TypeScript / VS Code',
      'Dapat di-generate menjadi file HTML dokumentasi otomatis'
    ]
  },
  {
    id: 'js-42-type-system',
    classId: 'js-dasar',
    category: '09. Standar & Kualitas Kode',
    title: '42 - Type System & Static Typing',
    shortTitle: '42 Type System',
    icon: '🏷️',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/42-[Modul TYPE SYSTEM & STATIC TYPING].js',
    sourceFiles: [
      { name: '42-[Modul TYPE SYSTEM & STATIC TYPING].js', path: './Belajar Dasar Pemrograman JavaScript/42-[Modul TYPE SYSTEM & STATIC TYPING].js', language: 'javascript' }
    ],
    description: `
      <h3>🏷️ Dinamis vs Statis Typing</h3>
      <p>Memahami sifat dynamic typing JavaScript serta transisi ke static typing menggunakan TypeScript untuk aplikasi skala besar.</p>
    `,
    keyPoints: [
      'Dynamic typing fleksibel namun rawan runtime error tipe data',
      'Static typing mendeteksi kesalahan tipe pada fase kompilasi'
    ]
  },
  {
    id: 'js-43-node-test-runner',
    classId: 'js-dasar',
    category: '10. Automated Testing',
    title: '43 - Automated Testing dengan Node.js Test Runner',
    shortTitle: '43 Node Test Runner',
    icon: '🧪',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js',
    sourceFiles: [
      { name: '43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js', path: './Belajar Dasar Pemrograman JavaScript/43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js', language: 'javascript' }
    ],
    description: `
      <h3>🧪 Unit Testing Bawaan Node.js (node:test)</h3>
      <p>Menulis unit test otomatis menggunakan modul bawaan <code>node:test</code> dan modul assertion <code>node:assert</code> (<code>strictEqual</code>, <code>deepStrictEqual</code>, <code>throws</code>).</p>
    `,
    keyPoints: [
      'Menjalankan test tanpa memerlukan library pihak ketiga',
      'Memastikan kode tetap berfungsi benar setelah refactoring'
    ]
  },
  {
    id: 'js-44-bun-test',
    classId: 'js-dasar',
    category: '10. Automated Testing',
    title: '44 - Automated Testing Modern dengan Bun Test',
    shortTitle: '44 Bun Test',
    icon: '🥟',
    badge: 'Modul JS',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js',
    sourceFiles: [
      { name: '44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js', path: './Belajar Dasar Pemrograman JavaScript/44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js', language: 'javascript' },
      { name: '44-[Modul AUTOMATED TESTING DENGAN BUN TEST].test.js', path: './Belajar Dasar Pemrograman JavaScript/44-[Modul AUTOMATED TESTING DENGAN BUN TEST].test.js', language: 'javascript' }
    ],
    description: `
      <h3>🥟 Testing Berkecepatan Tinggi dengan Bun</h3>
      <p>Menggunakan runtime modern Bun dengan sintaks assertion Jest-compatible (<code>describe</code>, <code>test</code>, <code>expect</code>, <code>toBe</code>, <code>toEqual</code>).</p>
    `,
    keyPoints: [
      'Kompatibel penuh dengan sintaks standar Jest/Vitest',
      'Eksekusi unit test instan dan efisien'
    ]
  },
  {
    id: 'js-final-assessment',
    classId: 'js-dasar',
    category: 'Proyek Akhir & Submission',
    title: '🏆 Submission: Evaluasi Akhir Pemrograman JavaScript (7 Sub-Tugas)',
    shortTitle: 'Final Assessment JS',
    icon: '⭐',
    badge: 'Submission Bintang 5',
    type: 'js',
    filePath: './Belajar Dasar Pemrograman JavaScript/final-assessment/01-writing-comments/index.js',
    sourceFiles: [
      { name: '01-writing-comments/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/01-writing-comments/index.js', language: 'javascript' },
      { name: '02-code-style/index.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/02-code-style/index.js', language: 'javascript' },
      { name: '03-writing-test/index.test.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/03-writing-test/index.test.js', language: 'javascript' },
      { name: 'optional-04-oop/main.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-04-oop/main.js', language: 'javascript' },
      { name: 'optional-04-oop/Item.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-04-oop/Item.js', language: 'javascript' },
      { name: 'optional-04-oop/Inventory.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-04-oop/Inventory.js', language: 'javascript' },
      { name: 'optional-05-recursive/main.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-05-recursive/main.js', language: 'javascript' },
      { name: 'optional-05-recursive/factorial.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-05-recursive/factorial.js', language: 'javascript' },
      { name: 'optional-05-recursive/fibonacci.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-05-recursive/fibonacci.js', language: 'javascript' },
      { name: 'optional-06-full-coverage-testing/index.test.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-06-full-coverage-testing/index.test.js', language: 'javascript' },
      { name: 'optional-07-real-world-scenario/main.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-07-real-world-scenario/main.js', language: 'javascript' },
      { name: 'optional-07-real-world-scenario/orders.js', path: './Belajar Dasar Pemrograman JavaScript/final-assessment/optional-07-real-world-scenario/orders.js', language: 'javascript' }
    ],
    description: `
      <h3>⭐ Submission Evaluasi Pembelajaran Akhir JavaScript</h3>
      <p>Kumpulan 7 sub-tugas proyek evaluasi akhir kelulusan kelas Belajar Dasar Pemrograman JavaScript, mencakup penulisan komentar dokumentasi, formatting kode standar linter, pembuatan unit test, perancangan OOP, algoritma rekursif, dan penyelesaian studi kasus dunia nyata.</p>
    `,
    keyPoints: [
      'Sub-tugas 01: Writing comments dan dokumentasi',
      'Sub-tugas 02: Code style dan standard naming convention',
      'Sub-tugas 03: Writing unit tests dengan Node assert',
      'Sub-tugas 04: OOP Class dan Inheritance',
      'Sub-tugas 05: Algoritma fungsi rekursif',
      'Sub-tugas 06: Full coverage testing',
      'Sub-tugas 07: Real world scenario implementation'
    ],
    evaluationCriteria: [
      'Seluruh kode lolos uji automated test tanpa error',
      'Mengikuti konvensi penamaan dan code formatting yang konsisten',
      'Mengimplementasikan seluruh kriteria wajib dan opsional bintang 5'
    ]
  },

  // ============================================================================
  // KELAS 3: BELAJAR MEMBUAT FRONT-END WEB UNTUK PEMULA (26 MODUL + SUBMISSION)
  // ============================================================================
  {
    id: 'fe-01-bom',
    classId: 'fe-pemula',
    category: '01. Browser Object Model (BOM)',
    title: '01 - Cara Memanggil Anggota BOM',
    shortTitle: '01 Anggota BOM',
    icon: '🌐',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/01-[Modul CARA MEMANGGIL ANGGOTA BOM]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/01-[Modul CARA MEMANGGIL ANGGOTA BOM]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/01-[Modul CARA MEMANGGIL ANGGOTA BOM]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🌐 Browser Object Model (BOM)</h3>
      <p>Objek <code>window</code> adalah objek global browser yang membawahi seluruh antarmuka web, termasuk <code>screen</code>, <code>location</code>, <code>history</code>, dan <code>navigator</code>.</p>
    `,
    keyPoints: [
      'Objek window bersifat implisit (window.alert() sama dengan alert())',
      'Mengetahui ukuran viewport browser via window.innerWidth dan innerHeight'
    ]
  },
  {
    id: 'fe-02-alert',
    classId: 'fe-pemula',
    category: '01. Browser Object Model (BOM)',
    title: '02 - Method Alert Dialog',
    shortTitle: '02 Method Alert',
    icon: '⚠️',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/02-[Modul METHOD ALERT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/02-[Modul METHOD ALERT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/02-[Modul METHOD ALERT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>⚠️ Dialog Alert</h3>
      <p>Menampilkan kotak dialog modal sederhana untuk memberikan notifikasi langsung kepada pengguna.</p>
    `,
    keyPoints: [
      'Sintaks: window.alert("Pesan");',
      'Memblokir interaksi thread browser hingga pengguna menekan OK'
    ]
  },
  {
    id: 'fe-03-prompt',
    classId: 'fe-pemula',
    category: '01. Browser Object Model (BOM)',
    title: '03 - Method Prompt & Confirm',
    shortTitle: '03 Method Prompt',
    icon: '💬',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/03-[Modul METHOD PROMPT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/03-[Modul METHOD PROMPT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/03-[Modul METHOD PROMPT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>💬 Input Pengguna dengan Prompt</h3>
      <p>Menerima teks langsung dari pengguna via <code>prompt()</code> atau konfirmasi ya/tidak via <code>confirm()</code>.</p>
    `,
    keyPoints: [
      'Prompt mengembalikan string jika diisi atau null jika dibatalkan',
      'Confirm mengembalikan nilai boolean true atau false'
    ]
  },
  {
    id: 'fe-04-console',
    classId: 'fe-pemula',
    category: '01. Browser Object Model (BOM)',
    title: '04 - Console Browser & Debugging',
    shortTitle: '04 Console Browser',
    icon: '🖥️',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/04-[Modul CONSOLE BROWSER]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/04-[Modul CONSOLE BROWSER]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/04-[Modul CONSOLE BROWSER]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🖥️ DevTools Console</h3>
      <p>Memanfaatkan variasi console logging: <code>console.log()</code>, <code>console.warn()</code>, <code>console.error()</code>, <code>console.table()</code>, dan <code>console.time()</code> untuk mengukur performa.</p>
    `,
    keyPoints: [
      'Console table untuk visualisasi array/objek dalam tabel',
      'Console time & timeEnd untuk benchmark waktu eksekusi'
    ]
  },
  {
    id: 'fe-05-dom-tree',
    classId: 'fe-pemula',
    category: '02. Document Object Model (DOM)',
    title: '05 - DOM Tree & Query Elemen',
    shortTitle: '05 DOM Tree & Query',
    icon: '🌲',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/05-[Modul DOM TREE & QUERY ELEMEN]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/05-[Modul DOM TREE & QUERY ELEMEN]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/05-[Modul DOM TREE & QUERY ELEMEN]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🌲 Seleksi Elemen pada Pohon DOM</h3>
      <p>Mengakses elemen HTML menggunakan method seleksi modern: <code>querySelector()</code>, <code>querySelectorAll()</code>, <code>getElementById()</code>, dan <code>getElementsByClassName()</code>.</p>
    `,
    keyPoints: [
      'querySelector mengembalikan elemen pertama yang cocok dengan CSS selector',
      'querySelectorAll mengembalikan NodeList yang bisa diiterasi dengan forEach'
    ]
  },
  {
    id: 'fe-06-create-element',
    classId: 'fe-pemula',
    category: '02. Document Object Model (DOM)',
    title: '06 - Membuat Elemen HTML Baru',
    shortTitle: '06 Membuat Elemen HTML',
    icon: '➕',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/06-[Modul MEMBUAT ELEMEN HTML]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/06-[Modul MEMBUAT ELEMEN HTML]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/06-[Modul MEMBUAT ELEMEN HTML]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>➕ document.createElement()</h3>
      <p>Membuat node elemen HTML baru secara dinamis di memori sebelum disisipkan ke dalam dokumen web.</p>
    `,
    keyPoints: [
      'Sintaks: const newEl = document.createElement("div");',
      'Mengatur atribut via setAttribute() atau properti elemen'
    ]
  },
  {
    id: 'fe-07-append-element',
    classId: 'fe-pemula',
    category: '02. Document Object Model (DOM)',
    title: '07 - Menambahkan Elemen ke DOM',
    shortTitle: '07 Menambahkan Elemen',
    icon: '📌',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/07-[Modul MENAMBAHKAN ELEMEN KE DOM]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/07-[Modul MENAMBAHKAN ELEMEN KE DOM]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/07-[Modul MENAMBAHKAN ELEMEN KE DOM]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>📌 appendChild & append</h3>
      <p>Menyisipkan elemen anak ke dalam elemen induk di DOM menggunakan <code>parent.appendChild()</code>, <code>parent.append()</code>, atau <code>parent.insertBefore()</code>.</p>
    `,
    keyPoints: [
      'append() dapat menerima multiple node dan teks sekaligus',
      'Elemen langsung tampil di layar browser setelah disisipkan ke DOM yang terpasang'
    ]
  },
  {
    id: 'fe-08-modify-content',
    classId: 'fe-pemula',
    category: '02. Document Object Model (DOM)',
    title: '08 - Mengubah Konten & Teks HTML',
    shortTitle: '08 Mengubah Konten',
    icon: '✏️',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/08-[Modul MENGUBAH KONTEN HTML]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/08-[Modul MENGUBAH KONTEN HTML]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/08-[Modul MENGUBAH KONTEN HTML]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>✏️ innerText, textContent, innerHTML</h3>
      <p>Memahami perbedaan <code>innerText</code> (teks tampak sesuai CSS), <code>textContent</code> (semua teks termasuk tersembunyi, lebih cepat), dan <code>innerHTML</code> (merender tag HTML, waspada XSS!).</p>
    `,
    keyPoints: [
      'Gunakan textContent untuk teks biasa demi keamanan XSS',
      'Gunakan innerHTML hanya untuk parsing template HTML terpercaya'
    ]
  },
  {
    id: 'fe-09-event-intro',
    classId: 'fe-pemula',
    category: '03. Event & Handler',
    title: '09 - Pengenalan Event & Inline Handler',
    shortTitle: '09 Pengenalan Event',
    icon: '⚡',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/09-[Modul PENGENALAN EVENT & INLINE HANDLER]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/09-[Modul PENGENALAN EVENT & INLINE HANDLER]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/09-[Modul PENGENALAN EVENT & INLINE HANDLER]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>⚡ Apa itu Event?</h3>
      <p>Aksi atau kejadian yang terjadi pada sistem browser yang dapat dideteksi dan direspons oleh kode JavaScript (klik tombol, ketik input, load halaman).</p>
    `,
    keyPoints: [
      'Inline handler: <button onclick="doSomething()">',
      'Pemisahan HTML dan JavaScript modern'
    ]
  },
  {
    id: 'fe-10-onload-event',
    classId: 'fe-pemula',
    category: '03. Event & Handler',
    title: '10 - Event Handler Onload & DOMContentLoaded',
    shortTitle: '10 Event Onload',
    icon: '⏳',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/10-[Modul EVENT HANDLER ONLOAD]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/10-[Modul EVENT HANDLER ONLOAD]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/10-[Modul EVENT HANDLER ONLOAD]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>⏳ Memastikan Dokumen Selesai Dimuat</h3>
      <p>Memastikan seluruh elemen DOM sudah siap sebelum dieksekusi menggunakan event <code>DOMContentLoaded</code> atau <code>window.onload</code>.</p>
    `,
    keyPoints: [
      'DOMContentLoaded aktif begitu HTML selesai di-parse tanpa menunggu gambar/CSS selesai diunduh',
      'window.onload menunggu seluruh aset (gambar, font, stylesheet) selesai'
    ]
  },
  {
    id: 'fe-11-onclick-property',
    classId: 'fe-pemula',
    category: '03. Event & Handler',
    title: '11 - Event Handler Property Onclick',
    shortTitle: '11 Property Onclick',
    icon: '🖱️',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/11-[Modul EVENT HANDLER PROPERTY ONCLICK]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/11-[Modul EVENT HANDLER PROPERTY ONCLICK]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/11-[Modul EVENT HANDLER PROPERTY ONCLICK]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🖱️ element.onclick = function()</h3>
      <p>Memasang event handler via properti elemen JavaScript. Kelemahannya hanya bisa menampung 1 fungsi handler saja (fungsi sebelumnya akan tertimpa).</p>
    `,
    keyPoints: [
      'button.onclick = () => console.log("Diklik");',
      'Hanya satu handler yang aktif per elemen'
    ]
  },
  {
    id: 'fe-12-addeventlistener',
    classId: 'fe-pemula',
    category: '03. Event & Handler',
    title: '12 - Event Handler addEventListener',
    shortTitle: '12 addEventListener',
    icon: '🎯',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/12-[Modul EVENT HANDLER ADDEVENTLISTENER]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/12-[Modul EVENT HANDLER ADDEVENTLISTENER]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/12-[Modul EVENT HANDLER ADDEVENTLISTENER]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🎯 Standar Modern Event Listener</h3>
      <p>Metode standar industri <code>element.addEventListener('click', handler)</code> yang memungkinkan banyak listener sekaligus pada satu elemen dan mendukung opsi capture/passive.</p>
    `,
    keyPoints: [
      'Bisa memasang lebih dari satu listener pada satu jenis event',
      'Dapat dilepas menggunakan element.removeEventListener()'
    ]
  },
  {
    id: 'fe-13-custom-event',
    classId: 'fe-pemula',
    category: '03. Event & Handler',
    title: '13 - Custom Event (Membangkitkan Event Sendiri)',
    shortTitle: '13 Custom Event',
    icon: '🔔',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/13-[Modul CUSTOM EVENT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/13-[Modul CUSTOM EVENT]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/13-[Modul CUSTOM EVENT]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🔔 Custom Event & dispatchEvent</h3>
      <p>Membuat event kustom sendiri dengan <code>new CustomEvent('namaEvent', { detail: data })</code> dan membangkitkannya ke dokumen menggunakan <code>document.dispatchEvent()</code>.</p>
    `,
    keyPoints: [
      'Sangat penting untuk arsitektur Reactive State dan Todo Apps',
      'Memisahkan logika manipulasi data dari rendering UI'
    ]
  },
  {
    id: 'fe-14-bubbling-capturing',
    classId: 'fe-pemula',
    category: '03. Event & Handler',
    title: '14 - Event Bubbling & Capturing',
    shortTitle: '14 Bubbling & Capturing',
    icon: '🫧',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/14-[Modul EVENT BUBBLING & CAPTURING]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/14-[Modul EVENT BUBBLING & CAPTURING]/index.html', language: 'html' }
    ],
    description: `
      <h3>🫧 Alur Propagasi Event</h3>
      <p><strong>Event Bubbling</strong>: Event merambat dari elemen terdalam (child) naik ke elemen terluar (parent). <strong>Event Capturing</strong>: Event merambat dari window turun ke elemen target. Gunakan <code>event.stopPropagation()</code> untuk menghentikan perambatan.</p>
    `,
    keyPoints: [
      'Fase: Capturing -> Target -> Bubbling',
      'Event Delegation memanfaatkan bubbling untuk efisiensi ratusan elemen dinamis'
    ]
  },
  {
    id: 'fe-15-form-prevent-default',
    classId: 'fe-pemula',
    category: '04. Form & Input Event',
    title: '15 - Pengenalan Form & preventDefault',
    shortTitle: '15 Form & preventDefault',
    icon: '📋',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/15-[Modul PENGENALAN FORM & PREVENT DEFAULT]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/15-[Modul PENGENALAN FORM & PREVENT DEFAULT]/index.html', language: 'html' }
    ],
    description: `
      <h3>📋 Mencegah Reload Halaman Form</h3>
      <p>Menggunakan <code>event.preventDefault()</code> pada event <code>submit</code> form agar halaman web tidak me-refresh dan data dapat diproses langsung oleh JavaScript (SPA behavior).</p>
    `,
    keyPoints: [
      'form.addEventListener("submit", (e) => e.preventDefault());',
      'Mengambil nilai input via form elements'
    ]
  },
  {
    id: 'fe-16-input-event-setup',
    classId: 'fe-pemula',
    category: '04. Form & Input Event',
    title: '16 - Input Event: Menyiapkan Halaman Web',
    shortTitle: '16 Setup Input Event',
    icon: '📝',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/16-[Modul INPUT EVENT MENYIAPKAN HALAMAN WEB]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/16-[Modul INPUT EVENT MENYIAPKAN HALAMAN WEB]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/16-[Modul INPUT EVENT MENYIAPKAN HALAMAN WEB]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>📝 Struktur Dasar Form Interaktif</h3>
      <p>Menyiapkan antarmuka formulir input teks, batas sisa karakter (character counter), dan feedback visual instan.</p>
    `,
    keyPoints: [
      'Elemen <form>, <input>, <label>, dan container status',
      'Desain form adaptif dan user-friendly'
    ]
  },
  {
    id: 'fe-17-oninput-onfocus-onblur',
    classId: 'fe-pemula',
    category: '04. Form & Input Event',
    title: '17 - Event onInput, onFocus, dan onBlur',
    shortTitle: '17 Input, Focus & Blur',
    icon: '🔍',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/17-[Modul EVENT ONINPUT, ONFOCUS & ONBLUR]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/17-[Modul EVENT ONINPUT, ONFOCUS & ONBLUR]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/17-[Modul EVENT ONINPUT, ONFOCUS & ONBLUR]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🔍 Real-Time Interaction & Focus State</h3>
      <p><strong>onInput</strong>: Aktif setiap ada ketikan/penghapusan karakter (menghitung sisa karakter real-time). <strong>onFocus</strong>: Aktif saat input diklik/difokuskan. <strong>onBlur</strong>: Aktif saat pengguna meninggalkan elemen input.</p>
    `,
    keyPoints: [
      'Character counter real-time dengan event input',
      'Visual focus outline dan validasi saat blur'
    ]
  },
  {
    id: 'fe-18-onchange-copy-paste',
    classId: 'fe-pemula',
    category: '04. Form & Input Event',
    title: '18 - Event onChange, onCopy, dan onPaste',
    shortTitle: '18 Change, Copy & Paste',
    icon: '📋',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/18-[Modul EVENT ONCHANGE, ONCOPY & ONPASTE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/18-[Modul EVENT ONCHANGE, ONCOPY & ONPASTE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/18-[Modul EVENT ONCHANGE, ONCOPY & ONPASTE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>📋 Clipboard Event & Form Change</h3>
      <p>Mendeteksi perubahan nilai dropdown/radio via <code>change</code>, serta memantau dan memblokir aksi salin/tempel teks pada kolom konfirmasi sensitif via <code>copy</code> dan <code>paste</code>.</p>
    `,
    keyPoints: [
      'Clipboard event: copy, cut, paste',
      'Mencegah kecurangan input pada konfirmasi captcha/password'
    ]
  },
  {
    id: 'fe-19-form-validasi',
    classId: 'fe-pemula',
    category: '04. Form & Input Event',
    title: '19 - Form Validasi Lengkap & Captcha',
    shortTitle: '19 Form Validasi & Captcha',
    icon: '🛡️',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/19-[Modul FORM VALIDASI LENGKAP & CAPTCHA]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/19-[Modul FORM VALIDASI LENGKAP & CAPTCHA]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/19-[Modul FORM VALIDASI LENGKAP & CAPTCHA]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🛡️ Form Validasi Lengkap & Captcha</h3>
      <p>Proyek rangkuman komprehensif penanganan Form dan Input Event pada Front-End Web: mengintegrasikan <code>DOMContentLoaded</code>, <code>input</code> (live character counter), <code>focus</code> & <code>blur</code> (dynamic visual feedback), <code>copy</code> & <code>paste</code> (clipboard security), <code>change</code> (captcha matching verification), serta <code>submit</code> (preventDefault handling).</p>
    `,
    keyPoints: [
      'Character counter real-time dengan batas maksimal 15 karakter',
      'Event copy & paste listener untuk deteksi aksi clipboard',
      'Validasi teks Captcha ("PRNU") via event change untuk membuka tombol Submit',
      'Mencegah default submission reload via event.preventDefault()'
    ]
  },
  {
    id: 'fe-20-local-storage',
    classId: 'fe-pemula',
    category: '05. Web Storage',
    title: '20 - Local Storage (Penyimpanan Data Permanen)',
    shortTitle: '20 Local Storage',
    icon: '💾',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/20-[Modul LOCAL STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/20-[Modul LOCAL STORAGE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/20-[Modul LOCAL STORAGE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>💾 localStorage API</h3>
      <p>Menyimpan data di browser pengguna tanpa batas waktu (persisten bahkan setelah browser ditutup dan dibuka kembali) dengan kapasitas hingga ~5MB per origin.</p>
    `,
    keyPoints: [
      'Method: localStorage.setItem(key, val), getItem(key), removeItem(key), clear()',
      'Data selalu disimpan dalam format tipe data String'
    ]
  },
  {
    id: 'fe-21-session-storage',
    classId: 'fe-pemula',
    category: '05. Web Storage',
    title: '21 - Session Storage (Penyimpanan Sementara per Tab)',
    shortTitle: '21 Session Storage',
    icon: '⏱️',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/21-[Modul SESSION STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/21-[Modul SESSION STORAGE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/21-[Modul SESSION STORAGE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>⏱️ sessionStorage API</h3>
      <p>Menyimpan data sementara yang hanya bertahan selama tab browser aktif. Jika tab atau jendela browser ditutup, data otomatis dihapus.</p>
    `,
    keyPoints: [
      'Isolasi data per tab browser',
      'Cocok untuk data formulir multi-step atau sesi login sementara'
    ]
  },
  {
    id: 'fe-22-tebak-angka',
    classId: 'fe-pemula',
    category: '05. Web Storage',
    title: '22 - Proyek Game Permainan Tebak Angka 123',
    shortTitle: '22 Game Tebak Angka',
    icon: '🎮',
    badge: 'Proyek Latihan',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/22-[Modul PROYEK PERMAINAN TEBAK ANGKA 123]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/22-[Modul PROYEK PERMAINAN TEBAK ANGKA 123]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/22-[Modul PROYEK PERMAINAN TEBAK ANGKA 123]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>🎮 Game Interaktif Tebak Angka 123</h3>
      <p>Mini-game interaktif yang menggabungkan manipulasi DOM, event listener, validasi tebakan, sistem poin, serta penyimpanan skor tertinggi (High Score) menggunakan localStorage dan sessionStorage.</p>
    `,
    keyPoints: [
      'Kombinasi localStorage untuk Rekor Skor dan sessionStorage untuk Sisa Kesempatan',
      'Feedback visual saat tebakan benar atau salah'
    ]
  },
  {
    id: 'fe-23-json-storage',
    classId: 'fe-pemula',
    category: '05. Web Storage',
    title: '23 - Menyimpan Data Kompleks JSON pada Web Storage',
    shortTitle: '23 JSON Web Storage',
    icon: '📦',
    badge: 'Modul Front-End',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/23-[Modul MENYIMPAN DATA KOMPLEKS JSON PADA STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Modul MENYIMPAN DATA KOMPLEKS JSON PADA STORAGE]/index.html', language: 'html' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Modul MENYIMPAN DATA KOMPLEKS JSON PADA STORAGE]/main.js', language: 'javascript' }
    ],
    description: `
      <h3>📦 JSON.stringify() & JSON.parse()</h3>
      <p>Teknik menyimpan array dan objek kompleks ke dalam web storage dengan mengubahnya menjadi JSON string via <code>JSON.stringify()</code> dan mengembalikannya ke objek asli via <code>JSON.parse()</code>.</p>
    `,
    keyPoints: [
      'Menyimpan array daftar pengguna/transaksi ke satu key storage',
      'Pengecekan null saat membaca storage: JSON.parse(localStorage.getItem(KEY) || "[]")'
    ]
  },
  {
    id: 'fe-23-todoapps-dom',
    classId: 'fe-pemula',
    category: '06. Proyek Aplikasi Todo Apps',
    title: '23 - Proyek Todo Apps (DOM Manipulation)',
    shortTitle: 'Todo Apps (DOM)',
    icon: '📝',
    badge: 'Proyek Interaktif',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/css/style.css', language: 'css' },
      { name: 'js/script.js', path: './Belajar Membuat Front-End Web untuk Pemula/23-[Proyek TODO APPS]/js/script.js', language: 'javascript' }
    ],
    description: `
      <h3>📝 Todo Apps dengan Custom Event & DOM</h3>
      <p>Aplikasi pencatat tugas dengan 2 rak: <em>Yang Harus Dilakukan</em> dan <em>Yang Sudah Selesai</em>. Menggunakan Custom Event <code>render-todo</code> untuk merender ulang UI secara reaktif.</p>
    `,
    keyPoints: [
      'Model data todo: { id, task, timestamp, isCompleted }',
      'Pemisahan logika data dari pembuatan elemen DOM (makeTodo)'
    ]
  },
  {
    id: 'fe-24-todoapps-storage',
    classId: 'fe-pemula',
    category: '06. Proyek Aplikasi Todo Apps',
    title: '24 - Proyek Todo Apps Lengkap dengan Web Storage',
    shortTitle: 'Todo Apps + Storage',
    icon: '💾',
    badge: 'Proyek Lengkap',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/css/style.css', language: 'css' },
      { name: 'js/script.js', path: './Belajar Membuat Front-End Web untuk Pemula/24-[Proyek TODO APPS DENGAN WEB STORAGE]/js/script.js', language: 'javascript' }
    ],
    description: `
      <h3>💾 Todo Apps Persisten dengan Local Storage</h3>
      <p>Penyempurnaan Todo Apps dengan fitur penyimpanan otomatis ke <code>localStorage</code> dan pemuatan ulang data (load data from storage) saat browser dibuka kembali.</p>
    `,
    keyPoints: [
      'Event SAVED_EVENT dibangkitkan setiap kali data todos berubah',
      'Fungsi loadDataFromStorage() dipanggil pada event DOMContentLoaded'
    ]
  },
  {
    id: 'fe-todoapps-toast',
    classId: 'fe-pemula',
    category: '06. Proyek Aplikasi Todo Apps',
    title: '✨ Tantangan Eksplorasi: Todo Apps dengan Toast Notification',
    shortTitle: 'Todo Apps + Toast',
    icon: '🍞',
    badge: 'Tantangan Fitur',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/todoapps/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/todoapps/index.html', language: 'html' },
      { name: 'css/style.css', path: './Belajar Membuat Front-End Web untuk Pemula/todoapps/css/style.css', language: 'css' },
      { name: 'js/script.js', path: './Belajar Membuat Front-End Web untuk Pemula/todoapps/js/script.js', language: 'javascript' }
    ],
    description: `
      <h3>🍞 Tantangan: Toast Notification</h3>
      <p>Modifikasi event listener <code>SAVED_EVENT</code> untuk menampilkan dialog toast mengambang yang estetik dan informatif saat data berhasil disimpan atau dihapus.</p>
    `,
    keyPoints: [
      'Toast notification mengambang otomatis hilang dalam 2.5 detik',
      'Meningkatkan User Experience (UX) aplikasi web'
    ]
  },
  {
    id: 'fe-submission',
    classId: 'fe-pemula',
    category: 'Proyek Akhir & Submission',
    title: '🏆 Submission: Personal Finance & Expense Tracker App',
    shortTitle: 'Expense Tracker App',
    icon: '💎',
    badge: 'Submission Bintang 5',
    type: 'html',
    filePath: './Belajar Membuat Front-End Web untuk Pemula/Submission Membangun Expense Tracker App/index.html',
    sourceFiles: [
      { name: 'index.html', path: './Belajar Membuat Front-End Web untuk Pemula/Submission Membangun Expense Tracker App/index.html', language: 'html' },
      { name: 'style.css', path: './Belajar Membuat Front-End Web untuk Pemula/Submission Membangun Expense Tracker App/style.css', language: 'css' },
      { name: 'main.js', path: './Belajar Membuat Front-End Web untuk Pemula/Submission Membangun Expense Tracker App/main.js', language: 'javascript' }
    ],
    description: `
      <h3>💎 Submission: Personal Finance & Expense Tracker App (Bintang 5)</h3>
      <p>Aplikasi pencatatan keuangan pribadi modern bertema <strong>Claymorphism 3D</strong> dengan fitur lengkap: pencatatan pemasukan & pengeluaran, kalkulasi saldo otomatis, filter tanggal, pencarian riwayat transaksi real-time, dialog konfirmasi hapus kustom, visual feedback toast, dan persistensi penuh via Web Storage.</p>
    `,
    keyPoints: [
      'Dasbor Saldo Real-Time: Total Saldo, Pemasukan (Mint), Pengeluaran (Coral/Berry)',
      'Form Tambah Transaksi dengan input jenis, judul, jumlah, dan tanggal',
      'Pencarian Cepat & Filter Transaksi berdasarkan judul/kategori',
      'Modal Dialog Konfirmasi Hapus Kustom & Toast Notification Interaktif',
      'Persistensi Data penuh menggunakan localStorage browser'
    ],
    evaluationCriteria: [
      'Kriteria 1: Mampu menambahkan data transaksi pemasukan dan pengeluaran',
      'Kriteria 2: Mampu menampilkan daftar riwayat transaksi secara terpisah atau terpadu',
      'Kriteria 3: Mampu menghapus data transaksi dari daftar',
      'Kriteria 4: Memanfaatkan Web Storage (localStorage) untuk menyimpan data transaksi',
      'Kriteria Opsional: Fitur pencarian transaksi dan visualisasi saldo dinamis'
    ]
  }
];
