
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDj8b_ncLLVeA-H6ZcW1nCmKqkY-RF1w68",
  authDomain: "attendence-be6f5.firebaseapp.com",
  databaseURL: "https://attendence-be6f5-default-rtdb.firebaseio.com",
  projectId: "attendence-be6f5",
  storageBucket: "attendence-be6f5.firebasestorage.app",
  messagingSenderId: "17704994320",
  appId: "1:17704994320:web:b54d2220ddc44cf3b0ac95"
};


const dbConfig = initializeApp(firebaseConfig);
export default dbConfig;