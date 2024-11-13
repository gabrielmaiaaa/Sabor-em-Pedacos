// src/UsuarioContext.js

import React, { createContext, useState } from 'react';

// Criação do contexto
export const UsuarioContext = createContext();

// Provedor do contexto
export const UsuarioProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  // Função para adicionar um novo usuário
  const adicionarUsuario = (novoUsuario) => {
    setUsuarios([...usuarios, novoUsuario]);
  };

  // Função para atualizar um usuário existente
  const atualizarUsuarioLogado = (dadosAtualizados) => {
    if (usuarioLogado) {
      const usuariosAtualizados = usuarios.map((usuario) =>
        usuario.email === usuarioLogado.email ? { ...usuario, ...dadosAtualizados } : usuario
      );
      setUsuarios(usuariosAtualizados);
      setUsuarioLogado({ ...usuarioLogado, ...dadosAtualizados });
    }
  };

  const deletarUsuarioLogado = () => {
    if (usuarioLogado) {
      setUsuarios(usuarios.filter((usuario) => usuario.email !== usuarioLogado.email));
      setUsuarioLogado(null);
    }
  };

  const fazerLogin = (email, senha) => {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === senha
    );
    if (usuarioEncontrado) {
      setUsuarioLogado(usuarioEncontrado);
      return true;
    }
    return false;
  };

  return (
    <UsuarioContext.Provider value={{ usuarios, adicionarUsuario, atualizarUsuarioLogado, deletarUsuarioLogado, usuarioLogado, setUsuarioLogado, fazerLogin }}>
      {children}
    </UsuarioContext.Provider>
  );
};
