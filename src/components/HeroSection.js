import React, {Component} from 'react'
import Axios from 'axios'
import '../App.css'
import './HeroSection.css'

class HeroSection extends Component {
  constructor(props) {
    super(props);
    this.onChangeJobRole = this.onChangeJobRole.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state= {
        job_role:'',
        username: '',
        password: ''
    }
  }

    onChangeJobRole(e){
        this.setState({
            job_role: e.target.value
        });
    }
    onChangeUsername(e){
    this.setState({
        username: e.target.value
    });
    }
    onChangePassword(e){
        this.setState({
            password: e.target.value
        });
    }

    //user login
    onSubmit=(e)=>{
        e.preventDefault();
        Axios.post('http://localhost:3001/signup/login', {
            job_role: this.state.job_role,
            username: this.state.username, 
            password: this.state.password,
        }).then((response) => {
            console.log(response);
            if(response.data.message){
                console.log(response.data.message)
            }else{
                if(response.data.length !== 0){
                    if(response.data[0].job_role === 'Account Officer'){
                        window.location.href = 'http://localhost:3000/home-main';
                        // this.props.history.push('/home-main');
                    }else if(response.data[0].job_role === 'Credit Collector'){
                        window.location.href = 'http://localhost:3000/credit';
                        // this.props.history.push('/credit');
                    }
                }
                else{
                   alert("Invalid Credentials") 
                }
            }
        });
        
    }

  render() {
    return (
        <div className='hero-container'>
        <video src='/videos/video-5.mp4' autoPlay loop muted />

        {/* login form */}
        <div className="card col-12 col-md-6 col-lg-5 mx-auto my-auto shadow loginForm" 
            style={{backgroundColor:'rgba(27, 28, 28, 0.5)', border: 'solid #53cdd4 5px', borderRadius:'30px'}}>
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
                <form className="mt-3 loginForm" onSubmit={this.onSubmit}>
                    <div className="form-group row mx-3">
                        <label className="col-12 col-md-4 col-xl-4 text-light">JOB ROLE</label>
                        <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="job_role"
                            value={this.state.job_role} onChange={this.onChangeJobRole}>
                                <option>Select Job Role</option>
                                <option value="Account Officer">Account Officer</option>
                                <option value="Credit Collector">Credit Collector</option>
                        </select>
                    </div>
                    <div className="form-group row mx-3">
                        <label className="col-12 col-md-4 col-xl-4 text-light">USERNAME</label>
                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="username"
                            name="username" placeholder="Username" value={this.state.username}
                            onChange={this.onChangeUsername}/>
                    </div>
                    <div className="form-group row mx-3">
                        <label className="col-12 col-md-4 col-xl-4 text-light">PASSWORD</label>
                        <input type="password" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="password" name="password"
                            placeholder="Password" value={this.state.password}
                            onChange={this.onChangePassword}/>
                    </div>
                    <div className="row form-group mx-3 text-center">
                        
                        <button name="Login" value="Login" type="submit" className="btn btn-primary custom-btn">LOGIN</button>
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
