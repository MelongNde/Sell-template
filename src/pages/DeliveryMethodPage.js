import React from 'react';

import CardTemplate from '../templates/CardTemplate'
import DeliveryMethod from '../organismes/PaymentProcess/Checkouts/DeliveryMethod'

const DeliveryMethodPage = () => {
    return (
        <>
            <CardTemplate>
                <DeliveryMethod />
            </CardTemplate>
        </>
    );
}

export default DeliveryMethodPage;
