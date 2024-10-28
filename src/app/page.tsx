"use client";
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-green-900 min-h-screen px-6 pt-2 pb-10">
      <nav className="flex justify-between items-center text-white mb-10">
        <div className="text-lg font-bold">
          <img src="/logo.png" alt="Plantify Logo" className="w-32 ml-2 md:ml-10 h-auto" />
        </div>

        {/* Hamburger Icon for mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? '✖' : '☰'}
        </button>

        <ul className={`flex-col md:flex-row flex ${isMenuOpen ? 'flex' : 'hidden'} md:flex space-x-8 md:space-x-8 absolute md:relative bg-green-900 md:bg-transparent top-16 left-0 w-full md:w-auto md:top-auto`}>
          <li className="p-2 md:p-0">Shop</li>
          <li className="p-2 md:p-0">Products</li>
          <li className="p-2 md:p-0">Fertilizer</li>
          <li className="p-2 md:p-0">Guide</li>
        </ul>

        <div className="hidden md:flex space-x-4 mr-6">
          <FaSearch className="cursor-pointer" />
          <FaUser className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </nav>

      <div className="flex flex-col md:flex-row justify-between items-start text-white space-y-8 md:space-x-20">
        <div className="max-w-md ml-2 md:ml-10">
          <h1 className="text-4xl mt-8 md:mt-28 font-bold">Happiness blooms from within</h1>
          <p className="mt-4">
            Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-green-900 px-6 py-2 rounded">Shop now</button>
            <button className="px-6 py-2">Explore plants</button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-y-4">
          <div className="bg-white h-52 overflow-hidden mr-4 shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Now</div>
            <img src="/image 1.png" alt="Plant" className="w-full h-48 rounded-t-md" />
          </div>
          <div className="bg-white h-52 overflow-hidden mr-4 shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Popular</div>
            <img src="/image 2.png" alt="Plant" className="w-full h-48 rounded-t-md" />
          </div>
          <div className="bg-white h-52 overflow-hidden mr-4 shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Featured</div>
            <img src="/image 3.png" alt="Anthurium Flower" className="w-full h-48 rounded-t-md" />
          </div>
          <div className="bg-white h-52 overflow-hidden mr-4 shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Latest</div>
            <img src="/image 3.png" alt="Anthurium Flower" className="w-full h-48 rounded-t-md" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
