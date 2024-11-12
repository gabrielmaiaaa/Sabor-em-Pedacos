// src/UsuarioContext.js

import React, { createContext, useState } from 'react';

// Criação do contexto
export const UsuarioContext = createContext();

// Provedor do contexto
export const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  // Função para adicionar um novo usuário
  const adicionarUsuario = (novoUsuario) => {
    setUsuarios([...usuarios, novoUsuario]);
  };

  // Função para atualizar um usuário existente
  const atualizarUsuario = (id, usuarioAtualizado) => {
    setUsuarios(usuarios.map((usuario) => 
      usuario.id === id ? { ...usuario, ...usuarioAtualizado } : usuario
    ));
  };

  // Função para deletar um usuário
  const deletarUsuario = (id) => {
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
  };

  return (
    <UsuarioContext.Provider value={{ usuarios, adicionarUsuario, atualizarUsuario, deletarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
};
