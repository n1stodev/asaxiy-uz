import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth, EmailAuthProvider } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDBkgp_0p1I8vRVatM383Fx2yQxvU4KcTs",
    authDomain: "asaxiy-nurillo.firebaseapp.com",
    projectId: "asaxiy-nurillo",
    storageBucket: "asaxiy-nurillo.appspot.com",
    messagingSenderId: "937607767638",
    appId: "1:937607767638:web:63d19d01b5948eb80e7df7",
    measurementId: "G-L3RJFNXKF9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new EmailAuthProvider()