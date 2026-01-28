import React, { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { Save, Home, Droplets, Building2, LayoutGrid } from 'lucide-react';

const iconOptions = [
    { value: 'Home', label: 'Casa' },
    { value: 'Droplets', label: 'Pileta' },
    { value: 'Building2', label: 'Edificio' },
    { value: 'LayoutGrid', label: 'PH/Grid' }
];

const ServiceManager = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setServices(storage.getServices());
    }, []);

    const handleChange = (id, field, value) => {
        setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
    };

    const handleSave = () => {
        setLoading(true);
        // Simulate slight delay
        setTimeout(() => {
            services.forEach(service => {
                storage.updateService(service);
            });
            setLoading(false);
            alert('Servicios actualizados correctamente');
        }, 500);
    };

    return (
        <div className="manager-container">
            <div className="manager-header">
                <h2>Gestión de Servicios</h2>
                <button onClick={handleSave} className="btn btn-primary" disabled={loading}>
                    <Save size={18} style={{ marginRight: '8px' }} />
                    {loading ? 'Guardando...' : 'Guardar Cambios'}
                </button>
            </div>

            <div className="services-admin-grid">
                {services.map((service) => (
                    <div key={service.id} className="service-edit-card">
                        <div className="service-header">
                            <span className="service-id">#{service.id}</span>
                            <div className="icon-selector">
                                {/* Simplified Icon Selector */}
                                <label>Icono:</label>
                                <select
                                    value={service.iconName}
                                    onChange={(e) => handleChange(service.id, 'iconName', e.target.value)}
                                >
                                    {iconOptions.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Título</label>
                            <input
                                type="text"
                                value={service.title}
                                onChange={(e) => handleChange(service.id, 'title', e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Descripción</label>
                            <textarea
                                rows="3"
                                value={service.description}
                                onChange={(e) => handleChange(service.id, 'description', e.target.value)}
                            />
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        .services-admin-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .service-edit-card {
          background: white;
          padding: 24px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-sm);
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          padding-bottom: 12px;
          border-bottom: 1px solid #f3f4f6;
        }

        .service-id {
          font-weight: 600;
          color: #9ca3af;
        }

        .icon-selector {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .icon-selector select {
          padding: 4px;
          border-radius: 4px;
        }
      `}</style>
        </div>
    );
};

export default ServiceManager;
