// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArNFR2gIO4or0leQU6vFIkmP3kIU4lfX8",
  authDomain: "zen-tour.firebaseapp.com",
  projectId: "zen-tour",
  storageBucket: "zen-tour.firebasestorage.app",
  messagingSenderId: "156465763685",
  appId: "1:156465763685:web:ab2644a023968be8387d8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
export const auth = getAuth(app)