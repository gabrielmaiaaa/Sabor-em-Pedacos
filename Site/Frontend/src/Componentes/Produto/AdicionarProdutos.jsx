import React, { useState, useContext, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Produto/AdicionarProdutos.css';
import { Link, useNavigate } from 'react-router-dom';
import { ProdutosContext } from '../../ProdutosContext';

export default function AdicionarProdutos() {
  const { adicionarProduto, atualizarProduto, produtoEdicao } = useContext(ProdutosContext);
  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    id: '',
    nome: '',
    categoria: 'Pizza',
    preco: '',
    estoque: 'Sim',
    descricao: '',
  });

  const [erro, setErro] = useState(''); // Estado para mensagem de erro

  useEffect(() => {
    if (produtoEdicao) {
      setProduto(produtoEdicao); // Carrega o produto no formulário para edição
    }
  }, [produtoEdicao]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = () => {
    // Verifica se os campos obrigatórios estão preenchidos
    if (!produto.id || !produto.nome || !produto.preco || !produto.descricao) {
      setErro('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (produtoEdicao) {
      atualizarProduto(produto); // Atualiza o produto existente
    } else {
      adicionarProduto(produto); // Adiciona um novo produto
    }

    setProduto({
      id: '',
      nome: '',
      categoria: 'Pizza',
      preco: '',
      estoque: 'Sim',
      descricao: '',
    });
    setErro(''); // Limpa a mensagem de erro
    navigate('/produtos'); // Redireciona para a página de produtos
  };

  return (
    <div className="adicionar-produto-container">
      <header className="header">
        <button className="back-button"><Link to="/produtos">←</Link></button>
        <h1>{produtoEdicao ? 'Editar Produto' : 'Adicionar Produto'}</h1>
      </header>

      <div className="form-container">
        <div className="form-content">
          <form>
            <div>
              <label className="form-label">IDProduto</label>
              <input type="number" name="id" value={produto.id} onChange={handleChange} className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Nome</label>
              <input type="text" name="nome" value={produto.nome} onChange={handleChange} className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Categoria</label>
              <select name="categoria" value={produto.categoria} onChange={handleChange} className="form-control rounded-input">
                <option>Pizza</option>
                <option>Bebida</option>
                <option>Outro</option>
              </select>
            </div>
            <div>
              <label className="form-label">Preço</label>
              <input type="number" name="preco" value={produto.preco} onChange={handleChange} className="form-control rounded-input" />
            </div>
            <div>
              <label className="form-label">Descrição</label>
              <textarea name="descricao" value={produto.descricao} onChange={handleChange} className="form-control rounded-input" rows="3"></textarea>
            </div>
            {erro && <p className="text-danger">{erro}</p>} {/* Exibe mensagem de erro */}
            <div className="button-container">
              <button type="button" onClick={handleSubmit} className="btn btn-add">{produtoEdicao ? 'Salvar Alterações' : 'Adicionar'}</button>
              <button type="reset" className="btn btn-clear" onClick={() => setProduto({ ...produto, nome: '', categoria: 'Pizza', preco: '', estoque: 'Sim', descricao: '' })}>Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
