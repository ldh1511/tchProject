import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import UserAddress from './UserAddress';
import UserOrders from './UserOrders';
import UserPayment from './UserPayment';
function UserPage(props) {
    const userState = useSelector(state => state.user);
    if (userState.isLogin === true) {
        return (
            <>
                <Header />
                <div className="user-container">
                    <h1>Tài khoản cá nhân</h1>
                    <div className="user-container-bottom">
                        <div className="user-category">
                            <ul>
                                <li>
                                    <NavLink to='/user/address'>
                                        <i className="fas fa-map-marker-alt"></i>
                                    Địa chỉ nhận hàng
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user/payment'>
                                        <i className="fas fa-money-check-alt"></i>
                                    Phương thức thanh toán
                                </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/user/orders'>
                                        <i className="fas fa-file-invoice"></i>Đơn hàng của tôi
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                        <Switch>
                            <Route path='/user/address' component={UserAddress} />
                            <Route path='/user/payment' component={UserPayment} />
                            <Route path='/user/orders' component={UserOrders} />
                        </Switch>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
    else{
        return <Redirect to='/'/>
    }
}

export default UserPage;