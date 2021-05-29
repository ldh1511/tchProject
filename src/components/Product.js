import React from 'react';
import MenuLeft from './MenuLeft';
import Header from './Header';
import Banner from './Banner';
import ProductRight from './ProductRight';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import Footer from './Footer';
import Image from './../img/background2.jpg';
function Product() {
    const type = useSelector(state => state.product.type);
    return (
        <>
            {type && Object.keys(type).length !== 0 ?
                <>
                    <Header />
                    <Banner img={Image} title={`sản phẩm`}/>
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