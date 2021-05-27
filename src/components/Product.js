import React from 'react';
import MenuLeft from './MenuLeft';
import Header from './Header';
import Banner from './Banner';
import ProductRight from './ProductRight';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import Footer from './Footer';
function Product() {
    const type = useSelector(state => state.product.type);
    return (
        <>
            {type && Object.keys(type).length !== 0 ?
                <>
                    <Header />
                    <Banner />
                    <div className="product">
                        <MenuLeft />
                        <ProductRight />
                    </div>
                    <Footer/>
                </>
                :
                <LoadingPage />
            }
        </>
    );
}

export default Product;