// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD248U3jdXYifzte-EIOxbhKqTYb_0BwZ8",
  authDomain: "cardanti-b56c5.firebaseapp.com",
  projectId: "cardanti-b56c5",
  storageBucket: "cardanti-b56c5.appspot.com",
  messagingSenderId: "897071369894",
  appId: "1:897071369894:web:cdbb77194b430724596e67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);