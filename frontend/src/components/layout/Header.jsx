import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Bell,
  Search,
  User,
  LogOut,
  Settings,
  BarChart3,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "../ui/Avatar";
import { currentUser } from "../../data/mockData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleProfileMenu = () => setProfileMenuOpen(!profileMenuOpen);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">
                CompanyGrow
              </h1>
            </Link>
          </div>

          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <Link
              to="/courses"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              Courses
            </Link>
            <Link
              to="/projects"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              Projects
            </Link>
            <Link
              to="/profile"
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 hover:bg-gray-100"
            >
              Profile
            </Link>
          </div>

          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <Search size={20} />
            </button>

            <button className="p-2 ml-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
              <Bell size={20} />
            </button>

            <div className="ml-3 relative">
              <div>
                <button
                  onClick={toggleProfileMenu}
                  className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Avatar
                    src={currentUser.avatar}
                    alt={currentUser.name}
                    size="sm"
                  />
                </button>
              </div>

              <AnimatePresence>
                {profileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <User size={16} className="mr-2" />
                        Profile
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <Settings size={16} className="mr-2" />
                        Settings
                      </Link>
                      <Link
                        to="/analytics"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => setProfileMenuOpen(false)}
                      >
                        <BarChart3 size={16} className="mr-2" />
                        Analytics
                      </Link>
                      <div className="border-t border-gray-100"></div>
                      <button
                        onClick={() => {
                          localStorage.removeItem("token"); // ✅ Remove JWT token
                          setProfileMenuOpen(false); // ✅ Close menu
                          window.location.href = "/login"; // ✅ Redirect to login
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      >
                        <LogOut size={16} className="mr-2" />
                        Sign out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="ml-2 -mr-2 flex items-center md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/courses"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/projects"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/profile"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Profile
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
