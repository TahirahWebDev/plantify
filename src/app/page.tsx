import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const Home = () => {
  return (
    <div className="bg-green-900 min-h-screen px-9 pt-2 pb-10">
      <nav className="flex justify-between items-center text-white mb-10">
        <div className="text-lg font-bold">
          <img src="/logo.png" alt="Plantify Logo" className="w-32 h-auto"/>
        </div>
        <ul className="flex space-x-8">
          <li>Shop</li>
          <li>Products</li>
          <li>Fertilizer</li>
          <li>Guide</li>
        </ul>
        <div className="flex space-x-4">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
      </nav>

      <div className="flex justify-between items-start text-white space-x-20">
        <div className="max-w-md">
          <h1 className="text-4xl mt-28 font-bold">Happiness blooms from within</h1>
          <p className="mt-4">
            Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.
          </p>
          <div className="mt-6 flex space-x-4">
            <button className="bg-white text-green-900 px-6 py-2 rounded">Shop now</button>
            <button className=" px-6 py-2">Explore plants</button>
          </div>
          </div>

        <div className="grid grid-cols-2 gap-4 max-w-max">
          <div className="bg-white overflow-hidden transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Now</div>
            <img src="/image 1.png" alt="Plant" className="w-full h-64  rounded-t-md"/>
          </div>
          <div className="bg-white overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Popular</div>
            <img src="/image 2.png" alt="Plant" className="w-full h-64 rounded-t-md"/>
          </div>

          <div className="bg-white overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Featured</div>
            <img src="/image 3.png" alt="Anthurium Flower" className="w-full h-64 rounded-t-md"/>
          </div>

          <div className="bg-white overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="text-green-900 p-4">Latest</div>
            <img src="/image 3.png" alt="Anthurium Flower" className="w-full h-64 rounded-t-md"/>
          </div>

        </div>
      </div>
    </div>
 
  );
};

export default Home;
