import React from 'react'

import CardTemplate from '../templates/CardTemplate'
import PaymentMethod from '../organismes/PaymentProcess/Checkouts/PaymentMethod'

const PaymentMethodPage = () => {
    return (
        <>
            <CardTemplate>
                <PaymentMethod />
            </CardTemplate>
        </>
    );
}

export default PaymentMethodPage;
