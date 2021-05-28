import React, { useEffect, useState } from 'react';
import Banner from './Banner';
import Header from './Header';
import store from './../img/store.jpg';
import axios from 'axios';
import LoadingPage from './LoadingPage';
import Footer from './Footer';
import gif from './../img/store-location.gif';
function BrandStory(props) {
    const [storeLoc, setStore] = useState();
    const [state, setState] = useState();
    const [result, setResult] = useState();
    const [searchVal, setSearchVal] = useState({
        city: '',
        district: ''
    })
    useEffect(() => {
        const getApi = async () => {
            let response = await axios.get('https://api.thecoffeehouse.com/api/get_all_store');
            return response.data;
        }
        const handleData = async () => {
            let data = await getApi();
            setStore(data);
            let storeNew = data.filter(e => e.state_name === 'Hà Nội' || e.state_name === 'Hồ Chí Minh');
            let districtArr = [];
            storeNew.map(e => {
                districtArr.push(e.state_name);
            })
            districtArr = Array.from(new Set(districtArr));
            setState(districtArr);
        }
        handleData();
    }, [])
    const getSatateOption = () => {
        return state.map(e => <option key={e}>{e}</option>)
    }
    const getDistrictOption = (city) => {
        let result = storeLoc.filter(e => e.state_name === city);
        let districtArr = []
        result.map((e) => {
            districtArr.push(e.district_name);
        })
        districtArr = Array.from(new Set(districtArr));
        return districtArr.map(e => <option value={e}>{e}</option>)
    }

    const handleSelect = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setSearchVal({ ...searchVal, [name]: value })
    }
    const handleClickSearchBtn = (e) => {
        e.preventDefault();
        let resultSearch = storeLoc.filter(
            e => e.state_name === searchVal.city && e.district_name === searchVal.district
        );
        setResult(resultSearch);
    }
    const getStore = () => {
        if (result) {
            return result.map(e => {
                return (
                    <div className="store-item">
                        <div className="store-item-block">
                            <img alt="" src={store}></img>
                        </div>
                        <div className="store-item-block">
                            <h3>{e.external_name}</h3>
                            <ul>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    {e.address.full_address}
                                </li>
                                <li>
                                    <i className="far fa-calendar-alt"></i>
                                    {e.opening_time} AM - {e.closing_time} PM
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i>
                                    123456789
                                </li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
        else{
            return (
                <div className="loading-store--gif">
                    <img alt="" src={gif}></img>
                </div>
            )
        }
    }
    if (storeLoc && state) {
        return (
            <>
                <Header />
                <Banner />
                <div className="store-container">
                    <div className="store-search">
                        <form className="store-form">
                            <div className="form-group">
                                <label> Tỉnh / Thành phố</label>
                                <select className="form-control" name="city"
                                    onChange={(e) => handleSelect(e)}
                                >
                                    <option hidden value="default">Lựa chọn Tỉnh/ Thành phố</option>
                                    {getSatateOption()}

                                </select>
                            </div>
                            <div className="form-group">
                                <label>Quận / Huyện</label>
                                <select className="form-control" name="district"
                                    onChange={(e) => handleSelect(e)}
                                >
                                    <option hidden value="default">Lựa chọn Quận/ Huyện</option>
                                    {getDistrictOption(searchVal.city)}
                                </select>
                            </div>
                            <button onClick={(e) => handleClickSearchBtn(e)}>
                                <i className="fas fa-search"></i>
                            </button>
                        </form>
                    </div>
                    <div className="store-block">
                        {getStore()}
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
    else {
        return <LoadingPage />
    }
}


export default BrandStory;