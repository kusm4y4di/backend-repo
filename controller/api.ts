// controller/api.ts

import admin from '../config/firebaseConfig';

const firestore = admin.firestore();

// Contoh endpoint untuk mengambil data user dari Firestore
const fetchUserData = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userRef = firestore.collection('users').doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.json(doc.data());
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { fetchUserData };
