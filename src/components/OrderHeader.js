import React from 'react';
import logo from '../img/logo.png';
function OrderHeader(props) {
    return (
        <header className="order-header">
            <div className="order-logo">
                <img src={logo} alt="true"></img>
            </div>
            <div className="address-container">
                <button>giao ngay</button>
                <input type="text" name="address" aria-describedby="helpId" placeholder="Nhập địa chỉ giao hàng..."></input>
            </div>
            <div className="login-area">
                <button>đăng nhập</button>
                <div className="cart-icon">
                    <div className="cart-number">1</div>
                    <i class="fas fa-shopping-cart"></i>
                </div>
            </div>
        </header>
    );
}

export default OrderHeader;