/**
 * ==============================================================================
 * MODUL WEB STORAGE - SESSION STORAGE
 * Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)
 * ==============================================================================
 * 
 * Karakteristik Session Storage:
 * 1. Menyimpan data berbentuk key-value pair berupa String di browser.
 * 2. Kapasitas rata-rata ~5MB per origin.
 * 3. TEMPORER / SESSION-SCOPED:
 *    - Data bertahan saat halaman direload / direfresh di tab yang sama.
 *    - Data OTOMATIS HILANG saat tab atau jendela browser ditutup.
 *    - Data terisolasi per tab (buka halaman sama di tab baru memiliki session storage terpisah).
 * 
 * Method Utama:
 * - `sessionStorage.setItem(key, value)`   -> Menyimpan / memperbarui item
 * - `sessionStorage.getItem(key)`          -> Mengambil nilai item berdasarkan key
 * - `sessionStorage.removeItem(key)`       -> Menghapus satu item tertentu
 * - `sessionStorage.clear()`                -> Menghapus seluruh data sessionStorage tab ini
 */

// 1. Kunci identitas data di sessionStorage
const sessionStorageKey = 'PRESS_FREQUENCY';

// 2. Pengecekan: Apakah browser mendukung Web Storage?
if (typeof Storage !== 'undefined') {
  // Inisialisasi: Jika key belum ada di sesi ini, beri nilai awal 0
  if (sessionStorage.getItem(sessionStorageKey) === null) {
    sessionStorage.setItem(sessionStorageKey, 0);
  }

  // Menyeleksi elemen DOM
  const incrementButton = document.querySelector('#incrementButton');
  const clearButton = document.querySelector('#clear');
  const countDisplay = document.querySelector('#count');

  // Menampilkan nilai awal dari session storage ke UI
  countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);

  // Event Listener 1: Tombol Tambah Nilai
  incrementButton.addEventListener('click', function () {
    let count = Number(sessionStorage.getItem(sessionStorageKey));
    count++;
    
    // Simpan nilai baru ke sessionStorage
    sessionStorage.setItem(sessionStorageKey, count);
    
    // Update tampilan UI dengan nilai terbaru dari sessionStorage
    countDisplay.innerText = sessionStorage.getItem(sessionStorageKey);
    console.log(`[SessionStorage Updated] Key: ${sessionStorageKey}, Value: ${count}`);
  });

  // Event Listener 2: Tombol Hapus Storage
  clearButton.addEventListener('click', function () {
    // Menghapus item dari sessionStorage
    sessionStorage.removeItem(sessionStorageKey);
    
    // Reset tampilan ke 0
    countDisplay.innerText = 0;
    console.log(`[SessionStorage Cleared] Key: ${sessionStorageKey} telah dihapus.`);
  });
} else {
  alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}
