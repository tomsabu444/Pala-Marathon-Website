import React from 'react'
import ContactPage from './ContactPage'
import GoverningBodyPage from './GoverningBodyPage'

function HomePage() {
  return (
    <>
    {/* <div>HomePage</div> */}

    {/* Governing Body */}
    <GoverningBodyPage/>
    
    {/* Contact US */}
    <ContactPage />
    </>
  )
}

export default HomePage