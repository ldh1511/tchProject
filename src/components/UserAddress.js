import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addressApi from '../api/addressApi';
import { firebaseConnect } from '../connect';
import ModalNoti from './ModalNoti';

function UserAddress(props) {
    const addrData = useSelector(state => state.addrData);
    const userData = useSelector(state => state.user);
    const active = useSelector(state => state.product.active_noti);
    const dispatch = useDispatch();
    const [curAddr, setCurAddr] = useState({
        province: userData.province,
        district: userData.district,
        ward: userData.ward,
        specificAddr: userData.specificAddr,
        phone: userData.phone,
        check:false
    })
    const handleSelectAddr = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setCurAddr({ ...curAddr, [name]: value })
    }
    const getCityAddr = () => {
        return addrData.province.map((e, i) =>
            <option key={i} value={e.province_id}>{e.province_name}</option>
        )
    }
    const getDistrictAddr = () => {
        return addrData.districts.map((e, i) =>
            <option key={i} value={e.district_id}>{e.district_name}</option>
        )
    }
    const getWardAddr = () => {
        return addrData.ward.map((e, i) =>
            <option key={i} value={e.ward_id}>{e.ward_name}</option>
        )
    }
    const updateUserInfo = (e) => {
        e.preventDefault();
        let users = firebaseConnect.database().ref('users');
        let key;
        users.orderByChild('userId').equalTo(`${userData.userId}`).on('value', (snapshot) => {
            key = Object.keys(snapshot.val())[0];
        })
        if (curAddr.province && curAddr.district && curAddr.ward && curAddr.specificAddr && curAddr.phone) {
            users.child(key).update({
                province: curAddr.province,
                district: curAddr.district,
                ward: curAddr.ward,
                specificAddr: curAddr.specificAddr,
                phone: curAddr.phone
            })
            dispatch({
                type: "UPDATE_INFO",
                province: curAddr.province,
                district: curAddr.district,
                ward: curAddr.ward,
                specificAddr: curAddr.specificAddr,
                phone: curAddr.phone
            });
            setCurAddr({...curAddr, check:true})
        }
        else{
            setCurAddr({...curAddr, check:false})
        }
        dispatch({ type: "SET_ACTIVE_NOTI" })
    }
    const getModal = () => {
        if (active === true) {
            return <ModalNoti props={curAddr.check}/>
        }
    }
    // l???y d??? li???u qu???n / huy???n
    useEffect(() => {
        const fetchDistrictData = async () => {
            try {
                const response = await addressApi.getAllDistrict(curAddr.province);
                dispatch({ type: "SET_DISTRICT", districts: response.results });
            }
            catch (err) {
                throw new Error(err);
            }
        }
        if (curAddr.province !== "") {
            fetchDistrictData();
        }
    }, [curAddr.province])
    //l???y d??? li???u ph?????ng / x??
    useEffect(() => {
        const fetchWardData = async () => {
            try {
                const response = await addressApi.getAllWard(curAddr.district);
                dispatch({ type: "SET_WARD", ward: response.results });
            }
            catch (err) {
                throw new Error(err);
            }
        }
        if (curAddr.district !== "") {
            fetchWardData();
        }
    }, [curAddr.district])
    return (
        <div className="user-info">
            <h3>?????a ch??? nh???n h??ng </h3>
            <form className="user-addr-form">
                <div className="form-group">
                    <label>T???nh / Th??nh ph??? *</label>
                    <select className="form-control" name="province"
                        onChange={(e) => handleSelectAddr(e)}
                        value={curAddr.province}
                    >
                        {getCityAddr()}
                    </select>
                </div>
                <div className="form-group">
                    <label>Qu???n / Huy???n / Th??? x?? *</label>
                    <select className="form-control" name="district"
                        onChange={(e) => handleSelectAddr(e)}
                        value={curAddr.district}
                    >
                        {getDistrictAddr()}
                    </select>
                </div>
                <div className="form-group">
                    <label>Ph?????ng / X?? *</label>
                    <select className="form-control" name="ward"
                        onChange={(e) => handleSelectAddr(e)}
                        value={curAddr.ward}
                    >
                        {getWardAddr()}
                    </select>
                </div>
                <div className="form-group">
                    <label>?????a ch??? c??? th??? *</label>
                    <input
                        type="text"
                        className="form-control" name="specificAddr"
                        aria-describedby="helpId" placeholder="S??? nh?? / th??n / x??m"
                        value={curAddr.specificAddr}
                        onChange={(e) => handleSelectAddr(e)}
                    />
                </div>
                <div className="form-group">
                    <label>S??? ??i???n tho???i *</label>
                    <input
                        type="text"
                        className="form-control" name="phone"
                        aria-describedby="helpId"
                        value={curAddr.phone}
                        onChange={(e) => handleSelectAddr(e)}
                    />
                </div>
                <p className="warning">
                    <i className="fas fa-exclamation-triangle"></i> <span>*</span> B???t bu???c
                </p>
                <button className="user-btn" onClick={e => updateUserInfo(e)}>
                    C???p nh???t
                </button>
            </form>
            {getModal()}
        </div>
    );
}

export default UserAddress;