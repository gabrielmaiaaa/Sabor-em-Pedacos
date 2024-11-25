import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho((prevCarrinho) => [...prevCarrinho, produto]);
  };

  const removerDoCarrinho = (id) => {
    setCarrinho((prevCarrinho) => prevCarrinho.filter((produto) => produto.id !== id));
  };

  const atualizarProdutoCarrinho = (id, quantidade) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((produto) =>
        produto.id === id ? { ...produto, quantidade } : produto
      )
    );
  };

  const atualizarDescricaoProduto = (id, descricaoPersonalizada) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.map((produto) =>
        produto.id === id ? { ...produto, descricaoPersonalizada } : produto
      )
    );
  };
  

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, adicionarAoCarrinho, removerDoCarrinho, atualizarProdutoCarrinho, atualizarDescricaoProduto, limparCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
};
