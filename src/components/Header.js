import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import firebase from 'firebase';
import logo from '../img/logo (2).png'
import { useSelector } from 'react-redux';
import DropDownCart from './DropDownCart';
const Header = (props) => {
    const cart = useSelector(state => state.cart);
    const toggleCart = useSelector(state => state.toggleCart);
    const user = useSelector(state => state.user);
    const menusState=useSelector(state=>state.product.menu);
    const ref=useRef();
    const dispatch = useDispatch();
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
    useEffect(()=>{
        if(menusState===true){
            ref.current.className="menu-active";
        }
        else{
            ref.current.className='menu-hidden';
        }
    })
    const handleClick=()=>{
        dispatch({type:"SET_MENU_ICON"})
    }
    return (
        <header ref={ref}>
            <i className="fas fa-times header-icon" onClick={handleClick}></i>
            <ul>
                <li onClick={handleClick}><NavLink to='/product'>sản phẩm</NavLink></li>
                <li onClick={handleClick}><NavLink to='/store'>cửa hàng</NavLink></li>
                <li onClick={handleClick}><NavLink to='/'>
                    <img src={logo} className="header--logo" alt="" />
                </NavLink></li>
                <li>
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