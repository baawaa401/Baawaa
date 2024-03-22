// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJGr8pD47l5ajT9oygIPN2qcC-1nHH2Og",
    authDomain: "bawaa-401.firebaseapp.com",
    projectId: "bawaa-401",
    storageBucket: "bawaa-401.appspot.com",
    messagingSenderId: "976663489379",
    appId: "1:976663489379:web:4aa20d4a99afd607638156"
};
const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default function () { (<>Nothings here</>) }