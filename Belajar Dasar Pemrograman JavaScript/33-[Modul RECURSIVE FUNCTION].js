/**
 * ==============================================================================
 * MODUL 33: RECURSIVE FUNCTION (Fungsi Rekursif)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep Rekursi (fungsi yang memanggil dirinya sendiri).
 * 2. Memahami pentingnya Base Case (kondisi berhenti) untuk mencegah *Stack Overflow*.
 * 3. Membandingkan solusi Iteratif (looping) vs Rekursif.
 */

// ------------------------------------------------------------------------------
// 1. CARA ITERATIF (Menggunakan Looping For)
// ------------------------------------------------------------------------------

function generateArrayIterative(n) {
    const result = [];
    for (let i = 0; i <= n; i++) {
        result.push(i);
    }
    return result;
}

console.log('1. Iteratif generateArray(5):', generateArrayIterative(5));
// Output: [ 0, 1, 2, 3, 4, 5 ]


// ------------------------------------------------------------------------------
// 2. CARA REKURSIF (Memanggil Fungsi Sendiri dengan Base Case)
// ------------------------------------------------------------------------------

function generateArrayRecursive(n) {
    // BASE CASE: Kondisi berhenti saat n < 0
    if (n < 0) {
        return [];
    }

    // RECURSIVE CALL: Panggil diri sendiri dengan (n - 1) lalu gabungkan nilainya
    return [...generateArrayRecursive(n - 1), n];
}

console.log('2. Rekursif generateArray(5):', generateArrayRecursive(5));
// Output: [ 0, 1, 2, 3, 4, 5 ]


// ------------------------------------------------------------------------------
// 3. CONTOH REKURSIF: MENGHITUNG FAKTORIAL
// ------------------------------------------------------------------------------

function factorial(n) {
    if (n <= 1) return 1; // Base case: 1! = 1
    return n * factorial(n - 1);
}

console.log('3. Faktorial 5 (5! = 5*4*3*2*1):', factorial(5)); // Output: 120
