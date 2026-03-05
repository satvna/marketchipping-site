
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "firebase/app";
  import { getStorage } from "firebase/storage";
  import { getDatabase } from "firebase/database"
  import { getFirestore } from "firebase/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8ujLlJvPlNEkySFH4zrRSkepBJoA8zVE",
    authDomain: "marketchipping-chatroom.firebaseapp.com",
    projectId: "marketchipping-chatroom",
    storageBucket: "marketchipping-chatroom.firebasestorage.app",
    messagingSenderId: "618678632005",
    appId: "1:618678632005:web:a664f748c041a67fcc6d2c",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);


// Firebase storage reference
const storage = getStorage(app);
export default storage;

export const database = getFirestore(app);

