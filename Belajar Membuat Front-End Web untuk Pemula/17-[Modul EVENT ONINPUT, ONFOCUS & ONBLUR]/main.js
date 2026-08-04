/**
 * ==============================================================================
 * MODUL 17: INPUT EVENT - ONINPUT, ONFOCUS, DAN ONBLUR
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * 1. Event `focus`:
 *    Dipicu ketika elemen input menerima fokus kursor.
 *    Tindakan: Menampilkan notifikasi sisa karakter (`visibility = 'visible'`).
 * 
 * 2. Event `input`:
 *    Dipicu setiap kali karakter diketik atau dihapus.
 *    Tindakan: Menghitung sisa karakter secara dinamis dan memberi warna merah jika <= 5.
 * 
 * 3. Event `blur`:
 *    Dipicu ketika elemen input kehilangan fokus kursor (pengguna mengklik area lain).
 *    Tindakan: Menyembunyikan notifikasi sisa karakter (`visibility = 'hidden'`).
 */

document.addEventListener('DOMContentLoaded', () => {
  const inputNama = document.getElementById('inputNama');
  const sisaKarakterSpan = document.getElementById('sisaKarakter');
  const notifikasiSisaKarakter = document.getElementById('notifikasiSisaKarakter');

  if (!inputNama || !sisaKarakterSpan || !notifikasiSisaKarakter) return;

  // Inisialisasi awal
  const inputMaxLengthOnLoad = inputNama.maxLength;
  sisaKarakterSpan.innerText = inputMaxLengthOnLoad;

  // 1. Event Input: Real-time Character Counter
  inputNama.addEventListener('input', () => {
    const jumlahKarakterDiketik = inputNama.value.length;
    const jumlahKarakterMaksimal = inputNama.maxLength;

    const sisaKarakterUpdate = jumlahKarakterMaksimal - jumlahKarakterDiketik;
    sisaKarakterSpan.innerText = sisaKarakterUpdate.toString();

    if (sisaKarakterUpdate === 0) {
      sisaKarakterSpan.innerText = 'Batas maksimal tercapai!';
      notifikasiSisaKarakter.style.color = '#ef4444'; // Merah
    } else if (sisaKarakterUpdate <= 5) {
      notifikasiSisaKarakter.style.color = '#ef4444'; // Peringatan Merah
    } else {
      notifikasiSisaKarakter.style.color = '#38bdf8'; // Normal Biru
    }
  });

  // 2. Event Focus: Tampilkan Notifikasi
  inputNama.addEventListener('focus', () => {
    notifikasiSisaKarakter.style.visibility = 'visible';
  });

  // 3. Event Blur: Sembunyikan Notifikasi
  inputNama.addEventListener('blur', () => {
    notifikasiSisaKarakter.style.visibility = 'hidden';
  });
});
