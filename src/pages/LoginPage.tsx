import { Facebook, Github, ChromeIcon as Google } from "lucide-react";
import React, { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { signUp, signInWithProvider, loading, error } = useAuth();

  const handleEmailSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    const result = await signUp(email, password);
    if (result) {
      setIsAuthenticated(true);
    }
  };

  const handleProviderSignIn = async (
    provider: "google" | "facebook" | "github"
  ) => {
    const result = await signInWithProvider(provider);
    if (result) {
      setIsAuthenticated(true);
    }
  };

  if (isAuthenticated) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <div className="p-3 text-sm text-green-600 bg-green-100 rounded-md text-center">
            Login successful
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold font-serif text-center text-gray-800">
          Log in or create an account
        </h1>

        <form onSubmit={handleEmailSignUp} className="space-y-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-black text-white rounded-md hover:bg-gray-800 disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create an Account"}
          </button>
        </form>

        {error && (
          <div className="p-3 text-sm text-red-500 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">or</span>
          </div>
        </div>

        <p className="text-center text-sm text-gray-600">
          By continuing, you agree to the Terms of Sale, Terms of Service, and
          Privacy Policy.
        </p>

        <div className="space-y-3">
          <button
            onClick={() => handleProviderSignIn("google")}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 flex items-center justify-center"
          >
            <Google className="w-5 h-5 mr-2" />
            Continue with Google
          </button>
          <button
            onClick={() => handleProviderSignIn("facebook")}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 flex items-center justify-center"
          >
            <Facebook className="w-5 h-5 mr-2" />
            Continue with Facebook
          </button>
          <button
            onClick={() => handleProviderSignIn("github")}
            disabled={loading}
            className="w-full px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 flex items-center justify-center"
          >
            <Github className="w-5 h-5 mr-2" />
            Continue with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
