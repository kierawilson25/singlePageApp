import React, { useEffect, useState } from 'react';

import '../Header.css';

const Header = () => {
    const [lightMode, setLightMode] = useState(true);
    const handleButtonClick = () => {
        lightMode ? setLightMode(false) : setLightMode(true)
      };
    
    return (
        <header className="header">
            <div className="header__logo">New York Times App</div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="/"> Top Articles</a></li>
                    <li className="header__nav-item"><a href="/books"> NYT Best Sellers</a></li>
                </ul>
            </nav>
            <div className="header__actions">
                {/* <button className="header__action-btn" onClick={handleButtonClick}>{lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}</button> */}
            </div>
        </header>
    );
};

export default Header;
