import React from 'react'

import {Link } from 'react-router-dom'

const DeliveryMethod = () => {
    return (
        <>
            <section class="hero">
                <div class="container">
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Checkout</h1>
                    <div class="row">   
                    <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Choose your delivery method.</p></div>
                    </div>
                </div>
                </div>
            </section>
            <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <ul class="custom-nav nav nav-pills mb-5">
              <li class="nav-item w-25"><a href="checkout1.html" class="nav-link text-sm ">Address</a></li>
              <li class="nav-item w-25"><a href="checkout2.html" class="nav-link text-sm active">Delivery Method</a></li>
              <li class="nav-item w-25"><a href="#" class="nav-link text-sm disabled">Payment Method </a></li>
              <li class="nav-item w-25"><a href="#" class="nav-link text-sm disabled">Order Review</a></li>
            </ul>
            <div class="block my-5">
              <div class="block-body">
                <div class="row">
                  <div class="form-group col-md-6 d-flex align-items-center">
                    <input type="radio" name="shippping" id="option0" />
                    <label for="option0" class="ml-3"><strong class="d-block text-uppercase mb-2">Usps next day</strong><span class="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                  </div>
                  <div class="form-group col-md-6 d-flex align-items-center">
                    <input type="radio" name="shippping" id="option1" />
                    <label for="option1" class="ml-3"><strong class="d-block text-uppercase mb-2">Usps next day</strong><span class="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                  </div>
                  <div class="form-group col-md-6 d-flex align-items-center">
                    <input type="radio" name="shippping" id="option2" />
                    <label for="option2" class="ml-3"><strong class="d-block text-uppercase mb-2">Usps next day</strong><span class="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                  </div>
                  <div class="form-group col-md-6 d-flex align-items-center">
                    <input type="radio" name="shippping" id="option3" />
                    <label for="option3" class="ml-3"><strong class="d-block text-uppercase mb-2">Usps next day</strong><span class="text-muted text-sm">Get it right on next day - fastest option possible.</span></label>
                  </div>
                </div>
              </div>
              <div class="mb-5 d-flex justify-content-between flex-column flex-lg-row"><Link to="/checkout/adress" class="btn btn-link text-muted"> <i class="fa fa-angle-left mr-2"></i>Back to the addresses</Link><Link to="/checkout/payment-method" class="btn btn-dark">Choose payment method<i class="fa fa-angle-right ml-2"></i></Link></div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="block mb-5">
              <div class="block-header">
                <h6 class="text-uppercase mb-0">Order Summary</h6>
              </div>
              <div class="block-body bg-light pt-1">
                <p class="text-sm">Shipping and additional costs are calculated based on values you have entered.</p>
                <ul class="order-summary mb-0 list-unstyled">
                  <li class="order-summary-item"><span>Order Subtotal </span><span>$390.00</span></li>
                  <li class="order-summary-item"><span>Shipping and handling</span><span>$10.00</span></li>
                  <li class="order-summary-item"><span>Tax</span><span>$0.00</span></li>
                  <li class="order-summary-item border-0"><span>Total</span><strong class="order-summary-total">$400.00</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    );
}

export default DeliveryMethod;
