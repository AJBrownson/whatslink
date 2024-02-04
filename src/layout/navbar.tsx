// import { useState } from "react";
import { FaLink } from 'react-icons/fa'


const Navbar = () => {

  return (
    <>
      <nav>
        <div className="bg-white lg:py-5 px-5 lg:px-10 navbar">
          <div className="navbar-center">
            <FaLink className="w-8 lg:w-12" />
            <a className="navbar-item text-green-800 text-lg lg:text-2xl font-semibold">
              WHATSLINKS
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;