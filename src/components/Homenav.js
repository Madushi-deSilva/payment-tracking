import React, {Component} from 'react';
import {
Nav,
NavLink,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
// import '../App.css'

class Homenav extends Component {
    render() {
        return (
            <div className="row" style={{margin:'0px'}}>
                    <Nav style={{backgroundColor: 'rgb(28, 27, 27)'}}>
                        <NavMenu>
                            <img className='navbar-brand col' src='/images/geoid1.png' style={{width:'200px', height:'50px', alt:"logo"}}/>
                            <NavLink to='/events' activeStyle style={{color:'white'}}> Events</NavLink>
                        </NavMenu>
                        <div class="dropdown">
                            <button class="dropbtn">Account Officer 
                            <i class="fa fa-caret-down"></i>
                            </button>
                            <div class="dropdown-content">
                            <a href="edit-user">Edit Profile</a>
                            <a href="#">Log out</a>
                            </div>
                        </div> 
                    </Nav>
                </div>
        );
    }
}


export default Homenav;
