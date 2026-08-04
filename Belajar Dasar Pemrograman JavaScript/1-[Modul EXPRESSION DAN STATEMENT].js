/**
 * ==============================================================================
 * MODUL 1: EXPRESSION DAN STATEMENT
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami perbedaan mendasar antara Expression dan Statement.
 * 2. Mengetahui cara kerja interpreter JavaScript dalam mengevaluasi kode.
 */

// ------------------------------------------------------------------------------
// 1. EXPRESSION (Ekspresi)
// ------------------------------------------------------------------------------
// Definisi: Setiap unit kode yang menghasilkan sebuah NILAI (value).
// Contoh: Angka, string, operasi matematika, atau pemanggilan fungsi.

5;                  // Expression bernilai 5
10 + 20;            // Expression bernilai 30
'Dicoding';         // Expression bernilai string 'Dicoding'
true;               // Expression bernilai boolean true

// Expression dapat digabungkan di dalam variabel atau pemanggilan console:
const currentAge = 10 + 15; // (10 + 15) adalah expression yang menghasilkan 25
console.log('Hasil evaluasi expression:', currentAge); // Output: 25


// ------------------------------------------------------------------------------
// 2. STATEMENT (Pernyataan)
// ------------------------------------------------------------------------------
// Definisi: Instruksi lengkap untuk melakukan suatu TINDAKAN/AKSI (action).
// Statement tidak selalu menghasilkan nilai balik langsung, melainkan mengeksekusi perintah.
// Contoh: Deklarasi variabel, percabangan if/else, perulangan for/while.

// Deklarasi variabel (Statement)
const age = 10;
const name = 'Dicoding';

// Template literals (kombinasi expression di dalam statement console.log)
console.log(`Aku ${name}, umurku ${age} tahun.`); 
// Output: Aku Dicoding, umurku 10 tahun.


// ------------------------------------------------------------------------------
// 3. RINGKASAN PERBEDAAN
// ------------------------------------------------------------------------------
/*
 * | Aspek      | Expression                       | Statement                          |
 * |------------|----------------------------------|------------------------------------|
 * | Definisi   | Unit kode yang menghasilkan nilai| Perintah/instruksi lengkap         |
 * | Contoh     | 5 + 5, 'Halo', age > 18          | const x = 10;, if (...) { ... }    |
 * | Analogi    | "Frasa" dalam kalimat            | "Kalimat lengkap" yang ada artinya |
 */