import React from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import Itempageright from './Itempageright';

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
                <Itempageright match={match}/>
            </div>
        </div>
    );
}

export default Itempage;