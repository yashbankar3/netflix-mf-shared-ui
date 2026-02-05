import { importShared } from './__federation_fn_import-CChhLu0f.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';
import { r as reactDomExports } from './index-COvqqES_.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

const React = await importShared('react');
const App = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-netflix-black", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-white text-3xl p-8", children: "Shared UI Components - Standalone Mode" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-netflix-lightGray px-8", children: "This app exposes components via Module Federation. Run the shell-app to see them in action." })
  ] });
};
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(React.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
