// src/components/User/MinhasInformacoes.jsx

import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home/MinhasInformacoes.css';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../UsuarioContext';

export default function MinhasInformacoes() {
  const { usuarioLogado, atualizarUsuarioLogado, deletarUsuarioLogado } = useContext(UsuarioContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: usuarioLogado?.name || '',
    email: usuarioLogado?.email || '',
    phone: usuarioLogado?.phone || '',
    password: usuarioLogado?.password || '',
    address: usuarioLogado?.address || ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      atualizarUsuarioLogado(formData);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (window.confirm("Tem certeza que deseja deletar sua conta?")) {
      deletarUsuarioLogado();
      alert("Conta deletada com sucesso!");
      navigate('/'); // Redireciona para a página inicial
    }
  };

  return (
    <div className="minha-conta">
      <header className="header">
        <button className="back-button"><Link to="/">←</Link></button>
        <h1>Minha Conta</h1>
      </header>
      
      <div className="account-container">
        <form className="account-form">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            readOnly={!isEditing}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
          />

          <label htmlFor="phone">Telefone</label>
          <input
            type="tel"
            id="phone"
            placeholder="Telefone"
            value={formData.phone}
            onChange={handleChange}
            readOnly={!isEditing}
          />

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            readOnly={!isEditing}
          />

          <label htmlFor="address">Endereço</label>
          <textarea
            id="address"
            placeholder="Endereço"
            value={formData.address}
            onChange={handleChange}
            readOnly={!isEditing}
          ></textarea>

          <div className="button-group">
            <button type="button" className="edit-button" onClick={handleEditToggle}>
              {isEditing ? "Salvar" : "Editar"}
            </button>
            <button type="button" className="delete-button" onClick={handleDelete}>Deletar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
