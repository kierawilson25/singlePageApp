import React from 'react';

import '../Header.css';

const Header = () => {

    
    return (
        <header className="header">
            <div className="header__logo">New York Times App</div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-item"><a href="/"> Top Articles</a></li>
                    <li className="header__nav-item"><a href="/books"> NYT Best Sellers</a></li>
                </ul>
            </nav>

        </header>
    );
};

export default Header;
