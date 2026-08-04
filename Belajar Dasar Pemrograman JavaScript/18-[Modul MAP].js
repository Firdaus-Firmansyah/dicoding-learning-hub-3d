/**
 * ==============================================================================
 * MODUL 18: STRUKTUR DATA - MAP (Koleksi Key-Value Fleksibel)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami struktur data Map sebagai koleksi pasangan key-value terurut.
 * 2. Mengetahui keunggulan Map dibanding Object (Key dapat bertipe apa pun, termasuk number, boolean, atau object).
 * 3. Menguasai method dasar Map: `.set()`, `.get()`, `.has()`, `.delete()`, `.size`, dan perulangan.
 */

// ------------------------------------------------------------------------------
// 1. MEMBUAT MAP & INISIALISASI DATA
// ------------------------------------------------------------------------------

// A. Map Kosong:
const emptyMap = new Map();
console.log('1. Map Kosong:', emptyMap); // Output: Map(0) {}

// B. Inisialisasi Map dengan Data Awal (Array 2D):
const productPrices = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);

console.log('1. Map Produk:', productPrices);
// Output: Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }


// ------------------------------------------------------------------------------
// 2. MENAMBAH & MENGUBAH DATA DENGAN `.set(key, value)`
// ------------------------------------------------------------------------------
// Keunikan Map: Key tidak dibatasi string, bisa berupa number, boolean, dll.

const userRegistry = new Map();

userRegistry.set('name', 'Aras');          // Key bertipe String
userRegistry.set(1, 'Ranking Pertama');    // Key bertipe Number
userRegistry.set(true, 'Status Aktif');    // Key bertipe Boolean

console.log('2. User Registry:', userRegistry);
// Output: Map(3) { 'name' => 'Aras', 1 => 'Ranking Pertama', true => 'Status Aktif' }


// ------------------------------------------------------------------------------
// 3. MENGAKSES DATA DENGAN `.get(key)` & MENGECEK DENGAN `.has(key)`
// ------------------------------------------------------------------------------

console.log('3. Ambil data key "name":', userRegistry.get('name')); // Output: Aras
console.log('3. Ambil data key 1     :', userRegistry.get(1));      // Output: Ranking Pertama
console.log('3. Cek apakah ada key 1 :', userRegistry.has(1));      // Output: true
console.log('3. Jumlah data (.size)  :', userRegistry.size);        // Output: 3


// ------------------------------------------------------------------------------
// 4. MENGHAPUS DATA DENGAN `.delete(key)` & `.clear()`
// ------------------------------------------------------------------------------

userRegistry.delete(1); // Menghapus elemen dengan key 1
console.log('4. Setelah delete key 1 :', userRegistry); // Map(2) { 'name' => 'Aras', true => 'Status Aktif' }


// ------------------------------------------------------------------------------
// 5. PERULANGAN / ITERASI PADA MAP
// ------------------------------------------------------------------------------

console.log('\n--- Iterasi Map dengan for...of ---');
for (const [product, price] of productPrices) {
    console.log(`Produk: ${product.padEnd(6)} | Harga: Rp ${price}.000`);
}
/* Output:
 * Produk: shoes  | Harga: Rp 500.000
 * Produk: cap    | Harga: Rp 350.000
 * Produk: jeans  | Harga: Rp 250.000
 */
