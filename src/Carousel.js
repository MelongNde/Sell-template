import React from "react"
import OwlCarousel from "react-owl-carousel"

function Carousel() {
  return (
    <OwlCarousel
      className="large-controls dots-inside owl-loaded owl-drag"
      loop
      items="1"
      dots={true}
      nav={true}
      autoplay={true}
      autoplayTimeout={7000}
      autoplaySpeed={1000}
      navText={["", ""]}
    >
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            transform: "translate3d(-4047px, 0px, 0px)",
            transition: "all 0.45s ease 0s",
            width: "9443px"
          }}
        >
          <div className="owl-item" style={{ width: "1349px" }}>
            <div className="item">
              <div className="container padding-top-3x">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img
                        className="d-inline-block w-150 mb-4"
                        src="../static/img/hero-slider/logo03.png"
                        alt="Puma"
                      />
                      <div className="h2 text-body mb-2 pt-1">
                        Google Home - Smart Speaker
                      </div>
                      <div className="h2 text-body mb-4 pb-1">
                        starting at <span className="text-medium">$129.00</span>
                      </div>
                    </div>
                    <Link href="/product">
                      <a className="btn btn-primary scale-up delay-1">
                        View Offers&nbsp;<i className="icon-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img
                      className="d-block mx-auto"
                      src="../static/img/hero-slider/02.png"
                      alt="Puma Backpack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-item" style={{ width: "1349px" }}>
            <div className="item">
              <div className="container padding-top-3x">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img
                        className="d-inline-block w-150 mb-4"
                        src="../static/img/hero-slider/logo02.png"
                        alt="Puma"
                      />
                      <div className="h2 text-body mb-2 pt-1">
                        Google Home - Smart Speaker
                      </div>
                      <div className="h2 text-body mb-4 pb-1">
                        starting at <span className="text-medium">$129.00</span>
                      </div>
                    </div>
                    <Link href="/product">
                      <a className="btn btn-primary scale-up delay-1">
                        View Offers&nbsp;<i className="icon-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img
                      className="d-block mx-auto"
                      src="../static/img/hero-slider/02.png"
                      alt="Puma Backpack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-item" style={{ width: "1349px" }}>
            <div className="item">
              <div className="container padding-top-3x">
                <div className="row justify-content-center align-items-center">
                  <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                    <div className="from-bottom">
                      <img
                        className="d-inline-block w-150 mb-4"
                        src="../static/img/hero-slider/logo01.png"
                        alt="Puma"
                      />
                      <div className="h2 text-body mb-2 pt-1">
                        Google Home - Smart Speaker
                      </div>
                      <div className="h2 text-body mb-4 pb-1">
                        starting at <span className="text-medium">$129.00</span>
                      </div>
                    </div>
                    <Link href="/product">
                      <a className="btn btn-primary scale-up delay-1">
                        View Offers&nbsp;<i className="icon-arrow-right"></i>
                      </a>
                    </Link>
                  </div>
                  <div className="col-md-6 padding-bottom-2x mb-3">
                    <img
                      className="d-block mx-auto"
                      src="../static/img/hero-slider/02.png"
                      alt="Puma Backpack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  )
}

export default Carousel