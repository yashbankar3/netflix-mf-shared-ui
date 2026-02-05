import { importShared } from './__federation_fn_import-CChhLu0f.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

const React = await importShared('react');
const {useState} = React;

const {useNavigate} = await importShared('react-router-dom');

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const imageUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image";
  const handleClick = () => {
    navigate(`/movie/${movie.id}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "relative group cursor-pointer transition-all duration-300 flex-shrink-0",
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      onClick: handleClick,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `rounded overflow-hidden transition-all duration-300 ${isHovered ? "scale-110 z-10" : "scale-100"}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: imageUrl,
                alt: movie.title || movie.name,
                className: "w-full h-auto object-cover",
                loading: "lazy"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-white font-semibold text-sm mb-1 line-clamp-1", children: movie.title || movie.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 text-xs", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-green-500 font-semibold", children: movie.vote_average ? `${(movie.vote_average * 10).toFixed(0)}% Match` : "N/A" }),
                    movie.release_date && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-netflix-lightGray", children: new Date(movie.release_date).getFullYear() })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-2 mt-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: "bg-white text-black rounded-full p-2 hover:bg-gray-200 transition-colors",
                        onClick: (e) => {
                          e.stopPropagation();
                          navigate(`/watch/${movie.id}`);
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" }) })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        className: "border-2 border-white text-white rounded-full p-2 hover:border-gray-300 transition-colors",
                        onClick: (e) => {
                          e.stopPropagation();
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-4 h-4", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 4v16m8-8H4" }) })
                      }
                    )
                  ] })
                ] })
              }
            )
          ]
        }
      )
    }
  );
};

export { MovieCard as default };
