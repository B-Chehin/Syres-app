import React from 'react';

const About = () => {
    return (
        <section id="about" className="section bg-light">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <span className="overline">Nuestra Historia</span>
                        <h2>Más que constructores, somos socios de tu visión.</h2>
                        <p>
                            En Syres Construcciones, llevamos más de una década redefiniendo el landscape urbano.
                            Nuestra filosofía se basa en tres pilares fundamentales: transparencia, calidad innegociable
                            y diseño de vanguardia.
                        </p>
                        <p>
                            Comenzamos como un pequeño estudio de arquitectura y hoy somos una empresa integral
                            que gestiona proyectos de gran escala, sin perder el trato personalizado que nos caracteriza.
                        </p>

                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">120+</span>
                                <span className="stat-label">Proyectos Entregados</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">15</span>
                                <span className="stat-label">Años de Experiencia</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">4</span>
                                <span className="stat-label">Zonas de Cobertura</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-image">
                        <img
                            src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c7c?auto=format&fit=crop&q=80&w=1000"
                            alt="Equipo Syres"
                        />
                    </div>
                </div>

                <div className="partners-grid">
                    <div className="partner-card">
                        <div className="partner-img">
                            <img
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                alt="Arq. Roberto Syres"
                            />
                        </div>
                        <div className="partner-info">
                            <h4>Arq. Roberto Syres</h4>
                            <span>Socio Fundador</span>
                            <p>Especialista en desarrollo urbano sustentable y diseño bioclimático.</p>
                        </div>
                    </div>

                    <div className="partner-card">
                        <div className="partner-img">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                                alt="Ing. Laura Mendieta"
                            />
                        </div>
                        <div className="partner-info">
                            <h4>Ing. Laura Mendieta</h4>
                            <span>Directora de Obra</span>
                            <p>Experta en gestión de proyectos complejos y optimización estructural.</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .bg-light {
          background-color: var(--color-background-alt);
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
          margin-bottom: 80px;
          align-items: center;
        }

        .overline {
          color: var(--color-primary);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.9rem;
          letter-spacing: 1px;
          margin-bottom: 12px;
          display: block;
        }

        .about-content h2 {
          margin-bottom: 24px;
        }

        .about-content p {
          margin-bottom: 20px;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .stats-row {
          display: flex;
          gap: 40px;
          margin-top: 30px;
          padding-top: 30px;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: var(--color-primary);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--color-text-light);
        }

        .about-image img {
          width: 100%;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
        }

        .partners-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
          max-width: 900px;
          margin: 0 auto;
        }

        .partner-card {
          background: white;
          padding: 24px;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          gap: 24px;
          box-shadow: var(--shadow-sm);
        }

        .partner-img {
          width: 80px;
          height: 80px;
          flex-shrink: 0;
        }

        .partner-img img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
        }

        .partner-info h4 {
          font-size: 1.1rem;
          margin-bottom: 4px;
        }

        .partner-info span {
          color: var(--color-primary);
          font-size: 0.9rem;
          font-weight: 500;
          display: block;
          margin-bottom: 8px;
        }

        .partner-info p {
          font-size: 0.9rem;
          margin-bottom: 0;
        }

        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr 1fr;
          }
          
          .partners-grid {
             grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default About;
