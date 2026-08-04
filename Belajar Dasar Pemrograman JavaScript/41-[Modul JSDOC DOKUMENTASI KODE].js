/**
 * ==============================================================================
 * MODUL 41: JSDOC (Standar Dokumentasi & Type Hinting di JavaScript)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami sintaks komentar JSDoc (`/** ... *\/`).
 * 2. Menggunakan tag `@param` dan `@returns` untuk mendokumentasikan parameter dan nilai balik fungsi.
 * 3. Memanfaatkan Type Hinting pada IDE (VSCode) tanpa perlu kompilasi TypeScript.
 */

// ------------------------------------------------------------------------------
// 1. DOKUMENTASI FUNGSI SEDERHANA
// ------------------------------------------------------------------------------

/**
 * Menampilkan pesan sapaan ramah kepada pengguna.
 * @param {string} userName - Nama pengguna yang akan disapa.
 * @returns {string} Kalimat sapaan lengkap.
 */
function greetUser(userName) {
    return `Halo, ${userName}! Selamat datang di kelas JavaScript.`;
}

console.log('1. Hasil Greet:', greetUser('Firdaus'));


// ------------------------------------------------------------------------------
// 2. DOKUMENTASI FUNGSI DENGAN TIPE DATA SPESIFIK & DESKRIPSI LENGKAP
// ------------------------------------------------------------------------------

/**
 * Melakukan operasi penjumlahan dua buah angka numerik.
 *
 * @param {number} numA - Angka operan pertama
 * @param {number} numB - Angka operan kedua
 * @returns {number} Hasil penjumlahan dari numA dan numB
 * @throws {TypeError} Jika salah satu argumen bukan berupa number
 */
function addNumbers(numA, numB) {
    if (typeof numA !== 'number' || typeof numB !== 'number') {
        throw new TypeError('Kedua parameter wajib bertipe number!');
    }
    return numA + numB;
}

const calculationResult = addNumbers(15, 25);
console.log('2. Hasil Penjumlahan:', calculationResult); // Output: 40
