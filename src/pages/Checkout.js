import React from 'react'

import CardTemplate from '../templates/CardTemplate'
import CheckOut from '../organismes/PaymentProcess/Checkouts/Adress'

const Checkout = () => {
    return (
        <>
            <CardTemplate>
                <CheckOut />
            </CardTemplate>
        </>
    );
}

export default Checkout
