const REVEAL_THRESHOLD = 0.85;
const MOBILE_BREAKPOINT = 768;

export type ScrollContext = {
  scrollY: number;
  viewportHeight: number;
};

export type ScrollEffectHandler = (context: ScrollContext) => void;

// Register one scroll handler and provide an explicit cleanup function.
export function createScrollEffect(handler: ScrollEffectHandler): () => void {
  let frameId = 0;

  const runHandler = () => {
    frameId = 0;
    handler({
      scrollY: window.scrollY,
      viewportHeight: window.innerHeight,
    });
  };

  const onScroll = () => {
    if (frameId !== 0) {
      return;
    }

    frameId = window.requestAnimationFrame(runHandler);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  runHandler();

  return () => {
    if (frameId !== 0) {
      window.cancelAnimationFrame(frameId);
    }
    window.removeEventListener("scroll", onScroll);
  };
}

export function isMobileViewport(): boolean {
  return window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`).matches;
}

export function toggleHeaderScrolledState(
  header: HTMLElement | null,
  scrollY: number,
): void {
  if (!header) return;

  const logo = document.querySelector(".hero-copy img");

  if (!logo) return;

  const logoBottom = logo.getBoundingClientRect().bottom + window.scrollY;

  if (scrollY > logoBottom) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

export function revealFadeUpElements(
  elements: Iterable<HTMLElement>,
  viewportHeight: number,
): void {
  for (const element of elements) {
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < viewportHeight * REVEAL_THRESHOLD) {
      element.classList.remove("opacity-0", "translate-y-10");
      element.classList.add("opacity-100", "translate-y-0");
    }
  }
}
