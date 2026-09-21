"use client";

import { useEffect, useState } from "react";

export default function IntroSplash() {
  const [hide, setHide] = useState(true); // start hidden until we know
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const seen = sessionStorage.getItem("senotrams_intro_seen");
      if (seen) {
        setHide(true);
        setShow(false);
        return;
      }
      setShow(true);
      setHide(false);
      const t = setTimeout(() => {
        setHide(true);
        sessionStorage.setItem("senotrams_intro_seen", "1");
      }, 2800);
      return () => clearTimeout(t);
    } catch {
      setHide(true);
    }
  }, []);

  if (!show) return null;

  return (
    <div className={`intro-splash ${hide ? "hidden" : ""}`} aria-hidden={hide}>
      <img
        src="/images/logo.png"
        alt="Senotrams"
        className="intro-logo h-28 w-28 object-contain sm:h-36 sm:w-36 drop-shadow-[0_0_40px_rgba(0,212,200,0.45)]"
      />
      <p className="intro-script">Design and Development</p>
    </div>
  );
}
