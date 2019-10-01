import React from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css'

import 'bootstrap'
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/dropdown'

import Home from  './pages/home'
import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Shop from './pages/Shop'
import ShoppingCard from './pages/ShoppingCard'
import Checkout from './pages/Checkout' 
import DeliveryMethodPage from './pages/DeliveryMethodPage'
import PaymentMethodPage from './pages/PaymentMethodPage'
import OrderReviewPage from './pages/OrderReviewPage'
import PlaceOrderPage from './pages/PlaceOrderPage'
import CustomerOderPage from './pages/CustomerOrderPage'
import ContactPage from './pages/ContactPage'

import 'ekko-lightbox/dist/ekko-lightbox'

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">         
          <Route exact path="/" component={Home} />
          <Route  path={"/login"} component={Login} />
          <Route  path={"/register"} component={Register} />
          <Route path = {'/profile'} component= {Profile} /> 
          <Route path = {'/shop'} component= {Shop} />
          <Route path = {'/card'} component= {ShoppingCard} />  
          <Route path = {'/checkout/adress'} component= {Checkout} />           
          <Route path = {'/checkout/delivery-method'} component= {DeliveryMethodPage} />
          <Route path = {'/checkout/payment-method'} component= {PaymentMethodPage} />             
          <Route path = {'/checkout/order-review'} component= {OrderReviewPage} />                   
          <Route path = {'/checkout/place-order'} component= {PlaceOrderPage} /> 
          <Route path = {'/checkout/customer-order'} component= {CustomerOderPage} />                   
          <Route path = {'/contact'} component= {ContactPage} />                   
        </div>
      </Switch>
    </Router>
  );
}

export default App;
