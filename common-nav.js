/**
 * Sonssam EduTech Suite - Unified Navigation & Control Bar
 * Provides seamless navigation, master audio mute, and fullscreen toggle across all apps.
 */
(function () {
  const currentTitle = document.title.split('|')[0].trim();
  const nav = document.createElement('nav');
  nav.id = 'sonssamGlobalNav';
  nav.style.cssText = `
    background: rgba(9, 13, 22, 0.94);
    backdrop-filter: blur(12px);
    color: #f8fafc;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    padding: 4px 16px;
    gap: 8px;
    flex-wrap: wrap;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-family: -apple-system, BlinkMacSystemFont, 'Pretendard', 'Segoe UI', sans-serif;
    position: sticky;
    top: 0;
    z-index: 99999;
    box-shadow: 0 4px 20px rgba(0,0,0,0.35);
  `;

  nav.innerHTML = `
    <div style="display:flex; align-items:center; gap:12px; flex-wrap:wrap;">
      <a href="https://sonssam-hub.bluesskssk.workers.dev/apps/" aria-label="손쌤 앱 목록으로 돌아가기" style="color:#38bdf8; text-decoration:none; font-weight:800; font-size:15px; display:inline-flex; align-items:center; gap:6px; min-height:40px; padding:0 4px; transition:color 0.15s;">
        <span style="font-size:16px;">←</span> <span>앱 목록</span>
      </a>
      <span style="color:#475569;">|</span>
      <span class="sonssam-nav-title" style="color:#f1f5f9; font-weight:700; font-size:14px;">${currentTitle}</span>
    </div>
    <div style="display:flex; align-items:center; gap:8px;">
      <button type="button" id="sonssamMuteBtn" aria-pressed="false" title="모든 효과음 끄기 / 켜기" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); color:#cbd5e1; padding:6px 12px; min-height:40px; border-radius:10px; font-size:14px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
        <span id="sonssamMuteIcon">🔊</span> <span id="sonssamMuteLabel">소리 켜짐</span>
      </button>
      <button type="button" id="sonssamFsBtn" title="전체화면 켜기 / 끄기 (단축키: F)" style="background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.18); color:#cbd5e1; padding:6px 12px; min-height:40px; border-radius:10px; font-size:14px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:4px; transition:all 0.15s;">
        🖥️ 전체화면
      </button>
      <a href="https://sonssam-hub.bluesskssk.workers.dev/" class="sonssam-nav-home" style="color:#cbd5e1; text-decoration:none; font-size:14px; margin-left:4px; padding:10px 10px; display:inline-flex; align-items:center; min-height:40px; border-radius:6px; transition:background 0.15s;">손쌤 홈 ↗</a>
    </div>
  `;

  const navStyle = document.createElement('style');
  navStyle.textContent = `
    #sonssamGlobalNav a:focus-visible, #sonssamGlobalNav button:focus-visible { outline: 3px solid #fde68a; outline-offset: 2px; }
    #sonssamGlobalNav button:hover { background: rgba(255,255,255,0.16) !important; color: #fff !important; }
    @media (max-width: 560px) {
      #sonssamGlobalNav .sonssam-nav-title { display: none; }
      #sonssamGlobalNav .sonssam-nav-home { display: none !important; }
    }
  `;

  function injectNav() {
    if (document.head && !navStyle.isConnected) document.head.appendChild(navStyle);
    if (document.body && !document.getElementById('sonssamGlobalNav')) {
      document.body.prepend(nav);
      bindControls();
    }
  }

  let isMuted = localStorage.getItem('sonssam_sound_muted') === 'true';
  window.isSonssamAudioMuted = function() { return isMuted; };

  function updateMuteButtonUI() {
    const icon = document.getElementById('sonssamMuteIcon');
    const label = document.getElementById('sonssamMuteLabel');
    if (icon && label) {
      icon.textContent = isMuted ? '🔇' : '🔊';
      label.textContent = isMuted ? '소리 꺼짐' : '소리 켜짐';
    }
    const btn = document.getElementById('sonssamMuteBtn');
    if (btn) btn.setAttribute('aria-pressed', String(isMuted));
  }

  function bindControls() {
    updateMuteButtonUI();
    const muteBtn = document.getElementById('sonssamMuteBtn');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        localStorage.setItem('sonssam_sound_muted', isMuted);
        updateMuteButtonUI();
        window.dispatchEvent(new CustomEvent('sonssam_audio_toggle', { detail: { isMuted } }));
      });
    }

    const fsBtn = document.getElementById('sonssamFsBtn');
    if (fsBtn) {
      fsBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(() => {});
        } else {
          document.exitFullscreen().catch(() => {});
        }
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNav);
  } else {
    injectNav();
  }

  // F Key fullscreen shortcut (ignoring text inputs)
  window.addEventListener('keydown', (e) => {
    const t = e.target;
    if (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.tagName === 'SELECT' || t.isContentEditable) return;
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.code === 'KeyF') {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  });
})();
