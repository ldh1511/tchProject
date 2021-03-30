import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ProductContainer = ({ data }) => {
    const title = useSelector((state) => state.product.type);
    if (title) {
        const getItem = () => {
            return data.map((ele, i) => <Item data={ele} key={i} />)
        }
        const getTitle = () => {
            let titleArr = Object.entries(title);
            let x = titleArr.filter((ele) => ele[1].id === data[1][1].type)
            return x[0][1].name;
        }
        return (
            <div className="product-container">
                <h3>{getTitle()}</h3>
                <div className="product-box">
                    {getItem()}
                </div>
            </div>
        );
    }
    else{
        return <div></div>
    }
}


export default ProductContainer;