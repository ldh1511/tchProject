import React from 'react';
import { useDispatch } from 'react-redux';
import Image from './../img/background.jpg';
const Banner=(props)=>{
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({type:"SET_MENU_ICON"});
    }
    return(
        <div className="banner">
            <i className="fas fa-bars menu-icon" onClick={handleClick}></i>
            <img src={Image} alt=""></img>
            <div className="banner-content">
                <h1>JIZ'COFEE</h1>
                <p>All you need to feel better is coffee</p>
            </div>
        </div>
    )
}


export default Banner;