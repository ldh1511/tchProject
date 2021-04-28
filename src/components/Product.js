import React from 'react';
import MenuLeft from './MenuLeft';
import Header from './Header';
import Banner from './Banner';
import ProductRight from './ProductRight';
function Product({product}) {
    return (
        <>
            <Header />
            <Banner/>
            <div className="product">
                <MenuLeft />
                <ProductRight/>
            </div>
        </>
    );
}

export default Product;