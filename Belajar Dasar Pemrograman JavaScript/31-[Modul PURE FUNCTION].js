/**
 * ==============================================================================
 * MODUL 31: PURE FUNCTION (Fungsi Murni Tanpa Efek Samping)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami 2 syarat Pure Function:
 *    a. Selalu menghasilkan output yang SAMA untuk input yang SAMA (*deterministic*).
 *    b. TIDAK menimbulkan efek samping (*no side-effects* seperti mengubah variabel global / mutasi input).
 * 2. Membedakan contoh Impure Function vs Pure Function.
 */

// ------------------------------------------------------------------------------
// 1. CONTOH IMPURE FUNCTION (Fungsi Tidak Murni - Hindari di FP)
// ------------------------------------------------------------------------------

let globalValue = 0;

// Impure karena mengubah variabel di luar lingkup fungsi:
function addWithImpure(addingValue) {
    globalValue += addingValue;
    return globalValue;
}

console.log('1. [Impure] Panggilan 1 (input 1):', addWithImpure(1)); // 1
console.log('1. [Impure] Panggilan 2 (input 1):', addWithImpure(1)); // 2 (Berubah padahal input sama!)


// ------------------------------------------------------------------------------
// 2. CONTOH PURE FUNCTION (Fungsi Murni - Direkomendasikan)
// ------------------------------------------------------------------------------

// Pure karena hanya bergantung pada parameter dan tidak merubah variabel luar:
function addPure(baseValue, addingValue) {
    return baseValue + addingValue;
}

console.log('\n2. [Pure] Panggilan 1 (input 10, 5):', addPure(10, 5)); // 15
console.log('2. [Pure] Panggilan 2 (input 10, 5):', addPure(10, 5)); // 15 (Selalu konsisten)


// ------------------------------------------------------------------------------
// 3. CONTOH PURE FUNCTION PADA PENGOLAHAN DATA KOMPLEKS
// ------------------------------------------------------------------------------

// A. Menghitung total belanja tanpa merusak array:
function calculateTotalPrice(orderItems) {
    return orderItems.reduce((total, item) => total + item.price * item.qty, 0);
}

const cart = [
    { name: 'Kemeja', price: 150000, qty: 2 },
    { name: 'Celana', price: 200000, qty: 1 }
];

console.log('\n3. Total Belanja (Pure): Rp', calculateTotalPrice(cart)); // Output: 500000

// B. Menggabungkan konfigurasi objek dengan Spread Operator (Non-Mutating):
function mergeSettings(defaultSettings, userSettings) {
    return {
        ...defaultSettings,
        ...userSettings
    };
}

const appDefaults = { theme: 'light', fontSize: 14 };
const userPrefs = { theme: 'dark' };
const finalConfig = mergeSettings(appDefaults, userPrefs);

console.log('3. Konfigurasi Akhir   :', finalConfig); // { theme: 'dark', fontSize: 14 }
