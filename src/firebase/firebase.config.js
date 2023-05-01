// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXLd-eO-SKdAr270ns-dddU4gs5b5nbFw",
  authDomain: "ema-jhon-with-firebase-a-81a54.firebaseapp.com",
  projectId: "ema-jhon-with-firebase-a-81a54",
  storageBucket: "ema-jhon-with-firebase-a-81a54.appspot.com",
  messagingSenderId: "495050282447",
  appId: "1:495050282447:web:6e3bb34db4037f5180eeba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app