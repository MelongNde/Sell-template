import React, {Component} from 'react'

export default class LoginForm extends Component {
    state = {
        email : "",
        password : "",
        isAuthentificated: false
    }

    handleChange = event => {
        this.setState({
            [
                event.target.name
            ]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        if (
            this.state.email === "azerty@azerty" && this.state.password === "azerty"
        ){
            this.setState({
                isAuthentificated: true
            })
        this.props.isAuth(this.state.isAuthentificated)
        }
    }

    render() {
        if (!this.state.isAuthentificated) {
            return (
                <React.Fragment>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="block">
                                <div className="block-header">
                                    <h6 className="text-uppercase mb-0">Login</h6>
                                </div>
                                <div className="block-body">
                                    <p className="lead">Already our customer?</p>
                                    <p className="text-muted">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>
                                    <hr />
                                    <form action="customer-orders.html" method="get">
                                    <div className="form-group">
                                        <label for="email" className="form-label">Email</label>
                                        <input
                                             name="email"
                                             id="email"
                                             type="text"
                                             className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label for="password" className="form-label">Password</label>
                                        <input 
                                            name="password"
                                            id="password"
                                            type="password"
                                            className="form-control"
                                            value = {this.state.password}
                                            onChange = {this.handleChange}
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <button type="submit" className="btn btn-outline-dark"><i className="fa fa-sign-in-alt mr-2"></i>Log in</button>
                                    </div>
                                    </form>
                                </div>
                                </div>
                            </div>          
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
}