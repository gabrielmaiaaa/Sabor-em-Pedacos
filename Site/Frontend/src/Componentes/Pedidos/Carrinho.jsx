import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CarrinhoContext } from "../../CarrinhoContext";
import { HistoricoContext } from "../../HistoricoContext"; // Importar o contexto do histórico
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Pedido/Carrinho.css";

export default function Carrinho() {
  const {
    carrinho,
    removerDoCarrinho,
    atualizarProdutoCarrinho,
    atualizarDescricaoProduto,
    limparCarrinho,
  } = useContext(CarrinhoContext);

  const { adicionarPedidoAoHistorico } = useContext(HistoricoContext); // Usar função do histórico

  const [descricao, setDescricao] = useState("");
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const abrirModal = (produto) => {
    setProdutoSelecionado(produto);
    setDescricao(produto.descricaoPersonalizada || "");
  };

  const salvarDescricao = () => {
    atualizarDescricaoProduto(produtoSelecionado.id, descricao); // Usar o novo método
    setProdutoSelecionado(null);
    setDescricao("");
  };

  const handleConfirmarPedido = () => {
    if (carrinho.length === 0) {
      alert("Seu carrinho está vazio.");
      return;
    }

    // Criar um objeto de pedido para salvar no histórico
    const novoPedido = {
      id: new Date().getTime(), // Gera um ID único com base no timestamp
      data: new Date().toLocaleString(), // Data e hora do pedido
      produtos: [...carrinho], // Clonar os itens do carrinho
    };
    console.log(novoPedido);
    

    adicionarPedidoAoHistorico(novoPedido); // Salvar no histórico
    limparCarrinho(); // Limpar o carrinho
  };

  return (
    <div className="carrinho-container">
      <header className="carrinho-header">
        <Link to="/" className="btn-voltar">
          &#8592;
        </Link>
        <h1>Seu Carrinho</h1>
      </header>

      <div className="carrinho-content">
        {carrinho.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <>
            <ul className="carrinho-lista">
              {carrinho.map((produto) => (
                <li key={produto.id} className="carrinho-item">
                  <div className="carrinho-produto">
                    <p>
                      {produto.quantidade} x {produto.nome}
                    </p>
                    <p className="produto-detalhes">{produto.detalhes}</p>
                    <p>
                      <strong>Descrição do Cliente:</strong>{" "}
                      {produto.descricaoPersonalizada || "Nenhuma descrição"}
                    </p>
                  </div>
                  <div className="carrinho-acoes">
                    <button
                      className="btn-editar"
                      onClick={() => abrirModal(produto)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn-deletar"
                      onClick={() => removerDoCarrinho(produto.id)}
                    >
                      Deletar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="carrinho-actions">
              <button className="btn-limpar" onClick={limparCarrinho}>
                Cancelar
              </button>
              <button className="btn-confirmar" onClick={handleConfirmarPedido}>
                Confirmar Pedido
              </button>
            </div>
          </>
        )}
      </div>

      {produtoSelecionado && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Adicionar Descrição ao Produto</h3>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Digite uma descrição personalizada"
            />
            <div className="modal-acoes">
              <button className="btn-editar" onClick={salvarDescricao}>
                Salvar
              </button>
              <button
                className="btn-deletar"
                onClick={() => setProdutoSelecionado(null)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
