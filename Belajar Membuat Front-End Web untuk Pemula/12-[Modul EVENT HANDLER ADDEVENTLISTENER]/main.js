/**
 * ==============================================================================
 * MODUL 12: EVENT HANDLER DENGAN ADDEVENTLISTENER()
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * `addEventListener()` adalah metode standar industri paling fleksibel untuk
 * mengaitkan event handler ke elemen DOM.
 * 
 * Keunggulan utama `addEventListener`:
 * 1. Mendukung banyak event listener pada satu elemen untuk jenis event yang sama.
 * 2. Mendukung kontrol fase propagasi event (bubbling vs capturing).
 * 3. Memudahkan pelepasan event listener dengan `removeEventListener()`.
 */

// ------------------------------------------------------------------------------
// 1. IMPLEMENTASI COUNTER DENGAN ADDEVENTLISTENER
// ------------------------------------------------------------------------------

function welcome() {
  const contents = document.querySelector('.contents');
  if (contents) {
    contents.removeAttribute('hidden');
  }
}

function increment() {
  const countSpan = document.getElementById('count');
  let currentCount = parseInt(countSpan.innerText, 10);
  currentCount++;
  countSpan.innerText = currentCount;

  if (currentCount === 7) {
    const rewardContainer = document.getElementById('rewardContainer');
    if (rewardContainer && rewardContainer.children.length === 0) {
      const rewardBox = document.createElement('div');
      rewardBox.className = 'reward-box';

      const hiddenMessage = document.createElement('h4');
      hiddenMessage.innerText = '🎉 Selamat! Anda menemukan hadiah tersembunyi...';
      hiddenMessage.style.color = '#10b981';

      const image = document.createElement('img');
      image.setAttribute('src', 'https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg');
      image.setAttribute('alt', 'Catto Mascot');

      rewardBox.appendChild(hiddenMessage);
      rewardBox.appendChild(image);
      rewardContainer.appendChild(rewardBox);
    }
  }
}

// ------------------------------------------------------------------------------
// 2. DEMO PERBANDINGAN ONCLICK VS ADDEVENTLISTENER
// ------------------------------------------------------------------------------

function aksiA() {
  alert('Aksi A terpanggil!');
}

function aksiB() {
  alert('Aksi B terpanggil!');
}

function setupComparisonDemo() {
  const btnOnclick = document.getElementById('btnDemoOnclick');
  const btnListener = document.getElementById('btnDemoListener');

  if (btnOnclick) {
    // Dengan onclick, aksiA akan tertimpa oleh aksiB sehingga HANYA aksiB yang jalan
    btnOnclick.onclick = aksiA;
    btnOnclick.onclick = aksiB;
  }

  if (btnListener) {
    // Dengan addEventListener, kedua fungsi aksiA dan aksiB akan dieksekusi berurutan
    btnListener.addEventListener('click', aksiA);
    btnListener.addEventListener('click', aksiB);
  }
}

// ------------------------------------------------------------------------------
// 3. DAFTARKAN EVENT LISTENER KETIKA HALAMAN DIMUAT
// ------------------------------------------------------------------------------
window.addEventListener('load', () => {
  welcome();
  setupComparisonDemo();

  const incrementBtn = document.getElementById('incrementButton');
  if (incrementBtn) {
    incrementBtn.addEventListener('click', increment);
  }
});
