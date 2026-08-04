/**
 * ==============================================================================
 * MODUL 14: STRUKTUR DATA - OBJECT (Key-Value Pairs & Destructuring)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami struktur data Object sebagai pasangan kunci-nilai (key-value pairs).
 * 2. Mengakses properti menggunakan Dot Notation dan Bracket Notation.
 * 3. Menambah, memodifikasi, dan menghapus properti object dengan `delete`.
 * 4. Menguasai teknik modern Object Destructuring.
 */

// ------------------------------------------------------------------------------
// 1. MEMBUAT OBJECT (Object Literal `{}`)
// ------------------------------------------------------------------------------

const developer = {
    name: 'Dicoding',
    'last name': 'Indonesia', // Menggunakan kutip jika properti mengandung spasi
    age: 9,
    isStudent: true
};


// ------------------------------------------------------------------------------
// 2. MENGAKSES PROPERTI (Dot vs Bracket Notation)
// ------------------------------------------------------------------------------

// A. Dot Notation (`obj.key`): Cara paling umum dan bersih
console.log('2. Dot Notation (name)         :', developer.name); // Output: Dicoding

// B. Bracket Notation (`obj['key']`): Wajib untuk key yang berspasi atau dari variabel dinamis
console.log('2. Bracket Notation (last name):', developer['last name']); // Output: Indonesia

// Mengakses properti yang tidak ada menghasilkan `undefined`:
console.log('2. Properti yang belum ada    :', developer.gender); // Output: undefined


// ------------------------------------------------------------------------------
// 3. MEMODIFIKASI & MENAMBAH PROPERTI
// ------------------------------------------------------------------------------

const account = {
    balance: 1000,
    debt: 10,
};

// Mengubah properti yang sudah ada:
account.balance = 2000;
console.log('3. Saldo setelah diupdate     :', account.balance); // Output: 2000

// Menambahkan properti baru:
account.currency = 'IDR';
console.log('3. Account setelah ditambah key:', account); // Output: { balance: 2000, debt: 10, currency: 'IDR' }


// ------------------------------------------------------------------------------
// 4. MENGHAPUS PROPERTI DENGAN OPERATOR `delete`
// ------------------------------------------------------------------------------

const sampleUser = {
    name: 'Dicoding',
    lastName: 'Indonesia',
    age: 9,
};

delete sampleUser.age; // Menghapus properti age
console.log('4. Setelah delete sampleUser.age:', sampleUser); 
// Output: { name: 'Dicoding', lastName: 'Indonesia' }


// ------------------------------------------------------------------------------
// 5. OBJECT DESTRUCTURING (Fitur Modern ES6)
// ------------------------------------------------------------------------------
// Mengekstrak properti object langsung ke dalam variabel mandiri secara ringkas.

const userProfile = {
    id: 24,
    email: 'aras@dicoding.com',
    fullName: 'Arsy',
    username: 'aras123',
};

// Destructuring dasar:
const { id, email, fullName } = userProfile;
console.log('5. Destructuring ID & Email   :', id, email, fullName); 
// Output: 24 aras@dicoding.com Arsy

// Destructuring dengan Default Value:
const { role = 'User', isVerified = false } = userProfile;
console.log('5. Destructuring Default Value:', role, isVerified); 
// Output: User false