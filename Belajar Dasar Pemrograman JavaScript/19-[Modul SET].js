/**
 * ==============================================================================
 * MODUL 19: STRUKTUR DATA - SET (Kumpulan Nilai Unik Tanpa Duplikasi)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami struktur data Set sebagai kumpulan nilai unik (tidak ada duplikasi).
 * 2. Menguasai method dasar Set: `.add()`, `.has()`, `.delete()`, `.size`, dan perulangan.
 * 3. Menerapkan Set untuk menghilangkan elemen duplikat pada Array secara instan.
 */

// ------------------------------------------------------------------------------
// 1. MEMBUAT SET & MENAMBAHKAN NILAI DENGAN `.add()`
// ------------------------------------------------------------------------------

const mySet = new Set();

mySet.add(1);
mySet.add('Apple');
mySet.add(1);       // Duplikat: otomatis diabaikan!
mySet.add('Apple'); // Duplikat: otomatis diabaikan!
mySet.add(2);

console.log('1. Isi Set (Otomatis Unik):', mySet);
// Output: Set(3) { 1, 'Apple', 2 }


// ------------------------------------------------------------------------------
// 2. MENGECEK NILAI DENGAN `.has()` & MENGHAPUS DENGAN `.delete()`
// ------------------------------------------------------------------------------

console.log('2. Cek apakah ada angka 2 :', mySet.has(2)); // Output: true
console.log('2. Cek apakah ada angka 99:', mySet.has(99)); // Output: false

mySet.delete(1); // Menghapus nilai 1
console.log('2. Setelah delete angka 1 :', mySet);       // Output: Set(2) { 'Apple', 2 }
console.log('2. Total elemen (.size)   :', mySet.size);   // Output: 2


// ------------------------------------------------------------------------------
// 3. PERULANGAN / ITERASI PADA SET
// ------------------------------------------------------------------------------

console.log('\n--- Iterasi Set dengan for...of ---');
for (const item of mySet) {
    console.log('Item:', item);
}

console.log('\n--- Iterasi Set dengan forEach ---');
mySet.forEach((val) => console.log('Value:', val));


// ------------------------------------------------------------------------------
// 4. STUDI KASUS PRAKTIS: MENGHAPUS DUPLIKAT DARI ARRAY
// ------------------------------------------------------------------------------
// Trik populer di JavaScript menggunakan Set + Spread Operator (`...`):

const numbersWithDuplicates = [1, 2, 2, 3, 4, 4, 4, 5, 1];
const uniqueNumbers = [...new Set(numbersWithDuplicates)];

console.log('\n4. Array Asli (Banyak Duplikat):', numbersWithDuplicates);
console.log('4. Array Bersih (Unik)        :', uniqueNumbers);
// Output: [ 1, 2, 3, 4, 5 ]
