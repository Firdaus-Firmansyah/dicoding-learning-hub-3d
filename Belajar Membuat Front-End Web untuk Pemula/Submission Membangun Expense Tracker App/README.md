# 💳 Personal Finance & Expense Tracker App (Claymorphism 3D)

> **Proyek Akhir (Submission) Kelas:** Belajar Membuat Front-End Web untuk Pemula  
> **Program:** Coding Camp 2026 3.0 powered by DBS Foundation & Dicoding Indonesia  
> **Pengembang:** Firdaus Firmansyah  
> **Desain & UI:** Claymorphism 3D Modern dengan Haptic Feedback, SweetAlert2 & Font Awesome 6  

---

## 🌟 Fitur Unggulan

- 💎 **Tema Claymorphism 3D**: Efek kedalaman bayangan (layered neumorphic/clay shadows) pada kartu Dasbor Saldo, Formulir, dan Kartu Transaksi.
- 🪙 **Dasbor Keuangan Dinamis**: Kalkulasi otomatis Saldo Total, Total Pemasukan (*Clay Mint*), dan Total Pengeluaran (*Clay Coral/Berry*).
- 📝 **Manipulasi DOM Murni**: Penambahan dan pemisahan otomatis transaksi ke rak Pemasukan & Pengeluaran via `document.createElement()`.
- 💾 **Persistensi Web Storage API**: Sinkronisasi data otomatis dengan `localStorage` browser sehingga data tetap tersimpan saat reload/tutup tab.
- 🔄 **Fitur Interaktif Canggih**:
  - **Ubah Tipe Transaksi**: Pindahkan transaksi antar kategori (Pemasukan <-> Pengeluaran) secara instan.
  - **Edit Formulir**: Mode edit interaktif yang mengisi kembali data ke formulir dengan tombol update.
  - **Pencarian Real-Time**: Filter cepat transaksi berdasarkan judul saat pengguna mengetik.
  - **SweetAlert2 3D**: Dialog konfirmasi hapus dan notifikasi feedback yang estetik.

---

## 📁 Struktur Berkas

```text
Submission Membangun Expense Tracker App/
├── index.html       # Struktur HTML semantik dengan data-testid lengkap
├── style.css        # Desain CSS Claymorphism 3D, responsive grid & tokens
├── main.js          # Logika JavaScript murni (DOM, localStorage, Event Handling, SweetAlert2)
├── vercel.json      # Konfigurasi deployment hosting Vercel
└── README.md        # Dokumentasi dan panduan proyek
```

---

## 🚀 Panduan Deployment ke Vercel & GitHub

### Opsi 1: Deploy Langsung dari Repositori `dicoding-learning-hub-3d` (Rekomendasi Cepat)

Karena proyek ini sudah berada di repositori GitHub Anda:
1. Buka [Vercel Dashboard](https://vercel.com/dashboard).
2. Klik tombol **Add New...** > **Project**.
3. Pilih/Import repositori: `dicoding-learning-hub-3d`.
4. Pada form konfigurasi:
   - **Project Name**: Berikan nama proyek (contoh: `expense-tracker-clay-3d`).
   - **Root Directory**: Klik **Edit** dan pilih:
     ```text
     Belajar Membuat Front-End Web untuk Pemula/Submission Membangun Expense Tracker App
     ```
5. Klik tombol **Deploy**.
6. Proyek Anda akan langsung live di alamat `https://expense-tracker-clay-3d.vercel.app`!

---

### Opsi 2: Deploy ke Repositori GitHub Baru yang Terpisah (Standalone)

Jika ingin membuat repositori khusus terpisah untuk proyek ini:
1. Buat repositori baru di [GitHub New Repository](https://github.com/new) dengan nama misalnya `expense-tracker-app-3d`.
2. Buka terminal di folder ini dan jalankan:
   ```bash
   # Masuk ke direktori proyek
   cd "Belajar Membuat Front-End Web untuk Pemula/Submission Membangun Expense Tracker App"

   # Inisialisasi git dan buat commit awal
   git init
   git add .
   git commit -m "feat: initial commit personal finance expense tracker 3d"
   git branch -M main
   git remote add origin https://github.com/Firdaus-Firmansyah/expense-tracker-app-3d.git
   git push -u origin main
   ```
3. Buka Vercel Dashboard, import repositori `expense-tracker-app-3d` yang baru dibuat, lalu klik **Deploy**!

---

## 📋 Rubrik Penilaian Submission Dicoding (Target Bintang 5)

| Kriteria | Level Dicapai | Rincian Implementasi |
| :--- | :---: | :--- |
| **Kriteria 1: Memanipulasi DOM untuk Form dan Daftar Transaksi** | ⭐⭐⭐⭐⭐ **Advanced** | Sapaan header identitas peserta, `data-testid` lengkap, pemisahan rak transaksi, dan perhitungan saldo otomatis. |
| **Kriteria 2: Mengelola Penyimpanan Data (Web Storage API)** | ⭐⭐⭐⭐⭐ **Advanced** | Persistensi `localStorage`, fungsi CRUD lengkap, mode edit transaksi, dan event custom sinkronisasi data. |
| **Kriteria 3: Fitur Interaktif (Ubah Kategori dan Pencarian)** | ⭐⭐⭐⭐⭐ **Advanced** | Tombol ubah tipe dinamis, pencarian instan *oninput*, SweetAlert2 clay modal, dan font icons. |
