// middleware/authMiddleware.ts

import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebaseConfig'; // Sesuaikan dengan lokasi Firebase Admin SDK

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];

  try {
    if (!idToken) {
      throw new Error('Unauthorized');
    }

    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req['currentUser'] = decodedToken; // Menyimpan informasi pengguna yang telah diotentikasi di dalam request

    next();
  } catch (error) {
    console.error('Error verifying Firebase ID token:', error);
    res.status(403).json({ error: 'Unauthorized' });
  }
};

export default authMiddleware;
