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
import Itempage from './components/Itempage';
import CategoryPage from './components/CategoryPage';
// import Header from './components/Header';

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
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
