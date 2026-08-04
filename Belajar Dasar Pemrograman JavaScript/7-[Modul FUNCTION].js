/**
 * ==============================================================================
 * MODUL 7: FUNCTION (Pengenalan Fungsi & Konsep DRY)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami apa itu Function dan mengapa kita membutuhkannya.
 * 2. Menerapkan prinsip DRY (Don't Repeat Yourself) dalam pemrograman.
 */

// ------------------------------------------------------------------------------
// 1. MASALAH TANPA FUNCTION (Kode Berulang / Repetitif)
// ------------------------------------------------------------------------------
// Bayangkan kita ingin mengonversi beberapa nilai suhu Celsius ke Fahrenheit.
// Tanpa function, kita harus menulis ulang rumus perhitungan setiap kali dibutuhkan:

let temp1 = 50;
let fahrenheit1 = (9 / 5) * temp1 + 32;
console.log('Konversi 50°C  :', fahrenheit1);  // Output: 122

let temp2 = 70;
let fahrenheit2 = (9 / 5) * temp2 + 32;
console.log('Konversi 70°C  :', fahrenheit2);  // Output: 158

let temp3 = 100;
let fahrenheit3 = (9 / 5) * temp3 + 32;
console.log('Konversi 100°C :', fahrenheit3);  // Output: 212


// ------------------------------------------------------------------------------
// 2. SOLUSI DENGAN FUNCTION (Bersih, Rapi, & Reusable)
// ------------------------------------------------------------------------------
// Rumus konversi cukup didefinisikan satu kali di dalam fungsi, 
// kemudian fungsi tersebut dapat dipanggil berulang kali dengan input yang berbeda.

function calculateFahrenheit(celsius) {
    const fahrenheit = (9 / 5) * celsius + 32;
    console.log(`Hasil konversi ${celsius}°C :`, fahrenheit);
}

// Memanggil function secara efisien:
calculateFahrenheit(50);   // Output: Hasil konversi 50°C : 122
calculateFahrenheit(70);   // Output: Hasil konversi 70°C : 158
calculateFahrenheit(100);  // Output: Hasil konversi 100°C : 212