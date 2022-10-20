// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_hXhy-aqa76npN9kGysIPYcDCbalfhJ4",
  authDomain: "ecommercereact--oliveradiego.firebaseapp.com",
  projectId: "ecommercereact--oliveradiego",
  storageBucket: "ecommercereact--oliveradiego.appspot.com",
  messagingSenderId: "195210010268",
  appId: "1:195210010268:web:374288ee6305e614d91759"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);