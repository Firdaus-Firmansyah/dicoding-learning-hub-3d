/**
 * ==============================================================================
 * MODUL 16: INPUT EVENT - MENYIAPKAN HALAMAN WEB
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Menggunakan event `DOMContentLoaded` untuk memastikan elemen DOM siap diakses,
 * lalu membaca properti `maxLength` dari input dan menampilkannya sebagai sisa karakter awal.
 */

document.addEventListener('DOMContentLoaded', () => {
  const inputNama = document.getElementById('inputNama');
  const sisaKarakterSpan = document.getElementById('sisaKarakter');

  if (inputNama && sisaKarakterSpan) {
    const inputMaxLengthOnLoad = inputNama.maxLength;
    sisaKarakterSpan.innerText = inputMaxLengthOnLoad;
    console.log(`[Init]: Sisa karakter awal diatur ke ${inputMaxLengthOnLoad}`);
  }
});
