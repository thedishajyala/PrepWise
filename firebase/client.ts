import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics"; 

const firebaseConfig = {
  apiKey: "AIzaSyCGXtx1vAtYNgcfmCPavdT-X0gi3iJXWL4",
  authDomain: "prepwise-b329a.firebaseapp.com",
  projectId: "prepwise-b329a",
  storageBucket: "prepwise-b329a.firebasestorage.app",
  messagingSenderId: "1066524028804",
  appId: "1:1066524028804:web:3ebf5a7f4548c3abca77d1",
  measurementId: "G-FCEHC4YQRC"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only in browser environment
let analytics;
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export { analytics };