/**
 * ==============================================================================
 * MODUL 12: FUNCTION EXPRESSION (Fungsi Sebagai Nilai)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep Function Expression (menyimpan fungsi anonim ke dalam variabel).
 * 2. Memahami konsep First-Class Citizen (fungsi sebagai argumen atau nilai balik).
 * 3. Memahami konsep Higher-Order Function dan Closure sederhana.
 */

// ------------------------------------------------------------------------------
// 1. SINTAKS DASAR FUNCTION EXPRESSION
// ------------------------------------------------------------------------------
// Fungsi dibuat tanpa nama (anonymous function) dan ditugaskan ke sebuah variabel (const/let).
// Catatan: Function Expression TIDAK ter-hoist seperti Function Declaration biasa.

const convertCelsiusToFahrenheit = function (temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
};

const temperatureResult = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi (Function Expression):', temperatureResult); 
// Output: Hasil konversi (Function Expression): 194


// ------------------------------------------------------------------------------
// 2. HIGHER-ORDER FUNCTION: FUNGSI SEBAGAI ARGUMEN (Callback)
// ------------------------------------------------------------------------------
// Function dapat dikirimkan sebagai parameter ke fungsi lainnya.

function multiply(a, b) {
    return a * b;
}

function calculate(operation, numA, numB) {
    return operation(numA, numB); // Memanggil fungsi yang dikirim lewat argumen
}

const mathResult = calculate(multiply, 2, 4);
console.log('Hasil calculate(multiply, 2, 4):', mathResult); // Output: 8


// ------------------------------------------------------------------------------
// 3. CLOSURE / FACTORY FUNCTION: FUNGSI MENGEMBALIKAN FUNGSI
// ------------------------------------------------------------------------------
// Function juga dapat mengembalikan function baru.

function createMultiplier(multiplierFactor) {
    return function (number) {
        return multiplierFactor * number;
    };
}

const double = createMultiplier(2); // Fungsi penggali 2
const triple = createMultiplier(3); // Fungsi penggali 3

console.log('Double 10 =', double(10)); // Output: Double 10 = 20
console.log('Triple 11 =', triple(11)); // Output: Triple 11 = 33