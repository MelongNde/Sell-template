import React from 'react'
import {Link} from 'react-router-dom'

const JeansAndChinos = () => {
    return (
        <>
        <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
        <header class="product-grid-header">
          <div class="mr-3 mb-3">
             
            Showing <strong>1-12 </strong>of <strong>158 </strong>products
          </div>
          <div class="mr-3 mb-3"><span class="mr-2">Show</span><Link to="#" class="product-grid-header-show active">12    </Link><Link to="#" class="product-grid-header-show ">24    </Link><Link to="#" class="product-grid-header-show ">All    </Link>
          </div>
          <div class="mb-3 d-flex align-items-center"><span class="d-inline-block mr-1">Sort by</span>
            <select class="custom-select w-auto border-0">
              <option value="orderby_0">Default</option>
              <option value="orderby_1">Popularity</option>
              <option value="orderby_2">Rating</option>
              <option value="orderby_3">Newest first</option>
            </select>
          </div>
        </header>
        <div class="row">
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-info">Fresh</div><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/serrah-galos-494312-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Jackets</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">White Tee</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/kyle-loftus-590881-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Denim</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Black blouse</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-primary">Sale</div><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/kyle-loftus-596319-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Accessories</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">College jacket</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/ethan-haddox-484912-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Denim</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Carrot-fit jeans</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/serrah-galos-494231-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Jackets</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Striped T-Shirt</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/averie-woodard-319832-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Shirts</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Short top</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image">
                <div class="ribbon ribbon-danger">Sold out</div><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/serrah-galos-494279-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Sweaters</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Ethnic Sweater</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/dmitriy-ilkevich-437760-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Coats</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Beige</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/ian-dooley-347968-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">T-Shirts</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Skull Tee</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/alex-holyoake-571682-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Denim</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Trucker jacket</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/ao-456813-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Denim</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Blouse</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/product/kyle-loftus-592041-unsplash.jpg" alt="product" class="img-fluid" />
                <div class="product-hover-overlay"><Link to="detail.html" class="product-hover-overlay-link"></Link>
                  <div class="product-hover-overlay-buttons"><Link to="#" class="btn btn-outline-dark btn-product-left"><i class="fa fa-shopping-cart"></i></Link><Link to="detail.html" class="btn btn-dark btn-buy"><i class="fa-search fa"></i><span class="btn-buy-label ml-2">View</span></Link><Link to="#" data-toggle="modal" data-target="#exampleModal" class="btn btn-outline-dark btn-product-right"><i class="fa fa-expand-arrows-alt"></i></Link>
                  </div>
                </div>
              </div>
              <div class="py-2">
                <p class="text-muted text-sm mb-1">Denim</p>
                <h3 class="h6 text-uppercase mb-1"><Link to="detail.html" class="text-dark">Shirt</Link></h3><span class="text-muted">$40.00</span>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="page navigation" class="d-flex justify-content-center mb-5 mt-3">
          <ul class="pagination">
            <li class="page-item"><Link to="#" aria-label="Previous" class="page-link"><span aria-hidden="true">Prev</span><span class="sr-only">Previous</span></Link></li>
            <li class="page-item active"><Link to="#" class="page-link">1       </Link></li>
            <li class="page-item"><Link to="#" class="page-link">2       </Link></li>
            <li class="page-item"><Link to="#" class="page-link">3       </Link></li>
            <li class="page-item"><Link to="#" class="page-link">4       </Link></li>
            <li class="page-item"><Link to="#" class="page-link">5 </Link></li>
            <li class="page-item"><Link to="#" aria-label="Next" class="page-link"><span aria-hidden="true">Next</span><span class="sr-only">Next     </span></Link></li>
          </ul>
        </nav>
      </div>
        </>
    );
}

export default JeansAndChinos;
