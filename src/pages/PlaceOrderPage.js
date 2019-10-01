import React from 'react';

import CardTemplate from '../templates/CardTemplate'
import PlaceOrder from '../organismes/PaymentProcess/Checkouts/PlaceOrder'
const PlaceOrderPage = () => {
    return (
        <>
            <CardTemplate>
                <PlaceOrder />
            </CardTemplate>
        </>
    );
}

export default PlaceOrderPage;
