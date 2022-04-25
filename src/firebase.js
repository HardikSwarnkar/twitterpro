import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDcaHNe27NIV5emUxIykfqzXT8b28tRAu4',
  authDomain: 'twitter-clone-7670f.firebaseapp.com',
  projectId: 'twitter-clone-7670f',
  storageBucket: 'twitter-clone-7670f.appspot.com',
  messagingSenderId: '577051915782',
  appId: '1:577051915782:web:a08d006daebfafcc98b587',
  measurementId: 'G-7KR1ZDQZ4D',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
