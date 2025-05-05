import React from "react";
import "../App.css";

const Artists = () => {
  return (
    <div className="min-h-screen">
      {/**hero section */}
      <div className="hero-section relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={require("../Assets/banner/album/CG-EndlessPraise-800x800.png")}
            alt="Artist Banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-white text-3xl md:text-6xl font-bold mb-4 [text-shadow:_0_2px_10px_rgba(0,0,0,0.9)]">
            ARTIST NAME
          </h1>

          <p className="text-xl text-gray-100 mb-8 max-w-2xl [text-shadow:_0_2px_6px_rgba(0,0,0,0.7)]">
            Exploring the sound of tomorrow
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg hover:shadow-purple-600/30">
              Listen Now
            </button>
            <button className="bg-white hover:bg-gray-100 text-black px-8 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg">
              Shop Merch
            </button>
          </div>
        </div>
      </div>

      {/**featured artist */}
      <div className="featured-artists py-12 px-4 sm:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Spotlight on Our Featured Artists.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing talent across different categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto">
          <div className="flex space-x-2 p-1 bg-gray-200 rounded-full">
            {["All", "Solo Singers", "Bands", "Worship Teams"].map(
              (category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                    category === "All"
                      ? "bg-black text-white"
                      : "hover:bg-gray-300"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Solo Singer Example */}
          <div className="artist-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-60">
              <img
                src={require("../Assets/banner/hero1.jpg")}
                alt="Solo Artist"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                  Solo Singer
                </span>
                <h3 className="text-white text-xl font-bold">Sarah Johnson</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">Contemporary Christian</p>
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Band Example */}
          <div className="artist-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-60">
              <img
                src={require("../Assets/banner/hero1.jpg")}
                alt="Band"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full mb-2">
                  Band
                </span>
                <h3 className="text-white text-xl font-bold">The Redeemers</h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">Rock Worship</p>
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Worship Team Example */}
          <div className="artist-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-60">
              <img
                src={require("../Assets/banner/hero1.jpg")}
                alt="Worship Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full mb-2">
                  Worship Team
                </span>
                <h3 className="text-white text-xl font-bold">
                  Grace Collective
                </h3>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 mb-3">Modern Worship</p>
              <button className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800 transition">
                View Profile
              </button>
            </div>
          </div>

          {/* Additional Artist Slot */}
          <div className="artist-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative h-60 bg-gray-200 flex items-center justify-center">
              <div className="text-center p-4">
                <svg
                  className="w-12 h-12 mx-auto text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                <p className="mt-2 text-gray-600">More Artists Coming Soon</p>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all">
            View All Artists
          </button>
        </div>
      </div>

      {/**feature music player */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-purple-600">
          Featured Music
        </h2>

        <div className="music-player bg-white rounded-xl overflow-hidden shadow-lg">
          {/* Upper Section - Featured Tracks Grid */}
          <div className="featured-tracks p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <div className="song-card group relative bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                <div className="relative z-10">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                    <img
                      src={require("../Assets/banner/hero4.jpg")}
                      alt="Album Cover"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <button className="absolute inset-0 m-auto flex items-center justify-center w-12 h-12 bg-black bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                    What A Beautiful Name
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    Hillsong Worship
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                      Live
                    </span>
                    <span className="text-xs font-medium text-purple-600">
                      $1.29
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="song-card group relative bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                <div className="relative z-10">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                    <img
                      src={require("../Assets/banner/hero4.jpg")}
                      alt="Album Cover"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <button className="absolute inset-0 m-auto flex items-center justify-center w-12 h-12 bg-black bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                    Goodness of God
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    Bethel Music
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      New
                    </span>
                    <span className="text-xs font-medium text-purple-600">
                      $1.29
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="song-card group relative bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                <div className="relative z-10">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                    <img
                      src={require("../Assets/banner/hero4.jpg")}
                      alt="Album Cover"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <button className="absolute inset-0 m-auto flex items-center justify-center w-12 h-12 bg-black bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                    O Come to the Altar
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    Elevation Worship
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Popular
                    </span>
                    <span className="text-xs font-medium text-purple-600">
                      $1.29
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="song-card group relative bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                <div className="relative z-10">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                    <img
                      src={require("../Assets/banner/hero4.jpg")}
                      alt="Album Cover"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <button className="absolute inset-0 m-auto flex items-center justify-center w-12 h-12 bg-black bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                    Reckless Love
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    Cory Asbury
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                      Trend
                    </span>
                    <span className="text-xs font-medium text-purple-600">
                      $1.29
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <div className="song-card group relative bg-gradient-to-br from-purple-50 to-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden">
                <div className="relative z-10">
                  <div className="relative mb-3 aspect-square overflow-hidden rounded-lg">
                    <img
                      src={require("../Assets/banner/hero4.jpg")}
                      alt="Album Cover"
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <button className="absolute inset-0 m-auto flex items-center justify-center w-12 h-12 bg-black bg-opacity-70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm line-clamp-1">
                    Graves Into Gardens
                  </h3>
                  <p className="text-xs text-gray-600 mb-2 line-clamp-1">
                    Brandon Lake
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      Hot
                    </span>
                    <span className="text-xs font-medium text-purple-600">
                      $1.29
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-purple-100/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>

          {/* Lower Section - Player & Most Played */}
          <div className="now-playing-section bg-gray-50 p-6 border-t border-gray-200">
            <div className="container mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Column - Media Player Card */}
                <div className="media-player-card bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">
                    Now Playing
                  </h3>
                  <div className="flex flex-col sm:flex-row gap-6">
                    <img
                      src={require("../Assets/banner/hero4.jpg")}
                      alt="Now Playing"
                      className="w-full sm:w-32 h-32 rounded-lg object-cover self-center"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900">
                        What A Beautiful Name
                      </h4>
                      <p className="text-gray-600 mb-4">Hillsong Worship</p>

                      <div className="player-controls ">
                        <div className="flex items-center gap-4 mb-3">
                          <button className="text-gray-500 hover:text-purple-600 transition">
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button className="bg-purple-600 hover:bg-purple-700 w-10 h-10 rounded-full flex items-center justify-center text-white">
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-purple-600 transition">
                            <svg
                              className="w-6 h-6"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="progress-bar bg-gray-200 rounded-full h-2 mb-1">
                          <div
                            className="bg-purple-600 h-full rounded-full"
                            style={{ width: "35%" }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>1:42</span>
                          <span>3:26</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Most Played Card */}
                <div className="most-played-card bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-bold mb-4 text-gray-800">
                    Most Played
                  </h3>

                  <div className="space-y-4 mb-4">
                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-bold w-6 text-center">
                          1
                        </span>
                        <img
                          src={require("../Assets/banner/hero4.jpg")}
                          alt="Song cover"
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Goodness of God
                          </h4>
                          <p className="text-sm text-gray-600">Bethel Music</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          24.5k
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          8.2k
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-bold w-6 text-center">
                          2
                        </span>
                        <img
                          src={require("../Assets/banner/hero4.jpg")}
                          alt="Song cover"
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            O Come to the Altar
                          </h4>
                          <p className="text-sm text-gray-600">
                            Elevation Worship
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          18.7k
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          5.9k
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition">
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400 font-bold w-6 text-center">
                          3
                        </span>
                        <img
                          src={require("../Assets/banner/hero4.jpg")}
                          alt="Song cover"
                          className="w-12 h-12 rounded-md object-cover"
                        />
                        <div>
                          <h4 className="font-medium text-gray-900">
                            Reckless Love
                          </h4>
                          <p className="text-sm text-gray-600">Cory Asbury</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                              clipRule="evenodd"
                            />
                          </svg>
                          15.2k
                        </span>
                        <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full flex items-center gap-1">
                          <svg
                            className="w-3 h-3 text-purple-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          4.7k
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex justify-center gap-4">
                    <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-purple-100 hover:text-purple-600 transition">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/**discography section artists albums or singles with cover art, release dates links to purchase or stream, include tracklist or reviews*/}
      <div className="discovery py-12 container mx-auto">
        <h2 className="text-3xl text-purple-600 text-justify mb-2 font-semibold">
          Explore Our Artists' Discography
        </h2>
        <p className="text-gray-600 text-justify mb-8">
          Browse through albums, EPs, and singles from our talented artists.
          Click on any release to explore tracks, reviews, and purchase options.
        </p>

        <div className="flex flex-wrap gap-3 mb-8">
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
            All Releases
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
            Albums
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
            singles
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
            Eps
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
            Live Recordings
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ld:grid-cols-4 gap-6">
          <div className="album-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={require("../Assets/banner/album/CG-EndlessPraise-800x800.png")}
                alt="Album Cover"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                  New Release
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">
                Endless Praise
              </h3>
              <p className="text-gray-600 mb-2">Sarah Johnson</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">
                  Released: May 2023
                </span>
                <span className="text-sm font-medium text-purple-600">
                  $12.99
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Gospel
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Contemporary
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition text-sm">
                  View Details
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="album-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={require("../Assets/banner/hero4.jpg")}
                alt="Album Cover"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  Best Seller
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">
                Grace Revealed
              </h3>
              <p className="text-gray-600 mb-2">The Redeemers</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">
                  Released: Jan 2023
                </span>
                <span className="text-sm font-medium text-purple-600">
                  $14.99
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Rock
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Worship
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition text-sm">
                  View Details
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="album-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={require("../Assets/banner/hero1.jpg")}
                alt="Album Cover"
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">
                Spirit & Truth
              </h3>
              <p className="text-gray-600 mb-2">Grace Collective</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">
                  Released: Oct 2022
                </span>
                <span className="text-sm font-medium text-purple-600">
                  $11.99
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Modern
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Worship
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition text-sm">
                  View Details
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Single */}
          <div className="album-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative">
              <img
                src={require("../Assets/banner/hero4.jpg")}
                alt="Single Cover"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                  Single
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-900">Faithful One</h3>
              <p className="text-gray-600 mb-2">Cory Asbury</p>
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm text-gray-500">
                  Released: Mar 2023
                </span>
                <span className="text-sm font-medium text-purple-600">
                  $1.99
                </span>
              </div>
              <div className="flex gap-2 mb-4">
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Acoustic
                </span>
                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                  Worship
                </span>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition text-sm">
                  View Details
                </button>
                <button className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path
                      fillRule="evenodd"
                      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/**music videos and multimedia */}
      {/**tour dates and events */}
      {/**merchandise store integration */}
      {/**social media links and feeds */}
      {/**cta buttons */}
      {/**fan engagement feature */}
      {/**press and testimonials */}
      {/**contact and booking information */}

      {/**emerging artists */}
      {/**artist collaboration */}
      {/**search functionality */}
      {/**artist profiles */}
      {/**user reviews or ratings */}
      {/**integration with music streaming */}
    </div>
  );
};

export default Artists;
