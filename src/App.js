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
function App(props) {
  const step = useSelector(state => state.step);
  const selected=useSelector((state)=>state.product.selected)
  const dispatch = useDispatch();
  useEffect(() => {
    if (step === 3) {
      dispatch({ type: "RESET_STEP" });
      dispatch({type:"SELECTED"});
    }
  }, [step])
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={() => <Home />}></Route>
          <Route path='/brand-story' component={() => <BrandStory />}></Route>
          <Route exact path='/product' component={() => <Product />}></Route>
          <Route exact path='/order' component={() => {
            return step === 0 ? (<Order />) : (<Redirect to='/payment' />)
          }}></Route>
          <Route exact path='/payment' component={() => {
            return step < 3 ? (<PaymentInfo />) : (<Redirect to='/' />)
          }}></Route>
          <Route path='/store' component={() => <Store />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
