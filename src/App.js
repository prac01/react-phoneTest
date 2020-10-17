import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';


class App extends Component {
  render() {
    return ( 
       <React.Fragment>
         <Navbar />
         <Switch>
           <Route exact path="/" component={ProductList} />
           <Route path="/details" component={Details} />
           <Route path="/cart" component={Cart} />
           <Route component={Default} />
         </Switch>
         <Modal />
       </React.Fragment>
    );   
  }
}

export default App;

// React Phone E-Commerce Project.mp4 duration: 5:46:04

// note 28 min: making page component
// note 38 min: npm  install --save react-router-dom
// note 40 min: import {BrowserRouter as Router} from 'react-router-dom'; put in  and index.js
// note 41 min: import {Switch,Route} from 'react-router-dom'; put in App.js
// note 50 min: working on navbar
// note 1:00:14 npm install --save styled-components [optional: pwedeng mag css sa loob ng react js file]
// note:  1:30:00 create context.js inside src file
// note: 2:03:50 displaying the products along with css in Product.js
// note: 2:47:40 start of product details page

//note: 3:25:08 is the start of add to cart code

// note: 3:38:48 modal
//note: 4:06:00 cart page, the last component
//note: 5:40:10 404 page (default.js)
//note: 5:46:10 deploy the application