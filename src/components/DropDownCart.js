import React from 'react';
import { useSelector } from 'react-redux';
import box from '../img/box.gif';
function DropDownCart(props) {
    const cart = useSelector(state => state.cart);
    const getItem = () => {
        if (cart.length !== 0) {
            return cart.map((e, i) =>
                <li className="cart-item" key={i}>
                    <div className="cart-item-left">
                        <div className="number-box">{e.amount}</div>
                        <div className="cart-item-left-info">
                            <h5>{e.item[1].name}</h5>
                            <small>{e.size[0]}</small>
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <span>{e.total} đ</span>
                    </div>
                </li>
            )
        }
        else {
            return <li className="empty-container">
                <img src={box} alt=""></img>
                Bạn chưa chọn sản phẩm nào !
            </li>
        }
    }
    return (
        <div className="dropdown-cart" >
            <ul>
                {getItem()}
            </ul>
            {cart.length !== 0?
                <div className="dropdown-cart--payment">
                    <h4>Thanh toán</h4>
                </div>
            : 
                true
            }

        </div>
    );
}

export default DropDownCart;