/**
 * ==============================================================================
 * MODUL 2: COMMENT (Komentar Kode)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami jenis-jenis komentar dalam JavaScript.
 * 2. Mengetahui fungsi komentar untuk dokumentasi, catatan, dan debugging.
 * 3. Mengetahui best practice penulisan komentar yang bersih dan informatif.
 */

// ------------------------------------------------------------------------------
// 1. SINGLE-LINE COMMENT (Komentar Satu Baris)
// ------------------------------------------------------------------------------
// Menggunakan tanda dua garis miring ( // ).
// Seluruh teks setelah // hingga akhir baris akan diabaikan oleh engine JavaScript.

// Teks ini adalah komentar dan diabaikan interpreter
console.log('Hai, Readers!');
console.log('Hai, JavaScript!');

// Baris di bawah ini sengaja dinonaktifkan (di-comment out) untuk debugging:
// console.log('Hai, Dicoding!');


// ------------------------------------------------------------------------------
// 2. MULTI-LINE COMMENT (Komentar Banyak Baris)
// ------------------------------------------------------------------------------
// Menggunakan format pembuka /* dan penutup */.
// Cocok digunakan untuk penjelasan panjang, dokumentasi fungsi, atau TODO task.

/*
 * TODO LATIHAN:
 * 1. Buatlah variabel bernama `PI` dan isikan dengan nilai 3.14
 * 2. Cetak nilai variabel PI di terminal menggunakan console.log
 */

const PI = 3.14;
console.log('Nilai PI:', PI); // Output: Nilai PI: 3.14


// ------------------------------------------------------------------------------
// 3. BEST PRACTICE MENULIS KOMENTAR
// ------------------------------------------------------------------------------
/*
 * TIPS:
 * - Jelaskan "MENGAPA" (alasan logis / business logic), bukan sekadar "APA" yang sudah jelas dari nama variabel.
 * - Hindari komentar berlebihan yang membuat kode menjadi kotor / redundant.
 * - Selalu perbarui komentar jika kode mengalami perubahan agar tidak menyesatkan.
 */
