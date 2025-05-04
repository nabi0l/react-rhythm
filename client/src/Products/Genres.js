import React from "react";

import "../App.css";
import { NavLink } from "react-router-dom";

import { FaYoutube, FaInstagram, FaTiktok } from "react-icons/fa";
import banner from "../Assets/banner/genre-banner.jpg";
import TrendingCarousel from "../Components/Carousel/TrendingCarousel";

const Genres = () => {
  return (
    <div className="genres min-h-screen">
      {/**hero section */}
      <div className="relative h-[300px]">
        <div className="relative h-full w-full">
          <img
            src={banner}
            alt="genre-banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8">
              Elevate Your Music Experience With Our Genre Specific PLaylists
            </h1>
          </div>
        </div>
      </div>

      {/**intro section */}
      <div className="mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold text-purple-600 mb-4">
          Discover the essence of the Genre you love
        </h2>
        <p className="text-gray-600 mb-8 container mx-auto">
          Dive into the world of worship, where you can explore a curated
          selection of songs that are sure to uplift your spirit and inspire
          your faith.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-6">
          {[
            {
              name: "Worship",
              image: require("../Assets/traditional hymns.jpg"),
              description: "Traditional hymns to contemporary worship",
              link: "/worship",
            },
            {
              name: "Gospel",
              image: require("../Assets/ab-card4.jpg"),
              description: "Soulful spirituals to urban gospel",
              link: "/gospel",
            },
            {
              name: "Christian Hip-Hop",
              image: require("../Assets/ab-1.jpg"),
              description: "Holy hip-hop to gospel rap",
              link: "/christian-hiphop",
            },
            {
              name: "CCM",
              image: require("../Assets/ab-2.jpg"),
              description: "Contemporary Christian music",
              link: "/ccm",
            },
            {
              name: "Country-Christian",
              image: require("../Assets/ab-3.jpg"),
              description: "Faith-based country music",
              link: "/christian-country",
            },
          ].map((genre) => (
            <div
              key={genre.name}
              className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={genre.image}
                  alt={`${genre.name} genre cover`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-bold text-white">{genre.name}</h3>
                  <p className="text-sm text-gray-200 mt-1 line-clamp-2">
                    {genre.description}
                  </p>
                  <NavLink
                    to={genre.link}
                    className="mt-3 inline-block bg-purple-600 hover:bg-purple-700 text-white text-sm px-3 py-2 rounded-md transition-colors"
                  >
                    Listen Now
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/** Filtering/Sorting Controls - Single Row Layout */}
      <div className="search-sort container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-row items-center gap-4 w-full">
          <div className="flex-1 min-w-0">
            <div className="relative flex-1 min-w-0">
              <input
                type="text"
                placeholder="Search genres..."
                className="w-full p-2 pl-10 pr-3 rounded-md border border-purple-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-purple-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center">
              <select className="border border-purple-300 text-purple-700 rounded-md px-3 py-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all text-sm w-full">
                <option value="all">All Genres</option>
                <option value="worship">Worship</option>
                <option value="gospel">Gospel</option>
                <option value="christian-hiphop">Christian Hip-Hop</option>
              </select>
            </div>

            <div className="flex items-center">
              <select className="border border-purple-300 text-purple-700 rounded-md px-3 py-2 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 transition-all text-sm w-full">
                <option value="newest">Newest</option>
                <option value="popularity">Popular</option>
                <option value="alphabetical">A-Z</option>
              </select>
            </div>

            <button
              className="flex items-center justify-center w-10 h-10 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
              title="Add new"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/*trending song */}
      <div className="carousel-layout mx-auto container px-4 sm:px-6 lg:px-8 relative">
        <TrendingCarousel />
      </div>

      {/**social proof integration */}
      <div className="">
        {/**testimonials */}
        <div className="testimonials">{/**strategic placement */}</div>
        {/**badges */}
        {/**ugc gallery */}
        {/**live counter*/}
      </div>

      {/*recommendation section -> based on listening history */}
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-purple-50 rounded-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-purple-600 mb-1">
              Fans of Your Favorite Genre Also Love
            </h1>
            <p className="text-gray-600">
              Discover new music that complements your favorite genres.
            </p>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-colors duration-200 shadow-sm hover:shadow-md whitespace-nowrap">
            View All Recommendations →
          </button>
        </div>

        {/* Content Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-3/4 animate-pulse"></div>
              <div className="h-3 bg-gray-100 rounded w-1/2 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Genres Section */}
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="most-popular mb-12">
          <h2 className="text-3xl font-semibold text-purple-600 mb-6">
            Most Popular Genres
          </h2>

          <div className="flex flex-wrap gap-4 mb-8">
            {[
              "CCM",
              "Gospel",
              "Christian Hip-Hop",
              "Worship",
              "Christian Rock",
            ].map((genre) => (
              <li key={genre} className="list-none">
                <NavLink
                  to={`/genre/${genre.toLowerCase().replace(/\s+/g, "-")}`}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-200 ${
                      isActive
                        ? "text-purple-600 underline underline-offset-4 decoration-2"
                        : "text-gray-600 hover:text-purple-500 no-underline"
                    }`
                  }
                >
                  {genre}
                </NavLink>
              </li>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                name: "CCM",
                image: require("../Assets/ab-5.jpg"),
                subgenres: ["Pop CCM", "Worship-Pop", "EDM-Praise"],
              },
              {
                name: "Gospel",
                image: require("../Assets/pop.jpg"),
                subgenres: [
                  "Traditional Gospel",
                  "Contemporary Gospel",
                  "Urban Gospel",
                ],
              },
              {
                name: "Christian Hip-Hop",
                image: require("../Assets/hymns.jpg"),
                subgenres: ["Holy Hip-Hop", "Gospel Rap", "Christian Trap"],
              },
              {
                name: "Genre-Blended Style",
                image: require("../Assets/hymns.jpg"),
                subgenres: ["AfroGospel", "EDM worship", "Country-Christian"],
              },
              {
                name: "Worship",
                image: require("../Assets/hymns.jpg"),
                subgenres: ["Worship"],
              },
            ].map((genre) => (
              <div
                key={genre.name}
                className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group flex flex-col"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg mb-3">
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-3">
                    <h3 className="text-lg font-semibold text-white">
                      {genre.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-auto">
                  <h4 className="text-xs font-medium text-gray-500 mb-2">
                    Popular Styles:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {genre.subgenres.map((subgenre) => (
                      <NavLink
                        key={subgenre}
                        to={`/genre/${genre.name
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${subgenre
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-xs px-2.5 py-1 bg-purple-50 rounded-full hover:bg-purple-100 text-purple-600 transition-colors"
                      >
                        {subgenre}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     

      {/* Hashtag Challenge Section */}
      {/* Social Media Challenge Hub */}
      <div className="mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Header with Platform Badges */}
          <div className="text-center mb-16">
            <div className="flex justify-center space-x-3 mb-6">
              <span className="inline-flex items-center bg-gradient-to-r from-pink-500 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
                Instagram
              </span>
              <span className="inline-flex items-center bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
                TikTok
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              #ScriptureSoundChallenge
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands creating worship content on Instagram & TikTok.
              Updated live from both platforms!
            </p>
          </div>

          {/* Real-Time Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                24.7K
              </div>
              <div className="text-gray-600">Total Posts</div>
              <div className="mt-2 flex justify-center space-x-1">
                <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                  +1.2K today
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                18.3M
              </div>
              <div className="text-gray-600">Combined Views</div>
              <div className="mt-2 flex justify-center space-x-1">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Instagram 62%
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  TikTok 38%
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                3.4K
              </div>
              <div className="text-gray-600">New Creators</div>
              <div className="mt-2 flex justify-center">
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                  +14% this week
                </span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                2d 6h
              </div>
              <div className="text-gray-600">Until Refresh</div>
              <div className="mt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Platform Tabs */}
          <div className="mb-8 border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-purple-500 text-purple-600 px-1 py-4 text-base font-medium">
                Combined Feed
              </button>
              <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-base font-medium">
                Instagram
              </button>
              <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-base font-medium">
                TikTok
              </button>
              <button className="border-b-2 border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 px-1 py-4 text-base font-medium">
                Top Creators
              </button>
            </nav>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Example Post 1 - Instagram */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative pt-[125%] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad"
                  alt="Worship post"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-to-r from-pink-500 to-orange-400 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    Instagram
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-medium">Psalm 23 Worship</div>
                  <div className="text-purple-200 text-sm">
                    @worshipcollective
                  </div>
                  <div className="flex items-center mt-2 text-white text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    2.4K
                  </div>
                </div>
              </div>
            </div>

            {/* Example Post 2 - TikTok */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative pt-[125%] bg-gray-100">
                <div className="absolute inset-0 flex items-center justify-center bg-black">
                  <svg
                    className="w-12 h-12 text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-black text-white text-xs font-bold px-2 py-1 rounded-full flex items-center">
                    <svg
                      className="w-3 h-3 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                    TikTok
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-medium">
                    Isaiah 40:31 Remix
                  </div>
                  <div className="text-purple-200 text-sm">@praisevibes</div>
                  <div className="flex items-center mt-2 text-white text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                      />
                    </svg>
                    1.7M
                  </div>
                </div>
              </div>
            </div>

            {/* Example Post 3 - Top Creator */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative pt-[125%] bg-gray-100">
                <img
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745"
                  alt="Worship leader"
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-yellow-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                    TOP CREATOR
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white font-medium">
                    Daily Worship Snippets
                  </div>
                  <div className="text-purple-200 text-sm">
                    @scripturesounds
                  </div>
                  <div className="flex items-center mt-2 text-white text-sm">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    42.8K Followers
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
              How The Challenge Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  1. Create
                </h4>
                <p className="text-gray-600">
                  Make a 15-60 second worship video with scripture for Instagram
                  Reels or TikTok
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  2. Share
                </h4>
                <p className="text-gray-600">
                  Post with #ScriptureSoundChallenge and tag @YourWorshipApp
                </p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-purple-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  3. Get Featured
                </h4>
                <p className="text-gray-600">
                  Top videos appear here and on our platform. Weekly prizes
                  awarded!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to join the movement?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Create your scripture-inspired worship content and share it with
              the community today!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center">
                Post to Instagram
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
              <button className="bg-black hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center">
                Post to TikTok
                <svg
                  className="w-5 h-5 ml-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/** Curated Picks Section */}
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8  rounded-xl">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-purple-600 mb-3">
              Handpicked Music Collections
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our specially curated playlists for every worship need -
              from staff favorites to seasonal selections.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Staff Pick */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={require("../Assets/ab-2.jpg")}
                  alt="Staff Picks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Editors' Choice
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Staff Picks
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our team's favorite worship songs this month, carefully
                      selected for powerful moments of praise.
                    </p>
                    <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors">
                      View Playlist
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Most Shared */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={require("../Assets/ab-4.jpg")}
                  alt="Most Shared"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Viral
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Most Shared
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The worship songs our community is sharing most on social
                      media this week.
                    </p>
                    <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors">
                      View Playlist
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Seasonal */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={require("../Assets/ab-4.jpg")}
                  alt="Seasonal Picks"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-6">
                  <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Seasonal
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="bg-green-100 text-green-600 w-12 h-12 rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Seasonal Worship
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Perfect playlist for this season's worship gatherings and
                      personal devotion.
                    </p>
                    <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors">
                      View Playlist
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-10">
            <button className="bg-white hover:bg-gray-50 text-purple-600 border border-purple-200 px-6 py-3 rounded-lg font-medium transition-colors shadow-sm hover:shadow-md inline-flex items-center">
              Browse All Collections
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/**multimedia presentation */}
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/**lyric visualizer */}
        <div className="lyric-visualizer"></div>
        {/**behind-scene */}
        {/**artist interview & playlist */}
        {/** Artist Interview Section */}
        <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-600 mb-6">
            Artist Interviews
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Video Player */}
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="relative pt-[56.25%]">
                {" "}
                {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                  title="Artist Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Artist Bio/Summary */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                About the Artist
              </h3>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  [Artist Name] is a renowned worship leader and songwriter
                  known for heartfelt lyrics and powerful melodies. With over a
                  decade in the Christian music industry, they've touched
                  millions with songs like "[Popular Song]" and "[Another Hit]".
                </p>
                <p className="mb-4">
                  In this interview, [Artist Name] shares their creative
                  process, spiritual journey, and the inspiration behind their
                  latest album "[Album Name]".
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Born: [Birth Date] in [Birth Place]</li>
                  <li>Years Active: [Start Year] - Present</li>
                  <li>Notable Works: [Song 1], [Song 2], [Song 3]</li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <FaYoutube className="w-6 h-6 text-purple-600 hover:text-purple-700" />
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <FaInstagram className="w-6 h-6 text-purple-600 hover:text-purple-700" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/*cta section */}
       <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Primary Column - Download Resources (Left) */}
          <div className="primary bg-gradient-to-br from-purple-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-purple-100">
            <h1 className="text-2xl font-semibold text-purple-600 mb-3">
              Discover Your Favorite Genre With Our Playlists
            </h1>
            <p className="text-gray-600 mb-5">
              Explore a curated collection of genre-specific playlists, designed
              to elevate your music experience.
            </p>
            <div className="relative group">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group-hover:translate-x-1">
                Download Now
                <span className="ml-2">↓</span>
              </button>
            </div>
          </div>

          {/* Secondary Column - Submit Content (Middle) */}
          <div className="secondary bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 transform hover:-translate-y-1 transition-transform">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl text-purple-600 font-medium mb-3 text-center">
              Contribute
            </h3>
            <p className="text-gray-600 mb-5 text-center">
              Have a favorite genre or song you'd like to see featured? Share it
              with our community!
            </p>
            <div className="space-y-3">
              <button className="w-full bg-white hover:bg-purple-50 text-purple-600 font-medium py-2 px-4 border border-purple-200 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <span>Submit Genre</span>
              </button>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <span>Submit Song</span>
              </button>
            </div>
          </div>

          {/* Tertiary Column - Support (Right) */}
          <div className="tertiary bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200">
            <div className="flex items-start mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
            </div>
            <h3 className="text-xl text-purple-600 font-medium mb-3">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-5">
              Our support team is here to assist you with any questions about
              genres, playlists, or using the platform.
            </p>
            <button className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors duration-200 group">
              Chat with Support
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">Quick links:</p>
              <ul className="space-y-2 mt-2">
                <li>
                  <a
                    href="#"
                    className="text-purple-600 hover:underline text-sm"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-purple-600 hover:underline text-sm"
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Genres;
