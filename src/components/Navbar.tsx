import moment from "moment";
import hamburghermenu from "../images/hamburgermenu.png";
import newyorktimes from "../images/newyorktimes.png";
import search from "../images/search.png";

export default function Navbar() {
  return (
    <div className="border-b border-gray-300 shadow">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <img src={hamburghermenu} className="w-7 h-7" alt="Menu" />
            <img src={search} className="w-7 h-7 ml-5" alt="Search" />
          </div>
          <div className="flex space-x-5">
            <h1 className="text-xs">U.S.</h1>
            <h1 className="text-xs font-semibold">INTERNATIONAL</h1>
            <h1 className="text-xs">CANADA</h1>
            <h1 className="text-xs">ESPAÑOL</h1>
          </div>
          <div>
            <button className="text-xs bg-slate-500 p-2 w-20 text-white font-bold rounded-sm">
              LOG IN
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-xs">
              {moment(new Date()).format("dddd, MMMM Do")}
            </h1>
            <h1 className="text-sm">Today's paper</h1>
          </div>
          <div className="flex justify-center">
            <img
              src={newyorktimes}
              className="w-96 h-18"
              alt="Logo New York Times"
            />
          </div>
          <div>
            <p className="text-xs">Nasdaq +1.26%</p>
          </div>
        </div>
        <hr className="mt-3" />
        <div className="flex items-center justify-center">
          <p>U.S.</p>
          <p className="ml-5">World</p>
          <p className="ml-5">Business</p>
          <p className="ml-5">Arts</p>
          <p className="ml-5">Lifestyle</p>
          <p className="ml-5">Opinion</p>
          <p className="ml-5">Audio</p>
          <p className="ml-5">Games</p>
          <p className="ml-5">Cooking</p>
          <p className="ml-5">Wirecutter</p>
          <p className="ml-5">The Athletic</p>
        </div>
      </div>
    </div>
  );
}
