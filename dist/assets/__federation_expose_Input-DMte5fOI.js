import { importShared } from './__federation_fn_import-CChhLu0f.js';
import { j as jsxRuntimeExports } from './jsx-runtime-CyoIsdjr.js';

await importShared('react');

const Input = ({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  label,
  error,
  disabled = false,
  required = false,
  className = "",
  ...props
}) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `w-full ${className}`, children: [
    label && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "label",
      {
        htmlFor: name,
        className: "block text-sm font-medium text-netflix-lightGray mb-2",
        children: [
          label,
          required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-netflix-red ml-1", children: "*" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        id: name,
        name,
        value,
        onChange,
        placeholder,
        disabled,
        required,
        className: `
          w-full px-4 py-3 bg-netflix-gray text-white rounded
          border border-netflix-gray
          focus:outline-none focus:border-white focus:ring-1 focus:ring-white
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${error ? "border-red-500" : ""}
        `,
        ...props
      }
    ),
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-red-500", children: error })
  ] });
};

export { Input as default };
