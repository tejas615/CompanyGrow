import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { motion } from 'framer-motion';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.main 
        className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <Outlet />
      </motion.main>
      <footer className="bg-white shadow-sm py-4 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CompanyGrow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;