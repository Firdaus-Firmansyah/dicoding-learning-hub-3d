/**
 * ==============================================================================
 * MODUL 40: STYLE GUIDE & CODE CONVENTIONS (Standar Penulisan Kode & Linter)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami pentingnya Style Guide (seperti Airbnb, Google, atau StandardJS) dalam tim.
 * 2. Menerapkan konvensi penamaan standar: `camelCase`, `UPPER_SNAKE_CASE` (konstanta), `PascalCase` (Class).
 * 3. Memahami peran Linter (ESLint) untuk mendeteksi potensi bug dan inkonsistensi format.
 */

// ------------------------------------------------------------------------------
// 1. BEST PRACTICES: PENAMAAN & DEKLARASI VARIABEL
// ------------------------------------------------------------------------------

// ❌ Buruk (Snake case / var / deklarasi multi-variabel ambigu):
// var my_favorite_color = '#112C85';
// let a = b = c = 5;

// ✅ Bersih & Standar (camelCase, const untuk nilai tetap, deklarasi terpisah):
const myFavoriteColor = '#112C85';
const MAX_LOGIN_ATTEMPTS = 5; // UPPER_SNAKE_CASE untuk konstanta global

let scoreA = 5;
let scoreB = 5;
let scoreC = 5;

console.log('1. Warna Favorit       :', myFavoriteColor);
console.log('1. Skor Inisial (A,B,C):', scoreA, scoreB, scoreC);


// ------------------------------------------------------------------------------
// 2. BEST PRACTICES: PENGGUNAAN BLOK KONDISIONAL & SEMICOLON
// ------------------------------------------------------------------------------

let isLoggedIn = true;
let userNotificationCount = 0;

// ❌ Buruk (Tanpa kurung kurawal pembuka/penutup):
// if (isLoggedIn) userNotificationCount++;

// ✅ Bersih (Selalu gunakan kurung kurawal `{}` agar mudah dibaca & di-maintain):
if (isLoggedIn) {
    userNotificationCount++;
}

console.log('\n2. Jumlah Notifikasi User:', userNotificationCount);


// ------------------------------------------------------------------------------
// 3. CONTOH KONFIGURASI ESLINT (.eslintrc.json)
// ------------------------------------------------------------------------------
/*
{
    "rules": {
        "no-var": "error",                 // Melarang penggunaan var (wajib const / let)
        "no-unused-vars": "warn",          // Memberi peringatan jika variabel tidak digunakan
        "no-use-before-define": "error",   // Mencegah penggunaan variabel sebelum dideklarasikan
        "eqeqeq": ["error", "always"],     // Wajib menggunakan strict equality (===)
        "semi": ["error", "always"]        // Wajib menggunakan titik koma (semicolon)
    }
}
*/
