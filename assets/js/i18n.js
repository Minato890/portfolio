// Small i18n helper: finds [data-i18n="a.b"] elements and fills them from window.LANG[lang].
(function () {
  const SUPPORTED = ["en", "ja"];

  function lookup(obj, path) {
    return path.split(".").reduce((o, k) => (o ? o[k] : undefined), obj);
  }

  function initialLang() {
    return "ja"; // always open in Japanese; the visitor can switch with the toggle
  }

  window.I18N = {
    lang: initialLang(),
    t(path) { return lookup(window.LANG[this.lang], path) ?? lookup(window.LANG.en, path) ?? path; },
    set(lang) {
      if (!SUPPORTED.includes(lang)) return;
      this.lang = lang;
      this.apply();
    },
    apply() {
      document.documentElement.lang = this.lang;
      document.title = this.t("meta.title");
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.content = this.t("meta.description");
      document.querySelectorAll("[data-i18n]").forEach((el) => {
        el.textContent = this.t(el.dataset.i18n);
      });
      document.dispatchEvent(new CustomEvent("langchange", { detail: this.lang }));
    }
  };
})();
