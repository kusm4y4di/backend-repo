// routes/userRoutes.ts

import express, { Router } from 'express';
import { fetchUserData,  } from '../controller/api.ts'; // Sesuaikan dengan logika yang diperlukan
import authMiddleware from '../middleware/authMiddleware';

const router: Router = express.Router();

// Endpoint untuk mengambil data user
router.get('/user/:userId', authMiddleware, fetchUserData);

// Endpoint untuk mengupdate data user
router.put('/user/:userId', authMiddleware, );

export default router;
