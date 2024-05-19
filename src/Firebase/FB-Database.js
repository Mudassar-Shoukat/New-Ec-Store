import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAjE_iYjAeZ95xUu-2EN6IF23I8W1k4z0o",
  authDomain: "e-store-8669c.firebaseapp.com",
  projectId: "e-store-8669c",
  storageBucket: "e-store-8669c.appspot.com",
  messagingSenderId: "245827473902",
  appId: "1:245827473902:web:1cb66923f88c3e51c3feff",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
