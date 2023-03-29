import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBp_z7UBsgtV6kqet26sOJV-qvFUGPp51g",
    authDomain: "paymento-72b1c.firebaseapp.com",
    projectId: "paymento-72b1c",
    storageBucket: "paymento-72b1c.appspot.com",
    messagingSenderId: "1079450988056",
    appId: "1:1079450988056:web:6ecb03f5e3d7633a7c1d6d",
    measurementId: "G-L8PSHBBKY1"
};
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP)
