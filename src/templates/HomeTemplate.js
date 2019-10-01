import React from 'react'
import  Footer  from "../molecules/Footer"
import  NavBar  from "../molecules/NavBar"

const HomeTemplate = ({children}) => {
    return (
        <>
            <NavBar />
                {children}
            <Footer />
        </>
    )
}

export default HomeTemplate
