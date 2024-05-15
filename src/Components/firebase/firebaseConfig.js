// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2GcTkhE5IBXXDIISlRjTbSaU5W3SbKrA",
  authDomain: "art-and-craft-client-project.firebaseapp.com",
  projectId: "art-and-craft-client-project",
  storageBucket: "art-and-craft-client-project.appspot.com",
  messagingSenderId: "924020184624",
  appId: "1:924020184624:web:8b4e6667fe92242805fff5",
  measurementId: "G-44YZH04KS9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;