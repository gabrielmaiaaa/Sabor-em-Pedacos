import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Produto/Produto.css';
import { Link } from 'react-router-dom';

export default function Produtos() {
  const produtos = [
    { id: '00145', nome: 'Pizza de presunto', categoria: 'Pizza', preco: 'R$35,00', estoque: 'Sim', descricao: 'Pizza simples com molho de tomate' },
    { id: '05436', nome: 'Coca-Cola', categoria: 'Bebida', preco: 'R$15,00', estoque: 'Não', descricao: 'Coca-Cola de 2 litros' },
  ];
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
          <button className="btn btn-primary btn-add">Adicionar Itens</button>
        </div>
      </div>
    </div>
  )
}
