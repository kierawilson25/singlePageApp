import React from 'react';
import '../Footer.css';

const Footer = () => {

   // https://developer.nytimes.com/files/poweredby_nytimes_65a.png?v=1583354208350
    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__links">
                    <a href="https://developer.nytimes.com"> <img src="https://developer.nytimes.com/files/poweredby_nytimes_65a.png?v=1583354208350" alt=""></img></a>
                    {/* <a href="#terms">Terms of Service</a>
                    <a href="#support">Support</a> */}
                </div>
                {/* <div className="footer__social">
                    <a href="https://facebook.com" aria-label="Facebook">FaceBook</a>
                    <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
                    <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
                </div> */}
            </div>
            <div className="footer__copyright">
                &copy; 2024 Livefront App. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
