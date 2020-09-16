import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDuEYZrat4plnmsInSihQQCUhQjSIvcPrY',
  authDomain: 'chat-app-vue-9c67b.firebaseapp.com',
  databaseURL: 'https://chat-app-vue-9c67b.firebaseio.com',
  projectId: 'chat-app-vue-9c67b',
  storageBucket: 'chat-app-vue-9c67b.appspot.com',
  messagingSenderId: '172957938106',
  appId: '1:172957938106:web:31c6ff23c8738071066d83',
  measurementId: 'G-7GF9P5JVL3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
export default db;
