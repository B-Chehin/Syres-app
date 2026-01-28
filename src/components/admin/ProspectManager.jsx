import React, { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { Trash2, Mail, Phone, Calendar } from 'lucide-react';

const ProspectManager = () => {
    const [prospects, setProspects] = useState([]);

    useEffect(() => {
        loadProspects();
    }, []);

    const loadProspects = () => {
        setProspects(storage.getProspects());
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Eliminar esta consulta?')) {
            storage.deleteProspect(id);
            loadProspects();
        }
    };

    return (
        <div className="manager-container">
            <div className="manager-header">
                <h2>Prospectos Recibidos</h2>
                <span className="count-badge">{prospects.length} Consultas</span>
            </div>

            <div className="prospects-list">
                {prospects.length === 0 ? (
                    <div className="empty-state">
                        <p>No hay consultas por el momento.</p>
                    </div>
                ) : (
                    prospects.map((p) => (
                        <div key={p.id} className="prospect-card">
                            <div className="prospect-header">
                                <h3>{p.name}</h3>
                                <span className="prospect-date">
                                    <Calendar size={14} style={{ marginRight: '4px' }} />
                                    {new Date(p.date).toLocaleDateString()}
                                </span>
                            </div>

                            <div className="prospect-contact">
                                <div className="contact-row">
                                    <Mail size={16} /> <a href={`mailto:${p.email}`}>{p.email}</a>
                                </div>
                                <div className="contact-row">
                                    <Phone size={16} /> <a href={`tel:${p.phone}`}>{p.phone}</a>
                                </div>
                            </div>

                            <div className="prospect-message">
                                <p>"{p.message}"</p>
                            </div>

                            <div className="prospect-actions">
                                <button onClick={() => handleDelete(p.id)} className="btn-delete-text">
                                    <Trash2 size={16} /> Eliminar
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            <style>{`
        .count-badge {
          background-color: #e5e7eb;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 0.85rem;
          color: #4b5563;
        }

        .prospects-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .prospect-card {
          background: white;
          padding: 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
          border: 1px solid #f3f4f6;
        }

        .prospect-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .prospect-header h3 {
          font-size: 1.1rem;
          margin: 0;
          color: var(--color-primary);
        }

        .prospect-date {
          display: flex;
          align-items: center;
          color: #9ca3af;
          font-size: 0.85rem;
        }

        .prospect-contact {
          display: flex;
          gap: 24px;
          margin-bottom: 16px;
        }

        .contact-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.9rem;
          color: #4b5563;
        }
        
        .contact-row a:hover {
          color: var(--color-primary);
          text-decoration: underline;
        }

        .prospect-message {
          background-color: #f9fafb;
          padding: 16px;
          border-radius: var(--radius-sm);
          font-style: italic;
          color: #374151;
          margin-bottom: 16px;
        }

        .prospect-actions {
          display: flex;
          justify-content: flex-end;
        }

        .btn-delete-text {
          color: #ef4444;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.9rem;
          padding: 4px 8px;
          border-radius: 4px;
        }

        .btn-delete-text:hover {
          background-color: #fef2f2;
        }

        .empty-state {
          text-align: center;
          padding: 40px;
          color: #9ca3af;
        }
      `}</style>
        </div>
    );
};

export default ProspectManager;
