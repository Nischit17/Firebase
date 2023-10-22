// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_mv4qkuQbC3263IqpKzLwW8z9R-TpTgc",
  authDomain: "dashboard-2f952.firebaseapp.com",
  projectId: "dashboard-2f952",
  storageBucket: "dashboard-2f952.appspot.com",
  messagingSenderId: "65797135688",
  appId: "1:65797135688:web:b664ee3fda72dbe69de77d",
  measurementId: "G-MBGMQNJBNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()