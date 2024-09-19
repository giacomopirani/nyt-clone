import moment from "moment";
import hamburghermenu from "../images/hamburgermenu.png";
import newyorktimes from "../images/newyorktimes.png";
import search from "../images/search.png";

export default function Navbar() {
  return (
    <div className="grid grid-rows-3 border-b border-gray-300 shadow">
      <div className="flex items-center justify-center">
        <img src={hamburghermenu} className="w-7 h-7" />
        <img src={search} className="w-7 h-7 ml-5" />
        <h1 className="text-xs ml-96">U.S.</h1>
        <h1 className="text-xs font-semibold ml-5">INTERNATIONAL</h1>
        <h1 className="text-xs ml-5">CANADA</h1>
        <h1 className="text-xs ml-5">ESPANOL</h1>
        <button className="text-xs ml-96 bg-slate-500 p-2 w-20 text-white font-bold rounded-sm">
          LOG IN
        </button>
      </div>
      <div className="flex justify-start items-center">
        <div className="flex flex-col ml-7">
          <h1 className="font-bold text-xs">
            {moment(new Date()).format("DD-MM-YYYY")}
          </h1>
          <h1>Today's paper</h1>
        </div>
        <img
          src={newyorktimes}
          className="w-96 h-16 ml-96"
          alt="Logo New York Times"
        />
        <div>
          <hr className="mt-3" />
        </div>
        <div>
          <h1>U.S.</h1>
          <h1>World</h1>
          <h1>Business</h1>
          <h1>Arts</h1>
          <h1>Lifestyle</h1>
          <h1>Opinion</h1>
          <h1>Audio</h1>
          <h1>Games</h1>
          <h1>Cooking</h1>
          <h1>Wirecutter</h1>
          <h1>The Athletic</h1>
        </div>
      </div>
    </div>
  );
}
