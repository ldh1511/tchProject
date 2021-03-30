import React from 'react';
import OrderSearch from './OrderSearch';
import OrderItems from './OrderItems';

function OrderMain(props) {
    return (
        <div className="order-main">
            <OrderSearch />
            <OrderItems />
        </div>
    );
}

export default OrderMain;