import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import addressApi from '../api/addressApi';

function Payment(props) {
    const userInfo = useSelector(state => state.user);
    const payment = useSelector(state => state.paymentInfo.payment);
    const add = useSelector(state => state.addrData.province);
    const [province, setProvince] = useState();
    const [district, setDistrict] = useState();
    const [ward, setWard] = useState();
    useEffect(() => {
        const getProvinceInfo = () => {
            if (userInfo.province) {
                let result = add.filter(e => e.province_id === userInfo.province);
                setProvince(result[0].province_name)
            }
        }
        if (add) {
            getProvinceInfo();
        }
    }, [])
    // lấy dữ liệu quận / huyện
    useEffect(() => {
        const fetchDistrictData = async () => {
            try {
                const response = await addressApi.getAllDistrict(userInfo.province);
                let match = response.results.filter(e => e.district_id === userInfo.district);
                if (match) {
                    setDistrict(match[0].district_name)
                }

            }
            catch (err) {
                throw new Error(err);
            }
        }
        if (userInfo.province && add) {
            fetchDistrictData();
        }
    }, [])
    // //lấy dữ liệu phường / xã
    useEffect(() => {
        const fetchWardData = async () => {
            try {
                const response = await addressApi.getAllWard(userInfo.district);
                if (response) {
                    let match = response.results.filter(e => e.ward_id === userInfo.ward)
                    if (match) {
                        setWard(match[0].ward_name)
                    }
                }
            }
            catch (err) {
                throw new Error(err);
            }
        }
        if (userInfo.district) {
            fetchWardData();
        }
    }, [])
    if (userInfo.province && userInfo.district && userInfo.ward) {
        return (
            <div className="payment-box">
                <form>
                    <div className="payment-top payment-content">
                        <h3>Xác nhận thông tin đơn hàng</h3>
                        <div className="form-group">
                            <label>Địa chỉ giao hàng</label>
                            <input
                                value={
                                    userInfo.specificAddr + ", "
                                    + ward + ', '
                                    + district + ', '
                                    + province
                                }
                                disabled
                                type="text"
                                className="form-control"
                                name="address" aria-describedby="helpId"
                            />
                            <NavLink to='/user/address'>
                                <button className="user-btn" >
                                    <i className="fas fa-edit"></i>
                                </button>
                            </NavLink>
                        </div>
                        <div className="form-group">
                            <label>Tên người nhận</label>
                            <input
                                disabled
                                value={userInfo.name}
                                type="text"
                                className="form-control"
                                name="name" aria-describedby="helpId"
                            />
                            <NavLink to='/user/address'>
                                <button className="user-btn" >
                                    <i className="fas fa-edit"></i>
                                </button>
                            </NavLink>
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input
                                disabled
                                value={userInfo.phone}
                                type="text"
                                className="form-check-input"
                                name="phonenumber" aria-describedby="helpId"
                            />
                            <NavLink to='/user/address'>
                                <button className="user-btn" >
                                    <i className="fas fa-edit"></i>
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="payment-bottom payment-content">
                        <h3>Hình thức thanh toán</h3>

                        <div className="form-group">
                            <input
                                disabled
                                type="text"
                                className="form-check-input"
                                name={payment} value={payment === "cod" ?
                                    'Than toán khi nhận hàng'
                                    :
                                    `${payment}`
                                }
                                checked={true}
                            />
                            <NavLink to='/user/payment'>
                                <button className="user-btn" >
                                    <i className="fas fa-edit"></i>
                                </button>
                            </NavLink>
                        </div>

                    </div>
                </form>
            </div>
        );
    }
    else {
        return <Redirect to='/user/address'></Redirect>
    }
}

export default Payment;