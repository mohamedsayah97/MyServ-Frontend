import React from "react";
import { FiBell, FiSearch, FiUser } from "react-icons/fi";

const Navbar = () => {
  const user = { name: "Mohamed", lastname: "sayah" };

  return (
    <div className="flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-rose-200 p-4 h-20 sticky top-0 z-10">
      {/* Logo/Titre */}
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-rose-400 to-rose-600 flex items-center justify-center shadow-sm">
          <span className="text-white font-bold text-lg">GO</span>
        </div>
        <h1 className="text-2xl font-light text-rose-800 hidden md:block">
          <span className="font-medium">Recrutement</span>
        </h1>
      </div>

      {/* Barre de recherche */}
      {/* <div className="flex-1 max-w-md mx-4 hidden md:block">
        <div className="relative">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-rose-300" />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-rose-50 border border-rose-100 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-transparent text-rose-700 placeholder-rose-300"
          />
        </div>
      </div> */}

      {/* Icônes de navigation */}
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-rose-100/50 relative text-rose-500">
          <FiBell className="text-xl" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>

        <div className="w-px h-8 bg-rose-200"></div>

        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-gradient-to-r from-rose-400 to-rose-600 flex items-center justify-center text-white">
            <FiUser className="text-lg" />
          </div>
          <span className="text-rose-700 font-medium hidden md:block">
            {user.name}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
