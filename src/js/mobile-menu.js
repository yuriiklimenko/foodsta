(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    document.body.classList.toggle("menu-open");
  });

  // document.onclick = function (e) {
  //   if ((e.getAttribute != "data-menu") && (expanded)) {
  //     mobileMenuRef.classList.remove('is-open');
  //   menuBtnRef.setAttribute('aria-expanded', false);
  //   }
  // }

   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenuRef.classList.remove('is-open');
    menuBtnRef.setAttribute('aria-expanded', false);
    // bodyScrollLock.enableBodyScroll(document.body);
  });
})();