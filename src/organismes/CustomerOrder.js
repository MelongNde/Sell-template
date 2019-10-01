import React from 'react'


const CustomerOrder = () => {
    return (
        <>
            <section class="hero">
                <div class="container">
                <div class="hero-content pb-5 text-center">
                    <h1 class="hero-heading">Order #1735</h1>
                    <div class="row">   
                    <div class="col-xl-8 offset-xl-2"><p class="lead text-muted">Order #1735 was placed on <strong>22/06/2013</strong> and is currently <strong>Being prepared</strong>.</p><p class="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p></div>
                    </div>
                </div>
            </div>
            </section>

            <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-xl-9">
            <div class="cart">
              <div class="cart-wrapper">
                <div class="cart-header text-center">
                  <div class="row">
                    <div class="col-6">Item</div>
                    <div class="col-2">Price</div>
                    <div class="col-2">Quantity</div>
                    <div class="col-2">Total</div>
                  </div>
                </div>
                <div class="cart-body">
                  <div class="cart-item">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-6">
                        <div class="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-ian-dooley-347968-unsplash.jpg" alt="..." class="cart-item-img" /></a>
                          <div class="cart-title text-left"><a href="detail.html" class="text-uppercase text-dark"><strong>Skull Tee</strong></a><br /><span class="text-muted text-sm">Size: Large</span><br /><span class="text-muted text-sm">Colour: Green</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">$65.00</div>
                      <div class="col-2">4
                      </div>
                      <div class="col-2 text-center">$260.00</div>
                    </div>
                  </div>
                  <div class="cart-item">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-6">
                        <div class="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-kyle-loftus-596319-unsplash.jpg" alt="..." class="cart-item-img" /></a>
                          <div class="cart-title text-left"><a href="detail.html" class="text-uppercase text-dark"><strong>Transparent Blouse</strong></a><br /><span class="text-muted text-sm">Size: Medium</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">$55.00</div>
                      <div class="col-2">3
                      </div>
                      <div class="col-2 text-center">$165.00</div>
                    </div>
                  </div>
                  <div class="cart-item">
                    <div class="row d-flex align-items-center text-center">
                      <div class="col-6">
                        <div class="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-serrah-galos-494312-unsplash.jpg" alt="..." class="cart-item-img" /></a>
                          <div class="cart-title text-left"><a href="detail.html" class="text-uppercase text-dark"><strong>White Tee</strong></a><br /><span class="text-muted text-sm">Size: Medium</span>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">$55.00</div>
                      <div class="col-2">3
                      </div>
                      <div class="col-2 text-center">$165.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row my-5">
              <div class="col-md-6">
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
              <div class="col-md-6">
                <div class="block-header">
                  <h6 class="text-uppercase mb-0">Invoice address</h6>
                </div>
                <div class="block-body bg-light pt-1">
                  <p>John Brown<br />13/25 New Avenue<br />New Heaven<br />45Y 73J<br />England<br /><strong>Great Britain</strong></p>
                </div>
                <div class="block-header">
                  <h6 class="text-uppercase mb-0">Shipping address</h6>
                </div>
                <div class="block-body bg-light pt-1">
                  <p>John Brown<br />13/25 New Avenue<br />New Heaven<br />45Y 73J<br />England<br /><strong>Great Britain</strong></p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 mb-5">
            <div class="customer-sidebar card border-0"> 
              <div class="customer-profile"><a href="#" class="d-inline-block"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" class="img-fluid rounded-circle customer-image" /></a>
                <h5>Julie Svestkova</h5>
                <p class="text-muted text-sm mb-0">Ostrava, Czech republic</p>
              </div>
              <nav className="list-group customer-nav"><a href="customer-orders.html" className="list-group-item d-flex justify-content-between align-items-center"><span>
              <svg className="svg-icon svg-icon-heavy mr-2">
              <use xlinkHref="#paper-bag-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="paper-bag-1">
                  <title>Paper Bag</title>
                  <desc>A line styled icon from Orion Icon Library.</desc>
                  <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M8 22h48v40H8z" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                  <path data-name="layer1" d="M22 26V12A10 10 0 0 1 32 2a10 10 0 0 1 10 10v14" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
              </svg>
              </use>
              </svg>Orders</span>
          <div className="badge badge-pill badge-dark font-weight-normal px-3">5</div></a><a href="customer-account.html" className="active list-group-item d-flex justify-content-between align-items-center"><span>
              <svg className="svg-icon svg-icon-heavy mr-2">
              <use xlinkHref="#male-user-1">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="navigation-map-1">
                  <title>Navigation Map</title>
                  <desc>A line styled icon from Orion Icon Library.</desc>
                  <path d="M24.4 32.8L20 33.9l-18-6v28L20 62l24-6.1 18 5v-27l-12-4m-30 4V62m24-24v17.9" stroke-miterlimit="10" stroke="#202020" fill="none" data-name="layer2" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                  <path stroke-miterlimit="10" stroke="#202020" fill="none" d="M32 2a14 14 0 0 0-14 14c0 12.6 14 26 14 26s14-13.4 14-26A14 14 0 0 0 32 2z" data-name="layer1" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                  <circle stroke-miterlimit="10" stroke="#202020" fill="none" r="4" cy="16" cx="32" data-name="layer1" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></circle>
              </svg>
              </use>
              </svg>Profile</span></a><a href="customer-addresses.html" className="list-group-item d-flex justify-content-between align-items-center"><span>
              <svg className="svg-icon svg-icon-heavy mr-2">
              <use xlinkHref="#navigation-map-1">
              <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" id="exit-1">
                  <title>Exit</title>
                  <desc>A line styled icon from Orion Icon Library.</desc>
                  <path d="M22 48h16V4H2v43l20 14V19L2 4" stroke-miterlimit="10" stroke-linecap="round" stroke="#202020" fill="none" data-name="layer2" stroke-linejoin="round"></path>
                  <path d="M32 26h29M51 16l10 10-10 10" stroke-miterlimit="10" stroke-linecap="round" stroke="#202020" fill="none" data-name="layer1" stroke-linejoin="round"></path>
              </svg>
              </use>
              </svg>Addresses</span></a><a href="customer-login.html" className="list-group-item d-flex justify-content-between align-items-center"><span>
              <svg className="svg-icon svg-icon-heavy mr-2">
              <use xlinkHref="#exit-1"> </use>
              </svg>Log out</span></a>
      </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}




export default CustomerOrder