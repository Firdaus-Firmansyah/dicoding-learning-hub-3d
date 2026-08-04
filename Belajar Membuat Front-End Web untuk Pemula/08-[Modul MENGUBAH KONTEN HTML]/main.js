/**
 * ==============================================================================
 * MODUL 08: MENGUBAH KONTEN & ATRIBUT HTML (STUDI KASUS CUBE WORLD)
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Modul ini mempraktikkan manipulasi DOM tingkat lanjut:
 * 1. Mengubah teks dan struktur HTML (`innerText`, `innerHTML`).
 * 2. Mengubah nilai atribut (`setAttribute`, `removeAttribute`).
 * 3. Memodifikasi style secara langsung melalui JavaScript (`element.style`).
 */

function ubahKontenCubeWorld() {
  // 1. Mengubah judul dan caption
  const judul = document.getElementById('judul');
  const caption = document.getElementById('caption');
  
  if (judul) judul.innerText = '🔥 Welcome to the Ultimate Cube World! 🔥';
  if (caption) {
    caption.innerHTML = '<i>Tantangan dimulai! Pecahkan kubus rubik ini dalam waktu tercepat!</i>';
    caption.style.color = '#38bdf8';
  }

  // 2. Mengubah teks link Dicoding
  const dicodingLink = document.getElementById('dicodingLink');
  if (dicodingLink) {
    dicodingLink.innerText = 'Belajar Pemrograman Web di Dicoding Academy';
  }

  // 3. Mengaktifkan tombol Play (menghapus atribut disabled)
  const btnPlay = document.getElementById('btnPlay');
  if (btnPlay) {
    btnPlay.removeAttribute('disabled');
    btnPlay.innerText = '▶ Play Now!';
    btnPlay.style.backgroundColor = '#10b981';
  }
}

function resetKontenCubeWorld() {
  const judul = document.getElementById('judul');
  const caption = document.getElementById('caption');
  const dicodingLink = document.getElementById('dicodingLink');
  const btnPlay = document.getElementById('btnPlay');

  if (judul) judul.innerText = 'Its Cube Time!';
  if (caption) {
    caption.innerHTML = '<b>Sudah siap untuk memecahkan teka-teki permainan tersebut?</b>';
    caption.style.color = 'var(--text)';
  }
  if (dicodingLink) dicodingLink.innerText = 'Dicoding';
  if (btnPlay) {
    btnPlay.setAttribute('disabled', 'disabled');
    btnPlay.innerText = 'Play (Coming Soon)';
    btnPlay.style.backgroundColor = '#475569';
  }
}

// ------------------------------------------------------------------------------
// EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnUbahKonten')?.addEventListener('click', ubahKontenCubeWorld);
  document.getElementById('btnResetKonten')?.addEventListener('click', resetKontenCubeWorld);
});
