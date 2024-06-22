// core/app.ts

import express from 'express';
import userRoutes from '../routes/userRoutes'; // Sesuaikan dengan lokasi file routes

const app = express();

// Middleware untuk memproses body JSON dari permintaan
app.use(express.json());

// Menggunakan routes dari userRoutes
app.use('/api', userRoutes);

export default app;
