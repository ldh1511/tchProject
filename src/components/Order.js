import React from 'react';
import Cart from './Cart';
import Oderleft from './Orderleft';
import { useSelector } from 'react-redux';
import PopUp from './PopUp';
import Footer from './Footer';
import Header from './Header';

function Order(props) {
    const modalState = useSelector(state => state.modal.active);
    
    const getModal = () => {
        if (modalState === true) {
            return <PopUp />
        }
    }
    
    return (
        <div>
            <Header />
            <div className="order-body">
            <Oderleft />
            <Cart />
            </div>
            {getModal()}
            <Footer/>
        </div>
    );
}

export default Order;