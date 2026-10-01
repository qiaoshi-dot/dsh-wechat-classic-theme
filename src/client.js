window.__ModuleLoader__.load({
  id: "dsh-wechat-classic-theme",
  factory(require) {
    const React = require("react");
    const THEME_ID = "wechat-classic";
    const STORAGE_KEY = "dsh.wechat-classic.preference.v1";
    const BUILTIN = ["light", "dark", "system"];
    const TOKENS = /*__THEME_TOKENS__*/ {};
    const CSS = /*__THEME_CSS__*/ "";
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

