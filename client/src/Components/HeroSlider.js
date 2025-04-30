import React from 'react';
import Slider from 'react-slick';
import '../App.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const HeroSlider = () => {
    const slides = [
        {
            id: 1,
            title: 'Welcome to TuneDownloader',
            description: 'Download your favorite songs with ease',
            image: require('../Assests/hero-1.jpg',)  // Using require for proper image loading
        },
        {
            id: 2,
            title: 'Download your favorite songs',
            description: 'Download your favorite songs with TuneDownloader',
            image: require('../Assests/hero-2.jpg',)  
        },
        {
            id: 3,
            title: 'Download your favorite songs',
            description: 'Download your favorite songs with TuneDownloader',
            image: require('../Assests/hero-3.jpg',) 
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'ease-in-out',
        pauseOnHover: false,
        arrows: false,
        pauseOnFocus: true,
        pauseOnDotHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false
                }
            }
        ]
    };

    return (
        <div className='hero-slider'>
            <div className='container mx-auto px-4 relative mt-3'>
                <div className='slider relative'>
                    <Slider {...settings}>
                        {slides.map((slide) => (
                            <div key={slide.id} className="relative h-[60vh] min-h-[400px]">
                                {/* Background Image */}
                                <div 
                                    className='absolute inset-0 bg-cover bg-center'
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                >
                                    <div className='absolute inset-0 bg-black bg-opacity-40'></div>
                                </div>
                                
                                {/* Content */}
                                <div className='relative z-10 flex flex-col justify-center h-full px-6 text-white sm:px-12 md:px-20 lg:px-32'>
                                    <h2 className='text-3xl font-bold mb-4 sm:text-4xl md:text-5xl'>{slide.title}</h2>
                                    <p className='text-lg mb-8 sm:text-xl max-w-2xl'>{slide.description}</p>
                                    <div className="flex gap-4">
                                        <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full font-medium transition">
                                            Get Started
                                        </button>
                                        <button className="px-6 py-3 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full font-medium transition">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;