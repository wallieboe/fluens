import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // <<== Dit importeren we extra voor authenticatie

const firebaseConfig = {
  apiKey: "AIzaSyDSHxmCDLAYNE_vT9qpDbWZFrID05WaP-E",
  authDomain: "fluens-7de49.firebaseapp.com",
  projectId: "fluens-7de49",
  storageBucket: "fluens-7de49.appspot.com",
  messagingSenderId: "994455961449",
  appId: "1:994455961449:web:c97439115df202d07c07f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth };
