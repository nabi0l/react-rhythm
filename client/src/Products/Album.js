import React from "react";
import {
  FaShoppingCart,
  FaHeart,
  FaEye,
  FaHeadphones,
  FaPlay,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaChurch,
  FaQuoteLeft,
  FaCompactDisc,
  FaDownload,
  FaApple,
  FaAmazon,
  FaBandcamp,
  FaSpotify,
  FaYoutube,
  FaDeezer,
  FaGift,
} from "react-icons/fa";
import AlbumCarousel from "../Components/Carousel/AlbumCarousel";
import TrackListMasonry from "../Components/Carousel/Tracks";
import Multimedia from "../Components/Media/Multimedia";
import { NavLink } from "react-router-dom";

const Album = () => {
  return (
    <div className="min-h-screen">
      {/**album overview */}
      <div className="hero relative h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={require("../Assets/banner/album/Tauren-Wells-Let-The-Church-Sing-700x700.png")}
            alt="album-cover"
            className="w-full h-full object-cover blur-sm scale-105 "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="w-64 md:w-80 lg:w-96 flex-shrink-0 transform transition-all hover:scale-105">
              <img
                src={require("../Assets/banner/album/Tauren-Wells-Let-The-Church-Sing-700x700.png")}
                alt="album-cover"
                className="rounded-xl shadow-2xl ring-2 ring-white/10"
              />
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                Let The Church Sing
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                Tauren Wells
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-gray-300 mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < 4 ? "text-yellow-400" : "text-gray-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2">4.2</span>
                </div>
                <span>•</span>
                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Christian Worship
                </span>
                <span>•</span>
                <span>2025</span>
              </div>

              <p className="text-lg text-gray-300 italic mb-8 max-w-2xl mx-auto lg:mx-0">
                "Inspired By the historic launch of His Church of White-stone,
                Wells Delivers a collection of songs that are sure to uplift and
                inspire the church to sing His praises."
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Play Samples
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:purple-700 text-white px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-purple-500/30">
                  Buy $9.99
                </button>
                <button className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-full transition-all flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  Add to Wishlist
                </button>
              </div>

              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-400">
                <div>
                  <span className="block font-medium text-gray-300">
                    Release Date
                  </span>
                  <span>March 21, 2025</span>
                </div>
                <div>
                  <span className="block font-medium text-gray-300">
                    Tracks
                  </span>
                  <span>5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**new release */}
      <div className="container mx-auto py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-purple-600">New Release</h2>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors">
            See All
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3 animate-pulse">
              <img
                src={require("../Assets/banner/banner1.jpg")}
                alt="album cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="bg-white text-black px-3 py-1 rounded-full font-medium flex items-center gap-1 text-sm">
                  <FaEye className="w-4 h-4" />
                  Quick View
                </span>
              </button>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-2">2024</p>
              <div className="flex justify-between items-center mt-auto mb-2">
                <span className="text-md font-bold text-gray-900">$9.99</span>
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <FaHeart className="h-4 w-4" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                View Album
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3 animate-pulse">
              <img
                src={require("../Assets/banner/banner1.jpg")}
                alt="album cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="bg-white text-black px-3 py-1 rounded-full font-medium flex items-center gap-1 text-sm">
                  <FaEye className="w-4 h-4" />
                  Quick View
                </span>
              </button>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>

              <p className="text-xs text-gray-500 mb-2">2024</p>

              <div className="flex justify-between items-center mt-auto mb-2">
                <span className="text-md font-bold text-gray-900">$9.99</span>{" "}
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <FaHeart className="h-4 w-4" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                View Album
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3 animate-pulse">
              <img
                src={require("../Assets/banner/banner1.jpg")}
                alt="album cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="bg-white text-black px-3 py-1 rounded-full font-medium flex items-center gap-1 text-sm">
                  <FaEye className="w-4 h-4" />
                  Quick View
                </span>
              </button>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>

              <p className="text-xs text-gray-500 mb-2">2024</p>

              <div className="flex justify-between items-center mt-auto mb-2">
                <span className="text-md font-bold text-gray-900">$9.99</span>

                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <FaHeart className="h-4 w-4" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                View Album
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative w-full h-48 overflow-hidden rounded-lg mb-3 animate-pulse">
              <img
                src={require("../Assets/banner/banner1.jpg")}
                alt="album cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/30">
                <span className="bg-white text-black px-3 py-1 rounded-full font-medium flex items-center gap-1 text-sm">
                  <FaEye className="w-4 h-4" />
                  Quick View
                </span>
              </button>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-2">2024</p>
              <div className="flex justify-between items-center mt-auto mb-2">
                <span className="text-md font-bold text-gray-900">$9.99</span>
                <div className="flex gap-2">
                  <button className="text-gray-500 hover:text-red-500 transition-colors">
                    <FaHeart className="h-4 w-4" />
                  </button>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <button className="w-full py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                View Album
              </button>
            </div>
          </div>
        </div>
        {/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={require("../Assets/banner/banner2.jpg")}
                alt="album-cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaHeart className="w-4 h-4" />
                </button>
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-3">2024</p>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-md font-bold text-gray-900">
                    $12.99
                  </span>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={require("../Assets/banner/banner2.jpg")}
                alt="album-cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaHeart className="w-4 h-4" />
                </button>
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-3">2024</p>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-md font-bold text-gray-900">
                    $12.99
                  </span>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={require("../Assets/banner/banner2.jpg")}
                alt="album-cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaHeart className="w-4 h-4" />
                </button>
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-3">2024</p>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-md font-bold text-gray-900">
                    $12.99
                  </span>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={require("../Assets/banner/banner2.jpg")}
                alt="album-cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaHeart className="w-4 h-4" />
                </button>
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-3">2024</p>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-md font-bold text-gray-900">
                    $12.99
                  </span>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-[1.02] group h-full flex flex-col">
            <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
              <img
                src={require("../Assets/banner/banner2.jpg")}
                alt="album-cover"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaHeart className="w-4 h-4" />
                </button>
                <button className="bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-md transition-colors">
                  <FaShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="px-2 flex-grow flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 truncate">
                Album Title
              </h3>
              <p className="text-sm text-gray-600 mb-1">Artist Name</p>
              <p className="text-xs text-gray-500 mb-3">2024</p>

              <div className="mt-auto">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-md font-bold text-gray-900">
                    $12.99
                  </span>
                  <button className="text-gray-500 hover:text-blue-600 transition-colors">
                    <FaEye className="w-4 h-4" />
                  </button>
                </div>
                <button className="w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/**purchase and streaming options buy links, streaming links, bundle offers */}
      <div className="container mx-auto bg-purple-50 py-12 px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-purple-600">
            Purchase & Streaming Options
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Choose how you'd like to experience this worship album - physical
            copies, digital downloads, or streaming.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100 hover:shadow-lg transition-all">
            <div className="bg-purple-600 p-4 text-white text-center">
              <FaCompactDisc className="inline-block text-3xl mb-2" />
              <h3 className="text-xl font-bold">Physical Album</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-3 mb-6">
                <li className="flex justify-between py-2 border-b border-purple-50">
                  <span>Standard CD</span>
                  <span className="font-bold text-purple-600">$12.99</span>
                </li>
                <li className="flex justify-between py-2 border-b border-purple-50">
                  <span>Deluxe Edition (CD+Booklet)</span>
                  <span className="font-bold text-purple-600">$16.99</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Vinyl Record</span>
                  <span className="font-bold text-purple-600">$24.99</span>
                </li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                <FaShoppingCart /> Purchase Now
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                Free shipping on orders over $30
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100 hover:shadow-lg transition-all">
            <div className="bg-purple-600 p-4 text-white text-center">
              <FaDownload className="inline-block text-3xl mb-2" />
              <h3 className="text-xl font-bold">Digital Download</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-6">
                {[
                  {
                    platform: "iTunes",
                    icon: <FaApple className="text-gray-800" />,
                    price: "$9.99",
                  },
                  {
                    platform: "Amazon Music",
                    icon: <FaAmazon className="text-blue-600" />,
                    price: "$9.99",
                  },
                  {
                    platform: "Bandcamp",
                    icon: <FaBandcamp className="text-teal-500" />,
                    price: "$10.99",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-purple-50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{item.icon}</span>
                      <span className="font-medium">{item.platform}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-purple-600">
                        {item.price}
                      </span>
                      <button className="text-purple-600 hover:text-purple-800">
                        <FaChevronRight />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full border-2 border-purple-600 text-purple-700 hover:bg-purple-50 py-3 rounded-lg font-medium transition-colors">
                View All Download Options
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-purple-100 hover:shadow-lg transition-all">
            <div className="bg-purple-600 p-4 text-white text-center">
              <FaHeadphones className="inline-block text-3xl mb-2" />
              <h3 className="text-xl font-bold">Streaming & Bundles</h3>
            </div>
            <div className="p-6">
              <h4 className="font-bold text-gray-800 mb-3">Stream Now</h4>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  {
                    name: "Spotify",
                    icon: <FaSpotify className="text-green-500" />,
                  },
                  {
                    name: "Apple Music",
                    icon: <FaApple className="text-gray-800" />,
                  },
                  {
                    name: "YouTube Music",
                    icon: <FaYoutube className="text-red-500" />,
                  },
                  {
                    name: "Deezer",
                    icon: <FaDeezer className="text-blue-400" />,
                  },
                ].map((platform, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center justify-center gap-2 p-2 bg-gray-50 hover:bg-purple-50 rounded-md transition-colors"
                  >
                    <span className="text-xl">{platform.icon}</span>
                    <span className="text-sm">{platform.name}</span>
                  </a>
                ))}
              </div>

              <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 mb-4">
                <div className="flex items-start gap-3">
                  <FaGift className="text-purple-700 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-purple-800">
                      Church Worship Bundle
                    </h4>
                    <p className="text-sm text-gray-700 mb-2">
                      5 CDs + Streaming License + Chord Charts
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-purple-700">
                        $49.99
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        $75.00
                      </span>
                      <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                        33% OFF
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-3 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md text-sm transition-colors">
                  Get This Bundle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**track list with details[song titles,album Title,duration,preview clips,lyrics,songwriter& composers, scripture reference live vs studio] */}
      <div className="mx-auto px-4 container">
        <TrackListMasonry />
      </div>

      {/**multimedia content Embed music player, lyric videos, or live performance clips, behind scene*/}
      <div className="mx-auto container ">
        <Multimedia />
      </div>

      {/**genre nav list */}
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-purple-600 text-justify">
          Browse By Genre
        </h2>
        <div className="flex flex-wrap justify-around gap-3">
          {[
            {
              name: "CCM",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              ),
              desc: "Contemporary Christian",
            },
            {
              name: "Gospel",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              ),
              desc: "Soulful spirituals",
            },
            {
              name: "Worship/Praise",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              ),
              desc: "Vertical praise",
            },
            {
              name: "Traditional Hymns",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 4v16M4 7h10M4 14h10"
                  />
                </svg>
              ),
              desc: "Traditional hymns",
            },
            {
              name: "Christian Hip-Hop",
              icon: <FaHeadphones className="h-5 w-5 text-purple-600" />,
              desc: "Holy hip-hop",
            },
            {
              name: "Christian Rock",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              desc: "Rock",
            },
            {
              name: "Christian Country",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              desc: "Country",
            },
          ].map((genre) => (
            <NavLink
              key={genre.name}
              to={`/genre/${genre.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group flex flex-col items-center p-4 w-36 text-center border border-purple-100 rounded-lg hover:border-purple-300 hover:bg-purple-50 transition-colors"
            >
              <div className="p-2 mb-2 text-purple-600 group-hover:text-purple-800">
                {genre.icon}
              </div>
              <h3 className="font-medium text-gray-800">{genre.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{genre.desc}</p>
            </NavLink>
          ))}
        </div>
      </div>

      {/**best sellers */}
      <div className="container mx-auto px-8 py-12 bg-purple-50">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold text-purple-600 pb-6">
            Best Sellers
          </h2>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors">
              <FaChevronLeft className="h-5 w-5 text-purple-600" />
            </button>
            <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors">
              <FaChevronRight className="h-5 w-5 text-purple-600" />
            </button>
          </div>
        </div>

        {/* Inline List Layout */}
        <div className="space-y-4">
          {/* Item 1 */}
          <div className="relative p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-all group hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-shrink-0 w-full sm:w-32 h-32 rounded-md overflow-hidden">
                <img
                  src={require("../Assets/banner/banner3.jpg")}
                  alt="Album Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />

                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  #1
                </span>
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-700">
                  Album Title
                </h3>
                <p className="text-sm text-purple-500">Artist Name</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  "Uplifting worship songs that inspire faith. Perfect for
                  church gatherings."
                </p>

                <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-md font-bold text-gray-800">
                    $12.99
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-purple-600 hover:text-red-500 transition-colors">
                      <FaHeart className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-purple-600 hover:text-blue-600 transition-colors">
                      <FaShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hidden "Spotlight" Panel (expands on hover) */}
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-16 bg-gradient-to-t from-white to-purple-50/80 overflow-hidden transition-all duration-300 flex items-end justify-center pb-2">
              <button className="flex items-center gap-1 text-purple-600 font-medium text-sm">
                <FaPlay className="h-3 w-3" /> Listen to Samples
              </button>
            </div>
          </div>

          {/* Item 2 (repeat structure) */}
          <div className="relative p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-all group hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-shrink-0 w-full sm:w-32 h-32 rounded-md overflow-hidden">
                <img
                  src={require("../Assets/banner/banner2.jpg")}
                  alt="Album Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  #2
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-700">
                  Album Title
                </h3>
                <p className="text-sm text-purple-500">Artist Name</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  "Powerful lyrics and contemporary melodies for modern
                  worship."
                </p>
                <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-md font-bold text-gray-800">
                    $11.99
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-purple-600 hover:text-red-500 transition-colors">
                      <FaHeart className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-purple-600 hover:text-blue-600 transition-colors">
                      <FaShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-16 bg-gradient-to-t from-white to-purple-50/80 overflow-hidden transition-all duration-300 flex items-end justify-center pb-2">
              <button className="flex items-center gap-1 text-purple-600 font-medium text-sm">
                <FaPlay className="h-3 w-3" /> Listen to Samples
              </button>
            </div>
          </div>

          <div className="relative p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-all group hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-shrink-0 w-full sm:w-32 h-32 rounded-md overflow-hidden">
                <img
                  src={require("../Assets/banner/banner2.jpg")}
                  alt="Album Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  #3
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-700">
                  Album Title
                </h3>
                <p className="text-sm text-purple-500">Artist Name</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  "Powerful lyrics and contemporary melodies for modern
                  worship."
                </p>
                <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-md font-bold text-gray-800">
                    $11.99
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-purple-600 hover:text-red-500 transition-colors">
                      <FaHeart className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-purple-600 hover:text-blue-600 transition-colors">
                      <FaShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-16 bg-gradient-to-t from-white to-purple-50/80 overflow-hidden transition-all duration-300 flex items-end justify-center pb-2">
              <button className="flex items-center gap-1 text-purple-600 font-medium text-sm">
                <FaPlay className="h-3 w-3" /> Listen to Samples
              </button>
            </div>
          </div>

          <div className="relative p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-all group hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-shrink-0 w-full sm:w-32 h-32 rounded-md overflow-hidden">
                <img
                  src={require("../Assets/banner/banner2.jpg")}
                  alt="Album Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  #4
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-700">
                  Album Title
                </h3>
                <p className="text-sm text-purple-500">Artist Name</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  "Powerful lyrics and contemporary melodies for modern
                  worship."
                </p>
                <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-md font-bold text-gray-800">
                    $11.99
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-purple-600 hover:text-red-500 transition-colors">
                      <FaHeart className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-purple-600 hover:text-blue-600 transition-colors">
                      <FaShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-16 bg-gradient-to-t from-white to-purple-50/80 overflow-hidden transition-all duration-300 flex items-end justify-center pb-2">
              <button className="flex items-center gap-1 text-purple-600 font-medium text-sm">
                <FaPlay className="h-3 w-3" /> Listen to Samples
              </button>
            </div>
          </div>

          <div className="relative p-4 bg-white rounded-lg border border-purple-100 hover:border-purple-300 transition-all group hover:shadow-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-shrink-0 w-full sm:w-32 h-32 rounded-md overflow-hidden">
                <img
                  src={require("../Assets/banner/banner2.jpg")}
                  alt="Album Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                  #5
                </span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-purple-700">
                  Album Title
                </h3>
                <p className="text-sm text-purple-500">Artist Name</p>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  "Powerful lyrics and contemporary melodies for modern
                  worship."
                </p>
                <div className="mt-3 flex items-center justify-between flex-wrap gap-2">
                  <span className="text-md font-bold text-gray-800">
                    $11.99
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-purple-600 hover:text-red-500 transition-colors">
                      <FaHeart className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-purple-600 hover:text-blue-600 transition-colors">
                      <FaShoppingCart className="h-4 w-4" />
                    </button>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-16 bg-gradient-to-t from-white to-purple-50/80 overflow-hidden transition-all duration-300 flex items-end justify-center pb-2">
              <button className="flex items-center gap-1 text-purple-600 font-medium text-sm">
                <FaPlay className="h-3 w-3" /> Listen to Samples
              </button>
            </div>
          </div>
        </div>
      </div>

      {/**worship and usage context worship-style,recommended use, church licensing info*/}

      {/** Seasonal Collection/Themed Albums */}
      <div className="container mx-auto py-12 px-4">
        <div className="mx-auto ">
          <h2 className="text-3xl font-bold text-purple-600 text-justify pb-6">
            Seasonal Collections: Celebrate Every Moment
          </h2>
        </div>
        {/* 2025 Collections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 sticky top-0 bg-white py-2 z-10">
            2025 Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <span className="text-purple-600 font-semibold">Spring</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Spring Awakening
                </h3>
                <p className="text-gray-600 text-sm mt-2">March - May 2025</p>
                <img
                  src={require("../Assets/banner/banner7.jpg")}
                  alt="Spring Collection"
                  className="w-full h-40 object-cover mt-3 rounded"
                />
                <button className="mt-4 w-full py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition">
                  View Songs
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <span className="text-blue-600 font-semibold">Summer</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Summer Vibes
                </h3>
                <p className="text-gray-600 text-sm mt-2">June - August 2025</p>
                <img
                  src={require("../Assets/banner/banner7.jpg")}
                  alt="Summer Collection"
                  className="w-full h-40 object-cover mt-3 rounded"
                />
                <button className="mt-4 w-full py-2 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                  View Songs
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <span className="text-orange-600 font-semibold">Fall</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Harvest Praise
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  September - November 2025
                </p>
                <img
                  src={require("../Assets/banner/banner7.jpg")}
                  alt="Fall Collection"
                  className="w-full h-40 object-cover mt-3 rounded"
                />
                <button className="mt-4 w-full py-2 bg-orange-100 text-orange-700 rounded-md hover:bg-orange-200 transition">
                  View Songs
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <span className="text-blue-400 font-semibold">Winter</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  Advent Reflections
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  December 2025 - February 2026
                </p>
                <img
                  src={require("../Assets/banner/banner7.jpg")}
                  alt="Winter Collection"
                  className="w-full h-40 object-cover mt-3 rounded"
                />
                <button className="mt-4 w-full py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition">
                  View Songs
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2024 Collections (Collapsible) */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 sticky top-0 bg-white py-2 z-10">
            2024 Collections
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <span className="text-purple-600 font-semibold">Spring</span>
                <h3 className="text-xl font-bold text-gray-800 mt-1">
                  New Beginnings
                </h3>
                <p className="text-gray-600 text-sm mt-2">March - May 2024</p>
                <img
                  src={require("../Assets/banner/banner5.jpg")}
                  alt="Spring 2024 Collection"
                  className="w-full h-40 object-cover mt-3 rounded"
                />
                <button className="mt-4 w-full py-2 bg-purple-100 text-purple-700 rounded-md hover:bg-purple-200 transition">
                  View Songs
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**related albums and artists recommendations, cross-promotions */}
      <div className="container mx-auto py-12">
        <AlbumCarousel />
      </div>

      {/**social proof and engagement- user reviews&ratings, testimonials, usage stats/ feedback from worship leaders, quotes about the album , played in churches*/}
      <div className="container mx-auto px-8 py-12 bg-purple-50">
        <h2 className="text-3xl font-bold text-purple-600 pb-6 text-center md:text-left">
          Real Voices, Real Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-all">
            <div className="flex items-start gap-4">
              <img
                src={require("../Assets/ab-1.jpg")}
                alt="Pastor John"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-gray-600 italic mb-3">
                  “These songs transformed our Sunday services. The congregation
                  connects deeply with the lyrics.”
                </p>
                <p className="font-bold text-purple-700">— Pastor John Smith</p>
                <p className="text-sm text-gray-500">
                  First Baptist Church, Anytown
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 w-4 h-4" />
              ))}
              <span className="text-sm text-gray-600 ml-2">5.0</span>
            </div>
          </div>

          <div className="bg-purple-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="text-center">
              <FaChurch className="mx-auto h-8 w-8 mb-4 opacity-80" />
              <h3 className="text-2xl font-bold mb-2">1,200+ Churches</h3>
              <p className="text-purple-100">
                Using these songs in weekly worship
              </p>
            </div>
            <div className="mt-6 flex justify-between border-t border-purple-400 pt-4">
              <div className="text-center">
                <p className="text-3xl font-bold">45K+</p>
                <p className="text-xs">Streams</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold">8.2K</p>
                <p className="text-xs">Albums Sold</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md group hover:shadow-lg transition-all">
            <div className="relative">
              <img
                src={require("../Assets/banner/banner3.jpg")}
                alt="Worship Team"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <FaPlay className="text-white h-10 w-10" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-3">
                “Our youth group loves the energy of these tracks!”
              </p>
              <p className="text-purple-700 font-medium">
                — Sarah Johnson, Worship Leader
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg shadow-inner border border-purple-100">
          <h3 className="text-lg font-semibold text-purple-700 mb-4 text-center">
            Featured In
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {["Worship Today", "Gospel Music Magazine", "Church Sound Pro"].map(
              (name) => (
                <div
                  key={name}
                  className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <FaQuoteLeft className="text-purple-300 h-5 w-5" />
                  <span className="text-gray-700 font-medium">{name}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      {/**technical and accessibility features*/}
    </div>
  );
};

export default Album;
