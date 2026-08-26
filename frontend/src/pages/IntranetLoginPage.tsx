import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, ArrowRight, ShieldCheck } from 'lucide-react';
import '../styles/intranet.css';

export default function IntranetLoginPage() {
  const navigate = useNavigate();

  const [rut, setRut] = React.useState('12.345.678-9');
  const [password, setPassword] = React.useState('karmac2026');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/intranet');
  };

  return (
    <div className="intra-login-container">
      <div className="intra-login-card">
        <div className="intra-login-header">
          <img src="/img/LOGO.png" alt="Karmac S.A." style={{ display: 'block', margin: '0 auto 1rem auto', width: 'auto', height: '64px' }} />
          <h1>Portal Vendedores</h1>
          <p>Karmac S.A.</p>
        </div>

        <form onSubmit={handleLogin} className="intra-login-form">
          <div className="intra-form-group">
            <label>Usuario / RUT</label>
            <div className="intra-input-wrapper">
              <User size={18} />
              <input 
                type="text" 
                value={rut} 
                onChange={(e) => setRut(e.target.value)} 
                placeholder="Ej: 12.345.678-9" 
                required 
              />
            </div>
          </div>
          
          <div className="intra-form-group">
            <label>Contraseña</label>
            <div className="intra-input-wrapper">
              <Lock size={18} />
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="••••••••" 
                required 
              />
            </div>
          </div>

          <button type="submit" className="intra-btn-login">
            Iniciar Sesión
          </button>
        </form>

        <div className="intra-demo-section">
          <div className="intra-divider">
            <span>MODO DEMO</span>
          </div>
          <button 
            type="button" 
            className="intra-btn-demo" 
            onClick={() => navigate('/intranet')}
          >
            Ingreso Rápido (Vendedor Demo) <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
