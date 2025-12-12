import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js";

// PASTE YOUR NEW LAXCHAMP KEYS HERE
const firebaseConfig = {
  apiKey: "AIzaSyB421IaC3NQIDnYvNA7oVYgvfwYG-8aT4o",
  authDomain: "tournament-champ.firebaseapp.com",
  databaseURL: "https://tournament-champ-default-rtdb.firebaseio.com",
  projectId: "tournament-champ",
  storageBucket: "tournament-champ.firebasestorage.app",
  messagingSenderId: "65472067494",
  appId: "1:65472067494:web:ba7298e7378e7604354167",
  measurementId: "G-2C3LWDC2X3"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
