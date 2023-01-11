import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootDivElement = document.getElementById('root');
if (rootDivElement) {
    const root = ReactDOM.createRoot(rootDivElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>
    );
}
