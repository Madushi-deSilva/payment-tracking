import React from 'react';
import {
Nav,
// NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import '../App.css'
import HeroSection from './HeroSection'

const Navbar = () => {
return (
	<>
        <Nav style={{backgroundColor: 'rgb(28, 27, 27)'}}>
            <NavMenu>
                <img className='navbar-brand col' src='/images/geoid1.png' style={{width:'300px', height:'60px', alt:"logo"}}/>
                {/* <NavLink to='/events' activeStyle style={{color:'white'}}>
                    Events
                </NavLink> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to='/sign-up' style={{backgroundColor: 'blue', color:'white', textDecoration:'none'}}>Sign Up</NavBtnLink>
            </NavBtn>
        </Nav>
        {/* load login form */}
        <HeroSection/>
	</>
);
};

export default Navbar;
