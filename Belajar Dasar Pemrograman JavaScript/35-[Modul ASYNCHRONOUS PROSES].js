/**
 * ==============================================================================
 * MODUL 35: ASYNCHRONOUS PROCESS (Proses Asinkron & Event Loop)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami sifat dasar JavaScript sebagai Single-Threaded dan Non-Blocking.
 * 2. Memahami perbedaan alur eksekusi Synchronous (berurutan) vs Asynchronous (berjalan di background).
 * 3. Memahami penggunaan fungsi timer bawaan `setTimeout()`.
 */

// ------------------------------------------------------------------------------
// 1. ILUSTRASI PROSES ASINKRON DENGAN SETTIMEOUT
// ------------------------------------------------------------------------------

console.log('1. [Sync] Langkah 1: Membuka aplikasi pemesanan.');

// Operasi asinkron (dijadwalkan di Web APIs / Node Timers):
setTimeout(() => {
    console.log('3. [Async] Langkah 3 (Selesai): Notifikasi server diterima setelah 200ms!');
}, 200);

console.log('2. [Sync] Langkah 2: Menampilkan antarmuka tanpa harus menunggu server.');

/* Output Urutan Eksekusi:
 * 1. [Sync] Langkah 1: Membuka aplikasi pemesanan.
 * 2. [Sync] Langkah 2: Menampilkan antarmuka tanpa harus menunggu server.
 * 3. [Async] Langkah 3 (Selesai): Notifikasi server diterima setelah 200ms!
 */
