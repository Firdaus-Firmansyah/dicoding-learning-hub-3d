/**
 * ==============================================================================
 * MODUL 39: ASYNC / AWAIT (Gaya Asinkron Modern Bergaya Sinkron)
 * Belajar Dasar Pemrograman JavaScript
 * ==============================================================================
 * 
 * TUJUAN PEMBELAJARAN:
 * 1. Memahami kata kunci `async` (fungsi yang selalu mengembalikan Promise).
 * 2. Memahami kata kunci `await` (menunggu Promise selesai secara rapi tanpa `.then()`).
 * 3. Menangani error pada Async/Await menggunakan blok `try...catch`.
 */

// ------------------------------------------------------------------------------
// 1. FUNGSI SUMBER ASINKRON (Mengembalikan Promise)
// ------------------------------------------------------------------------------

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId === 101) {
                resolve({ id: 101, username: 'firdaus_dev', tier: 'Pro' });
            } else {
                reject(new Error('User dengan ID tersebut tidak ditemukan!'));
            }
        }, 300);
    });
}


// ------------------------------------------------------------------------------
// 2. MENGONSUMSI PROMISE DENGAN ASYNC / AWAIT & TRY...CATCH
// ------------------------------------------------------------------------------

async function displayUserProfile() {
    console.log('1. Mulai mengambil data user...');

    try {
        // Kata kunci await menghentikan eksekusi baris berikutnya sampai promise selesai
        const user = await fetchUserData(101);
        console.log('2. ✅ Data User Diterima:', user);
        console.log(`3. Selamat datang kembali, ${user.username}!`);
    } catch (error) {
        console.error('❌ Terjadi Error:', error.message);
    } finally {
        console.log('4. Selesai memproses profil.');
    }
}

displayUserProfile();
