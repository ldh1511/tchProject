import React from 'react';
import Cart from './Cart';
import OrderHeader from './OrderHeader';
import Payment from './Payment';
import { useSelector } from 'react-redux';
import PopUp from './PopUp';

function PaymentInfo(props) {
    const step=useSelector(e=>e.step);
    const getPopUp=()=>{
        if(step===2){
            return <PopUp/>
        }
    }
    return (
        <div>
            <OrderHeader />
            <div className="order-body">
                <Payment />
                <Cart />
                {getPopUp()}
            </div>

        </div>
    );
}

export default PaymentInfo;