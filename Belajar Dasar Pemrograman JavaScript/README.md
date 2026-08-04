# 📚 Panduan Belajar Dasar Pemrograman JavaScript

Selamat datang di modul catatan dan kurikulum belajar **Dasar Pemrograman JavaScript**. Seluruh materi telah dirapikan, didokumentasikan secara komprehensif, dan diberi nomor urut terstandar (**Modul 01 s/d 44**) untuk memudahkan pemahaman konsep dan navigasi Anda.

---

## 📑 Daftar Isi & Silabus Lengkap (44 Modul)

### 📌 Bagian 1: Fundamental JavaScript (Modul 01 - 15)
| No | Modul / Nama Berkas | Topik Utama |
|---|---|---|
| **01** | [`1-[Modul EXPRESSION DAN STATEMENT].js`](./1-%5BModul%20EXPRESSION%20DAN%20STATEMENT%5D.js) | Kode penghasil nilai (*expression*) vs instruksi aksi (*statement*). |
| **02** | [`2-[Modul COMMENT].js`](./2-%5BModul%20COMMENT%5D.js) | Komentar satu baris (`//`), banyak baris (`/* */`), & best practices dokumentasi. |
| **03** | [`3-[Modul VARIABEL].js`](./3-%5BModul%20VARIABEL%5D.js) | Deklarasi variabel modern (`const` vs `let`) dan camelCase. |
| **04** | [`4-[Modul TIPE DATA].js`](./4-%5BModul%20TIPE%20DATA%5D.js) | String, Number (Infinity, NaN), Boolean, `null`, `undefined`, & `typeof`. |
| **05** | [`5-[Modul MENGUBAH NILAI ANTAR TIPE DATA].js`](./5-%5BModul%20MENGUBAH%20NILAI%20ANTAR%20TIPE%20DATA%5D.js) | Konversi eksplisit (*type casting*) & implisit (*type coercion*). |
| **06** | [`6-[Modul OPERATOR].js`](./6-%5BModul%20OPERATOR%5D.js) | Unary, Binary, Ternary, Aritmatika, Perbandingan identik (`===`), Logika. |
| **07** | [`7-[Modul FUNCTION].js`](./7-%5BModul%20FUNCTION%5D.js) | Pengenalan fungsi dan penerapan prinsip **DRY (Don't Repeat Yourself)**. |
| **08** | [`8-[Modul DEKLARASI FUNCTION].js`](./8-%5BModul%20DEKLARASI%20FUNCTION%5D.js) | Anatomi Function Declaration dan konsep **Hoisting**. |
| **09** | [`9-[Modul PEMANGGILAN FUNCTION].js`](./9-%5BModul%20PEMANGGILAN%20FUNCTION%5D.js) | Eksekusi fungsi dengan tanda kurung `()` vs mereferensikan fungsi. |
| **10** | [`10-[Modul PARAMETER DAN ARGUMENT].js`](./10-%5BModul%20PARAMETER%20DAN%20ARGUMENT%5D.js) | Parameter vs Argument dan fitur modern **Default Parameter**. |
| **11** | [`11-[Modul RETURN VALUE].js`](./11-%5BModul%20RETURN%20VALUE%5D.js) | Mengembalikan nilai dengan `return`, default `undefined`, dan *Early Return*. |
| **12** | [`12-[Modul FUNCTION EXPRESSION].js`](./12-%5BModul%20FUNCTION%20EXPRESSION%5D.js) | *First-Class Citizen*, Anonymous Function, Callback, Closure. |
| **13** | [`13-[Modul ARROW FUNCTION].js`](./13-%5BModul%20ARROW%20FUNCTION%5D.js) | Sintaks modern ES6 (`=>`), perbedaan Block Body vs Concise Body. |
| **14** | [`14-[Modul OBJECT].js`](./14-%5BModul%20OBJECT%5D.js) | Pasangan Key-Value, Dot/Bracket notation, operator `delete`, **Object Destructuring**. |
| **15** | [`15-[Modul ARRAY].js`](./15-%5BModul%20ARRAY%5D.js) | Array 0-indexed, manipulasi (`push`, `pop`, `shift`, `unshift`, `splice`), `sort`, `reverse`, **Array Destructuring**. |

### 🔀 Bagian 2: Struktur Data Lanjutan, Flow Control & Modularisasi (Modul 16 - 24)
| No | Modul / Nama Berkas | Topik Utama |
|---|---|---|
| **16** | [`16-[Modul SPREAD OPERATOR].js`](./16-%5BModul%20SPREAD%20OPERATOR%5D.js) | Menyebarkan (*unpack*) elemen Array & Object (merging & cloning). |
| **17** | [`17-[Modul REST OPERATOR & PARAMETER].js`](./17-%5BModul%20REST%20OPERATOR%20%26%20PARAMETER%5D.js) | Menangkap banyak argumen menjadi array (`...rest`) & destructuring rest. |
| **18** | [`18-[Modul MAP].js`](./18-%5BModul%20MAP%5D.js) | Pasangan Key-Value fleksibel (key bebas tipe), `.set()`, `.get()`, `.has()`, `.delete()`. |
| **19** | [`19-[Modul SET].js`](./19-%5BModul%20SET%5D.js) | Kumpulan nilai **UNIK** tanpa duplikasi, `.add()`, `.has()`, `.delete()`, hapus duplikat array. |
| **20** | [`20-[Modul CONDITIONAL].js`](./20-%5BModul%20CONDITIONAL%5D.js) | Percabangan `if`, `else if`, `else`, ternary, `switch...case`. |
| **21** | [`21-[Modul LOOPING].js`](./21-%5BModul%20LOOPING%5D.js) | Perulangan `for`, `while`, `do...while`, `for...of`, `for...in`, `break`, `continue`. |
| **22** | [`22-[Modul ERROR HANDLING].js`](./22-%5BModul%20ERROR%20HANDLING%5D.js) | Melempar error (`throw new Error()`), proteksi `try...catch`, & blok `finally`. |
| **23** | [`23-[Modul FLOW CONTROL IMPLEMENTASI].js`](./23-%5BModul%20FLOW%20CONTROL%20IMPLEMENTASI%5D.js) | Studi kasus integrasi looping, evaluasi predikat nilai, & validasi error. |
| **24** | [`24-[Modul ES6 MODULE EXPORT & IMPORT].js`](./24-%5BModul%20ES6%20MODULE%20EXPORT%20&%20IMPORT%5D.js) | Modularisasi JavaScript: Default Export/Import, Named Export/Import, Alias (`as`), `* as`. |

### 🧱 Bagian 3: Object-Oriented Programming (OOP) & Composition (Modul 25 - 29)
| No | Modul / Nama Berkas | Topik Utama |
|---|---|---|
| **25** | [`25-[Modul PARADIGMA BERBASIS OBJEK].js`](./25-%5BModul%20PARADIGMA%20BERBASIS%20OBJEK%5D.js) | Constructor Function vs ES6 Class, instance object (`new`), Prototype. |
| **26** | [`26-[Modul INHERITANCE].js`](./26-%5BModul%20INHERITANCE%5D.js) | Pewarisan SuperClass & SubClass menggunakan `extends` dan `instanceof`. |
| **27** | [`27-[Modul ENCAPSULATION].js`](./27-%5BModul%20ENCAPSULATION%5D.js) | Getter/Setter dan proteksi internal **Private Field (`#field`)** & **Private Method (`#method()`)**. |
| **28** | [`28-[Modul POLYMORPHISM].js`](./28-%5BModul%20POLYMORPHISM%5D.js) | Constructor & Method Overriding dengan memanggil `super()`. |
| **29** | [`29-[Modul OBJECT COMPOSITION].js`](./29-%5BModul%20OBJECT%20COMPOSITION%5D.js) | Prinsip *Composition over Inheritance*: Merakit kemampuan objek dengan `Object.assign()`. |

### 🧩 Bagian 4: Functional Programming (Modul 30 - 34)
| No | Modul / Nama Berkas | Topik Utama |
|---|---|---|
| **30** | [`30-[Modul PARADIGMA FUNCTIONAL PROGRAMMING].js`](./30-%5BModul%20PARADIGMA%20FUNCTIONAL%20PROGRAMMING%5D.js) | Gaya Imperatif (*How*) vs Fungsional/Deklaratif (*What*) dan `.map()`. |
| **31** | [`31-[Modul PURE FUNCTION].js`](./31-%5BModul%20PURE%20FUNCTION%5D.js) | Fungsi murni tanpa efek samping (*deterministic & side-effect free*). |
| **32** | [`32-[Modul IMMUTABILITY].js`](./32-%5BModul%20IMMUTABILITY%5D.js) | Transformasi array non-mutating (`.map()`, `.filter()`, `.reduce()`) & `Object.freeze()`. |
| **33** | [`33-[Modul RECURSIVE FUNCTION].js`](./33-%5BModul%20RECURSIVE%20FUNCTION%5D.js) | Rekursi (fungsi memanggil dirinya sendiri) dan penentuan *Base Case*. |
| **34** | [`34-[Modul HIGHER-ORDER FUNCTION].js`](./34-%5BModul%20HIGHER-ORDER%20FUNCTION%5D.js) | Fungsi menerima callback, Currying/Closure, dan Function Composition. |

### ⚡ Bagian 5: Asynchronous Programming (Modul 35 - 39)
| No | Modul / Nama Berkas | Topik Utama |
|---|---|---|
| **35** | [`35-[Modul ASYNCHRONOUS PROSES].js`](./35-%5BModul%20ASYNCHRONOUS%20PROSES%5D.js) | Konsep Asinkron, Event Loop, Non-blocking I/O, dan `setTimeout()`. |
| **36** | [`36-[Modul CALLBACK & ERROR HANDLING].js`](./36-%5BModul%20CALLBACK%20&%20ERROR%20HANDLING%5D.js) | Konvensi *Error-First Callback* `(error, data)` dan penanganan asinkron. |
| **37** | [`37-[Modul PROMISE DASAR & CHAINING].js`](./37-%5BModul%20PROMISE%20DASAR%20&%20CHAINING%5D.js) | Status Promise (Pending, Fulfilled, Rejected), `.then()`, `.catch()`, `.finally()`, dan Chaining. |
| **38** | [`38-[Modul PROMISE CONCURRENCY].js`](./38-%5BModul%20PROMISE%20CONCURRENCY%5D.js) | Eksekusi paralel dengan `Promise.all()` dan `Promise.allSettled()`. |
| **39** | [`39-[Modul ASYNC AWAIT].js`](./39-%5BModul%20ASYNC%20AWAIT%5D.js) | Gaya asinkron modern bergaya sinkron dengan `async`/`await` dan blok `try...catch`. |

### 🛠️ Bagian 6: Code Quality, Type System & Testing Frameworks (Modul 40 - 44)
| No | Modul / Nama Berkas | Topik Utama |
|---|---|---|
| **40** | [`40-[Modul STYLE GUIDE & CODE CONVENTION].js`](./40-%5BModul%20STYLE%20GUIDE%20%26%20CODE%20CONVENTION%5D.js) | Standar penulisan kode, penamaan camelCase/UPPER_SNAKE_CASE, dan aturan Linter (ESLint). |
| **41** | [`41-[Modul JSDOC DOKUMENTASI KODE].js`](./41-%5BModul%20JSDOC%20DOKUMENTASI%20KODE%5D.js) | Standar dokumentasi fungsi dengan `@param`, `@returns`, `@throws`, dan Type Hinting IDE. |
| **42** | [`42-[Modul TYPE SYSTEM & STATIC TYPING].js`](./42-%5BModul%20TYPE%20SYSTEM%20%26%20STATIC%20TYPING%5D.js) | Dynamic Typing vs Static Typing, bahaya implisit coercion, serta pengenalan TypeScript. |
| **43** | [`43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js`](./43-%5BModul%20AUTOMATED%20TESTING%20DENGAN%20NODE%20TEST%20RUNNER%5D.js) | Pola pengujian AAA (Arrange, Act, Assert), `node:test` (`describe`, `it`), & `node:assert`. |
| **44** | [`44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js`](./44-%5BModul%20AUTOMATED%20TESTING%20DENGAN%20BUN%20TEST%5D.js) | Testing di Bun runtime dengan `bun:test`, Jest-like matcher (`expect().toBe()`, `expect().toThrow()`). |

---

## 🚀 Cara Menjalankan Berkas Pembelajaran

Setiap berkas dapat langsung dijalankan melalui terminal menggunakan **Node.js** maupun **Bun**:

```bash
# Menjalankan Modul Automated Testing dengan Node.js Test Runner:
node "43-[Modul AUTOMATED TESTING DENGAN NODE TEST RUNNER].js"

# Menjalankan Modul Automated Testing dengan Bun Test:
bun test "44-[Modul AUTOMATED TESTING DENGAN BUN TEST].js"
```

Selamat belajar dan sukses selalu dalam perjalanan menjadi JavaScript Developer handal! 💻✨
