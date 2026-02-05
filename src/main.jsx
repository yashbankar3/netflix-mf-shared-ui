import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

// This file is for standalone development/testing only
const App = () => {
    return (
        <div className="min-h-screen bg-netflix-black">
            <h1 className="text-white text-3xl p-8">Shared UI Components - Standalone Mode</h1>
            <p className="text-netflix-lightGray px-8">
                This app exposes components via Module Federation. Run the shell-app to see them in action.
            </p>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
