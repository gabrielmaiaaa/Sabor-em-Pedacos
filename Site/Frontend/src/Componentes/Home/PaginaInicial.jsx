import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/Home/PaginaInicial.css';

export default function PaginaInicial() {
  return (
    <>
      <div className="App">
      {/* Barra de navegação */}
      <nav className="navbar">
        <button className="menu-button">☰</button>
        <a href="#products">Produtos</a>
        <a href="#menu">Cardápio</a>
        <a href="#cart">Minhas Compras</a>
        <input type="text" placeholder="Buscar" className="search-bar" />
      </nav>

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
