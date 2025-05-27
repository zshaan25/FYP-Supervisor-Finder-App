// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const db = getFirestore(app) = {
  apiKey: "AIzaSyDrlmpwu7sIxdsd9VRCgpOyLOriAF0v3yA",
  authDomain: "fyp-supervisors.firebaseapp.com",
  projectId: "fyp-supervisors",
  storageBucket: "fyp-supervisors.firebasestorage.app",
  messagingSenderId: "970386039630",
  appId: "1:970386039630:web:7291532e9e04ddb85c341f",
  measurementId: "G-KQVEB6XNNV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default db