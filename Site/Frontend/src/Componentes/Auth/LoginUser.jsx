// src/components/User/LoginUser.jsx

import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../UsuarioContext';

export default function LoginUser() {
  const { usuarios } = useContext(UsuarioContext); // Acessando o contexto
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Busca o usuário pelo e-mail e valida a senha
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === password
    );

    if (usuarioEncontrado) {
      alert("Login bem-sucedido!");
      navigate('/'); // Redireciona para a página inicial após login bem-sucedido
    } else {
      setError("E-mail ou senha incorretos.");
    }
  };

  return (
    <div className="login-user">
      <header className="header">
      <button className="back-button text-white me-2"><Link to="/">←</Link></button>
        <h1>Login</h1>
      </header>

      <div className="account-container">
        <form className="account-form" onSubmit={handleLogin}>
          {error && <p className="error-message">{error}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="button-group">
            <button type="submit" className="btn btn-primary btn-add">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
