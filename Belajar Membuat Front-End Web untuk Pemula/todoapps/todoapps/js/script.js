/**
 * ==============================================================================
 * PROYEK TODO APPS - LENGKAP (ADD, COMPLETE, UNDO, DELETE)
 * Belajar Membuat Front-End Web untuk Pemula (Dicoding Indonesia)
 * ==============================================================================
 * 
 * Modul ini mencakup fungsionalitas:
 * 1. Menambah Todo baru (`addTodo`)
 * 2. Menampilkan Todo di rak "Yang harus dilakukan" dan "Yang sudah dilakukan" (`makeTodo`, `RENDER_EVENT`)
 * 3. Menandai Todo selesai / memindahkan ke rak selesai (`addTaskToCompleted`)
 * 4. Mengembalikan Todo yang selesai ke rak belum selesai (`undoTaskFromCompleted`)
 * 5. Menghapus Todo dari rak selesai (`removeTaskFromCompleted`, `findTodoIndex`)
 */

// 1. Array penampung data Todo
const todos = [];

// 2. Custom Event name untuk memicu re-render tampilan DOM ketika data berubah
const RENDER_EVENT = 'render-todo';

// 3. Helper: Menghasilkan ID unik berbasis UNIX Timestamp (+new Date())
function generateId() {
  return +new Date();
}

// 4. Helper: Membuat objek Todo terstruktur
function generateTodoObject(id, task, timestamp, isCompleted) {
  return {
    id,
    task,
    timestamp,
    isCompleted
  };
}

// 5. Helper: Mencari objek Todo berdasarkan ID
function findTodo(todoId) {
  for (const todoItem of todos) {
    if (todoItem.id === todoId) {
      return todoItem;
    }
  }
  return null;
}

// 6. Helper: Mencari index posisi Todo pada array berdasarkan ID
function findTodoIndex(todoId) {
  for (const index in todos) {
    if (todos[index].id === todoId) {
      return index;
    }
  }
  return -1;
}

// 7. Fungsi: Membuat Elemen DOM Todo Item (Card Todo)
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

// 8. Fungsi: Menambahkan Todo Baru dari Form Input
function addTodo() {
  const textTodo = document.getElementById('title').value;
  const timestamp = document.getElementById('date').value;

  const generatedID = generateId();
  const todoObject = generateTodoObject(generatedID, textTodo, timestamp, false);
  todos.push(todoObject);

  // Reset input form setelah submit
  document.getElementById('title').value = '';
  document.getElementById('date').value = '';

  // Picu render ulang tampilan
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// 9. Fungsi: Menandai Todo sebagai Selesai
function addTaskToCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = true;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// 10. Fungsi: Mengembalikan Todo dari Rak Selesai ke Belum Selesai (Undo)
function undoTaskFromCompleted(todoId) {
  const todoTarget = findTodo(todoId);

  if (todoTarget == null) return;

  todoTarget.isCompleted = false;
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// 11. Fungsi: Menghapus Todo dari Rak Selesai
function removeTaskFromCompleted(todoId) {
  const todoTarget = findTodoIndex(todoId);

  if (todoTarget === -1) return;

  todos.splice(todoTarget, 1);
  document.dispatchEvent(new Event(RENDER_EVENT));
}

// 12. Listener: Inisialisasi Form saat DOM selesai dimuat
document.addEventListener('DOMContentLoaded', function () {
  const submitForm = document.getElementById('form');

  submitForm.addEventListener('submit', function (event) {
    // Mencegah reload halaman
    event.preventDefault();
    addTodo();
  });
});

// 13. Listener: Merender Ulang Daftar Todo ke DOM saat RENDER_EVENT Dipicu
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

  console.log('--- [DATA TODOS TERBARU] ---', todos);
});
