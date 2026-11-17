"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  const { contextSafe } = useGSAP();
  const buttonRef = useRef(null);
  const containerAnim = useRef(null);

  const butao = contextSafe(() => {
    gsap.to(buttonRef.current, {
      rotation: "+=360",
      scale: 1,
      duration: 1,
      overwrite: "auto",
    });
  });

  useEffect(() => {
    gsap.to(containerAnim.current, {
      opacity: 1,
      scale: 2,
      duration: 1,
    });
  }, []);

  const audioPa = () => {
    const music = new Audio("/sounds/pa.mp3");

    music.play();
    butao();
  };

  const audioPo = () => {
    const music = new Audio("/sounds/po.mp3");

    music.play();
  };

  const audioPupu = () => {
    const music = new Audio("/sounds/pupu.mp3");

    music.play();
  };

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
                onClick={audioPupu}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/totalo/"
                target="_blank"
                className="cta-outline3"
                ref={buttonRef}
                onClick={audioPo}
              >
                Linkedin
              </a>
              <button
                className="cta-outline2"
                ref={buttonRef}
                onClick={audioPa}
              >
                Click
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
