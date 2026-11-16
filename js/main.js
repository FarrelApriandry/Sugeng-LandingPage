/**
 * SUGENG Landing Page — Interactive Scripts
 * Domain: sugenghub.my.id -> dash.sugenghub.my.id
 * Kota Magelang Waste Intelligence Platform
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPreviewWidget();
  initScrollEffects();
  initDynamicYear();
});

/**
 * 1. Navbar & Mobile Drawer Management
 */
function initNavbar() {
  const header = document.querySelector('.header');
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  const drawerLinks = document.querySelectorAll('.mobile-nav-link');

  // Header elevation on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  }, { passive: true });

  // Mobile Drawer Toggle
  if (toggleBtn && drawer) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = drawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    // Close when clicking outside drawer content
    drawer.addEventListener('click', (e) => {
      if (e.target === drawer) {
        closeDrawer();
      }
    });

    // Close drawer when clicking nav links
    drawerLinks.forEach((link) => {
      link.addEventListener('click', () => {
        closeDrawer();
      });
    });

    // Close drawer on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('open')) {
        closeDrawer();
      }
    });
  }

  function openDrawer() {
    drawer.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    toggleBtn.innerHTML = `
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    document.body.style.overflow = '';
  }
}

/**
 * 2. Interactive Preview Widget (Hero Section)
 */
function initPreviewWidget() {
  const tabs = document.querySelectorAll('.preview-tab-btn');
  const nodeTitle = document.getElementById('previewNodeTitle');
  const nodeMeta = document.getElementById('previewNodeMeta');
  const nodeBadge = document.getElementById('previewNodeBadge');
  const fillPctText = document.getElementById('previewFillPct');
  const fillBar = document.getElementById('previewFillBar');
  const distanceVal = document.getElementById('previewDistanceVal');
  const gasVal = document.getElementById('previewGasVal');
  const methaneVal = document.getElementById('previewMethaneVal');
  const tempVal = document.getElementById('previewTempVal');
  const aiTto = document.getElementById('previewAiTto');
  const aiRate = document.getElementById('previewAiRate');
  const aiHazard = document.getElementById('previewAiHazard');
  const aiAction = document.getElementById('previewAiAction');
  const cvrpTag = document.getElementById('previewCvrpTag');
  const routingHeadline = document.getElementById('previewRoutingHeadline');
  const routingSub = document.getElementById('previewRoutingSub');

  if (!tabs.length || !nodeTitle) return;

  const SCENARIOS = {
    critical: {
      title: 'TPS Kampus Tuguran UNTIDAR',
      meta: 'Magelang Utara · ID: NODE-05 · Koordinat (-7.4642, 110.2291)',
      badgeHtml: '<span class="badge-critical">● PRIORITAS PENGANGKUTAN</span>',
      fillPct: '99,1%',
      fillBarWidth: '99.1%',
      barColor: '#c94e47',
      distance: '28,0 cm',
      gas: '36/100',
      methane: '120 ppm',
      temp: '28,5 °C',
      tto: '0 menit (Penuh)',
      ttoRate: 'Laju: Kapasitas Maksimal',
      hazard: 'Sanitasi Normal (Wadah Penuh)',
      hazardColor: '#c94e47',
      hazardAction: 'Segera kosongkan wadah tempat penampungan sekarang juga.',
      cvrpTag: 'CVRP: STOP #5 (116,5 L)',
      routingHeadline: 'Armada Truk DLH 03 (Isuzu Elf 6-Roda)',
      routingSub: 'Rute Teroptimasi: Hemat 43,7% Jarak (9,8 km) & Solar 2,1 L',
    },
    warning: {
      title: 'TPS Alun-Alun Kota Magelang',
      meta: 'Magelang Tengah · ID: NODE-02 · Koordinat (-7.4721, 110.2188)',
      badgeHtml: '<span class="badge-critical" style="background:#fdf5e7; color:#94601a; border-color:#f8e1b9;">● SIAGA (GAS BAU TINGGI)</span>',
      fillPct: '62,0%',
      fillBarWidth: '62.0%',
      barColor: '#b77924',
      distance: '52,4 cm',
      gas: '78/100',
      methane: '185 ppm',
      temp: '32,4 °C',
      tto: '3j 15m (17:45 WIB)',
      ttoRate: 'Laju terdeteksi: +8,8% / jam',
      hazard: 'Waspada Bau Amonia',
      hazardColor: '#b77924',
      hazardAction: 'Bau pembusukan sampah basah tinggi. Jadwalkan semprot disinfektan.',
      cvrpTag: 'CVRP: STOP #2 (73,0 L)',
      routingHeadline: 'Peringatan Sanitasi & Bau Busuk',
      routingSub: 'Sensor MQ-135 mencatat gas amonia melebihi ambang batas higienis.',
    },
    safe: {
      title: 'TPS Pasar Rejowinangun',
      meta: 'Magelang Selatan · ID: NODE-01 · Koordinat (-7.4851, 110.2195)',
      badgeHtml: '<span class="badge-critical" style="background:#eaf3ed; color:#176b49; border-color:#cee0d3;">● AMAN (KAPASITAS CUKUP)</span>',
      fillPct: '32,0%',
      fillBarWidth: '32.0%',
      barColor: '#176b49',
      distance: '88,5 cm',
      gas: '18/100',
      methane: '42 ppm',
      temp: '29,1 °C',
      tto: '14j 20m (Besok Pagi)',
      ttoRate: 'Laju normal: +4,5% / jam',
      hazard: 'Sanitasi Aman (Sampah Segar)',
      hazardColor: '#176b49',
      hazardAction: 'Status stabil: Laju buangan normal, belum butuh dispatch armada.',
      cvrpTag: 'STATUS: AMAN',
      routingHeadline: 'Jadwal Pengambilan Normal',
      routingSub: 'Tidak membutuhkan armada darurat saat ini. Hemat bahan bakar solar.',
    },
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const scenarioKey = tab.dataset.scenario;
      const data = SCENARIOS[scenarioKey];
      if (!data) return;

      // Update widget content smoothly
      nodeTitle.textContent = data.title;
      nodeMeta.textContent = data.meta;
      nodeBadge.innerHTML = data.badgeHtml;
      fillPctText.textContent = data.fillPct;
      fillBar.style.width = data.fillBarWidth;
      fillBar.style.backgroundColor = data.barColor;
      distanceVal.textContent = data.distance;
      gasVal.textContent = data.gas;
      if (methaneVal) methaneVal.textContent = data.methane;
      tempVal.textContent = data.temp;
      if (aiTto) aiTto.textContent = data.tto;
      if (aiRate) aiRate.textContent = data.ttoRate;
      if (aiHazard) {
        aiHazard.textContent = data.hazard;
        aiHazard.style.color = data.hazardColor;
      }
      if (aiAction) aiAction.textContent = data.hazardAction;
      cvrpTag.textContent = data.cvrpTag;
      routingHeadline.textContent = data.routingHeadline;
      routingSub.textContent = data.routingSub;
    });
  });
}

/**
 * 3. Smooth Anchor Scrolling with Header Offset
 */
function initScrollEffects() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
}

/**
 * 4. Dynamic Year in Footer
 */
function initDynamicYear() {
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}
