import React from "react";
import HeroContent from "@/components/CampingStore/PD";

function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c30e4c829957726eab14cdd6600b6ccc669ae8fd1895dd1718837270e328c643?placeholderIfAbsent=true&apiKey=ff1208b97220405794b61b476c6106d1" className="hero-background" alt="" />
        <div className="hero-content-wrapper">
          <HeroContent />
        </div>
      </section>
      <style jsx>{`
        .hero-section {
          display: flex;
          flex-direction: column;
          align-self: stretch;
          overflow: hidden;
          position: relative;
          min-height: 784px;
          justify-content: center;
          padding: 50px 100px;
        }
        @media (max-width: 991px) {
          .hero-section {
            padding: 0 20px;
          }
        }
        .hero-background {
          position: absolute;
          inset: 0;
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
        .hero-content-wrapper {
          position: relative;
          display: flex;
          min-height: 684px;
          width: 100%;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          padding: 200px 0 100px;
        }
        @media (max-width: 991px) {
          .hero-content-wrapper {
            max-width: 100%;
            padding-top: 100px;
          }
        }
      `}</style>
    </>
  );
}

export default HeroSection;