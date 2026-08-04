/**
 * ==============================================================================
 * MODUL 02: METHOD ALERT
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * `alert()` adalah method dari objek `window` yang berfungsi memunculkan jendela dialog
 * informasi kepada pengguna. Method ini bersifat synchronous dan blocking.
 */

// ------------------------------------------------------------------------------
// 1. CONTOH PENGGUNAAN ALERT
// ------------------------------------------------------------------------------

/**
 * Menampilkan alert dengan teks string langsung (string literal)
 */
function tampilkanAlertLiteral() {
  alert('Halo, user!');
}

/**
 * Menampilkan alert dengan nilai yang disimpan di dalam variabel
 */
function tampilkanAlertVariabel() {
  const message = 'Halo, user! Selamat belajar Front-End Web!';
  alert(message);
}

// ------------------------------------------------------------------------------
// 2. EVENT LISTENER UNTUK DEMO INTERAKTIF
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const btnAlertLiteral = document.getElementById('btnAlertLiteral');
  const btnAlertVar = document.getElementById('btnAlertVar');

  if (btnAlertLiteral) {
    btnAlertLiteral.addEventListener('click', tampilkanAlertLiteral);
  }

  if (btnAlertVar) {
    btnAlertVar.addEventListener('click', tampilkanAlertVariabel);
  }
});
