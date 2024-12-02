import React, { useContext, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { HistoricoContext } from "../../HistoricoContext";
import { Link } from "react-router-dom";
import "../CSS/Home/Relatorio.css";

// Registrar os elementos do Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

export default function RealizarRelatorio() {
  const { historico } = useContext(HistoricoContext);
  const [dadosGerados, setDadosGerados] = useState(false);
  const [graficoVendasDados, setGraficoVendasDados] = useState({});
  const [graficoLucroDados, setGraficoLucroDados] = useState({});
  const [descricao, setDescricao] = useState("");
  const [lucroDescricao, setLucroDescricao] = useState("");
  const [selecionarVendas, setSelecionarVendas] = useState(false);
  const [selecionarLucro, setSelecionarLucro] = useState(false);

  const gerarRelatorio = () => {
    if (!selecionarVendas && !selecionarLucro) {
      alert("Selecione pelo menos um tipo de relatório para gerar.");
      return;
    }

    if (historico.length === 0) {
      alert("Nenhum dado disponível para gerar o relatório.");
      return;
    }

    // Processar os dados do histórico para obter os produtos e suas quantidades e lucros
    const produtosQuantidades = {};
    const produtosLucro = {};

    historico.forEach((pedido) => {
      pedido.produtos.forEach((produto) => {
        if (produtosQuantidades[produto.nome]) {
          produtosQuantidades[produto.nome] += produto.quantidade;
          produtosLucro[produto.nome] += produto.quantidade * produto.preco;
        } else {
          produtosQuantidades[produto.nome] = produto.quantidade;
          produtosLucro[produto.nome] = produto.quantidade * produto.preco;
        }
      });
    });

    // Preparar os gráficos e descrições somente se o checkbox correspondente estiver selecionado
    if (selecionarVendas) {
      const labels = Object.keys(produtosQuantidades);
      const dataVendas = Object.values(produtosQuantidades);

      setGraficoVendasDados({
        labels,
        datasets: [
          {
            label: "Quantidade Vendida",
            data: dataVendas,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      });

      const textoDescricao = labels
        .map((label, index) => {
          return `O ${label} teve uma quantidade de ${dataVendas[index]} compras.`;
        })
        .join(" ");

      setDescricao(textoDescricao);
    }

    if (selecionarLucro) {
      const labels = Object.keys(produtosLucro);
      const dataLucro = Object.values(produtosLucro);

      setGraficoLucroDados({
        labels,
        datasets: [
          {
            label: "Lucro (R$)",
            data: dataLucro,
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
          },
        ],
      });

      const lucroTotal = Object.values(produtosLucro).reduce(
        (acc, curr) => acc + curr,
        0
      );

      const textoLucro = labels
        .map((label) => {
          return `O ${label} gerou um total de R$${produtosLucro[label].toFixed(
            2
          )}.`;
        })
        .join(" ");
      const textoLucroFinal = `${textoLucro} O lucro total foi de R$${lucroTotal.toFixed(
        2
      )}.`;

      setLucroDescricao(textoLucroFinal);
    }

    setDadosGerados(true);
  };

  return (
    <div className="relatorio-container">
      <header className="relatorio-header">
        <Link to="/" className="btn-voltar">
          &#8592;
        </Link>
        <h1>Relatório</h1>
      </header>
      <div className="relatorio-content">
        <h2>Quais relatórios você quer gerar?</h2>
        <div className="checkbox-container">
          <label>
            <input
              type="checkbox"
              checked={selecionarVendas}
              onChange={() => setSelecionarVendas(!selecionarVendas)}
            />
            Vendas
          </label>
          <label>
            <input
              type="checkbox"
              checked={selecionarLucro}
              onChange={() => setSelecionarLucro(!selecionarLucro)}
            />
            Lucro
          </label>
        </div>
        <button onClick={gerarRelatorio} className="btn-gerar">
          Gerar Relatório
        </button>
        {dadosGerados && (
          <div className="grafico-container">
            {selecionarVendas && (
              <>
                <h3>Vendas</h3>
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                  <Pie data={graficoVendasDados} />
                </div>
                <p className="grafico-descricao">{descricao}</p>
              </>
            )}
            {selecionarLucro && (
              <>
                <h3>Lucro</h3>
                <div style={{ maxWidth: "400px", margin: "0 auto" }}>
                  <Bar data={graficoLucroDados} />
                </div>
                <p className="grafico-descricao">{lucroDescricao}</p>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
