import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSlIcd8fQHch0E6M8uJwQE4A0IgiGHy2M",
  authDomain: "todoapp-81373.firebaseapp.com",
  projectId: "todoapp-81373",
  storageBucket: "todoapp-81373.appspot.com",
  messagingSenderId: "939772470032",
  appId: "1:939772470032:web:823fb7754fb1c867b9bb95",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
