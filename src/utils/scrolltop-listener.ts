function checkScrollY() {
  const scrollTop = document.querySelector<HTMLAnchorElement>("#scroll-top");

  if (!scrollTop) return;

  if (window.scrollY > 0) {
    scrollTop.classList.remove("hidden");
  } else {
    scrollTop.classList.add("hidden");
  }
}

export function mountScrolltopListener() {
  checkScrollY();
  window.addEventListener("scroll", checkScrollY, {
    passive: true,
  });
}
