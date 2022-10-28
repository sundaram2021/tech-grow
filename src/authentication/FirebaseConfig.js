import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAUO9yFJ1HLnYVaIXTqnky1gBPZ8jdnJMA",
  authDomain: "research-desk-891ac.firebaseapp.com",
  projectId: "research-desk-891ac",
  storageBucket: "research-desk-891ac.appspot.com",
  messagingSenderId: "878505308142",
  appId: "1:878505308142:web:c03746f52694c842d9a8ff"
};


export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);