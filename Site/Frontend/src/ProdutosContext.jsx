// src/ProdutosContext.js
import React, { createContext, useState } from 'react';

export const ProdutosContext = createContext();

export function ProdutosProvider({ children }) {
  const [produtos, setProdutos] = useState([
    { id: '00145', nome: 'Pizza de presunto', categoria: 'Pizza', preco: 'R$35,00', estoque: 'Sim', descricao: 'Pizza simples com molho de tomate' },
    { id: '05436', nome: 'Coca-Cola', categoria: 'Bebida', preco: 'R$15,00', estoque: 'Não', descricao: 'Coca-Cola de 2 litros' },
  ]);

  const adicionarProduto = (novoProduto) => {
    setProdutos([...produtos, novoProduto]);
  };

  return (
    <ProdutosContext.Provider value={{ produtos, adicionarProduto }}>
      {children}
    </ProdutosContext.Provider>
  );
}
