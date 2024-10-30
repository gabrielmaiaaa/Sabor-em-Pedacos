const express = require(express); 
const cors = require(cors);

// Instância do servidor
const app = express();

// Liberar rota cors
app.use(cors());
// Função para extrair os dados do pacote IP
app.use(express.json())

// Importar rotas
const authRoutes = require('./routers/authRoutes');

// Rotas para o servidor
app.use('/auth', authRoutes);

// Servidor na escuta
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000");
})