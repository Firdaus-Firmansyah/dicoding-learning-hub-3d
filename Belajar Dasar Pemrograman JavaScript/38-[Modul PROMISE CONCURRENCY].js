/**
 * ==============================================================================
 * MODUL 38: PROMISE CONCURRENCY (Promise.all, Promise.allSettled, Promise.race)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami cara menjalankan banyak Promise secara paralel (bersamaan).
 * 2. Membedakan perilaku `Promise.all()` (fail-fast) vs `Promise.allSettled()` (selalu menunggu semua selesai).
 */

const taskA = new Promise((resolve) => setTimeout(() => resolve('Data User Siap'), 300));
const taskB = new Promise((_, reject) => setTimeout(() => reject(new Error('Koneksi Payment Timeout!')), 500));
const taskC = new Promise((resolve) => setTimeout(() => resolve('Data Produk Siap'), 200));

// ------------------------------------------------------------------------------
// 1. PROMISE.ALLSETTLED (Menunggu semua selesai, baik sukses maupun gagal)
// ------------------------------------------------------------------------------

console.log('--- Menjalankan Promise.allSettled ---');
Promise.allSettled([taskA, taskB, taskC])
    .then((results) => {
        results.forEach((res, index) => {
            if (res.status === 'fulfilled') {
                console.log(`Task ${index + 1}: ✅ Berhasil -> ${res.value}`);
            } else {
                console.log(`Task ${index + 1}: ❌ Gagal    -> ${res.reason.message}`);
            }
        });
    });

/* Output:
 * Task 1: ✅ Berhasil -> Data User Siap
 * Task 2: ❌ Gagal    -> Koneksi Payment Timeout!
 * Task 3: ✅ Berhasil -> Data Produk Siap
 */
