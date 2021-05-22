import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'
import './Signup.css'

class Edituser extends Component {
    render() { 
        return ( 
            <div class="container jumbotron bg-white shadow mt-4 col-9 editContainer">
                <div class="card">
                    <div class="card-header bg-white">
                        <div class="row">
                            <i class="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                            <h4 class="ml-2 my-auto" style={{width:'auto'}}>Edit User</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <form class="m-3" enctype="multipart/form-data">
                            <input type="hidden" id="id" name="id" />

                            <div class="form-group row formGroup">
                                <label for="name" class="col-12 col-md-2 col-xl-2">Name</label>
                                <input type="text" class="form-control form-control-sm col-12 col-md-10 col-xl-10" id="name"
                                    name="name"required/>
                            </div>

                            <div class="form-group row formGroup">
                                <label for="name" class="col-12 col-md-2 col-xl-2">Username</label>
                                <input type="text" class="form-control form-control-sm col-12 col-md-10 col-xl-10" id="username"
                                    name="username" required/>
                            </div>

                            <div class="form-group row formGroup">
                                <label for="name" class="col-12 col-md-2 col-xl-2">Password</label>
                                <input type="password" class="form-control form-control-sm col-12 col-md-10 col-xl-10" id="password"
                                    name="password" required/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Confirm Password</label>
                                <input type="password" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="conPassword"
                                        name="conPassword" required />
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Contact No.</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="conNo"
                                    name="conNo" required />
                            </div>

                            <div class="form-group row formGroup">
                                <label for="name" class="col-12 col-md-2 col-xl-2">Email</label>
                                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="form-control form-control-sm col-12 col-md-10 col-xl-10" id="email"
                                    name="email" required/>
                            </div>

                            <div className="row form-group mx-3 formGroup">
                                <div className='col text-center'>
                                    <Link to="/">
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
