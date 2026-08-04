/**
 * ==============================================================================
 * MODUL 24: MODULARISASI ES6 (Export & Import Modules)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep pembagian kode ke dalam modul terpisah (*modular code*).
 * 2. Memahami perbedaan antara Named Export/Import vs Default Export/Import.
 * 3. Memahami sintaks Import Alias (`as`) dan Import All (`* as`).
 */

// ==============================================================================
// 1. CARA EXPORT DARI MODUL (Misal di dalam file `utils.mjs`)
// ==============================================================================

/*
 * // A. NAMED EXPORT (Bisa mengekspor lebih dari 1 variabel/fungsi):
 * export const platformName = 'Dicoding Indonesia';
 * export function splitString(str) {
 *     return Array.from(str);
 * }
 * 
 * // B. DEFAULT EXPORT (Hanya boleh ada 1 default export per file):
 * export default function unique(array) {
 *     return Array.from(new Set(array));
 * }
 */


// ==============================================================================
// 2. CARA IMPORT DI MODUL PENERIMA (Misal di dalam file `main.mjs`)
// ==============================================================================

/*
 * // 1. Mengimpor Default Export (tanpa kurung kurawal):
 * import unique from './utils.mjs';
 * 
 * // 2. Mengimpor Named Export (wajib memakai kurung kurawal `{}`):
 * import { splitString, platformName } from './utils.mjs';
 * 
 * // 3. Menggabungkan Default dan Named Import sekaligus dalam 1 baris:
 * import unique, { splitString } from './utils.mjs';
 * 
 * // 4. Menggunakan Alias (mengubah nama lokal dengan `as`):
 * import { splitString as pecahTeks } from './utils.mjs';
 * 
 * // 5. Mengimpor seluruh isi modul sebagai namespace object (`* as`):
 * import * as Utils from './utils.mjs';
 * console.log(Utils.platformName);
 */

console.log('Modul ES6 menggunakan format: import unique, { splitString } from "./utils.mjs";');
