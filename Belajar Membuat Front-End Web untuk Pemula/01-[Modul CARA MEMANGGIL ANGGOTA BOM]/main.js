/**
 * ==============================================================================
 * MODUL 01: CARA MEMANGGIL ANGGOTA BOM (BROWSER OBJECT MODEL)
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * BOM (Browser Object Model) adalah antarmuka pemrograman yang disediakan oleh browser 
 * untuk memungkinkan JavaScript berinteraksi dengan jendela browser dan sistem pendukungnya.
 * 
 * Objek utama di BOM adalah `window`.
 * Seluruh variabel global dan fungsi bawaan browser otomatis menjadi properti/metode dari `window`.
 */

// ------------------------------------------------------------------------------
// 1. CARA MEMANGGIL ANGGOTA BOM
// ------------------------------------------------------------------------------

/**
 * Cara Pertama: Memanggil secara eksplisit melalui objek `window`
 */
function panggilLewatWindow() {
  window.alert('Halo! Ini dipanggil melalui: window.alert()');
}

/**
 * Cara Kedua: Memanggil langsung tanpa menyertakan objek `window`
 * Karena `window` adalah objek global (Global Scope), kita dapat langsung memanggil fungsinya.
 */
function panggilLangsung() {
  alert('Halo! Ini dipanggil secara langsung: alert()');
}

// ------------------------------------------------------------------------------
// 2. FENOMENA OVERRIDING & SHADOWING PADA NAMA FUNGSI
// ------------------------------------------------------------------------------

/**
 * Jika kita mendeklarasikan fungsi kustom dengan nama yang sama persis seperti method BOM 
 * (misalnya fungsi `alert`), pemanggilan `alert()` lokal akan mengeksekusi fungsi buatan kita,
 * bukan lagi popup bawaan browser.
 */
function customAlert(nama) {
  const pesan = `[Log Custom]: Hati-hati, ${nama}!`;
  console.log(pesan);

  const outputBox = document.getElementById('outputConsole');
  if (outputBox) {
    outputBox.innerText = pesan;
  }
}

// ------------------------------------------------------------------------------
// 3. MENGAITKAN EVENT KE ELEMEN DOM
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const btnWindowAlert = document.getElementById('btnWindowAlert');
  const btnDirectAlert = document.getElementById('btnDirectAlert');
  const btnCustomAlert = document.getElementById('btnCustomAlert');

  if (btnWindowAlert) {
    btnWindowAlert.addEventListener('click', panggilLewatWindow);
  }

  if (btnDirectAlert) {
    btnDirectAlert.addEventListener('click', panggilLangsung);
  }

  if (btnCustomAlert) {
    btnCustomAlert.addEventListener('click', () => {
      customAlert('Chewbacca');
    });
  }
});
