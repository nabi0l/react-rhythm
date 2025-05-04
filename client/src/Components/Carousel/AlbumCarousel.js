import { useState } from 'react';

const AlbumCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const albumsPerPage = 4; // 4-column layout

  // Sample album data (ensure total is divisible by 4 for even paging)
  const albums = [
    { id: 1, title: "Studio Albums", artist: "Ocean Waves", image: require('../../Assets/banner/banner7.jpg') },
    { id: 2, title: "Live Albums", artist: "City Lights", image: require('../../Assets/banner/banner7.jpg') },
    { id: 3, title: "Compilations", artist: "Nature Sounds", image: require('../../Assets/banner/banner7.jpg') },
    { id: 4, title: "Soundtracks", artist: "Neon Beats", image: require('../../Assets/banner/banner7.jpg') },
    { id: 5, title: "Concept Albums", artist: "Golden Era", image: require('../../Assets/banner/banner7.jpg') },
    { id: 6, title: "EP Releases", artist: "Short Form", image: require('../../Assets/banner/banner7.jpg') },
    { id: 7, title: "Limited Editions", artist: "Collectors", image: require('../../Assets/banner/banner7.jpg') },
    { id: 8, title: "Collaborations", artist: "Various", image: require('../../Assets/banner/banner7.jpg') }
  ];

  const totalPages = Math.ceil(albums.length / albumsPerPage);
  const visibleAlbums = albums.slice(currentIndex, currentIndex + albumsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + albumsPerPage >= albums.length ? 0 : prev + albumsPerPage
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev - albumsPerPage < 0 ? 
      albums.length - albumsPerPage : 
      prev - albumsPerPage
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-justify mb-10">
        <h2 className="text-3xl font-bold text-purple-600 mb-2">Related Albums</h2>
        <p className="text-gray-600 text-lg">Explore other albums that might interest you</p>
      </div>

      <div className="relative">
        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8">
          {visibleAlbums.map((album) => (
            <div 
              key={album.id}
              className="group bg-white rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-purple-100 border border-transparent"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={album.image} 
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 truncate">{album.title}</h3>
                <p className="text-gray-500 text-sm mt-1 truncate">{album.artist}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {albums.length > albumsPerPage && (
          <>
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white hover:bg-purple-50 rounded-full p-2 shadow-lg z-10 border border-gray-200 transition-colors"
              aria-label="Previous albums"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white hover:bg-purple-50 rounded-full p-2 shadow-lg z-10 border border-gray-200 transition-colors"
              aria-label="Next albums"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Dot Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index * albumsPerPage)}
                  className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                    currentIndex === index * albumsPerPage 
                      ? 'bg-purple-600 w-6' 
                      : 'bg-gray-300 w-3 hover:w-4'
                  }`}
                  aria-label={`Page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlbumCarousel;