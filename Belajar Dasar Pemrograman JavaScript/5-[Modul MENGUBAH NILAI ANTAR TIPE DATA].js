/**
 * ==============================================================================
 * MODUL 5: MENGUBAH NILAI ANTAR TIPE DATA (Type Conversion & Coercion)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami Konversi Eksplisit (Type Casting) menggunakan fungsi bawaan JS.
 * 2. Memahami Konversi Implisit (Type Coercion) yang dilakukan otomatis oleh JS.
 * 3. Memahami konsep Falsy vs Truthy values.
 */

// ------------------------------------------------------------------------------
// 1. KONVERSI EKSPLISIT: KE STRING
// ------------------------------------------------------------------------------
// Menggunakan fungsi `String()` atau method `.toString()`.

const originalNumber = 123;
const originalBoolean = true;

const strFromNumber = String(originalNumber);
const strFromBoolean = originalBoolean.toString();

console.log('1. Ke String:', strFromNumber, typeof strFromNumber);   // Output: "123" string
console.log('1. Ke String:', strFromBoolean, typeof strBoolean); // Output: "true" string


// ------------------------------------------------------------------------------
// 2. KONVERSI EKSPLISIT: KE NUMBER
// ------------------------------------------------------------------------------
// Menggunakan `Number()`, `parseInt()`, atau `parseFloat()`.

const textInt = '123';
const textFloat = '3.14';
const flag = true;

console.log('2. Number("123") :', Number(textInt));    // Output: 123
console.log('2. Number("3.14"):', Number(textFloat));  // Output: 3.14
console.log('2. Number(true)  :', Number(flag));       // Output: 1 (false -> 0)

// parseInt & parseFloat (mampu mengekstrak angka di depan satuan teks):
console.log('2. parseInt("20cm")     :', parseInt('20cm'));       // Output: 20
console.log('2. parseInt("64px")     :', parseInt('64px'));       // Output: 64
console.log('2. parseFloat("20.55cm"):', parseFloat('20.55cm')); // Output: 20.55


// ------------------------------------------------------------------------------
// 3. KONVERSI EKSPLISIT: KE BOOLEAN (Truthy & Falsy)
// ------------------------------------------------------------------------------
/*
 * Nilai yang menghasilkan `false` (Falsy values):
 * - `false`, `0`, `-0`, `""` (string kosong), `null`, `undefined`, `NaN`.
 * Selain nilai-nilai di atas, semuanya dianggap `true` (Truthy values).
 */

console.log('3. Boolean(123)       :', Boolean(123));         // Output: true
console.log('3. Boolean("Dicoding"):', Boolean('Dicoding'));  // Output: true
console.log('3. Boolean(0)         :', Boolean(0));           // Output: false
console.log('3. Boolean("")        :', Boolean(''));          // Output: false
console.log('3. Boolean(null)      :', Boolean(null));        // Output: false
console.log('3. Boolean(undefined) :', Boolean(undefined));   // Output: false


// ------------------------------------------------------------------------------
// 4. KONVERSI IMPLISIT (Type Coercion oleh JavaScript)
// ------------------------------------------------------------------------------

// Operasi `+` dengan string akan memicu penggabungan teks (concatenation):
const myAge = 20;
const greeting = 'Umurku: ' + myAge;
console.log('4. Implisit string + number:', greeting); // Output: Umurku: 20

// Operasi aritmatika lain (*, -, /) otomatis mengonversi string ke number:
const multiplyResult = '123' * 2;
console.log('4. Implisit "123" * 2      :', multiplyResult); // Output: 246

// Operasi penjumlahan angka dengan boolean (true dikonversi menjadi 1):
const sumWithBool = 1 + true;
console.log('4. Implisit 1 + true       :', sumWithBool);    // Output: 2