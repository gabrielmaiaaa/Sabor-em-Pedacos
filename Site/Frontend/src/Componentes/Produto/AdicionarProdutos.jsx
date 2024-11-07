import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Produto/AdicionarProdutos.css';
import { Link } from 'react-router-dom';
import { ProdutosContext } from '../../ProdutosContext';

export default function AdicionarProdutos() {
  const { adicionarProduto } = useContext(ProdutosContext);
  const [novoProduto, setNovoProduto] = useState({
    id: '',
    nome: '',
    categoria: 'Pizza',
    preco: '',
    estoque: 'Sim',
    descricao: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleSubmit = () => {
    adicionarProduto(novoProduto);
    setNovoProduto({
      id: '',
      nome: '',
      categoria: 'Pizza',
      preco: '',
      estoque: 'Sim',
      descricao: '',
    });
  };

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
              <input type="text" name="id" value={novoProduto.id} onChange={handleChange} className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Nome</label>
              <input type="text" name="nome" value={novoProduto.nome} onChange={handleChange} className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Categoria</label>
              <select name="categoria" value={novoProduto.categoria} onChange={handleChange} className="form-control rounded-input">
                <option>Pizza</option>
                <option>Bebida</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="form-label">Preço</label>
              <input type="text" name="preco" value={novoProduto.preco} onChange={handleChange} className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Descrição</label>
              <textarea name="descricao" value={novoProduto.descricao} onChange={handleChange} className="form-control rounded-input" rows="3"></textarea>
            </div>
            <div className="button-container">
              <button type="button" onClick={handleSubmit} className="btn btn-add">Adicionar</button>
              <button type="reset" className="btn btn-clear" onClick={() => setNovoProduto({ id: '', nome: '', categoria: 'Pizza', preco: '', estoque: 'Sim', descricao: '' })}>Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
