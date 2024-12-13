import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

console.log("Inizio del file setup.ts");
console.log(
  "REACT_APP_FIREBASE_API_KEY:",
  process.env.REACT_APP_FIREBASE_API_KEY
);

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nyt-clone-c7195.firebaseapp.com",
  projectId: "nyt-clone-c7195",
  storageBucket: "nyt-clone-c7195.appspot.com",
  messagingSenderId: "450808452291",
  appId: "1:450808452291:web:6806edf31152d266c1be76",
};

console.log("firebaseConfig:", firebaseConfig);

if (!firebaseConfig.apiKey) {
  console.error("Firebase API Key non trovata nelle variabili d'ambiente!");
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const gitProvider = new GithubAuthProvider();
export const facebookProvider = new FacebookAuthProvider();

console.log("Fine del file setup.ts");
