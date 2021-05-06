import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import SearchBox from './SearchBox';
import logo from '../img/logo (2).png'
import { useSelector } from 'react-redux';
import DropDownCart from './DropDownCart';
const Header = (props) => {
    const cart=useSelector(state=>state.cart);
    const toggleCart=useSelector(state=>state.toggleCart);
    const dispatch = useDispatch();
    // const handleCNavLinkck = () => {
    //     dispatch({ type: "SET_ACTIVE" });
    //     <Redirect to='/product'></Redirect>
    // }
    const handleToggleCart=()=>{
        dispatch({type:"CHANGE_STATE_CART"});
    }
    const getDropDownCart=()=>{
        if(toggleCart===true){
            return <NavLink to="/order"><DropDownCart/></NavLink>
        }
        else{
            return <div></div>
        }
    }
    return (
        <header>
            <ul>
                <li><NavLink to='/'>
                    <img src={logo} className="header--logo" alt="" />
                </NavLink></li>
                <li><NavLink to='/brand-story'>câu chuyện thương hiệu</NavLink></li>
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
            </ul>
        </header>
    );
}

export default Header;