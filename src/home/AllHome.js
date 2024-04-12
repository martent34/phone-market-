

import React from 'react'
import Header from './Header'
import Service from './Service'
import Footer from '../Footer'
import AllNav from '../AllNav'
import Best from './Best'
import ScrollToTop from 'react-scroll-to-top'
import Subnav from '../Subnav'
import { CartProvider } from 'react-use-cart'


function AllHome() {
  return (
    <CartProvider>
        <Subnav/>
        <AllNav/>
        <Header/>
        <Service/>
        <Best/>
        <Footer/>
        <ScrollToTop smooth />
    </CartProvider>
  )
}

export default AllHome