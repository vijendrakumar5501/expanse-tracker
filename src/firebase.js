// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb2SGCApRehv32ccev_tC1nFDwp3M3q1s",
  authDomain: "tracker-e7433.firebaseapp.com",
  projectId: "tracker-e7433",
  storageBucket: "tracker-e7433.appspot.com",
  messagingSenderId: "1077704565536",
  appId: "1:1077704565536:web:bb14c8a8848a56b4e46d45",
  measurementId: "G-J2NQZWRXFG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {db,auth,provider,doc,setDoc};
