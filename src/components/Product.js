import React, { useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { firebaseConnect } from './../connect';
import ProductContainer from './ProductContainer';
import MenuLeft from './MenuLeft';
import Header from './Header';
function Product(props) {
    const product = useSelector((state) => state);
    const dispatch = useDispatch();
    let data = product.product.data;
    useEffect(() => {
        let dataProduct = firebaseConnect.database().ref('product/');
        dataProduct.on('value', (snapshot) => {
            dispatch({ type: "SET_PRODUCT", payload: Object.entries(snapshot.val()) });
        })
        let classify = firebaseConnect.database().ref('classify/');
        classify.on('value', (snapshot) => {
            dispatch({ type: "SET_TYPE", payload: snapshot.val() });
        })
    }, [])
    const getItem = () => {
        if (product.search.searchValue.length !== 0) {
            data = product.search.searchValue;
        }
        let type = [];
        let newData = [];
        data.map((ele) => type.push(ele[1].type));
        type = [...new Set(type)];
        type.map((ele) => {
            let x = data.filter((e) => e[1].type === ele);
            newData.push(x);
            return x;
        })
        return newData.map((ele, i) => <ProductContainer data={ele} key={i} />)
    }
    return (
        <>
            <Header />
            <div className="product">
                <MenuLeft />
                <div className="product-right">
                    {getItem()}
                </div>
            </div>
        </>
    );
}

export default Product;