import React, { useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import Footer from './Footer';
import Item from './Item';
import { NavLink } from 'react-router-dom';
function Home(props) {
    const loadingState = useSelector(state => state.product.loading);
    const itemState = useSelector(state => state.product.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (itemState.length !== 0) {
            dispatch({ type: "SET_LOADING" })
        }
    }, [itemState]);
    const getProduct=()=>{
        return itemState.map((e,i)=>{
            if(i<=6){
                return <Item data={e} key={i}/>
            }
        })
    }
    return (
        <>
            {
                loadingState === true ?
                    <LoadingPage />
                    :
                    <div>
                        <Header />
                        <Banner />
                        <div className="intro-block">
                            <div className="intro-content">
                                <h3>sản phẩm</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Morbi nec massa tincidunt, fermentum elit vitae, fermentum nibh.
                                    Sed placerat, turpis sit amet ullamcorper mattis, sapien leo finibus eros, at posuere tortor massa ac justo. Duis molestie sem ac neque rutrum, et sodales leo pulvinar.
                                    Quisque in augue nec ante facilisis scelerisque.
                                </p>
                            </div>
                            <div className="intro-bottom">
                                {getProduct()}
                                <NavLink to='/product' className="item intro-btn">
                                    Xem thêm
                                </NavLink>
                            </div>
                        </div>
                        <div className="store-intro">
                            <div className="intro-img">
                                <h3>cửa hàng</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Morbi nec massa tincidunt, fermentum elit vitae, fermentum nibh.
                                    Sed placerat, turpis sit amet ullamcorper mattis, sapien leo finibus eros, at posuere tortor massa ac justo. Duis molestie sem ac neque rutrum, et sodales leo pulvinar.
                                    Quisque in augue nec ante facilisis scelerisque.
                                </p>
                                <NavLink to='/store' className="product-more-btn">
                                    Xem thêm
                                </NavLink>
                            </div>
                        </div>
                        <Footer />
                    </div>
            }

        </>

    );
}

export default Home;