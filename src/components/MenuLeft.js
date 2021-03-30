import React from 'react';
import { useSelector } from 'react-redux';

const MenuLeft = (props) => {
    const data = useSelector((state) => state.product.type);
    if (data) {
        let dataArr = Object.entries(data);
        const getTitle = () => {
            return dataArr.map((ele, i) => <li key={i}>{ele[1].name}</li>)
        }
        return (
            <div className="menu-left">
                <ul>
                    {getTitle()}
                </ul>
            </div>
        );
    }
    else{
        return <div></div>
    }
}


export default MenuLeft;