import React from 'react';
import Cart from './Cart';
import Oderleft from './Orderleft';
import OrderHeader from './OrderHeader';
import { useSelector } from 'react-redux';
import PopUp from './PopUp';

function Order(props) {
    const modalState = useSelector(state => state.modal.active);
    
    const getModal = () => {
        if (modalState === true) {
            return <PopUp />
        }
    }
    
    return (
        <div>
            <OrderHeader />
            <div className="order-body">
            <Oderleft />
            <Cart />
            </div>
            {getModal()}
            
        </div>
    );
}

export default Order;