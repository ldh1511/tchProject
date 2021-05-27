import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import check from './../img/checked.png';
function ModalNoti() {
    const step = useSelector(state => state.step);
    const dispatch = useDispatch();
    const getButton = () => {
        if (step === 1) {
            return (
                <NavLink to='/payment'>
                    <button onClick={handleClick}>
                        Tiếp tục
                    </button>
                </NavLink >
            )
        }
        else {
            return (
                <button onClick={handleClick}>
                    OK
                </button>
            )
        }
    }
    const handleClick = () => {
        dispatch({ type: "SET_ACTIVE_NOTI" })
    }

    return (
        <div className="popup-container">
            <div className="popup popup-user">
                <div className="popup-top">
                    <h1>Cập nhật thành công !</h1>
                </div>
                <div className="popup-user--img">
                    <img alt="" src={check} ></img>
                </div>

                <div className="btn-container">
                    {getButton()}
                </div>
            </div>
        </div>
    );

}

export default ModalNoti;