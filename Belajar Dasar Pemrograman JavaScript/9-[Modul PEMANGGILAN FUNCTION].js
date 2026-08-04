/**
 * ==============================================================================
 * MODUL 9: PEMANGGILAN FUNCTION (Function Invocation & Execution)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami cara mengeksekusi (memanggil/invoke) function dengan tanda kurung `()`.
 * 2. Membedakan antara mereferensikan function vs mengeksekusi function.
 */

// ------------------------------------------------------------------------------
// 1. DEKLARASI FUNGSI
// ------------------------------------------------------------------------------

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log('Hasil konversi:', temperatureInFahrenheit);
}


// ------------------------------------------------------------------------------
// 2. PERBEDAAN REFERENSI VS EKSEKUSI
// ------------------------------------------------------------------------------

// A. Mereferensikan fungsi (tanpa tanda kurung `()`):
// Ini hanya menampilkan definisi/objek fungsi itu sendiri, BUKAN menjalankannya.
console.log('Referensi fungsi:', convertCelsiusToFahrenheit); 
// Output: [Function: convertCelsiusToFahrenheit]

// B. Mengeksekusi fungsi (dengan tanda kurung `()`):
// Kode di dalam body function akan dijalankan.
convertCelsiusToFahrenheit(90); 
// Output: Hasil konversi: 194


// ------------------------------------------------------------------------------
// 3. CONTOH HOISTING PADA PEMANGGILAN
// ------------------------------------------------------------------------------

// Pemanggilan dilakukan sebelum deklarasi:
greetWorld(); // Output: Hello, world!

function greetWorld() {
    console.log('Hello, world!');
}