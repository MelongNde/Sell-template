import React from 'react'
import { Link } from 'react-router-dom'
const PlaceOrder = () => {
    return (
        <>
            <section class="hero">
                <div class="container">
                    <div class="hero-content pb-5 text-center">
                        <h1 class="hero-heading">Order confirmed</h1>
                    </div>
                </div>
            </section> 
            <section class="pb-5">
                <div class="container text-center">
                    <div class="icon-rounded bg-primary mb-3 mx-auto text-white">
                    <svg class="svg-icon w-2rem h-2rem align-middle">
                        <use xlinkHref="#checkmark-1">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="checkmark-1">
                                <title>Checkmark</title>
                                <desc>A line styled icon from Orion Icon Library.</desc>
                                <path data-name="layer1" fill="none" stroke="#202020" stroke-miterlimit="10" d="M2 30l21 22 39-40" stroke-linejoin="round" stroke-linecap="round" style={{stroke:"var(--layer1, #202020)"}}></path>
                            </svg>
                        </use>
                    </svg>
                    </div>
                    <h4 class="mb-3 ff-base">Thank you, Julie. Your order is confirmed.</h4>
                    <p class="text-muted mb-5">Your order hasn't shipped yet but we will send you ane email when it does.</p>
                    <p> <Link to="/checkout/customer-order" class="btn btn-outline-dark">View or manage your order</Link></p>
                </div>
            </section>  
        </>
    );
}

export default PlaceOrder
