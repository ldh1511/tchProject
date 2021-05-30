import React from 'react';
import { useDispatch } from 'react-redux';
import Image from './../img/scroll.gif';
const Banner = ({ img, title }) => {
    console.log(title);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: "SET_MENU_ICON" });
    }

    return (
        <div className="banner" style={
            {
                backgroundImage: `url(${img})`,
                backgroundPosition: 'center',
                backgroundSize:'cover',
                backgroundRepeat:'no-repeat'
            }
        }>
            <i className="fas fa-bars menu-icon" onClick={handleClick}></i>
            <img src={Image} alt=""></img>
            <div className="banner-content">
                <h1>{title}</h1>
                <p>All you need to feel better is coffee</p>
            </div>
        </div>
    )
}


export default Banner;