/**
 * ==============================================================================
 * MODUL 13: CUSTOM EVENT
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Custom Event memungkinkan kita membuat nama event buatan sendiri di luar event bawaan browser
 * (seperti 'click', 'load', 'submit').
 * 
 * 3 Langkah Utama:
 * 1. Membuat Event: `const myEvent = new Event('namaEventKustom');`
 * 2. Mendaftarkan Listener: `targetElement.addEventListener('namaEventKustom', callback);`
 * 3. Membangkitkan Event: `targetElement.dispatchEvent(myEvent);`
 */

// 1. Mendefinisikan instance Custom Event
const changeCaption = new Event('changeCaption');

// 2. Fungsi Handler untuk Custom Event
function customEventHandler(ev) {
  const message = `[Event Triggered]: Event "${ev.type}" berhasil dijalankan pada target #${ev.target.id}!`;
  console.log(message);

  const caption = document.getElementById('caption');
  if (caption) {
    caption.innerText = '🎉 Anda telah berhasil membangkitkan Custom Event!';
    caption.style.color = '#10b981';
  }

  const logBox = document.getElementById('eventLog');
  if (logBox) {
    logBox.innerText = message;
  }
}

// 3. Reset State
function resetCaption() {
  const caption = document.getElementById('caption');
  if (caption) {
    caption.innerText = 'Silakan tekan tombol di bawah untuk membangkitkan Custom Event...';
    caption.style.color = '#38bdf8';
  }
  const logBox = document.getElementById('eventLog');
  if (logBox) {
    logBox.innerText = '[Console Log]: Menunggu event dipicu...';
  }
}

// 4. Mendaftarkan Event Listener saat halaman selesai dimuat
window.addEventListener('load', () => {
  const tombol = document.getElementById('tombol');
  const btnReset = document.getElementById('btnReset');

  if (tombol) {
    // Daftarkan listener untuk Custom Event 'changeCaption'
    tombol.addEventListener('changeCaption', customEventHandler);

    // Saat tombol diklik secara fisik, kita bangkitkan custom event via dispatchEvent
    tombol.addEventListener('click', () => {
      tombol.dispatchEvent(changeCaption);
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', resetCaption);
  }
});
