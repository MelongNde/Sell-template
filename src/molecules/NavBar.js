import React from 'react'
import 'bootstrap/'
import {Router, Link} from 'react-router-dom'
 
const NavBar = () => {
    return(
        <header className = 'header header-absolute'>
            <nav className="navbar navbar-expand-lg bg-transparent navbar-sticky navbar-airy navbar-dark bg-hover-white bg-fixed-white navbar-hover-light navbar-fixed-light">
        <div className="container-fluid">  
          <a href="index.html" className="navbar-brand">
            <svg className="navbar-brand-svg" viewBox="0 0 65 16" width="85" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="navbar-brand-svg-text" d="M5.72266 18.1562C4.88281 18.1562 4.08529 18.0033 3.33008 17.6973C2.58138 17.3913 1.94661 16.9355 1.42578 16.3301C0.911458 15.7181 0.582682 14.9759 0.439453 14.1035L2.90039 13.4785C2.98503 14.2988 3.28776 14.9173 3.80859 15.334C4.33594 15.7507 4.98698 15.959 5.76172 15.959C6.23698 15.959 6.64714 15.8841 6.99219 15.7344C7.33724 15.5781 7.59766 15.3665 7.77344 15.0996C7.94922 14.8327 8.03711 14.5332 8.03711 14.2012C8.03711 13.804 7.91341 13.4655 7.66602 13.1855C7.42513 12.9056 7.1224 12.6745 6.75781 12.4922C6.39323 12.3099 5.89193 12.0918 5.25391 11.8379C4.42057 11.5059 3.74674 11.1999 3.23242 10.9199C2.7181 10.6335 2.27539 10.2363 1.9043 9.72852C1.53971 9.2207 1.35742 8.57943 1.35742 7.80469C1.35742 7.01693 1.54948 6.33659 1.93359 5.76367C2.32422 5.18424 2.84505 4.74479 3.49609 4.44531C4.15365 4.14583 4.8763 3.99609 5.66406 3.99609C6.54948 3.99609 7.35677 4.19792 8.08594 4.60156C8.8151 4.9987 9.40755 5.60417 9.86328 6.41797L7.80273 7.67773C7.56185 7.20898 7.24609 6.84766 6.85547 6.59375C6.46484 6.33333 6.03841 6.20312 5.57617 6.20312C5.25065 6.20312 4.95443 6.26497 4.6875 6.38867C4.42708 6.51237 4.21875 6.68815 4.0625 6.91602C3.91276 7.13737 3.83789 7.39128 3.83789 7.67773C3.83789 8.0293 3.95182 8.32878 4.17969 8.57617C4.40755 8.82357 4.69401 9.0319 5.03906 9.20117C5.39062 9.37044 5.86914 9.57227 6.47461 9.80664C7.33398 10.1387 8.0306 10.4512 8.56445 10.7441C9.09831 11.0371 9.55729 11.4473 9.94141 11.9746C10.3255 12.502 10.5176 13.1693 10.5176 13.9766C10.5176 14.8229 10.3027 15.5618 9.87305 16.1934C9.44987 16.8249 8.8737 17.3099 8.14453 17.6484C7.41536 17.987 6.60807 18.1562 5.72266 18.1562ZM16.8906 4.20117H26.0703V6.47656H19.3711V9.96289H25.6113V12.2383H19.3711V15.6562H26.0703V18H16.8906V4.20117ZM33.0586 4.20117H35.5391V15.6562H41.4375V18H33.0586V4.20117ZM47.4492 4.20117H49.9297V15.6562H55.8281V18H47.4492V4.20117Z" transform="translate(0 -3)" fill="#212529"></path>
            <path className="text-primary" d="M62.0254 15.4219H64.418V18H62.0254V15.4219Z" transform="translate(0 -3)" fill="#9A6EE2"></path>
            </svg></a>
          <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler navbar-toggler-right"><i className="fa fa-bars"></i></button>
          
          <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown"><Link id="homeDropdownMenuLink" to="/" data-target="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link active">
                   
                  Home</Link>
              </li>
              <li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link>
              </li>
              <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link>
              </li>              
            </ul>
            <div className="d-flex align-items-center justify-content-between justify-content-lg-end mt-1 mb-2 my-lg-0">
              
              <div data-toggle="search" className="nav-item navbar-icon-link">
                <svg className="svg-icon">
                  <use xlinkHref="#search-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="search-1">
                        <title>Search</title>
                        <desc>A line styled icon from Orion Icon Library.</desc>
                        <path  fill="none" stroke="#202020" stroke-miterlimit="10" d="M39.049 39.049L56 56" stroke-linejoin="round" stroke-linecap="round" style={{stroke:'var(--layer1, #202020)'}}></path>
                        <circle data-name="layer1" cx="27" cy="27" r="17" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:'var(--layer1, #202020)'}}></circle>
                    </svg>
                    </use>
                </svg>
              </div>
              
              <div className="nav-item"><Link to="/login" className="navbar-icon-link">
                  <svg className="svg-icon">
                    <use xlinkHref="#male-user-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="male-user-1">
                            <title>Male User</title>
                            <desc>A line styled icon from Orion Icon Library.</desc>
                            <path data-name="layer2" d="M50.9 55.3a12.2 12.2 0 0 0-4.3-1.7c-8.1-1.5-8.1-4.1-8.1-5.7v-1a14.8 14.8 0 0 0 4.2-7.1c2.5 0 3-5.1 3-5.9s.1-3.8-2.4-3.8c5.4-14.6-8.9-20.5-19.6-13-4.4 0-4.8 6.5-3.1 13-2.5 0-2.4 3.1-2.4 3.8s.6 5.9 3 5.9a14.8 14.8 0 0 0 4.3 7.2v1c0 1.6 0 4.2-8.1 5.7a11.9 11.9 0 0 0-4.3 1.6" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                            <circle data-name="layer1" cx="32" cy="32" r="30" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></circle>
                        </svg>
                    </use>
                  </svg><span className="text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none">Log in    </span></Link></div>
              
              <div className="nav-item dropdown"><a href="cart.html" className="navbar-icon-link d-lg-none"> 
                  <svg className="svg-icon">
                    <use xlinkHref="#cart-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="cart-1">
                            <title>Cart</title>
                            <desc>A line styled icon from Orion Icon Library.</desc>
                            <path data-name="layer2" fill="none" stroke="#202020" stroke-miterlimit="10" d="M2 6h10l10 40h32l8-24H16" stroke-linejoin="round" stroke-linecap="round" style={{stroke:'var(--layer1, #202020)'}}></path>
                            <circle data-name="layer1" cx="23" cy="54" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:'var(--layer1, #202020)'}}></circle>
                            <circle data-name="layer1" cx="49" cy="54" r="4" fill="none" stroke="#202020" stroke-miterlimit="10" stroke-linejoin="round" stroke-linecap="round" style={{stroke:'var(--layer1, #202020)'}}></circle>
                        </svg>
                    </use>
                  </svg><span className="text-sm ml-2 ml-lg-0 text-uppercase text-sm font-weight-bold d-none d-sm-inline d-lg-none">View cart</span></a>
                <div className="d-none d-lg-block"><a id="cartdetails" href="cart.html" data-target="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="navbar-icon-link dropdown-toggle">
                    <svg className="svg-icon">
                      <use xlinkHref="#cart-1"> </use>
                    </svg>
                    <div className="navbar-icon-link-badge">3                         </div></a>
                  <div aria-labelledby="cartdetails" className="dropdown-menu dropdown-menu-right p-4">
                    <div className="navbar-cart-product-wrapper">
                      <div className="navbar-cart-product"> 
                        <div className="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-ian-dooley-347968-unsplash.jpg" alt="..." className="img-fluid navbar-cart-product-image" /></a>
                          <div className="w-100"><a href="#" className="close text-sm mr-2"><i className="fa fa-times">                                                   </i></a>
                            <div className="pl-3"> <a href="detail.html" className="navbar-cart-product-link">Skull Tee</a><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-cart-product"> 
                        <div className="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-kyle-loftus-596319-unsplash.jpg" alt="..." className="img-fluid navbar-cart-product-image" /></a>
                          <div className="w-100"><a href="#" className="close text-sm mr-2"><i className="fa fa-times">                                                   </i></a>
                            <div className="pl-3"> <a href="detail.html" className="navbar-cart-product-link">Transparent Blouse</a><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                          </div>
                        </div>
                      </div>
                      <div className="navbar-cart-product"> 
                        <div className="d-flex align-items-center"><a href="detail.html"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/product-square-serrah-galos-494312-unsplash.jpg" alt="..." className="img-fluid navbar-cart-product-image" /></a>
                          <div className="w-100"><a href="#" className="close text-sm mr-2"><i className="fa fa-times">                                                   </i></a>
                            <div className="pl-3"> <a href="detail.html" className="navbar-cart-product-link">White Tee</a><small className="d-block text-muted">Quantity: 1 </small><strong className="d-block text-sm">$75.00 </strong></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="navbar-cart-total"><span className="text-uppercase text-muted">Total</span><strong className="text-uppercase">$75.00</strong></div>
                    <div className="d-flex justify-content-between"><a href="cart.html" className="btn btn-link text-dark mr-3">View Cart <i className="fa-arrow-right fa"></i></a><a href="checkout1.html" className="btn btn-outline-dark">Checkout</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
        </header>
        

    )
}

export default NavBar 