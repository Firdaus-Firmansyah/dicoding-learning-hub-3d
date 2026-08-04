/**
 * ==============================================================================
 * MODUL 03: METHOD PROMPT
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * `prompt()` digunakan untuk meminta input dari pengguna.
 * Karakteristik:
 * 1. Menghasilkan string dari apa yang diketik pengguna jika menekan tombol OK.
 * 2. Menghasilkan `null` jika pengguna menekan tombol Cancel atau menutup dialog.
 * 3. Menerima 2 argumen: prompt(pesan, nilaiDefaultOpsional).
 */

// ------------------------------------------------------------------------------
// 1. CONTOH-CONTOH PENERAPAN PROMPT
// ------------------------------------------------------------------------------

/**
 * Meminta input teks umum
 */
function handlePromptText() {
  const resultDisplay = document.getElementById('promptResult');
  const pesanInput = prompt('Masukkan pesan sesukamu...');

  if (pesanInput === null) {
    resultDisplay.innerText = 'Pengguna membatalkan input (menekan tombol Cancel).';
  } else if (pesanInput.trim() === '') {
    resultDisplay.innerText = 'Pengguna tidak memasukkan teks apa pun (string kosong).';
  } else {
    resultDisplay.innerText = `Pesan yang Anda masukkan: "${pesanInput}" (Tipe data: ${typeof pesanInput})`;
  }
}

/**
 * Meminta input angka dengan konversi Number()
 */
function handlePromptNumber() {
  const resultDisplay = document.getElementById('promptResult');
  const inputRaw = prompt('Silakan masukkan angka...');

  if (inputRaw === null) {
    resultDisplay.innerText = 'Input dibatalkan.';
    return;
  }

  const angka = Number(inputRaw);
  if (isNaN(angka)) {
    resultDisplay.innerText = `Input "${inputRaw}" bukan angka yang valid (NaN).`;
  } else {
    resultDisplay.innerText = `Angka: ${angka} | Kuadrat: ${angka * angka} (Tipe data: ${typeof angka})`;
  }
}

/**
 * Meminta input dengan default value
 */
function handlePromptDefault() {
  const resultDisplay = document.getElementById('promptResult');
  const name = prompt('Silakan masukkan nama Anda!', 'John Doe');

  if (name === null) {
    resultDisplay.innerText = 'Input nama dibatalkan.';
  } else {
    resultDisplay.innerText = `Halo, ${name}! Selamat datang di kelas Front-End Web!`;
  }
}

// ------------------------------------------------------------------------------
// 2. MENGHUBUNGKAN KE TOMBOL UI
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const btnPromptText = document.getElementById('btnPromptText');
  const btnPromptNumber = document.getElementById('btnPromptNumber');
  const btnPromptDefault = document.getElementById('btnPromptDefault');

  if (btnPromptText) btnPromptText.addEventListener('click', handlePromptText);
  if (btnPromptNumber) btnPromptNumber.addEventListener('click', handlePromptNumber);
  if (btnPromptDefault) btnPromptDefault.addEventListener('click', handlePromptDefault);
});
