"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
export default function Home() {

  gsap.registerPlugin(useGSAP);

  const buttonRef = useRef(null);

  const { contextSafe } = useGSAP()

  const butao = contextSafe(() => {
    gsap.to(buttonRef.current, {
      rotation: "+=360",
      scale: 1,
      duration: 1,
      overwrite: "auto"
    })
  })
  
  return (
    <>
      <main className="hero" >
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <h1 className="wordmark">Paulo Leal Muller</h1>
          <div className="cta-row">
            <a
              href="https://github.com/totalox"
              target="_blank"
              className="cta-outline">
              GitHub
            </a><button
              className="cta-outline2"
              ref={buttonRef}
              onClick={butao}
              >
              Click
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
