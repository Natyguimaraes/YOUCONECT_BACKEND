import express from 'express';
import cors from 'cors';
import { 
    getAllUsuarios, 
    getUsuariosF, 
    createUsuario, 
    updateUsuario, 
    deleteUsuario, 
    loginUsuario 
} from '../controllers/userControler.js';

const router = express.Router();

// Middleware
router.use(express.json());
router.use(cors());

// Rotas
router.get('/usuarios', getAllUsuarios);
router.get('/usuarios/:id', getUsuariosF);
router.post('/usuarios', createUsuario);
router.put('/usuarios/:id', updateUsuario);
router.delete('/usuarios/:id', deleteUsuario);
router.post('/login', loginUsuario); // Rota de login

export default router;
