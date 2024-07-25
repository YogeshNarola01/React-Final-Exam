import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDv0zDJJUTUNEwrplDK4JKHiFVCk3hmb-M",
  authDomain: "finalexam-dda4d.firebaseapp.com",
  projectId: "finalexam-dda4d",
  storageBucket: "finalexam-dda4d.appspot.com",
  messagingSenderId: "587442658546",
  appId: "1:587442658546:web:cb371c0b0045507062c46b",
  measurementId: "G-R2EBHKRJ75"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
