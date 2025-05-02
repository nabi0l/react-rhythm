import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';

const TrendingCarousel = () => {

    const trendingSongs = [
        {
          title: "Your Way's Better",
          artist: "Forrest Frank",
          badge: "Viral Tiktok Hit",
          image: require("../../Assets/song/your's way.jpeg"),
        },
        {
          title: "Hard Fought Hallelujah",
          artist: "Brandon Lake",
          badge: "Viral Instagram Hit",
          image: require("../../Assets/song/jelly.jpeg"),
        },
        {
          title: "Lion",
          artist: "Elevation Worship",
          badge: "Staff Pick",
          image: require("../../Assets/song/lion.avif"),
        },
        {
          title: "That's Who I Praise",
          artist: "Brandon Lake",
          badge: "Most Shared Song",
          image: require("../../Assets/song/that's who i praise.webp"),
        },
        {
          title: "In the Room",
          artist: "Tasha Cobs & Maverick City",
          badge: "Staff Pick",
          image: require("../../Assets/song/in the room.jpg"),
        },
        {
          title: "Desperate",
          artist: "Jamie MacDonald",
          badge: "Viral Tik-tok Hit",
          image: require("../../Assets/song/desperate.jpeg"),
        },
        {
          title: "The Prodigal",
          artist: "Josiah Queen",
          badge: "Viral Tik-tok/Instagram Hit",
          image: require("../../Assets/song/prodigal.jpeg"),
        },
        {
          title: "No L's",
          artist: "Forrest Frank",
          badge: "Viral Tik-tok Hit",
          image: require("../../Assets/song/nol's.webp"),
        },
        {
          title: "Nothing Else",
          artist: "Cody Carnes",
          badge: "Staff Pick",
          image: require("../../Assets/song/nothing else.jpg"),
        },
        {
          title: "Fragrance",
          artist: "Esther Oji",
          badge: "Staff pick",
          image: require("../../Assets/song/fragrance.jpeg"),
        },
        {
          title: "These Are the Days",
          artist: "Cory Asbury & Amy Grant",
          badge: "Most Shared Song",
          image: require("../../Assets/song/these are.jpg"),
        },
      ];




  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5; // Always show 5 items

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 > trendingSongs.length - visibleCount ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? trendingSongs.length - visibleCount : prevIndex - 1
    );
  };

  // Get the current visible items
  const visibleSongs = trendingSongs.slice(currentIndex, currentIndex + visibleCount);

  // If we're at the end and don't have 5 items, take from the beginning
  const displaySongs = visibleSongs.length < visibleCount 
    ? [...visibleSongs, ...trendingSongs.slice(0, visibleCount - visibleSongs.length)]
    : visibleSongs;

  return (
    <div className="carousel-layout mx-auto container py-16 px-4 sm:px-6 lg:px-8 relative">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Trending Now</h2>

      <div className="carousel-container relative">
        {/* Left Arrow */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors -ml-10"
          onClick={prevSlide}
        >
          <FaChevronLeft className="h-6 w-6 text-purple-600" />
        </button>

        {/* Carousel Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-8">
          {displaySongs.map((song) => (
            <div
              key={song.id}
              className="carousel-item w-full h-full flex flex-col"
            >
              <div className="carousel-item-content bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full flex flex-col">
                {/* Image */}
                <div className="relative w-full h-64"> {/* Fixed height here */}
                  <img
                    src={song.image}
                    alt={song.title}
                    className="w-full h-full object-cover absolute inset-0 animate-pulse"
                  />
                  {/* Badge */}
                  <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${
                    song.badge.toLowerCase().includes("tiktok") || song.badge.toLowerCase().includes("tik-tok")
                      ? "bg-black text-white"
                      : song.badge.toLowerCase().includes("instagram")
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "bg-purple-600 text-white"
                  }`}>
                    {song.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                      {song.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-1">
                      {song.artist}
                    </p>
                  </div>
                  <button className="self-end mt-2 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-colors flex-shrink-0">
                    <FaPlay className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors -mr-10"
          onClick={nextSlide}
        >
          <FaChevronRight className="h-6 w-6 text-purple-600" />
        </button>
      </div>
    </div>
  );
};

export default TrendingCarousel;