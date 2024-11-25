import React, { createContext, useState } from "react";

export const HistoricoContext = createContext();

export const HistoricoProvider = ({ children }) => {
  const [historico, setHistorico] = useState([]);

  const adicionarPedidoAoHistorico = (pedido) => {
    setHistorico((prevHistorico) => [...prevHistorico, pedido]);
  };
  
  const limparHistorico = () => {
    setHistorico([]);
  };

  return (
    <HistoricoContext.Provider value={{ historico, adicionarPedidoAoHistorico, limparHistorico }}>
      {children}
    </HistoricoContext.Provider>
  );
};
