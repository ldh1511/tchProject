import React from 'react';
import { useSelector } from 'react-redux';

function Cart(props) {
    const cart = useSelector(state => state.cart);
    const getTotalAmount=()=>{
        let totalAmount=cart.reduce((total,e)=> {return total+=e.amount},0)
        return totalAmount;
    }
    const getTotal=()=>{
        let total=cart.reduce((total,e)=> {return total+=e.total},0)
        return total;
    }
    getTotalAmount();
    const getItem = () => {
        return cart.map((e, i) =>
            <div className="cart-item" key={i}>
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
            </div>
        )
    }
    return (
        <div className="cart">
            <button>xem giỏ hàng</button>
            <div className="cart-items">
               {getItem()}
            </div>
            <div className="cart-fees">
                <ul>
                    <li>
                        <p>Cộng ({getTotalAmount()} món)</p>
                        <span>{getTotal()} đ</span>
                    </li>
                    <li>
                        <p>Vận chuyển</p>
                        <span>0 đ</span>
                    </li>
                </ul>
                <div className="discount-box">
                    <input type="text" placeholder="Nhập mã giảm giá tại đây"></input>
                    <button>Áp dụng</button>
                </div>
            </div>
            <div className="cart-total">
                <p>Tổng cộng</p>
                <h4>{getTotal()} đ</h4>
            </div>
        </div>
    );
}

export default Cart;