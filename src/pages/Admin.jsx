import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Login from '../components/admin/Login';
import Sidebar from '../components/admin/Sidebar';
import ProjectManager from '../components/admin/ProjectManager';
import ServiceManager from '../components/admin/ServiceManager';
import ProspectManager from '../components/admin/ProspectManager';

const Admin = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('syres_auth');
        if (auth === 'true') {
            setIsAuthenticated(true);
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem('syres_auth', 'true');
        setIsAuthenticated(true);
        navigate('/admin/projects');
    };

    const handleLogout = () => {
        localStorage.removeItem('syres_auth');
        setIsAuthenticated(false);
        navigate('/admin');
    };

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="admin-layout">
            <Sidebar onLogout={handleLogout} />
            <main className="admin-content">
                <Routes>
                    <Route path="/" element={<Navigate to="projects" replace />} />
                    <Route path="projects" element={<ProjectManager />} />
                    <Route path="services" element={<ServiceManager />} />
                    <Route path="prospects" element={<ProspectManager />} />
                </Routes>
            </main>

            <style>{`
        .admin-layout {
          display: flex;
          background-color: #f9fafb;
          min-height: 100vh;
        }

        .admin-content {
          margin-left: 250px;
          flex: 1;
          padding: 40px;
          height: 100vh;
          overflow-y: auto;
        }
      `}</style>
        </div>
    );
};

// Create placeholders for the managers to prevent crash until we implement them
// Or I can implement them in next step. I'll create placeholder files now.

export default Admin;
