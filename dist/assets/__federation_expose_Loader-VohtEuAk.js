import { importShared } from './__federation_fn_import-CChhLu0f.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

await importShared('react');

const Loader = ({ size = "md", fullScreen = false }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  const loader = /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `${sizes[size]} border-4 border-netflix-gray border-t-netflix-red rounded-full animate-spin`
    }
  ) });
  if (fullScreen) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 bg-netflix-black flex items-center justify-center z-50", children: loader });
  }
  return loader;
};

export { Loader as default };
