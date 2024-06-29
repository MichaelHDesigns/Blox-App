import React from "react";
import Link from "next/link";
import { useDarkMode } from "../contexts/DarkModeContext";

const SideNav: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <aside className={`w-full lg:w-64 bg-gray-200 border-r border-gray-300 lg:border-r-0 lg:block lg:sticky lg:top-0 ${darkMode ? 'dark:bg-gray-800' : ''}`}>
      <nav className="py-4">
        <ul>
          <li className={`px-4 py-2 hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`px-4 py-2 hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/explorer">Explorer</Link>
          </li>
          <li className={`px-4 py-2 hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li className={`px-4 py-2 hover:bg-gray-300 ${darkMode ? 'dark:hover:bg-gray-700' : ''}`}>
            <Link href="/defi">Defi</Link>
          </li>
        </ul>
        
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`ml-4 mt-4 p-2 border rounded ${darkMode ? 'bg-gray-200 dark:bg-gray-700 dark:text-white' : 'bg-gray-200'}`}
        >
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
      </nav>
    </aside>
  );
};

export default SideNav;