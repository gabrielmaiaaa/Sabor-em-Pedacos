// src/App.js
import './App.css';
import PaginaInicial from './Componentes/Home/PaginaInicial';
import { ProdutosProvider } from './ProdutosContext';

function App() {
  return (
    <ProdutosProvider>
      <PaginaInicial />
    </ProdutosProvider>
  );
}

export default App;
