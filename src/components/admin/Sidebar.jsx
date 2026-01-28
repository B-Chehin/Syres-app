import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, List, Users, LogOut, Home } from 'lucide-react';

const Sidebar = ({ onLogout }) => {
    return (
        <aside className="sidebar">
            <div className="sidebar-header">
                <h3>Syres Admin</h3>
            </div>

            <nav className="sidebar-nav">
                <NavLink to="/admin/projects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <LayoutDashboard size={20} />
                    Proyectos
                </NavLink>
                <NavLink to="/admin/services" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <List size={20} />
                    Servicios
                </NavLink>
                <NavLink to="/admin/prospects" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                    <Users size={20} />
                    Prospectos
                </NavLink>
            </nav>

            <div className="sidebar-footer">
                <NavLink to="/" className="nav-item">
                    <Home size={20} />
                    Ver Sitio
                </NavLink>
                <button onClick={onLogout} className="nav-item logout-btn">
                    <LogOut size={20} />
                    Cerrar Sesión
                </button>
            </div>

            <style>{`
        .sidebar {
          width: 250px;
          height: 100vh;
          background-color: #111827;
          color: white;
          display: flex;
          flex-direction: column;
          position: fixed;
          left: 0;
          top: 0;
        }

        .sidebar-header {
          padding: 24px;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .sidebar-header h3 {
          color: white;
          font-size: 1.25rem;
          margin: 0;
        }

        .sidebar-nav {
          padding: 24px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          color: #9ca3af;
          transition: all 0.2s;
          font-size: 0.95rem;
          width: 100%;
          text-align: left;
        }

        .nav-item:hover, .nav-item.active {
          background-color: rgba(255,255,255,0.1);
          color: white;
        }

        .nav-item.active {
          background-color: var(--color-primary);
        }

        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .logout-btn {
          color: #ef4444;
        }
        
        .logout-btn:hover {
          background-color: rgba(239, 68, 68, 0.1);
          color: #ef4444;
        }
      `}</style>
        </aside>
    );
};

export default Sidebar;
