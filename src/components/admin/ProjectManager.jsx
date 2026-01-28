import React, { useState, useEffect } from 'react';
import { storage } from '../../utils/storage';
import { Plus, Trash2, Edit2, X, Save } from 'lucide-react';

const ProjectManager = () => {
    const [projects, setProjects] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    // Form State
    const [form, setForm] = useState({
        title: '',
        location: '',
        category: 'En Proceso',
        imageUrl: ''
    });

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        setProjects(storage.getProjects());
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de eliminar este proyecto?')) {
            storage.deleteProject(id);
            loadProjects();
        }
    };

    const handleEdit = (project) => {
        setIsEditing(true);
        setCurrentProject(project);
        setForm({
            title: project.title,
            location: project.location,
            category: project.category,
            imageUrl: project.imageUrl
        });
    };

    const handleAddNew = () => {
        setIsEditing(true);
        setCurrentProject(null);
        setForm({
            title: '',
            location: '',
            category: 'En Proceso',
            imageUrl: ''
        });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setCurrentProject(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentProject) {
            // Update
            storage.updateProject({ ...currentProject, ...form });
        } else {
            // Create
            storage.addProject(form);
        }
        setIsEditing(false);
        loadProjects();
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <div className="manager-container">
            <div className="manager-header">
                <h2>Gestión de Proyectos</h2>
                <button onClick={handleAddNew} className="btn btn-primary">
                    <Plus size={18} style={{ marginRight: '8px' }} />
                    Nuevo Proyecto
                </button>
            </div>

            {isEditing ? (
                <div className="edit-form-card">
                    <div className="card-header">
                        <h3>{currentProject ? 'Editar Proyecto' : 'Nuevo Proyecto'}</h3>
                        <button onClick={handleCancel} className="close-btn"><X size={20} /></button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Título del Proyecto</label>
                            <input type="text" name="title" value={form.title} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label>Ubicación</label>
                            <input type="text" name="location" value={form.location} onChange={handleChange} required />
                        </div>

                        <div className="form-row">
                            <div className="form-group half">
                                <label>Estado</label>
                                <select name="category" value={form.category} onChange={handleChange}>
                                    <option value="En Proceso">En Proceso</option>
                                    <option value="Terminados">Terminado</option>
                                </select>
                            </div>

                            <div className="form-group half">
                                <label>Imagen URL</label>
                                <input type="text" name="imageUrl" value={form.imageUrl} onChange={handleChange} placeholder="https://..." required />
                            </div>
                        </div>

                        {form.imageUrl && (
                            <div className="image-preview">
                                <img src={form.imageUrl} alt="Preview" />
                            </div>
                        )}

                        <div className="form-actions">
                            <button type="button" onClick={handleCancel} className="btn btn-outline">Cancelar</button>
                            <button type="submit" className="btn btn-primary">
                                <Save size={18} style={{ marginRight: '8px' }} />
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="projects-table-wrapper">
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Título</th>
                                <th>Ubicación</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((p) => (
                                <tr key={p.id}>
                                    <td>
                                        <img src={p.imageUrl} alt={p.title} className="table-thumb" />
                                    </td>
                                    <td>{p.title}</td>
                                    <td>{p.location}</td>
                                    <td>
                                        <span className={`badge ${p.category === 'En Proceso' ? 'blue' : 'green'}`}>
                                            {p.category}
                                        </span>
                                    </td>
                                    <td className="actions-cell">
                                        <button onClick={() => handleEdit(p)} className="action-btn edit" title="Editar">
                                            <Edit2 size={18} />
                                        </button>
                                        <button onClick={() => handleDelete(p.id)} className="action-btn delete" title="Eliminar">
                                            <Trash2 size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {projects.length === 0 && (
                                <tr>
                                    <td colSpan="5" className="text-center">No hay proyectos cargados.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            )}

            <style>{`
        .manager-container {
          width: 100%;
        }

        .manager-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: var(--radius-md);
          overflow: hidden;
          box-shadow: var(--shadow-sm);
        }

        .admin-table th, .admin-table td {
          padding: 16px;
          text-align: left;
          border-bottom: 1px solid #f3f4f6;
        }

        .admin-table th {
          background-color: #f9fafb;
          font-weight: 600;
          color: var(--color-text-light);
        }

        .table-thumb {
          width: 60px;
          height: 40px;
          object-fit: cover;
          border-radius: 4px;
        }

        .badge {
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .badge.blue {
          background-color: #dbeafe;
          color: #1e40af;
        }

        .badge.green {
          background-color: #dcfce7;
          color: #166534;
        }

        .actions-cell {
          display: flex;
          gap: 8px;
        }

        .action-btn {
          padding: 6px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .action-btn.edit:hover { background-color: #eff6ff; color: #3b82f6; }
        .action-btn.delete:hover { background-color: #fef2f2; color: #ef4444; }

        /* Form Styles */
        .edit-form-card {
          background: white;
          padding: 30px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          max-width: 600px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }

        .close-btn {
          color: #9ca3af;
        }
        
        .close-btn:hover { color: #ef4444; }

        .form-row {
          display: flex;
          gap: 16px;
        }

        .half { flex: 1; }

        .image-preview {
          margin-top: 16px;
          margin-bottom: 16px;
          height: 150px;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #f3f4f6;
        }

        .image-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .form-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }
      `}</style>
        </div>
    );
};

export default ProjectManager;
