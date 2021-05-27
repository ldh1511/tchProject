import React from 'react';
import Image from './../img/background.jpg';
const Banner=(props)=>{
    return(
        <div className="banner">
            <img src={Image} alt=""></img>
            <div className="banner-content">
                <h1>JIZ'COFEE</h1>
                <p>All you need to feel better is coffee</p>
            </div>
        </div>
    )
}


export default Banner;