import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import logo from '../img/logo (2).png'
import { useSelector } from 'react-redux';
import DropDownCart from './DropDownCart';
const Header = (props) => {
    const cart = useSelector(state => state.cart);
    const toggleCart = useSelector(state => state.toggleCart);
    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    // const handleCNavLinkck = () => {
    //     dispatch({ type: "SET_ACTIVE" });
    //     <Redirect to='/product'></Redirect>
    // }
    const handleToggleCart = () => {
        dispatch({ type: "CHANGE_STATE_CART" });
    }
    const getDropDownCart = () => {
        if (toggleCart === true) {
            return <DropDownCart />
        }
        else {
            return <div></div>
        }
    }
    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: "USER_LOGOUT" });
            })
            .catch((err) => {
                throw new Error(err);
            })
    }
    const handleDisplayUser = () => {
        if (user.isLogin) {
            return (
                <li className="user-account">
                    <div className="user-box">
                        <div className="user-box-img">
                            <img src={user.photo} alt=""></img>
                        </div>
                        <h3>{user.name}</h3>
                    </div>
                    <ul className="user-dropdown-menu">
                        <li>
                            <i className="fas fa-user-circle"></i>
                            <NavLink to='/user'>Tài khoản</NavLink>
                        </li>
                        <li onClick={handleSignOut}>
                            <i className="fas fa-sign-out-alt"></i>
                            đăng xuất
                        </li>
                    </ul>
                </li>
            )
        }
        else {
            return (
                <li>
                    <button className="btn-login">
                        <NavLink to='/login'>đăng nhập</NavLink>
                    </button>
                </li>
            )
        }
    }
    return (
        <header>
            <ul>
                <li><NavLink to='/'>
                    <img src={logo} className="header--logo" alt="" />
                </NavLink></li>
                <li><NavLink to='/product'>sản phẩm</NavLink></li>
                <li><NavLink to='/story'>cửa hàng</NavLink></li>
                <li>
                    {/* <i className="fas fa-search" onClick={handleCNavLinkck}></i> */}
                    <div className="cart-icon" onClick={handleToggleCart}>
                        <div className="cart-number">{cart.length}</div>
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    {getDropDownCart()}
                </li>
                {handleDisplayUser()}
            </ul>
        </header>
    );
}

export default Header;