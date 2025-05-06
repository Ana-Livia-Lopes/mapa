import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth"; 

const firebaseConfig = {
  apiKey: "AIzaSyCjj99xXz-A6paZvPUowyaPIcN_oqLCHKQ",
  authDomain: "mapa-analivia-isadora.firebaseapp.com",
  projectId: "mapa-analivia-isadora",
  storageBucket: "mapa-analivia-isadora.firebasestorage.app",
  messagingSenderId: "10252018128",
  appId: "1:10252018128:web:a886d623c26653310759d5",
  measurementId: "G-ZGJC9X2PK0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, collection, getDocs, auth };
