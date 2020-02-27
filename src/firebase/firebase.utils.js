import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDHhZ6Lpj_knYmeEvmPd_aPhe3aqVAe72I",
  authDomain: "my-project-1555374592728.firebaseapp.com",
  databaseURL: "https://my-project-1555374592728.firebaseio.com",
  projectId: "my-project-1555374592728",
  storageBucket: "my-project-1555374592728.appspot.com",
  messagingSenderId: "617655607340",
  appId: "1:617655607340:web:49b0bccca1488c28ccf189",
  measurementId: "G-LQWXGCR3GL"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
