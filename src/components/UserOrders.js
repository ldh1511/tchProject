import React from 'react';


function UserOrders(props) {
    return (
        <div className="user-info">
            <h3>đơn hàng của tôi</h3>
            <div className="user-orders">
                <ul>
                    <li>
                        <div className="user-orders-top">
                            <div className="user-orders-box">
                                <i className="fas fa-file-invoice"></i>
                            #OJCF00109999
                            </div>
                            <div className="user-orders-box">
                                <span>đang giao</span>
                                <i className="fas fa-sort-down"></i>
                            </div>
                        </div>
                        <div className="user-orders-bottom">
                            <h4>Thời gian đặt hàng : <span>hh:mm:ss 15 tháng 5 năm 2021</span> </h4 >
                            <h4>Phương thức thanh toán:<span>Thanh toán khi nhận hàng</span></h4>
                            <div className="user-orders-detail">
                                <div className="cart-items">
                                    <div className="cart-item">
                                        <div className="cart-item-left">
                                            <div className="number-box">1</div>
                                            <div className="cart-item-left-info">
                                                <h5>bạc sỉu</h5>
                                                <small>s</small>
                                            </div>
                                        </div>
                                        <div className="cart-item-right">
                                            <span>35000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-fees">
                                    <ul>
                                        <li>
                                            <p>Tổng tiền</p>
                                            <span>35000 đ</span>
                                        </li>
                                        <li>
                                            <p>Vận chuyển</p>
                                            <span>15000 đ</span>
                                        </li>
                                        <li>
                                            <p>Mã giảm giá</p>
                                            <span>null</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cart-total">
                                    <p>Tổng cộng</p>
                                    <h4>45000 đ</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="user-orders-top">
                            <div className="user-orders-box">
                                <i className="fas fa-file-invoice"></i>
                            #OJCF00109999
                            </div>
                            <div className="user-orders-box">
                                <span>đang giao</span>
                                <i className="fas fa-sort-down"></i>
                            </div>
                        </div>
                        <div className="user-orders-bottom">
                            <h4>Thời gian đặt hàng : <span>hh:mm:ss 15 tháng 5 năm 2021</span> </h4 >
                            <h4>Phương thức thanh toán:<span>Thanh toán khi nhận hàng</span></h4>
                            <div className="user-orders-detail">
                                <div className="cart-items">
                                    <div className="cart-item">
                                        <div className="cart-item-left">
                                            <div className="number-box">1</div>
                                            <div className="cart-item-left-info">
                                                <h5>bạc sỉu</h5>
                                                <small>s</small>
                                            </div>
                                        </div>
                                        <div className="cart-item-right">
                                            <span>35000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-fees">
                                    <ul>
                                        <li>
                                            <p>Tổng tiền</p>
                                            <span>35000 đ</span>
                                        </li>
                                        <li>
                                            <p>Vận chuyển</p>
                                            <span>15000 đ</span>
                                        </li>
                                        <li>
                                            <p>Mã giảm giá</p>
                                            <span>null</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cart-total">
                                    <p>Tổng cộng</p>
                                    <h4>45000 đ</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="user-orders-top">
                            <div className="user-orders-box">
                                <i className="fas fa-file-invoice"></i>
                            #OJCF00109999
                            </div>
                            <div className="user-orders-box">
                                <span>đang giao</span>
                                <i className="fas fa-sort-down"></i>
                            </div>
                        </div>
                        <div className="user-orders-bottom">
                            <h4>Thời gian đặt hàng : <span>hh:mm:ss 15 tháng 5 năm 2021</span> </h4 >
                            <h4>Phương thức thanh toán:<span>Thanh toán khi nhận hàng</span></h4>
                            <div className="user-orders-detail">
                                <div className="cart-items">
                                    <div className="cart-item">
                                        <div className="cart-item-left">
                                            <div className="number-box">1</div>
                                            <div className="cart-item-left-info">
                                                <h5>bạc sỉu</h5>
                                                <small>s</small>
                                            </div>
                                        </div>
                                        <div className="cart-item-right">
                                            <span>35000 đ</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-fees">
                                    <ul>
                                        <li>
                                            <p>Tổng tiền</p>
                                            <span>35000 đ</span>
                                        </li>
                                        <li>
                                            <p>Vận chuyển</p>
                                            <span>15000 đ</span>
                                        </li>
                                        <li>
                                            <p>Mã giảm giá</p>
                                            <span>null</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cart-total">
                                    <p>Tổng cộng</p>
                                    <h4>45000 đ</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default UserOrders;