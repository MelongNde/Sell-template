import React from 'react'
import  Footer  from "../molecules/Footer"
import  NavBarDefault  from "../molecules/NavBarDefault"

const CardTemplate = ({children}) => {
    return (
        <>
            <NavBarDefault />
                {children}
            <Footer />
        </>
    )
}

export default CardTemplate
