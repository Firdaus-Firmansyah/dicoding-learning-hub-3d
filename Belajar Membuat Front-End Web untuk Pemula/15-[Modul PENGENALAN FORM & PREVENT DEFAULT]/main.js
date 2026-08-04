/**
 * ==============================================================================
 * MODUL 15: PENGENALAN KE FORM & PREVENT DEFAULT
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Secara default, ketika elemen `<form>` disubmit, browser akan mengirimkan request HTTP
 * dan me-reload seluruh halaman.
 * 
 * Untuk Single Page Application (SPA) dan manipulasi front-end modern:
 * Kita menggunakan `event.preventDefault()` pada event listener `submit`
 * untuk mencegah reload default dan memproses data secara instan di sisi klien.
 */

document.addEventListener('DOMContentLoaded', () => {
  const submitAction = document.getElementById('formDataDiri');

  if (submitAction) {
    submitAction.addEventListener('submit', (event) => {
      // 1. Mencegah browser me-reload halaman web
      event.preventDefault();

      // 2. Mengambil nilai dari input form
      const inputNama = document.getElementById('inputNama')?.value;
      const inputDomisili = document.getElementById('inputDomisili')?.value;

      // 3. Menampilkan pesan balasan interaktif
      const hiddenMessage = `Halo, ${inputNama}! Bagaimana kabar cuaca hari ini di ${inputDomisili}? 🌤️`;
      const messageElement = document.getElementById('messageAfterSubmit');

      if (messageElement) {
        messageElement.innerText = hiddenMessage;
      }

      console.log('[Form Submitted]:', { nama: inputNama, domisili: inputDomisili });
    });
  }
});
