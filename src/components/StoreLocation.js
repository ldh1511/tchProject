import React from 'react';
import Banner from './Banner';
import Header from './Header';
import store from './../img/store.jpg';
function BrandStory(props) {
    return (
        <>
            <Header />
            <Banner />
            <div className="store-container">
                <div className="store-search">
                    <form className="store-form">
                        <div class="form-group">
                            <label> Tỉnh / Thành phố</label>
                            <select className="form-control" >
                                <option>Hà Nội</option>
                                <option>TP HCM</option>
                                <option>Đà Nẵng</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label>Quận / Huyện</label>
                            <select className="form-control" >
                                <option>Cầu Giấy</option>
                                <option>Đống Đa</option>
                                <option>Ba Đình</option>
                            </select>
                        </div>
                        <button><i className="fas fa-search"></i></button>
                    </form>
                </div>
                <div className="store-block">
                    <div className="store-item">
                        <div className="store-item-block">
                            <img alt="" src={store}></img>
                        </div>
                        <div className="store-item-block">
                            <h3>aeon mall hà đông</h3>
                            <ul>
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    Phường Dương Nội, Quận Hà Đông, TP. Hà Nội
                                </li>
                                <li>
                                    <i className="far fa-calendar-alt"></i>
                                    9:00 AM - 10:00 PM
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i>
                                    123456789
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="store-item">
                        <div className="store-item-block">
                            <img alt="" src={store}></img>
                        </div>
                        <div className="store-item-block">
                            <h3>aeon mall hà đông</h3>
                            <ul>
                                <li>
                                    <span>Địa chỉ</span>
                                    Phường Dương Nội, Quận Hà Đông, TP. Hà Nội
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    9:00 AM - 10:00 PM
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    123456789
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="store-item">
                        <div className="store-item-block">
                            <img alt="" src={store}></img>
                        </div>
                        <div className="store-item-block">
                            <h3>aeon mall hà đông</h3>
                            <ul>
                                <li>
                                    <span>Địa chỉ</span>
                                    Phường Dương Nội, Quận Hà Đông, TP. Hà Nội
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    9:00 AM - 10:00 PM
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    123456789
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="store-item">
                        <div className="store-item-block">
                            <img alt="" src={store}></img>
                        </div>
                        <div className="store-item-block">
                            <h3>aeon mall hà đông</h3>
                            <ul>
                                <li>
                                    <span>Địa chỉ</span>
                                    Phường Dương Nội, Quận Hà Đông, TP. Hà Nội
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    9:00 AM - 10:00 PM
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    123456789
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="store-item">
                        <div className="store-item-block">
                            <img alt="" src={store}></img>
                        </div>
                        <div className="store-item-block">
                            <h3>aeon mall hà đông</h3>
                            <ul>
                                <li>
                                    <span>Địa chỉ</span>
                                    Phường Dương Nội, Quận Hà Đông, TP. Hà Nội
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    9:00 AM - 10:00 PM
                                </li>
                                <li>
                                    <span>Địa chỉ</span>
                                    123456789
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BrandStory;