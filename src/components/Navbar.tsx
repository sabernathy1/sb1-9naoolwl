import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Perfectly Personalized</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-primary-300">Home</Link></li>
          <li><Link to="/shop" className="hover:text-primary-300">Shop</Link></li>
          <li><Link to="/gallery" className="hover:text-primary-300">Gallery</Link></li>
          <li><Link to="/test-connection" className="hover:text-primary-300">Test Connection</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;