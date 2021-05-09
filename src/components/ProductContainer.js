import React from 'react';
import { useSelector } from 'react-redux';
import Item from './Item';

const ProductContainer = ({ data }) => {
    const title = useSelector((state) => state.product.type);

    if (title) {
        const getItem = () => {
            return data.map((ele, i) => {
                if (i < 3) {
                    return <Item data={ele} key={i} />
                }
                return true
            })
        }
        return (
            <div className="product-box">
                {getItem()}
            </div>
        );
    }
    else {
        return <div></div>
    }

}

export default ProductContainer;