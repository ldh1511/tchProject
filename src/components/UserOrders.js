import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { firebaseConnect } from '../connect';
function UserOrders(props) {
    let bill = firebaseConnect.database().ref('bill');
    const user = useSelector(state => state.user);
    const product = useSelector(state => state.product.data);
    const [result, setResult] = useState();

    useEffect(() => {
        bill.orderByChild('userId').equalTo(`${user.userId}`).on('value', (snapshot) => {
            let results = snapshot.val();
            results = Object.keys(results).map((key) => [String(key), results[key]]);
            setResult(results);
            // console.log(results)
            // results.map(ele => {
            //     let totalBill = ele[1].items.reduce((total, e) => total += e.total, 0);
            //     console.log(totalBill);
            // })
        })
    }, [])
    const getTotalBill = (data) => data[1].items.reduce((total, e) => total += e.total, 0);
    const getItemName = (name) => {
        let match = product.filter(ele => ele[0] === name);
        return match[0][1].name;
    }
    const getItem = (data) => {
        return data.map(e => {
            return (
                <div className="cart-item">
                    <div className="cart-item-left">
                        <div className="number-box">{e.amount}</div>
                        <div className="cart-item-left-info">
                            <h5>{getItemName(e.code)}</h5>
                            <small>{e.size}</small>
                        </div>
                    </div>
                    <div className="cart-item-right">
                        <span>{e.total} đ</span>
                    </div>
                </div>
            )
        })
    }
    const getBill = (data) => {
        if (data) {
            return data.map((e) => {
                return (
                    <li>
                        <div className="user-orders-top">
                            <div className="user-orders-box">
                                <i className="fas fa-file-invoice"></i>
                                {e[0]}
                            </div>
                            <div className="user-orders-box">
                                <span>đang giao</span>
                                <i className="fas fa-sort-down"></i>
                            </div>
                        </div>
                        <div className="user-orders-bottom">
                            <h4>Thời gian đặt hàng : <span>{e[1].time}</span> </h4 >
                            <h4>Phương thức thanh toán:
                                <span>
                                    {e[1].payment==='cod'?
                                    'Thanh toán khi nhận hàng'
                                    :`${e[1].payment}`}
                                </span>
                            </h4>
                            <div className="user-orders-detail">
                                <div className="cart-items">
                                    {getItem(e[1].items)}
                                </div>
                                <div className="cart-fees">
                                    <ul>
                                        <li>
                                            <p>Tổng tiền</p>
                                            <span>{getTotalBill(e)} đ</span>
                                        </li>
                                        <li>
                                            <p>Mã giảm giá</p>
                                            <span>null</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="cart-total">
                                    <p>Tổng cộng</p>
                                    <h4>{getTotalBill(e)} đ</h4>
                                </div>
                            </div>
                        </div>
                    </li>
                )
            })
        }
    }
    return (
        <div className="user-info">
            <h3>đơn hàng của tôi</h3>
            <div className="user-orders">
                <ul>
                    {getBill(result)}
                </ul>
            </div>
        </div>
    );
}

export default UserOrders;