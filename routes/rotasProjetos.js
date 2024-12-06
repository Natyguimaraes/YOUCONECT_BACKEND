import express from 'express';
import cors from 'cors';
import { getAllProjeto, getProjetoF, createProjeto, updateProjeto, deleteProjeto } from '../controllers/projControler.js';

const router = express.Router();

// Middleware
router.use(express.json({ limit: '10mb' }));
router.use(express.urlencoded({ limit: '10mb', extended: true }));

// Configuração de CORS
router.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));

// Rota para criar um novo projeto
router.post('/projeto', createProjeto);

// Rota para obter todos os projetos
router.get('/projeto', getAllProjeto);

// Rota para obter um projeto específico
router.get('/projeto/:id', getProjetoF);

// Rota para atualizar um projeto
router.put('/projeto/:id', updateProjeto);

// Rota para deletar um projeto
router.delete('/projeto/:id', deleteProjeto);

export default router;
