


import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6DxN7OWnEW10Hbyo6xj0GY9xXbb7hUKc",
  authDomain: "study-group-a2964.firebaseapp.com",
  projectId: "study-group-a2964",
  storageBucket: "study-group-a2964.appspot.com",
  messagingSenderId: "17102274642",
  appId: "1:17102274642:web:0abb7ed6e6920c3a70df8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
