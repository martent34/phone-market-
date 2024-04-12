

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import styled from 'styled-components';

const NavbarWrapper = styled.nav`
position: ${props => (props.isSticky ? 'sticky' : 'relative')};
top: -3px;
z-index: 40;
`;

const Navbar = () => {
  const {totalItems} = useCart()
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <NavbarWrapper isSticky={isSticky}>
      <div className="navbar" isSticky={isSticky} >
         <div className="container">
             <img src="img/Screenshot (88).png" alt=""/>
             <ul className="nav">
                 <li><Link className="nav-link" to="/">home</Link></li>
                 <li><Link className="nav-link" to="/contact">contact us</Link></li>
                 <li><Link className="nav-link" to="/shoping">shopping</Link></li>
                 <li><Link className="nav-link" to="/about">about</Link></li>
                 <li className="nav-item">
              <Link className="nav-link cart" to="/allcart">
              <i class="fa-solid fa-cart-arrow-down">({totalItems})</i>
              </Link>
            </li>
            </ul>
             <form action="">
                 <input className="form-control" placeholder="search" type="search"/>
             </form>
         </div>
   </div>
    </NavbarWrapper>
  );
};

export default Navbar;






































