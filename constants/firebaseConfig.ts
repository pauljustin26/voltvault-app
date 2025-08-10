// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs4csHgNdwGa_4dqwwNQrAwkWJwoe1f-U",
  authDomain: "voltvault-c1ba3.firebaseapp.com",
  projectId: "voltvault-c1ba3",
  storageBucket: "voltvault-c1ba3.firebasestorage.app",
  messagingSenderId: "990271563269",
  appId: "1:990271563269:web:c0cc05aaebfee2d72cde6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);