
import React from 'react'
import { CartProvider } from 'react-use-cart'
import Subnav from '../Subnav'
import AllNav from "../AllNav";
import Footer from '../Footer';
import About from './About';

function Allabout() {
  return (
    <CartProvider>
        <Subnav/>
        <AllNav/>
        <About/>
        <br/>
        <Footer/>
    </CartProvider>
  )
}

export default Allabout