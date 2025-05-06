// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjj99xXz-A6paZvPUowyaPIcN_oqLCHKQ",
  authDomain: "mapa-analivia-isadora.firebaseapp.com",
  projectId: "mapa-analivia-isadora",
  storageBucket: "mapa-analivia-isadora.firebasestorage.app",
  messagingSenderId: "10252018128",
  appId: "1:10252018128:web:a886d623c26653310759d5",
  measurementId: "G-ZGJC9X2PK0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);