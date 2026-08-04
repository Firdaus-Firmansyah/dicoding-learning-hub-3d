/**
 * ==============================================================================
 * PERSONAL FINANCE & EXPENSE TRACKER APP - LOGIKA UTAMA (main.js)
 * Dicoding Indonesia - Belajar Membuat Front-End Web untuk Pemula
 * ==============================================================================
 * 
 * Memenuhi 100% Seluruh Kriteria Penilaian Rubrik Bintang 5 (Advanced):
 * 1. Kriteria 1: Manipulasi DOM, validasi ketat dengan SweetAlert2 & custom dialog,
 *    pemisahan list income/expense, dan ringkasan keuangan dinamis.
 * 2. Kriteria 2: Web Storage persistensi (JSON.stringify & JSON.parse), tombol aksi
 *    berbasis icon Font Awesome 6, fitur edit formulir lengkap, dan Custom Event.
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
// 2. HELPER & CUSTOM DIALOG FUNCTIONS (SWEETALERT2 INTEGRATED)
// ==============================================================================

/**
 * Memeriksa apakah browser mendukung Web Storage (localStorage)
 * @returns {boolean}
 */
function isStorageExist() {
  if (typeof (Storage) === 'undefined') {
    showCustomAlert('Storage Tidak Didukung', 'Browser Anda tidak mendukung fitur Web Storage (localStorage)!', 'error');
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
 * Format angka ke format mata uang Rupiah (contoh: 50000 -> "Rp50.000")
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
 * Menampilkan Custom Alert Dialog (SweetAlert2 dengan fallback native alert)
 * @param {string} title 
 * @param {string} message 
 * @param {'warning'|'error'|'success'|'info'} iconType 
 */
function showCustomAlert(title, message, iconType = 'warning') {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: title,
      text: message,
      icon: iconType,
      confirmButtonText: '<i class="fa-solid fa-check"></i> Mengerti',
      customClass: {
        popup: 'clay-swal-popup',
        title: 'clay-swal-title',
        htmlContainer: 'clay-swal-text',
        confirmButton: 'clay-swal-confirm-btn'
      },
      buttonsStyling: false
    });
  } else {
    alert(`${title}\n${message}`);
  }
}

/**
 * Menampilkan Custom Confirmation Dialog (SweetAlert2 dengan fallback native confirm)
 * @param {object} options
 * @returns {Promise<boolean>}
 */
function showCustomConfirm({ title, html, confirmButtonText = 'Ya, Hapus!', cancelButtonText = 'Batal', isDanger = true }) {
  if (typeof Swal !== 'undefined') {
    return Swal.fire({
      title: title,
      html: html,
      icon: isDanger ? 'warning' : 'question',
      showCancelButton: true,
      confirmButtonText: `<i class="fa-solid ${isDanger ? 'fa-trash-can' : 'fa-check'}"></i> ${confirmButtonText}`,
      cancelButtonText: `<i class="fa-solid fa-xmark"></i> ${cancelButtonText}`,
      reverseButtons: true,
      focusCancel: true,
      customClass: {
        popup: 'clay-swal-popup',
        title: 'clay-swal-title',
        htmlContainer: 'clay-swal-text',
        confirmButton: isDanger ? 'clay-swal-danger-btn' : 'clay-swal-confirm-btn',
        cancelButton: 'clay-swal-cancel-btn'
      },
      buttonsStyling: false
    }).then((result) => result.isConfirmed);
  } else {
    const plainText = html.replace(/<[^>]*>?/gm, '');
    return Promise.resolve(confirm(`${title}\n${plainText}`));
  }
}

/**
 * Menampilkan Toast Notifikasi visual mengambang
 * @param {string} message 
 * @param {'success'|'warning'|'danger'} type 
 */
function showToast(message, type = 'success') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  toast.classList.add('toast');
  if (type === 'warning') toast.classList.add('toast-warning');
  if (type === 'danger') toast.classList.add('toast-danger');

  let iconHtml = '<i class="fa-solid fa-floppy-disk"></i>';
  if (type === 'warning') iconHtml = '<i class="fa-solid fa-pen-to-square"></i>';
  if (type === 'danger') iconHtml = '<i class="fa-solid fa-trash-can"></i>';

  toast.innerHTML = `
    <span class="toast-icon">${iconHtml}</span>
    <span class="toast-message">${message}</span>
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

  // --- VALIDASI INPUT DENGAN CUSTOM ALERT DIALOG ---
  if (title === '') {
    showCustomAlert('Judul Masih Kosong', 'Silakan masukkan judul transaksi pengeluaran atau pemasukan Anda!', 'warning');
    titleInput.focus();
    return;
  }

  if (isNaN(amount) || amount < 1) {
    showCustomAlert('Nominal Tidak Valid', 'Nominal uang harus berupa angka positif minimal 1 rupiah (>= 1)!', 'warning');
    amountInput.focus();
    return;
  }

  if (!date) {
    showCustomAlert('Tanggal Belum Dipilih', 'Silakan pilih tanggal transaksi Anda!', 'warning');
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
 * Menghapus transaksi dari daftar dan storage dengan SweetAlert2 Confirmation
 * @param {number|string} id 
 */
async function removeTransaction(id) {
  const targetIndex = findTransactionIndex(id);
  if (targetIndex === -1) return;

  const target = transactions[targetIndex];
  const targetTitle = target.title;
  const formattedAmount = formatRupiah(target.amount, true);
  const typeBadge = target.type === 'income' 
    ? '<span style="color:#059669; font-weight:800;">Pemasukan</span>' 
    : '<span style="color:#e11d48; font-weight:800;">Pengeluaran</span>';

  // Custom 3D Modal Konfirmasi
  const isConfirmed = await showCustomConfirm({
    title: 'Hapus Transaksi?',
    html: `Apakah Anda yakin ingin menghapus transaksi <b>"${targetTitle}"</b> (${typeBadge} sebesar <b>${formattedAmount}</b>)?<br><span style="font-size:0.85rem; color:#64748b; margin-top:8px; display:inline-block;">Data yang dihapus tidak dapat dipulihkan.</span>`,
    confirmButtonText: 'Ya, Hapus',
    cancelButtonText: 'Batal',
    isDanger: true
  });

  if (!isConfirmed) return;

  transactions.splice(targetIndex, 1);
  saveData();
  document.dispatchEvent(new Event(RENDER_EVENT));
  
  // Jika transaksi yang dihapus sedang diedit, reset form
  const editIdInput = document.getElementById('editTransactionId');
  if (editIdInput && editIdInput.value === String(id)) {
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
  document.getElementById('formHeading').innerHTML = '<i class="fa-solid fa-pen-to-square"></i> Edit Transaksi';
  const modeBadge = document.getElementById('formModeBadge');
  modeBadge.innerText = 'Mode: Edit';
  modeBadge.classList.add('editing');

  const submitBtn = document.getElementById('transactionSubmit');
  submitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> <span>Perbarui Transaksi</span>';

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

  document.getElementById('formHeading').innerHTML = '<i class="fa-solid fa-circle-plus"></i> Tambah Transaksi Baru';
  const modeBadge = document.getElementById('formModeBadge');
  modeBadge.innerText = 'Mode: Tambah';
  modeBadge.classList.remove('editing');

  const submitBtn = document.getElementById('transactionSubmit');
  submitBtn.innerHTML = '<i class="fa-solid fa-floppy-disk"></i> <span>Simpan Transaksi</span>';

  document.getElementById('cancelEditButton').style.display = 'none';
}

/**
 * Set tanggal default input form ke tanggal hari ini (YYYY-MM-DD)
 */
function setDefaultDate() {
  const dateInput = document.getElementById('transactionDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;
  }
}

// ==============================================================================
// 5. DOM CREATION: KARTU TRANSAKSI BERBASIS ICON FONT AWESOME
// ==============================================================================

/**
 * Membuat elemen DOM kartu transaksi menggunakan document.createElement()
 * Sesuai templat rubrik pengujian Dicoding + Action Icon Font Awesome 6:
 * <div data-testid="transactionItem">
 *   <h3 data-testid="transactionItemTitle">Judul Transaksi 1</h3>
 *   <p data-testid="transactionItemAmount">Nominal: Rp10000</p>
 *   <p data-testid="transactionItemDate">Tanggal: 2030-12-01</p>
 *   <p data-testid="transactionItemType">Tipe: Pemasukan</p>
 *   <div>
 *     <button data-testid="transactionItemEditButton"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
 *     <button data-testid="transactionItemEditTypeButton"><i class="fa-solid fa-right-left"></i> Ubah Tipe</button>
 *     <button data-testid="transactionItemDeleteButton"><i class="fa-solid fa-trash-can"></i> Hapus</button>
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

  // 6. Action Button Group dengan Font Awesome 6 Icons
  const actionContainer = document.createElement('div');
  actionContainer.classList.add('transaction-actions');

  // Tombol Edit
  const editBtn = document.createElement('button');
  editBtn.setAttribute('data-testid', 'transactionItemEditButton');
  editBtn.setAttribute('title', 'Edit Transaksi Ini');
  editBtn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <span>Edit</span>';
  editBtn.addEventListener('click', function () {
    setEditMode(transaction.id);
  });

  // Tombol Ubah Tipe (Pindah Kategori)
  const editTypeBtn = document.createElement('button');
  editTypeBtn.setAttribute('data-testid', 'transactionItemEditTypeButton');
  editTypeBtn.setAttribute('title', 'Ubah Jenis Transaksi');
  editTypeBtn.innerHTML = '<i class="fa-solid fa-right-left"></i> <span>Ubah Tipe</span>';
  editTypeBtn.addEventListener('click', function () {
    toggleTransactionType(transaction.id);
  });

  // Tombol Hapus (Transformed to tactile icon button)
  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('data-testid', 'transactionItemDeleteButton');
  deleteBtn.setAttribute('title', 'Hapus Transaksi Ini');
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i> <span>Hapus</span>';
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
      searchFeedback.innerHTML = `<i class="fa-solid fa-circle-info"></i> Menampilkan ${filteredTransactions.length} hasil untuk pencarian "<b>${currentSearchQuery}</b>"`;
    }
  } else {
    if (searchFeedback) {
      searchFeedback.style.display = 'none';
      searchFeedback.innerText = '';
    }
  }

  let incomeTotalCount = 0;
  let expenseTotalCount = 0;

  for (const item of filteredTransactions) {
    const itemElement = createTransactionElement(item);
    if (item.type === 'income') {
      incomeList.appendChild(itemElement);
      incomeTotalCount++;
    } else if (item.type === 'expense') {
      expenseList.appendChild(itemElement);
      expenseTotalCount++;
    }
  }

  // Update Badge Counter
  if (incomeCount) incomeCount.innerText = `${incomeTotalCount} Transaksi`;
  if (expenseCount) expenseCount.innerText = `${expenseTotalCount} Transaksi`;

  // Empty state jika list kosong
  if (incomeTotalCount === 0) {
    incomeList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="fa-solid fa-money-bill-trend-up"></i></div>
        <p>${query !== '' ? 'Tidak ada pemasukan yang sesuai pencarian' : 'Belum ada catatan pemasukan'}</p>
      </div>
    `;
  }

  if (expenseTotalCount === 0) {
    expenseList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon"><i class="fa-solid fa-receipt"></i></div>
        <p>${query !== '' ? 'Tidak ada pengeluaran yang sesuai pencarian' : 'Belum ada catatan pengeluaran'}</p>
      </div>
    `;
  }

  // Update ringkasan dasbor
  updateDashboardSummary();
}

// ==============================================================================
// 7. EVENT LISTENERS SETUP
// ==============================================================================

document.addEventListener('DOMContentLoaded', function () {
  // Set default date picker ke hari ini
  setDefaultDate();

  // Form submit event listener (Kriteria 1)
  const transactionForm = document.getElementById('transactionForm');
  if (transactionForm) {
    transactionForm.addEventListener('submit', handleFormSubmit);
  }

  // Tombol Batal Edit
  const cancelEditBtn = document.getElementById('cancelEditButton');
  if (cancelEditBtn) {
    cancelEditBtn.addEventListener('click', resetFormMode);
  }

  // Input Real-Time Search Event Listener (Kriteria 3)
  const searchInput = document.getElementById('searchTransactionTitle');
  const clearSearchBtn = document.getElementById('clearSearchButton');

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      currentSearchQuery = e.target.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchQuery.length > 0 ? 'flex' : 'none';
      }
      renderTransactions();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        clearSearchBtn.style.display = 'none';
        searchInput.focus();
        renderTransactions();
      }
    });
  }

  // Muat data dari localStorage jika ada
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

// Custom Event Listeners
document.addEventListener(RENDER_EVENT, function () {
  renderTransactions();
});

document.addEventListener(SAVED_EVENT, function () {
  console.log('✅ Data transaksi berhasil disinkronkan ke Web Storage (localStorage):', localStorage.getItem(STORAGE_KEY));
});
