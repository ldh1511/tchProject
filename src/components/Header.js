import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import SearchBox from './SearchBox';
const Header = (props) => {
    const dispatch = useDispatch();
    const handleCNavLinkck = () => {
        dispatch({ type: "SET_ACTIVE" });
        <Redirect to='/product'></Redirect>
    }
    return (
        <header>
            <ul>
                <li><NavLink to='/'>the coffe house</NavLink></li>
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