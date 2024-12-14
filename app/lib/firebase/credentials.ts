// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3uJZ0ZTb6NueCM2bPb-c_HewZEM-o1w8",
  authDomain: "miles-tracker-app.firebaseapp.com",
  projectId: "miles-tracker-app",
  storageBucket: "miles-tracker-app.firebasestorage.app",
  messagingSenderId: "250327190649",
  appId: "1:250327190649:web:97cfc73916098074ead8a8",
  measurementId: "G-PSZBP7B419"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);