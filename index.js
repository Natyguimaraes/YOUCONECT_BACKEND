import express from 'express';
import cors from 'cors';
import userRoutes from './routes/rotasUsers.js'; // Ajuste o caminho
import projetoRoutes from './routes/rotasProjetos.js'; // Ajuste o caminho

const app = express();

// Middleware global
app.use(express.json());
app.use(cors());

// Configuração de rotas
app.use('/api', userRoutes);      // Rotas de usuários acessíveis em "/api/usuarios"
app.use('/api', projetoRoutes);  // Rotas de projetos acessíveis em "/api/projeto"

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando com sucesso na porta ${PORT}`);
});
