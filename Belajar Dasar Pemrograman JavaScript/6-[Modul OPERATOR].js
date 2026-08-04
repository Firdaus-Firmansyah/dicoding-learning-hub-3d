/**
 * ==============================================================================
 * MODUL 6: OPERATOR (Aritmatika, Perbandingan, Logika, & Penugasan)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami klasifikasi operator berdasarkan jumlah operand (Unary, Binary, Ternary).
 * 2. Menguasai Assignment, Arithmetic, Comparison, Logical, dan String Operator.
 */

// ------------------------------------------------------------------------------
// 1. KLASIFIKASI OPERATOR BERDASARKAN OPERAND
// ------------------------------------------------------------------------------

let sampleAge = 25;

// Unary (1 operand): contoh `typeof`, `++`, `--`, `!`
console.log('1. Unary operator (typeof):', typeof sampleAge); // Output: number

// Binary (2 operand): contoh `+`, `-`, `*`, `/`, `=`
const additionResult = 5 + 4;
console.log('1. Binary operator (5 + 4):', additionResult); // Output: 9

// Ternary (3 operand): format `kondisi ? nilaiJikaTrue : nilaiJikaFalse`
const accessMessage = (sampleAge < 18) ? 'You are too young!' : 'Welcome onboard!';
console.log('1. Ternary operator      :', accessMessage); // Output: Welcome onboard!


// ------------------------------------------------------------------------------
// 2. ARITHMETIC OPERATOR (Operator Matematika)
// ------------------------------------------------------------------------------
console.log('2. Penjumlahan (6 + 5)   :', 6 + 5);      // Output: 11
console.log('2. Pengurangan (7 - 2)   :', 7 - 2);      // Output: 5
console.log('2. Perkalian (8 * 5)     :', 8 * 5);      // Output: 40
console.log('2. Pembagian (10 / 3)    :', (10 / 3).toFixed(2)); // Output: 3.33
console.log('2. Sisa Bagi/Modulus (10 % 2):', 10 % 2); // Output: 0
console.log('2. Prioritas 2 * (10 + 2):', 2 * (10 + 2)); // Output: 24


// ------------------------------------------------------------------------------
// 3. COMPARISON OPERATOR (Operator Perbandingan)
// ------------------------------------------------------------------------------
const numA = 10;
const numB = 12;

console.log('3. Kurang dari (10 < 12) :', numA < numB);  // Output: true
console.log('3. Lebih dari (10 > 12)  :', numA > numB);  // Output: false
console.log('3. Identik Strict (10 === "10"):', numA === '10'); // Output: false (cek tipe & nilai)
console.log('3. Sama Nilai (10 == "10")    :', numA == '10');  // Output: true (hanya cek nilai)


// ------------------------------------------------------------------------------
// 4. LOGICAL OPERATOR (Operator Logika)
// ------------------------------------------------------------------------------

// AND (&&): Bernilai true HANYA JIKA kedua kondisi true
console.log('4. AND (true && true)    :', true && true);   // Output: true
console.log('4. AND (5 === 5 && 3 < 5):', (5 === 5) && (3 < 5)); // Output: true

// OR (||): Bernilai true JIKA SALAH SATU kondisi true
console.log('4. OR (true || false)    :', true || false);  // Output: true
console.log('4. OR (false || false)   :', false || false); // Output: false

// NOT (!): Membalikkan nilai boolean
console.log('4. NOT (!true)           :', !true);          // Output: false
console.log('4. NOT (!false)          :', !false);         // Output: true


// ------------------------------------------------------------------------------
// 5. STRING CONCATENATION OPERATOR
// ------------------------------------------------------------------------------
const firstWord = 'bekerja';
const secondWord = 'sama';
const combinedWord = firstWord + secondWord;

console.log('5. Gabungan String       :', combinedWord);   // Output: bekerjasama
