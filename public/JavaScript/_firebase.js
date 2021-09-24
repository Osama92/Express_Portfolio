import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = initializeApp({
//   apiKey: "AIzaSyBkfJ968njQwfQ9ezSSHNMKOhgSX8emUeQ",
//   authDomain: "portfolio-973ed.firebaseapp.com",
//   projectId: "portfolio-973ed",
//   storageBucket: "portfolio-973ed.appspot.com",
//   messagingSenderId: "526933837059",
//   appId: "1:526933837059:web:3845240d7ce7f4f93f9536",
//   measurementId: "G-PXD1C7DH9F"
// });

// const db = getDatabase(firebaseConfig);

var config = {
  apiKey: "AIzaSyBkfJ968njQwfQ9ezSSHNMKOhgSX8emUeQ",
  authDomain: "portfolio-973ed.firebaseapp.com",
  databaseURL: "https://portfolio-973ed-default-rtdb.firebaseio.com/",
  storageBucket: "portfolio-973ed.appspot.com"
};
initializeApp(config);

// Get a reference to the database service
const db = getDatabase();

// function writeUserData(userId, name, email, imageUrl) {
//   set(ref(db, "users/" + userId), {
//     username: name,
//     email: email,
//     profile_picture: imageUrl
//   });
// }

// writeUserData("Dayo", "Dayo", "dayo@gmail.com", "hf.png");

console.log(getDatabase);
