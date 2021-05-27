import React, {Component} from 'react';
// import '../App.css'

class Homenav extends Component {
    render() {
        return (
            <div className="row" style={{margin:'0px'}}>
                <nav className="navbar navbar-expand-lg navbar-fixed" style={{backgroundColor:'rgb(28, 27, 27)', color:'white'}}>
                    <div className="mx-auto" style={{display:'flex'}}>
                        <img className='navbar-brand col' src='/images/geoid1.png' style={{width:'300px', height:'60px', alt:"logo"}}/>
                    </div>
                    <div class="dropdown mx-auto"> 
                        {/* <span className="fa-stack fa-2x mx-auto my-3">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                        </span> */}
                        <button class="dropbtn">Account Officer 
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="edit-user">Edit Profile</a>
                        <a href="#">Log out</a>
                        </div>
                    </div> 
                </nav>
                
            </div>
        );
    }
}


export default Homenav;
