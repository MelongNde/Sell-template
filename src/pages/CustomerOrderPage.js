import React from 'react'

import CardTemplate from '../templates/CardTemplate'
import CustomerOrder from '../organismes/CustomerOrder'

const CustomerOrderPage = () => {
    return (
        <>
            <CardTemplate>
                <CustomerOrder />
            </CardTemplate>
        </>
    )
}

export default CustomerOrderPage
