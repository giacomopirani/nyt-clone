import moment from "moment";
import { useState } from "react";
import hamburghermenu from "../images/hamburgermenu.png";
import newyorktimes from "../images/newyorktimes.png";
import search from "../images/search.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <div className="max-w-6xl mx-auto">
        {/* Mobile navbar */}
        <div className="flex justify-between items-center px-4 py-2 lg:hidden">
          <div className="flex items-center">
            <img
              src={hamburghermenu}
              className="w-7 h-7 cursor-pointer"
              alt="Menu"
              onClick={toggleMenu}
            />
            <img
              src={search}
              className="w-7 h-7 ml-5 cursor-pointer"
              alt="Search"
              onClick={toggleSearch}
            />
            {/* Search input field appears when search is toggled */}
            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 border p-1 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
          </div>
          <div>
            <button className="text-xs bg-slate-500 p-2 w-20 text-white font-bold rounded-sm hover:bg-slate-400">
              LOG IN
            </button>
          </div>
        </div>

        {/* Desktop navbar */}
        <div className="hidden lg:flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <img src={hamburghermenu} className="w-7 h-7" alt="Menu" />
            <img
              src={search}
              className="w-7 h-7 ml-5 cursor-pointer"
              alt="Search"
              onClick={toggleSearch}
            />
            {/* Search input for desktop */}
            {searchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="ml-2 border p-1 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            )}
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
          {/* Hide date, Today's Paper, and Nasdaq below 1024px */}
          <div className="hidden lg:flex flex-col">
            <p className="font-bold text-xs">
              {moment(new Date()).format("dddd, MMMM Do")}
            </p>
            <p className="text-sm">Today's paper</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <img
              src={newyorktimes}
              className="flex items-center justify-center w-72 h-10"
              alt="Logo New York Times"
            />
          </div>
          <div className="hidden lg:block text-green-700">
            <p className="text-xs">Nasdaq +1.26%</p>
          </div>
        </div>

        <hr className="mt-2 mb-2" />

        {/* Show/hide the menu based on screen size and state */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex items-center justify-center space-y-2 lg:space-y-0 lg:space-x-6`}
        >
          <li className="text-center font-thin">U.S.</li>
          <li className="text-center font-thin">World</li>
          <li className="text-center font-thin">Business</li>
          <li className="text-center font-thin">Arts</li>
          <li className="text-center font-thin">Lifestyle</li>
          <li className="text-center font-thin">Opinion</li>
          <li className="text-center font-thin">Audio</li>
          <li className="text-center font-thin">Games</li>
          <li className="text-center font-thin">Cooking</li>
          <li className="text-center font-thin">Wirecutter</li>
          <li className="text-center font-thin">The Athletic</li>
        </ul>

        <hr className="mt-2" />
        <hr className="mt-1" />
      </div>
    </div>
  );
}
