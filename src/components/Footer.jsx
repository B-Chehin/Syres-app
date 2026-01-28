import React from 'react';
import { Instagram, Linkedin, Facebook, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Syres Construcciones</h3>
                        <p className="footer-desc">
                            Construyendo sueños con calidad y compromiso desde 2010. Tu socio ideal para proyectos residenciales y comerciales.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link"><Instagram size={20} /></a>
                            <a href="#" className="social-link"><Linkedin size={20} /></a>
                            <a href="#" className="social-link"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4>Enlaces Rápidos</h4>
                        <ul>
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#projects">Proyectos</a></li>
                            <li><a href="#services">Servicios</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contacto</h4>
                        <div className="contact-item">
                            <MapPin size={18} />
                            <span>Av. del Libertador 1234, CABA</span>
                        </div>
                        <div className="contact-item">
                            <Phone size={18} />
                            <span>+54 11 1234-5678</span>
                        </div>
                        <div className="contact-item">
                            <Mail size={18} />
                            <span>contacto@syres.com.ar</span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Syres Construcciones. Todos los derechos reservados.</p>
                </div>
            </div>

            <style>{`
        .footer {
          background-color: var(--color-secondary);
          color: var(--color-white);
          padding: 80px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-logo {
          color: var(--color-white);
          font-size: 1.5rem;
          margin-bottom: 20px;
        }

        .footer-desc {
          color: #a3a3a3;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-link {
          color: #fff;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .social-link:hover {
          opacity: 1;
        }

        .footer h4 {
          color: var(--color-white);
          margin-bottom: 24px;
          font-size: 1.1rem;
        }

        .footer-links ul {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #a3a3a3;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: var(--color-white);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #a3a3a3;
          margin-bottom: 16px;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 30px;
          text-align: center;
          color: #737373;
          font-size: 0.9rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr;
            gap: 80px;
          }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
