import React from 'react';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    onClick,
    disabled = false,
    type = 'button',
    className = '',
    ...props
}) => {
    const baseStyles = 'font-semibold rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-netflix-red text-white hover:bg-red-700 focus:ring-netflix-red',
        secondary: 'bg-white text-black hover:bg-gray-200 focus:ring-white',
        outline: 'border-2 border-white text-white hover:bg-white hover:text-black focus:ring-white',
        ghost: 'text-white hover:bg-netflix-gray focus:ring-netflix-gray',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    const disabledStyles = 'opacity-50 cursor-not-allowed';

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledStyles : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
