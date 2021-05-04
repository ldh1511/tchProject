import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { NavLink } from 'react-router-dom';

const Item = ({ data }) => {
    const selected = useSelector((state) => state.product.selected);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: "SELECTED" });
        dispatch({ type: "ADD", payload: data, amount: 1, total: data[1].price, size: ['S', 0] })
        dispatch({ type: "MODAL_SET_ITEM", payload: data })
    }

    if (selected !== true) {
        return (
            <div className="item">
                <div className="item-img">
                    <NavLink to={`/item/${data[1].id}`}>
                    <img src={data[1].link} alt=""></img>
                    </NavLink>
                </div>
                <h4>{data[1].name}</h4>
                <div className="item-bottom">
                    <h3>{data[1].price} đ</h3>
                    <button className="btn" onClick={handleClick}>
                        Mua ngay
                    </button>
                </div>

            </div>
        );
    }
    else {
        return <Redirect from="item" to='order'></Redirect>
    }
}


export default Item;