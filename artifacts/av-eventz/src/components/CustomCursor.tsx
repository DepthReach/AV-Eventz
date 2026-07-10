import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip on touch/coarse-pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) return;
    // Respect reduced-motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let rafId: number;
    let hovering = false;
    let visible = false;   // stays false until first real mousemove
    let paused = false;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const show = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    const hide = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // On first ever move: snap ring to avoid flying in from (0,0)
      if (!visible) {
        ringX = mouseX;
        ringY = mouseY;
        visible = true;
        show();
      }

      // Dot snaps instantly
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

      if (paused) {
        paused = false;
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = !!target.closest(
        'a, button, [role="button"], input, select, textarea, label, summary, [data-interactive]'
      );
      if (isInteractive !== hovering) {
        hovering = isInteractive;
        ring.classList.toggle('cursor-ring--hover', hovering);
        dot.classList.toggle('cursor-dot--hover', hovering);
      }
    };

    // Only show after first real mousemove, so hide() on leave is always safe
    const onMouseLeave = () => { if (visible) hide(); };
    const onMouseEnter = () => { if (visible) show(); };

    // Pause RAF when tab is hidden to avoid background frame work
    const onVisibilityChange = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        paused = true;
      } else if (!paused) {
        rafId = requestAnimationFrame(tick);
      }
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const EASE = 0.12;

    const tick = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;

      // Stop RAF when ring has caught up (saves CPU when cursor is idle)
      if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
        ringX = mouseX;
        ringY = mouseY;
        ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
        paused = true;
        return;
      }

      ringX = lerp(ringX, mouseX, EASE);
      ringY = lerp(ringY, mouseY, EASE);
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    paused = true; // start paused; first mousemove will un-pause

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, []);

  return (
    <>
      {/* Inner dot — snaps instantly */}
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      {/* Outer ring — lerp trails behind */}
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
