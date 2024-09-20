import moment from "moment";
import hamburghermenu from "../images/hamburgermenu.png";
import newyorktimes from "../images/newyorktimes.png";
import search from "../images/search.png";

export default function Navbar() {
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <img src={hamburghermenu} className="w-7 h-7" alt="Menu" />
            <img src={search} className="w-7 h-7 ml-5" alt="Search" />
          </div>
          <div className="flex space-x-5">
            <p className="text-xs">U.S.</p>
            <p className="text-xs font-semibold">INTERNATIONAL</p>
            <p className="text-xs">CANADA</p>
            <p className="text-xs">ESPAÑOL</p>
          </div>
          <div>
            <button className="text-xs bg-slate-500 p-2 w-20 text-white font-bold rounded-sm hover:bg-slate-400">
              LOG IN
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center px-4 py-4">
          <div className="flex flex-col">
            <p className="font-bold text-xs">
              {moment(new Date()).format("dddd, MMMM Do")}
            </p>
            <p className="text-sm">Today's paper</p>
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
        <hr className="mt-2 mb-2" />
        <div className="flex items-center justify-center">
          <p>U.S.</p>
          <p className="ml-6">World</p>
          <p className="ml-6">Business</p>
          <p className="ml-6">Arts</p>
          <p className="ml-6">Lifestyle</p>
          <p className="ml-6">Opinion</p>
          <p className="ml-6">Audio</p>
          <p className="ml-6">Games</p>
          <p className="ml-6">Cooking</p>
          <p className="ml-6">Wirecutter</p>
          <p className="ml-6">The Athletic</p>
        </div>
        <hr className="mt-2" />
        <hr className="mt-1" />
      </div>
    </div>
  );
}
