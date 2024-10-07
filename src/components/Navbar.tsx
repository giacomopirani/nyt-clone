import moment from "moment";
import { useState } from "react";
import { Link } from "react-router-dom";
import hamburghermenu from "../images/hamburgermenu.png";
import newyorktimes from "../images/newyorktimes.png";
import search from "../images/search.png";

interface NavbarProps {
  onSearch: (searchTerm: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleSearch = () => setSearchOpen((prev) => !prev);

  return (
    <div>
      <div className="max-w-7xl mx-auto">
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
          </div>
          <div>
            <Link to="/login">
              <button className="text-xs bg-slate-500 p-2 w-20 text-white font-bold rounded-sm hover:bg-slate-400">
                LOG IN
              </button>
            </Link>
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
          </div>
          <div className="flex space-x-2">
            <p className="text-xs">U.S.</p>
            <p className="text-xs font-semibold">INTERNATIONAL</p>
            <p className="text-xs">CANADA</p>
            <p className="text-xs">ESPAÑOL</p>
          </div>
          <div>
            <Link to="/login">
              <button className="text-xs bg-slate-500 p-2 w-20 text-white font-bold rounded-sm hover:bg-slate-400">
                LOG IN
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center px-4 py-4">
          {/* Date, Today's Paper, and Nasdaq */}
          <div className="hidden lg:flex flex-col">
            <p className="font-semibold text-xs">
              {moment().format("dddd, MMMM Do")}
            </p>
            <p className="text-xs">Today's paper</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Link to="/">
              <img
                src={newyorktimes}
                className="flex items-center justify-center w-72 h-12"
                alt="Logo New York Times"
              />
            </Link>
          </div>
          <div className="hidden lg:block text-green-700">
            <p className="text-xs text-right">Nasdaq +1.26%</p>
          </div>
        </div>

        {/* Search input under New York Times logo with transition */}
        <div
          className={`flex justify-center py-4 transition-all duration-300 ease-in-out ${
            searchOpen ? "opacity-100" : "opacity-0 h-0"
          }`}
        >
          {searchOpen && (
            <form
              className="flex items-center justify-center w-3/4"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                placeholder="Search"
                className="w-3/4 border p-1 rounded"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="ml-2 text-xs bg-slate-500 p-2 w-20 text-white font-bold rounded-sm hover:bg-slate-400"
              >
                Go
              </button>
            </form>
          )}
        </div>

        <hr className="mt-2 mb-2" />

        {/* Show/hide the menu based on screen size and state */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex items-center justify-center space-y-2 lg:space-y-0 lg:space-x-6`}
        >
          <li className="text-center font-thin pb-1 hover:bg-gray-200 transition duration-300 rounded">
            U.S.
          </li>
          <li className="text-center font-thin pb-1">World</li>
          <li className="text-center font-thin pb-1">Business</li>
          <li className="text-center font-thin pb-1">Arts</li>
          <li className="text-center font-thin pb-1">Lifestyle</li>
          <li className="text-center font-thin pb-1">Opinion</li>
          <li className="text-center font-thin pb-1">Audio</li>
          <li className="text-center font-thin pb-1">Games</li>
          <li className="text-center font-thin pb-1">Cooking</li>
          <li className="text-center font-thin pb-1">Wirecutter</li>
          <li className="text-center font-thin pb-1">The Athletic</li>
        </ul>

        <hr className="mt-2" />
        <hr className="mt-1" />
      </div>
    </div>
  );
}
