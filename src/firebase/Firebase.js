// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB0bcCaxGZEruw8TX24hcAHg0wAesVKOo4",
    authDomain: "inv78-33c2d.firebaseapp.com",
    databaseURL: "https://inv78-33c2d-default-rtdb.firebaseio.com",
    projectId: "inv78-33c2d",
    storageBucket: "inv78-33c2d.appspot.com",
    messagingSenderId: "888268994871",
    appId: "1:888268994871:web:8ff4976ae15615271742b2",
    measurementId: "G-NXBLSSZ9B0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;