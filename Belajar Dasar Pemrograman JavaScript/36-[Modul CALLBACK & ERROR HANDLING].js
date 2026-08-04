/**
 * ==============================================================================
 * MODUL 36: ASYNCHRONOUS CALLBACK & ERROR HANDLING
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami pola Callback untuk menangani hasil proses asinkron.
 * 2. Menerapkan konvensi Node.js: *Error-First Callback* `(error, data) => {}`.
 * 3. Mengetahui masalah *Callback Hell* (piramida bersarang).
 */

// ------------------------------------------------------------------------------
// 1. MEMBUAT FUNGSI ASINKRON DENGAN ERROR-FIRST CALLBACK
// ------------------------------------------------------------------------------

function brewCoffee(orderName, callback) {
    console.log(`⏳ Sedang meracik ${orderName}...`);

    setTimeout(() => {
        const isSuccess = Math.random() > 0.1; // 90% peluang sukses

        if (!isSuccess) {
            // Jika gagal: kirim error sebagai argumen pertama
            callback(new Error('Maaf, mesin pembuat kopi mengalami kendala!'), null);
            return;
        }

        // Jika sukses: error bernilai null, data dikirim pada argumen kedua
        callback(null, `Secangkir ${orderName} Hangat`);
    }, 500);
}


// ------------------------------------------------------------------------------
// 2. MENJALANKAN & MENANGANI ERROR PADA CALLBACK
// ------------------------------------------------------------------------------

brewCoffee('Espresso', (error, coffee) => {
    if (error) {
        console.error('❌ Error:', error.message);
        return;
    }

    console.log(`✅ Sukses: ${coffee} siap disajikan kepada pelanggan!`);
});
