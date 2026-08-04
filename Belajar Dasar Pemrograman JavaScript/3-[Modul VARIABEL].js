/**
 * ==============================================================================
 * MODUL 3: VARIABEL (Declaration, Re-assignment, & Scope)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami cara mendeklarasikan variabel dengan `let` dan `const`.
 * 2. Memahami perbedaan karakteristik `const` (konstanta) vs `let` (variabel dinamis).
 * 3. Mengetahui aturan penamaan variabel di JavaScript.
 */

// ------------------------------------------------------------------------------
// 1. DEKLARASI DASAR DENGAN CONST DAN LET
// ------------------------------------------------------------------------------

// `const` digunakan untuk nilai yang TIDAK AKAN diubah setelah diinisialisasi.
const userId = 123;

// `let` digunakan untuk nilai yang DAPAT diubah (re-assigned) sewaktu-waktu.
let username = 'Dicoding';

console.log('User ID  :', userId);    // Output: 123
console.log('Username :', username);  // Output: Dicoding


// ------------------------------------------------------------------------------
// 2. RE-ASSIGNMENT (Mengubah Nilai Variabel)
// ------------------------------------------------------------------------------

let appTheme = 'light';
console.log('Tema sebelum diubah:', appTheme); // Output: light

// Mengubah nilai variabel let:
appTheme = 'dark';
console.log('Tema setelah diubah:', appTheme); // Output: dark


// ------------------------------------------------------------------------------
// 3. SIFAT IMMUTABLE PADA CONST (Tidak Dapat Di-reassign)
// ------------------------------------------------------------------------------

const platformName = 'Dicoding Indonesia';
console.log('Platform:', platformName);

// PERINGATAN: Menugaskan ulang nilai pada `const` akan menghasilkan TypeError!
// platformName = 'Dicoding Academy'; 
// -> TypeError: Assignment to constant variable.


// ------------------------------------------------------------------------------
// 4. ATURAN PENAMAAN VARIABEL (Naming Conventions)
// ------------------------------------------------------------------------------
/*
 * 1. Gunakan gaya camelCase (contoh: `totalScore`, `isUserLoggedIn`).
 * 2. Karakter pertama harus berupa huruf, underscore (_), atau simbol dollar ($).
 * 3. Tidak boleh diawali dengan angka (contoh salah: `1user`).
 * 4. Tidak boleh menggunakan kata kunci khusus (reserved keywords seperti `let`, `if`, `class`).
 * 5. Bersifat Case-Sensitive (`namaUser` berbeda dengan `namauser`).
 */