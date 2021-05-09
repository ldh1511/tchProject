import React from 'react';
import gif from '../img/loading.gif'
function LoadingPage(props) {
    return (
        <div className="loading">
            <img alt="" src={gif}></img>
        </div>
    );
}

export default LoadingPage;