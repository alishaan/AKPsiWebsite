import React from "react";
import "../styles/index.css";
import logo from "../assets/AKPsiLogo.webp";

function Navbar() {
  return (
    <div className="flex w-screen h-24 items-center justify-center absolute">
      <img src={logo} alt="Logo" className="h-12 ml-4" />

      <div className="ml-4 mr-16">
        <p className="font-serif text-white tracking-widest italic">
          Alpha Kappa Psi
        </p>
        <p className="font-serif text-white tracking-wider">Omega Nu Chapter</p>
      </div>

      <div className="flex justify-between ml-8 mr-8 font-thin w-4/12">
        <a className="hover:text-amber-500 text-white">Home</a>
        <a className="hover:text-amber-500 text-white">About Us</a>
        <a className="hover:text-amber-500 text-white">Members</a>
        <a className="hover:text-amber-500 text-white">Recruitment</a>
        <a className="hover:text-amber-500 text-white">Gallery</a>
        <a className="hover:text-amber-500 text-white">Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
