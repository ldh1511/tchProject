import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Modal(props) {
    let modal = useSelector(state => state.modal);
    const item = modal.item[1];
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch({ type: "MODAL_ACTIVE" })
    }
    const Increment = () => {
        let amount = modal.amount + 1;
        dispatch({ type: "CHANGE_AMOUNT", payload: amount })
    }
    const Decrement = () => {
        if (modal.amount > 0) {
            let amount = modal.amount - 1;
            dispatch({ type: "CHANGE_AMOUNT", payload: amount })
        }
        else {
            return;
        }
    }
    const handleSelectSize=(e)=>{
        dispatch({type:"CHANGE_SIZE", payload:e})
    }
    const handleAddToCart=()=>{
        dispatch({type:"ADD", 
        payload:modal.item, 
        amount:modal.amount, 
        total:modal.total, 
        size:modal.size}
        )
        dispatch({type:"MODAL_ACTIVE"});
    }
    const getSize = () => {
        return Object.entries(item.size).reverse().map((e,i) =>
            <div className="form-check" key={i}>
                <input type="checkbox" className="form-check-input" name={e[0]} onClick={()=>handleSelectSize(e)} defaultValue="checkedValue" checked={e[0]===modal.size[0]?true:false}/>{e[0]} {e[1]!==0 ? '(+'+ e[1] + 'đ )': ''}
            </div>
        )
    }
    return (
        <div className="modal">
            <div className="modal-item">
                <div className="modal-image">
                    <img src="https://tch-app.s3.ap-southeast-1.amazonaws.com/menufrontend/5b03966a1acd4d5bbd6723a3_cafe-sua-da.jpg" alt="true" />
                </div>
                <div className="modal-info">
                    <h4>{item.name}</h4>
                    <small>Nhỏ</small>
                </div>
                <div className="modal-btn" onClick={handleClick}><i className="fas fa-times"></i></div>
            </div>
            <div className="modal-type">
                <h4>Size</h4>
                <div className="form-check-container">
                    {getSize()}
                </div>
            </div>
            <div className="modal-note">
                <input type="text" className="form-control" name="note" placeholder="Thêm ghi chú món này" />
            </div>
            <div className="modal-bottom">
                <div className="modal-amount">
                    <div onClick={Increment}>+</div>
                    <div className="amount">{modal.amount}</div>
                    <div onClick={Decrement}>-</div>
                </div>
                <button onClick={handleAddToCart}>Thêm vào giỏ <span>{modal.total} đ</span></button>
            </div>
        </div>

    );
}

export default Modal;