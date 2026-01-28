import React, { useState } from 'react';
import { storage } from '../utils/storage';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            // Simulate network delay
            setTimeout(() => {
                storage.addProspect(formData);
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });

                // Reset status after 5s
                setTimeout(() => setStatus('idle'), 5000);
            }, 1000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-info">
                        <h2>Hablemos de tu próximo proyecto</h2>
                        <p>
                            Estamos listos para escuchar tus ideas y convertirlas en realidad.
                            Completa el formulario y nos pondremos en contacto a la brevedad.
                        </p>

                        <div className="info-items">
                            <div className="info-item">
                                <div className="icon-box">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h4>Llámanos</h4>
                                    <p>+54 11 1234-5678</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <p>info@syresconstrucciones.com.ar</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="icon-box">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4>Oficina Principal</h4>
                                    <p>Av. del Libertador 1234, Piso 5<br />Buenos Aires, Argentina</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <div className="map-content">
                                <MapPin size={32} />
                                <span>Google Maps Placeholder</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3>Envíanos tu consulta</h3>

                            <div className="form-group">
                                <label htmlFor="name">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Ej: Juan Pérez"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="ejemplo@email.com"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Teléfono</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="11 1234 5678"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Mensaje (Opcional)</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Cuéntanos brevemente sobre tu proyecto..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary w-full ${status === 'submitting' ? 'loading' : ''}`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Enviando...' : (
                                    <>
                                        Enviar Consulta <Send size={18} style={{ marginLeft: '8px' }} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <div className="alert success">
                                    ¡Gracias! Hemos recibido tu consulta y te responderemos pronto.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="alert error">
                                    Hubo un error al enviar. Por favor intenta nuevamente.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
        .contact-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }

        .contact-info h2 {
          margin-bottom: 20px;
        }

        .contact-info p {
          margin-bottom: 40px;
        }

        .info-items {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-bottom: 40px;
        }

        .info-item {
          display: flex;
          gap: 16px;
        }

        .icon-box {
          width: 40px;
          height: 40px;
          background-color: var(--color-background-alt);
          color: var(--color-primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-item h4 {
          font-size: 1rem;
          margin-bottom: 4px;
        }

        .info-item p {
          margin-bottom: 0;
          font-size: 0.95rem;
        }

        .map-placeholder {
          width: 100%;
          height: 200px;
          background-color: #e5e5e5;
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a3a3a3;
        }
        
        .map-content {
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 8px;
        }

        .contact-form-wrapper {
          background-color: white;
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          border: 1px solid rgba(0,0,0,0.05);
        }

        .contact-form h3 {
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .w-full {
          width: 100%;
        }

        .alert {
          margin-top: 20px;
          padding: 12px;
          border-radius: var(--radius-sm);
          font-size: 0.9rem;
          text-align: center;
        }

        .alert.success {
          background-color: #d1fae5;
          color: #065f46;
        }
        
        .alert.error {
          background-color: #fee2e2;
          color: #991b1b;
        }

        @media (min-width: 900px) {
          .contact-wrapper {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
        </section>
    );
};

export default Contact;
