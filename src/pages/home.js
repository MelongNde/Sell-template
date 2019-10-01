import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HomeTemplate from '../templates/HomeTemplate'
const imgA = require('../assets/images/photo/haley-phelps-62815-unsplash.jpg')
const imgC = require('../assets/images/photo/matheus-ferrero-334418-unsplash.jpg')
const imgB = require('../assets/images/photo/ian-dooley-347942-unsplash.jpg')
const imgD = require('../assets/images/photo/christopher-campbell-28571-unsplash.jpg')
const imgE = require('../assets/images/photo/marco-xu-496929-unsplash.jpg')
const imgF = require('../assets/images/photo/benjamin-voros-260869-unsplash.jpg')
const imgH = require('../assets/images/photo/malvestida-magazine-458585-unsplash.jpg')
const imgI = require('../assets/images/photo/michael-frattaroli-221247-unsplash.jpg')
const prev = require('../assets/images/prev.svg') 
const next = require('../assets/images/next.svg')



const Home = () => {
    return (
      <HomeTemplate>
        <div> 
        
        <OwlCarousel
        className="large-controls dots-inside owl-loaded owl-drag"
        loop
        items="1"
        dots={true}
        nav={true}
        autoplay={true}
        autoplayTimeout={7000}
        autoplaySpeed={1000}
      >
        <section className="home-full-slider-wrapper mb-10px">
        <div className="owl-carousel owl-theme owl-dots-modern home-full-slider owl-loaded owl-drag">     
          
          
        <div className="owl-stage-outer"><div className="owl-stage" style = {{ transform: "translate3d(-2110px, 0px, 0px)", transition: "all 0s ease 0s; width: 7385px;" }} ><div className="owl-item cloned" style={{width: "1055px;"}}><div className="item home-full-item bg-dark dark-overlay" style={{height: "767px;"}}><img src={imgA} alt="" className="bg-image" />
            <div className="container-fluid h-100">
              <div className="row align-items-center h-100">
                <div className="col-lg-8 col-xl-6 mx-auto text-white text-center overlay-content">
                  <h1 className="mb-4 display-2 text-uppercase font-weight-bold">Skeleton Tees</h1>
                  <p className="lead mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p> <a href="category.html" className="btn btn-light">Start shopping</a></p>
                </div>
              </div>
            </div>
          </div></div><div className="owl-item cloned" style = {{width: "1055px;", height:"767px;"  }}><div className="item home-full-item"><img src= {imgB} alt="" className="bg-image" />
            <div className="container-fluid h-100">
              <div className="row align-items-center h-100">
                <div className="col-lg-8 col-xl-6 mx-auto text-white text-center">
                  <h5 className="text-uppercase font-weight-light mb-4 letter-spacing-5"> Our bestseller</h5>
                  <h1 className="mb-5 display-1 font-weight-bold text-serif">Skinny Jeans</h1>
                  <p> <a href="category.html" className="btn btn-light">View collection</a></p>
                </div>
              </div>
            </div>
          </div></div><div className="owl-item active" style={{width: "1055px;"}}><div style={{background: "rgb(248, 213, 207);", height: "767px;"}} className="item home-full-item"><img src= {imgC} alt="" className="bg-image" />
            <div className="container-fluid h-100 py-5">
              <div className="row align-items-center h-100">
                <div className="col-lg-8 col-xl-6 mx-auto text-white text-center">
                  <h5 className="text-uppercase text-white font-weight-light mb-4 letter-spacing-5"> Just arrived</h5>
                  <h1 className="mb-5 display-2 font-weight-bold text-serif">Denim Jackets</h1>
                  <p className="lead mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <p> <a href="category.html" className="btn btn-light">View collection</a></p>
                </div>
              </div>
            </div>              
          </div></div></div></div><div className="owl-nav disabled"><button type="button" role="presentation" className="owl-prev"><img src={prev} alt="" width="50" /></button><button type="button" role="presentation" className="owl-next"><img src={next} alt="" width="50" /></button></div><div className="owl-dots"><button role="button" className="owl-dot active"><span></span></button><button role="button" className="owl-dot"><span></span></button><button role="button" className="owl-dot"><span></span></button></div><div className="owl-thumbs"></div></div>
      </section>
      </OwlCarousel>
          <section>
            <div className="container-fluid px-5px">
              <div className="row mx-0">
                <div className="col-md-6 mb-10px px-5px">
                  <div className="card border-0 text-white text-center"><img src={imgD} alt="Card image" className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100 py-3">
                        <h2 className="display-3 font-weight-bold mb-4">Top picks</h2><a href="category.html" className="btn btn-light">Shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-10px px-5px">
                  <div className="card border-0 text-white text-center"><img src={imgE} alt="Card image" className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100 py-3">
                        <h2 className="display-3 font-weight-bold mb-4">New arrivals</h2><a href="category.html" className="btn btn-light">Shop now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mx-0">
                <div className="col-lg-4 mb-10px px-5px">
                  <div className="card border-0 text-center text-white"><img src={imgF} alt="Card image" className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100">
                        <h2 className="display-4 mb-4">Jackets</h2><a href="category.html" className="btn btn-link text-white">Shop now <i className="fa-arrow-right fa ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-10px px-5px">
                  <div className="card border-0 text-center text-white"><img src={imgH} alt="Card image" className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100">
                        <h2 className="display-4 mb-4">Lookbook</h2><a href="category.html" className="btn btn-link text-white">Shop now <i className="fa-arrow-right fa ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-10px px-5px">
                  <div className="card border-0 text-center text-dark"><img src={imgI} alt="Card image" className="card-img" />
                    <div className="card-img-overlay d-flex align-items-center"> 
                      <div className="w-100">
                        <h2 className="display-4 mb-4">Try this</h2><a href="category.html" className="btn btn-link text-dark">Shop now <i className="fa-arrow-right fa ml-2"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </HomeTemplate>        
    );
}

export default Home;
