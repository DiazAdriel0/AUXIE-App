// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = import.meta.env.VITE_NEXT_PUBLIC_FIREBASE_CONFIG
// Your web app's Firebase configuration .
console.log(firebaseConfig)
// Initialize Firebase
const app = initializeApp(JSON.parse(firebaseConfig))
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
