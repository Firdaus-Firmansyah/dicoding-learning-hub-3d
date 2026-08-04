/**
 * ==============================================================================
 * PROYEK PERMAINAN TEBAK ANGKA '123'
 * Integrasi Local Storage & Session Storage
 * Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)
 * ==============================================================================
 */

// 1. Inisialisasi Elemen Dokumen DOM
const localTotalVictoryField = document.getElementById('local-total-victory-field');
const localMaximumAttemptField = document.getElementById('local-maximum-attempt-field');
const destroyDataButton = document.getElementById('destroy-data-button');

const playButton = document.getElementById('play-button');
const beforeGameDisplay = document.getElementById('before-game-display');
const duringGameDisplay = document.getElementById('during-game-display');
const afterGameDisplay = document.getElementById('after-game-display');

const answerButton1 = document.getElementById('answer-1-button');
const answerButton2 = document.getElementById('answer-2-button');
const answerButton3 = document.getElementById('answer-3-button');

const sessionUserAnswerField = document.getElementById('session-user-answer-field');
const sessionUserWrongAnswerField = document.getElementById('session-user-wrong-answer-field');
const sessionTrueAnswerField = document.getElementById('session-true-answer-field');
const sessionUserAttemptsField = document.getElementById('session-user-attempts-amount-field');

// 2. Inisialisasi Keys untuk Web Storage
const sessionAnswerKey = 'SESSION_ANSWER';
const sessionUserAttemptsKey = 'SESSION_USER_ATTEMPTS';
const sessionUserIsPlayingKey = 'SESSION_USER_IS_PLAYING';

const localTotalVictoryKey = 'LOCAL_TOTAL_VICTORIES_PLAYED';
const localMaximumAttemptsKey = 'LOCAL_MAXIMUM_ATTEMPTS';

// 3. Helper: Mengacak 3 digit kombinasi unik ('1', '2', '3')
function getAnswer() {
  let answer = '123'.split('');
  for (let i = 0; i < answer.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = answer[i];
    answer[i] = answer[j];
    answer[j] = tmp;
  }
  return answer.join('');
}

// 4. Inisialisasi Saat Halaman Selesai Dimuat (window load)
window.addEventListener('load', function () {
  if (typeof Storage !== 'undefined') {
    // Inisialisasi default Session Storage jika belum ada
    if (sessionStorage.getItem(sessionAnswerKey) === null) {
      sessionStorage.setItem(sessionAnswerKey, '');
    }
    if (sessionStorage.getItem(sessionUserAttemptsKey) === null) {
      sessionStorage.setItem(sessionUserAttemptsKey, 0);
    }
    if (sessionStorage.getItem(sessionUserIsPlayingKey) === null) {
      sessionStorage.setItem(sessionUserIsPlayingKey, false);
    }

    // Inisialisasi default Local Storage jika belum ada
    if (localStorage.getItem(localTotalVictoryKey) === null) {
      localStorage.setItem(localTotalVictoryKey, 0);
    }
    if (localStorage.getItem(localMaximumAttemptsKey) === null) {
      localStorage.setItem(localMaximumAttemptsKey, 0);
    }
  } else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
  }

  // Tampilkan nilai statistik dari Web Storage ke tampilan HTML
  sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey) || 0;
  localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey) || 0;
  localMaximumAttemptField.innerText = localStorage.getItem(localMaximumAttemptsKey) || 0;
});

// 5. Event Listener: Tombol Mulai Bermain
playButton.addEventListener('click', function () {
  // Generate kombinasi jawaban rahasia dan simpan ke sessionStorage
  sessionStorage.setItem(sessionAnswerKey, getAnswer());
  sessionStorage.setItem(sessionUserIsPlayingKey, true);

  // Switch Tampilan
  beforeGameDisplay.setAttribute('hidden', true);
  duringGameDisplay.removeAttribute('hidden');
  sessionUserAnswerField.innerText = '';
  sessionUserWrongAnswerField.innerText = '';
});

// 6. Helper: Memasukkan input angka tebakan
function handleInputDigit(digit) {
  // Jika masih placeholder '---', bersihkan dulu
  if (sessionUserAnswerField.innerText === '---') {
    sessionUserAnswerField.innerText = '';
  }

  // Tambahkan digit jika belum 3 karakter
  if (sessionUserAnswerField.innerText.length < 3) {
    sessionUserAnswerField.innerText += digit;
  }

  // Jika sudah genap 3 karakter, periksa jawaban
  if (sessionUserAnswerField.innerText.length === 3) {
    checkAnswer(sessionUserAnswerField.innerText);
  }
}

// 7. Event Listener: Tombol Tebakan 1, 2, 3
answerButton1.addEventListener('click', function () {
  handleInputDigit('1');
});

answerButton2.addEventListener('click', function () {
  handleInputDigit('2');
});

answerButton3.addEventListener('click', function () {
  handleInputDigit('3');
});

// 8. Fungsi: Validasi Jawaban User
function checkAnswer(userGuess) {
  const answer = sessionStorage.getItem(sessionAnswerKey);

  if (userGuess === answer) {
    // KONDISI MENANG:
    duringGameDisplay.setAttribute('hidden', true);
    afterGameDisplay.removeAttribute('hidden');
    sessionTrueAnswerField.innerText = answer;
    
    // Perbarui rekor di Local Storage
    updateScore();
  } else {
    // KONDISI SALAH TEBAK:
    const previousAttemptAmount = parseInt(sessionStorage.getItem(sessionUserAttemptsKey)) || 0;
    sessionStorage.setItem(sessionUserAttemptsKey, previousAttemptAmount + 1);

    // Update tampilan field tebakan salah
    sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
    sessionUserWrongAnswerField.innerText = `"${userGuess}" bukanlah jawabannya... Coba lagi!`;
    sessionUserAnswerField.innerText = '';
  }
}

// 9. Fungsi: Update Statistik Rekor di Local Storage
function updateScore() {
  const sessionAttemptsValue = parseInt(sessionStorage.getItem(sessionUserAttemptsKey)) || 0;
  const localAttemptsValue = parseInt(localStorage.getItem(localMaximumAttemptsKey)) || 0;

  // Jika percobaan salah sesi ini lebih tinggi dari rekor sebelumnya, simpan rekor baru
  if (sessionAttemptsValue > localAttemptsValue) {
    localStorage.setItem(localMaximumAttemptsKey, sessionAttemptsValue);
    localMaximumAttemptField.innerText = sessionAttemptsValue;
  }

  // Tambahkan 1 ke total kemenangan
  const previousTotalVictoryAmount = parseInt(localStorage.getItem(localTotalVictoryKey)) || 0;
  localStorage.setItem(localTotalVictoryKey, previousTotalVictoryAmount + 1);
  localTotalVictoryField.innerText = localStorage.getItem(localTotalVictoryKey);
}

// 10. Event Listener: Tombol Hapus Semua Data Storage
destroyDataButton.addEventListener('click', function () {
  const confirmClear = confirm('Apakah Anda yakin ingin menghapus seluruh data statistik permainan?');
  if (confirmClear) {
    sessionStorage.clear();
    localStorage.clear();

    // Reset nilai di storage ke default 0
    sessionStorage.setItem(sessionAnswerKey, '');
    sessionStorage.setItem(sessionUserAttemptsKey, 0);
    sessionStorage.setItem(sessionUserIsPlayingKey, false);
    localStorage.setItem(localTotalVictoryKey, 0);
    localStorage.setItem(localMaximumAttemptsKey, 0);

    // Update tampilan ke 0
    sessionUserAttemptsField.innerText = 0;
    localTotalVictoryField.innerText = 0;
    localMaximumAttemptField.innerText = 0;

    alert('Seluruh data Web Storage berhasil dibersihkan!');
  }
});

// 11. Event Listener: Reset data sesi saat tab / browser akan ditutup
window.addEventListener('beforeunload', function () {
  sessionUserAnswerField.innerText = '';
  sessionUserWrongAnswerField.innerText = '';
  sessionStorage.setItem(sessionUserAttemptsKey, 0);
  sessionUserAttemptsField.innerText = sessionStorage.getItem(sessionUserAttemptsKey);
});
