import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnuv_qbP0RAciwaqjU9TK46p8Gi-IJigc",
  authDomain: "otp-project-8b2c7.firebaseapp.com",
  projectId: "otp-project-8b2c7",
  storageBucket: "otp-project-8b2c7.appspot.com",
  messagingSenderId: "1045543334990",
  appId: "1:1045543334990:web:f172607c6e4ac0e03ebf1f",
  measurementId: "G-013B5K39JL"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);