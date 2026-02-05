import React from 'react';

const Input = ({
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    label,
    error,
    disabled = false,
    required = false,
    className = '',
    ...props
}) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-netflix-lightGray mb-2"
                >
                    {label}
                    {required && <span className="text-netflix-red ml-1">*</span>}
                </label>
            )}
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className={`
          w-full px-4 py-3 bg-netflix-gray text-white rounded
          border border-netflix-gray
          focus:outline-none focus:border-white focus:ring-1 focus:ring-white
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-200
          ${error ? 'border-red-500' : ''}
        `}
                {...props}
            />
            {error && (
                <p className="mt-1 text-sm text-red-500">{error}</p>
            )}
        </div>
    );
};

export default Input;
