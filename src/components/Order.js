import React from 'react';
import Cart from './Cart';
import Oderleft from './Orderleft';
import OrderHeader from './OrderHeader';
import Modal from './Modal';
import { useSelector } from 'react-redux';

function Order(props) {
    const modalState = useSelector(state => state.modal.active);
    const getModal = () => {
        if (modalState === true) {
            return <Modal />
        }
    }
    return (
        <div>
            <OrderHeader />
            <div className="order-body">
                <Oderleft />
                <Cart />
                {getModal()}
            </div>
        </div>
    );
}

export default Order;