import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function OrderItems(props) {
    const product = useSelector((state) => state.product);
    const getItem = () => {
        return product.data.map((ele) => <OrderItem data={ele} />)
    }
    return (
        <div className="order-items">
            {getItem()}
        </div>
    );
}

export default OrderItems;