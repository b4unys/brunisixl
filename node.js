// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBPBqhYjGOZyCKg8egrSRU68pRoRk1oPU",
  authDomain: "brunysixls.firebaseapp.com",
  projectId: "brunysixls",
  storageBucket: "brunysixls.appspot.com",
  messagingSenderId: "100025880746",
  appId: "1:100025880746:web:ca00d192591907db0b40d3",
  measurementId: "G-R471DQYZWH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);