import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Produto/AdicionarProdutos.css';
import { Link } from 'react-router-dom';

export default function AdicionarProdutos() {
  return (
    <div className="adicionar-produto-container">
      <header className="header">
        <button className="back-button"><Link to="/">←</Link></button>
        <h1>Adicionar Produto</h1>
      </header>

      <div className="form-container">
        <div className="form-content">
          <form>
            <div>
              <label className="form-label">IDProduto</label>
              <input type="text" className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Nome</label>
              <input type="text" className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Categoria</label>
              <select className="form-control rounded-input">
                <option>Pizza</option>
                <option>Bebida</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="form-label">Preço</label>
              <input type="text" className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Descrição</label>
              <textarea className="form-control rounded-input" rows="3"></textarea>
            </div>
            <div className="button-container">
              <button type="button" className="btn btn-add">Adicionar</button>
              <button type="reset" className="btn btn-clear">Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
