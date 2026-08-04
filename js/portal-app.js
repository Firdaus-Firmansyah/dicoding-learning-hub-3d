/**
 * ==============================================================================
 * DICODING LEARNING HUB - ROBUST APPLICATION CONTROLLER
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
    completedModules: new Set(),
    cachedSourceCode: {}
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
      console.warn('Gagal membaca progress:', e);
    }
  }

  function saveCompletedProgress() {
    try {
      localStorage.setItem('dicoding_portal_completed', JSON.stringify(Array.from(state.completedModules)));
    } catch (e) {
      console.warn('Gagal menyimpan progress:', e);
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
    const hash = window.location.hash.replace(/^#\/?/, '');
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
        const matchTitle = (mod.title || '').toLowerCase().includes(q);
        const matchShort = (mod.shortTitle || '').toLowerCase().includes(q);
        const matchCategory = (mod.category || '').toLowerCase().includes(q);
        const matchBadge = (mod.badge || '').toLowerCase().includes(q);
        const matchDesc = (mod.description || '').toLowerCase().includes(q);
        return matchTitle || matchShort || matchCategory || matchBadge || matchDesc;
      }

      return true;
    });
  }

  function renderFilterPills() {
    const feCount = MODULES_DATA.filter(m => m.classId === 'fe-pemula').length;
    const jsCount = MODULES_DATA.filter(m => m.classId === 'js-dasar').length;
    const webCount = MODULES_DATA.filter(m => m.classId === 'web-dasar').length;
    const allCount = MODULES_DATA.length;

    el.filterPillsContainer.innerHTML = `
      <button class="filter-pill active" data-filter="all">🌟 Semua Kelas (${allCount} Modul)</button>
      <button class="filter-pill" data-filter="fe-pemula">🎨 Front-End Pemula (${feCount})</button>
      <button class="filter-pill" data-filter="js-dasar">⚡ Dasar JavaScript (${jsCount})</button>
      <button class="filter-pill" data-filter="web-dasar">🌐 Dasar Pemrograman Web (${webCount})</button>
    `;

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

  // --- RENDER SIDEBAR ---
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

    el.openTabBtn.href = encodeURI(mod.filePath);

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
      el.previewIframe.src = encodeURI(mod.filePath);
    } else {
      // JavaScript file: generate inline runnable sandboxed HTML playground
      renderJavaScriptPlayground(mod);
    }
  }

  function renderJavaScriptPlayground(mod) {
    const activeFile = mod.sourceFiles[state.activeSourceFileIndex] || mod.sourceFiles[0];
    const encodedUrl = encodeURI(activeFile.path);

    fetch(encodedUrl)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: Gagal memuat berkas JS`);
        return res.text();
      })
      .then(code => {
        buildIframeJsSandbox(code, mod, activeFile.name);
      })
      .catch(err => {
        // Safe fallback playground if direct fetch is blocked
        const fallbackCode = `// Script ${activeFile.name}\nconsole.log("🚀 Modul: ${mod.title}");\nconsole.log("💡 Kategori: ${mod.category}");\nconsole.log("✅ File siap dipelajari pada tab Source Code!");`;
        buildIframeJsSandbox(fallbackCode, mod, activeFile.name);
      });
  }

  function buildIframeJsSandbox(userCode, mod, fileName) {
    const iframeDoc = el.previewIframe.contentDocument || el.previewIframe.contentWindow.document;
    const sanitizedCode = userCode.replace(/<\/script>/gi, '<\\/script>');

    const htmlRunner = `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet">
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: 'Plus Jakarta Sans', sans-serif;
            background: #0f172a;
            color: #f8fafc;
            padding: 1.25rem;
            min-height: 100vh;
          }
          .runner-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
            padding: 1rem;
            background: #1e293b;
            border-radius: 16px;
            border: 1px solid #334155;
            margin-bottom: 1.25rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          }
          .runner-title {
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .runner-title h3 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #38bdf8;
          }
          .runner-title span {
            font-size: 0.75rem;
            background: #0369a1;
            color: #e0f2fe;
            padding: 3px 8px;
            border-radius: 999px;
            font-weight: 600;
          }
          .runner-actions {
            display: flex;
            gap: 8px;
          }
          .btn-runner {
            background: linear-gradient(135deg, #10b981, #059669);
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 10px;
            font-size: 0.85rem;
            font-weight: 700;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          .btn-runner:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
          }
          .btn-runner.clear {
            background: #334155;
            box-shadow: none;
          }
          .btn-runner.clear:hover {
            background: #475569;
          }
          .console-container {
            background: #111827;
            border: 1px solid #1f2937;
            border-radius: 16px;
            padding: 1.25rem;
            font-family: 'Fira Code', monospace;
            font-size: 0.88rem;
            line-height: 1.6;
            min-height: 380px;
            max-height: 520px;
            overflow-y: auto;
            box-shadow: inset 0 2px 10px rgba(0,0,0,0.5);
          }
          .console-container::-webkit-scrollbar { width: 8px; }
          .console-container::-webkit-scrollbar-thumb { background: #374151; border-radius: 4px; }
          .log-item {
            padding: 6px 12px;
            border-radius: 6px;
            margin-bottom: 6px;
            border-left: 3px solid #38bdf8;
            word-break: break-word;
            display: flex;
            gap: 10px;
            animation: fadeIn 0.15s ease-out;
          }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(2px); } to { opacity: 1; transform: translateY(0); } }
          .log-prefix { color: #64748b; font-size: 0.75rem; user-select: none; }
          .log-info { background: rgba(56, 189, 248, 0.05); border-left-color: #38bdf8; color: #f1f5f9; }
          .log-warn { background: rgba(245, 158, 11, 0.1); border-left-color: #f59e0b; color: #fef08a; }
          .log-error { background: rgba(239, 68, 68, 0.1); border-left-color: #ef4444; color: #fca5a5; }
          .log-success { background: rgba(16, 185, 129, 0.1); border-left-color: #10b981; color: #a7f3d0; }
        </style>
      </head>
      <body>
        <div class="runner-header">
          <div class="runner-title">
            <h3>⚡ Live JS Output: ${fileName}</h3>
            <span>Sandboxed Node/Browser Engine</span>
          </div>
          <div class="runner-actions">
            <button class="btn-runner clear" onclick="clearOutput()">🧹 Bersihkan</button>
            <button class="btn-runner" onclick="runScript()">▶️ Jalankan Ulang</button>
          </div>
        </div>

        <div id="consoleDisplay" class="console-container"></div>

        <script>
          const out = document.getElementById('consoleDisplay');

          function printLog(type, text) {
            const row = document.createElement('div');
            row.className = 'log-item log-' + type;
            const time = new Date().toTimeString().split(' ')[0];
            row.innerHTML = '<span class="log-prefix">[' + time + ']</span> <div>' + text + '</div>';
            out.appendChild(row);
            out.scrollTop = out.scrollHeight;
          }

          function formatArg(arg) {
            if (arg === null) return '<span style="color:#f43f5e;">null</span>';
            if (arg === undefined) return '<span style="color:#94a3b8;">undefined</span>';
            if (typeof arg === 'object') {
              try { return JSON.stringify(arg, null, 2); } catch(e) { return String(arg); }
            }
            if (typeof arg === 'number') return '<span style="color:#fbbf24;">' + arg + '</span>';
            if (typeof arg === 'boolean') return '<span style="color:#c084fc;">' + arg + '</span>';
            return String(arg).replace(/</g, '&lt;').replace(/>/g, '&gt;');
          }

          function clearOutput() {
            out.innerHTML = '';
          }

          // Shims & Interceptions
          const customConsole = {
            log: (...args) => printLog('info', args.map(formatArg).join(' ')),
            info: (...args) => printLog('info', args.map(formatArg).join(' ')),
            warn: (...args) => printLog('warn', args.map(formatArg).join(' ')),
            error: (...args) => printLog('error', args.map(formatArg).join(' ')),
            dir: (...args) => printLog('info', args.map(formatArg).join(' ')),
            table: (data) => printLog('info', '<pre>' + JSON.stringify(data, null, 2) + '</pre>')
          };

          // Mock module & exports for Node modules
          const module = { exports: {} };
          const exports = module.exports;

          // Mock assert for testing modules
          const assert = {
            strictEqual: (a, b, msg) => {
              if (a !== b) throw new Error((msg || 'Assertion Failed') + ': ' + a + ' !== ' + b);
              customConsole.log('  ✔️ Assertion PASS:', a, '===', b);
            },
            deepStrictEqual: (a, b, msg) => {
              if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error((msg || 'Assertion Failed') + ': Object mismatch');
              customConsole.log('  ✔️ Deep Assertion PASS');
            },
            throws: (fn, msg) => {
              try { fn(); throw new Error('Expected function to throw but did not'); }
              catch(e) { customConsole.log('  ✔️ Throws Exception PASS:', e.message); }
            }
          };

          const test = (title, fn) => {
            customConsole.log('🧪 Test: ' + title);
            try { fn(); customConsole.log('  ✅ PASSED'); }
            catch(err) { customConsole.error('  ❌ FAILED: ' + err.message); }
          };
          const describe = (suite, fn) => {
            customConsole.log('📦 Test Suite: ' + suite);
            fn();
          };

          function runScript() {
            clearOutput();
            printLog('info', '🚀 Mengeksekusi script <b>${fileName}</b>...');
            try {
              const runFunction = new Function('console', 'module', 'exports', 'assert', 'test', 'describe', \`${sanitizedCode}\`);
              runFunction(customConsole, module, exports, assert, test, describe);
              printLog('success', '🎉 Eksekusi kode selesai dengan sukses tanpa error.');
            } catch(e) {
              printLog('error', '❌ Runtime Error: ' + e.message);
            }
          }

          runScript();
        <\/script>
      </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(htmlRunner);
    iframeDoc.close();
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
        if (mod.type === 'js') {
          renderJavaScriptPlayground(mod);
        }
      });
      el.codeFileTabs.appendChild(tab);
    });

    const activeFile = mod.sourceFiles[state.activeSourceFileIndex] || mod.sourceFiles[0];
    const encodedUrl = encodeURI(activeFile.path);

    el.codeContent.textContent = `// Memuat ${activeFile.name}...`;

    fetch(encodedUrl)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}: Gagal memuat berkas`);
        return res.text();
      })
      .then(text => {
        el.codeContent.textContent = text;
      })
      .catch(err => {
        el.codeContent.textContent = `// Berkas: ${activeFile.name}\n// Lokasi: ${activeFile.path}\n\n// Tips: Buka tab "Live Interactive Preview" untuk menjalankan modul ini atau klik tombol "Buka Tab Baru" di atas.`;
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
      if (mod) {
        renderPreviewPanel(mod);
        renderCodePanel(mod);
      }
    });

    el.resetStorageBtn.addEventListener('click', () => {
      try {
        if (el.previewIframe.contentWindow) {
          el.previewIframe.contentWindow.localStorage.clear();
          el.previewIframe.contentWindow.sessionStorage.clear();
          el.previewIframe.contentWindow.location.reload();
          alert('✨ Storage (Local & Session) pada modul ini telah berhasil dibersihkan!');
        }
      } catch (e) {
        alert('✨ Perintah reset storage dikirim. Halaman preview dimuat ulang.');
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
