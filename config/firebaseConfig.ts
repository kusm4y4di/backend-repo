import * as admin from 'firebase-admin';
import * as serviceAccount from './serviceAccountKey.json'; 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  databaseURL: 'https://backend-repo-54387-default-rtdb.asia-southeast1.firebasedatabase.app/' // Ganti dengan URL database Firebase Anda
  // databaseURL adalah opsional tergantung pada penggunaan Anda
});

export default admin;
