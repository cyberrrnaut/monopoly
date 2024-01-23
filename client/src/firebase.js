// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "monopolycyb3rnaut.firebaseapp.com",
  projectId: "monopolycyb3rnaut",
  storageBucket: "monopolycyb3rnaut.appspot.com",
  messagingSenderId: "755366292416",
  appId: "1:755366292416:web:993b95ea018272ae987625",
  measurementId: "G-6GPNY0KSCK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
