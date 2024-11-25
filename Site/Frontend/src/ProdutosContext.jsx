// ProdutosContext.js
import React, { createContext, useState } from 'react';

export const ProdutosContext = createContext();

export function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([
    { id: 1, nome: 'Pizza Margherita', descricao: 'Tomate, mussarela e manjericão', categoria: 'Pizza', preco: '37.50', estoque: 'Sim', quantidade:'', descricaoPersonalizada: ''},
    { id: 2, nome: 'Pizza Calabresa', descricao: 'Calabresa, cebola e azeitonas', categoria: 'Pizza', preco: '37.50', estoque: 'Não', quantidade:'', descricaoPersonalizada: ''},
    { id: 3, nome: 'Refrigerante', descricao: 'Lata de refrigerante', categoria: 'Bebida', preco: '10.00', estoque: 'Sim', quantidade:'', descricaoPersonalizada: ''},
    { id: 4, nome: 'Suco de Laranja', descricao: 'Suco natural de laranja', categoria: 'Bebida', preco: '7.50', estoque: 'Sim', quantidade:'', descricaoPersonalizada: ''},
    // Adicione mais produtos conforme necessário
  ]);
  
  const [produtoEdicao, setProdutoEdicao] = useState(null);

  const adicionarProduto = (produto) => {
    setProdutos([...produtos, produto]);
  };

  const carregarProdutoParaEdicao = (id) => {
    const produto = produtos.find((p) => p.id === id);
    setProdutoEdicao(produto);
  };

  const atualizarProduto = (produtoEditado) => {
    setProdutos(produtos.map((p) => (p.id === produtoEditado.id ? produtoEditado : p)));
    setProdutoEdicao(null); // Limpa o estado após edição
  };
  
  const deletarProduto = (produtoId) => {
    setProdutos(produtos.filter(produto => produto.id !== produtoId));
  };

  return (
    <ProdutosContext.Provider value={{ produtos, adicionarProduto, carregarProdutoParaEdicao, atualizarProduto, produtoEdicao, deletarProduto }}>
      {children}
    </ProdutosContext.Provider>
  );
}
