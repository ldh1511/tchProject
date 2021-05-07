import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Itempageright from './Itempageright';

function Itempage(props) {
    const product = useSelector(state => state.product.data);
    const dispatch = useDispatch();
    const liArr = ['Đặt ngay', 'Giới thiệu', 'Liên quan']; // Danh sách các thẻ li
    let slug = props.location.pathname; // id của sản phẩm trên url
    slug = slug.split('/');
    let match = product.filter(e => e[1].id === parseInt(slug[slug.length - 1]));
    // Lấy ra sản phẩm phù hợp với id trên url
    useEffect(() => {
        dispatch({ // Sản phảm
            type: "SELECT_ITEM",
            item: match[0],
            total: match[0][1].price
        })
    }, [])
    const HandleClickLiEle = (e) => {
        dispatch({ type: "CHANGE_LOCATION_ITEM", loc: e })
    }
    return (
        <>
            <Header />
            <div className="item-pages">
                <div className="item-pages-container">
                    <div className="item-pages-left">
                        <ul>
                            <li><img src={match[0][1].link} alt=""></img></li>
                            <li><img src={match[0][1].link} alt=""></img></li>
                            <li><img src={match[0][1].link} alt=""></img></li>
                        </ul>
                    </div>
                    <div className="item-pages-center">
                        <ul >
                            {liArr.map((e, i) =>
                                <li key={i} onClick={() => HandleClickLiEle(i)}>{e}</li>
                            )}
                        </ul>
                    </div>
                    <Itempageright match={match} />
                </div>
            </div>
        </>
    );
}

export default Itempage;