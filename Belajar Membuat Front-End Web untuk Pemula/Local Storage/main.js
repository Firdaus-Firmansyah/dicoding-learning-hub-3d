/**
 * ==============================================================================
 * MODUL WEB STORAGE - LOCAL STORAGE
 * Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)
 * ==============================================================================
 * 
 * Karakteristik Local Storage:
 * 1. Menyimpan data berbentuk key-value pair berupa String di browser.
 * 2. Kapasitas besar (rata-rata ~5MB - 10MB per origin/domain).
 * 3. PERSISTEN: Data tidak akan hilang saat halaman direfresh atau browser ditutup.
 * 4. Data hanya bisa dihapus oleh user (clear cache/data) atau kode JavaScript via `.removeItem()` / `.clear()`.
 * 
 * Method Utama:
 * - `localStorage.setItem(key, value)`   -> Menyimpan / memperbarui item
 * - `localStorage.getItem(key)`          -> Mengambil nilai item berdasarkan key
 * - `localStorage.removeItem(key)`       -> Menghapus satu item tertentu
 * - `localStorage.clear()`                -> Menghapus seluruh data localStorage origin
 */

// 1. Kunci identitas data di localStorage
const localStorageKey = 'PRESS_FREQUENCY';

// 2. Pengecekan: Apakah browser mendukung Web Storage?
if (typeof Storage !== 'undefined') {
  // Inisialisasi: Jika key belum pernah dibuat, set nilai awal ke 0
  if (localStorage.getItem(localStorageKey) === null) {
    localStorage.setItem(localStorageKey, 0);
  }

  // Menyeleksi elemen DOM
  const incrementButton = document.querySelector('#incrementButton');
  const clearButton = document.querySelector('#clear');
  const countDisplay = document.querySelector('#count');

  // Menampilkan nilai awal yang tersimpan di localStorage ke UI
  countDisplay.innerText = localStorage.getItem(localStorageKey);

  // Event Listener 1: Tombol Tambah Nilai
  incrementButton.addEventListener('click', function () {
    let count = Number(localStorage.getItem(localStorageKey));
    count++;
    
    // Simpan nilai baru ke localStorage
    localStorage.setItem(localStorageKey, count);
    
    // Update tampilan UI dengan nilai terbaru dari localStorage
    countDisplay.innerText = localStorage.getItem(localStorageKey);
    console.log(`[LocalStorage Updated] Key: ${localStorageKey}, Value: ${count}`);
  });

  // Event Listener 2: Tombol Hapus Storage
  clearButton.addEventListener('click', function () {
    // Menghapus key dari localStorage
    localStorage.removeItem(localStorageKey);
    
    // Reset tampilan ke 0
    countDisplay.innerText = 0;
    console.log(`[LocalStorage Cleared] Key: ${localStorageKey} telah dihapus.`);
  });
} else {
  alert('Browser yang Anda gunakan tidak mendukung Web Storage');
}
