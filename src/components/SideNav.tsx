import React from "react";
import Link from "next/link";
import { useDarkMode } from "../contexts/DarkModeContext";

const SideNav: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside className={`lg:flex lg:flex-col lg:w-64 lg:bg-gray-200 lg:border-r lg:border-gray-300 ${darkMode ? 'dark:bg-gray-800' : ''}`}>
      <nav className="py-4">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`mt-4 p-2 ${darkMode ? 'dark:text-white' : 'text-black'}`}
        >
          {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <ul className="flex flex-wrap lg:block lg:space-y-1">
          <li className={`px-4 py-2 w-full lg:w-auto ${darkMode ? 'text-white' : 'text-black'} hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`px-4 py-2 w-full lg:w-auto ${darkMode ? 'text-white' : 'text-black'} hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/explorer">Explorer</Link>
          </li>
          <li className={`px-4 py-2 w-full lg:w-auto ${darkMode ? 'text-white' : 'text-black'} hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={`px-4 py-2 w-full lg:w-auto ${darkMode ? 'text-white' : 'text-black'} hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/defi">Defi</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;