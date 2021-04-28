import React from 'react';
import MenuLeft from './MenuLeft';
import Header from './Header';
import ProductRight from './ProductRight';
function Product({product}) {
    return (
        <>
            <Header />
            <div className="product">
                <MenuLeft />
                <ProductRight/>
            </div>
        </>
    );
}

export default Product;