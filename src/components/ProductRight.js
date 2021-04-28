import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import ProductContainer from './ProductContainer';

function ProductRight(props) {
    const product = useSelector((state) => state);
    let data = product.product.data;
    const title = useSelector((state) => state.product.type);
    const scrollname = useSelector((state) => state.scroll.scrollName);
    const inputRef = useRef([]);
    useEffect(()=>{
        let result;
        for (let i = 0; i < inputRef.current.length; i++) {
           if(inputRef.current[i].children[0].textContent===scrollname){  
               result=i;
           }
        }
        if(result!==undefined){
           inputRef.current[result].scrollIntoView({block: 'end', behavior: 'smooth'})
        }
        
    },[scrollname])
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
        console.log(newData);
        return newData.map((ele, i) =>
            <div ref={el => inputRef.current[i] = el} className="product-container">
                <h3 >{getTitle(ele)}</h3>
                <ProductContainer data={ele} key={i} />
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