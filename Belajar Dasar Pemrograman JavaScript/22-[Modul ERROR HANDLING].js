/**
 * ==============================================================================
 * MODUL 22: ERROR HANDLING (Penanganan Error: Try, Catch, Finally, Throw)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami cara melempar error menggunakan kata kunci `throw new Error()`.
 * 2. Mengisolasi potensi error dengan blok `try...catch`.
 * 3. Memahami fungsi blok `finally` yang selalu dieksekusi dalam kondisi apa pun.
 */

// ------------------------------------------------------------------------------
// 1. MELEMPAR ERROR DENGAN `throw`
// ------------------------------------------------------------------------------
function processPayment(price, amountPaid) {
    if (amountPaid < price) {
        throw new Error(`Pembayaran kurang! Kurang Rp ${price - amountPaid}`);
    }
    return 'Pembayaran berhasil diproses.';
}


// ------------------------------------------------------------------------------
// 2. MENANGANI ERROR DENGAN TRY...CATCH
// ------------------------------------------------------------------------------
console.log('--- 1. Menangani Kasus Error ---');
try {
    console.log('Memulai transaksi...');
    const receipt = processPayment(100000, 80000); // Sengaja kurang bayar
    console.log(receipt); // Baris ini tidak akan dijalankan karena terjadi error
} catch (error) {
    console.error('Terjadi Kesalahan:', error.message);
}


// ------------------------------------------------------------------------------
// 3. BLOK FINALLY (Selalu Dijalankan Apapun yang Terjadi)
// ------------------------------------------------------------------------------
console.log('\n--- 2. Penggunaan Blok Finally ---');
try {
    console.log('Buka koneksi database...');
    // Simulasi query sukses
    console.log('Data berhasil disimpan.');
} catch (error) {
    console.error('Error database:', error.message);
} finally {
    // Finally biasanya digunakan untuk cleanup (tutup koneksi, stop loading, dll)
    console.log('Tutup koneksi database (Selalu dijalankan).');
}
