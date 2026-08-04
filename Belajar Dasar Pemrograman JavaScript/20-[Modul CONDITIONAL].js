/**
 * ==============================================================================
 * MODUL 20: CONDITIONAL (Percabangan & Logika Kondisional)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami percabangan dengan `if`, `else if`, dan `else`.
 * 2. Menggunakan Ternary Operator untuk percabangan ringkas satu baris.
 * 3. Memahami penggunaan `switch...case` dengan kata kunci `break` dan `default`.
 */

// ------------------------------------------------------------------------------
// 1. IF, ELSE IF, DAN ELSE STATEMENT
// ------------------------------------------------------------------------------

const examScore = 85;

if (examScore > 90) {
    console.log('1. Predikat Nilai: A (Sangat Memuaskan)');
} else if (examScore >= 80) {
    console.log('1. Predikat Nilai: B (Lulus dengan Baik)'); // Ini yang dieksekusi
} else if (examScore >= 70) {
    console.log('1. Predikat Nilai: C (Cukup)');
} else {
    console.log('1. Predikat Nilai: D (Perlu Remedial)');
}


// ------------------------------------------------------------------------------
// 2. TERNARY OPERATOR (Conditional Expression)
// ------------------------------------------------------------------------------
// Format: kondisi ? nilaiJikaTrue : nilaiJikaFalse

const itemPrice = 100000;
const isMember = true;
const discountRate = isMember ? 0.1 : 0; // 10% jika member, 0% jika bukan

const totalDiscount = itemPrice * discountRate;
console.log(`2. Total diskon member: Rp ${totalDiscount}`); // Output: Rp 10000


// ------------------------------------------------------------------------------
// 3. SWITCH...CASE STATEMENT
// ------------------------------------------------------------------------------
// Digunakan saat memeriksa satu variabel terhadap banyak nilai kemungkinan yang pasti.

const selectedFruit = 'apple';

switch (selectedFruit) {
    case 'banana':
        console.log('3. Buah: Pisang');
        break;
    case 'apple':
        console.log('3. Buah: Apel'); // Ini yang dieksekusi
        break;
    case 'orange':
        console.log('3. Buah: Jeruk');
        break;
    default:
        console.log('3. Buah tidak dikenal.');
}


// ------------------------------------------------------------------------------
// 4. CONTOH SWITCH CASE HARI
// ------------------------------------------------------------------------------
const dayIndex = 2; // 0: Minggu, 1: Senin, 2: Selasa, ...

switch (dayIndex) {
    case 0:
        console.log('4. Hari: Minggu');
        break;
    case 1:
        console.log('4. Hari: Senin');
        break;
    case 2:
        console.log('4. Hari: Selasa');
        break;
    default:
        console.log('4. Hari kerja lainnya');
}
