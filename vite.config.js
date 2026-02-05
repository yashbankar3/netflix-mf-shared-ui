import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'shared_ui',
            filename: 'remoteEntry.js',
            exposes: {
                './Navbar': './src/components/Navbar.jsx',
                './Footer': './src/components/Footer.jsx',
                './MovieCard': './src/components/MovieCard.jsx',
                './Button': './src/components/Button.jsx',
                './Input': './src/components/Input.jsx',
                './Loader': './src/components/Loader.jsx',
                './BrowseApp': './src/App.jsx',
            },
            shared: {
                react: {
                    singleton: true,
                    requiredVersion: '^18.2.0',
                },
                'react-dom': {
                    singleton: true,
                    requiredVersion: '^18.2.0',
                },
                'react-router-dom': {
                    singleton: true,
                    requiredVersion: '^6.20.1',
                },
            },
        }),
    ],
    build: {
         target: 'esnext',
         modulePreload: false,
         minify: 'esbuild',
         cssCodeSplit: true,
    },
    server: {
        port: 3001,
        strictPort: true,
        cors: true,
    },
    preview: {
        port: 3001,
        strictPort: true,
        cors: true,
    },
});
