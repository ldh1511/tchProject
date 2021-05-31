import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import BrandStory from './components/StoreLocation';
import Product from './components/Product';
import Order from './components/Order';
import PaymentInfo from './components/PaymentInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { firebaseConnect } from './connect';
import firebase from 'firebase';
import Itempage from './components/Itempage';
import CategoryPage from './components/CategoryPage';
import LoginPage from './components/LoginPage';
import userPage from './components/userPage';
import addressApi from './api/addressApi';
import ScrollToTop from './components/ScrollToTop';
const config = {
  apiKey: 'AIzaSyDXPLduefu6MLOF9pRsmqhdZJn5mF8PE2w',
  authDomain: 'tcfweb-ef85c.firebaseapp.com',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app(); // if already initialized, use that one
}
function App(props) {
  const step = useSelector(state => state.step);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  // Lấy dữ liệu tỉnh thành
  useEffect(() => {
    const fetchAddressDataList = async () => {
      try {
        const response = await addressApi.getAllCity();
        dispatch({ type: "SET_CITY", province: response.results });
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchAddressDataList()
  }, [])

  useEffect(() => {
    if (step === 3) {
      dispatch({ type: "RESET_STEP" });
      dispatch({ type: "SELECTED" });
    }
    let dataProduct = firebaseConnect.database().ref('product/');
    dataProduct.on('value', (snapshot) => {
      dispatch({ type: "SET_PRODUCT", payload: Object.entries(snapshot.val()) });
    })
    let classify = firebaseConnect.database().ref('classify/');
    classify.on('value', (snapshot) => {
      dispatch({ type: "SET_TYPE", payload: snapshot.val() });
    })
  }, [step])

  //Handle Firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if (!user) {
        return;
      }
      let users = firebaseConnect.database().ref('users');
      users.orderByChild('userId').equalTo(`${user.uid}`).on('value', (snapshot) => {
        if (snapshot.val() === null) {
          let userInfo = {
            userId: user.uid,
            name: user.displayName,
            photo: user.photoURL,
            province: "",
            district: "",
            ward: "",
            specificAddr: "",
            phone: "",
            payment: ""
          }
          firebaseConnect.database().ref('users').push(userInfo);
        }
        else {
          let key = Object.keys(snapshot.val())[0];
          let userData = snapshot.val()[`${key}`];
          dispatch({
            type: "UPDATE_INFO",
            province: userData.province,
            district: userData.district,
            ward: userData.ward,
            specificAddr: userData.specificAddr,
            phone: userData.phone
          })
        }
      })
      dispatch({
        type: "USER_LOGIN",
        isLogin: true,
        name: user.displayName,
        photo: user.photoURL,
        userId: user.uid
      })
      // const token = await user.getIdToken();
    });
    return () => unregisterAuthObserver();
  }, [])
  return (
    <HashRouter>
      <ScrollToTop>
        <div className="App">
          <Switch>
            <Route exact path='/' component={() => <Home />}></Route>
            <Route path='/store' component={() => <BrandStory />}></Route>
            <Route exact path='/product' component={() => <Product />}></Route>
            <Route path='/order' component={() => {
              return step === 0 ?
                (<Order />)
                :
                (<Redirect to='/payment' />)
            }}></Route>
            <Route exact path='/payment' component={() => {
              return user.isLogin === true ? (<PaymentInfo />) : (<Redirect to='/login' />)
            }}></Route>
            {/* <Route path='/store' component={() => <Store />}></Route> */}
            <Route path='/category' component={CategoryPage}></Route>
            <Route path='/item' component={Itempage}></Route>
            <Route path='/login' component={LoginPage}></Route>
            <Route path='/user' component={userPage}></Route>
          </Switch>
        </div>
      </ScrollToTop>
    </HashRouter>
  );
}
export default App;
