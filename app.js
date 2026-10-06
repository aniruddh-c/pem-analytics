/**
 * TASL AERO-SENSE - INDUSTRIAL CONTROL ROOM APPLICATION
 * Condition Based Monitoring, Predictive Breakdown Engine & Multi-Plant Operations
 */

(function () {
  'use strict';

  // Application State
  const state = {
    activeNavTab: 'home', // 'home', 'cbm', 'breakdown'
    activePlantId: 'TSAL', // Default active plant
    activeCbmSubTab: 'machines-matrix', // 'machines-matrix', 'machine-parameters', 'alert-table', 'open-reports', 'closed-reports', 'manuals-library'
    machineViewTab: 'parameters', // 'parameters' or 'analysis'
    selectedMachineId: 'bavius-01',
    selectedManualId: null,
    theme: 'dark',
    tableSearch: '',
    severityFilters: new Set(['critical']), // Default: Critical severity only
    subsystemFilters: new Set(['all']),      // Default: All subsystems
    paramSearch: '',
    bdTimer: null,
    metricsSelectedPlant: 'OVERALL',
    metricsMultiPlants: new Set(['TSAL', 'TASL-NGP', 'TASL-BLR', 'TCOE', 'TASL-H01', 'TBAL', 'TLMAL', 'MCA', 'TASL-XXX']),
    activeSparesSubTab: 'overall',
    sparesSearch: ''
  };

  // Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initClock();
    bindEvents();
    renderPlantFolderTabs();
    renderHomeScreen();
    renderCbmDashboard();
    renderBreakdownDashboard();
    startBreakdownTimer();
  });

  function initClock() {
    const el = document.getElementById('systemClock');
    const update = () => {
      if (el) {
        const now = new Date();
        el.textContent = now.toLocaleDateString() + ' ' + now.toTimeString().split(' ')[0] + ' IST';
      }
    };
    update();
    setInterval(update, 1000);
  }

  function bindEvents() {
    // Primary Nav Tabs
    document.querySelectorAll('.main-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.dataset.tab;
        switchNavTab(tab);
      });
    });

    // Brand logo click goes to Home
    const brand = document.getElementById('brandLogoNav');
    if (brand) {
      brand.addEventListener('click', () => switchNavTab('home'));
    }

    // Theme Toggle
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.addEventListener('click', toggleTheme);
    }

    // Modal Close
    const closeBtn = document.getElementById('modalCloseBtn');
    const backdrop = document.getElementById('modalBackdrop');
    if (closeBtn && backdrop) {
      closeBtn.addEventListener('click', closeModal);
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) closeModal();
      });
    }

    // Back to Machines Button from Machine Parameters
    const backBtn = document.getElementById('backToMachinesBtn');
    if (backBtn) {
      backBtn.addEventListener('click', () => {
        switchCbmSubTab('machines-matrix');
      });
    }

    // CBM Subnav Buttons
    document.querySelectorAll('.cbm-subnav-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sub = btn.dataset.subtab;
        switchCbmSubTab(sub);
      });
    });

    // Predictive Alert Table Search
    const searchInput = document.getElementById('tableSearchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.tableSearch = e.target.value.toLowerCase();
        renderAlertsTable();
      });
    }

    // Severity Filter Popover Toggle
    const sevBtn = document.getElementById('severityFilterBtn');
    const sevPopover = document.getElementById('severityFilterPopover');
    if (sevBtn && sevPopover) {
      sevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sevPopover.classList.toggle('open');
        const subPopover = document.getElementById('subsystemFilterPopover');
        if (subPopover) subPopover.classList.remove('open');
      });
    }

    // Severity Filter Pill Buttons
    document.querySelectorAll('.sev-pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const sev = btn.dataset.sev;
        if (state.severityFilters.has(sev)) {
          if (state.severityFilters.size > 1) {
            state.severityFilters.delete(sev);
            btn.classList.remove('active');
          }
        } else {
          state.severityFilters.add(sev);
          btn.classList.add('active');
        }
        renderAlertsTable();
      });
    });

    // Subsystem Filter Popover Toggle
    const subBtn = document.getElementById('subsystemFilterBtn');
    const subPopover = document.getElementById('subsystemFilterPopover');
    if (subBtn && subPopover) {
      subBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        subPopover.classList.toggle('open');
        if (sevPopover) sevPopover.classList.remove('open');
      });
    }

    // Close popovers on click outside
    document.addEventListener('click', () => {
      if (sevPopover) sevPopover.classList.remove('open');
      if (subPopover) subPopover.classList.remove('open');
    });

    // Export CSV
    const exportBtn = document.getElementById('exportCsvBtn');
    if (exportBtn) {
      exportBtn.addEventListener('click', exportTableToCsv);
    }

    // Parameter search in live parameters view
    const paramSearch = document.getElementById('paramSearchInput');
    if (paramSearch) {
      paramSearch.addEventListener('input', (e) => {
        state.paramSearch = e.target.value.toLowerCase();
        renderMachineParametersPage();
      });
    }

    // Spares search in spares ledger
    const sparesSearch = document.getElementById('sparesSearchInput');
    if (sparesSearch) {
      sparesSearch.addEventListener('input', (e) => {
        state.sparesSearch = e.target.value.toLowerCase();
        renderSparesTable();
      });
    }
  }

  // Primary Tab Switching (Reset subviews on tab switch)
  function switchNavTab(tabId) {
    state.activeNavTab = tabId;

    if (tabId === 'cbm') {
      state.activeCbmSubTab = 'machines-matrix';
    }
    closeModal();

    document.querySelectorAll('.main-tab-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.tab === tabId);
    });

    const homeView = document.getElementById('homeViewSection');
    const cbmView = document.getElementById('cbmViewSection');
    const bdView = document.getElementById('breakdownViewSection');
    const metricsView = document.getElementById('metricsViewSection');
    const sparesView = document.getElementById('sparesViewSection');
    const plantTabsBar = document.getElementById('plantTabsBar');

    if (homeView) homeView.style.display = tabId === 'home' ? 'block' : 'none';
    if (cbmView) cbmView.style.display = tabId === 'cbm' ? 'block' : 'none';
    if (bdView) bdView.style.display = tabId === 'breakdown' ? 'block' : 'none';
    if (metricsView) metricsView.style.display = tabId === 'metrics' ? 'flex' : 'none';
    if (sparesView) sparesView.style.display = tabId === 'spares' ? 'flex' : 'none';

    // Show plant folder tabs on CBM and Breakdown only; hide on Home, Metrics and Spares (they feature their own specialized plant controls)
    if (plantTabsBar) {
      plantTabsBar.style.display = (tabId === 'cbm' || tabId === 'breakdown') ? 'flex' : 'none';
    }

    if (tabId === 'cbm') renderCbmDashboard();
    if (tabId === 'breakdown') renderBreakdownDashboard();
    if (tabId === 'home') renderHomeScreen();
    if (tabId === 'metrics') renderMetricsDashboard();
    if (tabId === 'spares') renderSparesDashboard();
  }

  // Plant Switching
  window.onPlantTabClick = function (plantId) {
    state.activePlantId = plantId;
    renderPlantFolderTabs();
    if (state.activeNavTab === 'cbm') {
      state.activeCbmSubTab = 'machines-matrix';
      renderCbmDashboard();
    }
    if (state.activeNavTab === 'breakdown') renderBreakdownDashboard();
  };

  // Render Folder-style Plant Tabs
  function renderPlantFolderTabs() {
    const container = document.getElementById('plantTabsContainer');
    if (!container) return;

    const plants = window.TASL_PLANTS || [];
    container.innerHTML = plants.map(p => {
      const isActive = p.id === state.activePlantId;
      return `
        <button class="plant-folder-tab ${isActive ? 'active' : ''}" onclick="window.onPlantTabClick('${p.id}')">
          <span>${p.name}</span>
          <span class="tab-machine-badge">${p.totalMachines}</span>
        </button>
      `;
    }).join('');
  }

  // =========================================================================
  // VIEW 1: HOME SCREEN - PLANT CARDS OVERVIEW (old-cbm.webp style)
  // =========================================================================
  function renderHomeScreen() {
    const grid = document.getElementById('homePlantCardsGrid');
    const totalCountEl = document.getElementById('totalMachinesCount');
    if (!grid) return;

    const plants = window.TASL_PLANTS || [];
    const totalMachinesAll = plants.reduce((sum, p) => sum + p.totalMachines, 0);
    if (totalCountEl) totalCountEl.textContent = totalMachinesAll;

    grid.innerHTML = plants.map(p => {
      return `
        <div class="plant-card" onclick="window.navigateToPlant('${p.id}')">
          <div class="plant-card-title">${p.name}</div>

          <!-- Total Machines Circle with Curved Text along Circumference -->
          <div class="total-machines-circle-wrap">
            <svg class="total-machines-svg" viewBox="0 0 110 110">
              <defs>
                <path id="circleArc_${p.id}" d="M 22,55 A 33,33 0 0,1 88,55" fill="none" />
              </defs>
              <circle cx="55" cy="55" r="46" fill="var(--bg-card)" stroke="var(--border-medium)" stroke-width="2.5" />
              <circle cx="55" cy="55" r="46" fill="none" stroke="var(--cyan-primary)" stroke-width="2.5" stroke-dasharray="130 180" stroke-linecap="round" />
              <text font-size="7.5" font-weight="800" fill="var(--text-dim)" letter-spacing="1">
                <textPath href="#circleArc_${p.id}" xlink:href="#circleArc_${p.id}" startOffset="50%" text-anchor="middle">TOTAL MACHINES</textPath>
              </text>
              <text x="55" y="70" font-size="28" font-weight="900" font-family="var(--font-mono)" fill="var(--cyan-primary)" text-anchor="middle">${p.totalMachines}</text>
            </svg>
          </div>

          <!-- 2-Row Grid for Status Squares (Row 1: 3 badges, Row 2: 2 badges) -->
          <div class="status-squares-rect">
            <div class="status-square row-1 running" title="Running: ${p.running}">
              <span class="num">${p.running}</span>
              <span class="txt">Running</span>
            </div>

            <div class="status-square row-1 idle" title="Idle: ${p.idle}">
              <span class="num">${p.idle}</span>
              <span class="txt">Idle</span>
            </div>

            <div class="status-square row-1 alarm" title="Alarm: ${p.alarm}">
              <span class="num">${p.alarm}</span>
              <span class="txt">Alarm</span>
            </div>

            <div class="status-square row-2 shutdown" title="Shut Down: ${p.shutdown}">
              <span class="num">${p.shutdown}</span>
              <span class="txt">Shut Down</span>
            </div>

            <div class="status-square row-2 breakdown" title="Breakdown: ${p.breakdown}">
              <span class="num">${p.breakdown}</span>
              <span class="txt">Breakdown</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  window.navigateToPlant = function (plantId) {
    state.activePlantId = plantId;
    renderPlantFolderTabs();
    switchNavTab('cbm');
  };

  // =========================================================================
  // VIEW 2: CBM & PM DASHBOARD (Modular & Clean)
  // =========================================================================
  function renderCbmDashboard() {
    updateSubnavBadges();
    switchCbmSubTab(state.activeCbmSubTab);
  }

  function updateSubnavBadges() {
    const plantMachines = (window.TASL_MACHINES || []).filter(m => m.plantId === state.activePlantId);
    const bHealth = document.getElementById('badgeHealthMatrix');
    if (bHealth) bHealth.textContent = plantMachines.length;
  }

  function switchCbmSubTab(subTabId) {
    state.activeCbmSubTab = subTabId;

    document.querySelectorAll('.cbm-subnav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subtab === subTabId);
    });

    const machinesView = document.getElementById('cbmMachinesOverviewView');
    const paramsView = document.getElementById('cbmParametersView');
    const alertTableView = document.getElementById('cbmAlertTableView');
    const openReportsView = document.getElementById('cbmOpenReportsView');
    const closedReportsView = document.getElementById('cbmClosedReportsView');
    const manualsView = document.getElementById('cbmManualsView');

    if (machinesView) machinesView.style.display = subTabId === 'machines-matrix' ? 'block' : 'none';
    if (paramsView) paramsView.style.display = subTabId === 'machine-parameters' ? 'block' : 'none';
    if (alertTableView) alertTableView.style.display = subTabId === 'alert-table' ? 'block' : 'none';
    if (openReportsView) openReportsView.style.display = subTabId === 'open-reports' ? 'block' : 'none';
    if (closedReportsView) closedReportsView.style.display = subTabId === 'closed-reports' ? 'block' : 'none';
    if (manualsView) manualsView.style.display = subTabId === 'manuals-library' ? 'block' : 'none';

    if (subTabId === 'machines-matrix') renderCbmMachinesGrid();
    if (subTabId === 'machine-parameters') {
      state.machineViewTab = 'parameters';
      renderMachineParametersPage();
    }
    if (subTabId === 'alert-table') renderAlertsTable();
    if (subTabId === 'open-reports') renderOpenReportsTable();
    if (subTabId === 'closed-reports') renderClosedReportsTable();
    if (subTabId === 'manuals-library') renderManualsLibrary();
  }

  // Render Machine Cards (Modular design matching third image)
  function renderCbmMachinesGrid() {
    const grid = document.getElementById('cbmMachinesGrid');
    if (!grid) return;

    // Dynamically synchronize bavius machine counts with the actual parameters in memory
    const bParams = (window.BAVIUS_PARAMETERS || []).flatMap(g => g.parameters);
    const actualGreens = bParams.filter(p => p.backendZone === 'green').length;
    const actualReds = bParams.filter(p => p.backendZone === 'red').length;
    const actualYellows = bParams.filter(p => p.backendZone === 'yellow').length;

    const plantMachines = (window.TASL_MACHINES || []).map(m => {
      if (m.id === 'bavius-01' && bParams.length > 0) {
        return {
          ...m,
          // User directive: on machine card, show 59 green (50 green + 9 yellow) and 3 red
          greenCardCount: actualGreens + actualYellows,
          greenCount: actualGreens,
          redCount: actualReds,
          yellowCount: actualYellows
        };
      }
      return {
        ...m,
        greenCardCount: (m.greenCount || 0) + (m.yellowCount || 0)
      };
    }).filter(m => m.plantId === state.activePlantId);

    if (plantMachines.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align:center; color:var(--text-muted); background:var(--bg-card); border-radius:12px; border:1px dashed var(--border-medium);">No machines deployed in ${state.activePlantId}. Provisioned expansion slot.</div>`;
      return;
    }

    grid.innerHTML = plantMachines.map(m => {
      const statusClass = m.status.toLowerCase();
      const greenDisplay = m.greenCardCount !== undefined ? m.greenCardCount : ((m.greenCount || 0) + (m.yellowCount || 0));

      return `
        <div class="cbm-card" onclick="window.openMachineParameters('${m.id}')">
          <div class="cbm-card-header">
            <div>
              <h3 class="cbm-machine-name">${m.name}</h3>
              <div class="cbm-machine-model">${m.model}</div>
            </div>
            <button class="cbm-info-btn" title="Machine Asset Specifications" onclick="event.stopPropagation(); window.openMachineInfoModal('${m.id}')">i</button>
          </div>

          <!-- 2 Colored Parameter Zone Boxes: Pastel Green & Pastel Red (Exact 3rd image style) -->
          <div class="parameter-zones-row">
            <div class="zone-box green">
              <span class="zone-count">${greenDisplay}</span>
              <span class="zone-label">GREEN</span>
            </div>

            <div class="zone-box red">
              <span class="zone-count">${m.redCount}</span>
              <span class="zone-label">RED</span>
            </div>
          </div>

          <div class="cbm-card-footer">
            <span class="machine-status-badge ${statusClass}">${m.status}</span>
            <span style="font-size:0.72rem; color:var(--text-dim); font-family:var(--font-mono)">${m.statusDuration}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  // Open Machine Parameters
  window.openMachineParameters = function (machineId) {
    state.selectedMachineId = machineId;
    state.machineViewTab = 'parameters';
    switchCbmSubTab('machine-parameters');
  };

  // Toggle Sub-Tabs inside Machine Details (Parameters vs Analysis)
  window.switchMachineViewTab = function (tab) {
    state.machineViewTab = tab;
    const btnParams = document.getElementById('tabBtnParameters');
    const btnAnalysis = document.getElementById('tabBtnAnalysis');
    const paneParams = document.getElementById('machineParamsPane');
    const paneAnalysis = document.getElementById('machineAnalysisPane');

    if (btnParams && btnAnalysis) {
      btnParams.classList.toggle('active', tab === 'parameters');
      btnAnalysis.classList.toggle('active', tab === 'analysis');
    }
    if (paneParams && paneAnalysis) {
      paneParams.style.display = tab === 'parameters' ? 'block' : 'none';
      paneAnalysis.style.display = tab === 'analysis' ? 'block' : 'none';
    }
  };

  // Render Machine Parameters Page
  function renderMachineParametersPage() {
    const metaContainer = document.getElementById('paramsMachineMeta');
    const anomalyContainer = document.getElementById('paramsAnomalySection');
    const groupsContainer = document.getElementById('paramsGroupsContainer');
    if (!metaContainer || !groupsContainer) return;

    const machine = (window.TASL_MACHINES || []).find(m => m.id === state.selectedMachineId) || (window.TASL_MACHINES || [])[0];

    // Clean, professional metadata without emojis
    metaContainer.innerHTML = `
      <h2>${machine.name}</h2>
      <p>${machine.model} &bull; Station ID: ${machine.stationId} &bull; ${machine.plantLocation || machine.plantId} &bull; Status: ${machine.status} (${machine.statusDuration})</p>
    `;

    // Reset sub-tab display
    window.switchMachineViewTab(state.machineViewTab || 'parameters');

    const groups = window.BAVIUS_PARAMETERS || [];

    // Extract all parameters with analysis objects (Red and Yellow)
    const anomalyParams = [];
    groups.forEach(g => {
      g.parameters.forEach(p => {
        if (p.analysis) {
          anomalyParams.push({ ...p, groupName: g.groupName });
        }
      });
    });

    // Sort: Critical (Red) first, Medium (Yellow) below
    anomalyParams.sort((a, b) => (a.analysis.severity === 'Critical' ? -1 : 1));

    // Render Analysis Pane as Collapsible Row Cards
    if (anomalyContainer) {
      if (anomalyParams.length === 0) {
        anomalyContainer.innerHTML = `
          <div style="padding:24px; text-align:center; color:var(--status-running); background:var(--bg-card); border-radius:8px;">
            All 62 monitored parameters within nominal limits. No anomalies detected.
          </div>
        `;
      } else {
        anomalyContainer.innerHTML = anomalyParams.map(p => {
          const isCrit = p.analysis.severity === 'Critical';
          const indicatorClass = isCrit ? 'red' : 'yellow';
          const sevClass = isCrit ? 'critical' : 'medium';

          return `
            <div class="analysis-collapse-row" id="arow_${p.tag}" onclick="window.toggleAnalysisRow('${p.tag}')">
              <div class="analysis-collapse-head">
                <div class="analysis-head-left">
                  <span class="analysis-indicator ${indicatorClass}"></span>
                  <span class="analysis-head-title">${p.name} — ${p.value} ${p.unit}</span>
                  <span class="analysis-head-sub">${p.groupName}</span>
                </div>
                <div class="analysis-head-right">
                  <span class="analysis-sev-badge ${sevClass}">${p.analysis.severity}</span>
                  <span class="analysis-chevron" id="chevron_${p.tag}">▼</span>
                </div>
              </div>

              <div class="analysis-collapse-body" id="body_${p.tag}" style="display: none;">
                <div class="analysis-grid-details">
                  <div class="analysis-box">
                    <div class="analysis-box-label">Risky Trend</div>
                    <div>${p.analysis.riskyTrend}</div>
                  </div>

                  <div class="analysis-box">
                    <div class="analysis-box-label">Diagnosis</div>
                    <div>${p.analysis.probableReason}</div>
                  </div>

                  <div class="analysis-box">
                    <div class="analysis-box-label">Corrective Recommendations (Manual)</div>
                    <div style="white-space: pre-line; color:var(--text-main); font-size:0.82rem; line-height:1.5;">${p.analysis.manualSolution}</div>
                  </div>

                  <div class="analysis-box spares-box">
                    <div class="analysis-box-label">Spares Required</div>
                    <div class="spares-content">${p.analysis.sparesRequired || 'N/A - Standard preventive maintenance pack.'}</div>
                  </div>

                  <div class="analysis-box">
                    <div class="analysis-box-label">Historical Breakdowns</div>
                    <div>${p.analysis.historicalCorrelation}</div>
                  </div>
                </div>
              </div>
            </div>
          `;
        }).join('');
      }
    }

    // Render Parameters Pane (Groups of sensor cards)
    groupsContainer.innerHTML = groups.map(g => {
      const filtered = g.parameters.filter(p => {
        if (!state.paramSearch) return true;
        return p.name.toLowerCase().includes(state.paramSearch) || p.tag.toLowerCase().includes(state.paramSearch);
      });

      if (filtered.length === 0) return '';

      const cardsHtml = filtered.map(p => {
        const zoneClass = 'zone-' + (p.backendZone || 'green');
        const sparklineSvg = generateSparklineSvg(p.sparkline, p.backendZone);

        return `
          <div class="parameter-card ${zoneClass}" onclick="window.openExpandedParamModal('${p.tag}')" title="Click to view expanded trend graph">
            <div class="param-card-top">
              <div class="param-left-info">
                <div class="param-friendly-name">${p.name}</div>
                <div class="param-val-display">
                  <span class="param-val-num" id="val_${p.tag}">${p.value}</span>
                  <span class="param-val-unit">${p.unit}</span>
                </div>
              </div>
              <div class="param-right-sparkline">
                ${sparklineSvg}
              </div>
            </div>

            <div class="param-divider"></div>

            <!-- Calibrated Risk Meter (Direction-Aware & Mathematically Aligned) -->
            ${renderRiskMeter(p, false)}
          </div>
        `;
      }).join('');

      return `
        <div class="param-group-box">
          <div class="param-group-header">
            <h3 class="param-group-title">${g.groupName}</h3>
            <p class="param-group-desc">${g.description}</p>
          </div>
          <div class="parameters-grid">
            ${cardsHtml}
          </div>
        </div>
      `;
    }).join('');
  }

  // Toggle Analysis Row Card Expansion
  window.toggleAnalysisRow = function (paramTag) {
    const row = document.getElementById(`arow_${paramTag}`);
    const body = document.getElementById(`body_${paramTag}`);
    if (!row || !body) return;

    const isOpen = body.style.display !== 'none';
    body.style.display = isOpen ? 'none' : 'block';
    row.classList.toggle('open', !isOpen);
  };

  // Generate SVG Sparkline
  function generateSparklineSvg(points, zone) {
    if (!points || points.length < 2) return '';
    const w = 100, h = 38;
    const min = Math.min(...points);
    const max = Math.max(...points);
    const span = max - min || 1;

    const strokeColor = zone === 'red' ? '#ef4444' : zone === 'yellow' ? '#f59e0b' : '#10b981';

    const coords = points.map((val, idx) => {
      const x = (idx / (points.length - 1)) * w;
      const y = h - 4 - ((val - min) / span) * (h - 8);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });

    const pathD = 'M ' + coords.join(' L ');

    return `
      <svg viewBox="0 0 ${w} ${h}" class="sparkline-svg">
        <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    `;
  }

  // Calibrated Risk Meter Generator (Direction-Aware, Accurate Thresholds, Ascending Labels)
  function renderRiskMeter(p, isExpanded) {
    const min = p.min;
    const max = p.max;
    const span = (max - min) || 1;
    const val = p.value;
    const direction = p.direction || 'high';

    let segmentsHtml = '';
    let tick1Pct = 0, tick1Val = 0;
    let tick2Pct = 0, tick2Val = 0;
    const needlePct = Math.max(0, Math.min(100, ((val - min) / span) * 100));

    if (direction === 'low') {
      // Lower is worse (e.g. Compressed Air, Vacuum, Tool Clamping Force)
      // Red: [min, alarmLimit], Yellow: [alarmLimit, warnLimit], Green: [warnLimit, max]
      const alarmLimit = p.alarmLimit !== undefined ? p.alarmLimit : (p.zone90 || min);
      const warnLimit = p.warnLimit !== undefined ? p.warnLimit : (p.zone70 || max);

      const wRed = Math.max(0, Math.min(100, ((alarmLimit - min) / span) * 100));
      const wYellow = Math.max(0, Math.min(100 - wRed, ((warnLimit - alarmLimit) / span) * 100));
      const wGreen = Math.max(0, 100 - wRed - wYellow);

      segmentsHtml = `
        <div class="risk-segment red" style="width: ${wRed.toFixed(1)}%;"></div>
        <div class="risk-segment yellow" style="width: ${wYellow.toFixed(1)}%;"></div>
        <div class="risk-segment green" style="width: ${wGreen.toFixed(1)}%;"></div>
      `;

      tick1Pct = wRed;
      tick1Val = alarmLimit;
      tick2Pct = wRed + wYellow;
      tick2Val = warnLimit;
    } else {
      // Higher is worse (e.g. Temperature, Current, Torque, Vibration, RPM)
      // Green: [min, warnLimit], Yellow: [warnLimit, alarmLimit], Red: [alarmLimit, max]
      const warnLimit = p.warnLimit !== undefined ? p.warnLimit : (p.zone70 || (min + span * 0.7));
      const alarmLimit = p.alarmLimit !== undefined ? p.alarmLimit : (p.zone90 || (min + span * 0.9));

      const wGreen = Math.max(0, Math.min(100, ((warnLimit - min) / span) * 100));
      const wYellow = Math.max(0, Math.min(100 - wGreen, ((alarmLimit - warnLimit) / span) * 100));
      const wRed = Math.max(0, 100 - wGreen - wYellow);

      segmentsHtml = `
        <div class="risk-segment green" style="width: ${wGreen.toFixed(1)}%;"></div>
        <div class="risk-segment yellow" style="width: ${wYellow.toFixed(1)}%;"></div>
        <div class="risk-segment red" style="width: ${wRed.toFixed(1)}%;"></div>
      `;

      tick1Pct = wGreen;
      tick1Val = warnLimit;
      tick2Pct = wGreen + wYellow;
      tick2Val = alarmLimit;
    }

    const fmt = (n) => (Number(n) % 1 === 0 ? Number(n) : Number(n).toFixed(1));
    const barHeight = isExpanded ? '12px' : '8px';
    const needleHeight = isExpanded ? '20px' : '16px';

    return `
      <div class="risk-meter-wrap">
        <div class="risk-meter-bar" style="height: ${barHeight};">
          ${segmentsHtml}
          <div class="risk-slider-needle" style="left: ${needlePct.toFixed(1)}%;">
            <div class="needle-pointer" style="height: ${needleHeight};"></div>
          </div>
        </div>
        <div class="risk-meter-labels-relative">
          <span class="meter-label left">${fmt(min)}</span>
          <span class="meter-label tick1" style="left: ${tick1Pct.toFixed(1)}%;">${fmt(tick1Val)}</span>
          <span class="meter-label tick2" style="left: ${tick2Pct.toFixed(1)}%;">${fmt(tick2Val)}</span>
          <span class="meter-label right">${fmt(max)}</span>
        </div>
      </div>
    `;
  }

  // Parameter Card Expanded Modal (Locks body scroll)
  window.openExpandedParamModal = function (paramTag) {
    let targetParam = null;
    let targetGroup = null;

    (window.BAVIUS_PARAMETERS || []).forEach(g => {
      g.parameters.forEach(p => {
        if (p.tag === paramTag) {
          targetParam = p;
          targetGroup = g;
        }
      });
    });

    if (!targetParam) return;

    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');

    title.textContent = `Parameter Telemetry: ${targetParam.name}`;

    const points = targetParam.sparkline || [];
    const min = Math.min(...points);
    const max = Math.max(...points);
    const span = max - min || 1;
    const chartW = 560, chartH = 160;

    const coords = points.map((val, idx) => {
      const x = 40 + (idx / (points.length - 1)) * (chartW - 60);
      const y = chartH - 30 - ((val - min) / span) * (chartH - 50);
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    });

    const pathD = 'M ' + coords.join(' L ');
    const strokeColor = targetParam.backendZone === 'red' ? '#ef4444' : targetParam.backendZone === 'yellow' ? '#f59e0b' : '#10b981';

    let analysisHtml = '';
    if (targetParam.analysis) {
      const solutionRaw = targetParam.analysis.manualSolution || '';
      const rawLines = solutionRaw.split('\n').map(s => s.trim()).filter(Boolean);
      const pointsList = rawLines.map(line => {
        return `<li style="color:var(--text-main); margin-bottom: 4px; font-size: 0.84rem; line-height: 1.5;">${line.replace(/^\d+\.\s*/, '')}</li>`;
      }).join('');

      analysisHtml = `
        <div style="background:var(--bg-card); padding:16px; border-radius:8px; border:1px solid var(--border-medium); display:flex; flex-direction:column; gap:10px;">
          <h4 style="color:var(--status-alarm); font-size:0.9rem; font-weight:800;">Precursor Anomaly Analysis (${targetParam.analysis.severity})</h4>
          <p style="font-size:0.84rem; line-height:1.4;"><strong style="color:var(--text-main);">Risky Trend:</strong> <span style="color:var(--text-muted);">${targetParam.analysis.riskyTrend}</span></p>
          <p style="font-size:0.84rem; line-height:1.4;"><strong style="color:var(--text-main);">Diagnosis:</strong> <span style="color:var(--text-muted);">${targetParam.analysis.probableReason}</span></p>
          <div>
            <strong style="font-size:0.84rem; color:var(--text-main);">Corrective Recommendations (Manual):</strong>
            <ol style="margin-top: 6px; margin-left: 20px; padding: 0; color:var(--text-main);">
              ${pointsList}
            </ol>
          </div>
          <div style="background:linear-gradient(135deg, rgba(2,132,199,0.08), rgba(15,23,42,0.05)); padding:8px 12px; border-radius:6px; border-left:3px solid var(--cyan-primary);">
            <strong style="font-size:0.84rem; color:var(--text-main);">Spares Required:</strong>
            <div style="font-size:0.8rem; color:var(--text-main); margin-top:3px; font-weight:600;">${targetParam.analysis.sparesRequired || 'N/A - Standard preventive inspection kit.'}</div>
          </div>
          <p style="font-size:0.84rem; line-height:1.4;"><strong style="color:var(--text-main);">Historical Breakdowns:</strong> <span style="color:var(--text-muted);">${targetParam.analysis.historicalCorrelation}</span></p>
        </div>
      `;
    }

    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-card); padding:14px 18px; border-radius:8px;">
        <div>
          <h3 style="font-size:1.15rem; font-weight:800;">${targetParam.name}</h3>
          <span style="font-size:0.75rem; color:var(--text-dim);">${targetGroup.groupName}</span>
        </div>
        <div style="text-align:right;">
          <span style="font-size:1.8rem; font-weight:900; font-family:var(--font-mono);">${targetParam.value}</span>
          <span style="font-size:0.85rem; color:var(--text-muted); font-weight:700;">${targetParam.unit}</span>
        </div>
      </div>

      <!-- Expanded 24h Telemetry Chart -->
      <div style="background:var(--bg-surface); padding:14px; border-radius:8px; border:1px solid var(--border-subtle);">
        <div style="display:flex; justify-content:space-between; font-size:0.75rem; color:var(--text-dim); margin-bottom:8px;">
          <span>24-Hour Telemetry Trend Curve</span>
          <span>Sampling Interval: 10s</span>
        </div>
        <svg width="100%" height="${chartH}" viewBox="0 0 ${chartW} ${chartH}" style="display:block;">
          <line x1="40" y1="20" x2="${chartW - 20}" y2="20" stroke="rgba(255,255,255,0.06)" />
          <line x1="40" y1="${chartH / 2}" x2="${chartW - 20}" y2="${chartH / 2}" stroke="rgba(255,255,255,0.06)" />
          <line x1="40" y1="${chartH - 30}" x2="${chartW - 20}" y2="${chartH - 30}" stroke="rgba(255,255,255,0.15)" />
          <text x="35" y="24" fill="var(--text-dim)" font-size="10" text-anchor="end">${max.toFixed(1)}</text>
          <text x="35" y="${chartH - 26}" fill="var(--text-dim)" font-size="10" text-anchor="end">${min.toFixed(1)}</text>
          <path d="${pathD}" fill="none" stroke="${strokeColor}" stroke-width="2.5" />
          <text x="40" y="${chartH - 10}" fill="var(--text-dim)" font-size="10">00:00</text>
          <text x="${chartW / 2}" y="${chartH - 10}" fill="var(--text-dim)" font-size="10" text-anchor="middle">12:00</text>
          <text x="${chartW - 20}" y="${chartH - 10}" fill="var(--text-dim)" font-size="10" text-anchor="end">Now</text>
        </svg>
      </div>

      <!-- Calibrated Risk Meter (Direction-Aware & Mathematically Aligned) -->
      <div style="background:var(--bg-card); padding:14px; border-radius:8px;">
        <div style="font-size:0.75rem; font-weight:700; text-transform:uppercase; color:var(--text-dim); margin-bottom:6px;">Zone Position &amp; Risk Meter</div>
        ${renderRiskMeter(targetParam, true)}
      </div>

      ${analysisHtml}
    `;

    openModal();
  };

  // =========================================================================
  // PREDICTIVE BREAKDOWN ALERT ENGINE TABLE
  // =========================================================================
  function renderAlertsTable() {
    const tbody = document.getElementById('alertsTableBody');
    const countEl = document.getElementById('tableMatchCount');
    const subOptionsEl = document.getElementById('subsystemFilterOptions');
    if (!tbody) return;

    const allAlerts = window.BAVIUS_ALERTS_DATA || [];

    // Populate subsystem filter checkboxes once
    if (subOptionsEl && subOptionsEl.children.length === 0) {
      const uniqueSubsystems = Array.from(new Set(allAlerts.map(a => a.Category))).sort();
      let optionsHtml = `
        <label class="subsystem-filter-item">
          <input type="checkbox" value="all" checked onchange="window.toggleSubsystemFilter('all')">
          <span>All Subsystems</span>
        </label>
      `;
      uniqueSubsystems.forEach(cat => {
        optionsHtml += `
          <label class="subsystem-filter-item">
            <input type="checkbox" value="${cat}" onchange="window.toggleSubsystemFilter('${cat}')">
            <span>${cat}</span>
          </label>
        `;
      });
      subOptionsEl.innerHTML = optionsHtml;
    }

    const filtered = allAlerts.filter(a => {
      const searchMatch = !state.tableSearch ||
        a.BreakdownType.toLowerCase().includes(state.tableSearch) ||
        a.ProbableReason.toLowerCase().includes(state.tableSearch) ||
        a.SuggestedFix.toLowerCase().includes(state.tableSearch) ||
        a.Machine.toLowerCase().includes(state.tableSearch);

      const sevLower = a.Severity.toLowerCase();
      const sevMatch = state.severityFilters.has(sevLower);

      let subMatch = state.subsystemFilters.has('all');
      if (!subMatch) {
        subMatch = state.subsystemFilters.has(a.Category);
      }

      return searchMatch && sevMatch && subMatch;
    });

    if (countEl) {
      countEl.textContent = `${filtered.length} of ${allAlerts.length} predictive alerts`;
    }

    if (filtered.length === 0) {
      tbody.innerHTML = `<tr><td colspan="8" style="text-align:center;padding:32px;color:var(--text-muted)">No matching predictive breakdown alerts found with active filters.</td></tr>`;
      return;
    }

    tbody.innerHTML = filtered.map(a => {
      const sevClass = a.Severity.toLowerCase();
      return `
        <tr>
          <td><span style="font-family:var(--font-mono);font-weight:700">${a.Timestamp.split(' ')[0]}<br><small style="color:var(--text-muted)">${a.Timestamp.split(' ')[1] || ''}</small></span></td>
          <td><strong>${a.Machine}</strong></td>
          <td><span style="font-size:0.72rem;font-weight:800;color:var(--text-dim);text-transform:uppercase;">${a.Category}</span><br><strong>${a.BreakdownType}</strong></td>
          <td><span style="font-family:var(--font-mono);font-size:0.78rem;font-weight:700;color:var(--text-muted)">${a.PastIncidents}</span></td>
          <td><span class="stream-status-pill ${sevClass === 'critical' ? 'active' : ''}">${a.Severity}</span></td>
          <td style="font-size:0.78rem;color:var(--text-muted);">${a.ProbableReason}</td>
          <td><div class="suggested-fix-box">${a.SuggestedFix}</div></td>
          <td><span class="ttb-badge ${sevClass}">XX:XX hrs</span></td>
        </tr>
      `;
    }).join('');
  }

  window.toggleSubsystemFilter = function (cat) {
    if (cat === 'all') {
      state.subsystemFilters.clear();
      state.subsystemFilters.add('all');
      const inputs = document.querySelectorAll('#subsystemFilterOptions input');
      inputs.forEach(inp => {
        inp.checked = inp.value === 'all';
      });
    } else {
      state.subsystemFilters.delete('all');
      const allInp = document.querySelector('#subsystemFilterOptions input[value="all"]');
      if (allInp) allInp.checked = false;

      if (state.subsystemFilters.has(cat)) {
        state.subsystemFilters.delete(cat);
      } else {
        state.subsystemFilters.add(cat);
      }

      if (state.subsystemFilters.size === 0) {
        state.subsystemFilters.add('all');
        if (allInp) allInp.checked = true;
      }
    }
    renderAlertsTable();
  };

  function exportTableToCsv() {
    const alerts = window.BAVIUS_ALERTS_DATA || [];
    if (!alerts.length) return;

    const headers = ['Timestamp', 'Machine', 'Category', 'BreakdownType', 'PastIncidents', 'Severity', 'AnomaliesDetected', 'CorrectiveRecommendations_OEM', 'TimeToBreakdown'];
    const rows = alerts.map(a => [
      `"${a.Timestamp}"`,
      `"${a.Machine}"`,
      `"${a.Category}"`,
      `"${a.BreakdownType}"`,
      `"${a.PastIncidents}"`,
      `"${a.Severity}"`,
      `"${a.ProbableReason.replace(/"/g, '""')}"`,
      `"${a.SuggestedFix.replace(/"/g, '""').replace(/\n/g, ' ')}"`,
      `"${a.TimeToBreakdown}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tasl_predictive_alerts_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // =========================================================================
  // OPEN & CLOSED REPORTS TABLES
  // =========================================================================
  function renderOpenReportsTable() {
    const tbody = document.getElementById('openReportsTableBody');
    if (!tbody) return;

    const reports = window.OPEN_REPORTS_DATA || [];
    tbody.innerHTML = reports.map(r => {
      const redParamsHtml = (r.redParameters || []).map(p => `
        <div style="margin-bottom:4px; line-height:1.45;">
          <span style="color:#ef4444; font-weight:800; margin-right:5px;">●</span><span style="color:var(--text-main); font-weight:600;">${p.name}</span> is <span style="font-family:var(--font-mono); font-weight:800; color:#ef4444; white-space:nowrap;">${p.value}</span>
        </div>
      `).join('');

      return `
        <tr>
          <td><span class="sap-ticket-pill">${r.ticketId}</span></td>
          <td><strong>${r.equipment}</strong></td>
          <td style="font-family:var(--font-mono); font-size:0.78rem; white-space:nowrap;">${r.reportDate}</td>
          <td>
            <div style="font-size:0.77rem; background:rgba(239,68,68,0.06); padding:8px 12px; border-radius:6px; border:1px solid rgba(239,68,68,0.25);">
              ${redParamsHtml || '<span style="color:var(--text-dim);">All parameter values nominal.</span>'}
            </div>
          </td>
          <td>
            <div style="font-size:0.75rem; color:var(--text-main); font-weight:600; line-height:1.4; background:var(--bg-surface); padding:6px 8px; border-radius:4px; border-left:2px solid var(--cyan-primary);">
              ${r.sparesRequired || 'Standard overhaul kit'}
            </div>
          </td>
          <td style="font-size:0.76rem; color:var(--text-muted); line-height:1.4; white-space:pre-line;">${r.recommendation}</td>
          <td style="text-align:center;">
            <span class="stream-status-pill active" style="font-size:0.68rem; padding:3px 8px; white-space:nowrap; display:inline-block;">${r.status}</span>
          </td>
        </tr>
      `;
    }).join('');
  }

  function renderClosedReportsTable() {
    const tbody = document.getElementById('closedReportsTableBody');
    if (!tbody) return;

    const reports = window.CLOSED_REPORTS_DATA || [];
    tbody.innerHTML = reports.map(r => `
      <tr>
        <td><span class="sap-ticket-pill">${r.ticketId}</span></td>
        <td><strong>${r.equipment}</strong></td>
        <td><strong>${r.diagnosis}</strong></td>
        <td style="font-family:var(--font-mono)">${r.detectionDate}</td>
        <td style="font-family:var(--font-mono)">${r.closureDate}</td>
        <td><span style="font-family:var(--font-mono); font-weight:800; color:var(--status-running);">${r.downtimeSaved}</span></td>
        <td><span class="stream-status-pill cleared">${r.status}</span></td>
      </tr>
    `).join('');
  }

  // =========================================================================
  // OEM MANUALS LIBRARY (Split-Screen Viewer with Close Option)
  // =========================================================================
  function renderManualsLibrary() {
    const stack = document.getElementById('manualsCardsStack');
    if (!stack) return;

    const manuals = window.OEM_MANUALS_DATA || [];

    stack.innerHTML = manuals.map(m => {
      const isSelected = state.selectedManualId === m.id;
      return `
        <div class="manual-card ${isSelected ? 'active' : ''}" onclick="window.loadManualDocument('${m.id}')">
          <div class="manual-card-top">
            <span class="manual-card-title">${m.title}</span>
            <span class="manual-pages-pill">${m.pages} Pgs</span>
          </div>
          <div style="font-size:0.72rem; color:var(--cyan-primary); font-weight:700;">${m.model}</div>
          <div class="manual-card-desc">${m.highlights}</div>
          <button class="manual-browse-btn" onclick="event.stopPropagation(); window.loadManualDocument('${m.id}')">Browse Manual &rarr;</button>
        </div>
      `;
    }).join('');
  }

  window.loadManualDocument = function (manualId) {
    state.selectedManualId = manualId;
    const manuals = window.OEM_MANUALS_DATA || [];
    const manual = manuals.find(m => m.id === manualId);
    if (!manual) return;

    renderManualsLibrary();

    const titleEl = document.getElementById('activeManualTitle');
    const linkEl = document.getElementById('manualNewTabLink');
    const closeBtn = document.getElementById('closeManualDocBtn');
    const promptWrap = document.getElementById('manualPromptWrap');
    const frame = document.getElementById('manualPdfFrame');

    if (titleEl) titleEl.textContent = manual.title;
    if (linkEl) {
      linkEl.href = manual.pdfUrl;
      linkEl.style.display = 'inline-block';
    }
    if (closeBtn) closeBtn.style.display = 'inline-block';
    if (promptWrap) promptWrap.style.display = 'none';
    if (frame) {
      frame.style.display = 'block';
      frame.src = manual.pdfUrl;
    }
  };

  // Close Currently Open Manual
  window.closeManualDocument = function () {
    state.selectedManualId = null;
    renderManualsLibrary();

    const titleEl = document.getElementById('activeManualTitle');
    const linkEl = document.getElementById('manualNewTabLink');
    const closeBtn = document.getElementById('closeManualDocBtn');
    const promptWrap = document.getElementById('manualPromptWrap');
    const frame = document.getElementById('manualPdfFrame');

    if (titleEl) titleEl.textContent = 'Select a manual to browse';
    if (linkEl) linkEl.style.display = 'none';
    if (closeBtn) closeBtn.style.display = 'none';
    if (frame) {
      frame.style.display = 'none';
      frame.src = '';
    }
    if (promptWrap) promptWrap.style.display = 'flex';
  };

  // =========================================================================
  // VIEW 3: BREAKDOWN MONITORING DASHBOARD (Compact & Balanced)
  // =========================================================================
  function renderBreakdownDashboard() {
    renderActiveBreakdowns();
    renderTopBreakdownCauses();
    renderEventLogStream();
  }

  function renderActiveBreakdowns() {
    const container = document.getElementById('criticalActiveBreakdownsList');
    const badge = document.getElementById('activeBreakdownsCount');
    if (!container) return;

    // Filter active breakdowns by active plant
    const allBds = window.ACTIVE_BREAKDOWNS || [];
    const plantBds = allBds.filter(b => b.plantId === state.activePlantId);

    if (badge) badge.textContent = plantBds.length;

    // If no active breakdowns for this plant (e.g. TASL-NGP, TCOE, TASL-BLR, TASL-XXX)
    if (plantBds.length === 0) {
      const plantObj = (window.TASL_PLANTS || []).find(p => p.id === state.activePlantId) || { name: state.activePlantId };
      container.innerHTML = `
        <div class="plant-nominal-status-box">
          <div class="nominal-check-icon">&#10003;</div>
          <div class="nominal-title">All Machine Subsystems Operational — ${plantObj.name}</div>
          <div class="nominal-desc">
            Live OPC-UA telemetry link verified. 0 active alarm conditions recorded across all CNC axes, spindles, and auxiliaries.
            Automated SAP maintenance work orders will trigger if any alarm persists &ge; 30 seconds.
          </div>
          <div class="nominal-pills">
            <span class="nominal-pill">OPC Server: <strong>Online (100% Signal Integrity)</strong></span>
            <span class="nominal-pill">Alarm Watchdog: <strong>Active (&lt; 30s Safe Band)</strong></span>
            <span class="nominal-pill">SAP PM Link: <strong>Ready</strong></span>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = plantBds.map((b, idx) => {
      const hours = Math.floor(b.durationSeconds / 3600);
      const mins = Math.floor((b.durationSeconds % 3600) / 60);
      const secs = b.durationSeconds % 60;
      const timerStr = `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;

      const redParamsHtml = (b.redParameters || []).map(p => `
        <span style="display:inline-block; background:rgba(239,68,68,0.12); border:1px solid rgba(239,68,68,0.3); color:#ef4444; font-size:0.7rem; font-weight:700; padding:2px 6px; border-radius:4px; margin-right:4px; margin-bottom:4px;">
          ● ${p.name}: <strong>${p.value}</strong>
        </span>
      `).join('');

      return `
        <div class="active-breakdown-card">
          <div class="bd-card-top-row">
            <span class="bd-machine-tag">${b.machineName} (${b.plantId})</span>
            <span class="live-timer-badge" id="bdTimer_${idx}">⏱ ${timerStr}</span>
          </div>
          <div style="margin:6px 0;">
            ${redParamsHtml}
          </div>
          <div style="font-size:0.75rem; color:var(--text-muted); display:flex; justify-content:space-between; align-items:center;">
            <span>Alarm Tag: <code>${b.alarmTag}</code> (${b.alarmCode})</span>
            <span class="sap-ticket-pill">${b.sapTicketId} &bull; ${b.sapStatus}</span>
          </div>
          <div style="background:rgba(0,0,0,0.25); padding:8px 10px; border-radius:4px; font-size:0.75rem; color:var(--text-muted); border-left:2px solid var(--cyan-primary);">
            <strong style="color:var(--cyan-primary)">OEM Remedy SOP:</strong> ${b.remedy}
          </div>
          <div style="background:linear-gradient(135deg, rgba(2,132,199,0.06), rgba(15,23,42,0.05)); padding:8px 10px; border-radius:4px; font-size:0.75rem; border-left:2px solid #38bdf8;">
            <strong style="color:var(--cyan-primary)">Spares Required:</strong> <span style="color:var(--text-main); font-weight:600;">${b.sparesRequired || 'Standard overhaul kit'}</span>
          </div>
          <div style="display:flex; justify-content:flex-end; gap:8px; margin-top:4px;">
            <button class="ai-remedy-btn" onclick="window.openActiveBdModal(${idx})">AI Remedy Guide</button>
            <button class="ai-remedy-btn" style="background:var(--bg-elevated); color:var(--text-main)" onclick="alert('Breakdown acknowledged. SAP maintenance work order flagged in progress.')">Acknowledge</button>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render Compact Top 5 Breakdown Causes (Last 6 months)
  function renderTopBreakdownCauses() {
    const list = document.getElementById('topCausesList');
    if (!list) return;

    const causes = window.TOP_BREAKDOWN_CAUSES || [];

    list.innerHTML = causes.map((c, idx) => {
      return `
        <div class="top-cause-compact-item" onclick="window.openCauseDetailModal(${idx})" title="Click to view full Root Cause Corrective Action &amp; Manual SOP">
          <div class="top-cause-badge">#${c.rank}</div>
          <div class="top-cause-compact-info">
            <div class="top-cause-compact-title">${c.title}</div>
            <div class="top-cause-compact-meta">${c.downtime} downtime &bull; ${c.incidents} incidents in last 6 months</div>
          </div>
          <div class="top-cause-compact-action">Details &rarr;</div>
        </div>
      `;
    }).join('');
  }

  // Modal for Top Breakdown Cause Detail
  window.openCauseDetailModal = function (idx) {
    const causes = window.TOP_BREAKDOWN_CAUSES || [];
    const c = causes[idx];
    if (!c) return;

    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');

    title.textContent = `Historical Failure Analysis: #${c.rank} ${c.title}`;
    body.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; background:var(--bg-surface); padding:14px 18px; border-radius:8px; border:1px solid var(--border-subtle);">
        <div>
          <h4 style="color:var(--status-alarm); font-size:1.1rem; font-weight:800;">#${c.rank} ${c.title}</h4>
          <span style="font-size:0.75rem; color:var(--text-dim);">Historical Failure Mode Profile</span>
        </div>
        <div style="text-align:right;">
          <div style="font-family:var(--font-mono); font-weight:900; font-size:1.3rem; color:var(--status-alarm);">${c.downtime}</div>
          <div style="font-size:0.72rem; color:var(--text-muted);">${c.incidents} Incidents Logged</div>
        </div>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h5 style="color:var(--cyan-primary); margin-bottom:6px; font-size:0.85rem;">Critical Monitored Parameter</h5>
        <p style="font-size:0.82rem; font-weight:700; color:var(--text-main);">${c.param}</p>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h5 style="color:var(--status-running); margin-bottom:8px; font-size:0.85rem;">Root Cause Corrective Action (RCCA)</h5>
        <p style="font-size:0.82rem; color:var(--text-main); line-height:1.45;">${c.rcca}</p>
      </div>

      <div style="background:var(--bg-surface); padding:14px 16px; border-radius:8px; border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.7rem; font-weight:800; color:var(--text-dim); text-transform:uppercase;">Official OEM Documentation Reference</div>
          <div style="font-size:0.8rem; font-weight:700; color:var(--cyan-primary);">${c.manualCitation}</div>
        </div>
        <button class="ai-remedy-btn" onclick="closeModal(); switchNavTab('cbm'); switchCbmSubTab('manuals-library');">Open Manuals &rarr;</button>
      </div>
    `;

    openModal();
  };

  // Render Event Log Stream (Last 50 Signals) - Multi-code ID stacked vertically with Unplanned Downtime
  function renderEventLogStream() {
    const tbody = document.getElementById('eventLogStreamBody');
    if (!tbody) return;

    const events = (window.EVENT_LOG_STREAM || []).slice(0, 50);

    tbody.innerHTML = events.map((ev, i) => {
      const codes = ev.identifier.split('/').map(c => c.trim()).filter(c => c);
      const codeStackHtml = `<div class="code-stack">${codes.map(c => `<span>${c}</span>`).join('')}</div>`;

      const isLive = ev.status === 'ACTIVE';
      const dSecs = ev.downtimeSeconds || 3600;
      const hours = Math.floor(dSecs / 3600);
      const mins = Math.floor((dSecs % 3600) / 60);
      const secs = dSecs % 60;
      const formattedDuration = `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;

      const downtimeBadge = isLive
        ? `<span class="live-downtime-ticker" id="streamTimer_${i}">⏱ ${formattedDuration}</span>`
        : `<span class="frozen-downtime-badge">${ev.downtimeDurationStr || formattedDuration}</span>`;

      return `
        <tr>
          <td style="font-family:var(--font-mono)">${ev.timestamp}</td>
          <td>${codeStackHtml}</td>
          <td><strong>${ev.machineName}</strong><br><small style="color:var(--text-muted)">${ev.description}</small></td>
          <td style="text-align:center;">${downtimeBadge}</td>
          <td><span class="stream-status-pill ${ev.status.toLowerCase()}">${ev.status}</span></td>
          <td><button class="ai-remedy-btn" onclick="window.openEventRemedyModal(${i})">AI Remedy</button></td>
        </tr>
      `;
    }).join('');
  }

  // Active Breakdowns & Event Log Stream Live Tickers
  function startBreakdownTimer() {
    clearInterval(state.bdTimer);
    state.bdTimer = setInterval(() => {
      // 1. Update Active Breakdowns
      const bds = window.ACTIVE_BREAKDOWNS || [];
      bds.forEach((b, idx) => {
        b.durationSeconds += 1;
        const el = document.getElementById(`bdTimer_${idx}`);
        if (el) {
          const hours = Math.floor(b.durationSeconds / 3600);
          const mins = Math.floor((b.durationSeconds % 3600) / 60);
          const secs = b.durationSeconds % 60;
          el.textContent = `⏱ ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
        }
      });

      // 2. Update Event Log Stream active tickets live downtime ticker
      const events = window.EVENT_LOG_STREAM || [];
      events.slice(0, 50).forEach((ev, idx) => {
        if (ev.status === 'ACTIVE') {
          ev.downtimeSeconds = (ev.downtimeSeconds || 0) + 1;
          const el = document.getElementById(`streamTimer_${idx}`);
          if (el) {
            const hours = Math.floor(ev.downtimeSeconds / 3600);
            const mins = Math.floor((ev.downtimeSeconds % 3600) / 60);
            const secs = ev.downtimeSeconds % 60;
            el.textContent = `⏱ ${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m ${String(secs).padStart(2, '0')}s`;
          }
        }
      });
    }, 1000);
  }

  // Machine Asset Info Modal
  window.openMachineInfoModal = function (machineId) {
    const machine = (window.TASL_MACHINES || []).find(m => m.id === machineId);
    if (!machine) return;

    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');

    title.textContent = `Machine Asset: ${machine.name}`;
    body.innerHTML = `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
        <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
          <h4 style="color:var(--cyan-primary); margin-bottom:10px; font-size:0.9rem;">Machine Specification</h4>
          <p style="margin-bottom:6px;"><strong>OEM:</strong> ${machine.oem}</p>
          <p style="margin-bottom:6px;"><strong>Model:</strong> ${machine.model}</p>
          <p><strong>Plant Location:</strong> ${machine.plantLocation || machine.plantId}</p>
        </div>
        <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
          <h4 style="color:var(--cyan-primary); margin-bottom:10px; font-size:0.9rem;">Operational Status</h4>
          <p style="margin-bottom:6px;"><strong>Current Status:</strong> ${machine.status}</p>
          <p><strong>Active State Duration:</strong> ${machine.statusDuration}</p>
        </div>
      </div>
      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h4 style="color:var(--cyan-primary); margin-bottom:8px; font-size:0.9rem;">Monitored Subsystem Profile</h4>
        <p style="font-size:0.82rem; color:var(--text-muted);">${machine.desc}</p>
      </div>
    `;

    openModal();
  };

  // AI Remedy Guide Modal for Active Breakdowns
  window.openActiveBdModal = function (idx) {
    const bd = (window.ACTIVE_BREAKDOWNS || [])[idx];
    if (!bd) return;

    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');

    title.textContent = `Breakdown AI Remedy: ${bd.machineName} (${bd.plantId})`;
    const redParamsHtml = (bd.redParameters || []).map(p => `
      <div style="font-size:0.78rem; color:#ef4444; background:rgba(239,68,68,0.08); padding:5px 8px; border-radius:4px; margin-bottom:4px; display:inline-block; margin-right:6px; border:1px solid rgba(239,68,68,0.25);">
        ● <strong>${p.name}:</strong> <span style="font-family:var(--font-mono); font-weight:800;">${p.value}</span>
      </div>
    `).join('');

    body.innerHTML = `
      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h4 style="color:var(--status-alarm); margin-bottom:8px;">Active Breakdown Ticket ${bd.sapTicketId}</h4>
        <p style="margin-bottom:4px;"><strong>Machine:</strong> ${bd.machineName} (${bd.plantId})</p>
        <p style="margin-bottom:4px;"><strong>Triggered At:</strong> ${bd.activeSince}</p>
        <p style="margin-bottom:4px;"><strong>Alarm Tag:</strong> <code>${bd.alarmTag}</code> (${bd.alarmCode})</p>
        <div style="margin: 8px 0;">
          <strong style="font-size:0.78rem; color:var(--text-main); display:block; margin-bottom:4px;">Anomalous Parameters:</strong>
          ${redParamsHtml || '<span style="font-size:0.75rem; color:var(--text-muted);">No individual telemetry signals logged</span>'}
        </div>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle); margin-top:12px;">
        <h4 style="color:var(--cyan-primary); margin-bottom:8px;">OEM Remedy Standard Operating Procedure</h4>
        <p style="font-size:0.85rem; line-height:1.5;">${bd.remedy}</p>
      </div>

      <div style="background:linear-gradient(135deg, rgba(2,132,199,0.06), rgba(15,23,42,0.05)); padding:16px; border-radius:8px; border:1px solid rgba(2,132,199,0.25); margin-top:12px;">
        <h4 style="color:var(--cyan-primary); margin-bottom:6px;">Required Spare Parts</h4>
        <p style="font-size:0.85rem; font-weight:600; color:var(--text-main);">${bd.sparesRequired || 'Standard overhaul kit'}</p>
      </div>
    `;

    openModal();
  };

  // AI Remedy Modal for Event Log Stream
  window.openEventRemedyModal = function (idx) {
    const ev = (window.EVENT_LOG_STREAM || [])[idx];
    if (!ev) return;

    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');

    title.textContent = `Signal Diagnostic: ${ev.identifier}`;
    body.innerHTML = `
      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h4 style="color:var(--cyan-primary); margin-bottom:8px;">Event Signal Profile</h4>
        <p style="margin-bottom:4px;"><strong>Identifier:</strong> <code>${ev.identifier}</code></p>
        <p style="margin-bottom:4px;"><strong>Timestamp:</strong> ${ev.timestamp}</p>
        <p style="margin-bottom:4px;"><strong>Machine:</strong> ${ev.machineName}</p>
        <p style="margin-bottom:4px;"><strong>Fault:</strong> ${ev.description}</p>
        <p><strong>Root Cause:</strong> ${ev.reason}</p>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h4 style="color:var(--cyan-primary); margin-bottom:8px;">Remedy Procedure</h4>
        <pre style="white-space:pre-wrap; font-family:var(--font-sans); font-size:0.82rem; color:var(--text-main); margin-bottom:8px;">${ev.fullRemedy}</pre>
        <div style="font-size:0.75rem; color:var(--cyan-primary); font-weight:700; background:rgba(2,132,199,0.1); padding:6px 10px; border-radius:4px; border:1px solid var(--border-accent);">
          Manual Citation: ${ev.manualCitation || 'Bavius HBZ CC Operating Instructions, Chapter 9'}
        </div>
      </div>

      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle);">
        <h4 style="color:var(--status-idle); margin-bottom:8px;">Historical Breakdowns</h4>
        <p style="font-size:0.82rem; color:var(--text-muted);">${ev.historyPrecedent || 'N/A'}</p>
      </div>
    `;
    openModal();
  };

  window.openModal = openModal;
  function openModal() {
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) backdrop.classList.add('open');
    document.body.classList.add('modal-open');
    document.body.style.overflow = 'hidden';
  }

  window.closeModal = closeModal;
  function closeModal() {
    const backdrop = document.getElementById('modalBackdrop');
    if (backdrop) backdrop.classList.remove('open');
    document.body.classList.remove('modal-open');
    document.body.style.overflow = '';
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    const icon = document.getElementById('themeToggleIcon');
    if (icon) icon.textContent = state.theme === 'dark' ? '🌙' : '☀️';
  }


  // =========================================================================
  // OEM MANUAL UPLOAD MODAL & WORKFLOW
  // =========================================================================
  window.openUploadManualModal = function () {
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');
    const panel = document.getElementById('modalPanel');
    if (panel) panel.classList.remove('modal-xlarge');

    title.textContent = "Upload OEM Technical Documentation";
    body.innerHTML = `
      <div style="background:var(--bg-surface); padding:16px; border-radius:8px; border:1px solid var(--border-subtle); display:flex; flex-direction:column; gap:12px;">
        <div>
          <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:4px;">Manual Document Title</label>
          <input type="text" id="uploadManualTitle" placeholder="e.g., Fischer MFW-1920/30/1 Spindle Operating & Maintenance Manual" style="width:100%; background:var(--bg-card); border:1px solid var(--border-medium); color:var(--text-main); padding:8px 12px; border-radius:6px; font-size:0.85rem;">
        </div>

        <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
          <div>
            <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:4px;">Subsystem Category</label>
            <select id="uploadManualCategory" style="width:100%; background:var(--bg-card); border:1px solid var(--border-medium); color:var(--text-main); padding:8px 12px; border-radius:6px; font-size:0.85rem;">
              <option value="Main Spindle">Main Spindle</option>
              <option value="Cooling System">Cooling System</option>
              <option value="Hydraulics">Hydraulics</option>
              <option value="Coolant & Lubrication">Coolant &amp; Lubrication</option>
              <option value="Workholding">Workholding</option>
              <option value="Pneumatics">Pneumatics</option>
              <option value="Motion Drives">Motion Drives</option>
              <option value="Tool Changer">Tool Changer</option>
              <option value="Spindle Diagnostics">Spindle Diagnostics</option>
              <option value="Machine General">Machine General</option>
            </select>
          </div>
          <div>
            <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:4px;">Machine Model</label>
            <input type="text" id="uploadManualModel" placeholder="e.g., Bavius HBZ Compact Cell 200/100" style="width:100%; background:var(--bg-card); border:1px solid var(--border-medium); color:var(--text-main); padding:8px 12px; border-radius:6px; font-size:0.85rem;">
          </div>
        </div>

        <div>
          <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:4px;">Technical Highlights / Key SOP Procedures</label>
          <textarea id="uploadManualHighlights" rows="3" placeholder="Disassembly tolerances, PTC sensor resistance limits, hydraulic clamping pressures, and recommended lubricants..." style="width:100%; background:var(--bg-card); border:1px solid var(--border-medium); color:var(--text-main); padding:8px 12px; border-radius:6px; font-size:0.82rem; font-family:var(--font-sans);"></textarea>
        </div>

        <div>
          <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-dim); text-transform:uppercase; margin-bottom:4px;">Select Technical Document (.PDF)</label>
          <div style="border:2px dashed var(--border-accent); border-radius:8px; padding:22px; text-align:center; background:rgba(2,132,199,0.03); cursor:pointer;" onclick="document.getElementById('manualFileInput').click()">
            <div style="font-size:2rem; margin-bottom:6px;">📄</div>
            <div style="font-size:0.85rem; font-weight:700; color:var(--cyan-primary);">Click or drag PDF manual here to upload</div>
            <div style="font-size:0.7rem; color:var(--text-dim); margin-top:4px;">Max file size: 100MB • Formats: PDF, PDF/A</div>
            <input type="file" id="manualFileInput" accept=".pdf" style="display:none;" onchange="window.handleManualFileSelected(this)">
            <div id="selectedFileName" style="margin-top:8px; font-size:0.78rem; font-family:var(--font-mono); color:var(--status-running); font-weight:800;"></div>
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:8px;">
          <button class="ai-remedy-btn" style="background:var(--bg-card); color:var(--text-muted); border:1px solid var(--border-medium);" onclick="closeModal()">Cancel</button>
          <button class="ai-remedy-btn" onclick="window.submitManualUpload()">Upload to Library &rarr;</button>
        </div>
      </div>
    `;

    openModal();
  };

  window.handleManualFileSelected = function (input) {
    const file = input.files[0];
    const el = document.getElementById('selectedFileName');
    if (file && el) {
      el.textContent = `Selected: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)`;
    }
  };

  window.submitManualUpload = function () {
    const titleInput = document.getElementById('uploadManualTitle');
    const categoryInput = document.getElementById('uploadManualCategory');
    const modelInput = document.getElementById('uploadManualModel');
    const highlightsInput = document.getElementById('uploadManualHighlights');
    const fileInput = document.getElementById('manualFileInput');

    if (!titleInput || !titleInput.value.trim()) {
      alert("Please enter a title for the manual.");
      return;
    }

    const title = titleInput.value.trim();
    const category = categoryInput ? categoryInput.value : 'Machine General';
    const model = modelInput && modelInput.value.trim() ? modelInput.value.trim() : 'Universal CNC Asset';
    const highlights = highlightsInput && highlightsInput.value.trim() ? highlightsInput.value.trim() : 'User uploaded OEM technical manual.';
    const file = fileInput && fileInput.files ? fileInput.files[0] : null;

    let pdfUrl = "/manuals/00_Operating_Instructions/Operating instructions en.pdf";
    if (file) {
      pdfUrl = URL.createObjectURL(file);
    }

    const newManual = {
      id: "man-uploaded-" + Date.now(),
      title: title,
      model: model,
      pdfUrl: pdfUrl,
      pages: 140,
      category: category,
      highlights: highlights
    };

    if (!window.OEM_MANUALS_DATA) window.OEM_MANUALS_DATA = [];
    window.OEM_MANUALS_DATA.unshift(newManual);

    closeModal();
    renderManualsLibrary();
    window.loadManualDocument(newManual.id);

    alert(`Manual "${title}" uploaded successfully to OEM Documentation Library!`);
  };

  // =========================================================================
  // CUSTOMIZED PM CHECKLIST ENGINE (SAP Tasklist IA05/IA06 Integration)
  // =========================================================================
  window.openCustomizedPmModal = function (activeFilter = 'all') {
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalContentBody');
    const panel = document.getElementById('modalPanel');
    if (panel) panel.classList.add('modal-xlarge');

    const pmData = window.PM_CHECKLIST_DATA;
    if (!pmData) return;

    state.pmChecklistFilter = activeFilter;

    let filteredOps = pmData.operations;
    if (activeFilter === 'ai_optimized') {
      filteredOps = pmData.operations.filter(op => op.status === 'AI_ESCALATED' || op.status === 'AI_ADDED');
    } else if (activeFilter === 'monthly') {
      filteredOps = pmData.operations.filter(op => op.grp === '1');
    } else if (activeFilter === 'quarterly') {
      filteredOps = pmData.operations.filter(op => op.grp === '2');
    } else if (activeFilter === 'half_yearly') {
      filteredOps = pmData.operations.filter(op => op.grp === '3');
    } else if (activeFilter === 'yearly') {
      filteredOps = pmData.operations.filter(op => op.grp === '4');
    }

    title.textContent = `Customized PM Checklist & SAP Tasklist Optimization Engine`;

    const rowsHtml = filteredOps.map(op => {
      let badgeHtml = `<span class="pm-badge-standard">STANDARD</span>`;
      let freqDisplay = op.freq;

      if (op.status === 'AI_ESCALATED') {
        badgeHtml = `<span class="pm-badge-escalated">ESCALATED FREQUENCY</span>`;
        freqDisplay = `<span style="text-decoration:line-through; color:var(--text-dim); margin-right:4px;">${op.freq}</span> <strong style="color:#f59e0b;">${op.aiAction}</strong>`;
      } else if (op.status === 'AI_ADDED') {
        badgeHtml = `<span class="pm-badge-added">NEW AI TASK</span>`;
        freqDisplay = `<strong style="color:#10b981;">${op.freq}</strong>`;
      }

      return `
        <tr>
          <td style="font-family:var(--font-mono); font-weight:800;">${op.act}</td>
          <td style="font-family:var(--font-mono); font-size:0.75rem;">${pmData.workCenter}</td>
          <td>
            <strong>${op.desc}</strong>
            ${op.justification ? `<div style="font-size:0.72rem; color:var(--text-muted); margin-top:3px; line-height:1.3;"><strong style="color:var(--cyan-primary);">AI Justification:</strong> ${op.justification}</div>` : ''}
          </td>
          <td>${freqDisplay}</td>
          <td><span style="font-family:var(--font-mono); font-size:0.75rem;">${op.work} ${op.unit}</span></td>
          <td>${badgeHtml}</td>
        </tr>
      `;
    }).join('');

    body.innerHTML = `
      <!-- Equipment & SAP Tasklist Meta Banner -->
      <div class="pm-meta-banner">
        <div>
          <div class="pm-meta-block-title">Target Machine Asset &amp; SAP PM Plan</div>
          <div class="pm-meta-block-val">${pmData.equipmentName} (${pmData.equipmentId})</div>
          <div style="font-size:0.75rem; color:var(--text-dim); margin-top:2px;">SAP Tasklist Group: <strong>${pmData.tasklistGroup}</strong> &bull; Work Center: <strong>${pmData.workCenter}</strong> &bull; Plant: <strong>${pmData.plant}</strong></div>
        </div>
        <div>
          <div class="pm-meta-block-title">AI Evaluation Cycle</div>
          <div class="pm-meta-block-val" style="color:var(--cyan-primary);">Every 6 - 12 Months</div>
          <div style="font-size:0.72rem; color:var(--text-dim); margin-top:2px;">Next Scheduled: ${pmData.nextScheduledAiReview}</div>
        </div>
        <div style="display:flex; flex-direction:column; justify-content:center; align-items:flex-end;">
          <button class="pm-action-run-btn" id="runAiPmBtn" onclick="window.runManualPmOptimization()">
            <span>⚡</span> Run AI PM Optimization
          </button>
        </div>
      </div>

      <!-- KPI Summary Strip -->
      <div class="pm-kpi-summary-strip">
        <div class="pm-kpi-box">
          <div class="pm-kpi-num">${pmData.summary.totalBaselineOps}</div>
          <div class="pm-kpi-label">Baseline SAP Ops</div>
        </div>
        <div class="pm-kpi-box">
          <div class="pm-kpi-num" style="color:#f59e0b;">${pmData.summary.frequencyEscalatedOps}</div>
          <div class="pm-kpi-label">Frequency Escalated</div>
        </div>
        <div class="pm-kpi-box">
          <div class="pm-kpi-num" style="color:#10b981;">+${pmData.summary.newConditionOpsAdded}</div>
          <div class="pm-kpi-label">New Predictive Tasks</div>
        </div>
        <div class="pm-kpi-box">
          <div class="pm-kpi-num" style="color:var(--cyan-primary);">${pmData.summary.estimatedDowntimeAvoidanceHrs}</div>
          <div class="pm-kpi-label">Est. Avoided Downtime</div>
        </div>
      </div>

      <!-- Filter Toolbar -->
      <div class="pm-filter-toolbar">
        <div class="pm-pills-wrap">
          <button class="pm-pill-btn ${activeFilter === 'all' ? 'active' : ''}" onclick="window.openCustomizedPmModal('all')">All Operations (${pmData.operations.length})</button>
          <button class="pm-pill-btn ${activeFilter === 'ai_optimized' ? 'active' : ''}" onclick="window.openCustomizedPmModal('ai_optimized')">AI Optimized Only (${pmData.summary.frequencyEscalatedOps + pmData.summary.newConditionOpsAdded})</button>
          <button class="pm-pill-btn ${activeFilter === 'monthly' ? 'active' : ''}" onclick="window.openCustomizedPmModal('monthly')">Monthly PM (Grp 1)</button>
          <button class="pm-pill-btn ${activeFilter === 'quarterly' ? 'active' : ''}" onclick="window.openCustomizedPmModal('quarterly')">Quarterly PM (Grp 2)</button>
          <button class="pm-pill-btn ${activeFilter === 'half_yearly' ? 'active' : ''}" onclick="window.openCustomizedPmModal('half_yearly')">Half-Yearly (Grp 3)</button>
          <button class="pm-pill-btn ${activeFilter === 'yearly' ? 'active' : ''}" onclick="window.openCustomizedPmModal('yearly')">Yearly (Grp 4)</button>
        </div>
        <button class="ai-remedy-btn" style="background:linear-gradient(135deg, #059669, #047857);" onclick="window.exportPmTasklistToSap()">
          Export &amp; Sync to SAP PM (IA05) &rarr;
        </button>
      </div>

      <!-- Comparison Operations Table -->
      <div class="pm-table-wrap">
        <table class="pm-table">
          <thead>
            <tr>
              <th style="width: 70px;">Op #</th>
              <th style="width: 90px;">Work Ctr</th>
              <th>Operation Description &amp; Failure Correlation</th>
              <th style="width: 170px;">Optimized Frequency</th>
              <th style="width: 80px;">Standard</th>
              <th style="width: 150px;">AI Status</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    `;

    openModal();
  };

  window.runManualPmOptimization = function () {
    const btn = document.getElementById('runAiPmBtn');
    if (btn) {
      btn.innerHTML = `<span class="pm-gear-icon" style="display:inline-block; animation:spin 1s infinite linear;">⚙</span> Correlating Telemetry...`;
      btn.disabled = true;
    }

    setTimeout(() => {
      alert("AI Correlation Complete!\n\n100 Historical Breakdown Incidents and 250,571 Telemetry Points cross-referenced against Fischer, Rittal, and Bavius OEM Manuals.\n\n- 5 Preventive maintenance frequencies escalated\n- 4 High-impact predictive condition-monitoring tasks added\n- Expected downtime reduction: 142.5 hrs/year");
      if (btn) {
        btn.innerHTML = `<span>⚡</span> Run AI PM Optimization`;
        btn.disabled = false;
      }
      window.openCustomizedPmModal('ai_optimized');
    }, 1200);
  };

  window.exportPmTasklistToSap = function () {
    alert("SAP PM Tasklist Synchronization Successful!\n\nTransaction: IA05 / IA06\nEquipment: 11000452 (Bavius 4mtr N01-02)\nGroup: 12240 (Work Center N01_PEM, Plant 1041)\n\nOptimized frequencies and 4 new condition-monitoring operations have been pushed to SAP PM production schedule.");
  };

  // =========================================================================
  // METRICS DASHBOARD ENGINE (Senior Leadership Operational Metrics)
  // =========================================================================
  function renderMetricsDashboard() {
    const data = window.METRICS_DASHBOARD_DATA;
    if (!data) return;

    renderMetricsPlantControls();
    updateMetricsActionCards();
    renderMetricsVisualCharts();
    renderMetricsTable();
  }

  function renderMetricsPlantControls() {
    const pillsContainer = document.getElementById('metricsPlantPillsContainer');
    const badgeEl = document.getElementById('metricsScopeBadge');
    const data = window.METRICS_DASHBOARD_DATA;
    if (!pillsContainer || !data) return;

    let tabsHtml = `
      <button class="metric-plant-tab ${state.metricsSelectedPlant === 'OVERALL' ? 'active' : ''}" onclick="window.selectMetricsPlant('OVERALL')">
        All Plants
      </button>
    `;

    data.plants.forEach(p => {
      const isAct = state.metricsSelectedPlant === p.id;
      tabsHtml += `
        <button class="metric-plant-tab ${isAct ? 'active' : ''}" onclick="window.selectMetricsPlant('${p.id}')">
          ${p.id}
        </button>
      `;
    });
    pillsContainer.innerHTML = tabsHtml;

    if (badgeEl) {
      if (state.metricsSelectedPlant === 'OVERALL') {
        badgeEl.innerHTML = `<span class="opc-dot"></span> SCOPE: ALL PLANTS (${data.overall.totalMachines} ASSETS)`;
      } else {
        const plant = data.plants.find(p => p.id === state.metricsSelectedPlant);
        badgeEl.innerHTML = `<span class="opc-dot"></span> SCOPE: ${plant ? plant.id : state.metricsSelectedPlant} (${plant ? plant.machinesCount : 0} ASSETS)`;
      }
    }
  }

  window.selectMetricsPlant = function (plantId) {
    state.metricsSelectedPlant = plantId;
    renderMetricsDashboard();
  };

  function updateMetricsActionCards() {
    const data = window.METRICS_DASHBOARD_DATA;
    if (!data) return;

    let target;
    let isOverall = state.metricsSelectedPlant === 'OVERALL';

    if (isOverall) {
      target = data.overall;
    } else {
      target = data.plants.find(p => p.id === state.metricsSelectedPlant) || data.overall;
    }

    // Downtime Today
    const elToday = document.getElementById('metricValToday');
    if (elToday) elToday.innerHTML = `${target.downtimeToday.toFixed(2)} <span class="unit">hrs</span>`;

    // Downtime Month
    const elMonth = document.getElementById('metricValMonth');
    if (elMonth) elMonth.innerHTML = `${target.downtimeMonth.toLocaleString('en-IN', {minimumFractionDigits: 2, maximumFractionDigits: 2})} <span class="unit">hrs</span>`;

    // Downtime YTD
    const elYtd = document.getElementById('metricValYtd');
    if (elYtd) elYtd.innerHTML = `${target.downtimeYtd.toLocaleString('en-IN', {minimumFractionDigits: 1, maximumFractionDigits: 1})} <span class="unit">hrs</span>`;

    // Connected Machines
    const elMach = document.getElementById('metricValMachines');
    const machCount = isOverall ? target.totalMachines : target.machinesCount;
    if (elMach) elMach.innerHTML = `${machCount} <span class="unit">Units</span>`;

    // Equipment Availability
    const elAvail = document.getElementById('metricValAvail');
    const availVal = target.availabilityPct;
    if (elAvail) {
      elAvail.innerHTML = `${availVal.toFixed(2)}<span class="unit">%</span>`;
      elAvail.className = 'metric-card-val ' + (availVal >= 99.5 ? 'success' : (availVal >= 95 ? '' : 'danger'));
    }

    // PM Compliance
    const elPm = document.getElementById('metricValPm');
    if (elPm) {
      elPm.innerHTML = `${target.pmCompliancePct.toFixed(1)}<span class="unit">%</span>`;
      elPm.className = 'metric-card-val ' + (target.pmCompliancePct >= 95 ? 'success' : '');
    }

    // MTBF
    const elMtbf = document.getElementById('metricValMtbf');
    if (elMtbf) elMtbf.innerHTML = `${target.mtbfHrs.toLocaleString('en-IN', {maximumFractionDigits: 1})} <span class="unit">hrs</span>`;

    // MTTR
    const elMttr = document.getElementById('metricValMttr');
    if (elMttr) elMttr.innerHTML = `${target.mttrHrs.toFixed(2)} <span class="unit">hrs</span>`;
  }

  function renderMetricsVisualCharts() {
    const data = window.METRICS_DASHBOARD_DATA;
    if (!data) return;

    let activePlants = data.plants.filter(p => state.metricsMultiPlants.has(p.id) && p.id !== 'TASL-XXX');
    if (activePlants.length === 0) activePlants = data.plants.filter(p => p.id !== 'TASL-XXX');

    // 1. Availability Chart
    renderAvailabilityChart(document.getElementById('availabilityChartContainer'), activePlants);

    // 2. MTBF vs MTTR Chart
    renderMtbfMttrChart(document.getElementById('mtbfMttrChartContainer'), activePlants);

    // 3. PM Compliance Chart
    renderPmComplianceChart(document.getElementById('pmComplianceChartContainer'), activePlants);

    // 4. Downtime Pareto Chart
    renderDowntimeParetoChart(document.getElementById('downtimeParetoChartContainer'), activePlants);

    // 5. Monthly Trajectory Chart
    const trendTarget = state.metricsSelectedPlant === 'OVERALL'
      ? data.overall
      : (data.plants.find(p => p.id === state.metricsSelectedPlant) || data.overall);
    renderMonthlyTrajectoryChart(document.getElementById('monthlyTrajectoryChartContainer'), trendTarget);
  }

  // Visual 1: Equipment Availability Horizontal Bar Chart with 99.5% Target Line
  function renderAvailabilityChart(container, plants) {
    if (!container) return;

    const w = container.clientWidth || 540;
    const h = 260;
    const padding = { top: 20, right: 60, bottom: 25, left: 95 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const rowH = chartH / plants.length;

    // Domain: 90% to 100%
    const minVal = 90.0;
    const maxVal = 100.0;
    const scaleX = (val) => Math.max(0, Math.min(chartW, ((Math.max(minVal, val) - minVal) / (maxVal - minVal)) * chartW));

    // Target 99.5% line X
    const targetX = padding.left + scaleX(99.5);

    let barsHtml = '';
    plants.forEach((p, idx) => {
      const y = padding.top + idx * rowH + 6;
      const barH = Math.max(12, rowH - 12);
      const barW = scaleX(p.availabilityPct);
      const barColor = p.availabilityPct >= 99.5 ? '#10b981' : (p.availabilityPct >= 95.0 ? '#f59e0b' : '#ef4444');

      barsHtml += `
        <g class="chart-bar-group">
          <!-- Plant Label -->
          <text x="${padding.left - 10}" y="${y + barH / 2 + 4}" text-anchor="end" class="chart-label bold">${p.id}</text>
          <!-- Background track -->
          <rect x="${padding.left}" y="${y}" width="${chartW}" height="${barH}" fill="rgba(255,255,255,0.04)" rx="3" />
          <!-- Filled Bar -->
          <rect class="chart-bar" x="${padding.left}" y="${y}" width="${barW}" height="${barH}" fill="${barColor}" rx="3">
            <title>${p.name}: ${p.availabilityPct.toFixed(2)}% Availability</title>
          </rect>
          <!-- Value Text -->
          <text x="${padding.left + barW + 8}" y="${y + barH / 2 + 4}" class="chart-label bold" fill="${barColor}">
            ${p.availabilityPct.toFixed(2)}%
          </text>
        </g>
      `;
    });

    container.innerHTML = `
      <svg class="svg-chart" viewBox="0 0 ${w} ${h}">
        <!-- Gridlines -->
        ${[90, 92, 94, 96, 98, 100].map(v => {
          const gx = padding.left + scaleX(v);
          return `
            <line x1="${gx}" y1="${padding.top}" x2="${gx}" y2="${padding.top + chartH}" class="chart-grid-line" />
            <text x="${gx}" y="${h - 6}" text-anchor="middle" class="chart-label">${v}%</text>
          `;
        }).join('')}

        ${barsHtml}

        <!-- 99.5% SLA Target Line -->
        <line x1="${targetX}" y1="${padding.top - 8}" x2="${targetX}" y2="${padding.top + chartH}" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 3" />
        <text x="${targetX}" y="${padding.top - 10}" text-anchor="middle" font-size="9" font-weight="800" fill="#38bdf8">TARGET 99.5%</text>
      </svg>
    `;
  }

  // Visual 2: MTBF & MTTR Reliability Grouped Chart
  function renderMtbfMttrChart(container, plants) {
    if (!container) return;

    const w = container.clientWidth || 540;
    const h = 260;
    const padding = { top: 25, right: 30, bottom: 35, left: 55 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;

    // Filter plants with significant MTBF for visualization
    const displayPlants = plants.slice(0, 6);
    const colW = chartW / displayPlants.length;

    let barsHtml = '';
    displayPlants.forEach((p, idx) => {
      const cx = padding.left + idx * colW + colW / 2;
      const bW = Math.min(22, colW * 0.35);

      // Log-scaled height for MTBF (range 100 to 2000)
      const mtbfH = Math.min(chartH - 20, Math.max(10, Math.log10(Math.max(10, p.mtbfHrs)) * (chartH / 3.5)));
      // Scaled height for MTTR (range 0 to 10)
      const mttrH = Math.min(chartH - 20, Math.max(6, (p.mttrHrs / 10) * chartH));

      barsHtml += `
        <g>
          <!-- Plant X Label -->
          <text x="${cx}" y="${padding.top + chartH + 18}" text-anchor="middle" class="chart-label bold">${p.id}</text>
          
          <!-- MTBF Bar (Cyan) -->
          <rect x="${cx - bW - 2}" y="${padding.top + chartH - mtbfH}" width="${bW}" height="${mtbfH}" fill="#0284c7" rx="3">
            <title>${p.id} MTBF: ${p.mtbfHrs} hrs</title>
          </rect>
          <text x="${cx - bW / 2 - 2}" y="${padding.top + chartH - mtbfH - 4}" text-anchor="middle" font-size="9" font-weight="700" fill="#38bdf8">
            ${p.mtbfHrs > 999 ? (p.mtbfHrs / 1000).toFixed(1) + 'k' : Math.round(p.mtbfHrs)}h
          </text>

          <!-- MTTR Bar (Amber) -->
          <rect x="${cx + 2}" y="${padding.top + chartH - mttrH}" width="${bW}" height="${mttrH}" fill="#f59e0b" rx="3">
            <title>${p.id} MTTR: ${p.mttrHrs} hrs</title>
          </rect>
          <text x="${cx + bW / 2 + 2}" y="${padding.top + chartH - mttrH - 4}" text-anchor="middle" font-size="9" font-weight="700" fill="#fbbf24">
            ${p.mttrHrs.toFixed(1)}h
          </text>
        </g>
      `;
    });

    container.innerHTML = `
      <svg class="svg-chart" viewBox="0 0 ${w} ${h}">
        <line x1="${padding.left}" y1="${padding.top + chartH}" x2="${w - padding.right}" y2="${padding.top + chartH}" class="chart-axis-line" />
        ${barsHtml}
      </svg>
    `;
  }

  // Visual 3: PM Compliance Radial Progress Rings
  function renderPmComplianceChart(container, plants) {
    if (!container) return;

    let ringsHtml = plants.map(p => {
      const radius = 28;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (p.pmCompliancePct / 100) * circumference;
      const color = p.pmCompliancePct >= 95 ? '#10b981' : (p.pmCompliancePct >= 70 ? '#f59e0b' : '#ef4444');

      return `
        <div class="pm-compliance-node">
          <div style="position:relative; width:68px; height:68px;">
            <svg viewBox="0 0 72 72" style="transform: rotate(-90deg); width:100%; height:100%;">
              <circle cx="36" cy="36" r="${radius}" stroke="var(--border-medium)" stroke-width="6" fill="transparent" />
              <circle cx="36" cy="36" r="${radius}" stroke="${color}" stroke-width="6" fill="transparent"
                stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" stroke-linecap="round" />
            </svg>
            <div style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-family:var(--font-mono); font-weight:800; font-size:0.75rem; color:var(--text-main);">
              ${p.pmCompliancePct.toFixed(0)}%
            </div>
          </div>
          <div style="font-size:0.78rem; font-weight:800; color:var(--text-main); margin-top:6px;">${p.id}</div>
          <div style="font-size:0.68rem; color:var(--text-dim); text-align:center;">${p.machinesCount ? `${p.machinesCount} Machines` : 'Active'}</div>
        </div>
      `;
    }).join('');

    container.innerHTML = `
      <div class="pm-compliance-all-plants-grid">
        ${ringsHtml}
      </div>
    `;
  }

  // Visual 4: Unplanned Downtime & Breakdown Pareto Chart
  function renderDowntimeParetoChart(container, plants) {
    if (!container) return;

    // Filter plants that have logged downtime, sorted descending
    const dtPlants = plants.filter(p => p.unplannedDowntimeHrs > 0).sort((a, b) => b.unplannedDowntimeHrs - a.unplannedDowntimeHrs);

    if (dtPlants.length === 0) {
      container.innerHTML = `<div style="color:var(--text-muted); font-size:0.85rem; padding:16px;">Zero active downtime registered across selected facilities.</div>`;
      return;
    }

    const maxDt = Math.max(...dtPlants.map(p => p.unplannedDowntimeHrs));

    let rowsHtml = dtPlants.map(p => {
      const pct = (p.unplannedDowntimeHrs / maxDt) * 100;
      return `
        <div style="display:flex; flex-direction:column; gap:4px; margin-bottom:12px;">
          <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem;">
            <div>
              <strong style="color:var(--text-main); font-size:0.82rem;">${p.id}</strong>
            </div>
            <div style="font-family:var(--font-mono); font-weight:800;">
              <span style="color:var(--status-alarm);">${p.unplannedDowntimeHrs.toFixed(1)} hrs</span>
              <span style="color:var(--text-dim); font-size:0.72rem; margin-left:6px;">(${p.breakdownOccurrences} Incidents)</span>
            </div>
          </div>
          <div style="width:100%; height:10px; background:var(--bg-card); border-radius:9999px; overflow:hidden; border:1px solid var(--border-subtle);">
            <div style="width:${pct}%; height:100%; background:linear-gradient(90deg, #ef4444, #f97316); border-radius:9999px;"></div>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `<div style="width:100%; padding:6px 0;">${rowsHtml}</div>`;
  }

  // Visual 5: 6-Month Reliability Trajectory Trend Curve
  function renderMonthlyTrajectoryChart(container, target) {
    if (!container || !target || !target.trend) return;

    const w = container.clientWidth || 1080;
    const h = 220;
    const padding = { top: 25, right: 40, bottom: 30, left: 55 };
    const chartW = w - padding.left - padding.right;
    const chartH = h - padding.top - padding.bottom;
    const trend = target.trend;

    const stepX = chartW / (trend.length - 1);
    const minAvail = 97.0;
    const maxAvail = 100.0;
    const scaleY = (val) => padding.top + chartH - ((Math.max(minAvail, Math.min(maxAvail, val)) - minAvail) / (maxAvail - minAvail)) * chartH;

    // Generate Path Points
    const points = trend.map((d, i) => ({
      x: padding.left + i * stepX,
      y: scaleY(d.availability),
      month: d.month,
      val: d.availability,
      dt: d.downtime
    }));

    let pathD = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      pathD += ` L ${points[i].x} ${points[i].y}`;
    }

    // Target 99.5% Line Y
    const targetY = scaleY(99.5);

    container.innerHTML = `
      <svg class="svg-chart" viewBox="0 0 ${w} ${h}">
        <!-- Gridlines -->
        ${[97.0, 98.0, 99.0, 100.0].map(v => {
          const gy = scaleY(v);
          return `
            <line x1="${padding.left}" y1="${gy}" x2="${w - padding.right}" y2="${gy}" class="chart-grid-line" />
            <text x="${padding.left - 10}" y="${gy + 4}" text-anchor="end" class="chart-label">${v.toFixed(1)}%</text>
          `;
        }).join('')}

        <!-- Target Line -->
        <line x1="${padding.left}" y1="${targetY}" x2="${w - padding.right}" y2="${targetY}" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 3" />
        <text x="${w - padding.right}" y="${targetY - 6}" text-anchor="end" font-size="9" font-weight="800" fill="#38bdf8">Target (99.5%)</text>

        <!-- Area fill under line -->
        <path d="${pathD} L ${points[points.length - 1].x} ${padding.top + chartH} L ${points[0].x} ${padding.top + chartH} Z" fill="rgba(16, 185, 129, 0.08)" />

        <!-- Line Graph -->
        <path d="${pathD}" fill="none" stroke="#10b981" stroke-width="3" stroke-linecap="round" />

        <!-- Nodes -->
        ${points.map(pt => `
          <g>
            <circle cx="${pt.x}" cy="${pt.y}" r="5" fill="#10b981" stroke="var(--bg-surface)" stroke-width="2">
              <title>${pt.month} 2026: ${pt.val}% Availability (${pt.dt}h Downtime)</title>
            </circle>
            <text x="${pt.x}" y="${pt.y - 10}" text-anchor="middle" font-size="10" font-weight="800" fill="#10b981">${pt.val.toFixed(1)}%</text>
            <text x="${pt.x}" y="${padding.top + chartH + 18}" text-anchor="middle" class="chart-label bold">${pt.month} 2026</text>
          </g>
        `).join('')}
      </svg>
    `;
  }

  // Official SAP UAT Table
  function renderMetricsTable() {
    const tbody = document.getElementById('metricsTableBody');
    const data = window.METRICS_DASHBOARD_DATA;
    if (!tbody || !data) return;

    let displayPlants = data.plants.filter(p => p.id !== 'TASL-XXX');
    if (state.metricsSelectedPlant !== 'OVERALL') {
      const single = data.plants.filter(p => p.id === state.metricsSelectedPlant);
      if (single.length > 0) displayPlants = single;
    }

    tbody.innerHTML = displayPlants.map(p => {
      const availColor = p.availabilityPct >= 99.5 ? '#10b981' : (p.availabilityPct >= 95 ? '#f59e0b' : '#ef4444');
      const dtColor = p.unplannedDowntimeHrs > 0 ? 'var(--status-alarm)' : 'var(--text-dim)';

      return `
        <tr>
          <td style="white-space:nowrap;">
            <span class="plant-code-tag" style="font-size:0.8rem; padding:4px 9px;">${p.id}</span>
          </td>
          <td style="font-family:var(--font-mono); font-weight:800; text-align:center;">${p.machinesCount}</td>
          <td style="font-family:var(--font-mono); font-weight:800; text-align:right; color:${availColor};">
            ${p.availabilityPct.toFixed(2)}%
          </td>
          <td style="font-family:var(--font-mono); font-weight:800; text-align:right; color:${dtColor};">
            ${p.unplannedDowntimeHrs.toFixed(2)}
          </td>
          <td style="font-family:var(--font-mono); text-align:right;">
            ${p.mtbfHrs > 0 ? p.mtbfHrs.toFixed(1) : '&mdash;'}
          </td>
          <td style="font-family:var(--font-mono); text-align:right;">
            ${p.mttrHrs > 0 ? p.mttrHrs.toFixed(2) : '0.00'}
          </td>
          <td style="text-align:center;">
            <span class="compliance-badge-pill">${p.pmCompliancePct.toFixed(1)}%</span>
          </td>
          <td style="font-family:var(--font-mono); font-weight:700; text-align:center;">
            ${p.breakdownOccurrences}
          </td>
          <td style="text-align:center;">
            <span class="stream-status-pill ${p.spocConfirmation === 'Yes' ? 'active' : 'idle'}">${p.spocConfirmation}</span>
          </td>
          <td style="font-size:0.74rem; color:var(--text-muted); line-height:1.35; max-width:260px;">
            <div style="overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:260px;" title="${(p.remarks || '').replace(/"/g, '&quot;')}">
              ${p.remarks || 'Standard production telemetry audited.'}
            </div>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.exportMetricsTableToCsv = function () {
    const data = window.METRICS_DASHBOARD_DATA;
    if (!data) return;

    const headers = ['Plant', 'PlantCode', 'MachinesCount', 'EquipmentAvailability_Pct', 'UnplannedDowntime_Hrs', 'MTBF_Hrs', 'MTTR_Hrs', 'PMCompliance_Pct', 'BreakdownOccurrences', 'SPOC_Confirmation', 'Remarks'];
    const rows = data.plants.map(p => [
      `"${p.name}"`,
      `"${p.plantCode}"`,
      p.machinesCount,
      p.availabilityPct,
      p.unplannedDowntimeHrs,
      p.mtbfHrs,
      p.mttrHrs,
      p.pmCompliancePct,
      p.breakdownOccurrences,
      `"${p.spocConfirmation}"`,
      `"${(p.remarks || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `TASL_PEM_Operations_Metrics_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // =========================================================================
  // SPARES DASHBOARD ENGINE (Spare Parts Consumption & Inventory Analytics)
  // =========================================================================
  function renderSparesDashboard() {
    const data = window.SPARES_DASHBOARD_DATA;
    if (!data) return;

    // Highlight active sub-tab button
    document.querySelectorAll('.spares-tab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.sparestab === state.activeSparesSubTab);
    });

    renderSparesVisualCharts();
    renderSparesTable();
  }

  window.switchSparesSubTab = function (tabId) {
    state.activeSparesSubTab = tabId;
    renderSparesDashboard();
  };

  function renderSparesVisualCharts() {
    const data = window.SPARES_DASHBOARD_DATA;
    if (!data) return;

    renderSparesAbcParetoChart(document.getElementById('sparesAbcChartContainer'));
    renderSparesSubsystemChart(document.getElementById('sparesSubsystemChartContainer'));
    renderSparesVelocityChart(document.getElementById('sparesVelocityChartContainer'));
    renderSparesLeadTimeChart(document.getElementById('sparesLeadTimeChartContainer'));
  }

  // Visual 1: ABC Cost Pareto Chart (80/20 Rule)
  function renderSparesAbcParetoChart(container) {
    if (!container) return;

    const data = window.SPARES_DASHBOARD_DATA;
    const abc = data.overall.abcDistribution;

    let itemsHtml = abc.map(item => `
      <div style="display:flex; flex-direction:column; gap:4px; margin-bottom:8px;">
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.78rem;">
          <strong style="color:var(--text-main);">${item.class}</strong>
          <span style="font-family:var(--font-mono); font-weight:800; color:${item.color};">
            ₹${item.spend.toLocaleString('en-IN', {maximumFractionDigits: 2})} (${item.pct}%)
          </span>
        </div>
        <div style="width:100%; height:8px; background:var(--bg-card); border-radius:9999px; overflow:hidden; border:1px solid var(--border-subtle);">
          <div style="width:${item.pct}%; height:100%; background:${item.color}; border-radius:9999px;"></div>
        </div>
      </div>
    `).join('');

    container.innerHTML = `<div style="width:100%;">${itemsHtml}</div>`;
  }

  // Visual 2: Subsystem Spend Donut / Segments Chart
  function renderSparesSubsystemChart(container) {
    if (!container) return;

    const data = window.SPARES_DASHBOARD_DATA;
    const cats = data.overall.categoryBreakdown;

    let rowsHtml = cats.map(c => `
      <div style="display:flex; align-items:center; justify-content:space-between; padding:4px 0; border-bottom:1px solid var(--border-subtle);">
        <div style="display:flex; align-items:center; gap:8px;">
          <span style="width:8px; height:8px; border-radius:2px; background:${c.color}; display:inline-block;"></span>
          <span style="font-size:0.78rem; font-weight:700; color:var(--text-main);">${c.category}</span>
        </div>
        <div style="text-align:right;">
          <span style="font-family:var(--font-mono); font-size:0.78rem; font-weight:800;">₹${c.spend.toLocaleString('en-IN', {maximumFractionDigits: 0})}</span>
          <span style="font-size:0.7rem; color:var(--text-dim); margin-left:4px;">(${c.pct}%)</span>
        </div>
      </div>
    `).join('');

    container.innerHTML = `<div style="width:100%; display:flex; flex-direction:column; justify-content:flex-start;">${rowsHtml}</div>`;
  }

  // Visual 3: Consumables Velocity & Monthly Run-Rate (1,541 Liters)
  function renderSparesVelocityChart(container) {
    if (!container) return;

    const fluids = window.SPARES_DASHBOARD_DATA.breton1.fluidConsumption;

    let html = fluids.map(f => {
      const isAlert = f.current <= f.reorder;
      const fillPct = Math.min(100, (f.current / 400) * 100);

      return `
        <div class="fluid-meter-row">
          <div class="fluid-meter-labels">
            <div>
              <span style="color:var(--text-main); font-weight:700; font-size:0.82rem;">${f.name}</span>
            </div>
            <div style="font-family:var(--font-mono); font-size:0.78rem;">
              Consumed: <strong style="color:var(--cyan-primary);">${f.qty} L</strong> | Buffer: <strong style="color:${isAlert ? '#ef4444' : '#10b981'};">${f.current} L</strong>
            </div>
          </div>
          <div class="fluid-meter-track">
            <div class="fluid-meter-fill" style="width:${fillPct}%; background:${isAlert ? 'linear-gradient(90deg, #ef4444, #f59e0b)' : 'linear-gradient(90deg, #10b981, #06b6d4)'};"></div>
          </div>
          <div style="display:flex; justify-content:space-between; font-size:0.7rem; color:var(--text-dim);">
            <span>Reorder Trigger: ${f.reorder} L</span>
            <span style="color:${isAlert ? '#ef4444' : '#10b981'}; font-weight:700;">${isAlert ? 'Reorder Alert' : 'Buffer Normal'}</span>
          </div>
        </div>
      `;
    }).join('');

    container.innerHTML = `<div style="width:100%; padding:4px 0;">${html}</div>`;
  }

  // Visual 4: Critical Spares Stockout Risk & Lead-Time Matrix
  function renderSparesLeadTimeChart(container) {
    if (!container) return;

    const criticalItems = [
      { name: 'Electro-Spindle Cartridge Unit', lead: '12 Weeks (OEM Italy)', risk: 'high', code: '111102001103293', impact: 'Catastrophic Production Stoppage' },
      { name: 'C1 Rotary Axis Feed Drive Servomotor', lead: '8 Weeks (Siemens / Breton)', risk: 'high', code: '111102001103301', impact: 'Rotary Table Failure' },
      { name: 'Heidenhain Linear Scale Reader', lead: '6 Weeks (Heidenhain)', risk: 'med', code: '111102001103313', impact: 'Positional Accuracy Drift' },
      { name: 'High-Pressure Proportional Valve', lead: '4 Weeks (Hydac / Bosch)', risk: 'med', code: '111102001107492', impact: 'Tool Clamping Inhibit' }
    ];

    let html = criticalItems.map(item => `
      <div style="background:var(--bg-card); padding:10px 14px; border-radius:6px; border:1px solid var(--border-medium); margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
        <div>
          <div style="font-size:0.8rem; font-weight:800; color:var(--text-main);">${item.name}</div>
          <div style="font-size:0.7rem; color:var(--text-dim); margin-top:2px;">Impact: <span style="color:#ef4444; font-weight:600;">${item.impact}</span> &bull; SKU: <code>${item.code}</code></div>
        </div>
        <div style="text-align:right;">
          <span class="lead-time-tag ${item.risk}">${item.lead}</span>
        </div>
      </div>
    `).join('');

    container.innerHTML = `<div style="width:100%;">${html}</div>`;
  }

  // Breton 1 Goods Issue Table
  function renderSparesTable() {
    const tbody = document.getElementById('sparesTableBody');
    const data = window.SPARES_DASHBOARD_DATA;
    if (!tbody || !data) return;

    const items = data.breton1.transactions;
    const filter = state.sparesSearch;

    const filtered = items.filter(i => {
      if (!filter) return true;
      return (
        i.materialCode.includes(filter) ||
        i.materialName.toLowerCase().includes(filter) ||
        i.doc.includes(filter) ||
        i.category.toLowerCase().includes(filter)
      );
    });

    tbody.innerHTML = filtered.map(item => {
      const isMvtOrder = item.mvt === '261';
      return `
        <tr>
          <td style="font-family:var(--font-mono); font-size:0.75rem; white-space:nowrap;">${item.postingDate}</td>
          <td><span class="sap-ticket-pill">${item.doc}</span></td>
          <td style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">${item.materialCode}</td>
          <td style="font-size:0.78rem; font-weight:700; color:var(--text-main);">${item.materialName}</td>
          <td style="font-size:0.74rem; color:var(--text-dim);">${item.category}</td>
          <td style="font-family:var(--font-mono); font-size:0.76rem; font-weight:700; text-align:right; white-space:nowrap;">${item.qty} ${item.unit}</td>
          <td style="font-family:var(--font-mono); font-size:0.76rem; text-align:right; white-space:nowrap;">₹${item.unitCost.toLocaleString('en-IN', {maximumFractionDigits: 2})}</td>
          <td style="font-family:var(--font-mono); font-size:0.78rem; font-weight:800; text-align:right; color:var(--text-main); white-space:nowrap;">₹${item.totalAmount.toLocaleString('en-IN', {maximumFractionDigits: 2})}</td>
          <td style="text-align:center;">
            <span class="stream-status-pill ${isMvtOrder ? 'active' : 'idle'}" title="${item.mvtDescription}">
              ${item.mvt}
            </span>
          </td>
          <td style="text-align:center; white-space:nowrap;">
            <span class="lead-time-tag ${item.leadTime.includes('12') || item.leadTime.includes('8') ? 'high' : (item.leadTime.includes('6') || item.leadTime.includes('4') ? 'med' : 'low')}">
              ${item.leadTime}
            </span>
          </td>
        </tr>
      `;
    }).join('');
  }

  window.exportSparesTableToCsv = function () {
    const data = window.SPARES_DASHBOARD_DATA;
    if (!data) return;

    const headers = ['PostingDate', 'MaterialDoc', 'Item', 'MaterialCode', 'MaterialDescription', 'Category', 'Quantity', 'Unit', 'UnitCost_INR', 'TotalAmount_INR', 'MovementType', 'SAP_Order', 'ABC_Class', 'LeadTime'];
    const rows = data.breton1.transactions.map(i => [
      `"${i.postingDate}"`,
      `"${i.doc}"`,
      i.item,
      `"${i.materialCode}"`,
      `"${i.materialName.replace(/"/g, '""')}"`,
      `"${i.category}"`,
      i.qty,
      `"${i.unit}"`,
      i.unitCost,
      i.totalAmount,
      `"${i.mvt}"`,
      `"${i.sapOrder}"`,
      `"${i.abcClass}"`,
      `"${i.leadTime}"`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Breton1_Spares_Consumption_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

})();
