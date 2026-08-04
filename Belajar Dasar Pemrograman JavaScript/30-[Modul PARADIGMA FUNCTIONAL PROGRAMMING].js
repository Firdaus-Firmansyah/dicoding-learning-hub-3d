/**
 * ==============================================================================
 * MODUL 30: FUNCTIONAL PROGRAMMING (Paradigma Pemrograman Fungsional)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami perbedaan antara Gaya Imperatif (HOW) vs Gaya Deklaratif/Fungsional (WHAT).
 * 2. Menggunakan method bawaan array (seperti `.map()`) untuk menulis kode yang lebih ringkas dan bersih.
 */

// ------------------------------------------------------------------------------
// 1. GAYA IMPERATIF (Fokus pada instruksi detail langkah-demi-langkah)
// ------------------------------------------------------------------------------

const wizardNames = ['Harry', 'Ron', 'Hermione', 'Thomas'];
const imperativeResults = [];

for (let i = 0; i < wizardNames.length; i++) {
    imperativeResults.push(`${wizardNames[i]}!`);
}

console.log('1. Hasil Gaya Imperatif   :', imperativeResults);
// Output: [ 'Harry!', 'Ron!', 'Hermione!', 'Thomas!' ]


// ------------------------------------------------------------------------------
// 2. GAYA DEKLARATIF / FUNCTIONAL (Fokus pada hasil akhir transformasi data)
// ------------------------------------------------------------------------------

const functionalResults = wizardNames.map((name) => `${name}!`);

console.log('2. Hasil Gaya Fungsional  :', functionalResults);
// Output: [ 'Harry!', 'Ron!', 'Hermione!', 'Thomas!' ]

// Array asli tetap utuh dan tidak berubah (prinsip immutability):
console.log('2. Array Asli Tetap Aman  :', wizardNames);
