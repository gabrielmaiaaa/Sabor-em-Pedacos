import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import CreateUser from './Componentes/Auth/CreateUser.jsx'
import LoginUser from './Componentes/Auth/LoginUser.jsx'
import Configuracao from './Componentes/Home/Configuracao.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/cadastro',
    element: <CreateUser />
  },
  {
    path: '/login',
    element: <LoginUser />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={routes}/>
)
