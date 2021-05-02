import React from 'react';
import logo from '../img/logo (2).png';
function OrderHeader(props) {
    return (
        <header className="order-header">
            <div className="order-logo">
                <img src={logo} alt="true"></img>
            </div>
            
            <div className="login-area">
                <button>đăng nhập</button>
                <div className="cart-icon">
                    <div className="cart-number">1</div>
                    <i className="fas fa-shopping-cart"></i>
                </div>
            </div>
        </header>
    );
}

export default OrderHeader;