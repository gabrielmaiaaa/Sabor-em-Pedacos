import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home/MinhasInformacoes.css';
import { Link } from 'react-router-dom';

export default function MinhasInformacoes() {
  return (
    <div className="minha-conta">
      <header className="header">
        <button className="back-button"><Link to="/">←</Link></button>
        <h1>Minha Conta</h1>
      </header>
      
      <div className="account-container">
        <form className="account-form">
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Nome" />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" />

          <label htmlFor="phone">Telefone</label>
          <input type="tel" id="phone" placeholder="Telefone" />

          <label htmlFor="password">Senha</label>
          <input type="password" id="password" placeholder="Senha" />

          <label htmlFor="confirm-password">Confirmar Senha</label>
          <input type="password" id="confirm-password" placeholder="Confirmar Senha" />

          <label htmlFor="address">Endereço</label>
          <textarea id="address" placeholder="Endereço"></textarea>

          <div className="button-group">
            <button type="button" className="edit-button">Editar</button>
            <button type="button" className="delete-button">Deletar</button>
          </div>
        </form>
      </div>
    </div>
  )
}
