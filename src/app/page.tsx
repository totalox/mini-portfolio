"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const buttonRef = useRef(null);
  const { contextSafe } = useGSAP();
  const butao = contextSafe(() => {
    gsap.to(buttonRef.current, {
      rotation: "+=360",
      scale: 1,
      duration: 1,
      overwrite: "auto",
    });
  });

  const containerAnim = useRef(null);

  useEffect(() => {
    gsap.to(containerAnim.current, {
      opacity: 1,
      scale: 3,
      duration: 1,
    });
  }, []);

  return (
    <>
      <main className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div ref={containerAnim} style={{ opacity: 0 }}>
          <div className="hero-content">
            <h1 className="wordmark">Paulo Leal Muller</h1>
            <div className="cta-row">
              <a
                href="https://github.com/totalox"
                target="_blank"
                className="cta-outline"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/totalo/"
                target="_blank"
                className="cta-outline3"
                ref={buttonRef}
                onClick={butao}
              >
                Linkedin
              </a>
              <button className="cta-outline2" ref={buttonRef} onClick={butao}>
                Click
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
