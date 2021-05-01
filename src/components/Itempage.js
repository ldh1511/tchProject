import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';

function Itempage(props) {
    const product = useSelector(state => state.product.data);
    let slug = props.location.pathname;
    slug = slug.split('/');
    let match = product.filter(e => e[1].id === parseInt(slug[slug.length - 1]));
    return (
        <div className="item-pages">
            <Header />
            <div className="item-pages-container">
                <div className="item-pages-left">
                <img src={match[0][1].link} alt=""></img>
                </div>
                <div className="item-pages-center">
                    <ul>
                        <li>Đặt ngay</li>
                        <li>Giới thiệu</li>
                        <li>Liên quan</li>
                    </ul>
                </div>
                <div className="item-pages-right">
                    <h1>{match[0][1].name}</h1>
                    <p>{match[0][1].description}</p>
                    <div className="item-pages-block">
                        <h4>Số lượng</h4>
                        <input className="form-control" name="quantity" type="number" aria-describedby="helpId" ></input>
                    </div>
                    <div className="item-pages-block">
                        <h4>Size</h4>
                        <div className="form-size">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" defaultValue="0" />
                            Checkbox
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" />
                            Checkbox
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" name="" id="" value="checkedValue" />
                            Checkbox
                            </div>
                        </div>
                    </div>
                    <div className="item-pages-block">
                        <h3>{match[0][1].price} đ</h3>
                    </div>
                    <button className="item-pages--btn">
                        Thêm vào giỏ
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Itempage;