import React from 'react'
import {Switch, Route} from 'react-router-dom'

import NavBarDefault from '../molecules/NavBarDefault'
import Footer from '../molecules/Footer'
import SideBar from '../organismes/Shop/SideBar'
import JeanAndChinos from '../organismes/Shop/JeansAndChinos'

const ShopLayout = () =>{
    return(
        <>
            <NavBarDefault />
            <section class="hero">
                <div class="container">
                    <div class="hero-content pb-5 text-center">
                        <h1 class="hero-heading">Shop</h1>
                        <div class="row">   
                            <div class="col-xl-8 offset-xl-2">
                                <p class="lead text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div class="container">
                <div class="row">
                    <Switch>
                        <Route exact path="/" component = {()=> <h1>Default Shopping Side</h1>} />
                        <Route path="/shop/jean-and-chinos" component = {JeanAndChinos} />
                    </Switch>
                    <SideBar />
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ShopLayout