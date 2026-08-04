/**
 * ==============================================================================
 * MODUL 32: IMMUTABILITY (Prinsip Data Tidak Berubah)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami konsep Immutability (nilai tidak diubah langsung di tempat / in-place).
 * 2. Menggunakan method Array non-mutating (`.map()`, `.filter()`, `.reduce()`).
 * 3. Mencegah mutasi objek dengan `Object.freeze()` dan Deep Freeze.
 */

// ------------------------------------------------------------------------------
// 1. DUPLIKASI DATA DENGAN SPREAD OPERATOR (Mencegah Mutasi)
// ------------------------------------------------------------------------------

function findMaxNumber(numbers) {
    // Duplikasi dulu array agar method .sort() dan .pop() tidak merusak array asli:
    return [...numbers].sort((a, b) => a - b).pop();
}

const originalScores = [10, 23, 24, 7, 42, 18];
const highestScore = findMaxNumber(originalScores);

console.log('1. Nilai Tertinggi     :', highestScore);   // Output: 42
console.log('1. Array Asli (Tetap)  :', originalScores); // Output: [ 10, 23, 24, 7, 42, 18 ]


// ------------------------------------------------------------------------------
// 2. ARRAY TRANSFORMATION DENGAN MAP, FILTER, DAN REDUCE
// ------------------------------------------------------------------------------

const students = [
    { name: 'Harry', score: 60 },
    { name: 'James', score: 88 },
    { name: 'Ron', score: 90 },
    { name: 'Bethy', score: 75 }
];

// A. Filter: Mengambil siswa dengan nilai di atas 80
const scholarshipStudents = students.filter(student => student.score > 80);
console.log('\n2. Siswa Beasiswa (filter):', scholarshipStudents);

// B. Reduce: Menghitung total seluruh nilai
const totalClassScore = students.reduce((acc, student) => acc + student.score, 0);
console.log('2. Total Nilai (reduce)   :', totalClassScore); // 313


// ------------------------------------------------------------------------------
// 3. OBJECT.FREEZE (Membekukan Objek agar Kebal Modifikasi)
// ------------------------------------------------------------------------------

const developerProfile = {
    name: 'John Doe',
    email: 'john@dicoding.com'
};

// Membekukan objek:
Object.freeze(developerProfile);

// Mencoba mengubah properti (akan diabaikan otomatis di non-strict mode):
developerProfile.email = 'hacker@example.com';
console.log('\n3. Profil setelah freeze  :', developerProfile.email); // Tetap 'john@dicoding.com'
