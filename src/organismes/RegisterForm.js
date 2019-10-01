import React from 'react';

const RegisterForm = () => {
    return (
        <>
            <div className="container">
        <div className="row justify-content-center">
          
          <div className="col-lg-5">
            <div className="block">
              <div className="block-header">
                <h6 className="text-uppercase mb-0">New account</h6>
              </div>
              <div className="block-body"> 
                <p className="lead">Not our registered customer yet?</p>
                <p className="text-muted">With registration with us new world of fashion, fantastic discounts and much more opens to you! The whole process will not take you more than a minute!</p>
                <p className="text-muted">If you have any questions, please feel free to <a href="contact.html">contact us</a>, our customer service center is working for you 24/7.</p>
                <hr />
                <form action="customer-orders.html" method="get">
                  <div className="form-group">
                    <label for="name" className="form-label">Name</label>
                    <input id="name" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="email" className="form-label">Email</label>
                    <input id="email" type="text" className="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="password" className="form-label">Password</label>
                    <input id="password" type="password" className="form-control" />
                  </div>
                  <div className="form-group text-center">
                    <button type="submit" className="btn btn-outline-dark"><i className="far fa-user mr-2"></i>Register                                </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}

export default RegisterForm;
