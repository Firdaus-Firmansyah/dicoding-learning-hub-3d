/**
 * ==============================================================================
 * MODUL 11: RETURN VALUE (Mengembalikan Nilai dari Function)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami kata kunci `return` untuk menghasilkan nilai keluar dari sebuah fungsi.
 * 2. Memahami perilaku fungsi tanpa `return` (mengembalikan `undefined`).
 * 3. Memahami sifat `return` yang menghentikan eksekusi kode di dalam fungsi (Early Return).
 */

// ------------------------------------------------------------------------------
// 1. DEFAULT RETURN VALUE (Fungsi Tanpa Return Mengembalikan undefined)
// ------------------------------------------------------------------------------
// console.log() hanya mencetak ke layar dan tidak mengembalikan nilai.

const logResult = console.log('JavaScript keren!');
console.log('Nilai balik console.log:', logResult);
/*
 * Output:
 * JavaScript keren!
 * Nilai balik console.log: undefined
 */


// ------------------------------------------------------------------------------
// 2. MENGEMBALIKAN NILAI DENGAN KATA KUNCI `return`
// ------------------------------------------------------------------------------
// Nilai yang di-return dapat ditampung ke dalam variabel untuk diolah kembali.

function sumNumbers(a, b) {
    const total = a + b;
    return total; // Mengembalikan hasil penjumlahan
}

const calculationResult = sumNumbers(2, 4);
console.log('Hasil 2 + 4 =', calculationResult); // Output: Hasil 2 + 4 = 6


// ------------------------------------------------------------------------------
// 3. SIFAT PENGHENTIAN EKSEKUSI OLEH `return` (Unreachable Code)
// ------------------------------------------------------------------------------
// Baris kode apa pun setelah pernyataan `return` TIDAK AKAN pernah dieksekusi.

function generateGreetingMessage() {
    return 'Halo, dunia!';
    // Kode di bawah ini unreachable (tidak akan pernah dijalankan):
    console.log('Aku tidak akan pernah tampil!');
}

const greetingMessage = generateGreetingMessage();
console.log(greetingMessage); // Output: Halo, dunia!


// ------------------------------------------------------------------------------
// 4. CONTOH IMPLEMENTASI RETURN PADA KONVERSI SUHU
// ------------------------------------------------------------------------------

function convertCelsiusToFahrenheit(temperature) {
    const fahrenheit = (9 / 5) * temperature + 32;
    return fahrenheit;
}

const fahrenheitOutput = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi 90°C ke Fahrenheit:', fahrenheitOutput); 
// Output: Hasil konversi 90°C ke Fahrenheit: 194