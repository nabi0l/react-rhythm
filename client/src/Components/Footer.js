import React from 'react';
import '../App.css';
import { NavLink } from 'react-router-dom';
import { FaMusic, FaInstagram, FaTwitter, FaFacebook, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-50 mt-12">
            <div className="container mx-auto px-4 py-8">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Logo and Socials */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <FaMusic className="text-purple-600 text-2xl" />
                            <h1 className="text-purple-600 text-2xl font-bold">TuneDownloader</h1>
                        </div>
                        <p className="text-gray-600 mb-4">
                            Your premier destination for high-quality music downloads and streaming.
                        </p>
                        <div className="flex items-center gap-4">
                            <NavLink 
                                to="/" 
                                className="text-gray-600 hover:text-purple-600 transition text-xl"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </NavLink>
                            <NavLink 
                                to="/" 
                                className="text-gray-600 hover:text-purple-600 transition text-xl"
                                aria-label="Twitter"
                            >
                                <FaTwitter />
                            </NavLink>
                            <NavLink 
                                to="/" 
                                className="text-gray-600 hover:text-purple-600 transition text-xl"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className="text-gray-600 hover:text-purple-600 transition text-xl"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </NavLink>
                        </div>
                    </div>

                    {/* Explore Links */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-4 hover:text-purple-600 transition">
                            Explore
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <NavLink 
                                    to="/artists" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    Artists
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/songs" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    Songs
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/genres" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    Genres
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/albums" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    Albums
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    {/* Info Links */}
                    <div>
                        <h2 className="text-lg font-bold text-gray-800 mb-4 hover:text-purple-600 transition">
                            Info
                        </h2>
                        <ul className="space-y-2">
                            <li>
                                <NavLink 
                                    to="/about" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/contact" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/faq" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    FAQ
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/privacy" 
                                    className="text-gray-600 hover:text-purple-600 transition"
                                >
                                    Privacy Policy
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            &copy; {currentYear} TuneDownloader. All rights reserved.
                        </p>
                        <div className="flex space-x-4">
                            <NavLink 
                                to="/terms" 
                                className="text-gray-500 hover:text-purple-600 text-sm transition"
                            >
                                Terms of Service
                            </NavLink>
                            <NavLink 
                                to="/privacy" 
                                className="text-gray-500 hover:text-purple-600 text-sm transition"
                            >
                                Privacy Policy
                            </NavLink>
                            <NavLink 
                                to="/cookies" 
                                className="text-gray-500 hover:text-purple-600 text-sm transition"
                            >
                                Cookie Policy
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;