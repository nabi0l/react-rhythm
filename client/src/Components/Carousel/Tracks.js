import React from "react";
import Masonry from "react-masonry-css";
import { FaPlay, FaDownload, FaShoppingCart, FaHeart } from "react-icons/fa";

const tracks = [
  {
    id: 1,
    title: "Song Title 1",
    artist: "Artist Name",
    duration: "3:45",
    album: "Album Title 1",
    lyrics: "Sample lyrics line one...",
    cover: require("../../Assets/banner/banner4.jpg"),
  },
  {
    id: 2,
    title: "Song Title 2 ",
    artist: "Artist Name",
    duration: "4:20",
    album: "Album Title a Longer Name",
    lyrics: "Sample lyrics line one and another line for testing masonry layout...",
    cover: require("../../Assets/banner/banner4.jpg"),
  },
  
  ...Array.from({ length: 8 }, (_, i) => ({
    id: i + 3,
    title: `Song Title ${i + 3}`,
    artist: "Artist Name",
    duration: `${Math.floor(Math.random() * 2) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    album: `Album Title ${i + 3}`,
    lyrics: i % 2 === 0 
      ? "Short lyrics." 
      : "Longer lyrics to demonstrate variable card heights in the masonry layout. This will make this card taller than others.",
    cover: require("../../Assets/banner/banner4.jpg"),
  })),
];

// Masonry breakpoints (responsive columns)
const breakpointColumnsObj = {
  default: 5,
  1280: 3, 
  1024: 2, 
  640: 1,  
};

const TrackListMasonry = () => {
  return (
    <div className="mx-auto px-4 py-12 container">
      <h2 className="text-3xl font-bold text-purple-600 mb-8">Track List</h2>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex -ml-6 w-auto"
        columnClassName="pl-6"
      >
        {tracks.map((track) => (
          <div
            key={track.id}
            className="mb-6 break-inside-avoid border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <img
                  src={track.cover}
                  alt="album cover"
                  className="w-20 h-20 object-cover rounded-md"
                />
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-purple-600 line-clamp-2 break-words">
                  {track.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{track.artist}</p>

                <div className="text-xs space-y-1 text-gray-600">
                  <p>
                    <span className="font-medium">Duration:</span> {track.duration}
                  </p>
                  <p className="truncate break-all">
                    <span className="font-medium">Album:</span> {track.album}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <p className="text-sm text-gray-700 line-clamp-2 italic">
                "{track.lyrics}"
              </p>
              <button className="text-purple-500 text-xs mt-1 hover:underline">
                View Lyrics
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <button className="text-purple-600 text-sm flex items-center gap-1">
                <FaPlay className="h-4 w-4" /> Play
              </button>
              <div className="flex gap-4 text-gray-500">
                <button>
                  <FaDownload className="h-4 w-4" />
                </button>
                <button>
                  <FaShoppingCart className="h-4 w-4" />
                </button>
                <button>
                  <FaHeart className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default TrackListMasonry;