// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD519u7uj8aoz9BTzIOURXSEOwJDeI2C7A",
  authDomain: "proyecto-final-f306e.firebaseapp.com",
  projectId: "proyecto-final-f306e",
  storageBucket: "proyecto-final-f306e.firebasestorage.app",
  messagingSenderId: "445275225020",
  appId: "1:445275225020:web:bb7358915c656e5266c9b9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);