// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyCZnPKa7XougzLNGDmhtP_x8HJEY3LayLE",
  authDomain: "manufacturer-website-ba02a.firebaseapp.com",
  projectId: "manufacturer-website-ba02a",
  storageBucket: "manufacturer-website-ba02a.appspot.com",
  messagingSenderId: "120098717976",
  appId: "1:120098717976:web:54ccc4dc18e5e8cae51e6d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;