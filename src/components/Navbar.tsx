import hamburghermenu from "../images/hamburgermenu.png";
import search from "../images/search.png";

export default function Navbar() {
  return (
    <div className="grid grid-rows-3">
      <div className="flex items-center">
        <img src={hamburghermenu} className="w-7 h-7" />
        <img src={search} className="w-7 h-7 ml-5" />
        <h1 className="text-xs ml-96">U.S.</h1>
        <h1 className="text-xs font-semibold ml-5">INTERNATIONAL</h1>
        <h1 className="text-xs ml-5">CANADA</h1>
        <h1 className="text-xs ml-5">ESPANOL</h1>
        <button className="text-xs ml-96 bg-slate-500 p-1 w-16 text-white font-bold">
          LOG IN
        </button>
      </div>
    </div>
  );
}
