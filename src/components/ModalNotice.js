import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import gif from '../img/finish.gif';
function ModalNotice(props) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: "SET_STEP" });
        dispatch({ type: "SET_EMPTY" });
    }
    return (
        <div className="popup">
            <div className="popup-top">
                <img alt="" src={gif}></img>
                <h1>Đặt hàng thành công!</h1>
            </div>
            <div className="btn-container">

                <NavLink to='/'>
                    <button onClick={handleClick}>
                        Trang chủ
                    </button>
                </NavLink>
                <NavLink to='/user/orders'>
                    <button onClick={handleClick}>
                        Hóa đơn
                        </button>
                </NavLink>

            </div>
        </div>
    );
}

export default ModalNotice;