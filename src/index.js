import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";

// const root = ReactDOM.createRoot(document.getElementById('root'));

const firebaseConfig = {
    apiKey: "AIzaSyAAk2CWGq1pJcNLb3L6CsNTqrhU4ZvDAMU",
    authDomain: "cart-app-16180.firebaseapp.com",
    projectId: "cart-app-16180",
    storageBucket: "cart-app-16180.appspot.com",
    messagingSenderId: "599674376071",
    appId: "1:599674376071:web:4045e1962f4509e3be4d22"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

ReactDOM.render(<App/> , document.getElementById('root'));