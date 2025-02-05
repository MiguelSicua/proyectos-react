import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDdej5roh-pUE4rV3q7pBDmWPq9m-LhT3Y",
  authDomain: "chat-app-8e855.firebaseapp.com",
  projectId: "chat-app-8e855",
  storageBucket: "chat-app-8e855.firebasestorage.app",
  messagingSenderId: "242198280099",
  appId: "1:242198280099:web:903e8f7a573ab64c1b4c16",
  measurementId: "G-C2SDEVXEXQ",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)