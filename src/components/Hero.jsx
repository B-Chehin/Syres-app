import React from 'react';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background"></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <h1 className="hero-title">
                    Construimos el futuro,<br />
                    <span className="highlight">creamos tu hogar.</span>
                </h1>
                <p className="hero-subtitle">
                    Más de 15 años transformando espacios con calidad premium,
                    diseño minimalista y atención al detalle.
                </p>
                <button onClick={scrollToContact} className="btn btn-primary btn-lg">
                    Quiero mi presupuesto
                </button>
            </div>

            <style>{`
        .hero-section {
          position: relative;
          height: 100vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          color: var(--color-white);
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          /* Placeholder Architectual Image */
          background-image: url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=2000');
          background-size: cover;
          background-position: center;
          z-index: 1;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          z-index: 2;
        }

        .hero-content {
          position: relative;
          z-index: 3;
          max-width: 800px;
          padding-top: 60px; /* Offset header */
        }

        .hero-title {
          font-size: 2.5rem;
          color: var(--color-white);
          margin-bottom: 1.5rem;
          line-height: 1.1;
        }

        .hero-title .highlight {
          color: #4ade80; /* Brighter green for contrast on dark bg */
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          max-width: 600px;
          line-height: 1.6;
        }

        .btn-lg {
          padding: 16px 32px;
          font-size: 1.1rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 4rem;
          }
          .hero-subtitle {
            font-size: 1.25rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
