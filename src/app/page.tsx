"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Howl } from "howler";

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

  const animSoundPa = () => {
    const sound = new Howl({
      src: ["/sounds/pa.mp3"],
    });
    sound.play();
    butao();
  };

  const animSoundPo = () => {
    const sound = new Howl({
      src: ["/sounds/po.mp3"],
    });
    sound.play();
    butao();
  };

  const animSoundPu = () => {
    const sound = new Howl({
      src: ["/sounds/pupu.mp3"],
    });
    sound.play();
    butao();
  };

  useEffect(() => {
    gsap.to(containerAnim.current, {
      opacity: 1,
      scale: 2,
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
                onClick={animSoundPu}
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/totalo/"
                target="_blank"
                className="cta-outline3"
                ref={buttonRef}
                onClick={animSoundPo}
              >
                Linkedin
              </a>
              <button
                className="cta-outline2"
                ref={buttonRef}
                onClick={animSoundPa}
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
