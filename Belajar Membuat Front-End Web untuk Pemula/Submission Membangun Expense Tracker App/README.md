# 💳 Personal Finance & Expense Tracker App

Proyek Tugas Akhir (*Final Assessment Submission*) untuk kelas **Belajar Membuat Front-End Web untuk Pemula** (Coding Camp 2026 3.0 powered by DBS Foundation & Dicoding Indonesia).

---

## 🌟 Ringkasan Pemenuhan Rubrik Penilaian (Target Bintang 5 / Skor 4.00)

| Kriteria | Level Dicapai | Rincian Implementasi |
| :--- | :---: | :--- |
| **Kriteria 1: Memanipulasi DOM untuk Form dan Daftar Transaksi** | ⭐⭐⭐⭐⭐ **Advanced (4 Pts)** | • Sapaan header `.tracker-header__greeting` menampilkan identitas peserta.<br>• Struktur kartu transaksi dibuat via `document.createElement()` dengan seluruh atribut `data-testid` utuh & presisi.<br>• Transaksi otomatis terpisah ke `#incomeList` dan `#expenseList`.<br>• Validasi ketat via `alert()` untuk judul kosong & nominal < 1.<br>• Ringkasan Dasbor (Total Saldo, Total Pemasukan, Total Pengeluaran) otomatis terkalkulasi secara dinamis. |
| **Kriteria 2: Mengelola Penyimpanan Data (Web Storage API)** | ⭐⭐⭐⭐⭐ **Advanced (4 Pts)** | • Data transaksi disimpan persisten ke `localStorage` via `JSON.stringify()` dan dimuat saat startup via `JSON.parse()`.<br>• Tombol Hapus menghapus data dari layar dan memori storage secara instan.<br>• Fitur Edit Formulir lengkap: data terisi otomatis ke form, tombol berubah menjadi mode perbarui, dan kembali ke mode tambah setelah selesai.<br>• Arsitektur **Custom Event** (`render-transactions` & `saved-transactions`) via `dispatchEvent()` sebagai pusat sinkronisasi UI. |
| **Kriteria 3: Fitur Interaktif (Pindah Kategori dan Pencarian)** | ⭐⭐⭐⭐⭐ **Advanced (4 Pts)** | • Tombol "Ubah Tipe" memindahkan transaksi antara rak Pemasukan & Pengeluaran secara *real-time*.<br>• Kolom pencarian interaktif memfilter transaksi secara langsung saat pengguna mengetik (`input` event).<br>• Saat kolom pencarian dikosongkan, seluruh daftar transaksi otomatis pulih kembali ke tampilan lengkap. |

---

## 📁 Struktur Berkas Proyek

```text
Submission - Membangun Expense Tracker App/
├── index.html       # Struktur HTML semantik, semantic layout, dan atribut data-testid lengkap
├── style.css        # Desain CSS modern, responsif, glassmorphism, dan color-coded income/expense
├── main.js          # Seluruh logika JavaScript murni (DOM, Web Storage, Custom Events, Form Validation)
└── README.md        # Panduan & Dokumentasi Proyek
```

---

## 🚀 Cara Menjalankan Proyek

1. **Buka di Browser:**
   - Cukup klik kanan berkas `index.html` lalu pilih **Open with Live Server** (atau klik dua kali berkas `index.html`).
2. **Coba Fitur Utama:**
   - **Tambah Transaksi:** Masukkan judul, nominal, tanggal, dan pilih tipe Pemasukan/Pengeluaran.
   - **Cek Dasbor:** Perhatikan bagaimana kartu Total Saldo, Pemasukan, dan Pengeluaran langsung terhitung otomatis.
   - **Pencarian Real-Time:** Ketik judul transaksi di kolom pencarian.
   - **Ubah Kategori:** Klik tombol "Ubah Tipe" untuk memindahkan transaksi antar rak.
   - **Edit Transaksi:** Klik tombol "Edit" untuk memperbarui data transaksi melalui formulir.
   - **Persistensi Data:** Muat ulang halaman (*Refresh / Hard Reload*) dan pastikan data tidak hilang!
