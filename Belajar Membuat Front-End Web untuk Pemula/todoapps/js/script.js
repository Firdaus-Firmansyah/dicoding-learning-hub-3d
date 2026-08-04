/**
 * ==============================================================================
 * PROYEK TODO APPS DENGAN WEB STORAGE & TOAST NOTIFICATION
 * Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)
 * ==============================================================================
 * 
 * Fungsionalitas Lengkap:
 * 1. Menambah Todo baru (`addTodo`)
 * 2. Menampilkan Todo di rak "Yang harus dilakukan" & "Yang sudah dilakukan" (`makeTodo`, `RENDER_EVENT`)
 * 3. Menandai Todo selesai / memindahkan ke rak selesai (`addTaskToCompleted`)
 * 4. Mengembalikan Todo yang selesai ke rak belum selesai (`undoTaskFromCompleted`)
 * 5. Menghapus Todo dari rak selesai (`removeTaskFromCompleted`, `findTodoIndex`)
 * 6. MENYIMPAN DATA KE LOCAL STORAGE SECARA OTOMATIS (`saveData`, `SAVED_EVENT`, `STORAGE_KEY`)
 * 7. MEMUAT DATA DARI LOCAL STORAGE SAAT HALAMAN DIBUKA / DI-RELOAD (`loadDataFromStorage`)
 * 8. [TANTANGAN TERSELESAIKAN]: TOAST NOTIFICATION MENGAMBANG SETIAP PERUBAHAN DATA DISIMPAN (`showToast`)
 */

// 1. Array penampung data Todo
const todos = [];

// 2. Custom Events & Web Storage Keys
const RENDER_EVENT = 'render-todo';
const SAVED_EVENT = 'saved-todo';
const STORAGE_KEY = 'TODO_APPS';

// 3. Helper: Memeriksa apakah browser mendukung Web Storage (localStorage)
function isStorageExist() /* boolean */ {
  if (typeof (Storage) === 'undefined') {
    alert('Browser kamu tidak mendukung local storage');
    return false;
  }
  return true;
}

// 4. Helper: Menghasilkan ID unik berbasis UNIX Timestamp (+new Date())
function generateId() {
  return +new Date();
}

// 5. Helper: Membuat objek Todo terstruktur
function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    task,
    timestamp,
    isCompleted
  };
}

// 6. Helper: Mencari objek Todo berdasarkan ID
function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;
}

// 7. Helper: Mencari index posisi Todo pada array berdasarkan ID
function findTodoIndex(todoId) {
  for (const index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}

// 8. Helper [Tantangan]: Menampilkan Pesan Mengambang (Toast Notification)
function showToast(message, icon = '💾') {
  let toastContainer = document.getElementById('toast-container');
  
  // Jika container belum ada di DOM, buat secara dinamis
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.setAttribute('id', 'toast-container');
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.classList.add('toast');
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Otomatis hapus elemen toast dari DOM setelah 3 detik
  setTimeout(function () {
    toast.remove();
  }, 3000);
}

// 9. Fungsi: Menyimpan Array Todos ke Local Storage
function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(todos);
    localStorage.setItem(STORAGE_KEY, parsed);
    document.dispatchEvent(new Event(SAVED_EVENT));
  }
}

// 10. Fungsi: Memuat Data dari Local Storage ke Array Todos saat Halaman Dibuka
function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    for (const todo of data) {
      todos.push(todo);
    }
  }

  document.dispatchEvent(new Event(RENDER_EVENT));
}

// 11. Fungsi: Membuat Elemen DOM Todo Item (Card Todo)
function makeTodo(todoObject) {
  const textTitle = document.createElement('h2');
  textTitle.innerText = todoObject.task;

  const textTimestamp = document.createElement('p');
  textTimestamp.innerText = todoObject.timestamp;

  const textContainer = document.createElement('div');
  textContainer.classList.add('inner');
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement('div');
  container.classList.add('item', 'shadow');
  container.append(textContainer);
  container.setAttribute('id', `todo-${todoObject.id}`);

  if (todoObject.isCompleted) {
    // Tombol Undo (Kembalikan ke belum selesai)
    const undoButton = document.createElement('button');
    undoButton.classList.add('undo-button');

    undoButton.addEventListener('click', function () {
      undoTaskFromCompleted(todoObject.id);
    });

    // Tombol Trash (Hapus Todo permanen)
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-button');

    trashButton.addEventListener('click', function () {
      removeTaskFromCompleted(todoObject.id);
    });

    container.append(undoButton, trashButton);
  } else {
    // Tombol Checklist (Tandai Selesai)
    const checkButton = document.createElement('button');
    checkButton.classList.add('check-button');

    checkButton.addEventListener('click', function () {
      addTaskToCompleted(todoObject.id);
    });

    container.append(checkButton);
  }

  return container;
}

// 12. Fungsi: Menambahkan Todo Baru dari Form Input
function addTodo() {
  const textTodo = document.getElementById('title').value.trim();
  const timestamp = document.getElementById('date').value;

  if (textTodo === '' || timestamp === '') {
    alert('Silakan masukkan judul tugas dan tanggal target selesai!');
    return;
  }

  const generatedID = generateId();
  const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  todos.push(todoObject);

  // Reset input form setelah submit
  document.getElementById('title').value = '';
  document.getElementById('date').value = '';

  // Picu render ulang tampilan & simpan ke storage
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// 13. Fungsi: Menandai Todo sebagai Selesai
function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// 14. Fungsi: Mengembalikan Todo dari Rak Selesai ke Belum Selesai (Undo)
function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// 15. Fungsi: Menghapus Todo dari Rak Selesai
function removeTaskFromCompleted(todoId) {
  const todoTarget = findTodoIndex(todoId);

  if (todoTarget === -1) return;

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

// 16. Listener: Inisialisasi Form & Memuat Data saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');

  submitForm.addEventListener('submit', function (event) {
    // Mencegah reload halaman bawaan form submit
    event.preventDefault();
    addTodo();
  });

  // Memuat data dari localStorage saat halaman pertama kali dibuka
  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

// 17. Listener [TANTANGAN]: Debugging & Menampilkan Toast Notifikasi Interaktif
document.addEventListener(SAVED_EVENT, function () {
  const currentData = localStorage.getItem(STORAGE_KEY);
  console.log('[Storage Saved - ' + STORAGE_KEY + ']:', currentData);

  // Menampilkan Toast Notifikasi Mengambang
  showToast('Perubahan data berhasil disimpan ke Local Storage!', '💾');
});

// 18. Listener: Merender Ulang Daftar Todo ke DOM saat RENDER_EVENT Dipicu
document.addEventListener(RENDER_EVENT, function () {
  const uncompletedTODOList = document.getElementById('todos');
  uncompletedTODOList.innerHTML = '';

  const completedTODOList = document.getElementById('completed-todos');
  completedTODOList.innerHTML = '';

  for (const todoItem of todos) {
    const todoElement = makeTodo(todoItem);
    if (!todoItem.isCompleted) {
      uncompletedTODOList.append(todoElement);
    } else {
      completedTODOList.append(todoElement);
    }
  }

  console.log('--- [DATA TODOS TERBARU DI MEMORI] ---', todos);
});
