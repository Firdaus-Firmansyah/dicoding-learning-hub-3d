/**
 * ==============================================================================
 * MODUL 14: EVENT BUBBLING & CAPTURING
 * Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * 1. Event Bubbling (Default Browser Phase):
 *    Event dipicu dari elemen terdalam (child terkecil yang diklik) merambat NAIK
 *    ke parent, grandparent, hingga ke root document:
 *    [DALAM -> TENGAH -> LUAR -> LANGIT]
 * 
 * 2. Event Capturing (Trickling Phase):
 *    Event dipicu dari elemen terluar (ancestor) TURUN ke child terdalam.
 *    Dijalankan dengan menambahkan argumen ketiga `true` (useCapture: true):
 *    `element.addEventListener('click', handler, true)`:
 *    [LANGIT -> LUAR -> TENGAH -> DALAM]
 * 
 * 3. Stop Propagation:
 *    Menghentikan aliran propagasi event agar tidak merambat ke elemen lain
 *    menggunakan method `event.stopPropagation()`.
 */

let currentMode = 'bubbling';
const logBox = document.getElementById('propagationLog');
let eventSequence = [];

function appendLog(text) {
  eventSequence.push(text);
  if (logBox) {
    logBox.innerHTML = eventSequence.map((msg, idx) => `<div>${idx + 1}. ${msg}</div>`).join('');
  }
}

function clearLog() {
  eventSequence = [];
  if (logBox) {
    logBox.innerText = 'Log dibersihkan. Klik salah satu kotak di atas...';
  }
}

// Handler untuk masing-masing div
function handleDivClick(event, divElement) {
  const elementId = divElement.id.toUpperCase();
  const targetId = event.target.id.toUpperCase();
  
  if (currentMode === 'stopPropagation') {
    event.stopPropagation();
    appendLog(`🛑 [Stop Propagation]: ELEMEN ${elementId} (Propagasi dihentikan di sini!)`);
    alert(`ELEMEN ${elementId} (stopPropagation)`);
  } else if (currentMode === 'capturing') {
    appendLog(`⬇️ [Capturing Top-Down]: ELEMEN ${elementId}`);
    console.log(`Capturing: ELEMEN ${elementId}`);
  } else {
    // Bubbling
    appendLog(`⬆️ [Bubbling Bottom-Up]: ELEMEN ${elementId}`);
    console.log(`Bubbling: ELEMEN ${elementId}`);
  }
}

function attachListeners() {
  const divIds = ['langit', 'luar', 'tengah', 'dalam'];
  
  divIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Clone element to wipe old event listeners cleanly
    const newEl = el.cloneNode(true);
    el.parentNode.replaceChild(newEl, el);
  });

  // Pasang ulang listener sesuai mode yang dipilih
  const useCapture = currentMode === 'capturing';
  const updatedDivs = ['langit', 'luar', 'tengah', 'dalam'].map((id) => document.getElementById(id));

  updatedDivs.forEach((div) => {
    if (!div) return;
    div.addEventListener(
      'click',
      (e) => {
        handleDivClick(e, div);
      },
      useCapture
    );
  });
}

function setMode(mode) {
  currentMode = mode;
  clearLog();

  document.querySelectorAll('.mode-btn').forEach((btn) => btn.classList.remove('active'));

  if (mode === 'bubbling') {
    document.getElementById('btnModeBubbling')?.classList.add('active');
  } else if (mode === 'capturing') {
    document.getElementById('btnModeCapturing')?.classList.add('active');
  } else if (mode === 'stopPropagation') {
    document.getElementById('btnModeStopPropagation')?.classList.add('active');
  }

  attachListeners();
}

// Inisialisasi awal
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btnModeBubbling')?.addEventListener('click', () => setMode('bubbling'));
  document.getElementById('btnModeCapturing')?.addEventListener('click', () => setMode('capturing'));
  document.getElementById('btnModeStopPropagation')?.addEventListener('click', () => setMode('stopPropagation'));
  document.getElementById('btnClearLog')?.addEventListener('click', clearLog);

  attachListeners();
});
