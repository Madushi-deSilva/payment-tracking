import React, {Component} from 'react';
import {Dropdown} from 'react-bootstrap'
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
                    {/* <div class="dropdown"> */}
                        {/* <span className="fa-stack fa-2x mx-auto my-3">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                        </span> */}
                        {/* <button class="dropbtn">Account Officer 
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="edit-user">Edit Profile</a>
                        <a href="#">Log out</a>
                        </div>
                    </div>  */}
                    <Dropdown>
                        <Dropdown.Toggle variant="info" id="dropdown-basic">
                            Account Officer
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="edit-user">Edit Profile</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </Nav>
            </div>
        );
    }
}


export default Homenav;
