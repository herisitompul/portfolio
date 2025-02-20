import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB6hwn2dPechAKxQ9aUFA10Z4IH7XOqdH4",
  authDomain: "portfolio-492b6.firebaseapp.com",
  projectId: "portfolio-492b6",
  storageBucket: "portfolio-492b6.appspot.com", // Perbaiki domain
  messagingSenderId: "932790372090",
  appId: "1:932790372090:web:ac1d0f8eae1ab20847ab43",
  measurementId: "G-LFFZ9PGGFL"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
