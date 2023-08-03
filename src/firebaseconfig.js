import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLvV_xuyRgX5pI0Bgl32WEfwH9SHONtKE",
  authDomain: "cybranex-65fc0.firebaseapp.com",
  databaseURL: "https://cybranex-65fc0-default-rtdb.firebaseio.com",
  projectId: "cybranex-65fc0",
  storageBucket: "cybranex-65fc0.appspot.com",
  messagingSenderId: "316557414028",
  appId: "1:316557414028:web:8c97d8072b7498a09475a9",
  measurementId: "G-14XFY7HJ5D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
