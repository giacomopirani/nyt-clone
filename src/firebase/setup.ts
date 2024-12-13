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
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process-env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
  storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
  messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  appId: "process.env.REACT_APP_FIREBASE_APP_ID",
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
