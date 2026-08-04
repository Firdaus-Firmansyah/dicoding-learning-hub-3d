/**
 * ==============================================================================
 * MODUL 8: DEKLARASI FUNCTION (Function Declaration)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami anatomi dan sintaks Function Declaration.
 * 2. Mengetahui sifat Hoisting pada Function Declaration.
 */

// ------------------------------------------------------------------------------
// 1. ANATOMI DEKLARASI FUNCTION
// ------------------------------------------------------------------------------
/*
 * Sintaks dasar:
 * 
 * function namaFungsi(parameter1, parameter2, ...) {
 *     // Body / badan fungsi (blok kode yang dieksekusi)
 * }
 */

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log('Hasil konversi:', temperatureInFahrenheit);
}

// ------------------------------------------------------------------------------
// 2. CIRI KHAS FUNCTION DECLARATION (Hoisting)
// ------------------------------------------------------------------------------
/*
 * Function Declaration secara otomatis "diangkat" (hoisted) ke atas scope oleh
 * JavaScript engine saat fase kompilasi.
 * Artinya, Anda dapat memanggil fungsi ini BAHKAN SEBELUM baris kodenya dideklarasikan.
 */

sayHello(); // Pemanggilan SEBELUM deklarasi tetap berjalan lancar!

function sayHello() {
    console.log('Halo dari Function Declaration yang ter-hoist!');
}