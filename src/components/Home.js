import React, { useEffect } from 'react';
import Header from './Header';
import Banner from './Banner';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
function Home(props) {
    const loadingState = useSelector(state => state.product.loading);
    const itemState = useSelector(state => state.product.data);
    const dispatch = useDispatch();
    useEffect(() => {
        if (itemState.length !== 0) {
            dispatch({ type: "SET_LOADING" })
        }
    }, [itemState])
    return (
        <>
            {
                loadingState === true ?
                    <LoadingPage />
                    :
                    <div>
                        <Header />
                        <Banner />
                    </div>
            }

        </>

    );
}

export default Home;