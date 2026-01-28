import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (credentials.username === 'admin' && credentials.credentials.password === 'admin123') {
            onLogin();
        } else if (credentials.username === 'admin' && credentials.password === 'admin123') {
            // Correct check
            onLogin();
        } else {
            setError('Credenciales incorrectas');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Panel de Administración</h2>
                <p>Ingresa para gestionar el sitio web</p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <User size={18} className="input-icon" />
                        <input
                            type="text"
                            name="username"
                            placeholder="Usuario"
                            value={credentials.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input-group">
                        <Lock size={18} className="input-icon" />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            value={credentials.password}
                            onChange={handleChange}
                        />
                    </div>

                    {error && <p className="error-msg">{error}</p>}

                    <button type="submit" className="btn btn-primary w-full">Ingresar</button>
                </form>
            </div>

            <style>{`
        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-background-alt);
        }

        .login-card {
          background: white;
          padding: 40px;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-md);
          width: 100%;
          max-width: 400px;
          text-align: center;
        }

        .login-card h2 {
          margin-bottom: 8px;
          font-size: 1.5rem;
        }

        .login-card p {
          margin-bottom: 24px;
          font-size: 0.9rem;
        }

        .input-group {
          position: relative;
          margin-bottom: 16px;
        }

        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--color-text-light);
        }

        .input-group input {
          padding-left: 40px;
        }

        .error-msg {
          color: #dc2626;
          font-size: 0.85rem;
          margin-bottom: 16px;
          text-align: left;
        }
      `}</style>
        </div>
    );
};

export default Login;
