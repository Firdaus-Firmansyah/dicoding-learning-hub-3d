# 🌐 Dicoding Learning Hub 3D - Coding Camp 2026 3.0
> **Portal Dokumentasi, Playground Interaktif, dan Showcase Portofolio Pembelajaran Web & JavaScript**  
> *Powered by DBS Foundation & Dicoding Indonesia*

Selamat datang di **Dicoding Learning Hub 3D**! Repositori ini menggabungkan seluruh kurikulum materi, lab latihan, modul interaktif, dan proyek akhir submission dari 3 kelas utama Dicoding ke dalam **satu platform web terpadu bertema Claymorphism 3D**, yang siap di-hosting langsung ke **Vercel**.

---

## 🌟 Fitur Utama Portal Pembelajaran

1. **Dashboard Interaktif 3-in-1**:
   - 🎨 **Belajar Membuat Front-End Web untuk Pemula**: 24 Modul BOM/DOM/Event/Web Storage + Proyek Todo Apps + **Submission Expense Tracker App (Bintang 5)**.
   - ⚡ **Belajar Dasar Pemrograman JavaScript**: 45 Modul ES6+ (Sintaks, Struktur Data, OOP, Functional, Async/Await, Automated Testing + Final Assessment).
   - 🌐 **Belajar Dasar Pemrograman Web**: Struktur HTML5 Semantik, CSS Flexbox, Portofolio Profil Bandung & Landing Page.
2. **Workspace 4-Tab Interaktif**:
   - 🖥️ **Live Interactive Preview**: Simulator responsive viewport (*Desktop, Tablet 768px, Mobile 375px*) dengan aksi reload, open new tab, dan reset storage.
   - 📖 **Rangkuman Materi & Panduan**: Ringkasan konsep kunci, analogi, tips praktis, dan panduan belajar terstruktur.
   - 💻 **Source Code Viewer**: Penampil kode sumber berkas (HTML, CSS, JS) dengan fitur *syntax highlight* dan *1-Click Copy Code*.
   - 🏆 **Detail & Evaluasi Submission**: Rincian kriteria kelulusan dan standar evaluasi Dicoding.
3. **Pencarian Cepat & Filter Real-Time**:
   - Cari materi berdasarkan kata kunci, topik (misal: *Promise*, *Event Bubbling*, *LocalStorage*, *Expense*).
   - Filter pill instan untuk memfilter modul per kelas.
4. **Progress Tracker Belajar (Local Storage)**:
   - Checklist modul yang telah dipelajari dengan penyimpanan otomatis ke browser.
5. **Desain Claymorphism 3D Premium**:
   - Tampilan empuk, modern, tombol tactile membal (`cubic-bezier`), dan font tipografi modern (*Plus Jakarta Sans* & *Fira Code*).

---

## 🚀 Panduan Hosting ke Vercel (Langkah Cepat)

Portal ini dirancang **Zero-Build** menggunakan Pure HTML5, CSS3, dan Modular JavaScript, sehingga dapat langsung di-deploy ke Vercel dalam hitungan menit!

### Cara 1: Deploy via GitHub (Direkomendasikan)
1. Inisialisasi Git dan push repositori ini ke akun GitHub Anda:
   ```bash
   git add .
   git commit -m "feat: launch Dicoding Learning Hub 3D Portal"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/<nama-repo>.git
   git push -u origin main
   ```
2. Buka [Vercel Dashboard](https://vercel.com/) dan login.
3. Klik tombol **"Add New..."** &rarr; **"Project"**.
4. Import repositori GitHub Anda.
5. Pada bagian **Build & Development Settings**, biarkan default (**Framework Preset: Other**, **Root Directory: ./**).
6. Klik **"Deploy"**. Web portal Anda langsung aktif secara global! 🎉

### Cara 2: Deploy via Vercel CLI
1. Pastikan Vercel CLI terpasang di komputer Anda:
   ```bash
   npm i -g vercel
   ```
2. Jalankan perintah deploy di folder root:
   ```bash
   vercel
   ```
3. Ikuti petunjuk di terminal (pilih default untuk semua konfigurasi).
4. Untuk deploy ke production:
   ```bash
   vercel --prod
   ```

---

## 📁 Struktur Repositori

```
├── index.html               # Shell Utama Portal & Dashboard Interaktif
├── css/
│   └── portal-style.css     # Sistem Desain Claymorphism 3D & Responsive Layout
├── js/
│   ├── modules-data.js      # Basis Data Terstruktur Seluruh Modul & Proyek
│   └── portal-app.js        # Controller Navigasi, Iframe Runner, Search & Progress
├── vercel.json              # Konfigurasi Header & Static Routing Vercel
│
├── Belajar Membuat Front-End Web untuk Pemula/
│   ├── 01 - 24 Modul Pembelajaran (BOM, DOM, Event, Web Storage)
│   ├── 23-[Proyek TODO APPS]/
│   ├── 24-[Proyek TODO APPS DENGAN WEB STORAGE]/
│   ├── todoapps/
│   └── Submission - Membangun Expense Tracker App/ (Bintang 5)
│
├── Belajar Dasar Pemrograman JavaScript/
│   ├── 1 - 44 Modul JS Lengkap (OOP, FP, Async, Testing)
│   └── final-assessment/
│
└── Belajar Dasar Pemrograman Web/
    ├── Submission Tugas Akhir Membuat Website/ (Profil Bandung & Landing Page)
    └── webdasar-labs-203-menerapkan-elemen-anchor-pada-halaman-profil/
```

---

## 👨‍💻 Kontributor
- **Nama Siswa**: Firdaus
- **Program**: Coding Camp 2026 3.0 powered by DBS Foundation
- **Platform**: Dicoding Indonesia
