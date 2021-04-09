import React from 'react';
import { useDispatch } from 'react-redux';

function ModalNotice(props) {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: "SET_STEP" });
    }
    return (
        <div className="popup">
            <h1>Đặt hàng thành công!</h1>
            <div className="btn-container">
                <button onClick={handleClick}>Trang chủ</button>
                <button onClick={handleClick}>Hóa đơn</button>
            </div>
        </div>
    );
}

export default ModalNotice;