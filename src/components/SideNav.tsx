import React, { useState } from "react";
import Link from "next/link";
import { useDarkMode } from "../contexts/DarkModeContext";
import {
  RiHome2Line,
  RiAccountCircleLine,
  RiMoneyDollarCircleLine,
  RiTableAltLine,
  RiAlarmWarningLine,
  RiGlobalLine,
  RiTwitterFill,
  RiTiktokFill,
  RiCollapseDiagonalFill,
  RiLightbulbFlashLine,
} from "react-icons/ri"; // Import icons from react-icons

const SideNav: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [collapsed, setCollapsed] = useState(false); // Start with sidebar open

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <aside
      className={`fixed bottom-0 left-0 max-h-[calc(100vh-5rem)] lg:max-h-full lg:bg-gray-200 lg:border-r lg:border-gray-300 ${
        darkMode ? "dark:bg-gray-800" : ""
      } lg:static lg:border-l lg:border-t transform lg:translate-x-0 ${
        collapsed ? "w-20 lg:w-20" : "w-full lg:w-64"
      }`}
      style={{ transition: "width 0.3s ease, transform 0.3s ease" }}
    >
      <nav className="py-4 overflow-y-auto lg:overflow-y-hidden">
        <ul className="flex flex-wrap lg:block lg:space-y-1 mt-4">
          <li
            className={`px-4 py-2 w-full lg:w-auto ${
              darkMode ? "text-white" : "text-black"
            } hover:bg-gray-300 ${darkMode ? "dark:hover:bg-gray-700" : ""}`}
          >
            <Link href="/" legacyBehavior>
              <a className="flex items-center">
                <RiHome2Line
                  className={`mr-2 ${
                    collapsed ? "icon-collapse" : "text-base"
                  }`}
                />
                {!collapsed && <span>Home</span>}
              </a>
            </Link>
          </li>
          <li
            className={`px-4 py-2 w-full lg:w-auto ${
              darkMode ? "text-white" : "text-black"
            } hover:bg-gray-300 ${darkMode ? "dark:hover:bg-gray-700" : ""}`}
          >
            <Link href="/portfolio" legacyBehavior>
              <a className="flex items-center">
                <RiAccountCircleLine
                  className={`mr-2 ${
                    collapsed ? "icon-collapse" : "text-base"
                  }`}
                />
                {!collapsed && <span>Portfolio</span>}
              </a>
            </Link>
          </li>
          <li
            className={`px-4 py-2 w-full lg:w-auto ${
              darkMode ? "text-white" : "text-black"
            } hover:bg-gray-300 ${darkMode ? "dark:hover:bg-gray-700" : ""}`}
          >
            <Link href="/explorer" legacyBehavior>
              <a className="flex items-center">
                <RiTableAltLine
                  className={`mr-2 ${
                    collapsed ? "icon-collapse" : "text-base"
                  }`}
                />
                {!collapsed && <span>Explorer</span>}
              </a>
            </Link>
          </li>
          <li
            className={`px-4 py-2 w-full lg:w-auto ${
              darkMode ? "text-white" : "text-black"
            } hover:bg-gray-300 ${darkMode ? "dark:hover:bg-gray-700" : ""}`}
          >
            <Link href="/defi" legacyBehavior>
              <a className="flex items-center">
                <RiMoneyDollarCircleLine
                  className={`mr-2 ${
                    collapsed ? "icon-collapse" : "text-base"
                  }`}
                />
                {!collapsed && <span>Defi</span>}
              </a>
            </Link>
          </li>
          <li
            className={`px-4 py-2 w-full lg:w-auto ${
              darkMode ? "text-white" : "text-black"
            } hover:bg-gray-300 ${darkMode ? "dark:hover:bg-gray-700" : ""}`}
          >
            <Link href="/alerts" legacyBehavior>
              <a className="flex items-center">
                <RiAlarmWarningLine
                  className={`mr-2 ${
                    collapsed ? "icon-collapse" : "text-base"
                  }`}
                />
                {!collapsed && <span>Alerts</span>}
              </a>
            </Link>
          </li>
          <li
            className={`px-4 py-2 w-full lg:w-auto ${
              darkMode ? "text-white" : "text-black"
            } hover:bg-gray-300 ${darkMode ? "dark:hover:bg-gray-700" : ""}`}
          >
            <Link href="/developers" legacyBehavior>
              <a className="flex items-center">
                <RiGlobalLine
                  className={`mr-2 ${
                    collapsed ? "icon-collapse" : "text-base"
                  }`}
                />
                {!collapsed && <span>Developers</span>}
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Collapse Icon */}
      <div
        className={`absolute bottom-4 left-0 ${
          collapsed ? "lg:left-2" : "lg:left-20"
        }`}
      >
        <button
          onClick={toggleSidebar}
          className={`p-2 ${
            darkMode ? "dark:text-white" : "text-black"
          } hover:bg-gray-300 rounded-full ${
            darkMode ? "dark:hover:bg-gray-700" : ""
          }`}
        >
          <RiCollapseDiagonalFill />
        </button>
      </div>

      {/* Social Media Icons - Displayed inline */}
      {!collapsed && (
        <div className="mt-4 px-4 flex space-x-4 justify-center">
          <a
            href="https://twitter.com/BloxSolutions"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-white" : "text-black"
            } hover:text-gray-600 flex items-center`}
          >
            <RiTwitterFill className="mr-2" />
          </a>
          <a
            href="https://tiktok.com/@bloxsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "text-white" : "text-black"
            } hover:text-gray-600 flex items-center`}
          >
            <RiTiktokFill className="mr-2" />
          </a>
        </div>
      )}

        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className={`mt-4 p-2 ${
            darkMode ? "dark:text-white" : "text-black"
          } text-2xl flex items-center`} // Example of making icons bigger
        >
          <RiLightbulbFlashLine />
        </button>
    </aside>
  );
};

export default SideNav;