import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Itempageright from './Itempageright';

function Itempage(props) {
    const product = useSelector(state => state.product.data);
    const dispatch=useDispatch();
    const liArr=['Đặt ngay','Giới thiệu','Liên quan'];
    let slug = props.location.pathname;
    slug = slug.split('/');
    let match = product.filter(e => e[1].id === parseInt(slug[slug.length - 1]));

    const HandleClickLiEle=(e)=>{
        dispatch({type:"CHANGE_LOCATION_ITEM",loc:e})
    }
    return (
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
                        {liArr.map((e,i)=>
                            <li key={i} onClick={()=>HandleClickLiEle(i)}>{e}</li>
                        )}
                    </ul>
                </div>
                <Itempageright match={match}/>
            </div>
        </div>
    );
}

export default Itempage;