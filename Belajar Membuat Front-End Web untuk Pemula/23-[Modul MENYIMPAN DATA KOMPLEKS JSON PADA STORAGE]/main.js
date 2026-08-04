/**
 * ==============================================================================
 * MODUL 23: MENYIMPAN DATA KOMPLEKS PADA WEB STORAGE MENGGUNAKAN OBJEK JSON
 * Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)
 * ==============================================================================
 * 
 * Konsep Penting:
 * 1. Web Storage (localStorage / sessionStorage) hanya dapat menyimpan nilai berupa STRING (teks).
 * 2. Untuk menyimpan data kompleks seperti Object atau Array of Objects:
 *    - Gunakan `JSON.stringify(dataObj)` saat MENYIMPAN ke storage (Object -> JSON String).
 *    - Gunakan `JSON.parse(jsonString)` saat MENGAMBIL dari storage (JSON String -> Object).
 */

// 1. Key identitas data di Local Storage
const storageKey = 'STORAGE_KEY';

// 2. Menyeleksi form input
const submitAction = document.getElementById('form-data-user');

// 3. Helper: Memeriksa apakah browser mendukung Web Storage
function checkForStorage() {
  return typeof (Storage) !== 'undefined';
}

// 4. Fungsi: Menyimpan objek data user baru ke dalam array di localStorage
function putUserList(data) {
  if (checkForStorage()) {
    let userData = [];
    
    // Ambil data yang sudah ada sebelumnya jika ada
    if (localStorage.getItem(storageKey) !== null) {
      userData = JSON.parse(localStorage.getItem(storageKey));
    }

    // Masukkan data baru ke posisi paling depan (index 0)
    userData.unshift(data);

    // Batasi riwayat maksimal hanya 5 data user terbaru
    if (userData.length > 5) {
      userData.pop(); // Hapus data paling lama
    }

    // Simpan kembali array yang sudah di-serialize ke JSON string
    localStorage.setItem(storageKey, JSON.stringify(userData));
    console.log('[Data Berhasil Disimpan]', userData);
  }
}

// 5. Fungsi: Mengambil seluruh array user dari localStorage
function getUserList() {
  if (checkForStorage()) {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  }
  return [];
}

// 6. Fungsi: Merender baris tabel daftar user ke DOM
function renderUserList() {
  const userData = getUserList();
  const userList = document.querySelector('#user-list-detail');

  userList.innerHTML = '';

  if (userData.length === 0) {
    userList.innerHTML = '<tr><td colspan="3" class="empty-message">Belum ada data user yang tersimpan di localStorage.</td></tr>';
    return;
  }

  for (const user of userData) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${user.nama}</strong></td>
      <td>${user.umur} Tahun</td>
      <td>${user.domisili}</td>
    `;
    userList.appendChild(row);
  }
}

// 7. Event Listener: Submit Form Tambah User
submitAction.addEventListener('submit', function (event) {
  // PENTING: Mencegah reload halaman bawaan form submit!
  event.preventDefault();

  const inputNama = document.getElementById('nama').value.trim();
  const inputUmur = document.getElementById('umur').value.trim();
  const inputDomisili = document.getElementById('domisili').value.trim();

  // Susun objek data user
  const newUserData = {
    nama: inputNama,
    umur: inputUmur,
    domisili: inputDomisili,
  };

  // Simpan ke storage dan update tampilan tabel
  putUserList(newUserData);
  renderUserList();

  // Reset isian input form
  document.getElementById('nama').value = '';
  document.getElementById('umur').value = '';
  document.getElementById('domisili').value = '';
});

// 8. Event Listener: Memuat data dari storage saat halaman selesai dibuka
window.addEventListener('load', function () {
  if (checkForStorage()) {
    renderUserList();
  } else {
    alert('Browser yang Anda gunakan tidak mendukung Web Storage');
  }
});
