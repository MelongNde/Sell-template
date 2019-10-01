import React from 'react'
import ProfileLayout from '../templates/ProfileLayout'

const Profile = () => {
    return (
        <>
            <ProfileLayout className="mt-5">
                <div className='mt-5 '></div>
                <section className="hero mt-5 mt-4">
                    <div className="container">
                        <div className="hero-content pb-5 text-center">
                            <h1 className="hero-heading">Your profile</h1>
                            <div className="row">   
                                <div className="col-xl-8 offset-xl-2">
                                    <p className="lead text-muted">
                                        Maecenas sollicitudin. In rutrum. In convallis. Nunc tincidunt ante vitae massa. Cras pede libero, dapibus nec, pretium sit amet, tempor quis. Fusce dui leo, imperdiet in.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                 <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-xl-9">
                        <div className="block mb-5">
                        <div className="block-header"><strong className="text-uppercase">Change your password</strong></div>
                        <div className="block-body">
                            <form>
                            <div className="row">
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="password_old" className="form-label">Old password</label>
                                    <input id="password_old" type="password" className="form-control" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="password_1" className="form-label">New password</label>
                                    <input id="password_1" type="password" className="form-control" />
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="password_2" className="form-label">Retype new password</label>
                                    <input id="password_2" type="password" className="form-control" />
                                </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-outline-dark"><i className="far fa-save mr-2"></i>Change password</button>
                            </div>
                            </form>
                        </div>
                        </div>
                        <div className="block mb-5">
                        <div className="block-header"><strong className="text-uppercase">Personal details</strong></div>
                        <div className="block-body">
                            <form>
                            <div className="row">
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="firstname" className="form-label">Firstname</label>
                                    <input id="firstname" type="text" className="form-control" />
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="lastname" className="form-label">Lastname</label>
                                    <input id="lastname" type="text" className="form-control" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="company" className="form-label">Company</label>
                                    <input id="company" type="text" className="form-control" />
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="street" className="form-label">Street</label>
                                    <input id="street" type="text" className="form-control" />
                                </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label for="city" className="form-label">Company</label>
                                    <input id="city" type="text" className="form-control" />
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label for="zip" className="form-label">ZIP</label>
                                    <input id="zip" type="text" className="form-control" />
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label for="state" className="form-label">State</label>
                                    <select id="state" className="form-control"></select>
                                </div>
                                </div>
                                <div className="col-sm-6 col-md-3">
                                <div className="form-group">
                                    <label for="country" className="form-label">Country</label>
                                    <select id="country" className="form-control"></select>
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="phone" className="form-label">Telephone</label>
                                    <input id="phone" type="text" className="form-control" />
                                </div>
                                </div>
                                <div className="col-sm-6">
                                <div className="form-group">
                                    <label for="email" className="form-label">Email</label>
                                    <input id="email" type="text" className="form-control" />
                                </div>
                                </div>
                            </div>
                            <div className="text-center mt-4">
                                <button type="submit" className="btn btn-outline-dark"><i className="far fa-save mr-2"></i>Save changes</button>
                            </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 mb-5">
                        <div className="customer-sidebar card border-0"> 
                        <div className="customer-profile"><a href="#" className="d-inline-block"><img src="https://d19m59y37dris4.cloudfront.net/sell/1-3/img/photo/kyle-loftus-589739-unsplash-avatar.jpg" className="img-fluid rounded-circle customer-image" /></a>
                            <h5>Julie Svestkova</h5>
                            <p className="text-muted text-sm mb-0">Ostrava, Czech republic</p>
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
            </ProfileLayout>
        </>
    );
}

export default Profile;
