/**
 * ==============================================================================
 * MODUL 4: TIPE DATA (Data Types di JavaScript)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Mengenal 7 tipe data primitif dan tipe data kompleks (Object).
 * 2. Memahami perilaku tipe data khusus (Infinity, NaN, null, undefined).
 * 3. Menggunakan operator `typeof` untuk mengecek tipe data suatu nilai.
 */

// ------------------------------------------------------------------------------
// 1. STRING (Teks)
// ------------------------------------------------------------------------------
// Dapat ditulis menggunakan petik tunggal (''), petik ganda (""), atau backtick (``).
// Backtick mendukung String Interpolation (${expression}) dan multi-line text.

const currentYear = new Date().getFullYear();
const greetingText = `Sekarang adalah tahun ${currentYear}.`;
console.log('1. String:', greetingText);
// Output: Sekarang adalah tahun 2026. (sesuai tahun aktif)


// ------------------------------------------------------------------------------
// 2. NUMBER & NILAI KHUSUS (Infinity, NaN)
// ------------------------------------------------------------------------------
const integerNumber = 100;
const floatNumber = 3.14;

// Nilai khusus: Infinity (pembagian dengan nol)
const infinityResult = 50 / 0;
console.log('2. Number (Infinity):', infinityResult); // Output: Infinity

// Nilai khusus: NaN (Not-a-Number - gagal mengonversi string non-angka menjadi number)
const nanResult = Number('Dicoding');
console.log('2. Number (NaN):', nanResult); // Output: NaN


// ------------------------------------------------------------------------------
// 3. BOOLEAN (true / false)
// ------------------------------------------------------------------------------
// Menyimpan nilai kebenaran: `true` (benar) atau `false` (salah).

const isCompleted = true;
const isPassed = false;
const isGreater = 5 > 2; // Hasil perbandingan menghasilkan boolean

console.log('3. Boolean:', isCompleted, isPassed); // Output: true false
console.log('3. Perbandingan (5 > 2):', isGreater); // Output: true


// ------------------------------------------------------------------------------
// 4. NULL VS UNDEFINED (Perbedaan Nilai Kosong)
// ------------------------------------------------------------------------------
/*
 * - `null`     : Nilai sengaja disetel kosong/hampa oleh developer.
 * - `undefined`: Variabel telah dideklarasikan tetapi belum diberi nilai sama sekali.
 */

const userWithNull = { first: 'Dicoding', last: null };
const userWithUndefined = { first: 'Dicoding', last: undefined };

// Saat di-convert ke JSON, property bernilai undefined akan diabaikan/dihilangkan:
console.log('4. JSON Stringify (null):', JSON.stringify(userWithNull)); 
// Output: {"first":"Dicoding","last":null}

console.log('4. JSON Stringify (undefined):', JSON.stringify(userWithUndefined)); 
// Output: {"first":"Dicoding"}


// ------------------------------------------------------------------------------
// 5. PENGECEKAN TIPE DATA DENGAN `typeof`
// ------------------------------------------------------------------------------
console.log('typeof "Halo"  :', typeof "Halo");    // Output: string
console.log('typeof 42      :', typeof 42);        // Output: number
console.log('typeof true    :', typeof true);      // Output: boolean
console.log('typeof undefined:', typeof undefined);// Output: undefined
console.log('typeof null    :', typeof null);      // Output: object (historical JS quirk)