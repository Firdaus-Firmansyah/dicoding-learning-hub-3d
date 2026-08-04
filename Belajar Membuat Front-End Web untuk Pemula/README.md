# 🌐 Belajar Membuat Front-End Web untuk Pemula

Selamat datang di repositori catatan dan kode pembelajaran **Belajar Membuat Front-End Web untuk Pemula** (Coding Camp 2026 3.0 powered by DBS Foundation & Dicoding Indonesia).

Repositori ini telah disusun, dirapikan, distandarisasi penamaannya (`01-24`), dan dilengkapi dengan dokumentasi komprehensif, perbaikan bug kode program pada modul, antarmuka interaktif, serta **Proyek Akhir Submission (Expense Tracker App)** dengan standar penilaian **Bintang 5 (Advanced)**!

---

## 🏆 Final Submission: Personal Finance & Expense Tracker App

* 🌟 [Submission - Membangun Expense Tracker App](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/Submission%20-%20Membangun%20Expense%20Tracker%20App/index.html)
  * **Kriteria 1 (DOM & Dasbor Dinamis):** Sapaan header kustom, pembagian otomatis rak pemasukan (`#incomeList`) dan pengeluaran (`#expenseList`), validasi form ketat (`alert()`), dan dasbor kalkulasi otomatis (Total Saldo, Total Pemasukan, Total Pengeluaran).
  * **Kriteria 2 (Web Storage & Custom Events):** Persistensi data lokal (`localStorage`) via `JSON.stringify()` dan `JSON.parse()`, fitur hapus data, mode edit formulir interaktif, serta arsitektur `Custom Event` (`render-transactions` & `saved-transactions`).
  * **Kriteria 3 (Fitur Interaktif):** Tombol ubah tipe transaksi instan (*income* <-> *expense*), filter pencarian real-time via `input` event, dan pemulihan otomatis daftar transaksi saat kolom pencarian dikosongkan.

---

## 📚 Daftar Silabus Modul Pembelajaran

### 📌 Bagian 1: Browser Object Model (BOM)
BOM menyediakan antarmuka pemrograman untuk berinteraksi dengan jendela browser dan ekosistem di luar dokumen HTML.

* [01 - Cara Memanggil Anggota BOM](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/01-%5BModul%20CARA%20MEMANGGIL%20ANGGOTA%20BOM%5D/index.html)
  * Memahami objek `window` sebagai *global scope*.
  * Perbedaan pemanggilan `window.alert()` vs `alert()`.
  * Fenomena *function shadowing / overriding* pada method BOM.
* [02 - Method Alert](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/02-%5BModul%20METHOD%20ALERT%5D/index.html)
  * Menampilkan kotak dialog peringatan modal sederhana.
  * Mengirim string literal vs variabel ke fungsi `alert()`.
* [03 - Method Prompt](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/03-%5BModul%20METHOD%20PROMPT%5D/index.html)
  * Menerima input teks dari pengguna secara interaktif.
  * Konversi tipe data string ke angka dengan `Number()`.
  * Menggunakan nilai default placeholder dan penanganan tombol *Cancel* (`null`).
* [04 - Console Browser](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/04-%5BModul%20CONSOLE%20BROWSER%5D/index.html)
  * Teknik debugging modern dengan objek `console`.
  * Penggunaan `console.log()`, `console.info()`, `console.warn()`, `console.error()`, dan `console.table()`.

---

### 📌 Bagian 2: Document Object Model (DOM)
DOM merepresentasikan struktur halaman web sebagai pohon simpul objek (*Tree Structure*) yang dapat dimanipulasi secara dinamis menggunakan JavaScript.

* [05 - Struktur DOM Tree & Query Elemen](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/05-%5BModul%20DOM%20TREE%20&%20QUERY%20ELEMEN%5D/index.html)
  * Mengakses node dasar dokumen: `document.head` dan `document.body`.
  * Menyeleksi elemen via `getElementById()`, `getElementsByClassName()`, `querySelector()`, dan `querySelectorAll()`.
* [06 - Membuat Elemen HTML](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/06-%5BModul%20MEMBUAT%20ELEMEN%20HTML%5D/index.html)
  * Membuat elemen baru dengan `document.createElement()`.
  * Mengatur isi elemen dengan `innerText` vs `innerHTML`.
  * Mengatur atribut elemen dengan `setAttribute()`.
* [07 - Menambahkan Elemen ke DOM](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/07-%5BModul%20MENAMBAHKAN%20ELEMEN%20KE%20DOM%5D/index.html)
  * Menambahkan elemen di akhir parent dengan `parentElement.appendChild()`.
  * Menyisipkan elemen di posisi tertentu dengan `parentElement.insertBefore(newNode, refNode)`.
  * Studi kasus interaktif: Urutan langkah memasak air.
* [08 - Mengubah Konten & Atribut HTML](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/08-%5BModul%20MENGUBAH%20KONTEN%20HTML%5D/index.html)
  * Manipulasi teks, gambar, hyperlink, dan status tombol disabled.
  * Studi kasus komprehensif: Interaktivitas halaman *"Cube World"*.

---

### 📌 Bagian 3: Event Dasar, Event Handler, & Mekanisme Propagasi
Event memungkinkan halaman web merespons aksi pengguna secara real-time dan interaktif.

* [09 - Pengenalan Event & Inline Handler](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/09-%5BModul%20PENGENALAN%20EVENT%20&%20INLINE%20HANDLER%5D/index.html)
  * Mengenal konsep event pada web.
  * Menulis event handler langsung pada atribut HTML (`onclick`, `onload`).
* [10 - Event Handler Onload](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/10-%5BModul%20EVENT%20HANDLER%20ONLOAD%5D/index.html)
  * Menjalankan inisialisasi kode saat seluruh aset halaman selesai dimuat menggunakan `document.body.onload`.
* [11 - Event Handler Property (onclick)](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/11-%5BModul%20EVENT%20HANDLER%20PROPERTY%20ONCLICK%5D/index.html)
  * Menerapkan event listener melalui properti JavaScript (`element.onclick = handler`).
  * Implementasi counter interaktif dan fitur hadiah tersembunyi.
* [12 - Event Handler dengan addEventListener()](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/12-%5BModul%20EVENT%20HANDLER%20ADDEVENTLISTENER%5D/index.html)
  * Standar industri modern penanganan event di JavaScript.
  * Perbandingan langsung keunggulan `addEventListener` (*multiple listeners*) vs `onclick` (hanya 1 handler, saling menimpa).
* [13 - Custom Event](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/13-%5BModul%20CUSTOM%20EVENT%5D/index.html)
  * Mendefinisikan event kustom dengan `new Event('namaEvent')`.
  * Membangkitkan event secara programatis melalui `element.dispatchEvent()`.
* [14 - Event Bubbling & Capturing](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/14-%5BModul%20EVENT%20BUBBLING%20&%20CAPTURING%5D/index.html)
  * Memahami fase propagasi event: *Bubbling* (default: bawah ke atas) vs *Capturing* (atas ke bawah via `useCapture: true`).
  * Menghentikan penyebaran event menggunakan `event.stopPropagation()`.

---

### 📌 Bagian 4: Form Submission & Input Event Handling
Menguasai validasi formulir di sisi klien dan interaktivitas input field real-time.

* [15 - Pengenalan Form & Prevent Default](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/15-%5BModul%20PENGENALAN%20FORM%20&%20PREVENT%20DEFAULT%5D/index.html)
  * Menangani event `submit` pada elemen form.
  * Mencegah browser me-reload halaman menggunakan `event.preventDefault()`.
  * Mengambil nilai input dan menampilkan respon pesan dinamis.
* [16 - Menyiapkan Input Event & Sisa Karakter](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/16-%5BModul%20INPUT%20EVENT%20MENYIAPKAN%20HALAMAN%20WEB%5D/index.html)
  * Memanfaatkan event `DOMContentLoaded` untuk inisialisasi awal.
  * Membaca atribut `maxLength` dari input teks dan merendernya ke UI.
* [17 - Event onInput, onFocus, dan onBlur](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/17-%5BModul%20EVENT%20ONINPUT,%20ONFOCUS%20&%20ONBLUR%5D/index.html)
  * `focus`: Menampilkan badge sisa karakter saat input aktif.
  * `input`: Menghitung karakter secara real-time & memberi peringatan merah saat sisa karakter <= 5.
  * `blur`: Menyembunyikan notifikasi saat pengguna meninggalkan input.
* [18 - Event onChange, onCopy, dan onPaste](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/18-%5BModul%20EVENT%20ONCHANGE,%20ONCOPY%20&%20ONPASTE%5D/index.html)
  * `change`: Validasi input kode Captcha untuk mengaktifkan/menonaktifkan tombol submit.
  * `copy` & `paste`: Mendeteksi aksi clipboard pengguna pada input field.
* [19 - Form Validasi Lengkap & Captcha (Hasil Akhir)](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/19-%5BModul%20FORM%20VALIDASI%20LENGKAP%20&%20CAPTCHA%5D/index.html)
  * Integrasi komprehensif seluruh event input: `DOMContentLoaded`, `input`, `focus`, `blur`, `change`, `copy`, `paste`, dan `submit`.

---

### 📌 Bagian 5: Web Storage (Local Storage & Session Storage)
Menyimpan data di browser pengguna secara lokal tanpa memerlukan koneksi basis data server.

* [20 - Local Storage](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/20-%5BModul%20LOCAL%20STORAGE%5D/index.html)
  * Penyimpanan data **persisten** (data tetap tersimpan meski browser/tab ditutup).
  * Menggunakan `localStorage.setItem()`, `localStorage.getItem()`, dan `localStorage.removeItem()`.
  * Menghitung dan menyimpan jumlah klik counter secara permanen.
* [21 - Session Storage](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/21-%5BModul%20SESSION%20STORAGE%5D/index.html)
  * Penyimpanan data **temporer / per sesi** (data bertahan saat refresh, tapi hilang saat tab ditutup).
  * Menggunakan `sessionStorage.setItem()`, `sessionStorage.getItem()`, dan `sessionStorage.removeItem()`.
* [22 - Proyek Permainan Tebak Angka 123](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/22-%5BModul%20PROYEK%20PERMAINAN%20TEBAK%20ANGKA%20123%5D/index.html)
  * Kombinasi komprehensif `localStorage` (Rekor kemenangan & percobaan salah terbanyak) dan `sessionStorage` (Kunci jawaban rahasia & percobaan sesi saat ini).
  * Validasi input tebakan 3 digit unik dengan Fisher-Yates Shuffle.
  * Fitur reset total data storage (*Destroy Data*).
* [23 - Menyimpan Data Kompleks JSON pada Web Storage](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/23-%5BModul%20MENYIMPAN%20DATA%20KOMPLEKS%20JSON%20PADA%20STORAGE%5D/index.html)
  * Mengonversi objek/array ke string via `JSON.stringify()`.
  * Mengonversi kembali string JSON ke array objek via `JSON.parse()`.
  * Studi kasus: Form penambahan user baru dengan riwayat maksimal 5 user terbaru (`unshift` & `pop`).

---

### 📌 Bagian 6: Proyek Aplikasi Web Front-End (Todo Apps)

* [24 - Proyek Todo Apps Lengkap dengan Web Storage](file:///c:/FIRDAUS/LOCAL%20DISK%20D/CODING%20CAMP%202026%203.0%20powered%20by%20DBS%20Foundation/Belajar%20Membuat%20Front-End%20Web%20untuk%20Pemula/24-%5BProyek%20TODO%20APPS%20DENGAN%20WEB%20STORAGE%5D/index.html)
  * Menambah item Todo baru via formulir input (`addTodo`).
  * Merender item Todo dinamis ke rak *"Yang harus dilakukan"* & *"Yang sudah dilakukan"* (`makeTodo`, `RENDER_EVENT`).
  * Memindahkan Todo ke rak selesai via checklist button (`addTaskToCompleted`).
  * Mengembalikan Todo yang selesai via undo button (`undoTaskFromCompleted`).
  * Menghapus Todo dari memori menggunakan `findTodoIndex()` dan `Array.prototype.splice()`.
  * **Otomatisasi Persistensi**: Setiap mutasi data langsung memanggil `saveData()` untuk memperbarui `localStorage`.
  * **Load on Startup**: Memuat seluruh task sebelumnya secara otomatis dari `localStorage` saat web dibuka kembali (`loadDataFromStorage`).
  * **Toast Notification**: Pesan mengambang interaktif setiap kali data berhasil disimpan ke Local Storage.
