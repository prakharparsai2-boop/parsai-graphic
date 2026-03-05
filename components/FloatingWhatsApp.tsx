import React, { useState, useEffect } from 'react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp: React.FC = () => {
    const [visible, setVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsSmallScreen(window.innerWidth <= 1024);
        };
        const handleScroll = () => {
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;

            // Show only when scrolled a bit (e.g. 100px) 
            // and NOT at the very bottom (within 50px of bottom)
            const atTop = scrolled < 100;
            const atBottom = scrolled + clientHeight > scrollHeight - 50;

            if (atTop || atBottom) {
                setVisible(false);
            } else {
                setVisible(true);
            }
        };

        window.addEventListener('resize', checkScreenSize);
        window.addEventListener('scroll', handleScroll);
        // Initial check
        checkScreenSize();
        handleScroll();

        return () => {
            window.removeEventListener('resize', checkScreenSize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (!isSmallScreen) return null;

    return (
        <a
            href="https://wa.me/919926290283"
            target="_blank"
            rel="noopener noreferrer"
            className={`floating-whatsapp ${visible ? 'show' : 'hide'}`}
            aria-label="Chat on WhatsApp"
        >
            <div className="whatsapp-bubble">
                <img
                    src="https://img.icons8.com/material-outlined/48/ffffff/whatsapp--v1.png"
                    alt="WhatsApp"
                />
                <span className="chat-text">Chat now</span>
            </div>
        </a>
    );
};

export default FloatingWhatsApp;
