/**
 * ==============================================================================
 * MODUL 42: TYPE SYSTEM (Dynamic vs Static Typing & TypeScript Overview)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami sifat Dynamic Typing pada JavaScript murni (tipe data ditentukan saat runtime).
 * 2. Memahami risiko bug akibat implisit type coercion saat tipe data tidak divalidasi.
 * 3. Mengenal solusi Static Typing pada ekosistem JavaScript (Flow & TypeScript).
 */

// ------------------------------------------------------------------------------
// 1. DYNAMIC TYPING PADA JAVASCRIPT
// ------------------------------------------------------------------------------

let flexibleVariable = 100;    // awalnya bertipe number
flexibleVariable = 'Seratus';  // diubah menjadi string tanpa error saat penulisan kode
flexibleVariable = true;       // diubah menjadi boolean

console.log('1. Tipe data akhir variabel:', typeof flexibleVariable); // boolean


// ------------------------------------------------------------------------------
// 2. RISIKO BUG KARENA DYNAMIC TYPING (Type Coercion Gotcha)
// ------------------------------------------------------------------------------

function addUntyped(a, b) {
    return a + b;
}

console.log('\n2. addUntyped(10, 5)   :', addUntyped(10, 5));     // 15 (Penjumlahan Angka)
console.log('2. addUntyped("10", 5) :', addUntyped('10', 5));   // "105" (Konkatenasi String - Potensi Bug Tersembunyi!)


// ------------------------------------------------------------------------------
// 3. SOLUSI: DEFENSIVE CODING ATAU STATIC TYPING (TypeScript / Flow)
// ------------------------------------------------------------------------------

// A. Di JavaScript: Menggunakan Validasi Runtime
function addSafe(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Argumen harus berupa tipe number!');
    }
    return a + b;
}

console.log('\n3. addSafe(10, 5)        :', addSafe(10, 5)); // 15

// B. Di TypeScript (Superset JavaScript): Pengecekan terjadi saat Compile-Time
/*
function addTypeScript(a: number, b: number): number {
    return a + b;
}

addTypeScript('10', 5); // ❌ Langsung digaris bawahi merah oleh TypeScript Compiler sebelum kode dijalankan!
*/
