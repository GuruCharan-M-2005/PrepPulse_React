import React, { useState, useEffect } from 'react';
import './AdminLogin.css';  
import AdminSidebar from '../adminsidebar/AdminSidebar';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const nav=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    
    setIsVisible(true);
  }, []);

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      alert('Login successful!');
      nav("/admin/dashboard");
      setUsername('');
      setPassword('');
      setError('');
    } else {
      setError('Invalid username or password');
      setUsername('');
      setPassword('');
      // setError('');
    }
  };

  return (
  
    <div className={`admin-login-container ${isVisible ? 'fade-in' : ''}`}>
      <h2 className="admin-login-title">Admin Login</h2>
      <div className="admin-login-input-group">
        <label className="admin-login-label">
          Username or Email:
          <input
            type="text"
            className="admin-login-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div className="admin-login-input-group">
        <label className="admin-login-label">
          Password:
          <input
            type="password"
            className="admin-login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      {error && <div className="admin-login-error">{error}</div>}
      <button className="admin-login-button" onClick={handleLogin}>Login</button>
    </div>
  );
}