/**
 * ==============================================================================
 * MODUL 05: DOM TREE & QUERY ELEMEN
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * DOM (Document Object Model) merepresentasikan struktur dokumen HTML sebagai pohon simpul (Tree Nodes).
 * Melalui objek `document`, kita dapat mengakses, mencari, dan memanipulasi node HTML.
 */

// 1. Mengakses Elemen Utama Dokumen
const head = document.head;
const body = document.body;
console.log('Elemen Head:', head);
console.log('Elemen Body:', body);

// 2. Memperbaiki Bug Sebelumnya (Query Tombol Secara Tepat)
const buttons = document.querySelectorAll('.btn-action');
console.log('Daftar Buttons (NodeList):', buttons);
for (let item of buttons) {
  console.log('Button element:', item.innerText);
}

// ------------------------------------------------------------------------------
// FUNGSI DEMONSTRASI QUERY ELEMEN
// ------------------------------------------------------------------------------

function displayOutput(text) {
  const output = document.getElementById('domOutput');
  if (output) {
    output.innerText = text;
  }
}

// a. getElementById -> Mengambil 1 elemen tunggal berdasarkan ID unik
function testGetById() {
  const judul = document.getElementById('judulUtama');
  displayOutput(`[getElementById('judulUtama')]:\nTag: <${judul.tagName.toLowerCase()}>\nTeks: "${judul.innerText}"`);
}

// b. getElementsByClassName -> Mengembalikan HTMLCollection (live collection)
function testGetByClass() {
  const paragrafList = document.getElementsByClassName('paragraf-info');
  let hasil = `[getElementsByClassName('paragraf-info')] - Ditemukan ${paragrafList.length} elemen:\n`;
  for (let i = 0; i < paragrafList.length; i++) {
    hasil += `- Elemen ke-${i + 1}: "${paragrafList[i].innerText}"\n`;
  }
  displayOutput(hasil.trim());
}

// c. querySelector -> Mengambil elemen pertama yang cocok dengan CSS Selector
function testQuerySelector() {
  const firstBtn = document.querySelector('button.btn-action');
  displayOutput(`[querySelector('button.btn-action')]:\nMengambil elemen pertama: "${firstBtn.innerText}"`);
}

// d. querySelectorAll -> Mengambil SEMUA elemen yang cocok sebagai static NodeList
function testQueryAll() {
  const allBtns = document.querySelectorAll('.btn');
  let hasil = `[querySelectorAll('.btn')] - Ditemukan ${allBtns.length} tombol:\n`;
  allBtns.forEach((btn, index) => {
    hasil += `${index + 1}. ${btn.innerText}\n`;
  });
  displayOutput(hasil.trim());
}

// ------------------------------------------------------------------------------
// EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnQueryId')?.addEventListener('click', testGetById);
  document.getElementById('btnQueryClass')?.addEventListener('click', testGetByClass);
  document.getElementById('btnQuerySelector')?.addEventListener('click', testQuerySelector);
  document.getElementById('btnQueryAll')?.addEventListener('click', testQueryAll);
});
