/**
 * ==============================================================================
 * MODUL 18: INPUT EVENT - ONCHANGE, ONCOPY, DAN ONPASTE
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * 1. Event `change`:
 *    Dipicu ketika nilai elemen form berubah dan elemen kehilangan fokus (atau tombol Enter ditekan).
 *    Cocok untuk validasi field (misal: verifikasi kode Captcha).
 * 
 * 2. Event `copy`:
 *    Dipicu ketika pengguna menyalin isi teks dari elemen.
 * 
 * 3. Event `paste`:
 *    Dipicu ketika pengguna menempelkan teks dari clipboard ke dalam elemen input.
 */

document.addEventListener('DOMContentLoaded', () => {
  const inputCaptcha = document.getElementById('inputCaptcha');
  const submitButton = document.getElementById('submitButton');
  const inputCopy = document.getElementById('inputCopy');
  const inputPaste = document.getElementById('inputPaste');
  const formDataDiri = document.getElementById('formDataDiri');
  const logBox = document.getElementById('eventLog');

  function updateLog(message) {
    console.log(message);
    if (logBox) logBox.innerText = `[Log]: ${message}`;
  }

  // 1. Event Change pada Captcha
  inputCaptcha?.addEventListener('change', () => {
    const value = inputCaptcha.value.trim();
    updateLog(`Event 'change' terpicu. Nilai captcha: "${value}"`);

    if (value === 'PRNU') {
      submitButton?.removeAttribute('disabled');
      updateLog('✅ Captcha benar! Tombol submit telah diaktifkan.');
    } else {
      submitButton?.setAttribute('disabled', '');
      updateLog('❌ Captcha salah atau belum lengkap. Tombol submit dinonaktifkan.');
    }
  });

  // 2. Event Copy pada input readonly
  inputCopy?.addEventListener('copy', () => {
    updateLog('📋 Anda telah men-copy teks dari kotak input!');
    alert('Anda telah men-copy sesuatu...');
  });

  // 3. Event Paste pada input target
  inputPaste?.addEventListener('paste', () => {
    updateLog('📥 Anda telah mem-paste sebuah teks ke dalam kotak input!');
    alert('Anda telah mem-paste sebuah teks...');
  });

  // 4. Event Submit Form
  formDataDiri?.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = inputCaptcha?.value.trim();

    if (value === 'PRNU') {
      alert('🎉 Selamat! Captcha Anda lolos dan form berhasil disubmit :D');
      updateLog('Form berhasil disubmit!');
    } else {
      alert('⚠️ Captcha Anda belum tepat :(');
      submitButton?.setAttribute('disabled', '');
    }
  });
});
