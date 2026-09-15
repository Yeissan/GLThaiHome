const tg = window.Telegram?.WebApp;

if (tg) {
  tg.ready();
  tg.expand();
}

const APPS = [
  {
    title: "Series",
    subtitle: "Catálogo, información y capítulos",
    icon: "🎬",
    url: "https://yeissan.github.io/GLThaiMiniApp/"
  },
  {
    title: "Biblioteca GL Thai",
    subtitle: "Novelas y libros en PDF",
    icon: "📚",
    url: "https://yeissan.github.io/GLThaiBooks/"
  }
];

// Para agregar más páginas después, solo añade otro objeto aquí.
// Ejemplo:
// {
//   title: "Novedades",
//   subtitle: "Últimos contenidos añadidos",
//   icon: "✨",
//   url: "https://..."
// }

const menu = document.getElementById("menu");

function openApp(url) {
  // Las otras Mini Apps siguen siendo páginas web normales,
  // así que navegamos dentro de la misma vista.
  location.href = url;
}

menu.innerHTML = APPS.map((item, i) => `
  <button class="menu-button" type="button" data-index="${i}">
    <span class="icon">${item.icon}</span>
    <span class="button-copy">
      <span class="button-title">${item.title}</span>
      <span class="button-subtitle">${item.subtitle}</span>
    </span>
    <span class="arrow">→</span>
  </button>
`).join("");

menu.querySelectorAll(".menu-button").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = APPS[Number(btn.dataset.index)];
    openApp(item.url);
  });
});
