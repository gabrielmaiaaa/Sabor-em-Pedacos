import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Produto/Produto.css';
import { Link } from 'react-router-dom';
import { ProdutosContext } from '../../ProdutosContext';

export default function Produtos() {
  const { produtos } = useContext(ProdutosContext);

  return (
    <div className="estoque-container">
      <header className="header bg-orange text-white p-3 d-flex align-items-center">
        <button className="back-button text-white me-2"><Link to="/">←</Link></button>
        <h1 className="mb-0">Estoque</h1>
      </header>

      <div className="container mt-4">
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>IDProduto</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Em estoque</th>
              <th>Descrição</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.preco}</td>
                <td>{produto.estoque}</td>
                <td>{produto.descricao}</td>
                <td>
                  <button className="btn btn-edit me-2">Editar</button>
                  <button className="btn btn-delete">Deletar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="d-flex justify-content-between mt-3">
          <button className="btn btn-dark btn-download">Baixar Dados CSV</button>
          <button className="btn btn-primary btn-add"><Link to="/adicionarProdutos">Adicionar Itens</Link></button>
        </div>
      </div>
    </div>
  );
}
