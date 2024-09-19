import facebook from "../images/facebook.png";
import github from "../images/github.png";
import google from "../images/google.png";
import newyork from "../images/newyorktimes.png";

export default function Login() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar con il logo centrato */}
      <div className="shadow-md p-4 flex justify-center">
        <img src={newyork} className="w-56" alt="New York Times Logo" />
      </div>

      {/* Div contenente il Log In centrato verticalmente */}
      <div className="flex justify-center items-center flex-grow -mt-12">
        <div className="w-full max-w-lg p-4">
          <h1 className="text-gray-700 font-medium text-3xl text-center">
            Log in or create an account
          </h1>
          <br />
          <label className="font-bold text-base">Email Address</label>
          <br />
          <input className="w-full p-2 border border-black" />
          <br />
          <label className="font-bold text-base">Password</label>
          <br />
          <input className="w-full p-2 border border-black" />
          <br />
          <button className="bg-black text-white w-full h-11 mt-4 font-semibold">
            Continue
          </button>
          <h1 className="text-center mt-4">or</h1>
          <h1 className="text-center mt-4">
            By continuing, you agree to the Terms of Sale, Terms of <br />{" "}
            Service, and Privacy Policy.
          </h1>
          <div className="border border-black w-full p-2 flex items-center justify-center mt-4">
            <img src={google} alt="Google Icon" className="w-5 h-5 mr-2" />
            <h1 className="font-bold">Continue with Google</h1>
          </div>
          <div className="border border-black w-full p-2 flex items-center justify-center mt-4">
            <img src={facebook} alt="Facebook Icon" className="w-5 h-5 mr-2" />
            <h1 className="font-bold">Continue with Facebook</h1>
          </div>
          <div className="border border-black w-full p-2 flex items-center justify-center mt-4">
            <img src={github} alt="GitHub Icon" className="w-5 h-5 mr-2" />
            <h1 className="font-bold ml-2">Continue with GitHub</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
