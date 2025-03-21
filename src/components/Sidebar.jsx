import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { FaTachometerAlt, FaFileAlt, FaCog, FaUser, FaSignOutAlt } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Sidebar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    // Place your logout logic here
    console.log('User logged out');
    setShowLogoutModal(false);
  };

  return (
    <>
      <div
        className={`min-h-screen bg-white text-gray-800 border-r border-gray-200 
          ${isOpen ? 'w-64' : 'w-20'} duration-300 relative shadow-md flex flex-col justify-between`}
      >
        {/* Top Section */}
        <div>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              if (toggleSidebar) toggleSidebar();
            }}
            className="absolute top-4 bg-gray-200 border border-gray-300 rounded-full p-2 
                       hover:bg-gray-300 focus:outline-none transition-all duration-200 shadow-sm"
          >
            <FiMenu size={20} className="text-gray-800" />
          </button>
          <div className="p-4">
            {isOpen && (
              <h2 className="text-2xl pl-6 font-semibold mb-6 transition-all duration-300">
                Admin Dashboard
              </h2>
            )}
          </div>
          <nav className="mt-5">
            <ul>
              <li className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200">
                <FaTachometerAlt size={18} className="text-gray-800" />
                {isOpen && (
                  <a
                    href="/dashboard"
                    className="ml-4 text-base font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Dashboard
                  </a>
                )}
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200">
                <FaFileAlt size={18} className="text-gray-800" />
                {isOpen && (
                  <a
                    href="/page1"
                    className="ml-4 text-base font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Page 1
                  </a>
                )}
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200">
                <FaCog size={18} className="text-gray-800" />
                {isOpen && (
                  <a
                    href="/page2"
                    className="ml-4 text-base font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Page 2
                  </a>
                )}
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4">
          <div className="border-t border-gray-200 pt-4">
            <ul>
              <li className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200">
                <FaUser size={18} className="text-gray-800" />
                {isOpen && (
                  <a
                    href="/profile"
                    className="ml-4 text-base font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Profile
                  </a>
                )}
              </li>
              <li className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200">
                <FaCog size={18} className="text-gray-800" />
                {isOpen && (
                  <a
                    href="/settings"
                    className="ml-4 text-base font-medium hover:text-red-500 transition-colors duration-200"
                  >
                    Settings
                  </a>
                )}
              </li>
              <li
                className="flex items-center p-3 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                onClick={() => setShowLogoutModal(true)}
              >
                <FaSignOutAlt size={18} className="text-gray-800" />
                {isOpen && (
                  <span className="ml-4 text-base font-medium hover:text-red-500 transition-colors duration-200">
                    Logout
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal rendered using a React Portal */}
      {showLogoutModal &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="bg-white rounded-lg shadow-lg z-10 p-6 w-11/12 sm:w-96">
              <h3 className="text-xl font-semibold mb-4">Confirm Logout</h3>
              <p className="mb-6">Are you sure you want to log out?</p>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setShowLogoutModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Sidebar;
