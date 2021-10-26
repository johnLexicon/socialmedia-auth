import firebase from 'firebase';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDZGe4y5Bi0pi0_4lg1D0v2-HkiiCqtmIw',
  authDomain: 'socialmedia-auth-dfbcf.firebaseapp.com',
  projectId: 'socialmedia-auth-dfbcf',
  storageBucket: 'socialmedia-auth-dfbcf.appspot.com',
  messagingSenderId: '502735957413',
  appId: '1:502735957413:web:898bf47ce531cbd0b60c4c',
  measurementId: 'G-SJZDLXS84D',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export default firebase;
