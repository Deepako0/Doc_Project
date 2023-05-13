import { getFirestore } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
  apiKey: "AIzaSyCGZJDUHwDQDFRCcTaCAHCJIw7LDkIcLPI",
  authDomain: "docproject-8cb93.firebaseapp.com",
  projectId: "docproject-8cb93",
  storageBucket: "docproject-8cb93.appspot.com",
  messagingSenderId: "563209776891",
  appId: "1:563209776891:web:437cf24836b44df5cb0a5e"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export default db;