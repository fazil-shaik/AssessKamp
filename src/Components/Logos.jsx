import React, { useEffect } from 'react';

const Logos = () => {
    useEffect(() => {
        const rotateLogos = () => {
            const logos = document.querySelectorAll('.logo-icon');
            logos.forEach((logo, index) => {
                logo.style.transform = `rotate(${index * 36}deg)`;
            });
        };
        rotateLogos();
    }, []);

    return (
        <div className="logos-container">
            <img src="logo1.png" className="logo-icon" alt="Logo 1" />
            <img src="logo2.png" className="logo-icon" alt="Logo 2" />
            <img src="logo3.png" className="logo-icon" alt="Logo 3" />
            {/* Add more logos as needed */}
        </div>
    );
};

export default Logos;
