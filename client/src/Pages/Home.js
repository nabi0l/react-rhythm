import React from "react";
import { Link } from "react-router-dom";
import {
  FaMusic,
  FaUser,
  FaHeadphones,
  FaDownload,
  FaSearch,
  FaPlay,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaPen,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaArrowRight,
} from "react-icons/fa";
import "../App.css";
import HeroSlider from "../Components/HeroSlider";

import heroImage from "../Assests/hero-3.jpg";
// Import category images
import popImage from "../Assests/pop.jpg";
import contemporaryImage from "../Assests/contemporary.jpg";
import rnbImage from "../Assests/r&b.jpg";
import countryImage from "../Assests/country.jpg";
import hiphopImage from "../Assests/hymns.jpg";

const Home = () => {
  const category = [
    {
      name: "Pop Music",
      description:
        "Discover the latest hits and chart-topping hits from the pop music scene.",
      image: popImage,
      Link: "/pop",
    },
    {
      name: "Contemporary Music",
      description:
        "Discover the latest hits and chart-topping hits from the Contemporary music scene.",
      image: contemporaryImage,
      Link: "/contemporary",
    },
    {
      name: "Christian R&B Music",
      description:
        "Discover the latest hits and chart-topping hits from the R&B music scene.",
      image: rnbImage,
      Link: "/r&b",
    },
    {
      name: "Country Music",
      description:
        "Discover the latest hits and chart-topping hits from the country music scene.",
      image: countryImage,
      Link: "/country",
    },
    {
      name: "Christian Hip-Hop Music",
      description:
        "Discover the latest hits and chart-topping hits from the hip-hop music scene.",
      image: hiphopImage,
      Link: "/hip-hop",
    },
  ];

  const trendingSongs = [
    {
      title: "Praise",
      artist: "Elevation Worship",
      genre: "Contemporary Worship",
      duration: "5:05",
      image: require("../Assests/img/praise.jpeg"),
    },
    {
      title: "Mighty Name of Jesus",
      artist: "The Belonging Co",
      genre: "Christian",
      duration: "8:00",
      image: require("../Assests/img/mighty.jpg"),
    },
    {
      title: "Jireh",
      artist: "Elevation worship",
      genre: "Contemporary Worship",
      duration: "9:30",
      image: require("../Assests/img/jireh.jpg"),
    },
    {
      title: "I know Who holds Tomorrow",
      artist: "Crowder",
      genre: "Country",
      duration: "4:30",
      image: require("../Assests/img/crowder.jpg"),
    },
  ];

  const offers = [
    {
      id: 1,
      discount: "50% OFF",
      title: "Flash Sale: Top 100 Hits",
      description: "Today only! Grab the year's biggest tracks at half price.",
      timeLeft: "Ends in 5 hours",
      link: "/products?campaign=flash-sale",
    },
    {
      id: 2,
      discount: "BUY 2, GET 1 FREE",
      title: "Artist Bundle Deal",
      description: "Mix and match albums from select artists.",
      timeLeft: "Weekend special",
      link: "/products?deal=bundle",
    },
  ];

  const featuredArtists = [
    {
      name: "Elevation Worship",
      image: require("../Assests/logo/elevation-logo.png"),
      description:
        "Elevation Worship is a Contemporary Worship band that leads worship services at Elevation Church in Charlotte, North Carolina. The band is known for its blend of modern worship songs with elements of traditional hymns and gospel music.",
      link: "/elevation-worship",
    },
    {
      name: "HillSong United",
      image: require("../Assests/logo/hillsong-united.jpg"),
      description:
        "Hillsong United is a Contemporary Worship band that leads worship services at Hillsong Church in Sydney, Australia. The band is known for its blend of modern worship songs with elements of traditional hymns and gospel music.",
      link: "/hillsong-united",
    },
    {
      name: "Bethel Music",
      image: require("../Assests/logo/bethel-music.webp"),
      description:
        "Bethel Music is a Contemporary Worship band that leads Worship services at Bethel Church in Redding California. The band is known for its blend of modern worship songs with elements of traditional hymns and gospel music. ",
      link: "/bethel-music",
    },
    {
      name: "Kingdom Sound",
      image: require("../Assests/logo/kingdom_sound_logo.png"),
      description:
        "Kingdom Sound Ministry is  a Christian organization that aims to reach the youth in Ethiopia and beyond with contemporary music and biblical insights. ",
      link: "/Kingdom-sound",
    },
  ];

  const music = [
    {
      title: "Can't Steal my Joy",
      artist: "Josiah Queen",
      genre: "Alternative Pop/rock",
      duration: " 3:34",
      image: require("../Assests/song/Josiah.jpeg"),
    },
    {
      title: "I know a name",
      artist: "Chris Brown",
      genre: "Contemporary",
      duration: "7:10",
      image: require("../Assests/song/know.jpeg"),
    },
    {
      title: "The King is in the Room",
      artist: "Phil Wickham",
      genre: "Christian",
      duration: "4:03",
      image: require("../Assests/song/phil.jpeg"),
    },
    {
      title: "Hard fought Hallelujah",
      artist: "Jelly Roll",
      genre: "Pop/rock, Contemporary",
      duration: "5:32",
      image: require("../Assests/song/jelly.jpeg"),
    },
  ];

  return (
    <div className="">
      {/* Hero Slider Section */}
      <section className="hero mt-16">
        <HeroSlider />
      </section>

      {/*Featured music */}
      <div className="featured-music py-12">
        <div className="px-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4 text-justify">
            Featured Music
          </h2>
          <p className="text-gray-600 mb-8 px-4 text-justify">
            Explore the latest and most popular music from around the world.
            Discover new music and stay updated with the latest trends.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {music.map((song, index) => (
              <div
                key={index}
                className="group relative p-4 rounded-xl border border-gray-200 transition-all duration-300 hover:border-purple-200 hover:shadow-md"
              >
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={song.image}
                    alt={song.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
                      <FaPlay className="text-white text-lg pl-1" />
                    </div>
                  </div>
                </div>

                <div className="p-2">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {song.title}
                  </h3>
                  <p className="text-sm text-purple-600 truncate">
                    {song.artist}
                  </p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {song.genre}
                    </span>
                    <span className="text-xs text-gray-500">
                      {song.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center py-8">
            <button className="bg-purple-600 text-white px-4 py-2 text-xl rounded-lg hover:bg-purple-700 transition-colors">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Features categories */}
      <div className="featured-category mx-auto">
        <div className="px-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-4">
            Featured Music Categories
          </h2>
          <p className="text-gray-600 mb-8 px-4">
            Explore the latest and most popular music categories. Discover new
            music and stay updated with the latest trends. From pop to rock,
            hip-hop to electronic, we've got you covered. Click on a category to
            explore and find your favorite songs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
          {category.map((cat, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl border border-gray-200 transition-all duration-300 hover:border-purple-300 hover:shadow-md"
            >
              {/* Image with gradient overlay */}
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3 line-clamp-2">
                  {cat.description}
                </p>
                <a
                  href={cat.Link}
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium transition-colors inline-flex items-center"
                >
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Trending songs*/}
      <div className="trending-songs py-12 mx-auto">
        
        <div className="px-8 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-purple-600 mb-3">
              Top Charts
            </h2>
            <p className="text-gray-600 px-4 mb-6">
              Explore the most popular songs in the world.
            </p>
          </div>
          <div className="flex gap-2">
          
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
          {trendingSongs.map((song, index) => (
            <div
              key={index}
              className="group relative transition-all duration-200 hover:bg-gray-50 rounded-lg pb-2"
            >
              
              <div className="relative rounded-lg overflow-hidden mb-2 aspect-square">
                <img
                  src={song.image}
                  alt={song.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:brightness-75"
                />
                
                <button className="absolute inset-0 m-auto w-12 h-12 bg-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaPlay className="text-white text-lg pl-1" />
                </button>
              </div>

              <div className="px-2">
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {song.title}
                </h3>
                <p className="text-sm text-purple-600 truncate mb-1">
                  {song.artist}
                </p>
                <div className="mt-2 pt-2 border-t border-gray-200">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                      {song.genre}
                    </span>
                    <span className="text-xs text-gray-500">
                      {song.duration}
                    </span>
                  </div>
                  <div className="flex justify-end">
                    <button className="text-purple-600 hover:text-purple-800 transition-colors">
                      <FaDownload className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*special offers*/}
      <div className="special-offers py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-purple-100">
        <div className="max-w-6xl mx-auto">
         
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-2 sm:mb-3">
              Exclusive Music Deals
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
              Limited-time offers on downloads and bundles
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            
            <div className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border border-purple-100 hover:shadow-lg transition-all">
              <div className="h-32 sm:h-40 bg-gradient-to-r from-purple-500 to-blue-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
                  <span className="bg-white text-purple-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold w-fit">
                    DIGITAL DOWNLOAD
                  </span>
                  <div>
                    <span className="text-white/80 text-xs sm:text-sm">
                      FLAC Quality
                    </span>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">
                      50% Off All Singles
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">
                      Download instantly in HD
                    </p>
                    <div className="flex items-center text-xs sm:text-sm text-purple-600">
                      <FaClock className="mr-1 sm:mr-2" />
                      <span>Ends in 2 days</span>
                    </div>
                  </div>
                  <button className="bg-purple-600 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-md sm:rounded-lg hover:bg-purple-700 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
                    <FaDownload className="text-sm" /> Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden border border-purple-100 hover:shadow-lg transition-all">
              <div className="h-32 sm:h-40 bg-gradient-to-r from-pink-500 to-rose-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1413&q=80')] bg-cover bg-center opacity-20" />
                <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col justify-between">
                  <span className="bg-white text-pink-600 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold w-fit">
                    BUNDLE DEAL
                  </span>
                  <div>
                    <span className="text-white/80 text-xs sm:text-sm">
                      Best Value
                    </span>
                    <h3 className="text-white text-xl sm:text-2xl font-bold mt-1">
                      3 Albums for $20
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <p className="text-gray-600 text-sm sm:text-base mb-1 sm:mb-2">
                      Mix & match any 3 albums
                    </p>
                    <div className="flex items-center text-xs sm:text-sm text-pink-600">
                      <FaShoppingCart className="mr-1 sm:mr-2" />
                      <span>Limited stock</span>
                    </div>
                  </div>
                  <button className="bg-pink-600 text-white px-3 sm:px-5 py-1 sm:py-2 rounded-md sm:rounded-lg hover:bg-pink-700 flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base">
                    <FaShoppingCart className="text-sm" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-10">
            <button className="border-2 border-purple-600 text-purple-600 px-4 sm:px-6 py-1 sm:py-2 rounded-lg hover:bg-purple-50 font-medium text-sm sm:text-base">
              View All Offers
            </button>
          </div>
        </div>
      </div>

      {/* Why Choose Section  */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className=" mx-auto">
         
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-purple-600 mb-3 md:mb-4">
              Why Choose TuneDownloader?
            </h2>
            <p className="text-gray-600 text-base md:text-lg mx-auto ">
              Our platform boasts a user-friendly interface designed to provide
              a seamless experience for all users.
            </p>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-6">
        
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-100">
              <div className="text-purple-600 mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner">
                  <FaMusic className="text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                Wide Music Library
              </h3>
              <p className="text-gray-500 text-center">
                Explore vast collections across all genres worldwide.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-100">
              <div className="text-purple-600 mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner">
                  <FaUser className="text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                Personalized For You
              </h3>
              <p className="text-gray-500 text-center">
                Recommendations tailored to your unique taste.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-100">
              <div className="text-purple-600 mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner">
                  <FaHeadphones className="text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                Premium Quality
              </h3>
              <p className="text-gray-500 text-center">
                Crystal-clear audio with minimal buffering.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-purple-100">
              <div className="text-purple-600 mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-gradient-to-br from-purple-50 to-purple-100 shadow-inner">
                  <FaDownload className="text-2xl" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
                Instant Downloads
              </h3>
              <p className="text-gray-500 text-center">
                Get your favorites with just a few clicks.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-purple-800 text-white px-8 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium shadow-md">
              Get Started
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              Already have an account?{" "}
              <a
                href="#"
                className="text-purple-600 font-semibold hover:underline"
              >
                Sign In
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <div className="bg-white px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mb-4">
              How It Works
            </h2>
            <p className="text-gray-500 text-lg">
              Our platform is designed to provide a seamless experience for all
              users.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-white border border-purple-100 shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-purple-100 opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
                  <FaSearch className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Discover Music
                </h3>
                <p className="text-gray-600">
                  Browse our extensive catalog across all genres
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-blue-100 opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <FaMusic className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Create Playlists
                </h3>
                <p className="text-gray-600">
                  Organize favorites into personalized collections
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-green-50 to-white border border-green-100 shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-green-100 opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-green-100 text-green-600 flex items-center justify-center mb-6">
                  <FaDownload className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Download
                </h3>
                <p className="text-gray-600">
                  Get high-quality audio with one click
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-yellow-50 to-white border border-yellow-100 shadow-lg hover:shadow-xl transition-all">
              <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-yellow-100 opacity-20 group-hover:opacity-30 transition-all"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-lg bg-yellow-100 text-yellow-600 flex items-center justify-center mb-6">
                  <FaHeadphones className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Enjoy Anywhere
                </h3>
                <p className="text-gray-600">Listen across all your devices</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* featured artists */}
      <div className="featured-artist py-16 px-4 sm:px-8">
        <div className="mx-auto">
      
          <div className="text-justify mb-8">
            <h2 className="text-3xl font-bold text-purple-600 mb-3">
              Featured Artists
            </h2>
            <p className="text-gray-600 mb-2">
              Meet the artists behind the music you love and explore their
              unique stories.
            </p>

            <div className="flex justify-end gap-4 mb-4">
              <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors">
                <FaChevronLeft className="text-purple-600" />
              </button>
              <button className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors">
                <FaChevronRight className="text-purple-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredArtists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-purple-100"
              >
                <div className="relative">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {artist.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {artist.description}
                  </p>
                  <Link
                    to={artist.link}
                    className="inline-flex items-center mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-sm" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*reviews*/}
      <div className="review-section py-16 bg-gray-50">
        
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-3">
              Rate & Review Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Share your experience and help us improve our service
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            
            <div className="lg:w-1/3 bg-white rounded-xl shadow-md p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">
                  4.8
                </div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>
                <p className="text-gray-500 mb-6">Based on 1,248 reviews</p>
              </div>

              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center mb-3">
                  <span className="w-10 text-gray-600">{stars} star</span>
                  <div className="flex-1 mx-2 h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400"
                      style={{ width: `${(stars / 5) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-10 text-gray-500 text-sm">
                    {((stars / 5) * 100).toFixed(0)}%
                  </span>
                </div>
              ))}

              <button className="w-full mt-8 bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center">
                <FaPen className="mr-2" /> Write a Review
              </button>
            </div>

            {/*  User Reviews */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md p-6 h-full">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Recent Reviews
                </h3>

                <div className="space-y-6 max-h-[600px] overflow-y-auto pr-3">
                  <div className="pb-6 border-b border-gray-100">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "The music selection is amazing! I discovered so many new
                      artists through this platform."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <FaUser className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Alex Johnson</h4>
                        <p className="text-sm text-gray-500">2 days ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-6 border-b border-gray-100">
                    <div className="flex mb-3">
                      {[...Array(4)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                      <FaStar className="text-gray-300" />
                    </div>
                    <p className="text-gray-600 mb-4">
                      "Great app but sometimes the downloads take longer than
                      expected. Otherwise perfect!"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <FaUser className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Sarah Miller</h4>
                        <p className="text-sm text-gray-500">1 week ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-6 border-b border-gray-100">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "Best music service I've used. The sound quality is
                      exceptional and the app is so easy to use."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <FaUser className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Michael Chen</h4>
                        <p className="text-sm text-gray-500">3 weeks ago</p>
                      </div>
                    </div>
                  </div>

                  <div className="pb-6">
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">
                      "The curated playlists are fantastic! I find exactly what
                      I'm in the mood for every time."
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                        <FaUser className="text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-medium">Jessica Williams</h4>
                        <p className="text-sm text-gray-500">1 month ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*newsletter*/}
      <div className="newsletter py-16 px-4 sm:px-8 bg-gradient-to-r from-purple-100 to-purple-200">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-3">
              Join Our Newsletter
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Get exclusive updates, new releases, and special offers delivered
              straight to your inbox.
            </p>
          </div>

          <div className="mt-8">
            <form className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              <div className="relative w-full">
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full p-4 pr-12 rounded-lg border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 shadow-sm"
                />
                <FaEnvelope className="absolute right-4 top-1/2 transform -translate-y-1/2 text-purple-400" />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-purple-800/70">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
