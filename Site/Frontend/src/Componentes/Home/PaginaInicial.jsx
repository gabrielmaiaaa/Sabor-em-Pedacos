import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Home/PaginaInicial.css';
import { ProdutosContext } from '../../ProdutosContext';
import { CarrinhoContext } from '../../CarrinhoContext';

export default function PaginaInicial() {
  const { produtos } = useContext(ProdutosContext);
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Filtrar produtos pelo termo de busca
  const filteredProdutos = produtos.map((produto) => {
    if (produto.nome.toLowerCase().includes(searchTerm.toLowerCase())) {
      return produto;
    }
    return null; // Ignorar produtos que não correspondem ao termo de busca
  }).filter(Boolean); // Remove os valores `null` do array

  const handleAdicionarAoCarrinho = (produto) => {
    adicionarAoCarrinho({ ...produto, quantidade: 1 });
  };

  return (
    <>
      <div className="App">
        {/* Barra de navegação */}
        <nav className="navbar">
          <button className="menu-button" onClick={toggleMenu}>
            {isMenuOpen ? '✖' : '☰'}
          </button>
          <Link to='/produtos' className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Produtos</Link>
          <Link to='/historico' className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Histórico</Link>
          <Link to='/carrinho' className={`navbar-link ${isMenuOpen ? 'hidden' : ''}`}>Minhas Compras</Link>
          <input
            type="text"
            placeholder="Buscar"
            className="search-bar"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </nav>

        {/* Menu lateral */}
        {isMenuOpen && (
          <div className="side-menu">
            <ul>
              <li><Link to='/produtos'>Produtos</Link></li>
              <li><Link to='/historico'>Histórico</Link></li>
              <li><Link to='/carrinho'>Minhas Compras</Link></li>
              <li><Link to='/meupedido'>Meu pedido</Link></li>
              <li><Link to='/informacoes'>Minhas Informações</Link></li>
              <li><Link to='/relatorio'>Gerar Relatório</Link></li>
              <li><Link to="/cadastro">Cadastrar</Link></li>
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
          <iframe src="https://www.canva.com/design/DAGVjXAO06U/pfMsfKOIUVdUveGvBy01WQ/view?embed"></iframe>
          <img src="Sabores (3).jpg" alt="Banner de Comida" />
        </div>

        {/* Conteúdo principal */}
        <main className="content">
          <section className="menu-section">
            <h2>Produtos</h2>
            {filteredProdutos.map((produto) => (
              produto.categoria === 'Pizza' && (
              <div key={produto.id} className="menu-item">
                <div>
                  <h3>{produto.nome}</h3>
                  <p>{produto.descricao}</p>
                  <button className="btn-adicionar" onClick={() => handleAdicionarAoCarrinho(produto)}>
                    Adicionar ao Carrinho
                  </button>
                </div>
              </div>
              )
            ))}
          </section>

          {/* Seção de bebidas */}
          <section className="menu-section">
            <h2>Bebidas</h2>
            {filteredProdutos.map((produto) => (
              produto.categoria === 'Bebida' && (
                <div key={produto.id} className="menu-item">
                  <div>
                    <h3>{produto.nome}</h3>
                    <p>{produto.descricao}</p>
                    <button className="btn-adicionar" onClick={() => handleAdicionarAoCarrinho(produto)}>
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </div>
              )
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
