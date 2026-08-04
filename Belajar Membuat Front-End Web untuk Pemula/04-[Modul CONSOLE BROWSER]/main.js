/**
 * ==============================================================================
 * MODUL 04: CONSOLE BROWSER
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Objek `console` adalah bagian dari BOM yang menyediakan akses ke konsol debugging browser.
 * Sangat penting untuk mencetak pesan, melacak alur eksekusi, serta menemukan bug.
 */

function appendToViewer(message, type = 'log') {
  const viewer = document.getElementById('consoleViewer');
  if (!viewer) return;

  const item = document.createElement('div');
  item.className = `log-item ${type}`;
  item.innerText = `[${type.toUpperCase()}] ${message}`;
  viewer.appendChild(item);
  viewer.scrollTop = viewer.scrollHeight;
}

// ------------------------------------------------------------------------------
// METODE-METODE CONSOLE
// ------------------------------------------------------------------------------

function triggerLog() {
  console.log('Ini adalah console.log() - Digunakan untuk logging umum.');
  appendToViewer('Ini adalah console.log() - Digunakan untuk logging data umum.', 'log');
}

function triggerInfo() {
  console.info('Ini adalah console.info() - Digunakan untuk pesan informatif.');
  appendToViewer('Ini adalah console.info() - Informasi status aplikasi.', 'info');
}

function triggerWarn() {
  console.warn('Ini adalah console.warn() - Digunakan untuk peringatan (warning).');
  appendToViewer('Ini adalah console.warn() - Peringatan potensi kesalahan.', 'warn');
}

function triggerError() {
  console.error('Ini adalah console.error() - Digunakan untuk pesan galat/error.');
  appendToViewer('Ini adalah console.error() - Terjadi kesalahan kritis!', 'error');
}

function triggerTable() {
  const dataPengguna = [
    { id: 1, nama: 'Firdaus', role: 'Front-End Dev' },
    { id: 2, nama: 'Alice', role: 'UI/UX Designer' },
    { id: 3, nama: 'Bob', role: 'Back-End Dev' }
  ];
  console.table(dataPengguna);
  appendToViewer('console.table() dipanggil. Buka DevTools (F12) untuk melihat format tabel tabular.', 'info');
}

// ------------------------------------------------------------------------------
// EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnLog')?.addEventListener('click', triggerLog);
  document.getElementById('btnInfo')?.addEventListener('click', triggerInfo);
  document.getElementById('btnWarn')?.addEventListener('click', triggerWarn);
  document.getElementById('btnError')?.addEventListener('click', triggerError);
  document.getElementById('btnTable')?.addEventListener('click', triggerTable);
});
