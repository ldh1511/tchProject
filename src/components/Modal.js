import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Modal(props) {
    let modal = useSelector(state => state.modal);
    const items=useSelector(state=>state.product.data);
    const item = modal.item[1];
    const getSizeArr=()=>{
        let check=items.filter(e=>e[0]===modal.item[0]);
        return check[0][1].size;
    }
    const dispatch = useDispatch();
    const handleClick = () => { // Đóng modal
        dispatch({ type: "MODAL_ACTIVE" })
    }
    const Increment = () => { // Thêm số lượng
        let amount = modal.amount + 1;
        dispatch({ type: "CHANGE_AMOUNT", payload: amount })
    }
    const Decrement = () => { // Giảm số lượng
        if (modal.amount > 0) {
            let amount = modal.amount - 1;
            dispatch({ type: "CHANGE_AMOUNT", payload: amount })
        }
        else {
            return;
        }
    }
    const handleSelectSize = (e) => { // Thay đổi size
        dispatch({ type: "CHANGE_SIZE", payload: e })
    }
    const handleAddToCart = () => { // Thêm vào giỏ hàng
        dispatch({
            type: "ADD",
            payload: modal.item,
            amount: modal.amount,
            total: modal.total,
            size: modal.size
        }
        )
        dispatch({ type: "MODAL_ACTIVE" }); // Đóng modal
    }
    const getSize = () => {
        return Object.entries(getSizeArr()).reverse().map((e, i) =>
            // Chuyển từ Obj về Arr, đảo ngược để lấy tên size.
            <div className="form-check" key={i}>
                <input
                    type="checkbox"
                    className="form-check-input"
                    name={e[0]}
                    onClick={() => handleSelectSize(e)}
                    defaultValue="checkedValue"
                    checked={e[0] === modal.size[0] ? true : false}
                />
                {e[0]} {e[1] !== 0 ? '(+' + e[1] + 'đ )' : ''}
            </div>
        )
    }
    return (
        <div className="modal">
            <div className="modal-item">
                <div className="modal-image">
                    <img src={modal.img} alt="true" />
                </div>
                <div className="modal-info">
                    <h4>{item.name}</h4>
                    <small>Nhỏ</small>
                </div>
                <div className="modal-btn" onClick={handleClick}>
                    <i className="fas fa-times"></i>
                </div>
                <div className="modal-title">
                    <h3>{item.name}</h3>
                </div>
            </div>
            <div className="modal-type">
                <h4>Size</h4>
                <div className="form-check-container">
                    {getSize()}
                </div>
            </div>
            <div className="modal-note">
                <input
                    type="text"
                    className="form-control"
                    name="note"
                    placeholder="Thêm ghi chú món này"
                />
            </div>
            <div className="modal-bottom">
                <div className="modal-amount">
                    <div onClick={Increment}>+</div>
                    <div className="amount">{modal.amount}</div>
                    <div onClick={Decrement}>-</div>
                </div>
                <button onClick={handleAddToCart}>
                    Thêm vào giỏ
                    <span>{modal.total} đ</span>
                </button>
            </div>
        </div>

    );
}

export default Modal;