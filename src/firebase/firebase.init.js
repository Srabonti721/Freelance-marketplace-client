// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdutUfKZwpEp0SuGPyik378eROZCpHZf4",
  authDomain: "freelance-marketplace-460d4.firebaseapp.com",
  projectId: "freelance-marketplace-460d4",
  storageBucket: "freelance-marketplace-460d4.firebasestorage.app",
  messagingSenderId: "493892131885",
  appId: "1:493892131885:web:02d44af09709e73998eca4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);