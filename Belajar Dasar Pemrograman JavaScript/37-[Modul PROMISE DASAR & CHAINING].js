/**
 * ==============================================================================
 * MODUL 37: PROMISE DASAR & PROMISE CHAINING
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami 3 status Promise: `pending`, `fulfilled` (resolve), `rejected` (reject).
 * 2. Mengonsumsi Promise menggunakan `.then()`, `.catch()`, dan `.finally()`.
 * 3. Menghubungkan proses asinkron beruntun dengan Promise Chaining untuk menghindari *Callback Hell*.
 */

// ------------------------------------------------------------------------------
// 1. MEMBUAT PROMISE (Resolve & Reject)
// ------------------------------------------------------------------------------

function makeCoffeePromise(orderName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isAvailable = true;
            if (isAvailable) {
                resolve(`Kopi ${orderName}`);
            } else {
                reject(new Error(`Bahan baku ${orderName} habis.`));
            }
        }, 300);
    });
}

function deliverCoffeePromise(coffee) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${coffee} telah diantar ke meja pelanggan.`);
        }, 200);
    });
}


// ------------------------------------------------------------------------------
// 2. PROMISE CHAINING (.then().then().catch().finally())
// ------------------------------------------------------------------------------

console.log('--- Memulai Proses Pemesanan Kopi ---');

makeCoffeePromise('Caramel Macchiato')
    .then((coffee) => {
        console.log(`1. Kopi selesai diracik: ${coffee}`);
        // Wajib me-return Promise berikutnya agar bisa di-chain:
        return deliverCoffeePromise(coffee);
    })
    .then((deliveryStatus) => {
        console.log(`2. Status Pengantaran : ${deliveryStatus}`);
    })
    .catch((error) => {
        console.error('❌ Terjadi Kegagalan   :', error.message);
    })
    .finally(() => {
        console.log('3. Transaksi Selesai.');
    });
