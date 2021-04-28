import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { firebaseConnect } from '../connect';

function Cart(props) {
    const cart = useSelector(state => state.cart);
    const step = useSelector(state => state.step);
    const info=useSelector(state=>state.paymentInfo);
    const dispatch = useDispatch();
    useEffect((e) => {
        const billRef=firebaseConnect.database().ref('bill');
        let bill={
            items:[],info:info,time:''
        };
        cart.map(ele=>{
            let item={}
            item.code=ele.item[0];
            item.amount=ele.amount;
            item.size=ele.size[0];
            item.total=ele.total;
            bill.items.push(item);
            return true;
        })
        if (step === 2) {
            let current=new Date();
            bill.time=current.toLocaleString();
            billRef.push(bill);
        }
    }, [step])
    const getTotalAmount = () => {
        let totalAmount = cart.reduce((total, e) => { return total += e.amount }, 0)
        return totalAmount;
    }
    const getTotal = () => {
        let total = cart.reduce((total, e) => { return total += e.total }, 0)
        return total;
    }
    const handleClick = () => {
        dispatch({ type: "SET_STEP" });
    }
    const handleChangeAmount=(e)=>{
        dispatch({type:"MODAL_ACTIVE"});
        dispatch({type:"MODAL_GET_ITEM",payload:e.item, amount:e.amount, total:e.total})
        console.log(e);
    }
    const getItem = () => {
        return cart.map((e, i) =>
            <div className="cart-item" key={i} onClick={(s)=>handleChangeAmount(e)}>
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
            <button onClick={handleClick}>{step === 1 ? 'đặt hàng' : 'xem giỏ hàng'}</button>
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