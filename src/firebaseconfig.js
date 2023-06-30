import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
//import firebase from "firebase/app";
//import "firebase/database";
function StartFirebase(){
      // const firebaseConfig = {
      //   apiKey: "AIzaSyCCOJ8sCELKAuvilCH6Tip4A6W1usiDRms",
      //   authDomain: "omega-cider-326514.firebaseapp.com",
      //   databaseURL: "https://cybranex-65fc0-default-rtdb.firebaseio.com",
      //   projectId: "omega-cider-326514",
      //   storageBucket: "omega-cider-326514.appspot.com",
      //   messagingSenderId: "1037221820616",
      //   appId: "1:1037221820616:web:f6d4671c031dddfe3c0dfd",
      //   measurementId: "G-M4FMPVE6YL",
      // };
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLvV_xuyRgX5pI0Bgl32WEfwH9SHONtKE",
  authDomain: "cybranex-65fc0.firebaseapp.com",
  databaseURL: "https://cybranex-65fc0-default-rtdb.firebaseio.com",
  projectId: "cybranex-65fc0",
  storageBucket: "cybranex-65fc0.appspot.com",
  messagingSenderId: "316557414028",
  appId: "1:316557414028:web:8c97d8072b7498a09475a9",
  measurementId: "G-14XFY7HJ5D"
};
      //firebase.initializeApp(config);  
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}
// if (!firebase.apps.length) {
//   firebase.initializeApp({});
// }else {
//   firebase.app(); // if already initialized, use that one
// }
// Initialize Firebase
// export const app = initializeApp(firebaseConfig);

export default StartFirebase;
