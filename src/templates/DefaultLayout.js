import React from 'react'

const DefaultLayout = ({children}) => {
    return (
        <>
            <div className = "container mt-5">                
                {children}
            </div>
        </>
    );
}

export default DefaultLayout;
