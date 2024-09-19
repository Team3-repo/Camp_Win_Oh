import React from "react";

function HeroContent() {
  return (
    <>
      <header className="hero-header">
        <h1 className="hero-title">Your Hero Title Here</h1>
      </header>
      <style jsx>{`
        .hero-header {
          display: flex;
          width: 1114px;
          max-width: 100%;
          flex-direction: column;
          align-items: center;
          padding: 0 70px 138px;
        }
        .hero-title {
          color: var(--White, var(--white, #fff));
          text-align: center;
          font: 700 64px Zen Maru Gothic, -apple-system, Roboto, Helvetica, sans-serif;
        }
        @media (max-width: 991px) {
          .hero-header {
            padding: 0 20px 100px;
          }
          .hero-title {
            font-size: 40px;
            white-space: normal;
          }
        }
      `}</style>
    </>
  );
}

export default HeroContent;