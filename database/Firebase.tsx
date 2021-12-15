import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAGsqE4tkUSttZFdADUjjdvaqVCfyjdWxY",
  authDomain: "atmalertsystem-altamedia.firebaseapp.com",
  databaseURL:
    "https://atmalertsystem-altamedia-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "atmalertsystem-altamedia",
  storageBucket: "atmalertsystem-altamedia.appspot.com",
  messagingSenderId: "557240678789",
  appId: "1:557240678789:web:de99d583ac3e62e1ca6cec",
  measurementId: "${config.measurementId}",
};

const app = initializeApp(firebaseConfig);

export default app;
