import React from 'react';
import logo from '../img/logo (2).png';

function Footer(props) {
    return (
        <footer>
            <div className="footer-block">
                <div className="footer-img">
                    <img alt="" src={logo}></img>
                </div>
                <div className="footer-content">
                    <p>2021 NEXW Company </p>
                    <p>Developed by LDH</p>
                    <p>This website is developed for educational purposes</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;