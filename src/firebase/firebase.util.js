import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD4n9wOzcuauPydMAK0eaNUt-SkPG9a-m4",
    authDomain: "crown-db-484b5.firebaseapp.com",
    databaseURL: "https://crown-db-484b5.firebaseio.com",
    projectId: "crown-db-484b5",
    storageBucket: "crown-db-484b5.appspot.com",
    messagingSenderId: "862396253068",
    appId: "1:862396253068:web:ee84f9b77f8191ee778ca9",
    measurementId: "G-XNE6T3K5F0"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle =  () => auth.signInWithPopup(provider);

export default firebase;