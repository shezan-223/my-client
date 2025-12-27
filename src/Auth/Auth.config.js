// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj3GCf_bw_LtQgPXZMlLUtew5nvyj5SwQ",
  authDomain: "home-nest-22463.firebaseapp.com",
  projectId: "home-nest-22463",
  storageBucket: "home-nest-22463.firebasestorage.app",
  messagingSenderId: "10271104126",
  appId: "1:10271104126:web:1d3a689b74d2ef7c8e0c2f"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)