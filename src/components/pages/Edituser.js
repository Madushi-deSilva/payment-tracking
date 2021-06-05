import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import '../../App.css'
import './Signup.css'

class Edituser extends Component{
    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConPassword = this.onChangeConPassword.bind(this);
        this.onChangeConNo = this.onChangeConNo.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state= {
            name:'',
            username: '',
            password: '',
            conPassword:"",
            conNo:0,
            email:""
        }
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
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
    onChangeConPassword(e){
        this.setState({
            conPassword: e.target.value
        });
    }
    onChangeConNo(e){
        this.setState({
            conNo: e.target.value
        });
    }
    onChangeEmail(e){
        this.setState({
            email: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const user = {
            name: this.state.name, 
            username: this.state.username, 
            password: this.state.password,
            conNo: this.state.conNo, 
            email: this.state.email
        }
        console.log(user);

        Axios.post('http://localhost:3001/signup/update/'+this.props.match.params.id, user)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render(){
        return(
            <div className="container jumbotron bg-white shadow mt-4 col-9 editContainer">
                <div className="card">
                    <div className="card-header bg-white">
                        <div className="row">
                            <i className="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                            <h4 className="ml-2 my-auto" style={{width:'auto'}}>Edit User</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="m-3" onSubmit={this.onSubmit}>
                            <input type="hidden" id="id" name="id" />

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Name</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="name"
                                    name="name"required value={this.state.name}
                                    onChange={this.onChangeName}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Username</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="username"
                                    name="username" required value={this.state.username}
                                    onChange={this.onChangeUsername}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Password</label>
                                <input type="password" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="password"
                                    name="password" required value={this.state.password}
                                    onChange={this.onChangePassword}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Confirm Password</label>
                                <input type="password" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="conPassword"
                                        name="conPassword" required value={this.state.conPassword}
                                        onChange={this.onChangeConPassword}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Contact No.</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="conNo"
                                    name="conNo" required value={this.state.conNo}
                                    onChange={this.onChangeConNo}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Email</label>
                                <input type="email" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="email"
                                    name="email" required value={this.state.email}
                                    onChange={this.onChangeEmail}/>
                            </div>

                            <div className="row form-group mx-3 formGroup">
                                <div className='col text-center'>
                                    <Link>
                                        <button name="Login" value="Login" type="submit" className="btn btn-primary custom-btn1 ml-1">SUBMIT</button>
                                    </Link>
                                    <button name="Login" value="Login" type="submit" className="btn btn-primary custom-btn2 ml-1">CANCEL</button>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        );
    }
}
export default Edituser;