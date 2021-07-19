import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios'
import '../../App.css'
import './Signup.css'
import {useParams} from 'react-router';

function Edituser(props){
    const [user, setUser]= useState({});

    const onChange = (e) => {
        setUser({...user, [e.target.id]: e.target.value})
    }
    let params = useParams();

    //view accountofficer by id
    // useEffect(() => {
    //     Axios.get(`http://localhost:3001/signup/accountofficer/${params.id}`)
    //          .then(response => {
    //              console.log(response.data)
    //              setUser(response.data[0])
    //          })
    //          .catch((error)=>{
    //              console.log(error);
    //          })
    // },[]);

    //view credit collector by id
    useEffect(() => {
        let type = localStorage.getItem("type")
        if(type == "AO") {
            Axios.get(`http://localhost:3001/signup/accountofficer/${params.id}`)
            .then(response => {
                console.log(response.data)
                setUser(response.data[0])
            })
            .catch((error)=>{
                console.log(error);
            })

        }
        else {
            Axios.get(`http://localhost:3001/signup/creditcollector/${params.id}`)
             .then(response => {
                 console.log(response.data)
                 setUser(response.data[0])
             })
             .catch((error)=>{
                 console.log(error);
             })
        }
        
    },[]);

    const updateUser = (e) =>{
        e.preventDefault();
        console.log('Updated user', user)
        Axios.put(`http://localhost:3001/signup/update/${params.id}`,user)
            .then(() => {
            console.log("success");
            // alert("User updated successfully");
            // window.location.href = 'http://localhost:3000/';
        });
    };


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
                        <form className="m-3" onSubmit={updateUser}>
                            <input type="hidden" id="id" name="id" />

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Job Role</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="job_role"
                                    name="name"required value={user.job_role}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Name</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="name"
                                    name="name"required value={user.name}
                                    onChange={onChange}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Username</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="username"
                                    name="username" required value={user.username}
                                    onChange={onChange}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Password</label>
                                <input type="password" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="password"
                                    name="password" required value={user.password}
                                    onChange={onChange}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Confirm Password</label>
                                <input type="password" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="conPassword"
                                        name="conPassword" required value={user.conPassword}
                                        onChange={onChange}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Contact No.</label>
                                <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="contact_no"
                                    name="conNo" required value={user.contact_no}
                                    onChange={onChange}/>
                            </div>

                            <div className="form-group row formGroup">
                                <label for="name" className="col-12 col-md-2 col-xl-2">Email</label>
                                <input type="email" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="email"
                                    name="email" required value={user.email}
                                    onChange={onChange}/>
                            </div>

                            <div className="row form-group mx-3 formGroup">
                                 <div className='col text-center'>
                                    <button name="Update" value="Update" type="submit" className="btn btn-primary custom-btn1 ml-1">SUBMIT</button>
                                    <Link to="/">
                                    <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn2 ml-1">CANCEL</button>
                                    </Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div> 
        );
}
export default Edituser;