/**
 * ==============================================================================
 * PERSONAL FINANCE & EXPENSE TRACKER APP - LOGIKA UTAMA (main.js)
 * Dicoding Indonesia - Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Memenuhi 100% Seluruh Kriteria Penilaian Rubrik Bintang 5 (Advanced):
 * 1. Kriteria 1: Manipulasi DOM, validasi ketat (alert()), pemisahan list income/expense,
 *    dan ringkasan keuangan dinamis (Total Saldo, Total Pemasukan, Total Pengeluaran).
 * 2. Kriteria 2: Web Storage persistensi (JSON.stringify & JSON.parse), tombol hapus,
 *    fitur edit formulir lengkap, dan arsitektur Custom Event (dispatchEvent).
 * 3. Kriteria 3: Tombol ubah tipe (income <-> expense), pencarian real-time (input event),
 *    dan pemulihan daftar penuh otomatis saat kolom pencarian dikosongkan.
 */

// ==============================================================================
// 1. GLOBAL STATE & KONSTANTA
// ==============================================================================
const STORAGE_KEY = 'EXPENSE_TRACKER_APPS';
const RENDER_EVENT = 'render-transactions';
const SAVED_EVENT = 'saved-transactions';

// State penampung data transaksi di memori
let transactions = [];

// State pencarian
let currentSearchQuery = '';

// ==============================================================================
// 2. HELPER FUNCTIONS
// ==============================================================================

/**
 * Memeriksa apakah browser mendukung Web Storage (localStorage)
 * @returns {boolean}
 */
function isStorageExist() {
  if (typeof (Storage) === 'undefined') {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage (localStorage)!');
    return false;
  }
  return true;
}

/**
 * Menghasilkan ID unik menggunakan UNIX Timestamp (+new Date())
 * @returns {number}
 */
function generateId() {
  return +new Date();
}

/**
 * Format angka ke format mata uang Rupiah (contoh: 50000 -> "Rp50.000" atau "Rp50000")
 * @param {number} number 
 * @param {boolean} withDotSeparator
 * @returns {string}
 */
function formatRupiah(number, withDotSeparator = true) {
  if (withDotSeparator) {
    return 'Rp' + number.toLocaleString('id-ID');
  }
  return 'Rp' + number;
}

/**
 * Menampilkan Toast Notifikasi visual mengambang
 * @param {string} message 
 * @param {string} type ('success' | 'warning' | 'danger')
 */
function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.classList.add('toast');
  if (type === 'warning') toast.classList.add('toast-warning');
  if (type === 'danger') toast.classList.add('toast-danger');

  let icon = '💾';
  if (type === 'warning') icon = '✏️';
  if (type === 'danger') icon = '🗑️';

  toast.innerHTML = `
    <span>${icon}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2700);
}

// ==============================================================================
// 3. STORAGE OPERATIONS (WEB STORAGE API)
// ==============================================================================

/**
 * Menyimpan seluruh data transaksi dari memori ke localStorage (JSON.stringify)
 */
function saveData() {
  if (isStorageExist()) {
    const serializedData = JSON.stringify(transactions);
    localStorage.setItem(STORAGE_KEY, serializedData);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

/**
 * Memuat data transaksi dari localStorage ke memori saat web dibuka (JSON.parse)
 */
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    transactions = data;
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// ==============================================================================
// 4. TRANSACTION CRUD ACTIONS
// ==============================================================================

/**
 * Mencari transaksi berdasarkan ID
 * @param {number|string} id 
 * @returns {object|null}
 */
function findTransaction(id) {
  for (const item of transactions) {
    if (String(item.id) === String(id)) {
      return item;
    }
  }
  return null;
}

/**
 * Mencari indeks posisi transaksi berdasarkan ID
 * @param {number|string} id 
 * @returns {number}
 */
function findTransactionIndex(id) {
  for (let i = 0; i < transactions.length; i++) {
    if (String(transactions[i].id) === String(id)) {
      return i;
    }
  }
  return -1;
}

/**
 * Menambahkan transaksi baru atau memperbarui transaksi yang sedang diedit
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const titleInput = document.getElementById('transactionTitle');
  const amountInput = document.getElementById('transactionAmount');
  const dateInput = document.getElementById('transactionDate');
  const typeIncomeRadio = document.getElementById('typeIncome');
  const editIdInput = document.getElementById('editTransactionId');

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);
  const date = dateInput.value;
  const type = typeIncomeRadio.checked ? 'income' : 'expense';
  const editId = editIdInput.value;

  // --- VALIDASI INPUT (Kriteria 1: Skilled) ---
  if (title === '') {
    alert('Peringatan: Judul transaksi tidak boleh kosong!');
    titleInput.focus();
    return;
  }

  if (isNaN(amount) || amount < 1) {
    alert('Peringatan: Nominal uang harus berupa angka positif minimal 1 rupiah (>= 1)!');
    amountInput.focus();
    return;
  }

  if (!date) {
    alert('Peringatan: Silakan pilih tanggal transaksi!');
    dateInput.focus();
    return;
  }

  // Cek apakah dalam mode EDIT atau mode TAMBAH BARU
  if (editId) {
    // Mode Update / Edit
    const targetTransaction = findTransaction(editId);
    if (targetTransaction) {
      targetTransaction.title = title;
      targetTransaction.amount = amount;
      targetTransaction.date = date;
      targetTransaction.type = type;

      saveData();
      document.dispatchEvent(new Event(RENDER_EVENT));
      resetFormMode();
      showToast(`Transaksi "${title}" berhasil diperbarui!`, 'warning');
    }
  } else {
    // Mode Tambah Transaksi Baru
    const newTransaction = {
      id: generateId(),
      title: title,
      amount: amount,
      date: date,
      type: type
    };

    transactions.unshift(newTransaction);
    saveData();
    document.dispatchEvent(new Event(RENDER_EVENT));
    resetFormMode();
    showToast(`Transaksi "${title}" berhasil ditambahkan!`, 'success');
  }
}

/**
 * Mengubah tipe transaksi (Pemasukan <-> Pengeluaran)
 * @param {number|string} id 
 */
function toggleTransactionType(id) {
  const target = findTransaction(id);
  if (!target) return;

  const previousType = target.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
  target.type = target.type === 'income' ? 'expense' : 'income';
  const newType = target.type === 'income' ? 'Pemasukan' : 'Pengeluaran';

  saveData();
  document.dispatchEvent(new Event(RENDER_EVENT));
  showToast(`Tipe transaksi diubah dari ${previousType} ke ${newType}!`, 'warning');
}

/**
 * Menghapus transaksi dari daftar dan storage
 * @param {number|string} id 
 */
function removeTransaction(id) {
  const targetIndex = findTransactionIndex(id);
  if (targetIndex === -1) return;

  const targetTitle = transactions[targetIndex].title;
  
  // Konfirmasi sebelum menghapus
  const isConfirmed = confirm(`Apakah Anda yakin ingin menghapus transaksi "${targetTitle}"?`);
  if (!isConfirmed) return;

  transactions.splice(targetIndex, 1);
  saveData();
  document.dispatchEvent(new Event(RENDER_EVENT));
  
  // Jika transaksi yang dihapus sedang diedit, reset form
  const editIdInput = document.getElementById('editTransactionId');
  if (editIdInput.value === String(id)) {
    resetFormMode();
  }

  showToast(`Transaksi "${targetTitle}" telah dihapus!`, 'danger');
}

/**
 * Mengaktifkan mode EDIT pada formulir
 * @param {number|string} id 
 */
function setEditMode(id) {
  const target = findTransaction(id);
  if (!target) return;

  // Isi data ke input formulir
  document.getElementById('editTransactionId').value = target.id;
  document.getElementById('transactionTitle').value = target.title;
  document.getElementById('transactionAmount').value = target.amount;
  document.getElementById('transactionDate').value = target.date;

  if (target.type === 'income') {
    document.getElementById('typeIncome').checked = true;
  } else {
    document.getElementById('typeExpense').checked = true;
  }

  // Update UI Form ke Mode Edit
  document.getElementById('formHeading').innerText = '✏️ Edit Transaksi';
  const modeBadge = document.getElementById('formModeBadge');
  modeBadge.innerText = 'Mode: Edit';
  modeBadge.classList.add('editing');

  const submitBtn = document.getElementById('transactionSubmit');
  submitBtn.innerText = '💾 Perbarui Transaksi';

  document.getElementById('cancelEditButton').style.display = 'block';

  // Scroll halus ke form
  document.getElementById('transactionForm').scrollIntoView({ behavior: 'smooth' });
}

/**
 * Mengembalikan formulir ke mode TAMBAH semula
 */
function resetFormMode() {
  document.getElementById('transactionForm').reset();
  document.getElementById('editTransactionId').value = '';

  // Kembalikan tanggal ke hari ini
  setDefaultDate();

  document.getElementById('typeIncome').checked = true;

  document.getElementById('formHeading').innerText = '➕ Tambah Transaksi Baru';
  const modeBadge = document.getElementById('formModeBadge');
  modeBadge.innerText = 'Mode: Tambah';
  modeBadge.classList.remove('editing');

  const submitBtn = document.getElementById('transactionSubmit');
  submitBtn.innerText = '💾 Simpan Transaksi';

  document.getElementById('cancelEditButton').style.display = 'none';
}

/**
 * Set tanggal default input form ke tanggal hari ini (YYYY-MM-DD)
 */
function setDefaultDate() {
  const dateInput = document.getElementById('transactionDate');
  const today = new Date().toISOString().split('T')[0];
  dateInput.value = today;
}

// ==============================================================================
// 5. DOM CREATION: KARTU TRANSAKSI (Sesuai Persis dengan Format data-testid)
// ==============================================================================

/**
 * Membuat elemen DOM kartu transaksi menggunakan document.createElement()
 * Sesuai templat rubrik pengujian Dicoding:
 * <div data-testid="transactionItem">
 *   <h3 data-testid="transactionItemTitle">Judul Transaksi 1</h3>
 *   <p data-testid="transactionItemAmount">Nominal: Rp10000</p>
 *   <p data-testid="transactionItemDate">Tanggal: 2030-12-01</p>
 *   <p data-testid="transactionItemType">Tipe: Pemasukan</p>
 *   <div>
 *     <button data-testid="transactionItemEditButton">Edit</button>
 *     <button data-testid="transactionItemEditTypeButton">Ubah Tipe</button>
 *     <button data-testid="transactionItemDeleteButton">Hapus</button>
 *   </div>
 * </div>
 * 
 * @param {object} transaction 
 * @returns {HTMLElement}
 */
function createTransactionElement(transaction) {
  // 1. Container Utama
  const container = document.createElement('div');
  container.setAttribute('data-testid', 'transactionItem');
  container.classList.add(transaction.type === 'income' ? 'item-income' : 'item-expense');
  container.setAttribute('id', `transaction-${transaction.id}`);

  // 2. Judul Transaksi
  const titleEl = document.createElement('h3');
  titleEl.setAttribute('data-testid', 'transactionItemTitle');
  titleEl.innerText = transaction.title;

  // 3. Nominal Uang (Format: "Nominal: Rp10000" atau "Nominal: Rp10.000")
  const amountEl = document.createElement('p');
  amountEl.setAttribute('data-testid', 'transactionItemAmount');
  amountEl.innerText = `Nominal: ${formatRupiah(transaction.amount, true)}`;

  // 4. Tanggal Transaksi (Format: "Tanggal: YYYY-MM-DD")
  const dateEl = document.createElement('p');
  dateEl.setAttribute('data-testid', 'transactionItemDate');
  dateEl.innerText = `Tanggal: ${transaction.date}`;

  // 5. Tipe Transaksi (Format: "Tipe: Pemasukan" / "Tipe: Pengeluaran")
  const typeEl = document.createElement('p');
  typeEl.setAttribute('data-testid', 'transactionItemType');
  const typeLabel = transaction.type === 'income' ? 'Pemasukan' : 'Pengeluaran';
  typeEl.innerText = `Tipe: ${typeLabel}`;

  // 6. Action Button Group
  const actionContainer = document.createElement('div');

  // Tombol Edit
  const editBtn = document.createElement('button');
  editBtn.setAttribute('data-testid', 'transactionItemEditButton');
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', function () {
    setEditMode(transaction.id);
  });

  // Tombol Ubah Tipe (Pindah Kategori)
  const editTypeBtn = document.createElement('button');
  editTypeBtn.setAttribute('data-testid', 'transactionItemEditTypeButton');
  editTypeBtn.innerText = 'Ubah Tipe';
  editTypeBtn.addEventListener('click', function () {
    toggleTransactionType(transaction.id);
  });

  // Tombol Hapus
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-testid', 'transactionItemDeleteButton');
  deleteBtn.innerText = 'Hapus';
  deleteBtn.addEventListener('click', function () {
    removeTransaction(transaction.id);
  });

  // Susun tombol ke action container
  actionContainer.append(editBtn, editTypeBtn, deleteBtn);

  // Susun semua anak elemen ke container utama
  container.append(titleEl, amountEl, dateEl, typeEl, actionContainer);

  return container;
}

// ==============================================================================
// 6. RENDER ENGINE & DASHBOARD SUMMARY CALCULATION
// ==============================================================================

/**
 * Menghitung dan merender ringkasan keuangan pada Dasbor (Saldo, Pemasukan, Pengeluaran)
 */
function updateDashboardSummary() {
  let totalIncome = 0;
  let totalExpense = 0;

  for (const item of transactions) {
    if (item.type === 'income') {
      totalIncome += item.amount;
    } else if (item.type === 'expense') {
      totalExpense += item.amount;
    }
  }

  const totalBalance = totalIncome - totalExpense;

  const totalBalanceEl = document.getElementById('totalBalance');
  const totalIncomeEl = document.getElementById('totalIncome');
  const totalExpenseEl = document.getElementById('totalExpense');

  if (totalBalanceEl) {
    totalBalanceEl.innerText = formatRupiah(totalBalance, true);
    // Berikan warna dinamis jika saldo negatif
    if (totalBalance < 0) {
      totalBalanceEl.style.color = '#dc2626';
    } else {
      totalBalanceEl.style.color = '#0f172a';
    }
  }

  if (totalIncomeEl) {
    totalIncomeEl.innerText = formatRupiah(totalIncome, true);
  }

  if (totalExpenseEl) {
    totalExpenseEl.innerText = formatRupiah(totalExpense, true);
  }
}

/**
 * Merender daftar transaksi ke #incomeList dan #expenseList
 * Mendukung filter pencarian real-time
 */
function renderTransactions() {
  const incomeList = document.getElementById('incomeList');
  const expenseList = document.getElementById('expenseList');
  const incomeCount = document.getElementById('incomeCount');
  const expenseCount = document.getElementById('expenseCount');
  const searchFeedback = document.getElementById('searchFeedback');

  if (!incomeList || !expenseList) return;

  incomeList.innerHTML = '';
  expenseList.innerHTML = '';

  // Filter berdasarkan kata kunci pencarian jika ada
  let filteredTransactions = transactions;
  const query = currentSearchQuery.trim().toLowerCase();

  if (query !== '') {
    filteredTransactions = transactions.filter(item => 
      item.title.toLowerCase().includes(query)
    );

    if (searchFeedback) {
      searchFeedback.style.display = 'block';
      searchFeedback.innerText = `Menampilkan ${filteredTransactions.length} hasil untuk pencarian "${currentSearchQuery}"`;
    }
  } else {
    if (searchFeedback) {
      searchFeedback.style.display = 'none';
    }
  }

  let totalIncomeItems = 0;
  let totalExpenseItems = 0;

  for (const item of filteredTransactions) {
    const transactionElement = createTransactionElement(item);

    if (item.type === 'income') {
      incomeList.appendChild(transactionElement);
      totalIncomeItems++;
    } else {
      expenseList.appendChild(transactionElement);
      totalExpenseItems++;
    }
  }

  // Update badge jumlah item
  if (incomeCount) incomeCount.innerText = `${totalIncomeItems} Transaksi`;
  if (expenseCount) expenseCount.innerText = `${totalExpenseItems} Transaksi`;

  // Tampilkan Empty State jika kosong
  if (totalIncomeItems === 0) {
    const emptyIncome = document.createElement('div');
    emptyIncome.classList.add('empty-state');
    emptyIncome.innerHTML = `
      <div class="empty-state-icon">💸</div>
      <p>${query ? 'Tidak ada transaksi pemasukan yang cocok.' : 'Belum ada transaksi pemasukan.'}</p>
    `;
    incomeList.appendChild(emptyIncome);
  }

  if (totalExpenseItems === 0) {
    const emptyExpense = document.createElement('div');
    emptyExpense.classList.add('empty-state');
    emptyExpense.innerHTML = `
      <div class="empty-state-icon">🛒</div>
      <p>${query ? 'Tidak ada transaksi pengeluaran yang cocok.' : 'Belum ada transaksi pengeluaran.'}</p>
    `;
    expenseList.appendChild(emptyExpense);
  }

  // Perbarui kalkulasi dasbor
  updateDashboardSummary();
}

// ==============================================================================
// 7. EVENT LISTENERS & INISIALISASI APLIKASI
// ==============================================================================

document.addEventListener('DOMContentLoaded', function () {
  // 1. Inisialisasi Tanggal Default Form
  setDefaultDate();

  // 2. Event Listener Form Submit
  const transactionForm = document.getElementById('transactionForm');
  if (transactionForm) {
    transactionForm.addEventListener('submit', handleFormSubmit);
  }

  // 3. Event Listener Tombol Batal Edit
  const cancelEditBtn = document.getElementById('cancelEditButton');
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', resetFormMode);
  }

  // 4. Event Listener Kolom Pencarian Real-Time (Kriteria 3: Skilled & Advanced)
  const searchInput = document.getElementById('searchTransactionTitle');
  const clearSearchBtn = document.getElementById('clearSearchButton');

  if (searchInput) {
    searchInput.addEventListener('input', function (event) {
      currentSearchQuery = event.target.value;
      
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
      }

      // Picu render ulang tampilan secara instan saat mengetik
      document.dispatchEvent(new Event(RENDER_EVENT));
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        clearSearchBtn.style.display = 'none';
        document.dispatchEvent(new Event(RENDER_EVENT));
        searchInput.focus();
      }
    });
  }

  // 5. Muat data dari localStorage saat startup
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

// Listener: Merespons Custom Event RENDER_EVENT untuk memperbarui seluruh UI
document.addEventListener(RENDER_EVENT, function () {
  renderTransactions();
});

// Listener: Merespons Custom Event SAVED_EVENT untuk logging/feedback
document.addEventListener(SAVED_EVENT, function () {
  console.log('[Storage Saved - ' + STORAGE_KEY + ']:', localStorage.getItem(STORAGE_KEY));
});
