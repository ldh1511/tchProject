import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function OrderItem({data}) {
    const dispatch=useDispatch();
    const cart=useSelector(state=>state.cart);
    const handleClick=()=>{
        dispatch({type:"MODAL_ACTIVE"});
        let check=cart.filter(e => e.item[0]===data[0]);
        if(check.length!=0){
            dispatch({type:"MODAL_GET_ITEM", payload:check[0].item, amount:check[0].amount, total:check[0].total})
        }
        else{
            dispatch({type:"MODAL_SET_ITEM", payload:data})
        }
        
    }
    return (
        <div className="order-item">
            <div className="order-item-image">
                <img src={data[1].link} alt="img" ></img>
            </div>
            <div className="order-item-content">
                <h4>{data[1].name}</h4>
                <p>{data[1].description}</p>
                <div className="item-content-bottom">
                    <span>{data[1].price} đ</span>
                    <div className="select-icon" onClick={handleClick}>
                        <i className="fas fa-plus"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;