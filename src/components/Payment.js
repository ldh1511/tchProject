import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Payment(props) {
    const dispatch = useDispatch();
    const payment = useSelector(state => state.paymentInfo.payment);
    const payments = useSelector(state => state.paymentInfo);
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (e.target.type !== 'radio') {
            dispatch({ type: "SET_PAYMENTINFO", name: name, value: value })
        }
        else {
            dispatch({ type: "SET_PAYMENTINFO", name: 'payment', value: value })
        }
    }
    useEffect(() => {
        console.log("Thay đổi")
    }, [payments])
    return (
        <div className="payment-box">
            <form>
                <div className="payment-top payment-content">
                    <h3>Xác nhận thông tin đơn hàng</h3>
                    <div className="form-group">
                        <input
                            onChange={(e) => handleInput(e)}
                            type="text"
                            className="form-control"
                            name="address" aria-describedby="helpId"
                            placeholder="Nhập địa chỉ giao hàng" />
                    </div>
                    <div className="form-group">
                        <input
                            onChange={(e) => handleInput(e)}
                            type="text"
                            className="form-control"
                            name="name" aria-describedby="helpId"
                            placeholder="Người nhận" />
                        <input
                            onChange={(e) => handleInput(e)}
                            type="text"
                            className="form-control"
                            name="phonenumber" aria-describedby="helpId"
                            placeholder="Số điện thoại" />
                    </div>
                    <div className="form-group">
                        <textarea
                            onChange={(e) => handleInput(e)}
                            className="form-control"
                            name="note" rows={3} defaultValue={""}
                            placeholder="Ghi chú" />
                    </div>
                </div>
                <div className="payment-bottom payment-content">
                    <h3>Hình thức thanh toán</h3>
                    <div className="payment-choices">
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    onChange={(e) => handleInput(e)}
                                    type="radio"
                                    className="form-check-input"
                                    name="cod" defaultValue="cod"
                                    checked={payment === "cod" ? true : false} />
                                Thanh toán khi nhận hàng
                            </label>
                            <label className="form-check-label">
                                <input
                                    onChange={(e) => handleInput(e)}
                                    type="radio"
                                    className="form-check-input"
                                    name="atm" defaultValue="atm"
                                    checked={payment === "atm" ? true : false} />
                                Thẻ ATM nội địa
                            </label>
                            <label className="form-check-label">
                                <input
                                    onChange={(e) => handleInput(e)}
                                    type="radio"
                                    className="form-check-input"
                                    name="zalopay" defaultValue="zalopay"
                                    checked={payment === "zalopay" ? true : false} />
                                ZaloPay
                            </label>
                        </div>
                        <div className="form-check">
                            <label className="form-check-label">
                                <input
                                    onChange={(e) => handleInput(e)}
                                    type="radio"
                                    className="form-check-input"
                                    name="visa" defaultValue="visa"
                                    checked={payment === "visa" ? true : false} />
                                Visa/MasterCard/JCB
                            </label>
                            <label className="form-check-label">
                                <input
                                    onChange={(e) => handleInput(e)}
                                    type="radio"
                                    className="form-check-input"
                                    name="momo" defaultValue="momo"
                                    checked={payment === "momo" ? true : false} />
                                MoMo
                            </label>
                            <label className="form-check-label">
                                <input
                                    onChange={(e) => handleInput(e)}
                                    type="radio"
                                    className="form-check-input"
                                    name="airpay" defaultValue="airpay"
                                    checked={payment === "airpay" ? true : false} />
                                AirPay
                        </label>
                        </div>
                    </div>

                </div>
            </form>

        </div>
    );
}

export default Payment;