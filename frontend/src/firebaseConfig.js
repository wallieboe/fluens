import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Vergeet niet Authentication support te importeren!

const firebaseConfig = {
  apiKey: "AIzaSyDv42-YYCylI671xH629OkrgD2MvWYzyyc",
  authDomain: "fluens-dev.firebaseapp.com",
  projectId: "fluens-dev",
  storageBucket: "fluens-dev.appspot.com", // <-- Correctie hier!
  messagingSenderId: "579696122495",
  appId: "1:579696122495:web:d5c3708ec06f1ede033d4a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
