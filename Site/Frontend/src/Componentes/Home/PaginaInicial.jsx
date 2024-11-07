import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home/PaginaInicial.css';

export default function PaginaInicial() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="App">
      {/* Barra de navegação */}
      <nav className="navbar">
        <button className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? '✖' : '☰'} {/* Alterna entre "☰" e "✖" */}
        </button>
        <Link to='/produtos' className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Produtos</Link>
        <Link to='/cardapio' className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Cardápio</Link>
        <Link to='/minhascompras' className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Minhas Compras</Link>
        <input type="text" placeholder="Buscar" className={`search-bar`} />
      </nav>

      {/* Menu lateral */}
      {isMenuOpen && (
        <div className="side-menu">
          <ul>
            <li>
              <Link to='/produtos'>Produtos</Link>
            </li>
            <li>
              <Link to='/cardapio'>Cardápio</Link>
            </li>
            <li>
              <Link to='/minhascompras'>Minhas Compras</Link>
            </li>
            <li>
              <Link to='/meupedido'>Meu pedido</Link>
            </li>
            <li>
              <Link to='/informacoes'>Minhas Informações</Link>
            </li>
            <li>
              <Link to='/relatorio'>Gerar Relatório</Link>
            </li>
            <li>
              <Link to='/adicionarProdutos'>Adicionar Produto</Link>
            </li>
          </ul>
          <div className="contact-info">
            <p>Entre em contato</p>
            <p>Ligue para 38999106743</p>
            <p>ou mande email para</p>
            <p>gabrielmaia6743@gmail.com</p>
          </div>
        </div>
      )}

      {/* Overlay cinza quando o menu está aberto */}
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
       
      {/* Imagem do banner */}
      <div className="banner">
        <iframe src="https://www.canva.com/design/DAGVjXAO06U/pfMsfKOIUVdUveGvBy01WQ/view?embed">
        </iframe>
        <img src="Sabores (3).jpg" alt="Banner de Comida" />
      </div>

      {/* Conteúdo principal */}
      <main className="content">
        {/* Seção de pizzas */}
        <section className="menu-section">
          <h2>Pizzas</h2>
          <div className="menu-item">
            <div>
              <h3>Nome da pizza</h3>
              <p>Ingredientes da pizza (o que vem nela)</p>
            </div>
            <img src="pizza1.jpg" alt="Pizza" className="menu-image" />
          </div>
          <div className="menu-item">
            <div>
              <h3>Nome da pizza</h3>
              <p>Ingredientes da pizza (o que vem nela)</p>
            </div>
            <img src="pizza2.jpg" alt="Pizza" className="menu-image" />
          </div>
        </section>

        {/* Seção de bebidas */}
        <section className="menu-section">
          <h2>Bebidas</h2>
          <div className="menu-item">
            <div>
              <h3>Nome da bebida</h3>
              <p>Detalhes da bebida</p>
            </div>
            <img src="bebida1.jpg" alt="Bebida" className="menu-image" />
          </div>
          <div className="menu-item">
            <div>
              <h3>Nome da bebida</h3>
              <p>Detalhes da bebida</p>
            </div>
            <img src="bebida2.jpg" alt="Bebida" className="menu-image" />
          </div>
        </section>
      </main>
    </div>
    </>
  );
}
