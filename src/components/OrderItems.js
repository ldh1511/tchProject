import React from 'react';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';

function OrderItems(props) {
    const product = useSelector((state) => state.product);
    const getItem = () => {
        if (product.value.length !== 0) {
            return product.value.map((ele, i) => <OrderItem data={ele} key={i}/>)
        }
        else {
            return product.data.map((ele, i) => <OrderItem data={ele} key={i}/>)
        }
    }
    return (
        <div className="order-items">
            {getItem()}
        </div>
    );
}

export default OrderItems;