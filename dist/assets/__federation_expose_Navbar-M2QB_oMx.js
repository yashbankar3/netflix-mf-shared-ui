import { importShared } from './__federation_fn_import-CChhLu0f.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

const React = await importShared('react');
const {useState,useEffect} = React;

const {Link,useNavigate} = await importShared('react-router-dom');

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-netflix-black" : "bg-gradient-to-b from-black to-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 md:px-12 py-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-netflix-red text-3xl font-bold tracking-tight", children: "NETFLIX" }) }),
        isLoggedIn && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center space-x-6 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              className: "text-white hover:text-netflix-lightGray transition-colors duration-200",
              children: "Home"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/browse",
              className: "text-white hover:text-netflix-lightGray transition-colors duration-200",
              children: "Browse"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/search",
              className: "text-white hover:text-netflix-lightGray transition-colors duration-200",
              children: "Search"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center space-x-4", children: isLoggedIn ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              className: "w-6 h-6 text-white cursor-pointer hover:text-netflix-lightGray transition-colors",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "path",
                {
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 bg-netflix-red rounded cursor-pointer flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-sm font-semibold", children: "U" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 mt-2 w-32 bg-black border border-netflix-gray rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: handleLogout,
                className: "w-full px-4 py-2 text-left text-white hover:bg-netflix-gray transition-colors",
                children: "Sign Out"
              }
            ) })
          ] })
        ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/login",
            className: "px-4 py-2 bg-netflix-red text-white rounded hover:bg-red-700 transition-colors duration-200",
            children: "Sign In"
          }
        ) })
      ] })
    }
  );
};

export { Navbar as default };
