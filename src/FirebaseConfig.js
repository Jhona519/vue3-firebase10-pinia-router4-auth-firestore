// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAHcRPO1L_24lnw5jXDG3ReW3Sn6EeqDAs",
  authDomain: "vue-3-2024-fde40.firebaseapp.com",
  projectId: "vue-3-2024-fde40",
  storageBucket: "vue-3-2024-fde40.appspot.com",
  messagingSenderId: "933294529397",
  appId: "1:933294529397:web:e650e060051450ae72513c"
};

initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};