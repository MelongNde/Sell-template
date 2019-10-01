import React from 'react'

import CardTemplate from '../../templates/CardTemplate'

const Card = () => {
    return (
        <>
            <CardTemplate>
                <section class="hero">
                    <div class="container">         
                                      
                        <div class="hero-content pb-5 text-center">
                            <h1 class="hero-heading">Shopping cart</h1>
                            <div class="row">   
                                <div class="col-xl-8 offset-xl-2">
                                    <p class="lead text-muted">You have 3 items in your shopping cart</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                <div class="container">
                    <div class="row mb-5"> 
                    <div class="col-lg-8">
                        <div class="cart">
                        <div class="cart-wrapper">
                            <div class="cart-header text-center">
                            <div class="row">
                                <div class="col-5">Item</div>
                                <div class="col-2">Price</div>
                                <div class="col-2">Quantity</div>
                                <div class="col-2">Total</div>
                                <div class="col-1"></div>
                            </div>
                            </div>
                            <div class="cart-body">
                            <div class="cart-item">
                                <div class="row d-flex align-items-center text-center">
                                <div class="col-5">
                                    <div class="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-ian-dooley-347968-unsplash.jpg" alt="..." class="cart-item-img" /></a>
                                    <div class="cart-title text-left"><a href="detail.html" class="text-uppercase text-dark"><strong>Skull Tee</strong></a><br /><span class="text-muted text-sm">Size: Large</span><br /><span class="text-muted text-sm">Colour: Green</span>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-2">$65.00</div>
                                <div class="col-2">
                                    <div class="d-flex align-items-center">
                                    <div class="btn btn-items btn-items-decrease">-</div>
                                    <input type="text" value="4" class="form-control text-center input-items" />
                                    <div class="btn btn-items btn-items-increase">+</div>
                                    </div>
                                </div>
                                <div class="col-2 text-center">$260.00</div>
                                <div class="col-1 text-center"><a href="#" class="cart-remove"> <i class="fa fa-times"></i></a></div>
                                </div>
                            </div>
                            <div class="cart-item">
                                <div class="row d-flex align-items-center text-center">
                                <div class="col-5">
                                    <div class="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-kyle-loftus-596319-unsplash.jpg" alt="..." class="cart-item-img" /></a>
                                    <div class="cart-title text-left"><a href="detail.html" class="text-uppercase text-dark"><strong>Transparent Blouse</strong></a><br /><span class="text-muted text-sm">Size: Medium</span>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-2">$55.00</div>
                                <div class="col-2">
                                    <div class="d-flex align-items-center">
                                    <div class="btn btn-items btn-items-decrease">-</div>
                                    <input type="text" value="3" class="form-control text-center input-items" />
                                    <div class="btn btn-items btn-items-increase">+</div>
                                    </div>
                                </div>
                                <div class="col-2 text-center">$165.00</div>
                                <div class="col-1 text-center"><a href="#" class="cart-remove"> <i class="fa fa-times"></i></a></div>
                                </div>
                            </div>
                            <div class="cart-item">
                                <div class="row d-flex align-items-center text-center">
                                <div class="col-5">
                                    <div class="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-serrah-galos-494312-unsplash.jpg" alt="..." class="cart-item-img" /></a>
                                    <div class="cart-title text-left"><a href="detail.html" class="text-uppercase text-dark"><strong>White Tee</strong></a><br /><span class="text-muted text-sm">Size: Medium</span>
                                    </div>
                                    </div>
                                </div>
                                <div class="col-2">$55.00</div>
                                <div class="col-2">
                                    <div class="d-flex align-items-center">
                                    <div class="btn btn-items btn-items-decrease">-</div>
                                    <input type="text" value="3" class="form-control text-center input-items" />
                                    <div class="btn btn-items btn-items-increase">+</div>
                                    </div>
                                </div>
                                <div class="col-2 text-center">$165.00</div>
                                <div class="col-1 text-center"><a href="#" class="cart-remove"> <i class="fa fa-times"></i></a></div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="my-5 d-flex justify-content-between flex-column flex-lg-row"><a href="category.html" class="btn btn-link text-muted"><i class="fa fa-chevron-left"></i> Continue Shopping</a><a href="checkout1.html" class="btn btn-dark">Proceed to checkout <i class="fa fa-chevron-right"></i>                                                     </a></div>
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
            </CardTemplate>
        </>
    );
}

export default Card
