//import firebase from "firebase";
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyB5D_qn5SmY6PmdJ6WXmfasWqeJ9K_NXNk",
  authDomain: "profile-508b9.firebaseapp.com",
  projectId: "profile-508b9",
  storageBucket: "profile-508b9.appspot.com",
  messagingSenderId: "1004175829594",
  appId: "1:1004175829594:web:948c6ef318049bbfc98663"
  };


 const app =initializeApp(firebaseConfig);
  
  export const auth = getAuth(app);
  export const storage = getStorage(app);