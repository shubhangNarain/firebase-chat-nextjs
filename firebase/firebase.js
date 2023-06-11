import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpVdk6lB1FCo7pyrIdAVWpq4vKUkk26UU",
  authDomain: "fir-chat-app-330dd.firebaseapp.com",
  projectId: "fir-chat-app-330dd",
  storageBucket: "fir-chat-app-330dd.appspot.com",
  messagingSenderId: "245163986730",
  appId: "1:245163986730:web:894b8da17f20937141d853"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);