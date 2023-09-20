function showNavbarBg() {
  const navbar = document.querySelector<HTMLDivElement>("#navbar");

  if (!navbar) return;

  navbar.classList.add("nav-bg");
}

function hideNavbarBg() {
  const navbar = document.querySelector<HTMLDivElement>("#navbar");

  if (!navbar) return;

  navbar.classList.remove("nav-bg");
}

function checkNavbarScrollY() {
  if (window.scrollY > 0) {
    showNavbarBg();
  } else {
    hideNavbarBg();
  }
}

export function mountNavbarListener() {
  checkNavbarScrollY();
  window.addEventListener("scroll", checkNavbarScrollY, {
    passive: true,
  });
}
