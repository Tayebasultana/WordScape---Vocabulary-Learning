// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvHhgcKsdh_k7ZLyUSDmIp4rX_ppvsTxg",
  authDomain: "vocabulary-learning-961b0.firebaseapp.com",
  projectId: "vocabulary-learning-961b0",
  storageBucket: "vocabulary-learning-961b0.firebasestorage.app",
  messagingSenderId: "174704809609",
  appId: "1:174704809609:web:c0d9a853b834b69db65858"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth ;