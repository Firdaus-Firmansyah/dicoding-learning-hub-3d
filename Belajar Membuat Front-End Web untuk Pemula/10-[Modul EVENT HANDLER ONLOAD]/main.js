/**
 * ==============================================================================
 * MODUL 10: EVENT HANDLER ONLOAD
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Event `onload` dieksekusi ketika browser telah selesai merender seluruh pohon DOM
 * beserta asset gambar dan stylesheet eksternal.
 */

function welcome() {
  console.log('[Event onload triggered]: Menampilkan elemen tersembunyi...');
  const contents = document.querySelector('.contents');
  if (contents) {
    contents.removeAttribute('hidden');
  }
}

// Menetapkan fungsi welcome ke event onload body
document.body.onload = welcome;
