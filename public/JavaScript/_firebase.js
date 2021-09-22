// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-E4fci9q2u_yBFGa4giC2snjwuWNiTcE",
  authDomain: "portfolio-51f67.firebaseapp.com",
  projectId: "portfolio-51f67",
  storageBucket: "portfolio-51f67.appspot.com",
  messagingSenderId: "1009455212283",
  appId: "1:1009455212283:web:7efde8d1f584c33231325e",
  measurementId: "G-FTZNN6NBG2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

// function writeUserData() {
//   // const db = getDatabase();
//   set(ref(database, "users/"), {
//     username: "name",
//     email: "email",
//     profile_picture: "imageUrl"
//   });
// }
