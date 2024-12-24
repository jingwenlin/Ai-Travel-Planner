// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlHTn9EURDvgVH6jzRvOfcjHAMgJb_gEA",
  authDomain: "ai-travel-planner-e98c2.firebaseapp.com",
  projectId: "ai-travel-planner-e98c2",
  storageBucket: "ai-travel-planner-e98c2.firebasestorage.app",
  messagingSenderId: "190425189277",
  appId: "1:190425189277:web:709819da220f938ffb3d74",
  measurementId: "G-9XBR68MYXE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);