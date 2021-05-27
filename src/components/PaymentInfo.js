import React, { useEffect } from 'react';
import Cart from './Cart';
import OrderHeader from './OrderHeader';
import Payment from './Payment';
import { useSelector } from 'react-redux';
import PopUp from './PopUp';
import Footer from './Footer';

function PaymentInfo(props) {
    const step=useSelector(e=>e.step);
    const getPopUp=()=>{
        if(step===2){
            return <PopUp/>
        }
    }
    useEffect(()=>{
        console.log("tesses gcehan")
    },[])
    return (
        <div>
            <OrderHeader />
            <div className="order-body">
                <Payment />
                <Cart />
                {getPopUp()}
            </div>
            <Footer/>
        </div>
    );
}

export default PaymentInfo;