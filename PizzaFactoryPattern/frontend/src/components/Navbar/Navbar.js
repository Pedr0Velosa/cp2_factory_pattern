import React from 'react';
import Logo from './Logo';
import Itens from './Itens';

const Navbar = () => {
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 mb-8">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Logo />
        <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Itens />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;