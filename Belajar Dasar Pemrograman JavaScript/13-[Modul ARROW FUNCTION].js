/**
 * ==============================================================================
 * MODUL 13: ARROW FUNCTION (Sintaks Fungsi Modern ES6)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami penulisan fungsi modern dengan sintaks Arrow (`=>`).
 * 2. Membandingkan Regular Function vs Arrow Function (Block Body vs Concise Body).
 * 3. Memahami fitur Implicit Return pada Arrow Function.
 */

// ------------------------------------------------------------------------------
// 1. PERBANDINGAN: REGULAR FUNCTION VS ARROW FUNCTION
// ------------------------------------------------------------------------------

// A. Regular Function Expression:
const convertUsingRegular = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

console.log('Regular Function:', convertUsingRegular(90)); // Output: 194


// B. Arrow Function dengan Block Body (menggunakan kurung kurawal `{}` & `return`):
const convertUsingArrowBlock = (temperature) => {
    const result = (9 / 5) * temperature + 32;
    return result;
};

console.log('Arrow Block Body:', convertUsingArrowBlock(90)); // Output: 194


// ------------------------------------------------------------------------------
// 2. ARROW FUNCTION VERSI RINGKAS (Concise Body / Implicit Return)
// ------------------------------------------------------------------------------
/*
 * Jika isi fungsi hanya berupa satu baris ekspresi return:
 * - Kurung kurawal `{}` dapat dihilangkan.
 * - Kata kunci `return` dapat dihilangkan (otomatis mengembalikan hasil ekspresi).
 * - Jika parameter hanya ada 1, tanda kurung parameter `(temperature)` opsional.
 */

const convertConcise = (temperature) => (9 / 5) * temperature + 32;

console.log('Arrow Concise Body:', convertConcise(90)); // Output: 194


// ------------------------------------------------------------------------------
// 3. CONTOH-CONTOH PENULISAN ARROW FUNCTION
// ------------------------------------------------------------------------------

// Tanpa parameter (wajib menggunakan kurung kosong `()`):
const getGreeting = () => 'Selamat Belajar JavaScript!';
console.log(getGreeting()); // Output: Selamat Belajar JavaScript!

// Dua atau lebih parameter:
const add = (a, b) => a + b;
console.log('Penjumlahan 10 + 25 =', add(10, 25)); // Output: Penjumlahan 10 + 25 = 35