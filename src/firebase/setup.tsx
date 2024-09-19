import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRV_60UIFTOBX_tN2vbKL75RXqEtouSAA",
  authDomain: "nyt-clone-c7195.firebaseapp.com",
  projectId: "nyt-clone-c7195",
  storageBucket: "nyt-clone-c7195.appspot.com",
  messagingSenderId: "450808452291",
  appId: "1:450808452291:web:6806edf31152d266c1be76",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
