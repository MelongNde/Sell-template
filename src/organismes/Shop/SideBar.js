import React from 'react';
import {Link} from 'react-router-dom'
const SideBar = () => {
    return (
        <div>
        <div className="sidebar col-xl-3 col-lg-4 order-lg-1">
        <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse" href="#categoriesMenu" aria-expanded="false" aria-controls="categoriesMenu" className="d-lg-none block-toggler">Product Categories</a>
          <div id="categoriesMenu" className="expand-lg collapse">
            <div className="nav nav-pills flex-column mt-4 mt-lg-0"> <a href="#" className="nav-link d-flex justify-content-between mb-2 "><span>Jackets</span><span className="sidebar-badge"> 120</span></a>
              <div className="nav nav-pills flex-column ml-3"><a href="#" className="nav-link mb-2">Lorem ipsum</a><a href="#" className="nav-link mb-2">Dolor</a><a href="#" className="nav-link mb-2">Sit amet</a><a href="#" className="nav-link mb-2">Donec vitae</a>
              </div><Link to="/shop/jean-and-chinos" className="nav-link d-flex justify-content-between mb-2 active"><span>Jeans &amp; chinos</span><span className="sidebar-badge"> 55</span></Link>
              <div className="nav nav-pills flex-column ml-3"><a href="#" className="nav-link mb-2">Lorem ipsum</a><a href="#" className="nav-link mb-2">Dolor</a><a href="#" className="nav-link mb-2">Sit amet</a><a href="#" className="nav-link mb-2">Donec vitae</a>
              </div><a href="#" className="nav-link d-flex justify-content-between mb-2 "><span>Accessories</span><span className="sidebar-badge"> 80</span></a>
              <div className="nav nav-pills flex-column ml-3"><a href="#" className="nav-link mb-2">Sit amet</a><a href="#" className="nav-link mb-2">Donec vitae</a><a href="#" className="nav-link mb-2">Lorem ipsum</a><a href="#" className="nav-link mb-2">Dolor</a>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse" href="#priceFilterMenu" aria-expanded="false" aria-controls="priceFilterMenu" className="d-lg-none block-toggler">Filter by price</a>
          <div id="priceFilterMenu" className="expand-lg collapse">
            <h6 className="sidebar-heading d-none d-lg-block">Price  </h6>
            <div id="slider-snap" className="mt-4 mt-lg-0 noUi-target noUi-ltr noUi-horizontal"> <div className="noUi-base"><div className="noUi-connects"><div className="noUi-connect" style={{transform: "translate(16%, 0px) scale(0.28, 1);"}}></div></div><div className="noUi-origin" style={{transform: "translate(-840%, 0px);", zIndex: "5;"}}><div className="noUi-handle noUi-handle-lower" data-handle="0" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="0.0" aria-valuemax="110.0" aria-valuenow="40.0" aria-valuetext="40.00"><div className="noUi-touch-area"></div></div></div><div className="noUi-origin" style={{transform: "translate(-560%, 0px);", zIindex: "6;"}}><div className="noUi-handle noUi-handle-upper" data-handle="1" tabindex="0" role="slider" aria-orientation="horizontal" aria-valuemin="40.0" aria-valuemax="250.0" aria-valuenow="110.0" aria-valuetext="110.00"><div className="noUi-touch-area"></div></div></div></div></div>
            <div className="nouislider-values">
              <div className="min">From $<span id="slider-snap-value-lower">40.00</span></div>
              <div className="max">To $<span id="slider-snap-value-upper">110.00</span></div>
              <input type="hidden" name="pricefrom" id="slider-snap-input-lower" value="40" className="slider-snap-input" />
              <input type="hidden" name="priceto" id="slider-snap-input-upper" value="110" className="slider-snap-input" />
            </div>
          </div>
        </div>
        <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse" href="#brandFilterMenu" aria-expanded="true" aria-controls="brandFilterMenu" className="d-lg-none block-toggler">Filter by brand</a>
          <div id="brandFilterMenu" className="expand-lg collapse show">
            <h6 className="sidebar-heading d-none d-lg-block">Brands </h6>
            <form action="#" className="mt-4 mt-lg-0"> 
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input id="brand0" type="checkbox" name="clothes-brand" checked="" className="custom-control-input" />
                  <label for="brand0" className="custom-control-label">Calvin Klein <small>(18)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input id="brand1" type="checkbox" name="clothes-brand" checked="" className="custom-control-input" />
                  <label for="brand1" className="custom-control-label">Levi Strauss <small>(30)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input id="brand2" type="checkbox" name="clothes-brand" className="custom-control-input" />
                  <label for="brand2" className="custom-control-label">Hugo Boss <small>(120)</small></label >
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input id="brand3" type="checkbox" name="clothes-brand" className="custom-control-input" />
                  <label for="brand3" className="custom-control-label">Tomi Hilfiger <small>(70)</small></label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-checkbox">
                  <input id="brand4" type="checkbox" name="clothes-brand" className="custom-control-input" />
                  <label for="brand4" className="custom-control-label">Tom Ford  <small>(110)</small></label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="sidebar-block px-3 px-lg-0 mr-lg-4"> <a data-toggle="collapse" href="#sizeFilterMenu" aria-expanded="false" aria-controls="sizeFilterMenu" className="d-lg-none block-toggler">Filter by size</a>
          <div id="sizeFilterMenu" className="expand-lg collapse"> 
            <h6 className="sidebar-heading d-none d-lg-block">Size </h6>
            <form action="#" className="mt-4 mt-lg-0">  
              <div className="form-group mb-1">
                <div className="custom-control custom-radio">
                  <input id="size0" type="radio" name="size" checked="" className="custom-control-input" />
                  <label for="size0" className="custom-control-label">Small</label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-radio">
                  <input id="size1" type="radio" name="size" className="custom-control-input" />
                  <label for="size1" className="custom-control-label">Medium</label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-radio">
                  <input id="size2" type="radio" name="size" className="custom-control-input" />
                  <label for="size2" className="custom-control-label">Large</label>
                </div>
              </div>
              <div className="form-group mb-1">
                <div className="custom-control custom-radio">
                  <input id="size3" type="radio" name="size" className="custom-control-input" />
                  <label for="size3" className="custom-control-label">X-Large</label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="sidebar-block px-3 px-lg-0 mr-lg-4"><a data-toggle="collapse" href="#colourFilterMenu" aria-expanded="false" aria-controls="colourFilterMenu" className="d-lg-none block-toggler">Filter by colour</a>
          <div id="colourFilterMenu" className="expand-lg collapse">
            <h6 className="sidebar-heading d-none d-lg-block">Colour </h6>
            <div className="mt-4 mt-lg-0"> 
              <ul className="list-inline mb-0 colours-wrapper">
                <li className="list-inline-item">
                  <label for="colour_sidebar_Blue" style={{backgroundColor: "#668cb9"}} data-allow-multiple="" className="btn-colour"> </label>
                  <input type="checkbox" name="colour" value="value_sidebar_Blue" id="colour_sidebar_Blue" className="input-invisible" />
                </li>
                <li className="list-inline-item">
                  <label for="colour_sidebar_White" style={{backgroundColor: "#fff"}} data-allow-multiple="" className="btn-colour"> </label>
                  <input type="checkbox" name="colour" value="value_sidebar_White" id="colour_sidebar_White" className="input-invisible" />
                </li>
                <li className="list-inline-item">
                  <label for="colour_sidebar_Violet" style={{backgrounColor: "#8b6ea4"}} data-allow-multiple="" className="btn-colour"> </label>
                  <input type="checkbox" name="colour" value="value_sidebar_Violet" id="colour_sidebar_Violet" className="input-invisible" />
                </li>
                <li className="list-inline-item">
                  <label for="colour_sidebar_Red" style={{backgroundColor: "#dd6265"}} data-allow-multiple="" className="btn-colour"> </label>
                  <input type="checkbox" name="colour" value="value_sidebar_Red" id="colour_sidebar_Red" className="input-invisible" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
}

export default SideBar;
