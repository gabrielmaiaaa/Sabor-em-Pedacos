// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProdutosProvider } from './ProdutosContext';
import { UsuarioProvider } from './UsuarioContext.jsx'

import CreateUser from './Componentes/Auth/CreateUser.jsx';
import LoginUser from './Componentes/Auth/LoginUser.jsx';
import Configuracao from './Componentes/Home/Configuracao.jsx';
import RealizarRelatorio from './Componentes/Home/RealizarRelatorio.jsx';
import MinhasInformacoes from './Componentes/Home/MinhasInformacoes.jsx';
import MeuPedido from './Componentes/Pedidos/MeuPedido.jsx';
import MinhasCompras from './Componentes/Pedidos/MinhasCompras.jsx';
import Cardapio from './Componentes/Produto/Cardapio.jsx';
import Produtos from './Componentes/Produto/Produtos.jsx';
import AdicionarProdutos from './Componentes/Produto/AdicionarProdutos.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cadastro',
    element: <CreateUser />
  },
  {
    path: '/login',
    element: <LoginUser />
  },
  {
    path: '/configuracao',
    element: <Configuracao />
  },
  {
    path: '/relatorio',
    element: <RealizarRelatorio />
  },
  {
    path: '/informacoes',
    element: <MinhasInformacoes />
  },
  {
    path: '/meupedido',
    element: <MeuPedido />
  },
  {
    path: '/minhascompras',
    element: <MinhasCompras />
  },
  {
    path: '/cardapio',
    element: <Cardapio />
  },
  {
    path: '/produtos',
    element: <Produtos />
  },
  {
    path: '/adicionarProdutos',
    element: <AdicionarProdutos />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <UsuarioProvider>
    <ProdutosProvider>
      <RouterProvider router={router} />
    </ProdutosProvider>
  </UsuarioProvider>
);
