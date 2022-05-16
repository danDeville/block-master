// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkJDxHZrBzdgJACVkMyTT_6YkGSmwzFAo",
  authDomain: "block-master-682ba.firebaseapp.com",
  projectId: "block-master-682ba",
  storageBucket: "block-master-682ba.appspot.com",
  messagingSenderId: "74054925136",
  appId: "1:74054925136:web:82724ace89f390a24d8a55"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const facebook = new FacebookAuthProvider()
const google = new GoogleAuthProvider()
const DB = getFirestore()

export {
  app,
  facebook,
  google,
  DB
}