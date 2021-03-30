import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import BrandStory from './components/BrandStory';
import Product from './components/Product';
import Store from './components/Store';
import Order from './components/Order';
function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={() => <Home />}></Route>
          <Route path='/brand-story' component={() => <BrandStory />}></Route>
          <Route exact path='/product' component={() => <Product />}></Route>
          <Route exact path='/product/order' component={() => <Order />}></Route>
          <Route path='/store' component={() => <Store />}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
