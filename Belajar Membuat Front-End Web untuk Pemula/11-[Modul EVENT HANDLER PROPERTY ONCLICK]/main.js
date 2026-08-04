/**
 * ==============================================================================
 * MODUL 11: EVENT HANDLER PROPERTY (ONCLICK)
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Melalui properti JavaScript seperti `element.onclick`, kita dapat menetapkan fungsi
 * callback untuk dieksekusi saat elemen diklik.
 */

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

  // Menampilkan kejutan saat mencapai hitungan ke-7
  if (currentCount === 7) {
    const rewardContainer = document.getElementById('rewardContainer');
    if (rewardContainer && rewardContainer.children.length === 0) {
      const rewardBox = document.createElement('div');
      rewardBox.className = 'reward-box';

      const hiddenMessage = document.createElement('h4');
      hiddenMessage.innerText = '🎉 Selamat! Anda menemukan hadiah tersembunyi...';
      hiddenMessage.style.color = '#10b981';

      const image = document.createElement('img');
      image.setAttribute(
        'src',
        'https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg',
      );
      image.setAttribute('alt', 'Cute Catto');

      rewardBox.appendChild(hiddenMessage);
      rewardBox.appendChild(image);
      rewardContainer.appendChild(rewardBox);
    }
  }
}

// ------------------------------------------------------------------------------
// MENETAPKAN EVENT HANDLER MELALUI PROPERTI DOM
// ------------------------------------------------------------------------------
document.body.onload = welcome;
document.getElementById('incrementButton').onclick = increment;
