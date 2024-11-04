import React, { useState } from 'react'
import { Link } from 'react-router-dom';
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
        <a href="#products" className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Produtos</a>
        <a href="#menu" className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Cardápio</a>
        <a href="#cart" className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Minhas Compras</a>
        <input type="text" placeholder="Buscar" className={`search-bar`} />
      </nav>

      {/* Menu lateral */}
      {isMenuOpen && (
        <div className="side-menu">
          <ul>
            <li><a href="#products">Produtos</a></li>
            <li><a href="#menu">Cardápio</a></li>
            <li><a href="#cart">Minhas Compras</a></li>
            <li><a href="#order">Meu pedido</a></li>
            <li><a href="#info">Minhas Informações</a></li>
            <li><a href="#report">Gerar Relatório</a></li>
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
        <img src="banner-image.jpg" alt="Banner de Comida" />
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
