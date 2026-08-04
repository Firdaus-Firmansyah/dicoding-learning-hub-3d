/**
 * ==============================================================================
 * DICODING LEARNING HUB - APPLICATION CONTROLLER
 * Coding Camp 2026 3.0 powered by DBS Foundation
 * ==============================================================================
 */

(function () {
  'use strict';

  // --- STATE ---
  const state = {
    currentModuleId: 'fe-submission',
    currentFilter: 'all',
    searchQuery: '',
    activeTab: 'preview',
    activeDevice: 'desktop',
    activeSourceFileIndex: 0,
    completedModules: new Set()
  };

  // --- DOM ELEMENTS ---
  const el = {
    searchInput: document.getElementById('searchInput'),
    filterPillsContainer: document.getElementById('filterPillsContainer'),
    progressBarFill: document.getElementById('progressBarFill'),
    progressPercent: document.getElementById('progressPercent'),
    sidebarNav: document.getElementById('sidebarNav'),
    sidebarCountBadge: document.getElementById('sidebarCountBadge'),
    moduleSectionsContainer: document.getElementById('moduleSectionsContainer'),
    sidebarBackdrop: document.getElementById('sidebarBackdrop'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),

    // Main Header
    headerIcon: document.getElementById('headerIcon'),
    headerBreadcrumbs: document.getElementById('headerBreadcrumbs'),
    headerTitle: document.getElementById('headerTitle'),
    headerBadge: document.getElementById('headerBadge'),
    resetStorageBtn: document.getElementById('resetStorageBtn'),
    reloadBtn: document.getElementById('reloadBtn'),
    openTabBtn: document.getElementById('openTabBtn'),

    // Tabs
    tabButtons: document.querySelectorAll('.tab-button'),
    tabPanels: {
      preview: document.getElementById('tabPreviewPanel'),
      theory: document.getElementById('tabTheoryPanel'),
      code: document.getElementById('tabCodePanel'),
      criteria: document.getElementById('tabCriteriaPanel')
    },
    tabBtnCriteria: document.getElementById('tabBtnCriteria'),

    // Preview
    deviceBtns: document.querySelectorAll('.device-btn'),
    previewAddress: document.getElementById('previewAddress'),
    previewIframe: document.getElementById('previewIframe'),

    // Theory
    theoryContent: document.getElementById('theoryContent'),
    keyPointsList: document.getElementById('keyPointsList'),

    // Code
    codeFileTabs: document.getElementById('codeFileTabs'),
    copyCodeBtn: document.getElementById('copyCodeBtn'),
    codeContent: document.getElementById('codeContent'),

    // Criteria
    criteriaList: document.getElementById('criteriaList')
  };

  // --- INITIALIZATION ---
  function init() {
    loadCompletedProgress();
    setupEventListeners();
    handleInitialRoute();
    renderFilterPills();
    renderSidebar();
    renderActiveModule();
    updateProgressDisplay();
  }

  // --- STORAGE & PROGRESS ---
  function loadCompletedProgress() {
    try {
      const saved = localStorage.getItem('dicoding_portal_completed');
      if (saved) {
        state.completedModules = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Gagal membaca progress dari localStorage:', e);
    }
  }

  function saveCompletedProgress() {
    try {
      localStorage.setItem('dicoding_portal_completed', JSON.stringify(Array.from(state.completedModules)));
    } catch (e) {
      console.warn('Gagal menyimpan progress ke localStorage:', e);
    }
    updateProgressDisplay();
  }

  function updateProgressDisplay() {
    const totalModules = MODULES_DATA.length;
    const completedCount = state.completedModules.size;
    const percent = Math.round((completedCount / totalModules) * 100) || 0;

    el.progressBarFill.style.width = `${percent}%`;
    el.progressPercent.textContent = `${percent}% (${completedCount}/${totalModules})`;
  }

  // --- ROUTING ---
  function handleInitialRoute() {
    const hash = window.location.hash.replace('#/', '');
    if (hash && hash.startsWith('module/')) {
      const targetId = hash.replace('module/', '');
      if (MODULES_DATA.some(m => m.id === targetId)) {
        state.currentModuleId = targetId;
      }
    }
  }

  function navigateToModule(moduleId) {
    state.currentModuleId = moduleId;
    state.activeSourceFileIndex = 0;
    window.location.hash = `/module/${moduleId}`;
    renderSidebar();
    renderActiveModule();

    // Close mobile sidebar if open
    el.sidebarNav.classList.remove('open');
    el.sidebarBackdrop.classList.remove('show');
  }

  // --- FILTER & SEARCH ---
  function getFilteredModules() {
    return MODULES_DATA.filter(mod => {
      // Class filter
      if (state.currentFilter !== 'all' && mod.classId !== state.currentFilter) {
        return false;
      }

      // Search query
      if (state.searchQuery.trim() !== '') {
        const q = state.searchQuery.toLowerCase();
        const matchTitle = mod.title.toLowerCase().includes(q);
        const matchCategory = mod.category.toLowerCase().includes(q);
        const matchBadge = mod.badge.toLowerCase().includes(q);
        const matchDesc = mod.description.toLowerCase().includes(q);
        return matchTitle || matchCategory || matchBadge || matchDesc;
      }

      return true;
    });
  }

  // --- RENDER SIDEBAR ---
  function renderFilterPills() {
    const pills = el.filterPillsContainer.querySelectorAll('.filter-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.currentFilter = pill.dataset.filter;
        renderSidebar();
      });
    });
  }

  function renderSidebar() {
    const filtered = getFilteredModules();
    el.sidebarCountBadge.textContent = `${filtered.length} Modul`;
    el.moduleSectionsContainer.innerHTML = '';

    if (filtered.length === 0) {
      el.moduleSectionsContainer.innerHTML = `
        <div style="text-align: center; padding: 2rem 1rem; color: #64748b;">
          <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🔍</p>
          <p style="font-weight: 700; font-size: 0.9rem;">Tidak ada modul yang cocok</p>
          <p style="font-size: 0.8rem;">Coba cari dengan kata kunci lain</p>
        </div>
      `;
      return;
    }

    // Group by Class
    LEARNING_CLASSES.forEach(cls => {
      const classModules = filtered.filter(m => m.classId === cls.id);
      if (classModules.length === 0) return;

      const section = document.createElement('div');
      section.className = 'class-section';

      const header = document.createElement('div');
      header.className = 'class-header';
      header.innerHTML = `
        <span class="class-title">${cls.icon} ${cls.shortTitle} (${classModules.length})</span>
        <span class="class-toggle-icon">▼</span>
      `;
      header.addEventListener('click', () => {
        section.classList.toggle('collapsed');
      });

      const list = document.createElement('ul');
      list.className = 'module-list';

      classModules.forEach(mod => {
        const item = document.createElement('li');
        item.className = `module-item ${mod.id === state.currentModuleId ? 'active' : ''}`;

        const isChecked = state.completedModules.has(mod.id);
        const badgeClass = mod.badge.includes('Submission')
          ? 'badge-submission'
          : mod.badge.includes('Proyek')
          ? 'badge-primary'
          : 'badge-mint';

        item.innerHTML = `
          <div class="module-info">
            <span class="module-icon">${mod.icon}</span>
            <div class="module-text-container">
              <span class="module-title" title="${mod.title}">${mod.shortTitle || mod.title}</span>
              <span class="module-meta">${mod.category}</span>
            </div>
          </div>
          <span class="module-badge ${badgeClass}">${mod.badge}</span>
          <input type="checkbox" class="module-checkbox" title="Tandai Selesai" ${isChecked ? 'checked' : ''}>
        `;

        // Checkbox click
        const checkbox = item.querySelector('.module-checkbox');
        checkbox.addEventListener('click', (e) => {
          e.stopPropagation();
          if (checkbox.checked) {
            state.completedModules.add(mod.id);
          } else {
            state.completedModules.delete(mod.id);
          }
          saveCompletedProgress();
        });

        // Item click
        item.addEventListener('click', () => {
          navigateToModule(mod.id);
        });

        list.appendChild(item);
      });

      section.appendChild(header);
      section.appendChild(list);
      el.moduleSectionsContainer.appendChild(section);
    });
  }

  // --- RENDER ACTIVE MODULE ---
  function renderActiveModule() {
    const mod = MODULES_DATA.find(m => m.id === state.currentModuleId) || MODULES_DATA[0];
    const cls = LEARNING_CLASSES.find(c => c.id === mod.classId);

    // Update Header
    el.headerIcon.textContent = mod.icon;
    el.headerBreadcrumbs.innerHTML = `<span>${cls ? cls.title : ''}</span> • <span>${mod.category}</span>`;
    el.headerTitle.textContent = mod.title;
    el.headerBadge.textContent = mod.badge;
    el.headerBadge.className = `module-badge ${
      mod.badge.includes('Submission') ? 'badge-submission' : mod.badge.includes('Proyek') ? 'badge-primary' : 'badge-mint'
    }`;

    el.openTabBtn.href = mod.filePath;

    // Show/Hide Criteria Tab
    if (mod.evaluationCriteria && mod.evaluationCriteria.length > 0) {
      el.tabBtnCriteria.style.display = 'flex';
      renderCriteriaTab(mod.evaluationCriteria);
    } else {
      el.tabBtnCriteria.style.display = 'none';
      if (state.activeTab === 'criteria') {
        switchTab('preview');
      }
    }

    // Render Panels
    renderPreviewPanel(mod);
    renderTheoryPanel(mod);
    renderCodePanel(mod);
  }

  // --- TAB 1: PREVIEW PANEL ---
  function renderPreviewPanel(mod) {
    el.previewAddress.textContent = mod.filePath;

    if (mod.type === 'html') {
      el.previewIframe.src = mod.filePath;
    } else {
      // JavaScript file: generate inline runnable sandboxed HTML
      renderJavaScriptPlayground(mod);
    }
  }

  function renderJavaScriptPlayground(mod) {
    const iframeDoc = el.previewIframe.contentDocument || el.previewIframe.contentWindow.document;
    const activeFile = mod.sourceFiles[0];

    fetch(activeFile.path)
      .then(res => res.text())
      .then(code => {
        const htmlRunner = `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="UTF-8">
            <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&family=Plus+Jakarta+Sans:wght@600;700&display=swap" rel="stylesheet">
            <style>
              body {
                font-family: 'Plus Jakarta Sans', sans-serif;
                background: #0f172a;
                color: #f8fafc;
                padding: 1.5rem;
                margin: 0;
              }
              .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 2px solid #334155;
                padding-bottom: 1rem;
                margin-bottom: 1.25rem;
              }
              h2 { margin: 0; font-size: 1.1rem; color: #38bdf8; display: flex; align-items: center; gap: 8px; }
              .btn-run {
                background: linear-gradient(135deg, #10b981, #059669);
                border: none;
                color: white;
                font-weight: 700;
                font-family: inherit;
                padding: 8px 16px;
                border-radius: 8px;
                cursor: pointer;
                box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
              }
              .btn-run:hover { opacity: 0.9; transform: translateY(-1px); }
              .console-window {
                background: #1e293b;
                border: 1px solid #334155;
                border-radius: 12px;
                padding: 1rem;
                font-family: 'Fira Code', monospace;
                font-size: 0.88rem;
                min-height: 400px;
                overflow-y: auto;
              }
              .log-entry { margin-bottom: 6px; padding: 4px 8px; border-radius: 4px; border-left: 3px solid #38bdf8; }
              .log-info { border-left-color: #38bdf8; color: #bae6fd; }
              .log-warn { border-left-color: #f59e0b; color: #fef08a; background: rgba(245, 158, 11, 0.1); }
              .log-error { border-left-color: #ef4444; color: #fca5a5; background: rgba(239, 68, 68, 0.1); }
              .log-success { border-left-color: #10b981; color: #a7f3d0; }
            </style>
          </head>
          <body>
            <div class="header">
              <h2>⚡ JS Playground Console: ${mod.shortTitle}</h2>
              <button class="btn-run" onclick="executeUserCode()">▶️ Jalankan Ulang Script</button>
            </div>
            <div id="consoleOutput" class="console-window">
              <div class="log-entry log-info">🚀 Menjalankan script JavaScript...</div>
            </div>
            <script>
              const out = document.getElementById('consoleOutput');
              function log(type, ...args) {
                const div = document.createElement('div');
                div.className = 'log-entry log-' + type;
                div.textContent = args.map(a => typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a)).join(' ');
                out.appendChild(div);
                out.scrollTop = out.scrollHeight;
              }
              console.log = (...args) => log('info', ...args);
              console.info = (...args) => log('info', ...args);
              console.warn = (...args) => log('warn', ...args);
              console.error = (...args) => log('error', ...args);
              console.table = (data) => log('info', JSON.stringify(data, null, 2));

              function executeUserCode() {
                out.innerHTML = '<div class="log-entry log-info">🔄 Mengeksekusi ulang kode...</div>';
                try {
                  ${code}
                  log('success', '✅ Script selesai dieksekusi tanpa error.');
                } catch(err) {
                  log('error', '❌ Error: ' + err.message);
                }
              }
              executeUserCode();
            </script>
          </body>
          </html>
        `;
        iframeDoc.open();
        iframeDoc.write(htmlRunner);
        iframeDoc.close();
      })
      .catch(err => {
        el.previewIframe.srcdoc = `<p style="padding: 2rem; color: #ef4444;">Gagal memuat kode JS: ${err.message}</p>`;
      });
  }

  // --- TAB 2: THEORY PANEL ---
  function renderTheoryPanel(mod) {
    el.theoryContent.innerHTML = mod.description;
    el.keyPointsList.innerHTML = '';
    if (mod.keyPoints && mod.keyPoints.length > 0) {
      mod.keyPoints.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        el.keyPointsList.appendChild(li);
      });
    }
  }

  // --- TAB 3: CODE PANEL ---
  function renderCodePanel(mod) {
    el.codeFileTabs.innerHTML = '';
    if (!mod.sourceFiles || mod.sourceFiles.length === 0) {
      el.codeContent.textContent = '// Tidak ada berkas sumber';
      return;
    }

    mod.sourceFiles.forEach((file, index) => {
      const tab = document.createElement('button');
      tab.className = `file-tab-btn ${index === state.activeSourceFileIndex ? 'active' : ''}`;
      tab.textContent = file.name;
      tab.addEventListener('click', () => {
        state.activeSourceFileIndex = index;
        renderCodePanel(mod);
      });
      el.codeFileTabs.appendChild(tab);
    });

    const activeFile = mod.sourceFiles[state.activeSourceFileIndex];
    el.codeContent.textContent = `// Memuat ${activeFile.name}...`;

    fetch(activeFile.path)
      .then(res => {
        if (!res.ok) throw new Error('Berkas tidak ditemukan');
        return res.text();
      })
      .then(text => {
        el.codeContent.textContent = text;
      })
      .catch(err => {
        el.codeContent.textContent = `// Gagal memuat berkas: ${err.message}`;
      });
  }

  // --- TAB 4: CRITERIA PANEL ---
  function renderCriteriaTab(criteria) {
    el.criteriaList.innerHTML = '';
    criteria.forEach((crit, index) => {
      const li = document.createElement('li');
      li.className = 'criteria-item';
      li.innerHTML = `
        <span class="criteria-icon">🎯</span>
        <span class="criteria-text"><b>Kriteria ${index + 1}:</b> ${crit}</span>
      `;
      el.criteriaList.appendChild(li);
    });
  }

  // --- TABS SWITCHER ---
  function switchTab(tabId) {
    state.activeTab = tabId;
    el.tabButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    Object.keys(el.tabPanels).forEach(key => {
      if (el.tabPanels[key]) {
        el.tabPanels[key].classList.toggle('active', key === tabId);
      }
    });
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // Search
    el.searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderSidebar();
    });

    // Tab buttons
    el.tabButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        switchTab(btn.dataset.tab);
      });
    });

    // Device toggles
    el.deviceBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        el.deviceBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeDevice = btn.dataset.device;

        el.previewIframe.className = `preview-iframe ${state.activeDevice}`;
      });
    });

    // Header Actions
    el.reloadBtn.addEventListener('click', () => {
      const mod = MODULES_DATA.find(m => m.id === state.currentModuleId);
      if (mod) renderPreviewPanel(mod);
    });

    el.resetStorageBtn.addEventListener('click', () => {
      try {
        if (el.previewIframe.contentWindow) {
          el.previewIframe.contentWindow.localStorage.clear();
          el.previewIframe.contentWindow.sessionStorage.clear();
          el.previewIframe.contentWindow.location.reload();
          alert('✨ Storage (Local & Session) pada modul ini telah berhasil dibersihkan dan halaman dimuat ulang!');
        }
      } catch (e) {
        alert('✨ Perintah reset storage dikirim. Halaman iframe akan dimuat ulang.');
        el.reloadBtn.click();
      }
    });

    // Copy Code Button
    el.copyCodeBtn.addEventListener('click', () => {
      const code = el.codeContent.textContent;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = el.copyCodeBtn.textContent;
        el.copyCodeBtn.textContent = '✅ Tersalin!';
        setTimeout(() => {
          el.copyCodeBtn.textContent = originalText;
        }, 2000);
      });
    });

    // Mobile Sidebar Toggle
    el.mobileMenuBtn.addEventListener('click', () => {
      el.sidebarNav.classList.toggle('open');
      el.sidebarBackdrop.classList.toggle('show');
    });

    el.sidebarBackdrop.addEventListener('click', () => {
      el.sidebarNav.classList.remove('open');
      el.sidebarBackdrop.classList.remove('show');
    });

    // Popstate Hash Change
    window.addEventListener('hashchange', () => {
      handleInitialRoute();
      renderSidebar();
      renderActiveModule();
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
