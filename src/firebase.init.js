// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALai2-bk66tQLe3doUs53o1aDZ4ikRiac",
  authDomain: "al-haramain-perfumes-5bad9.firebaseapp.com",
  projectId: "al-haramain-perfumes-5bad9",
  storageBucket: "al-haramain-perfumes-5bad9.appspot.com",
  messagingSenderId: "151253704677",
  appId: "1:151253704677:web:5b6ad74cbe743a22ebd90c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;