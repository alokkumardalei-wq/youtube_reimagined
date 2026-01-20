import React from 'react';

interface BlueLightOverlayProps {
    isActive: boolean;
}

const BlueLightOverlay: React.FC<BlueLightOverlayProps> = ({ isActive }) => {
    if (!isActive) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(255, 140, 0, 0.2)', // Amber tint
                pointerEvents: 'none', // Allow clicks to pass through
                zIndex: 9999, // Ensure it's on top of everything
                mixBlendMode: 'multiply', // Blends nicely with dark mode
                transition: 'opacity 0.5s ease-in-out'
            }}
        />
    );
};

export default BlueLightOverlay;
