// src/components/User/CreateUser.jsx

import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../UsuarioContext';

export default function CreateUser() {
  const { adicionarUsuario } = useContext(UsuarioContext); // Usando o contexto
  const [userData, setUserData] = useState({
    id: Date.now(),  // Gera um ID único (exemplo, pode ser modificado)
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    address: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData({ ...userData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificação básica de senha
    if (userData.password !== userData.confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    // Adicionar o novo usuário ao contexto
    adicionarUsuario(userData);

    // Redirecionar para a página inicial ou outra página após o cadastro
    navigate('/login');
  };

  return (
    <div className="create-user">
      <header className="header">
        <button className="back-button text-white me-2"><Link to="/">←</Link></button>
        <h1>Cadastrar Usuário</h1>
      </header>
      
      <div className="account-container">
        <form className="account-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={userData.name}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={userData.email}
            onChange={handleChange}
          />

          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Telefone"
            value={userData.phone}
            onChange={handleChange}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={userData.password}
            onChange={handleChange}
          />

          <label htmlFor="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirmar Senha"
            value={userData.confirmPassword}
            onChange={handleChange}
          />

          <label htmlFor="address">Endereço</label>
          <textarea
            id="address"
            placeholder="Endereço"
            value={userData.address}
            onChange={handleChange}
          ></textarea>

          <div className="button-group">
            <button type="submit" className="btn btn-primary btn-add">Cadastrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
