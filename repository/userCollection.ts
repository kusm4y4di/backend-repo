// repository/userCollection.ts

import admin from '../config/firebaseConfig'; // Sesuaikan dengan lokasi Firebase Admin SDK

const firestore = admin.firestore();

// Function untuk mengambil data pengguna berdasarkan ID
const getUserById = async (userId: string) => {
  const userRef = firestore.collection('users').doc(userId);
  const doc = await userRef.get();
  if (!doc.exists) {
    throw new Error('User not found');
  }
  return doc.data();
};

// Function untuk mengupdate data pengguna
const updateUserById = async (userId: string, newData: any) => {
  const userRef = firestore.collection('users').doc(userId);
  await userRef.update(newData);
};

export { getUserById, updateUserById };
