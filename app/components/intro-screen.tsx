"use client";

import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [visible, setVisible] = useState(true);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    const closeTimer = window.setTimeout(() => {
      setClosing(true);
    }, 2300);

    const removeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 2800);

    return () => {
      window.clearTimeout(closeTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
  className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black transition-opacity duration-500 ${
    closing ? "pointer-events-none opacity-0" : "opacity-100"
  }`}
>
      <video
  autoPlay
  muted
  playsInline
  preload="auto"
  onLoadedData={(event) => {
    event.currentTarget.play().catch(() => {});
  }}
  className="
    h-[140vh]
    w-auto
    max-w-none
    -translate-y-[10%]
    object-contain
    sm:h-[125vh]
    sm:-translate-y-[10%]
    lg:h-[115vh]
    lg:-translate-y-[10%]
  "
>
  <source src="/chartmasters-intro.mp4" type="video/mp4" />
</video>
    </div>
  );
}