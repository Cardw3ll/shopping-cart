// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { dblClick } from "@testing-library/user-event/dist/click";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiCXBB8eulsR3z2IenzuDW2mN9OXjjB2o",
  authDomain: "yessir-6aaba.firebaseapp.com",
  projectId: "yessir-6aaba",
  storageBucket: "yessir-6aaba.appspot.com",
  messagingSenderId: "178083525770",
  appId: "1:178083525770:web:522b73d6ad203d98992973",
  measurementId: "G-PS8L7TKYQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
export default db;