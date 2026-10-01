window.__ModuleLoader__.load({
  id: "dsh-wechat-classic-theme",
  factory(require) {
    const React = require("react");
    const THEME_ID = "wechat-classic";
    const STORAGE_KEY = "dsh.wechat-classic.preference.v1";
    const BUILTIN = ["light", "dark", "system"];
    const TOKENS = {
  "--dsw-alias-bg-base": "#ffffff",
  "--dsw-alias-bg-layer-1": "#ffffff",
  "--dsw-alias-bg-layer-2": "#f5f5f5",
  "--dsw-alias-bg-layer-3": "#ffffff",
  "--dsw-alias-bg-overlay": "#ffffff",
  "--dsw-specific-sidebar-fill": "#f1f1f1",
  "--dsw-specific-input-major": "#ffffff",
  "--dsw-specific-bubble": "#95ec69",
  "--dsw-specific-bubble-highlight": "#83df59",
  "--dsw-alias-label-primary": "#191919",
  "--dsw-alias-label-secondary": "#515856",
  "--dsw-alias-label-tertiary": "#737b77",
  "--dsw-alias-label-caption": "#7e8781",
  "--dsw-alias-brand-primary": "#07c160",
  "--dsw-alias-brand-primary-new-colorprimary-new-color": "#07c160",
  "--dsw-alias-state-business-primary": "#078b43",
  "--dsw-alias-state-business-tertiary": "#e0f3e7",
  "--dsw-alias-state-success-primary": "#078b43",
  "--dsw-alias-button-info-fill": "#078b43",
  "--dsw-alias-button-info-hover": "#067b3b",
  "--dsw-alias-button-primary-fill": "#078b43",
  "--dsw-alias-button-primary-hover": "#067b3b",
  "--dsw-alias-interactive-bg-hover": "#00000008",
  "--dsw-alias-interactive-bg-active": "#dceede",
  "--dsw-alias-interactive-bg-hover-accent": "#cfead8",
  "--dsw-alias-interactive-bg-hover-solid": "#e9efeb",
  "--dsw-alias-border-l1": "#0000000a",
  "--dsw-alias-border-l2": "#00000014",
  "--dsw-alias-border-l3": "#0000001c",
  "--dsw-alias-border-l4": "#00000024",
  "--dsw-alias-markdown-code-block": "#f5f6f5",
  "--dsw-alias-markdown-code-block-banner": "#eff2ef",
  "--dsw-font-family": "\"Segoe UI\", \"Microsoft YaHei\", \"PingFang SC\", sans-serif",
  "--dsw-radius-xs": "4px",
  "--dsw-radius-sm": "5px",
  "--dsw-radius-md": "6px",
  "--dsw-radius-lg": "8px",
  "--dsw-radius-xl": "10px",
  "--dsw-radius-2xl": "12px",
  "--dsw-corner-shape": "round",
  "--dsw-shadow-lv1": "0 1px 3px #00000008",
  "--dsw-shadow-lv2": "0 4px 14px #0000000a",
  "--dsw-focus-ring-color": "#078b43",
  "--dsh-scrollbar-thumb": "#b8c1bb",
  "--dsh-scrollbar-thumb-hover": "#8b9990",
  "--shiki-token-keyword": "#7c38a6",
  "--shiki-token-string": "#238342",
  "--shiki-token-comment": "#79837d",
  "--shiki-token-function": "#2865b4",
  "--shiki-token-constant": "#1d65b2"
};
    const CSS = "/* Desktop 2.0.17 / upstream client 639ed01, verified from installed bundles.\n   The client sets the real sidebar track to 360 px; only the rail is fixed.\n   Original React controls/slots stay mounted with their original handlers.\n   No transform, isolation, z-index or clipping is added to the sidebar root. */\n\nhtml[data-dsh-wechat-classic] {\n  --dsh-wechat-rail-width: 72px;\n}\n\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) :is(.dshDesktopSidebarSurface,.CZPbNW_sidebarCol) {\n  background: linear-gradient(90deg, #292e2c 0 72px, #f2f2f2 72px 100%);\n  border-right: 1px solid #dedfdd;\n  overflow: visible;\n}\n\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root {\n  position: relative;\n  width: 100% !important;\n  height: 100%;\n  box-sizing: border-box;\n  padding: 0;\n  background: linear-gradient(90deg, #292e2c 0 72px, #f2f2f2 72px 100%);\n  overflow: visible;\n}\n\n/* Desktop's owned frame includes its caption row inside the sidebar height.\n   Upstream's frame instead places the whole root below its own top padding. */\nhtml[data-dsh-wechat-classic] .dshDesktopFrame[data-desktop-mode=\"advanced\"][data-desktop-platform=\"win32\"]:not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_logoRow {\n  margin-top: 32px;\n}\nhtml[data-dsh-wechat-classic] .dshDesktopFrame[data-desktop-mode=\"advanced\"][data-desktop-platform=\"win32\"]:not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea {\n  top: 32px;\n}\nhtml[data-dsh-wechat-classic] .dshDesktopWindowsCaptionRow {\n  background: #fff;\n}\n/* Paint only; the original pseudo-element retains its native drag contract. */\nhtml[data-dsh-wechat-classic][data-windows-titlebar] .CZPbNW_frame::before {\n  background: linear-gradient(90deg,\n    #292e2c 0 72px,\n    #f2f2f2 72px var(--dsh-windows-sidebar-width,360px),\n    #fff var(--dsh-windows-sidebar-width,360px) 100%);\n}\n\n/* Grey browsing column: no extra clipping around nested menus/popovers. */\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root > .WYye1W_regionArea {\n  position: absolute;\n  inset: 0 0 0 72px;\n  box-sizing: border-box;\n  min-width: 0;\n  min-height: 0;\n  margin: 0;\n  padding: 14px 12px 0;\n  background: #f2f2f2;\n  color: #242825;\n  border-left: 1px solid #222824;\n  display: flex;\n  overflow: visible;\n}\n/* More-specific than the generic inset rule, while preserving desktop chrome. */\nhtml[data-dsh-wechat-classic] .dshDesktopFrame[data-desktop-mode=\"advanced\"][data-desktop-platform=\"win32\"]:not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) > .WYye1W_regionArea {\n  top: 32px;\n}\n\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root > .WYye1W_logoRow {\n  box-sizing: border-box;\n  width: 72px;\n  height: 62px;\n  margin-bottom: 0;\n  padding: 11px 16px;\n  justify-content: center;\n  overflow: visible;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_brand {\n  width: 40px;\n  height: 40px;\n  min-width: 40px;\n  flex: none;\n  padding: 0;\n  justify-content: center;\n  color: #edf2ee;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_brandIdentity {\n  justify-content: center;\n  gap: 0;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_brandName {\n  display: none;\n}\nhtml[data-dsh-wechat-classic] .dshDesktopFrame[data-desktop-mode=\"advanced\"][data-desktop-platform=\"win32\"]:not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_toggle {\n  position: absolute;\n  top: 8px;\n  left: 22px;\n  width: 28px;\n  height: 28px;\n  color: #c7d3cb;\n}\n\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root > .WYye1W_newSession {\n  align-self: flex-start;\n  flex: none;\n  box-sizing: border-box;\n  width: 44px;\n  height: 44px;\n  min-height: 44px;\n  margin: 2px 14px 16px;\n  padding: 0;\n  gap: 0;\n  border: 0;\n  border-radius: 9px;\n  background: #3a463d;\n  color: #a0ed7b;\n  overflow: visible;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_newSessionContent {\n  width: 44px;\n  gap: 0;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) :is(.WYye1W_newSessionLabel,.WYye1W_newSessionShortcut) {\n  display: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_newSessionContent > svg {\n  width: 22px;\n  height: 22px;\n}\n\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root > .WYye1W_panelList {\n  box-sizing: border-box;\n  width: 72px;\n  min-height: 44px;\n  flex: 1;\n  margin: 0;\n  padding: 0 14px 12px;\n  gap: 12px;\n  overflow-x: visible;\n  overflow-y: auto;\n  scrollbar-width: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_panelRow {\n  box-sizing: border-box;\n  width: 44px;\n  height: 44px;\n  min-height: 44px;\n  margin: 0;\n  padding: 0;\n  justify-content: center;\n  color: #bcc9c1;\n  border-radius: 9px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_panelTitle {\n  display: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_panelGlyph svg {\n  width: 22px;\n  height: 22px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_panelRow[aria-current=\"page\"] {\n  background: #3b493f;\n  color: #a0ec7d;\n}\n\n/* Real workspace toolbar. Its search-expanded state remains controlled by\n   the native search button, keyboard shortcut and Lexical-free input. */\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea .tPVXea_root {\n  min-width: 0;\n  width: 100%;\n  box-sizing: border-box;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea .tPVXea_sectionHeader {\n  min-height: 40px;\n  height: 40px;\n  margin-top: 0;\n  margin-bottom: 10px;\n  margin-right: 0;\n  padding-left: 2px;\n  gap: 5px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea .tPVXea_sectionLabel {\n  font-size: 13px;\n  font-weight: 600;\n  color: #4f5852;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea .tPVXea_search {\n  background: #fff;\n  border-radius: 6px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea .tPVXea_searchExpanded {\n  border: 1px solid #d8ded9;\n  margin-inline: 0;\n  width: 100%;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea .tPVXea_headerActions > button {\n  color: #67746b;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea [data-row-key^=\"workspace:\"] {\n  min-height: 34px;\n  color: #5b655e;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea [data-row-key^=\"session:\"] {\n  box-sizing: border-box;\n  min-height: 46px;\n  border-radius: 6px;\n  margin-top: 3px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea [data-row-key^=\"session:\"][aria-selected=\"true\"] {\n  background: #dcebdd;\n  box-shadow: none;\n  border: 0;\n}\n/* Explicit component foundations keep the optional plugin's controls coherent\n   during stylesheet teardown/reload. Its handlers and measured thumb stay native. */\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-strip {\n  --af-accent: #688b6f;\n  --af-primary: #415348;\n  --af-secondary: #737d76;\n  --af-tertiary: #909891;\n  --af-bg: #f2f2f2;\n  --af-surface: #e7eae6;\n  box-sizing: border-box;\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  flex-wrap: nowrap;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  min-height: 36px;\n  margin: 0 0 5px;\n  padding: 4px 0;\n  gap: 6px;\n  background: #f2f2f2;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-strip .af-seg {\n  box-sizing: border-box;\n  position: relative;\n  display: flex;\n  flex: 1 1 0;\n  min-width: 0;\n  width: auto;\n  height: 28px;\n  padding: 2px;\n  gap: 2px;\n  border: 0;\n  border-radius: 7px;\n  background: #e7eae6;\n  box-shadow: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-strip .af-seg-thumb {\n  position: absolute;\n  left: 2px;\n  width: 0;\n  pointer-events: none;\n  top: 2px;\n  bottom: 2px;\n  border: 0;\n  border-radius: 5px;\n  background: #d7e5d8;\n  box-shadow: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-strip .af-seg-item {\n  box-sizing: border-box;\n  position: relative;\n  z-index: 1;\n  flex: 1 1 0;\n  min-width: 0;\n  appearance: none;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  margin: 0;\n  font-family: inherit;\n  text-align: center;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n  height: 24px;\n  padding: 3px 2px;\n  border-radius: 5px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: #737d76;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-strip .af-seg-item.active {\n  color: #415348;\n  font-weight: 600;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-strip .left-filter-n {\n  margin-left: 2px;\n  font-size: 11px;\n  font-weight: 400;\n  color: #7c867f;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea :is(.left-filter-collapse,.left-filter-hbtn) {\n  box-sizing: border-box;\n  appearance: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: 28px;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n  cursor: pointer;\n  color: #818b83;\n  border-radius: 6px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea :is(.left-filter-collapse,.left-filter-hbtn) svg { width: 14px; height: 14px; display: block; }\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea :is(.left-filter-collapse,.left-filter-hbtn):hover { background: #e5ebe5; color: #526858; }\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .adopt-entry {\n  box-sizing: border-box;\n  appearance: none;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: none;\n  width: 28px;\n  height: 28px;\n  margin: 0;\n  padding: 0;\n  border: 1px solid #cbd4cc;\n  border-radius: 50%;\n  background: transparent;\n  color: #818b83;\n  box-shadow: none;\n  cursor: pointer;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .adopt-entry svg { width: 16px; height: 16px; display: block; }\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .adopt-entry:hover { background: #e5ebe5; color: #526858; }\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea :is(.af-seg-item,.left-filter-collapse,.left-filter-hbtn,.adopt-entry):not(:focus-visible) { outline: none; }\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea :is(.af-seg-item,.left-filter-collapse,.left-filter-hbtn,.adopt-entry):focus-visible { outline: 2px solid #79a985; outline-offset: 1px; }\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .left-filter-hbtn.on {\n  background: #dce9dc;\n  color: #55745c;\n}\n/* Native title marquee and hover-to-actions remain unchanged. */\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea [data-row-key^=\"session:\"] ._7VDZUG_title {\n  margin-right: 8px;\n  font-size: 13px;\n  line-height: 20px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_regionArea [data-row-key^=\"session:\"] ._7VDZUG_time {\n  font-size: 10px;\n  line-height: 20px;\n  color: #89928b;\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n}\n\n/* Real bottom controls; footer overlays/tooltips must escape the narrow seat.\n   Scope launchers directly so settings/inventory modal content stays light. */\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root > .WYye1W_footArea {\n  box-sizing: border-box;\n  width: 72px;\n  margin-top: auto;\n  padding: 6px 14px 12px;\n  gap: 3px;\n  flex: none;\n  overflow: visible;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) :is(.WYye1W_footerActions,.WYye1W_settingsArea) {\n  width: 44px;\n  min-width: 0;\n  overflow: visible;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) [data-slot=\"sidebar.footer.action\"] {\n  display: flex !important;\n  box-sizing: border-box;\n  flex-direction: column;\n  align-items: center;\n  width: 44px;\n  min-width: 0;\n  max-height: none;\n  margin: 0;\n  padding: 0;\n  gap: 5px;\n  overflow: visible;\n}\n/* Do not assign width to all children: a child may itself be a Tooltip bubble. */\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) :is([data-cordis-badge],.ZiQlkq_trigger,._0mJWUG_button,._3OAjNW_trigger,.dshMarketLauncher) {\n  box-sizing: border-box;\n  width: 44px;\n  min-width: 44px;\n  height: 44px;\n  padding: 0;\n  margin: 0;\n  border: 0;\n  border-radius: 9px;\n  justify-content: center;\n  gap: 0;\n  color: #bcc9c1;\n  background: transparent;\n  flex: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) :is(.fxu7oq_badgeLabel,.fxu7oq_badgeCount,.CFAWpG_triggerLabel,._0mJWUG_label,._3OAjNW_label) {\n  display: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) ._0mJWUG_trigger {\n  display: flex;\n  width: 44px;\n  min-width: 0;\n  margin: 0;\n  padding: 0;\n  overflow: visible;\n}\n/* AccountMenu is the installed settings.launcher occupant. Its menu is a\n   native portal; only its existing trigger/anchor are narrowed here. */\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) ._3OAjNW_root {\n  width: 44px;\n  min-width: 0;\n  flex: none;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) ._3OAjNW_anchor {\n  width: 44px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) .ZiQlkq_triggerRow {\n  width: 44px;\n  margin: 0;\n  gap: 3px;\n  flex-wrap: wrap;\n  overflow: visible;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) :is(.ZiQlkq_trigger,._0mJWUG_button,[data-cordis-badge]) svg {\n  width: 22px;\n  height: 22px;\n}\nhtml[data-dsh-wechat-classic] .WYye1W_root:not(.WYye1W_collapsed) :is(.WYye1W_newSession,.WYye1W_panelRow,[data-cordis-badge],.ZiQlkq_trigger,._0mJWUG_button,._3OAjNW_trigger,.dshMarketLauncher):hover {\n  background: #3b453e;\n  color: #a2ed7c;\n}\n\n/* Cost-meter 1.8.0 renders balance/today/peak information in one stack.\n   Keep the complete wide renderer in the grey browsing column. Its slot and\n   footer ancestors are static; the sidebar root supplies this containing box.\n   The bounded card remains scrollable when additional quota rows are enabled. */\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed):has(.cm-footer-stack) > .WYye1W_regionArea {\n  padding-bottom: 164px;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack {\n  position: absolute;\n  left: 84px;\n  right: 12px;\n  bottom: 12px;\n  box-sizing: border-box;\n  width: auto;\n  min-width: 0;\n  max-width: none;\n  max-height: min(30vh, 140px);\n  margin: 0;\n  padding: 8px 10px;\n  align-items: stretch;\n  gap: 4px;\n  border: 1px solid #dce2dd;\n  border-radius: 8px;\n  background: #f9fbf9;\n  color: #4f5b53;\n  overflow: auto;\n  overscroll-behavior: contain;\n  scrollbar-width: thin;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack > * {\n  flex-shrink: 0;\n  min-width: 0;\n  max-width: 100%;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack :is(.cm-bbox,.cm-foot) {\n  box-sizing: border-box;\n  width: 100%;\n  min-width: 0;\n  max-width: 100%;\n  padding: 4px 0;\n  border-radius: 0;\n  background: transparent;\n  border: 0;\n  gap: 4px;\n  font-size: 12px;\n  line-height: 18px;\n  color: #4f5b53;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack .cm-foot {\n  height: auto;\n  min-height: 24px;\n  white-space: normal;\n  overflow: visible;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack.compact .cm-bbox {\n  display: flex;\n  flex-direction: column;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack .cm-bbox-head {\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 6px;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack .cm-mm-row {\n  min-width: 0;\n  gap: 6px;\n  padding: 2px 0;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack :is(.cm-bbox-line,.cm-mm-reset,.cm-note,.cm-hint) {\n  display: block;\n  font-size: 11px;\n  line-height: 16px;\n  color: #748078;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack :is(.cm-bbox-label,.cm-mm-title,.cm-mm-text,.cm-num) {\n  min-width: 0;\n  max-width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  white-space: normal;\n  overflow: visible;\n  text-overflow: clip;\n  overflow-wrap: anywhere;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack .cm-bbox-bar {\n  min-width: 0;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack :is(.cm-peak-strip,.cm-peak-classic) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  min-width: 0;\n  max-width: 100%;\n  margin: 2px 0;\n  padding: 0;\n  gap: 6px;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack :is(.cm-peak-chip,.cm-peak-classic-chip) {\n  box-sizing: border-box;\n  max-width: 100%;\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  font-size: 11px;\n  line-height: 16px;\n  white-space: normal;\n  overflow-wrap: anywhere;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack .cm-peak-track {\n  flex: none;\n  width: 100%;\n  height: 6px;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .cm-footer-stack .cm-simple-summary {\n  position: static;\n  margin: 0;\n  padding: 4px 0;\n  background: transparent;\n}\n\n/* Native collapsed mode owns its 56 px track and expand-button placement.\n   Paint that mode separately without overriding its geometry or cost renderer. */\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame)[data-sidebar-collapsed] :is(.dshDesktopSidebarSurface,.CZPbNW_sidebarCol),\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame)[data-sidebar-collapsed] .WYye1W_root.WYye1W_collapsed {\n  background: #292e2c;\n  color: #bcc9c1;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame)[data-sidebar-collapsed] .WYye1W_root.WYye1W_collapsed :is(.WYye1W_toggle,.WYye1W_newSession,.WYye1W_panelRow,[data-cordis-badge],.ZiQlkq_trigger,._0mJWUG_button,._3OAjNW_trigger,.dshMarketLauncher) {\n  color: #bcc9c1;\n  background: transparent;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame)[data-sidebar-collapsed] .WYye1W_root.WYye1W_collapsed .WYye1W_brand {\n  color: #edf2ee;\n}\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame)[data-sidebar-collapsed] .WYye1W_root.WYye1W_collapsed :is(.WYye1W_newSession,.WYye1W_panelRow,[data-cordis-badge],.ZiQlkq_trigger,._0mJWUG_button,._3OAjNW_trigger,.dshMarketLauncher):hover,\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame)[data-sidebar-collapsed] .WYye1W_root.WYye1W_collapsed .WYye1W_panelRow[aria-current=\"page\"] {\n  background: #3b493f;\n  color: #a0ec7d;\n}\n\n/* Client should reversibly add title=aria-label to rail launchers whose native\n   Tooltip is disabled by wide=true. Never change aria-label or onClick.\n   Cost-meter receives the original wide=true props when expanded so all of\n   its balance, budget, today and peak details remain available in the card. */\n\n/* Installed workspace browser appends this 24 px fade inside its tree body.\n   Keep the native overlay/scroll behavior, but end on the grey list surface. */\nhtml[data-dsh-wechat-classic] :is(.dshDesktopFrame,.CZPbNW_frame):not([data-sidebar-collapsed]) .WYye1W_root:not(.WYye1W_collapsed) .WYye1W_regionArea .tPVXea_fade {\n  background: linear-gradient(to bottom, rgba(242, 242, 242, 0), #f2f2f2);\n}\n\n/* Scoped skin for DSH Desktop 2.0.17 / Harness UI 0.2.0-rc.2.\n   Only Pg4CGa, bfNlQW, uWtHQG and _sueoW below are version-specific mappings. */\nhtml[data-dsh-wechat-classic] {\n  --wechat-accent: #078b43;\n  --wechat-accent-hover: #067b3b;\n  --wechat-message-user: #95ec69;\n  --wechat-message-assistant: #fafbfa;\n  --wechat-message-border: #e7ebe7;\n}\n\n/* The installed row kind is assistant-step. Reasoning-only seats remain plain. */\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_root {\n  box-sizing: border-box;\n  width: fit-content;\n  min-width: 0;\n  max-width: min(760px, 94%);\n  margin-right: auto;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body {\n  box-sizing: border-box;\n  min-width: 0;\n  padding: 12px 16px;\n  gap: 10px;\n  border: 1px solid var(--wechat-message-border);\n  border-radius: 8px;\n  corner-shape: round;\n  background: var(--wechat-message-assistant);\n  color: #191919;\n  overflow-wrap: anywhere;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body > [data-turn-process-inline][hidden] {\n  margin-bottom: -10px;\n}\n/* Host wide-table rules intentionally break out into viewport margins.\n   Contain them within the new bubble and retain the table's scroll surface. */\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body .md-table-wide {\n  --dsh-table-spare: 0px;\n  --dsh-table-lead: 0px;\n  width: 100%;\n  max-width: 100%;\n  margin-left: 0;\n  padding-left: 0;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body :is(pre, [data-code-block-content]) {\n  min-width: 0;\n  max-width: 100%;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body img {\n  max-width: 100%;\n  height: auto;\n}\n\nhtml[data-dsh-wechat-classic] :is([data-chat-flow-kind=\"user\"], [data-chat-flow-kind=\"steering\"]) .bfNlQW_userStack {\n  max-width: min(680px, 82%);\n}\nhtml[data-dsh-wechat-classic] :is([data-chat-flow-kind=\"user\"], [data-chat-flow-kind=\"steering\"]) .bfNlQW_bubble {\n  box-sizing: border-box;\n  padding: 12px 16px;\n  border: 1px solid #86d75c;\n  border-radius: 8px;\n  corner-shape: round;\n  background: var(--wechat-message-user);\n  color: #191919;\n  box-shadow: none;\n  overflow-wrap: anywhere;\n}\n\n/* Semantic attributes cover all conversation tabs, independent of module hash. */\nhtml[data-dsh-wechat-classic] [data-conversation-tabs] [role=\"tab\"] {\n  color: #727872;\n}\nhtml[data-dsh-wechat-classic] [data-conversation-tabs] [role=\"tab\"]:hover {\n  color: #1f5e36;\n}\nhtml[data-dsh-wechat-classic] [data-conversation-tabs] [role=\"tab\"][aria-selected=\"true\"] {\n  color: var(--wechat-accent);\n}\nhtml[data-dsh-wechat-classic] [data-conversation-tabs] [role=\"tab\"][aria-selected=\"true\"]::after {\n  background: var(--wechat-accent);\n}\n\n/* One card owns its Lexical editor, tools, model and send/stop controls.\n   Preserve the host's editor height, sticky seat, queue dock and overlays. */\nhtml[data-dsh-wechat-classic] [data-composer-card] {\n  background: #ffffff;\n  border-radius: 9px;\n  corner-shape: round;\n  box-shadow: 0 0 0 1px #dfe4df, 0 2px 8px #00000003;\n}\nhtml[data-dsh-wechat-classic] [data-composer-card]:focus-within {\n  box-shadow: 0 0 0 1px #79bb8b, 0 2px 8px #00000003;\n}\nhtml[data-dsh-wechat-classic] [data-composer-input] {\n  color: #191919;\n  caret-color: var(--wechat-accent);\n}\n/* Exact class from InputBar.module.css. Both send and stop use this class. */\nhtml[data-dsh-wechat-classic] [data-composer-card] .uWtHQG_primary {\n  width: 36px;\n  height: 34px;\n  border-radius: 7px;\n  corner-shape: round;\n  background: #07b857;\n  color: #ffffff;\n  box-shadow: none;\n}\nhtml[data-dsh-wechat-classic] [data-composer-card] .uWtHQG_primary:hover:not(:disabled) {\n  background: #06a34d;\n}\nhtml[data-dsh-wechat-classic] [data-composer-card] .uWtHQG_primary:disabled {\n  opacity: 0.4;\n}\n\n/* Tool roots expose these data attributes in the current official renderer. */\nhtml[data-dsh-wechat-classic] [data-chat-call-id] [data-tool] {\n  box-sizing: border-box;\n  min-width: 0;\n  border: 1px solid #e2e7e2;\n  border-radius: 8px;\n  corner-shape: round;\n  background: #fafbfa;\n  padding: 7px 10px;\n}\nhtml[data-dsh-wechat-classic] [data-chat-call-id] [data-tool] [data-disclosure-row] {\n  color: #536456;\n}\nhtml[data-dsh-wechat-classic] [data-chat-call-id] [data-tool] :is(._sueoW_ioCard, [data-terminal]) {\n  background: #f0f3f0;\n  border-color: #dce3dc;\n  border-radius: 6px;\n  corner-shape: round;\n}\nhtml[data-dsh-wechat-classic] [data-chat-call-id] [data-tool] [data-terminal] {\n  --dsl-terminal-radius: 6px;\n  color: #28372b;\n}\n/* Keep error/warning/diff meaning: do not blanket-reset descendant colors. */\n\n@media (max-width: 700px) {\n  html[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_root {\n    max-width: 100%;\n  }\n  html[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body {\n    padding: 12px 14px;\n  }\n  html[data-dsh-wechat-classic] :is([data-chat-flow-kind=\"user\"], [data-chat-flow-kind=\"steering\"]) .bfNlQW_userStack {\n    max-width: 90%;\n  }\n}\n\n/* The settings entry remains visible when this theme is switched off. */\n/* Keep the native scrolling, measured composer seat and overlays intact. */\nhtml[data-dsh-wechat-classic] body { color-scheme: light; }\nhtml[data-dsh-wechat-classic] ::selection { background: #c4ebcc; color: #191919; }\nhtml[data-dsh-wechat-classic] [data-conversation-header] {\n  min-height: 72px;\n  padding-inline: 24px;\n  background: #fff;\n  border-bottom: 1px solid #e7eae7;\n}\nhtml[data-dsh-wechat-classic] [data-conversation-header].ank0OG_headerBlank {\n  min-height: 0;\n  border-bottom: 0;\n}\nhtml[data-dsh-wechat-classic] [data-conversation-scroll] {\n  --dsh-chat-content-width: var(--dsh-chat-user-width, 800px);\n  background: #fff;\n}\nhtml[data-dsh-wechat-classic] .X6jxGq_scroll { padding-block: 24px; }\nhtml[data-dsh-wechat-classic] .X6jxGq_column { --dsh-chat-flow-gap: 12px; }\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_root {\n  line-height: calc(22px + var(--dsh-content-font-delta, 0px));\n  --dsw-font-markdown-code-block: calc(13px + var(--dsh-content-font-delta, 0px))/calc(20px + var(--dsh-content-font-delta, 0px)) var(--ds-font-family-code);\n  --dsw-font-markdown-base: var(--dsh-content-font-size, 14px)/calc(22px + var(--dsh-content-font-delta, 0px)) var(--dsw-font-family);\n  --dsw-font-markdown-h1: 600 calc(20px + var(--dsh-content-font-delta, 0px))/1.4 var(--dsw-font-family);\n  --dsw-font-markdown-h2: 600 calc(18px + var(--dsh-content-font-delta, 0px))/1.45 var(--dsw-font-family);\n  --dsw-font-markdown-h3: 600 calc(16px + var(--dsh-content-font-delta, 0px))/1.5 var(--dsw-font-family);\n  --dsw-font-markdown-h4: 600 var(--dsh-content-font-size, 14px)/1.6 var(--dsw-font-family);\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body :is(h1,h2,h3,h4,h5,h6) {\n  margin-top: 14px;\n  margin-bottom: 7px;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body :is(p,ul,ol,blockquote) {\n  margin-block: 8px;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body li > p { margin-block: 5px; }\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body hr { margin-block: 16px; }\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body :is(th,td) {\n  padding: 8px 12px;\n  font-size: var(--dsh-content-font-size, 14px);\n  line-height: calc(20px + var(--dsh-content-font-delta, 0px));\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body th { background: #f1f4f1; }\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .md-code-block {\n  --dsl-code-block-border-radius: 6px;\n  margin-block: 12px;\n  border: 1px solid #e0e6e0;\n}\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) [data-code-block-banner] { padding-block: 7px; }\nhtml[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .md-code-block pre { padding: 12px; }\nhtml[data-dsh-wechat-classic] [data-composer-card] { gap: 8px; }\nhtml[data-dsh-wechat-classic] [data-composer-input] { min-height: 38px; }\nhtml[data-dsh-wechat-classic] [data-composer-seat] {\n  --dsh-composer-card-max-width: var(--dsh-chat-content-width, 800px);\n  --dsh-composer-text-max-height: 180px;\n}\nhtml[data-dsh-wechat-classic] [data-composer-card] .uWtHQG_row { padding: 2px 10px 8px; }\nhtml[data-dsh-wechat-classic] [data-composer-card] .uWtHQG_primary { transform: none; }\n/* The native statistics pills own their dialogs. Keep their click targets;\n   constrain the cost plugin's text without replacing its native full title. */\nhtml[data-dsh-wechat-classic] [data-composer-seat] .uWtHQG_dock {\n  width: 100%;\n  max-width: var(--dsh-composer-card-max-width, 800px);\n  flex-wrap: wrap;\n  gap: 3px 8px;\n  padding-top: 6px;\n}\nhtml[data-dsh-wechat-classic] [data-composer-stats] {\n  flex: 0 1 auto;\n  gap: 4px;\n  color: #7b847e;\n  font-size: calc(var(--dsh-content-font-size-secondary, 13px) - 1px);\n}\nhtml[data-dsh-wechat-classic] [data-composer-stats] .z4IYsq_pill {\n  min-height: 24px;\n  padding: 2px 6px;\n  color: #7b847e;\n  border-radius: 6px;\n}\nhtml[data-dsh-wechat-classic] [data-composer-stats] button.z4IYsq_pill:is(:hover,[aria-expanded=\"true\"]) {\n  background: #edf3ee;\n  color: #49624f;\n}\nhtml[data-dsh-wechat-classic] [data-composer-seat] .cm-root {\n  flex: 0 1 320px;\n  max-width: 100%;\n  padding: 2px 6px;\n  color: #818a84;\n  font-size: calc(var(--dsh-content-font-size-secondary, 13px) - 1px);\n  line-height: calc(20px + var(--dsh-content-font-delta-secondary, 0px));\n  font-variant-numeric: tabular-nums;\n}\nhtml[data-dsh-wechat-classic] [data-composer-seat] .cm-root:hover { color: #59655d; }\nhtml[data-dsh-wechat-classic] [data-conversation-header] .ank0OG_crumbCurrent {\n  font-size: 17px;\n  line-height: 26px;\n  font-weight: 600;\n  max-width: min(440px, 38cqw);\n}\n\n/* Existing companion control: move by scoped CSS only so its native handler,\n   accessible state and preference stay owned by the companion plugin. */\nhtml[data-dsh-wechat-classic]:has(.dshDesktopFrame) body > button.presence-toggle {\n  box-sizing: border-box;\n  left: 14px;\n  right: auto;\n  bottom: 108px;\n  width: 44px;\n  height: 40px;\n  flex-direction: column;\n  justify-content: center;\n  gap: 4px;\n  padding: 4px 2px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  box-shadow: none;\n  color: #bdcbc2;\n  font: 10px/12px var(--dsw-font-family);\n  opacity: 0.85;\n}\nhtml[data-dsh-wechat-classic]:has(.dshDesktopFrame) body > button.presence-toggle:hover {\n  background: #3b493f;\n  opacity: 1;\n}\nhtml[data-dsh-wechat-classic]:has(.dshDesktopFrame[data-sidebar-collapsed]) body > button.presence-toggle { left: 6px; }\nhtml[data-dsh-wechat-classic]:has(.dshDesktopFrame) body > button.presence-toggle .presence-toggle-dot { width: 6px; height: 6px; }\nhtml[data-dsh-wechat-classic]:has(.dshDesktopFrame) body > button.presence-toggle .presence-toggle-label { white-space: nowrap; }\n@container (max-width: 700px) {\n  html[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_root {\n    max-width: 100%;\n  }\n  html[data-dsh-wechat-classic] [data-chat-flow-kind=\"assistant-step\"]:not([data-chat-group-part=\"reasoning\"]) .Pg4CGa_body {\n    padding-inline: 14px;\n  }\n  html[data-dsh-wechat-classic] :is([data-chat-flow-kind=\"user\"], [data-chat-flow-kind=\"steering\"]) .bfNlQW_userStack {\n    max-width: 90%;\n  }\n}\n\n.dshWechatThemeRow {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 0;\n  border-bottom: 1px solid var(--dsw-alias-border-l2);\n  font: inherit;\n  color: var(--dsw-alias-label-primary);\n}\n.dshWechatThemeCopy { flex: 1; min-width: 220px; }\n.dshWechatThemeTitle { font-size: 14px; line-height: 22px; }\n.dshWechatThemeDescription {\n  margin-top: 4px;\n  font-size: 12px;\n  line-height: 18px;\n  color: var(--dsw-alias-label-tertiary);\n}\n.dshWechatThemeChoices { display: flex; gap: 8px; }\n.dshWechatThemeChoice {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  min-height: 34px;\n  padding: 6px 12px;\n  border: 1px solid var(--dsw-alias-border-l4);\n  border-radius: 7px;\n  background: var(--dsw-alias-bg-layer-1);\n  color: var(--dsw-alias-label-primary);\n  cursor: pointer;\n  font: inherit;\n  font-size: 13px;\n}\n.dshWechatThemeChoice[aria-pressed=\"true\"] {\n  background: #e0f3e7;\n  border-color: #078b43;\n  color: #086332;\n}\n.dshWechatThemeChoice:focus-visible { outline: 2px solid #078b43; outline-offset: 2px; }\n.dshWechatThemeSwatch { width: 12px; height: 12px; border-radius: 3px; background: #07c160; }\n\n\r\n\r\n";
    const DICTIONARIES = {
      zh: { title: "微信经典绿", description: "深色图标栏、灰色会话列表和绿色聊天气泡。", enable: "微信经典绿", restore: "恢复原主题" },
      en: { title: "WeChat Classic", description: "Dark icon rail, grey conversation list and green chat bubbles.", enable: "WeChat Classic", restore: "Previous theme" }
    };

    function readState() {
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
        if (saved && typeof saved.enabled === "boolean") {
          return { enabled: saved.enabled, restore: BUILTIN.includes(saved.restore) ? saved.restore : "system" };
        }
      } catch {}
      return { enabled: true, restore: "system" };
    }
    function saveState(state) {
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
    }

    function ThemeRow({ t, current, subscribe, select }) {
      const active = React.useSyncExternalStore(subscribe, current, current);
      return React.createElement("div", { className: "dshWechatThemeRow", "data-wechat-theme-settings": "" },
        React.createElement("div", { className: "dshWechatThemeCopy" },
          React.createElement("div", { className: "dshWechatThemeTitle" }, t("title")),
          React.createElement("div", { className: "dshWechatThemeDescription" }, t("description"))),
        React.createElement("div", { className: "dshWechatThemeChoices", role: "group", "aria-label": t("title") },
          React.createElement("button", { type: "button", className: "dshWechatThemeChoice", "aria-pressed": active, onClick: () => select(true) },
            React.createElement("span", { className: "dshWechatThemeSwatch", "aria-hidden": true }), t("enable")),
          React.createElement("button", { type: "button", className: "dshWechatThemeChoice", "aria-pressed": !active, onClick: () => select(false) }, t("restore"))));
    }

    function apply(ctx) {
      const theme = ctx.get("theme");
      const preferences = ctx.get("configForms").get("ui-theme");
      const layout = ctx.get("layout");
      let state = readState();
      let initialized = false;
      let disposed = false;
      let themeRestoreQueued = false;
      let sidebarThemeActive = false;
      let sidebarLease = null;
      let unsubscribeSidebar = null;
      let sidebarToggleLease = null;
      let sidebarToggleInProgress = false;
      let sidebarTitlesActive = false;
      let sidebarTitleObserver = null;
      const sidebarTitles = new Map();
      const originalSetTheme = theme.setTheme;
      const setTheme = (id) => originalSetTheme.call(theme, id);

      // Desktop advanced/extended exposes a public observable layout controller.
      // Compatibility mode shares the upstream root store instead. Its explicit
      // zero-argument create closure returns that existing instance; never call a
      // normal StoreHandle.create(scopeKey), which would create a second store.
      function sharedSidebarStore() {
        try {
          if (typeof layout?.setSidebar === "function" && typeof layout.getSnapshot === "function" && typeof layout.subscribe === "function") {
            if (Number.isFinite(layout.getSnapshot()?.sidebar)) return {
              desktop: layout,
              actions: { setSidebar: (width) => layout.setSidebar(width) },
              getSnapshot: () => ({ layoutInfo: layout.getSnapshot() }),
              subscribe: (listener) => layout.subscribe(listener)
            };
          }
          if (typeof layout?.panels?.setSidebar !== "function" || typeof ctx.slots.entries !== "function") return null;
          for (const entry of ctx.slots.entries("root")) {
            const handle = entry?.store;
            if (typeof handle?.create !== "function" || handle.create.length !== 0 || typeof handle.spec?.actions?.setSidebar !== "function") continue;
            const instance = handle.create();
            if (instance?.actions !== layout.panels || typeof instance.getSnapshot !== "function" || typeof instance.subscribe !== "function") continue;
            if (!Number.isFinite(instance.getSnapshot()?.layoutInfo?.sidebar)) continue;
            return instance;
          }
        } catch {}
        return null;
      }

      function sidebarState(instance) {
        try {
          const info = instance.getSnapshot()?.layoutInfo;
          if (!Number.isFinite(info?.sidebar)) return null;
          const narrow = typeof info.narrow === "boolean" ? info.narrow
            : Number.isFinite(info.viewportWidth) && info.viewportWidth < 1024;
          return { width: info.sidebar, narrow, collapsed: narrow ? !info.narrowExpanded : info.sidebar === 0 };
        } catch { return null; }
      }

      function sidebarWidth(instance) { return sidebarState(instance)?.width ?? null; }

      function releaseSidebar(restore) {
        const lease = sidebarLease;
        sidebarLease = null;
        const unsubscribe = unsubscribeSidebar;
        unsubscribeSidebar = null;
        try { unsubscribe?.(); } catch {}
        const current = lease === null ? null : sidebarState(lease.instance);
        // A narrow frame can be closed while retaining its nonzero preference.
        // Never reopen a closed frame as part of theme cleanup.
        if (!restore || current === null || current.collapsed || current.width !== lease.applied) return;
        try { lease.instance.actions.setSidebar(lease.previous); } catch {}
      }

      function reconcileSidebarLease(instance) {
        if (sidebarToggleInProgress || sidebarLease?.instance !== instance) return;
        const current = sidebarState(instance);
        // Closing is reversible through the Desktop toggle wrapper. A positive
        // width changed by a subsequent drag relinquishes this adjustment.
        if (current === null || (current.width !== 0 && current.width !== sidebarLease.applied)) releaseSidebar(false);
      }

      function acquireSidebarLease(instance, previous, applied) {
        sidebarLease = { instance, previous, applied };
        const unsubscribe = instance.subscribe(() => reconcileSidebarLease(instance));
        if (typeof unsubscribe === "function") unsubscribeSidebar = unsubscribe;
      }

      function releaseSidebarToggle() {
        const lease = sidebarToggleLease;
        sidebarToggleLease = null;
        if (lease === null) return;
        try {
          if (lease.controller.toggleSidebar !== lease.wrapper) return;
          if (lease.descriptor) Object.defineProperty(lease.controller, "toggleSidebar", lease.descriptor);
          else delete lease.controller.toggleSidebar;
        } catch {}
      }

      function retainDesktopSidebarWidth(instance) {
        const controller = instance.desktop;
        try {
          if (!controller || typeof controller.toggleSidebar !== "function") return;
          const initial = sidebarState(instance);
          if (initial === null) return;
          const original = controller.toggleSidebar;
          const descriptor = Object.getOwnPropertyDescriptor(controller, "toggleSidebar");
          let rememberedWidth = initial.width > 0 ? initial.width : 360;
          let rememberedThemeWidth = initial.width === 0 || sidebarLease?.instance === instance;
          const wrapper = function(...args) {
            const before = sidebarState(instance);
            if (disposed || !sidebarThemeActive || before === null || before.narrow) return original.apply(this, args);
            if (before.width > 0) {
              rememberedWidth = before.width;
              rememberedThemeWidth = sidebarLease?.instance === instance && before.width === sidebarLease.applied;
            }
            sidebarToggleInProgress = true;
            try {
              const result = original.apply(this, args);
              try {
                const after = sidebarState(instance);
                // Desktop's wide toggle otherwise resets every expansion to 280.
                // The native narrow toggle only changes narrowExpanded and stays intact.
                if (before.width === 0 && after !== null && !after.narrow && after.width > 0 && after.width !== rememberedWidth) {
                  const nativeWidth = after.width;
                  instance.actions.setSidebar(rememberedWidth);
                  if (rememberedThemeWidth && sidebarLease === null && sidebarWidth(instance) === rememberedWidth) {
                    acquireSidebarLease(instance, nativeWidth, rememberedWidth);
                  }
                }
              } catch { releaseSidebar(false); }
              return result;
            } finally {
              sidebarToggleInProgress = false;
              reconcileSidebarLease(instance);
            }
          };
          controller.toggleSidebar = wrapper;
          if (controller.toggleSidebar === wrapper) sidebarToggleLease = { controller, descriptor, wrapper };
        } catch {}
      }

      function syncSidebar(active) {
        if (sidebarThemeActive === active) return;
        sidebarThemeActive = active;
        if (!active) {
          releaseSidebarToggle();
          releaseSidebar(true);
          return;
        }
        const instance = sharedSidebarStore();
        if (instance === null) return;
        const initial = sidebarState(instance);
        if (initial === null) return;
        try {
          // Respect a closed sidebar and an existing 360px user preference.
          if (!initial.collapsed && initial.width > 0 && initial.width !== 360) {
            instance.actions.setSidebar(360);
            if (sidebarWidth(instance) === 360) acquireSidebarLease(instance, initial.width, 360);
          }
          retainDesktopSidebarWidth(instance);
        } catch {
          releaseSidebar(true);
        }
      }

      function releaseSidebarTitles() {
        sidebarTitlesActive = false;
        try { sidebarTitleObserver?.disconnect(); } catch {}
        sidebarTitleObserver = null;
        for (const [button, title] of sidebarTitles) {
          try { if (button.getAttribute("title") === title) button.removeAttribute("title"); } catch {}
        }
        sidebarTitles.clear();
      }

      function syncSidebarTitles(active) {
        if (!active) { releaseSidebarTitles(); return; }
        if (sidebarTitlesActive) return;
        sidebarTitlesActive = true;
        let attempts = 0;
        const scan = () => {
          if (disposed || !sidebarTitlesActive) return;
          try {
            const roots = document.querySelectorAll(".WYye1W_root");
            for (const root of roots) {
              const buttons = root.querySelectorAll("button[aria-label]:is(.WYye1W_panelRow, .WYye1W_iconButton, .WYye1W_newSession, .WYye1W_toggle, ._0mJWUG_button, ._3OAjNW_trigger, .dshDesktopAccountTrigger, .CFAWpG_trigger)");
              for (const button of buttons) {
                const label = button.getAttribute("aria-label")?.trim();
                if (!label) continue;
                const previous = sidebarTitles.get(button);
                if (previous !== undefined) {
                  if (button.getAttribute("title") === previous && previous !== label) {
                    button.setAttribute("title", label);
                    sidebarTitles.set(button, label);
                  }
                } else if (!button.hasAttribute("title")) {
                  button.setAttribute("title", label);
                  sidebarTitles.set(button, label);
                }
              }
            }
            if (roots.length > 0 && sidebarTitleObserver === null && typeof MutationObserver === "function") {
              sidebarTitleObserver = new MutationObserver(scan);
              for (const root of roots) sidebarTitleObserver.observe(root, { childList: true, subtree: true });
            }
            // The React root may mount after plugin activation. Discovery is
            // bounded and never observes the page or reads conversation text.
            if (roots.length === 0 && ++attempts < 8) {
              if (typeof requestAnimationFrame === "function") requestAnimationFrame(scan);
              else queueMicrotask(scan);
            }
          } catch {}
        };
        scan();
      }

      // ThemeRuntime stores only built-in choices durably. Observe explicit choices
      // separately from host hydration/font-size adoption, which bypass setTheme.
      const trackedSetTheme = function(id) {
        if (id !== "system" && !theme.getTheme().themes.some((entry) => entry.id === id)) {
          return originalSetTheme.call(this, id);
        }
        if (!disposed) {
          state.enabled = id === THEME_ID;
          if (BUILTIN.includes(id)) state.restore = id;
          saveState(state);
        }
        const result = originalSetTheme.call(this, id);
        // A host adoption may already have selected this built-in id before an
        // explicit restore click; ThemeRuntime then returns without an event.
        // Still release temporary sidebar resources for that explicit choice.
        if (!disposed && !state.enabled) {
          syncSidebar(false);
          syncSidebarTitles(false);
        }
        return result;
      };

      ctx.effect(() => {
        const style = document.createElement("style");
        style.dataset.plugin = "dsh-wechat-classic-theme";
        style.dataset.pluginCss = "dsh-wechat-classic-theme/skin";
        style.textContent = CSS;
        document.head.append(style);
        const unregister = theme.register({ id: THEME_ID, colorScheme: "light", tokens: TOKENS });
        theme.setTheme = trackedSetTheme;
        const sync = (snapshot) => {
          if (disposed) return;
          const active = snapshot.active.id === THEME_ID;
          document.documentElement.toggleAttribute("data-dsh-wechat-classic", active);
          if (active) { syncSidebar(true); syncSidebarTitles(true); }
          else if (!state.enabled) { syncSidebar(false); syncSidebarTitles(false); }
          // An unrelated font-size change can re-adopt the Host's built-in palette.
          // Explicit theme choices have already updated state in trackedSetTheme.
          // Finish the current dispatch first: ui-layout must not project an old
          // outer snapshot after a nested custom-theme event has painted tokens.
          if (initialized && state.enabled && !active && !themeRestoreQueued) {
            themeRestoreQueued = true;
            queueMicrotask(() => {
              themeRestoreQueued = false;
              if (!disposed && state.enabled && theme.getTheme().active.id !== THEME_ID) setTheme(THEME_ID);
            });
          }
        };
        const unsubscribeTheme = ctx.on("theme/change", sync);
        const restoreOnceReady = () => {
          if (initialized || disposed || preferences.getSnapshot().value === undefined) return;
          initialized = true;
          const preference = theme.getTheme().preference;
          if (localStorageAvailableAndEmpty() && BUILTIN.includes(preference)) state.restore = preference;
          saveState(state);
          if (state.enabled) setTheme(THEME_ID);
          sync(theme.getTheme());
        };
        const unsubscribePreferences = preferences.subscribe(restoreOnceReady);
        const onStorage = (event) => {
          if (event.key !== STORAGE_KEY || disposed) return;
          state = readState();
          initialized = true;
          setTheme(state.enabled ? THEME_ID : state.restore);
        };
        window.addEventListener("storage", onStorage);
        restoreOnceReady();
        sync(theme.getTheme());
        return () => {
          disposed = true;
          unsubscribeTheme();
          unsubscribePreferences();
          window.removeEventListener("storage", onStorage);
          syncSidebar(false);
          releaseSidebarTitles();
          if (theme.setTheme === trackedSetTheme) theme.setTheme = originalSetTheme;
          if (theme.getTheme().active.id === THEME_ID) setTheme(state.restore);
          document.documentElement.removeAttribute("data-dsh-wechat-classic");
          style.remove();
          unregister();
        };
      }, "wechat-classic: theme and scoped skin");

      function localStorageAvailableAndEmpty() {
        try { return localStorage.getItem(STORAGE_KEY) === null; } catch { return false; }
      }
      ctx.effect(() => ctx.get("locale").register("wechat-classic", DICTIONARIES), "wechat-classic: translations");
      ctx.slots.inject("settings.general.item", () => ctx.slots.register({
        name: "settings.general.item",
        id: "wechat-classic",
        order: 12,
        locale: "wechat-classic",
        inject: () => ({
          current: () => theme.getTheme().active.id === THEME_ID,
          subscribe: (listener) => ctx.on("theme/change", listener),
          select: (enabled) => {
            initialized = true;
            theme.setTheme(enabled ? THEME_ID : state.restore);
          }
        })
      }, ThemeRow));
    }

    return { inject: ["theme", "slots", "locale", "configForms", "layout"], apply };
  }
});

