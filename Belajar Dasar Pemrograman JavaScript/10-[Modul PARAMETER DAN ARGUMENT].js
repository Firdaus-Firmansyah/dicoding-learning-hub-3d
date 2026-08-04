/**
 * ==============================================================================
 * MODUL 10: PARAMETER DAN ARGUMENT
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami perbedaan antara Parameter dan Argument.
 * 2. Mengetahui perilaku function jika argument tidak diberikan (undefined / NaN).
 * 3. Menggunakan fitur modern Default Parameter untuk menetapkan nilai bawaan.
 */

// ------------------------------------------------------------------------------
// 1. PERBEDAAN PARAMETER VS ARGUMENT
// ------------------------------------------------------------------------------
/*
 * - PARAMETER: Variabel penampung yang didefinisikan saat membuat fungsi.
 * - ARGUMENT : Nilai aktual yang dikirimkan ke dalam fungsi saat pemanggilan.
 */

// `temperature` di bawah ini adalah PARAMETER:
function calculateTemp(temperature) {
    const fahrenheit = (9 / 5) * temperature + 32;
    console.log('Hasil konversi:', fahrenheit);
}

// `100` di bawah ini adalah ARGUMENT yang dikirim langsung:
calculateTemp(100); // Output: Hasil konversi: 212

// Mengirim argument melalui variabel:
const myTemp = 90;
calculateTemp(myTemp); // Output: Hasil konversi: 194


// ------------------------------------------------------------------------------
// 2. KASUS TANPA ARGUMENT (Menghasilkan NaN)
// ------------------------------------------------------------------------------
// Jika fungsi membutuhkan parameter tetapi dipanggil tanpa argument, 
// parameter bernilai `undefined`, sehingga operasi matematika menghasilkan `NaN`.

function calculateWithoutGuard(temperature) {
    const fahrenheit = (9 / 5) * temperature + 32;
    console.log('Tanpa argument:', fahrenheit);
}

calculateWithoutGuard(); // Output: Tanpa argument: NaN (karena (9/5) * undefined + 32)


// ------------------------------------------------------------------------------
// 3. SOLUSI DENGAN DEFAULT PARAMETER (Fitur Modern ES6)
// ------------------------------------------------------------------------------
// Kita dapat menentukan nilai bawaan (default value) jika pemanggil tidak mengisi argument.

function calculateWithDefault(temperature = 50) {
    const fahrenheit = (9 / 5) * temperature + 32;
    console.log('Dengan default param:', fahrenheit);
}

// Menggunakan nilai default bawaan (temperature = 50):
calculateWithDefault();   // Output: Dengan default param: 122

// Menggantikan nilai default dengan argument baru (temperature = 90):
calculateWithDefault(90); // Output: Dengan default param: 194