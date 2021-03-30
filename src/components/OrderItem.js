import React from 'react';
import { useDispatch } from 'react-redux';

function OrderItem({data}) {
    const dispatch=useDispatch();
    const handleClick=()=>{
        dispatch({type:"MODAL_ACTIVE"})
        dispatch({type:"MODAL_ITEM", payload:data})
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