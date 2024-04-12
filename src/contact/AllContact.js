

import React from 'react'
import { CartProvider } from 'react-use-cart'
import AllNav from '../AllNav'
import Footer from '../Footer'
import Form from './Form'
import Subnav from '../Subnav'

function AllContact() {
    return (
        <CartProvider>
            <Subnav/>
            <AllNav />
            <Form/>
            <Footer />
        </CartProvider>
    )
}

export default AllContact