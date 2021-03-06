import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ProductContainer from './ProductContainer';

function ProductRight(props) {
    const product = useSelector((state) => state);
    let data = product.product.data;
    const title = product.product.type;
    const scrollname = product.scroll.scrollName;
    const inputRef = useRef([]);
    useEffect(() => {
        let result;
        for (let i = 0; i < inputRef.current.length; i++) {
            console.log(inputRef.current[i].children[0].children[0])
            if (inputRef.current[i].children[0].children[0].textContent === scrollname) {
                result = i;
            }
        }
        if (result !== undefined) {
            inputRef.current[result].scrollIntoView({ block: 'end', behavior: 'smooth' })
        }

    }, [scrollname])
    const getTitle = (data) => {
        let titleArr = Object.entries(title);
        let x = titleArr.filter((ele) => ele[1].id === data[1][1].type);
        return x[0][1].name;
    }
    const getItem = () => {
        let type = [];
        let newData = [];
        data.map((ele) => type.push(ele[1].type));
        type = [...new Set(type)];
        type.map((ele) => {
            let x = data.filter((e) => e[1].type === ele);
            newData.push(x);
            return x;
        })
        return newData.map((ele, i) =>
            <div ref={el => inputRef.current[i] = el} className="product-container" key={i}>
                <div className="product-title">
                    <h3>{getTitle(ele)}</h3>
                    <NavLink to={`/category/${ele[0][1].type}`}>
                        <button className="product-more-btn">Xem thêm</button>
                    </NavLink>
                </div>
                <ProductContainer data={ele} />
            </div>
        )
    }
    return (
        
            <div className="product-right">
                {getItem()}
            </div>
        
    );
}

export default ProductRight;