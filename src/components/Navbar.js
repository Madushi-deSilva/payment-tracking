import React from 'react';
// import '../App.css'
import { Link } from 'react-router-dom'
import HeroSection from './HeroSection'

const Navbar = () => {
return (
	<>
        <nav className="navbar navbar-expand-lg navbar-fixed background-color-purple" id="topnav" style={{backgroundColor:'black', color:'white'}}>
            <div className="mx-auto" style={{display:'flex'}}>
                <img className='navbar-brand col' src='/images/geoid1.png' style={{width:'300px', height:'60px'}} alt=""/>
            </div>
            <Link to='/sign-up' className="mx-auto">
                <button className="btn btn-primary">
                    SIGN UP
                </button>
            </Link>
        </nav>
        {/* load login form */}
        <HeroSection/>
	</>
);
};

export default Navbar;
