/**
 * ==============================================================================
 * MODUL 21: LOOPING (Perulangan di JavaScript)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami perulangan standar `for`, `while`, dan `do...while`.
 * 2. Memahami perulangan modern `for...of` (untuk Array) dan `for...in` (untuk Object).
 * 3. Mengontrol alur perulangan dengan kata kunci `break` dan `continue`.
 */

// ------------------------------------------------------------------------------
// 1. STANDARD FOR LOOP
// ------------------------------------------------------------------------------
// Format: for (inisialisasi; kondisi; increment/decrement)

console.log('--- 1. For Loop Standar ---');
for (let i = 1; i <= 3; i++) {
    console.log(`Perulangan ke-${i}`);
}


// ------------------------------------------------------------------------------
// 2. FOR...OF (Untuk Elemen Array / Iterable)
// ------------------------------------------------------------------------------

console.log('\n--- 2. For...of Loop (Array) ---');
const menus = ['Bebek Goreng', 'Ayam Bakar', 'Telor Balado'];

for (const menu of menus) {
    console.log('Menu:', menu);
}


// ------------------------------------------------------------------------------
// 3. FOR...IN (Untuk Properti Object)
// ------------------------------------------------------------------------------

console.log('\n--- 3. For...in Loop (Object Properties) ---');
const student = { name: 'Fulan', city: 'Bandung', year: 2026 };

for (const property in student) {
    console.log(`${property.padEnd(6)} : ${student[property]}`);
}


// ------------------------------------------------------------------------------
// 4. WHILE & DO...WHILE LOOP
// ------------------------------------------------------------------------------

console.log('\n--- 4. While Loop ---');
let counter = 1;
while (counter <= 3) {
    console.log(`Nilai counter: ${counter}`);
    counter++;
}

console.log('\n--- 4. Do...While Loop (Pasti jalan minimal 1x) ---');
let num = 10;
do {
    console.log('Dieksekusi minimal 1x meskipun kondisi false');
} while (num < 5);


// ------------------------------------------------------------------------------
// 5. KONTROL LOOP: BREAK & CONTINUE
// ------------------------------------------------------------------------------

console.log('\n--- 5. Break (Menghentikan perulangan saat i === 3) ---');
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log('Nilai i:', i); // Hanya mencetak 1 dan 2
}

console.log('\n--- 5. Continue (Melewati langkah saat i === 3) ---');
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue; // Melewati angka 3
    console.log('Nilai i:', i); // Mencetak 1, 2, 4, 5
}
