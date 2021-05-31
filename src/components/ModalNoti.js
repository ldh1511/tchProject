import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import check from './../img/checked.png';
import cancel from './../img/cancel.png';
function ModalNoti({props}) {
    console.log(props);
    const step = useSelector(state => state.step);
    const dispatch = useDispatch();
    const getButton = () => {
        if (step === 1 && props===true) {
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
                    <h1>{props===true? 'Cập nhật thành công':'Nhập thiếu thông tin'} !</h1>
                </div>
                <div className="popup-user--img">
                    <img alt="" src={props===true? check: cancel} ></img>
                </div>

                <div className="btn-container">
                    {getButton()}
                </div>
            </div>
        </div>
    );

}

export default ModalNoti;