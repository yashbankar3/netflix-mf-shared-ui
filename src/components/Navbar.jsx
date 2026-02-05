import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setIsLoggedIn(false);
        navigate('/login');
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-netflix-black' : 'bg-gradient-to-b from-black to-transparent'
                }`}
        >
            <div className="px-4 md:px-12 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <h1 className="text-netflix-red text-3xl font-bold tracking-tight">NETFLIX</h1>
                </Link>

                {/* Navigation Links */}
                {isLoggedIn && (
                    <div className="hidden md:flex items-center space-x-6 text-sm">
                        <Link
                            to="/"
                            className="text-white hover:text-netflix-lightGray transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            to="/browse"
                            className="text-white hover:text-netflix-lightGray transition-colors duration-200"
                        >
                            Browse
                        </Link>
                        <Link
                            to="/search"
                            className="text-white hover:text-netflix-lightGray transition-colors duration-200"
                        >
                            Search
                        </Link>
                    </div>
                )}

                {/* Right Side */}
                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <div className="flex items-center space-x-4">
                                <svg
                                    className="w-6 h-6 text-white cursor-pointer hover:text-netflix-lightGray transition-colors"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                                <div className="relative group">
                                    <div className="w-8 h-8 bg-netflix-red rounded cursor-pointer flex items-center justify-center">
                                        <span className="text-white text-sm font-semibold">U</span>
                                    </div>
                                    <div className="absolute right-0 mt-2 w-32 bg-black border border-netflix-gray rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full px-4 py-2 text-left text-white hover:bg-netflix-gray transition-colors"
                                        >
                                            Sign Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="px-4 py-2 bg-netflix-red text-white rounded hover:bg-red-700 transition-colors duration-200"
                        >
                            Sign In
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
