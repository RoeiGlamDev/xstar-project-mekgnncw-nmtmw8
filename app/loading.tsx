import React from 'react';
import './loading.css'; // Assuming you have a CSS file for styling

const Loading: React.FC = () => {
    return (
        <div className="loading-container">
            <div className="loading-spinner"></div>
            <h1 className="loading-text">Loading...</h1>
        </div>
    );
};

export default Loading;