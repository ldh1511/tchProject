import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import box from '../img/box.gif';
function DropDownCart(props) {
    const cart = useSelector(state => state.cart);
    const dispatch=useDispatch();
    const handleRemoveItem = (e) => {
        console.log(e.item[1].id);
        dispatch({type:"REMOVE_ITEM", match:e.item[1].id})
    }
    const getItem = () => {
        if (cart.length !== 0) {
            return cart.map((e, i) =>
                <li className="cart-item" key={i}>
                    <div className="cart-item-left">
                        <div className="number-box">{e.amount}x</div>
                        <div className="cart-item-left-info">
                            <h5>{e.item[1].name}</h5>
                            <small>{e.size[0]}</small>
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <span>{e.total} đ</span>
                    </div>
                    <i className="fas fa-times-circle" onClick={()=>handleRemoveItem(e)}></i>
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
            {cart.length !== 0 ?
                <NavLink to="/order">
                    <div className="dropdown-cart--payment">
                        <h4>Thanh toán</h4>
                    </div>
                </NavLink>
                :
                true
            }

        </div>
    );
}

export default DropDownCart;