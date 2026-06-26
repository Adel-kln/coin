// ============================================================
// CONFIGURATION FIREBASE — À REMPLIR avec tes propres clés
// ============================================================
// 1. Va sur https://console.firebase.google.com
// 2. Crée un projet (gratuit)
// 3. Dans "Paramètres du projet" > section "Vos applications" > icône Web "</>"
// 4. Copie l'objet de config qu'il te donne et remplace les valeurs ci-dessous
// 5. Active Realtime Database : menu "Build" > "Realtime Database" > "Créer une base de données"
//    -> choisis "Mode test" pour commencer (tu pourras sécuriser plus tard)
//
// Ce fichier exporte uniquement l'objet de config brut. C'est index.html et
// historique.html qui appellent initializeApp() et getDatabase() eux-mêmes,
// donc ne fais pas cette initialisation ici pour éviter les doublons.
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDnPrsGCoMwd2YZvnSwKGKX_fmYVa0UUnE",
  authDomain: "pile-ou-face-dz-at.firebaseapp.com",
  databaseURL: "https://pile-ou-face-dz-at-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "pile-ou-face-dz-at",
  storageBucket: "pile-ou-face-dz-at.firebasestorage.app",
  messagingSenderId: "926786951348",
  appId: "1:926786951348:web:9a3e787f4f6084b53adfe1"
};