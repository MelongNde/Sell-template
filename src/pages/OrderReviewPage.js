import React from 'react'

import CardTemplate from '../templates/CardTemplate'
import OrderReview from '../organismes/PaymentProcess/Checkouts/OrderReview'

const OrderReviewPage = () => {
    return (
        <>
            <CardTemplate>
             <OrderReview />
            </CardTemplate>
        </>
    );
}

export default OrderReviewPage;
