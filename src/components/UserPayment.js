import React from 'react';

function UserPayment(props) {
    return (
        <div className="user-info">
            <h3>Hình thức thanh toán</h3>
            <div className="payment-choices">
                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="cod" defaultValue="cod"
                        />
                        Thanh toán khi nhận hàng
                        </label>
                    <label className="form-check-label">
                        <input

                            type="radio"
                            className="form-check-input"
                            name="atm" defaultValue="atm"
                        />
                        Thẻ ATM nội địa
                        </label>
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="zalopay" defaultValue="zalopay"
                        />
                        ZaloPay
                        </label>
                </div>
                <div className="form-check">
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="visa" defaultValue="visa"
                        />
                        Visa/MasterCard/JCB
                        </label>
                    <label className="form-check-label">
                        <input
                            type="radio"
                            className="form-check-input"
                            name="momo" defaultValue="momo"
                        />
                        MoMo
                        </label>
                    <label className="form-check-label">
                        <input

                            type="radio"
                            className="form-check-input"
                            name="airpay" defaultValue="airpay"
                        />
                        AirPay
                        </label>
                </div>
            </div>
            <button className="user-btn">Cập nhật</button>
        </div>
    );
}

export default UserPayment;