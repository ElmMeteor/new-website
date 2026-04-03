export function initHeaderMobileMenu(): () => void {
  const header = document.getElementById("header");
  const menuButton = document.getElementById(
    "headerMenuButton",
  ) as HTMLButtonElement | null;
  const mobileNav = document.getElementById("mobileNav");

  if (!header || !menuButton || !mobileNav) {
    return () => {};
  }

  const closeMenu = () => {
    header.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const toggleMenu = () => {
    const willOpen = !header.classList.contains("menu-open");
    header.classList.toggle("menu-open", willOpen);
    menuButton.setAttribute("aria-expanded", willOpen ? "true" : "false");
  };

  const handleButtonClick = (event: MouseEvent) => {
    event.stopPropagation();
    toggleMenu();
  };

  const handleDocumentClick = (event: MouseEvent) => {
    const target = event.target as Node | null;
    if (target && !header.contains(target)) {
      closeMenu();
    }
  };

  const handleNavClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (target?.closest("a")) {
      closeMenu();
    }
  };

  const handleResize = () => {
    if (window.matchMedia("(min-width: 768px)").matches) {
      closeMenu();
    }
  };

  menuButton.addEventListener("click", handleButtonClick);
  mobileNav.addEventListener("click", handleNavClick);
  document.addEventListener("click", handleDocumentClick);
  window.addEventListener("resize", handleResize);
  window.addEventListener("hashchange", closeMenu);

  return () => {
    menuButton.removeEventListener("click", handleButtonClick);
    mobileNav.removeEventListener("click", handleNavClick);
    document.removeEventListener("click", handleDocumentClick);
    window.removeEventListener("resize", handleResize);
    window.removeEventListener("hashchange", closeMenu);
  };
}
