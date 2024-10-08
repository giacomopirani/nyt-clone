import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import {
  auth,
  facebookProvider,
  gitProvider,
  googleProvider,
} from "../firebase/setup";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import google from "../images/google.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailLogin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const facebookLogin = async () => {
    try {
      await signInWithPopup(auth, facebookProvider);
    } catch (err) {
      console.log(err);
    }
  };

  const gitLogin = async () => {
    try {
      await signInWithPopup(auth, gitProvider);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen mt-16">
      <div className="flex justify-center items-center flex-grow -mt-40">
        <div className="w-full max-w-lg p-4">
          <h1 className="text-gray-700  font-normal text-3xl text-center">
            Log in or create an account
          </h1>
          <br />
          <label className="font-bold text-base">Email Address</label>
          <br />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-black"
          />
          <br />
          <label className="font-bold text-base">Password</label>
          <br />
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-black"
          />
          <br />
          <button
            onClick={emailLogin}
            className="bg-black text-white w-full h-11 mt-4 font-semibold"
          >
            Create an Account
          </button>
          <h1 className="text-center mt-4">or</h1>
          <h1 className="text-center mt-4">
            By continuing, you agree to the Terms of Sale, Terms of <br />{" "}
            Service, and Privacy Policy.
          </h1>
          <div
            onClick={googleLogin}
            className="border border-black w-full p-2 flex items-center justify-center mt-4"
          >
            <img src={google} alt="Google Icon" className="w-5 h-5 mr-2" />
            <h1 className="font-bold">Continue with Google</h1>
          </div>
          <div
            onClick={facebookLogin}
            className="border border-black w-full p-2 flex items-center justify-center mt-4"
          >
            <img src={facebook} alt="Facebook Icon" className="w-5 h-5 mr-2" />
            <h1 className="font-bold">Continue with Facebook</h1>
          </div>
          <div
            onClick={gitLogin}
            className="border border-black w-full p-2 flex items-center justify-center mt-4"
          >
            <img src={github} alt="GitHub Icon" className="w-5 h-5 mr-2" />
            <h1 className="font-bold ml-2">Continue with GitHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
