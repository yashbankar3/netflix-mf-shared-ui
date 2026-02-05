import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();

    const imageUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : 'https://via.placeholder.com/500x750?text=No+Image';

    const handleClick = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <div
            className="relative group cursor-pointer transition-all duration-300 flex-shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
        >
            <div
                className={`rounded overflow-hidden transition-all duration-300 ${isHovered ? 'scale-110 z-10' : 'scale-100'
                    }`}
            >
                <img
                    src={imageUrl}
                    alt={movie.title || movie.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                />

                {/* Overlay on hover */}
                <div
                    className={`absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                        <h3 className="text-white font-semibold text-sm mb-1 line-clamp-1">
                            {movie.title || movie.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-xs">
                            <span className="text-green-500 font-semibold">
                                {movie.vote_average ? `${(movie.vote_average * 10).toFixed(0)}% Match` : 'N/A'}
                            </span>
                            {movie.release_date && (
                                <span className="text-netflix-lightGray">
                                    {new Date(movie.release_date).getFullYear()}
                                </span>
                            )}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center space-x-2 mt-2">
                            <button
                                className="bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/watch/${movie.id}`);
                                }}
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>
                            <button
                                className="border-2 border-white text-white rounded-full p-2 hover:border-gray-300 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                }}
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
