import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HistoricoContext } from "../../HistoricoContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/Pedido/Historico.css";

export default function Historico() {
  const { historico, limparHistorico } = useContext(HistoricoContext);

  return (
    <div className="historico-container">
      <header className="historico-header">
        <Link to="/" className="btn-voltar">
          &#8592;
        </Link>
        <h1>Histórico de Pedidos</h1>
      </header>
      <div className="historico-content">
        {historico.length === 0 ? (
          <p>Você ainda não fez nenhum pedido.</p>
        ) : (
          historico.map((pedido) => (
            <div key={pedido.id} className="pedido-card">
              <p>
                <strong>ID do Pedido:</strong> {pedido.id}
              </p>
              <p>
                <strong>Data:</strong> {pedido.data}
              </p>
              <p>
                <strong>Produtos:</strong>
              </p>
              <ul className="produtos-lista">
                {pedido.produtos.map((produto, index) => (
                  <li key={index}>
                    {produto.quantidade} x {produto.nome}
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
      </div>
      <button className="btn-apagar" onClick={() => limparHistorico()}>Apagar</button>
    </div>
  );
}
