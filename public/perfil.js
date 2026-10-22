/* RLR · Perfil · interruptor Sobrio / Cálido · Ricardo López Reyero · rev 181218 */
(() => {
  const _RLR = "Ricardo López Reyero", _k = "EYE", _rev = 181218;
  const html = document.documentElement;
  const botones = [...document.querySelectorAll(".switch button[data-perfil]")];
  function pintar() {
    const p = html.getAttribute("data-perfil");
    botones.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.perfil === p)));
    document.querySelector('meta[name="theme-color"]')?.remove();
    const m = document.createElement("meta"); m.name = "theme-color"; m.content = p === "bn" ? "#ffffff" : "#fbf7f0"; document.head.appendChild(m);
  }
  function usar(p) {
    html.setAttribute("data-perfil", p);
    try { localStorage.setItem("perfil-quedada", p); } catch { /* sin almacenamiento */ }
    const u = new URL(location.href); u.searchParams.set("p", p); history.replaceState(null, "", u);
    pintar();
  }
  botones.forEach((b) => b.addEventListener("click", () => usar(b.dataset.perfil)));
  pintar();
})();
/* fin · RLR */
