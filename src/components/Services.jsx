import React, { useState, useEffect } from 'react';
import { Home, Droplets, Building2, LayoutGrid } from 'lucide-react';
import { storage } from '../utils/storage';

const iconMap = {
    Home,
    Droplets,
    Building2,
    LayoutGrid
};

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        // Load initial data
        setServices(storage.getServices());

        // Listen for storage events in case of updates from admin (same tab updates won't trigger 'storage' event, but custom event or simple polling/refetch on mount works for now)
        // For specific requirement "Formulario para editar los 4 servicios", we assume single page app behavior where we might revisit this page.
        // If routing back from admin, it will remount and fetch fresh data.
    }, []);

    return (
        <section id="services" className="section bg-light">
            <div className="container">
                <div className="text-center section-header">
                    <h2>Nuestros Servicios</h2>
                    <p className="subtitle">Soluciones integrales para cada necesidad constructiva</p>
                </div>

                <div className="services-grid">
                    {services.map((service) => {
                        const Icon = iconMap[service.iconName] || Home;
                        return (
                            <div key={service.id} className="service-card">
                                <div className="icon-wrapper">
                                    <Icon size={32} />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

            <style>{`
        .bg-light {
          background-color: var(--color-background-alt);
        }

        .section-header {
          margin-bottom: 60px;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .subtitle {
          font-size: 1.1rem;
          color: var(--color-text-light);
        }

        .services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 40px 30px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          transition: var(--transition);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-md);
        }

        .icon-wrapper {
          width: 70px;
          height: 70px;
          background-color: rgba(26, 77, 46, 0.1);
          color: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: var(--transition);
        }

        .service-card:hover .icon-wrapper {
          background-color: var(--color-primary);
          color: white;
        }

        .service-card h3 {
          margin-bottom: 16px;
        }

        .service-card p {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>
        </section>
    );
};

export default Services;
