import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import BrandStory from './components/BrandStory';
import Product from './components/Product';
import Store from './components/Store';
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
// import Header from './components/Header';
const config = {
  apiKey: 'AIzaSyDXPLduefu6MLOF9pRsmqhdZJn5mF8PE2w',
  authDomain: 'tcfweb-ef85c.firebaseapp.com',
};
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}else {
  firebase.app(); // if already initialized, use that one
}
function App(props) {
  const step = useSelector(state => state.step);
  const dispatch = useDispatch();
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
  useEffect(()=>{
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
      if(!user){
        console.log('User is not logged in')
        return ;
      }
      dispatch({
        type:"USER_LOGIN",
        isLogin:true,
        name: user.displayName,
        photo:user.photoURL,
        userId:user.uid
      })
      const token =await user.getIdToken();
      console.log('Logged in user token ', token);
    });
    return () => unregisterAuthObserver();
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={() => <Home />}></Route>
          <Route path='/brand-story' component={() => <BrandStory />}></Route>
          <Route exact path='/product' component={() => <Product />}></Route>
          <Route  path='/order' component={() => {
            return step === 0 ? (<Order />) : (<Redirect to='/payment' />)
          }}></Route>
          <Route exact path='/payment' component={() => {
            return step < 3 ? (<PaymentInfo />) : (<Redirect to='/' />)
          }}></Route>
          <Route path='/store' component={() => <Store />}></Route>
          <Route path='/category' component={CategoryPage}></Route>
          <Route path='/item' component={Itempage}></Route>
          <Route path='/login' component={LoginPage}></Route>
          <Route path='/user' component={userPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
