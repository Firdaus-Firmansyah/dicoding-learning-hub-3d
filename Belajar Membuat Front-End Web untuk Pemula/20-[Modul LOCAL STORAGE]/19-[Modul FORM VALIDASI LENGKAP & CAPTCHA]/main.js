/**
 * ==============================================================================
 * MODUL 19: INPUT EVENT - FORM VALIDASI LENGKAP & CAPTCHA (HASIL AKHIR)
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Modul ini merupakan integrasi menyeluruh dari seluruh materi Input Event:
 * 1. `DOMContentLoaded`: Inisialisasi sisa karakter awal dari atribut maxLength.
 * 2. `input`: Menghitung sisa karakter real-time & indikator visual warna merah jika sisa <= 5.
 * 3. `focus` & `blur`: Menampilkan / menyembunyikan notifikasi sisa karakter.
 * 4. `change`: Memvalidasi input captcha ('PRNU') untuk mengaktifkan/menonaktifkan tombol submit.
 * 5. `copy` & `paste`: Memberi umpan balik interaktif saat teks disalin/ditempel.
 * 6. `submit`: Mencegah reload halaman default (`event.preventDefault()`) & verifikasi akhir.
 */

document.addEventListener('DOMContentLoaded', () => {
  const inputNama = document.getElementById('inputNama');
  const sisaKarakter = document.getElementById('sisaKarakter');
  const notifikasiSisaKarakter = document.getElementById('notifikasiSisaKarakter');
  const inputCopy = document.getElementById('inputCopy');
  const inputPaste = document.getElementById('inputPaste');
  const inputCaptcha = document.getElementById('inputCaptcha');
  const submitButton = document.getElementById('submitButton');
  const formDataDiri = document.getElementById('formDataDiri');

  // 1. Inisialisasi awal saat halaman selesai dimuat
  if (inputNama && sisaKarakter) {
    const inputMaxLengthOnLoad = inputNama.maxLength;
    sisaKarakter.innerText = inputMaxLengthOnLoad;
  }

  // 2. Event Input: Live Character Counter
  inputNama?.addEventListener('input', () => {
    const jumlahKarakterDiketik = inputNama.value.length;
    const jumlahKarakterMaksimal = inputNama.maxLength;

    console.log('jumlahKarakterDiketik: ', jumlahKarakterDiketik);
    console.log('jumlahKarakterMaksimal: ', jumlahKarakterMaksimal);

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    sisaKarakter.innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      sisaKarakter.innerText = 'Batas maksimal tercapai!';
      notifikasiSisaKarakter.style.color = '#ef4444';
    } else if (sisaKarakterUpdate <= 5) {
      notifikasiSisaKarakter.style.color = '#ef4444';
    } else {
      notifikasiSisaKarakter.style.color = '#38bdf8';
    }
  });

  // 3. Event Focus pada Input Nama
  inputNama?.addEventListener('focus', () => {
    console.log('inputNama: focus');
    notifikasiSisaKarakter.style.visibility = 'visible';
  });

  // 4. Event Blur pada Input Nama
  inputNama?.addEventListener('blur', () => {
    console.log('inputNama: blur');
    notifikasiSisaKarakter.style.visibility = 'hidden';
  });

  // 5. Event Change pada Captcha
  inputCaptcha?.addEventListener('change', () => {
    console.log('inputCaptcha: change');
    const captchaValue = inputCaptcha.value.trim();

    if (captchaValue === 'PRNU') {
      submitButton?.removeAttribute('disabled');
    } else {
      submitButton?.setAttribute('disabled', '');
    }
  });

  // 6. Event Submit pada Form
  formDataDiri?.addEventListener('submit', (event) => {
    event.preventDefault();
    const captchaValue = inputCaptcha?.value.trim();

    if (captchaValue === 'PRNU') {
      alert('🎉 Selamat! Captcha Anda lolos dan data berhasil diproses :D');
    } else {
      alert('⚠️ Captcha Anda belum tepat :(');
      submitButton?.setAttribute('disabled', '');
    }
  });

  // 7. Event Copy
  inputCopy?.addEventListener('copy', () => {
    alert('Anda telah men-copy sesuatu...');
  });

  // 8. Event Paste
  inputPaste?.addEventListener('paste', () => {
    alert('Anda telah mem-paste sebuah teks...');
  });
});
