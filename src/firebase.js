import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBoD2AmGY628VEavVARLJwK6wG-_TB1Uh0",
  authDomain: "homunculus-ad003.firebaseapp.com",
  projectId: "homunculus-ad003",
  storageBucket: "homunculus-ad003.appspot.com",
  messagingSenderId: "169868337056",
  appId: "1:169868337056:web:d4935e100a4001a1b30ec5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };