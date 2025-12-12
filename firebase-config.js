// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
