import React, { useState, useEffect } from 'react';
import { storage } from '../utils/storage';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('En Proceso'); // 'En Proceso' | 'Terminados'
    const [filteredProjects, setFilteredProjects] = useState([]);

    useEffect(() => {
        const allProjects = storage.getProjects();
        setProjects(allProjects);
        setFilteredProjects(allProjects.filter(p => p.category === filter));
    }, []);

    useEffect(() => {
        setFilteredProjects(projects.filter(p => p.category === filter));
    }, [filter, projects]);

    return (
        <section id="projects" className="section">
            <div className="container">
                <div className="text-center section-header">
                    <h2>Nuestros Proyectos</h2>
                    <p className="subtitle">Excelencia constructiva en cada detalle</p>
                </div>

                <div className="filters">
                    <button
                        className={`filter-btn ${filter === 'En Proceso' ? 'active' : ''}`}
                        onClick={() => setFilter('En Proceso')}
                    >
                        En Proceso
                    </button>
                    <button
                        className={`filter-btn ${filter === 'Terminados' ? 'active' : ''}`}
                        onClick={() => setFilter('Terminados')}
                    >
                        Terminados
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image-wrapper">
                                <img src={project.imageUrl} alt={project.title} loading="lazy" />
                                <div className="project-overlay">
                                    <span className="project-status">{project.category}</span>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p className="project-location">{project.location}</p>
                            </div>
                        </div>
                    ))}

                    {filteredProjects.length === 0 && (
                        <div className="no-projects">
                            <p>No hay proyectos en esta categoría por el momento.</p>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
        .section-header {
          margin-bottom: 40px;
        }

        .filters {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 50px;
        }

        .filter-btn {
          font-size: 1rem;
          color: var(--color-text-light);
          padding-bottom: 8px;
          border-bottom: 2px solid transparent;
          transition: var(--transition);
        }

        .filter-btn.active {
          color: var(--color-primary);
          border-bottom-color: var(--color-primary);
          font-weight: 600;
        }

        .filter-btn:hover {
          color: var(--color-primary);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 30px;
        }

        .project-card {
           /* Masonry-like feel handled by grid and nice spacing */
           break-inside: avoid;
        }

        .project-image-wrapper {
          position: relative;
          border-radius: var(--radius-md);
          overflow: hidden;
          aspect-ratio: 4/3;
          margin-bottom: 16px;
        }

        .project-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-image-wrapper img {
          transform: scale(1.05);
        }

        .project-overlay {
          position: absolute;
          top: 16px;
          left: 16px;
        }

        .project-status {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--color-primary);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .project-info h3 {
          font-size: 1.25rem;
          margin-bottom: 4px;
        }

        .project-location {
          color: var(--color-text-light);
          font-size: 0.95rem;
        }

        .no-projects {
          grid-column: 1 / -1;
          text-align: center;
          padding: 40px;
          color: var(--color-text-light);
        }

        @media (min-width: 768px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
        </section>
    );
};

export default Projects;
