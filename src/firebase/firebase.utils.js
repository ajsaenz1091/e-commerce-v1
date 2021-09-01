// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config  =  {
    apiKey: "AIzaSyAXqKhUkkr5lT6tH3bWK8XcxjS41BbyVrM",
    authDomain: "ecommerce-db-e8d90.firebaseapp.com",
    databaseURL: "https://ecommerce-db-e8d90.firebaseio.com",
    projectId: "ecommerce-db-e8d90",
    storageBucket: "ecommerce-db-e8d90.appspot.com",
    messagingSenderId: "1098318666043",
    appId: "1:1098318666043:web:ac2e3270ef6aafbd2fbf1e",
    measurementId: "G-HG0B6E2L7M"
  }

firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;