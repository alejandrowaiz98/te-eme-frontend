// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXaZj9U45YevRmomkOgghI4q8fbrs5esA",
  authDomain: "te-eme-594c3.firebaseapp.com",
  projectId: "te-eme-594c3",
  storageBucket: "te-eme-594c3.appspot.com",
  messagingSenderId: "904314039010",
  appId: "1:904314039010:web:4801039570371c99644cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)