import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { useState } from "react";
import {
  auth,
  facebookProvider,
  gitProvider,
  googleProvider,
} from "../firebase/setup";

type AuthProvider = "google" | "facebook" | "github";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signUp = async (
    email: string,
    password: string
  ): Promise<UserCredential | null> => {
    setLoading(true);
    setError(null);
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const signInWithProvider = async (
    provider: AuthProvider
  ): Promise<UserCredential | null> => {
    setLoading(true);
    setError(null);
    try {
      let providerInstance;
      switch (provider) {
        case "google":
          providerInstance = googleProvider;
          break;
        case "facebook":
          providerInstance = facebookProvider;
          break;
        case "github":
          providerInstance = gitProvider;
          break;
      }
      const result = await signInWithPopup(auth, providerInstance);
      return result;
    } catch (err) {
      setError((err as Error).message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { signUp, signInWithProvider, loading, error };
}
