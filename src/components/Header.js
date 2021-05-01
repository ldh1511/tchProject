import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import SearchBox from './SearchBox';
import logo from '../img/logo (2).png'
const Header = (props) => {
    const dispatch = useDispatch();
    const handleCNavLinkck = () => {
        dispatch({ type: "SET_ACTIVE" });
        <Redirect to='/product'></Redirect>
    }
    return (
        <header>
            <ul>
                <li><NavLink to='/'>
                    <img src={logo} className="header--logo"/>
                </NavLink></li>
                <li><NavLink to='/brand-story'>câu chuyện thương hiệu</NavLink></li>
                <li><NavLink to='/product'>sản phẩm</NavLink></li>
                <li><NavLink to='/story'>cửa hàng</NavLink></li>
                <li>
                    <i className="fas fa-search" onClick={handleCNavLinkck}></i>
                    <SearchBox />
                </li>
            </ul>
        </header>
    );
}

export default Header;