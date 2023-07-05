import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAeMyfCKoCCLcHE0CunL9e2JxqnhHLv49E",
  authDomain: "clone-85620.firebaseapp.com",
  projectId: "clone-85620",
  storageBucket: "clone-85620.appspot.com",
  messagingSenderId: "848794341370",
  appId: "1:848794341370:web:1e256d419ceefbe5745e43",
  measurementId: "G-24Z94H3JQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};

// Initialize Firebase Authentication and get a reference to the service
// const auth = getAuth(app);
