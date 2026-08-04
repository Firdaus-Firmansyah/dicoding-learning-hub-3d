/**
 * ==============================================================================
 * MODUL 06: MEMBUAT ELEMEN HTML BARU
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Untuk membuat elemen HTML baru di memori JavaScript, kita menggunakan:
 * `document.createElement(tagName)`
 * 
 * Setelah dibuat, kita dapat mengatur propertinya (innerText, innerHTML, setAttribute)
 * sebelum menyisipkannya ke dalam DOM.
 */

// 1. Fungsi Membuat Elemen Teks
function buatElemenTeks() {
  const playground = document.getElementById('playground');
  
  // Membuat node elemen <p>
  const newElement = document.createElement('p');
  
  // innerText -> hanya teks biasa
  // newElement.innerText = 'Selamat datang ke HTML kosong ini :)';
  
  // innerHTML -> merender tag HTML di dalamnya
  newElement.innerHTML = '<b>Selamat datang</b> ke HTML kosong ini :) 🚀';
  newElement.style.color = '#38bdf8';
  newElement.style.marginTop = '8px';

  playground.appendChild(newElement);
}

// 2. Fungsi Membuat Elemen Gambar
function buatElemenGambar() {
  const playground = document.getElementById('playground');
  
  // Membuat node elemen <img>
  const newImg = document.createElement('img');
  newImg.setAttribute('src', 'https://picsum.photos/300/180');
  newImg.setAttribute('alt', 'Contoh Gambar Dinamis');
  newImg.style.display = 'block';

  playground.appendChild(newImg);
}

// 3. Fungsi Reset Area
function resetArea() {
  const playground = document.getElementById('playground');
  playground.innerHTML = '<p style="color: var(--text-muted);">Area Preview: Elemen yang dibuat dengan JavaScript akan dimasukkan ke sini...</p>';
}

// ------------------------------------------------------------------------------
// EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnCreateText')?.addEventListener('click', buatElemenTeks);
  document.getElementById('btnCreateImg')?.addEventListener('click', buatElemenGambar);
  document.getElementById('btnResetArea')?.addEventListener('click', resetArea);
});
