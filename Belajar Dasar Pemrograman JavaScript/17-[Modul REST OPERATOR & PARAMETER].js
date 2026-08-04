/**
 * ==============================================================================
 * MODUL 17: REST OPERATOR & REST PARAMETER
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami perbedaan mendasar: SPREAD (membongkar) vs REST (mengumpulkan).
 * 2. Menggunakan Rest Parameter pada function untuk menerima banyak argumen dinamis.
 * 3. Menggunakan Rest Operator pada Destructuring Array & Object.
 */

// ------------------------------------------------------------------------------
// 1. REST PARAMETER PADA FUNCTION
// ------------------------------------------------------------------------------
// Rest Parameter (`...params`) menangkap semua argumen yang dikirimkan
// dan otomatis mengumpulkannya menjadi sebuah Array utuh.

function listStudents(...names) {
    console.log('1. Jumlah data :', names.length);
    console.log('1. Daftar nama :', names);
}

listStudents('Rafy', 'Fikri', 'Dimas');
/* Output:
 * 1. Jumlah data : 3
 * 1. Daftar nama : [ 'Rafy', 'Fikri', 'Dimas' ]
 */


// ------------------------------------------------------------------------------
// 2. MENGGABUNGKAN PARAMETER BIASA DENGAN REST PARAMETER
// ------------------------------------------------------------------------------
// ATURAN PENTING: Rest parameter WAJIB diletakkan di urutan PALING AKHIR.

function groupMembers(groupNumber, leader, ...members) {
    console.log('2. Grup Nomor  :', groupNumber);
    console.log('2. Ketua Tim   :', leader);
    console.log('2. Anggota Tim :', members);
}

groupMembers('Grup 1', 'Arsy', 'Adi', 'Nur', 'Arif');
/* Output:
 * 2. Grup Nomor  : Grup 1
 * 2. Ketua Tim   : Arsy
 * 2. Anggota Tim : [ 'Adi', 'Nur', 'Arif' ]
 */


// ------------------------------------------------------------------------------
// 3. REST OPERATOR PADA DESTRUCTURING ARRAY
// ------------------------------------------------------------------------------
// Digunakan untuk mengambil sisa elemen array ke dalam variabel tersendiri.

const favoriteFoods = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [firstFood, secondFood, ...otherFoods] = favoriteFoods;

console.log('3. Makanan Pertama:', firstFood);  // Output: Nasi Goreng
console.log('3. Makanan Kedua  :', secondFood); // Output: Mie Goreng
console.log('3. Sisa Makanan   :', otherFoods);  // Output: [ 'Ayam Bakar', 'Tahu', 'Tempe' ]


// ------------------------------------------------------------------------------
// 4. REST OPERATOR PADA DESTRUCTURING OBJECT
// ------------------------------------------------------------------------------
const userAccount = {
    id: 101,
    username: 'firdaus123',
    role: 'Admin',
    email: 'firdaus@example.com',
    city: 'Bandung'
};

const { id, username, ...additionalInfo } = userAccount;
console.log('4. Akun ID & User :', id, username);         // Output: 101 firdaus123
console.log('4. Info Tambahan  :', additionalInfo);        // Output: { role: 'Admin', email: 'firdaus@example.com', city: 'Bandung' }
