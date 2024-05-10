// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjpuTTrYQEKCj-RzYWbr-pFWgfiMUz0C4",
  authDomain: "restaurant-90f61.firebaseapp.com",
  projectId: "restaurant-90f61",
  storageBucket: "restaurant-90f61.appspot.com",
  messagingSenderId: "380045539500",
  appId: "1:380045539500:web:8de23d2b5c599958dd0709"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
