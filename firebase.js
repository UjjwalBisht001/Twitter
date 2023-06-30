// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitter-30a85.firebaseapp.com",
  projectId: "twitter-30a85",
  storageBucket: "twitter-30a85.appspot.com",
  messagingSenderId: "871389668705",
  appId: "1:871389668705:web:c1701cc27a3e6930ea9120",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage();
export {app, db, storage};
