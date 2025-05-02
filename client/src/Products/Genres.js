import React from "react";

import "../App.css";
import { NavLink } from "react-router-dom";

import { FaYoutube, FaInstagram } from "react-icons/fa";
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
        <div className="testimonials">{/**stratrgic placement */}</div>
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

      {/* Hashtag Challenge Hub Section */}
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-purple-50 rounded-xl">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-1 rounded-full mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Trending Challenge</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-purple-600 mb-4">
            #ScriptureSoundChallenge
          </h2>

          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Share your favorite scripture-inspired songs and videos with the
            community. The top 3 entries each week win premium features!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
              Join Challenge
            </button>
            <button className="bg-white hover:bg-gray-50 text-purple-600 px-6 py-3 rounded-lg font-medium transition-colors border border-purple-200 shadow-sm hover:shadow-md">
              View Entries
            </button>
          </div>

          {/* Participation Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mb-10">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-purple-600">1,248</div>
              <div className="text-sm text-gray-500">Participants</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-purple-600">3.2M</div>
              <div className="text-sm text-gray-500">Views</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-2xl font-bold text-purple-600">4d</div>
              <div className="text-sm text-gray-500">Remaining</div>
            </div>
          </div>

          {/* Featured Submissions Grid */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Featured Entries
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="relative pt-[100%] bg-gray-100">
                    {/* Video Thumbnail Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-12 w-12 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="text-white font-medium">@user{item}</div>
                      <div className="text-purple-200 text-sm">
                        1{item}2 likes
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-3">
                      "This scripture has been on my heart all week..."
                    </p>
                    <button className="text-purple-600 hover:text-purple-800 text-sm font-medium flex items-center">
                      View Full Post
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
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Create</h4>
                <p className="text-gray-600 text-sm">
                  Make a video with scripture-inspired music
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Share</h4>
                <p className="text-gray-600 text-sm">
                  Post with #ScriptureSoundChallenge
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h4 className="font-medium text-gray-800 mb-2">Win</h4>
                <p className="text-gray-600 text-sm">
                  Top entries get featured and win prizes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**curated picks */}
      <div className="mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/**staff pick */}
        {/**most shared */}
        {/**seasonal */}
        <h1 className="text-2xl font-semibold text-purple-600 mb-2">
          Explore Our Curated Picks
        </h1>
        <p className="text-gray-600 mb-8">
          Discover a curated collection of genre-specific playlists, designed to
          elevate your music experience.
        </p>
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
    </div>
  );
};

export default Genres;
