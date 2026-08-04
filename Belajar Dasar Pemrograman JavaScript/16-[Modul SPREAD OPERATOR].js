/**
 * ==============================================================================
 * MODUL 16: SPREAD OPERATOR (Menyebarkan Elemen Array & Object)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami fungsi Spread Operator (`...`) untuk menyebarkan (unpack) elemen.
 * 2. Menggabungkan dan menduplikasi Object tanpa merusak object asli (*immutability*).
 * 3. Menggabungkan dan menduplikasi Array secara efisien.
 */

// ------------------------------------------------------------------------------
// 1. SPREAD OPERATOR PADA OBJECT
// ------------------------------------------------------------------------------

// A. Menggabungkan Dua atau Lebih Object:
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };

// Nilai dari obj1 dan obj2 disebarkan ke dalam satu object baru:
const mergedObj = { ...obj1, ...obj2 };
console.log('1. Menggabungkan Object:', mergedObj);
// Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }


// B. Menduplikasi (Cloning) Object:
const originalProfile = { name: 'Dicoding', age: 9 };
const copiedProfile = { ...originalProfile };

console.log('1. Duplikasi Object    :', copiedProfile); // Output: { name: 'Dicoding', age: 9 }


// C. Menimpa / Mengubah Properti Tertentu (Override):
const updatedProfile = { ...originalProfile, age: 10, isVerified: true };
console.log('1. Object Ter-update   :', updatedProfile); // Output: { name: 'Dicoding', age: 10, isVerified: true }


// ------------------------------------------------------------------------------
// 2. SPREAD OPERATOR PADA ARRAY
// ------------------------------------------------------------------------------

// A. Menggabungkan Dua Array:
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];

const mergedArray = [...array1, ...array2];
console.log('2. Menggabungkan Array :', mergedArray);
// Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']


// B. Menduplikasi (Cloning) Array:
const originalFruits = ['apple', 'banana', 'cherry'];
const copiedFruits = [...originalFruits];

copiedFruits.push('durian'); // Menambah di duplikat tidak mempengaruhi array asli
console.log('2. Array Asli          :', originalFruits); // Output: ['apple', 'banana', 'cherry']
console.log('2. Array Duplikat      :', copiedFruits);   // Output: ['apple', 'banana', 'cherry', 'durian']


// ------------------------------------------------------------------------------
// 3. MENYISIPKAN ELEMEN SECARA BEBAS
// ------------------------------------------------------------------------------
const favorites = ['Bakso', 'Sate'];
const allFavorites = ['Nasi Goreng', ...favorites, 'Mie Ayam'];

console.log('3. Sisip Elemen Array  :', allFavorites);
// Output: ['Nasi Goreng', 'Bakso', 'Sate', 'Mie Ayam']
