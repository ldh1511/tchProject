import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firebaseConnect } from '../connect';
import ModalNoti from './ModalNoti';

function UserPayment(props) {
    const dispatch = useDispatch();
    const paymentArr = ['cod', 'atm', 'zalopay', 'visa', 'momo', 'airpay'];
    const payment = useSelector(state => state.paymentInfo.payment);
    const [paymentInfo, setPaymentInfo] = useState({ payment: payment });
    const userData = useSelector(state => state.user);
    const active=useSelector(state=>state.product.active_noti);
    const handleInput = (e) => {
        let name = e.target.name;
        setPaymentInfo({ payment: name })
    }
    const handleUpdatePayment = (e) => {
        e.preventDefault();
        dispatch({ type: "SET_PAYMENTINFO", name: 'payment', value: paymentInfo.payment });
        let users = firebaseConnect.database().ref('users');
        let key;
        users.orderByChild('userId').equalTo(`${userData.userId}`).on('value', (snapshot) => {
            key = Object.keys(snapshot.val())[0];
        })
        users.child(key).update({
            payment:paymentInfo.payment
        })
        dispatch({type:"SET_ACTIVE_NOTI"})
    }
    const getInputElement = () => {
        return paymentArr.map((e) => {
            return (
                <label className="form-check-label">
                    <input
                        
                        onChange={(e) => handleInput(e)}
                        type="radio"
                        className="form-check-input"
                        name={e} defaultValue={e}
                        checked={paymentInfo.payment === `${e}` ? true : false}
                    />
                    {e === 'cod' ? 'Thanh toán khi nhận hàng' : `${e}`}
                </label>
            )
        })
    }
    const getModal = () => {
        if (active === true) {
            return <ModalNoti/>
        }
    }
    return (
        <div className="user-info">
            <h3>Hình thức thanh toán</h3>
            <div className="payment-choices">
                <div className="form-check">
                    {getInputElement()}
                </div>
            </div>
            <button className="user-btn" onClick={e=>handleUpdatePayment(e)}>
                Cập nhật
            </button>
            {getModal()}
        </div>
    );
}

export default UserPayment;