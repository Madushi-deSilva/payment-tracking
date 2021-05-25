import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import './HeroSection.css'

class HeroSection extends Component {
    render() { 
        return (
            <div className='hero-container'>
                <video src='/videos/video-5.mp4' autoPlay loop muted />

                {/* login form */}
                <div className="card col-12 col-md-6 col-lg-5 mx-auto my-auto shadow loginForm" 
                    style={{backgroundColor:'rgba(27, 28, 28,0.5)', border: 'solid #53cdd4 5px', borderRadius:'30px'}}>
                    <div className="card-body">
                        <div className="row my-3" style={{textAlign:'center'}}>
                            <h3 className="mx-auto text-light">WELCOME</h3>
                            <h3 className="mx-auto text-light">GEOID Information Technologies</h3>
                        </div>
                        <div className="row">
                            <span className="fa-stack fa-2x mx-auto my-3">
                                <i className="fas fa-circle fa-stack-2x text-color-purple"></i>
                                <i className="fas fa-user fa-stack-1x fa-inverse"></i>
                            </span>
                        </div>
                        <form className="mt-3 loginForm">
                        <div class="form-group row mx-3">
                                <label for="name" class="col-12 col-md-4 col-xl-4 text-light">USERNAME</label>
                                <input type="text" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="username"
                                    name="username" placeholder="Username"/>
                            </div>
                            <div className="form-group row mx-3">
                                <label for="name" className="col-12 col-md-4 col-xl-4 text-light">PASSWORD</label>
                                <input type="password" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="password" name="password"
                                    placeholder="Password"/>
                            </div>
                            <div className="row form-group mx-3 text-center">
                                <Link to="/home-main">
                                            <button name="Login" value="Login" type="submit" className="btn btn-primary custom-btn ml-1">LOGIN</button>
                                            </Link>
                            </div>
                            <div className="row form-group mx-3 text-center">
                                        <p className='text-light' style={{fontSize:'18px'}}>Don't have an account? <a href='/sign-up'>Sign Up</a></p>
                                    </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeroSection;

