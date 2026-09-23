"use client";

import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollRuntime() {
  useLayoutEffect(() => {
    let refreshTimer: number | undefined;

    const refresh = () => {
      window.requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    const scheduleRefresh = () => {
      window.clearTimeout(refreshTimer);
      refreshTimer = window.setTimeout(refresh, 120);
    };

    refresh();

    const fontsReady = document.fonts?.ready;
    fontsReady?.then(refresh).catch(() => undefined);

    window.addEventListener("resize", scheduleRefresh, { passive: true });

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("resize", scheduleRefresh);
    };
  }, []);

  return null;
}
