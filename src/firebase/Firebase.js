// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyB8POf8CQDDnsBHssTY7pNiLVIt0P2k5kQ',
  authDomain: 'iluvureiko.firebaseapp.com',
  databaseURL:
    'https://iluvureiko-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'iluvureiko',
  storageBucket: 'iluvureiko.appspot.com',
  messagingSenderId: '887939602162',
  appId: '1:887939602162:web:cfc62f097a3e633056a26b',
  measurementId: 'G-KTJ0HCVPN7',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = getDatabase();
