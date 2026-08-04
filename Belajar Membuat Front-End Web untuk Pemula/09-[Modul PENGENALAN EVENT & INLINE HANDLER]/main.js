/**
 * ==============================================================================
 * MODUL 09: PENGENALAN EVENT & INLINE HANDLER
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Event adalah sinyal bahwa sesuatu telah terjadi di halaman web (klik mouse, input keyboard, page load).
 * Inline handler mengeksekusi kode JavaScript langsung dari atribut HTML seperti `onclick=""`.
 */

function welcomeInline() {
  console.log('[Event onload]: Halaman web berhasil dimuat melalui inline body onload!');
}

function handleClickInline() {
  alert('Fungsi handleClickInline() berhasil dipanggil dari atribut onclick!');
}
