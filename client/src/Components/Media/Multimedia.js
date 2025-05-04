import { useState } from 'react';
import ReactPlayer from 'react-player';
import Modal from 'react-modal';
import banner6 from '../../Assets/banner/banner6.jpg';

// Set app element for accessibility
Modal.setAppElement('#root');

const Multimedia = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentMedia, setCurrentMedia] = useState(null);

  // Sample media data
  const mediaContent = [
    {
      id: 1,
      type: 'audio',
      title: 'Worship Anthem',
      cover: banner6,
      description: 'Our latest worship single'
    },
    {
      id: 2,
      type: 'video',
      title: 'Lyric Video - Grace Abounds',
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      cover: banner6,
      description: 'Official lyric video'
    },
    {
      id: 3,
      type: 'video',
      title: 'Live Performance Clip',
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      cover: banner6,
      description: 'From our 2023 concert'
    },
    {
      id: 4,
      type: 'video',
      title: 'Behind the Scenes',
      src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      cover: banner6,
      description: 'Making of our album'
    }
  ];

  // Modal control functions
  const openModal = (mediaItem) => {
    setCurrentMedia(mediaItem);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentMedia(null);
  };

  return (
    <div className="mx-auto container py-12 px-4">
      <h2 className="text-3xl font-semibold text-purple-600 text-justify mb-6">
        Behind the Music: A Multimedia Experience
      </h2>
      <p className="text-gray-600 mb-6 text-justify">
      Immerse yourself in our vibrant multimedia experience where you can explore a variety of content that brings our music to life.
      
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {mediaContent.map((item) => (
          <div 
            key={item.id}
            className='p-4 border border-purple-200 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 group cursor-pointer'
            onClick={() => openModal(item)}
          >
            <div className='relative aspect-square overflow-hidden rounded-lg mb-3'>
              <img 
                src={item.cover} 
                alt={item.title} 
                className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white/80 rounded-full p-3">
                  {item.type === 'audio' ? (
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 rounded-b-md">
                <p className='text-white font-medium truncate'>{item.title}</p>
                <p className='text-purple-200 text-sm truncate'>{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
        contentLabel="Media Player"
      >
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-purple-600 z-10"
        >
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        
        {currentMedia && (
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-purple-600 mb-4">{currentMedia.title}</h3>
            <div className="aspect-video bg-black rounded-lg overflow-hidden">
              {currentMedia.type === 'audio' ? (
                <div className="h-full flex items-center justify-center bg-gray-900">
                  <div className="text-center p-6">
                    <img 
                      src={currentMedia.cover} 
                      alt={currentMedia.title} 
                      className="w-48 h-48 object-cover rounded-lg mx-auto mb-4"
                    />
                    <audio controls className="w-full max-w-md mx-auto">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              ) : (
                <ReactPlayer 
                  url={currentMedia.src}
                  width="100%"
                  height="100%"
                  controls={true}
                />
              )}
            </div>
            <p className="mt-4 text-gray-600">{currentMedia.description}</p>
          </div>
        )}
      </Modal>

      <style jsx global>{`
        .modal {
          position: absolute;
          top: 50%;
          left: 50%;
          right: auto;
          bottom: auto;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 0;
          border-radius: 0.5rem;
          max-width: 90%;
          width: 800px;
          outline: none;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.75);
          z-index: 1000;
        }
      `}</style>
    </div>
  );
};

export default Multimedia;