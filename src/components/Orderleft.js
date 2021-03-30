import React from 'react';
import OrderMain from './OrderMain';

import OrderMenu from './OrderMenu';


function Orderleft(props) {
    return (
        <div className="order-left">
            <OrderMenu />
            <OrderMain/>
        </div>
    );
}

export default Orderleft;