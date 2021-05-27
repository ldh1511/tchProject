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
                    <p>Copyright 2021 NEXW Company </p>
                    <p>Developed by LDH</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;