import {
  FaMusic,
  FaUser,
  FaShoppingCart,
  FaDownload,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
} from "react-icons/fa";
import { NavLink, useMatch } from "react-router-dom";
import { useState } from "react";
import "../App.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const isGenresActive = useMatch("/products/genres");
  const isSongsActive = useMatch("/products/songs");
  const isAlbumsActive = useMatch("/products/albums");
  const isArtistsActive = useMatch("/products/artists");

  const isProductsActive =
    isGenresActive || isSongsActive || isAlbumsActive || isArtistsActive;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMenuOpen) {
      setIsProductsOpen(false);
    }
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <div className=" fixed top-0 left-0 right-0 z-50  bg-white shadow-md w-full">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">

          <div className="flex items-center space-x-2">
            <FaMusic className="text-2xl text-purple-600" />
            <h1 className="text-2xl font-bold text-purple-600">
              TuneDownloader
            </h1>
          </div>

          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center space-x-4 lg:space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-purple-600 transition ${
                      isActive ? "text-purple-600 font-medium" : ""
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-purple-600 transition ${
                      isActive ? "text-purple-600 font-medium" : ""
                    }`
                  }
                >
                  About
                </NavLink>
              </li>

              <li className="relative group">
                <div className="flex items-center">
                  <span
                    className={`text-gray-600 hover:text-purple-600 transition ${
                      isProductsActive ? "text-purple-600 font-medium" : ""
                    }`}
                  >
                    Products
                  </span>
                  <button
                    onClick={toggleProducts}
                    className="ml-1 focus:outline-none"
                  >
                    {isProductsOpen ? (
                      <FaChevronUp className="text-sm" />
                    ) : (
                      <FaChevronDown className="text-sm" />
                    )}
                  </button>
                </div>

                {isProductsOpen && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <NavLink
                      to="/products/genres"
                      onClick={() => setIsProductsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 ${
                          isActive ? "bg-purple-50 text-purple-600" : ""
                        }`
                      }
                    >
                      Genres
                    </NavLink>
                    {/* <NavLink
                      to="/products/songs"
                      onClick={() => setIsProductsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 ${
                          isActive ? "bg-purple-50 text-purple-600" : ""
                        }`
                      }
                    >
                      Songs
                    </NavLink> */}
                    <NavLink
                      to="/products/albums"
                      onClick={() => setIsProductsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 ${
                          isActive ? "bg-purple-50 text-purple-600" : ""
                        }`
                      }
                    >
                      Albums
                    </NavLink>
                    <NavLink
                      to="/products/artists"
                      onClick={() => setIsProductsOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-600 ${
                          isActive ? "bg-purple-50 text-purple-600" : ""
                        }`
                      }
                    >
                      Artists
                    </NavLink>
                  </div>
                )}
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `text-gray-600 hover:text-purple-600 transition ${
                      isActive ? "text-purple-600 font-medium" : ""
                    }`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                `text-gray-600 hover:text-purple-600 transition text-xl ${
                  isActive ? "text-purple-600" : ""
                }`
              }
            >
              <FaSearch />
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `text-gray-600 hover:text-purple-600 transition text-xl ${
                  isActive ? "text-purple-600" : ""
                }`
              }
            >
              <FaShoppingCart />
            </NavLink>
            <NavLink
              to="/download"
              className={({ isActive }) =>
                `text-gray-600 hover:text-purple-600 transition text-xl ${
                  isActive ? "text-purple-600" : ""
                }`
              }
            >
              <FaDownload />
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `text-gray-600 hover:text-purple-600 transition ${
                  isActive ? "text-purple-600 font-medium" : ""
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-gray-600 hover:text-purple-600 transition text-xl hidden ${
                  isActive ? "text-purple-600" : ""
                }`
              }
            >
              <FaUser />
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-purple-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav>
              <ul className="flex flex-col space-y-3">
                <li>
                  <NavLink
                    to="/"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 text-gray-600 hover:text-purple-600 ${
                        isActive ? "text-purple-600 font-medium" : ""
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 text-gray-600 hover:text-purple-600 ${
                        isActive ? "text-purple-600 font-medium" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                </li>

                <li>
                  <button
                    onClick={toggleProducts}
                    className="flex items-center w-full py-2 text-gray-600 hover:text-purple-600"
                  >
                    Products
                    {isProductsOpen ? (
                      <FaChevronUp className="ml-1 text-sm" />
                    ) : (
                      <FaChevronDown className="ml-1 text-sm" />
                    )}
                  </button>
        
                           {isProductsOpen && (
                    <div className="pl-4 mt-1 space-y-2">
                      <NavLink
                        to="/products/genres"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-purple-600 ${
                            isActive ? "text-purple-600 font-medium" : ""
                          }`
                        }
                      >
                        Genres
                      </NavLink>
                      <NavLink
                        to="/products/songs"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-purple-600 ${
                            isActive ? "text-purple-600 font-medium" : ""
                          }`
                        }
                      >
                        Songs
                      </NavLink>
                      <NavLink
                        to="/products/albums"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-purple-600 ${
                            isActive ? "text-purple-600 font-medium" : ""
                          }`
                        }
                      >
                        Albums
                      </NavLink>
                      <NavLink
                        to="/products/artists"
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          `block py-1 text-gray-600 hover:text-purple-600 ${
                            isActive ? "text-purple-600 font-medium" : ""
                          }`
                        }
                      >
                        Artists
                      </NavLink>
                    </div>
                  )}
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `block py-2 text-gray-600 hover:text-purple-600 ${
                        isActive ? "text-purple-600 font-medium" : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li className="flex items-center space-x-4 pt-2">
                  <NavLink
                    to="/cart"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-purple-600 text-xl ${
                        isActive ? "text-purple-600" : ""
                      }`
                    }
                  >
                    <FaShoppingCart />
                  </NavLink>
                  <NavLink
                    to="/download"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-purple-600 text-xl ${
                        isActive ? "text-purple-600" : ""
                      }`
                    }
                  >
                    <FaDownload />
                  </NavLink>
                  <NavLink
                    to="/login"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-purple-600 ${
                        isActive ? "text-purple-600 font-medium" : ""
                      }`
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/profile"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `text-gray-600 hover:text-purple-600 text-xl ${
                        isActive ? "text-purple-600" : ""
                      }`
                    }
                  >
                    <FaUser />
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
