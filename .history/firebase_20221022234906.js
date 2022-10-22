import { initializeApp,getApp,getApps } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"




const firebaseConfig = {
  apiKey: "AIzaSyCw4qJuIIMj0wW94oe-lz7T3_si-a7NRnk",
  authDomain: "instagram-website-01.firebaseapp.com",
  projectId: "instagram-website-01",
  storageBucket: "instagram-website-01.appspot.com",
  messagingSenderId: "357882720376",
  appId: "1:357882720376:web:0dc91fe73e47b53262fd8d",
  measurementId: "G-0X96N2BZP7",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp;
const db = getFirestore()
const storage = getStorage()

export {app,db,storage};