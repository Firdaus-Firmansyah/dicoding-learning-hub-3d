/**
 * ==============================================================================
 * MODUL 34: HIGHER-ORDER FUNCTION (Fungsi Tingkat Tinggi)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami fungsi yang menerima fungsi lain sebagai argumen (Callback).
 * 2. Memahami fungsi yang mengembalikan fungsi baru (Currying / Closure).
 * 3. Menerapkan Function Composition dan Memoization.
 */

// ------------------------------------------------------------------------------
// 1. FUNGSI MENERIMA FUNGSI LAIN SEBAGAI ARGUMEN
// ------------------------------------------------------------------------------

function calculateWith(operation, ...args) {
    return operation(...args);
}

function sum(a, b, c) {
    return a + b + c;
}

function applyDiscount(percent, amount) {
    return amount - ((percent / 100) * amount);
}

const originalTotal = calculateWith(sum, 100000, 150000, 250000);
const discountedTotal = calculateWith(applyDiscount, 20, originalTotal);

console.log('1. Total Harga Asli    : Rp', originalTotal);   // 500000
console.log('1. Setelah Diskon 20%  : Rp', discountedTotal); // 400000


// ------------------------------------------------------------------------------
// 2. FUNGSI MENGEMBALIKAN FUNGSI (CURRYING)
// ------------------------------------------------------------------------------

function createMultiplier(multiplier) {
    return function (value) {
        return value * multiplier;
    };
}

const multiplyByFive = createMultiplier(5);
console.log('\n2. 7 x 5  =', multiplyByFive(7));  // 35
console.log('2. 10 x 5 =', multiplyByFive(10)); // 50


// ------------------------------------------------------------------------------
// 3. FUNCTION COMPOSITION (Menggabungkan Dua Fungsi)
// ------------------------------------------------------------------------------

const addOne = (x) => x + 1;
const square = (x) => x * x;

// Menggabungkan f(g(x)):
const compose = (f, g) => (x) => f(g(x));

const addOneThenSquare = compose(square, addOne);
console.log('\n3. compose((2 + 1)^2) =', addOneThenSquare(2)); // Output: 9
