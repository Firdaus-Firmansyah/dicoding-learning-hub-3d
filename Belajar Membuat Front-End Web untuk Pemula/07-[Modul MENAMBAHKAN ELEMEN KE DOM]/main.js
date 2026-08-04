/**
 * ==============================================================================
 * MODUL 07: MENAMBAHKAN ELEMEN KE DALAM DOM
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Dua method utama untuk menyisipkan elemen ke dalam DOM:
 * 1. `parentElement.appendChild(newChild)`:
 *    Menambahkan child baru di urutan TERAKHIR dari parent.
 * 
 * 2. `parentElement.insertBefore(newChild, referenceNode)`:
 *    Menyisipkan child baru TEPAT SEBELUM elemen referenceNode yang ditentukan.
 */

// 1. Fungsi Menyisipkan Langkah dengan insertBefore()
function sisipkanLangkahRebus() {
  const daftar = document.getElementById('daftar');
  const akhir = document.getElementById('akhir');

  // Periksa apakah langkah sudah pernah ditambahkan agar tidak duplikat
  if (document.getElementById('rebusAir')) return;

  const itemRebus = document.createElement('li');
  itemRebus.id = 'rebusAir';
  itemRebus.className = 'new-item';
  itemRebus.innerText = 'Rebus air hingga mendidih.';

  // Menyisipkan di antara langkah awal dan langkah akhir
  daftar.insertBefore(itemRebus, akhir);
}

// 2. Fungsi Menambahkan Langkah di Akhir dengan appendChild()
function tambahLangkahAkhir() {
  const daftar = document.getElementById('daftar');

  if (document.getElementById('tuangAir')) return;

  const itemTuang = document.createElement('li');
  itemTuang.id = 'tuangAir';
  itemTuang.className = 'new-item';
  itemTuang.innerText = 'Tuang air hangat/mendidih ke dalam cangkir.';

  // Menambahkan di urutan paling akhir
  daftar.appendChild(itemTuang);
}

// 3. Fungsi Reset Daftar
function resetDaftar() {
  const daftar = document.getElementById('daftar');
  daftar.innerHTML = `
    <li id="awal">Masukkan air ke dalam wadah.</li>
    <li id="akhir">Matikan kompor.</li>
  `;
}

// ------------------------------------------------------------------------------
// EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnInsertBefore')?.addEventListener('click', sisipkanLangkahRebus);
  document.getElementById('btnAppendChild')?.addEventListener('click', tambahLangkahAkhir);
  document.getElementById('btnReset')?.addEventListener('click', resetDaftar);
});
