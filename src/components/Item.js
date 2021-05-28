import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Item = ({ data }) => {
    console.log(data);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: "SELECTED" }); //Thay đổi trạng thái
        dispatch({  // Thêm sản phẩm vào giỏ hàng
            type: "ADD", 
            payload: data, 
            amount: 1, 
            total: data[1].price, 
            size: ['S', 0] 
        })
    }
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
                <NavLink to="/order">
                    <button className="btn" onClick={handleClick}>
                        Mua ngay
                        </button>
                </NavLink>
            </div>

        </div>
    );

}


export default Item;