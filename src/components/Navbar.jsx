import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo_syres.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
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
    <header className={`header ${scrolled ? 'scrolled' : ''} `}>
      <div className="container header-content">
        <div className="logo">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src={logo} alt="Syres Construcciones" style={{ height: '50px', width: 'auto' }} />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <button onClick={() => scrollToSection('hero')} className="nav-link">Inicio</button>
          <button onClick={() => scrollToSection('services')} className="nav-link">Servicios</button>
          <button onClick={() => scrollToSection('projects')} className="nav-link">Proyectos</button>
          <button onClick={() => scrollToSection('about')} className="nav-link">Quiénes Somos</button>
          <button onClick={() => scrollToSection('contact')} className="nav-link">Contacto</button>
        </nav>

        <div className="header-actions">
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary cta-btn">
            Quiero mi presupuesto
          </button>

          <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${isOpen ? 'open' : ''} `}>
        <button onClick={() => scrollToSection('hero')} className="nav-link">Inicio</button>
        <button onClick={() => scrollToSection('services')} className="nav-link">Servicios</button>
        <button onClick={() => scrollToSection('projects')} className="nav-link">Proyectos</button>
        <button onClick={() => scrollToSection('about')} className="nav-link">Quiénes Somos</button>
        <button onClick={() => scrollToSection('contact')} className="nav-link">Contacto</button>
      </div>

      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: var(--header-height);
          background: rgba(0, 0, 0, 0.95); /* Dark background */
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: var(--transition);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .header.scrolled {
          box-shadow: var(--shadow-md);
          background: rgba(0, 0, 0, 0.98);
        }

        .header-content {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo a {
          display: flex;
          align-items: center;
        }

        .desktop-nav {
          display: none;
        }

        .nav-link {
          font-weight: 500;
          color: #fff; /* White text */
          transition: var(--transition);
          font-size: 1rem;
          background: none;
          border: none;
          cursor: pointer;
        }

        .nav-link:hover {
          color: var(--color-primary);
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .cta-btn {
          display: none;
        }

        .mobile-toggle {
          display: block;
          color: #fff; /* White toggle */
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-nav {
          position: fixed;
          top: var(--header-height);
          left: 0;
          right: 0;
          background: #111; /* Dark mobile menu */
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transform: translateY(-150%);
          transition: transform 0.3s ease-in-out;
          box-shadow: var(--shadow-md);
          z-index: 999;
          text-align: center;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .mobile-nav.open {
          transform: translateY(0);
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
            gap: 2rem;
          }
          .cta-btn {
            display: inline-flex;
          }
          .mobile-toggle {
            display: none;
          }
          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
