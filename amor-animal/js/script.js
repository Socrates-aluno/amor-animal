// Interações do Amor Animal
(() => {
  const $ = (selector, parent = document) => parent.querySelector(selector);
  const menuButton = $("#menu-hamburguer");
  const menu = $("#menu");
  const dropdownButton = $(".dropdown-botao");
  const dropdown = $(".dropdown-conteudo");

  function closeMenu() {
    if (!menu || !menuButton) return;
    menu.classList.remove("aberto");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.querySelector("span").textContent = "☰";
  }
  if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
      const open = menu.classList.toggle("aberto");
      menuButton.setAttribute("aria-expanded", String(open));
      menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
      menuButton.querySelector("span").textContent = open ? "✕" : "☰";
    });
    menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });
    window.addEventListener("resize", () => { if (window.innerWidth > 800) closeMenu(); });
  }
  if (dropdownButton && dropdown) {
    dropdownButton.addEventListener("click", () => {
      const open = dropdown.classList.toggle("aberto");
      dropdownButton.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", event => {
      if (!event.target.closest(".dropdown")) {
        dropdown.classList.remove("aberto");
        dropdownButton.setAttribute("aria-expanded", "false");
      }
    });
    dropdown.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      dropdown.classList.remove("aberto");
      dropdownButton.setAttribute("aria-expanded", "false");
    }));
  }

  // Tema explícito; a escolha é guardada localmente neste navegador.
  const themeButton = $("[data-theme-toggle]");
  const root = document.documentElement;
  let savedTheme = null;
  try { savedTheme = localStorage.getItem("amor-animal-theme"); } catch (_) {}
  if (savedTheme === "dark" || savedTheme === "light") root.dataset.theme = savedTheme;
  function updateThemeButton() {
    if (!themeButton) return;
    const dark = root.dataset.theme === "dark";
    themeButton.textContent = dark ? "☀️" : "🌙";
    const label = dark ? "Ativar modo claro" : "Ativar modo escuro";
    themeButton.setAttribute("aria-label", label);
    themeButton.setAttribute("aria-pressed", String(dark));
  }
  updateThemeButton();
  if (themeButton) themeButton.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("amor-animal-theme", next); } catch (_) {}
    updateThemeButton();
  });

  // Modal com foco inicial, contenção simples do foco e devolução ao acionador.
  const modal = $("#modal");
  const modalClose = $("#modal-fechar");
  const modalTitle = $("#modal-titulo");
  let opener = null;
  function closeModal() {
    if (!modal || modal.hidden) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-aberto");
    if (opener) opener.focus();
  }
  function openModal(button) {
    if (!modal || !modalTitle) return;
    opener = button;
    const animal = button.dataset.animal || "animal";
    modalTitle.textContent = `Conheça ${animal}`;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-aberto");
    modalClose?.focus();
  }
  document.querySelectorAll(".botao-card").forEach(button => button.addEventListener("click", () => openModal(button)));
  modalClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", event => { if (event.target === modal) closeModal(); });
  document.addEventListener("keydown", event => {
    if (!modal || modal.hidden) return;
    if (event.key === "Escape") { event.preventDefault(); closeModal(); return; }
    if (event.key === "Tab") {
      const focusable = [...modal.querySelectorAll('a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])')];
      if (!focusable.length) { event.preventDefault(); return; }
      const first = focusable[0], last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });

  // Validação local apenas: sem backend, nenhum dado é transmitido/armazenado.
  const form = $("#form-cadastro");
  const message = $("#mensagem-formulario");
  if (form && message) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      message.className = "mensagem-formulario";
      if (!form.checkValidity()) {
        message.textContent = "Por favor, confira os campos obrigatórios e corrija as informações.";
        message.classList.add("visivel", "erro");
        form.reportValidity();
        message.focus();
        return;
      }
      message.textContent = "Os campos foram validados. Este formulário é demonstrativo e ainda não envia os dados à ONG.";
      message.classList.add("visivel", "sucesso");
      message.focus();
    });
    form.addEventListener("input", () => {
      if (message.classList.contains("erro")) {
        message.textContent = "";
        message.className = "mensagem-formulario";
      }
    });
  }
})();
