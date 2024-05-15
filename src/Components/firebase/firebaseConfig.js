// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB3FjiVsgVcBxoI9qNX75Ggydq9mGYWsFI',
  authDomain: 'job-marketplace-b2301.firebaseapp.com',
  projectId: 'job-marketplace-b2301',
  storageBucket: 'job-marketplace-b2301.appspot.com',
  messagingSenderId: '7014191575',
  appId: '1:7014191575:web:c65152693dd230bca87b92',
  measurementId: 'G-9TKP6K3GJJ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;