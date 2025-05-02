import React from "react";
import "../App.css";

import {
  FaUserCircle,
  FaMusic,
  FaCode,
  FaHeadphones,
  FaTwitter,
  FaGithub,
  FaSpotify,
  FaSoundcloud,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import CountUp from "react-countup";
import aboutCard from "../Assets/ab-card.jpg";
import banner from "../Assets/ab-5.jpg";
const About = () => {
  const year = new Date().getFullYear();
  return (
    <div className="min-h-screen ">
      {/*banner section */}
      <div className="hero-section relative h-[80vh] min-h-[500px] max-h-[800px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={banner}
            alt="Music Studio"
            className="w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="px-6 sm:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Experience Music <br className="hidden sm:block" /> Like Never
              Before
            </h1>
            <p className="text-lg sm:text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We are a team of music lovers who are passionate about music and
              we are here to provide you with the best music experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-700 px-8 py-3 rounded-full font-bold hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
                Start Listening Now
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition-all transform hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="about-section">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto container">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
              About Us
            </h2>
            <p className="text-gray-600 text-center mb-8 text-lg">
              Welcome to TuneDownloader, your ultimate destination for all your
              music needs. Our platform is designed to provide music lovers with
              an extensive library of songs and albums across various genres and
              artists ensuring that you can find your favorite music here. With
              user-friendly interface and personalized music recommendations, we
              aim to make your music journey seamless and enjoyable.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-purple-600 font-bold text-lg mb-2">
                    Our Mission
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Our mission is to provide the best music experience to the
                    users. At{" "}
                    <span className="font-semibold">TuneDownloader</span>, we
                    strive to curate a diverse and high-quality music library
                    that caters to all musical preferences.
                  </p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-purple-600 font-bold text-lg mb-2">
                    Our Vision
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Our vision is to be the leading music platform that provides
                    the best music experience to the users. We aim to
                    continuously improve our platform to meet the evolving needs
                    of our users.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-purple-600 font-bold text-lg mb-2">
                    Our Commitment
                  </h3>
                  <p className="text-gray-600 text-justify">
                    We are committed to providing the best music experience to
                    the users. We are always looking for new ways to improve our
                    platform.
                  </p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <h3 className="text-purple-600 font-bold text-lg mb-2">
                    Our Team
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Our team is a group of music lovers who are passionate about
                    music and we are here to provide you with the best music
                    experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*our  story section */}
      <div className="about-section">
        <section className=" py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-purple-600">
              Our Story
            </h2>
            <p className="text-gray-600 text-center mb-8">
              The story our journey to create a music platform that is not only
              a music platform but a music experience. We are a team of music
              lovers who are passionate about music and we are here to provide
              you with the best music experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Founding Moment Card */}
              <div className="bg-white p-6 rounded-lg border-2 border-purple-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={aboutCard}
                    alt="about card"
                    className="w-24 h-24 rounded-lg object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold text-purple-600 mb-2">
                    Founding Moment
                  </h3>
                  <p className="text-gray-600">
                    TuneDownloader was founded in {year} by a group of music
                    lovers who are passionate about music with a vision to
                    provide the best music experience to the users.
                  </p>
                </div>
              </div>

              {/* Key Milestones Card */}
              <div className="bg-white p-6 rounded-lg border-2 border-purple-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={aboutCard}
                      alt="about card"
                      className="w-24 h-24 rounded-lg object-cover mb-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-purple-600 mb-2">
                    Key Milestones
                  </h3>
                  <p className="text-gray-600 text-justify">
                    We have been able to provide the best music experience to
                    the users and we are proud of it. It has been a journey of
                    ups and downs but we have been able to overcome all the
                    challenges and we are proud of it.
                  </p>
                </div>
              </div>

              {/* Challenges Overcome Card */}
              <div className="bg-white p-6 rounded-lg border-2 border-purple-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={aboutCard}
                      alt="about card"
                      className="w-24 h-24 rounded-lg object-cover mb-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-purple-600 mb-2">
                    Challenges Overcome
                  </h3>
                  <ul className="text-gray-600 text-justify list-disc pl-5 space-y-1">
                    <li>Scaled infrastructure for growth</li>
                    <li>Improved download speeds by 300%</li>
                    <li>Enhanced audio quality</li>
                    <li>Expanded music library</li>
                  </ul>
                </div>
              </div>

              {/* Future Vision Card */}
              <div className="bg-white p-6 rounded-lg border-2 border-purple-600 shadow-md hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <img
                      src={aboutCard}
                      alt="about card"
                      className="w-24 h-24 rounded-lg object-cover mb-4"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-purple-600 mb-2">
                    Future Vision
                  </h3>
                  <p className="text-gray-600 text-justify">
                    Expanding to more countries, adding podcast support, and
                    developing AI-powered music recommendations to enhance user
                    experience. We are always looking for new ways to improve
                    the music experience for the users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/*why we are different section */}
      <div className="why-section bg-gray-50">
        <section className="py-16 px-4 sm:px-6 lg:px-8 container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-4">
              Why We Are Different
            </h2>
            <p className="text-gray-600 text-lg mx-auto">
              We are different from other music platforms because we believe
              that music is more than just a song—it's an emotion, a feeling, a
              story. At TuneDownloader, we're not just a music platform, we're a
              music experience.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Image */}
            <div className="rounded-lg overflow-hidden npr-8">
              <img
                src={aboutCard}
                alt="Music experience"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 pl-8">
              <div>
                <h3 className="text-2xl font-bold text-purple-600 mb-4">
                  Our Unique Approach
                </h3>
                <p className="text-gray-600">
                  At TuneDownloader, we understand that the music experience is
                  personal and multifaceted. We've built our platform around
                  this philosophy to deliver something truly special.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">
                    What Makes Us Stand Out
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-600">
                        Unmatched Audio Quality
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-600">
                        Personalized Music Experience
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-600">
                        User-friendly Interface
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-600">
                        Highly Secure and Reliable
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-600">
                        24/7 Customer Support
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2">✓</span>
                      <span className="text-gray-600">Offline Listening</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg overflow-hidden shadow-lg hidden md:block">
                  <img
                    src={aboutCard}
                    alt="Music features"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*feature section */}
      <div className="feature-section py-12">
        <div className="mx-auto sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-4">
            Features
          </h2>
          <p className="text-gray-600 text-lg mx-auto mb-8 text-center">
            Discover the features that make TuneDownloader the best music
            platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-purple-600 text-xl font-bold mb-3">
                High Quality Audio
              </h3>
              <p className="text-gray-600">
                Enjoy high-quality audio with our advanced audio processing
                technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-purple-600 text-xl font-bold mb-3">
                User-Friendly Interface
              </h3>
              <p className="text-gray-600">
                Experience a user-friendly interface that makes it easy to find
                and download your favorite songs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-purple-600 text-xl font-bold mb-3">
                Fast Download Speeds
              </h3>
              <p className="text-gray-600">
                Download your favorite songs at lightning-fast speeds with our
                high-speed download technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-purple-600 text-xl font-bold mb-3">
                Secure and Reliable
              </h3>
              <p className="text-gray-600">
                Rest assured that your data is secure and your downloads are
                reliable with our secure and reliable download technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-purple-600 text-xl font-bold mb-3">
                Multi-platform Support
              </h3>
              <p className="text-gray-600">
                Access your favorite songs on any device with our multi-platform
                support..
              </p>
            </div>
          </div>
        </div>
      </div>
      {/*stats section */}
      <div className="stats-section py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-purple-600 mb-3">
              Our Stats
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our stats are a testament to the success of TuneDownloader
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold text-purple-600 mb-2">
                <CountUp end={1000000} duration={3} separator="," />+
              </p>
              <p className="text-gray-500 uppercase text-sm tracking-wider">
                Downloads
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold text-purple-600 mb-2">
                <CountUp end={500000} duration={3} separator="," />+
              </p>
              <p className="text-gray-500 uppercase text-sm tracking-wider">
                Users
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold text-purple-600 mb-2">
                <CountUp end={250000} duration={3} separator="," />+
              </p>
              <p className="text-gray-500 uppercase text-sm tracking-wider">
                Tracks
              </p>
            </div>

            <div className="text-center">
              <p className="text-5xl font-bold text-purple-600 mb-2">
                <CountUp end={10000000} duration={3} separator="," />+
              </p>
              <p className="text-gray-500 uppercase text-sm tracking-wider">
                Likes
              </p>
            </div>
          </div>

          <div className="mt-16 border-t border-purple-200"></div>
        </div>
      </div>
      {/*team section */}
      <div className="team-section  py-12 px-4 sm:px-6 lg:px-8">
        <div className=" mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-purple-600 mb-3">
              Our Creative Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate minds crafting your perfect music experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border-2 border-purple-400 rounded-lg p-6 bg-white hover:border-purple-600 transition-colors duration-300">
              <div className="flex flex-col items-center  text-center h-full">
                <img
                  src={aboutCard}
                  alt="Abigiya Getachew"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-purple-200"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Abigiya Getachew
                </h3>
                <p className="text-purple-600 font-medium mb-4">Founder</p>
                <p className="text-gray-600 mb-6">
                  Music visionary with a passion for creating seamless listening
                  experiences
                </p>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-2 border-purple-400 rounded-lg p-6 bg-white hover:border-purple-600 transition-colors duration-300">
              <div className="flex flex-col items-center text-center h-full">
                <img
                  src={aboutCard}
                  alt="Yordanos Demisse"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-purple-200"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Yordanos Demisse
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  Lead Developer
                </p>
                <p className="text-gray-600 mb-6">
                  Crafts the technology that powers our music platform
                </p>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaTwitter className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaLinkedin className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaGithub className="text-xl" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-2 border-purple-400 rounded-lg p-6 bg-white hover:border-purple-600 transition-colors duration-300">
              <div className="flex flex-col items-center text-center h-full">
                <img
                  src={aboutCard}
                  alt="Hana G/Medhin"
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-purple-200"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Hana G/Medhin
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  Music Curator
                </p>
                <p className="text-gray-600 mb-6">
                  Finds and organizes the best tracks for your listening
                  pleasure
                </p>
                <div className="flex space-x-4 mt-auto">
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaSpotify className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-purple-600 transition-colors"
                  >
                    <FaSoundcloud className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*testimonial section */}
      <div className="testimonial py-12">
        <div className="bg-purple-200 mx-auto px-8 py-8">
          <h2 className="text-3xl font-bold text-purple-600 text-center mb-4">
            Testimonials
          </h2>
          <p className="text-gray-600 text-center mb-8">
            What the users are saying about TuneDownloader
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-8">
              <div className="flex flex-col h-full">
                <p className="text-gray-600 text-justify mb-4 flex-grow">
                  "As a lifelong music lover, I created TuneDownloader to
                  provide a space where everyone can discover and enjoy
                  high-quality music. I believe that music should be accessible
                  to everyone, and that's why I'm so passionate about making
                  TuneDownloader the best music player for everyone."
                </p>
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <div className="text-justify">
                    <h3 className="text-purple-600 font-bold">
                      Abigiya Getachew
                    </h3>
                    <p className="text-gray-600">Founder, TuneDownloader</p>
                  </div>
                  <FaUserCircle className="text-purple-600 text-4xl flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-8">
              <div className="flex flex-col h-full">
                <p className="text-gray-600 text-justify mb-4 flex-grow">
                  "I've been using TuneDownloader for few weeks now, and I love
                  how easy it is to find new music! The recommendations are spot
                  on and the audio quality is amazing! I've already recommended
                  it to my friends and family"
                </p>
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <div className="text-justify">
                    <h3 className="text-purple-600 font-bold">
                      Yordanos Demisse
                    </h3>
                    <p className="text-gray-600">Beta Tester</p>
                  </div>
                  <FaUserCircle className="text-purple-600 text-4xl flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-8">
              <div className="flex flex-col h-full">
                <p className="text-gray-600 text-justify mb-4 flex-grow">
                  "TuneDownloader has transformed the way I discover music. The
                  diverse library and personalized recommendations have
                  introduced me to so many new artists!"
                </p>
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <div className="text-justify">
                    <h3 className="text-purple-600 font-bold">Hana G/Medhin</h3>
                    <p className="text-gray-600">Music Lover</p>
                  </div>
                  <FaUserCircle className="text-purple-600 text-4xl flex-shrink-0" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mb-8">
              <div className="flex flex-col h-full">
                <p className="text-gray-600 text-justify mb-4 flex-grow">
                  "I love how TuneDownloader connects music lovers! Sharing
                  playlists with friends has made discovering new music even
                  more fun!"
                </p>
                <div className="flex items-end justify-between gap-4 mt-auto">
                  <div className="text-justify">
                    <h3 className="text-purple-600 font-bold">
                      Eyael Getachew
                    </h3>
                    <p className="text-gray-600">Community Member</p>
                  </div>
                  <FaUserCircle className="text-purple-600 text-4xl flex-shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*cta section */}
      <div classname="cta">
        <div className="container mx-auto py-12 px-4 sm:px-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center text-purple-600 mb-2">
            Join the TuneDownloader Community
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Be part of the TuneDownloader community and get access to exclusive
            content and updates.
          </p>
          <div className="flex justify-center">
            <button className="bg-purple-600 px-8 py-3 rounded-full text-white font-bold hover:bg-purple-700 transition-all transform duration-300 ">
              Join Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
