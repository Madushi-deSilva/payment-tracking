import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import './Home.css'
// import '../../App.css'
import Homenav from '../Homenav';
import { Link } from 'react-router-dom';
import {useParams} from 'react-router';

function EditClient(props) {
    // const [ code, setCode] = useState("");
    // const [ company_name, setCompanyName] = useState("");
    // const [ email, setEmail] = useState("");
    // const [ address, setAddress] = useState("");
    // const [ tel_no, setTelNo] = useState(0);
    // const [ contact_person, setContactPerson] = useState("");
    // const [ personal_email, setPersonalEmail] = useState("");
    // const [ mobile_no, setMobileNo] = useState(0);
    // const [ bank_name, setBankName] = useState("");
    // const [ bank_branch, setBankBranch] = useState("");
    // const [ bank_code, setBankCode] = useState(0);
    // const [ account_no, setAccountNo] = useState();

    const [client, setClient]= useState({});

    const onChange = (e) => {
        setClient({...client, [e.target.id]: e.target.value})
    }
    let params = useParams();

    //view client by id
    useEffect(() => {
        Axios.get(`http://localhost:3001/clients/${params.id}`)
             .then(response => {
                 console.log(response.data)
                 setClient(response.data[0])
             })
             .catch((error)=>{
                 console.log(error);
             })
    },[]);

    //update client
    const updateClient = (e) =>{
        e.preventDefault();
        console.log('Updated Client', client)
        Axios.put(`http://localhost:3001/clients/update/${params.id}`,client).then(() => {
            console.log("success");
            window.location.href = 'http://localhost:3000/clients';
        });
    };


    return ( 
        <div>
            {/* ---------home navigation componenet---------- */}
            <Homenav/>
            <div className="row" style={{maxWidth:'100%'}}>
                {/* ---------------edit client details------------ */}

                <div className="homeDiv" >
                    <div className="container  bg-white shadow mt-3 col-9 editContainer">
                        <div className="card editCard">
                            <div className="card-header bg-white">
                                <div className="row">
                                    <i className="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                    <h3 className="ml-2 my-auto" style={{width:'auto'}}>Edit Client</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <form className="m-3 row" onSubmit={updateClient}>
                                    <input type="hidden" id="id" name="id" />

                                    <div className="col colunm">

                                        <div className="form-group row formGroup ">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Code</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="code"
                                                name="code"required value = {client.code} onChange={onChange}/>
                                        
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Company Name</label>
                                                <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="company_name"
                                                name="companyName" required value = {client.company_name} onChange={onChange}
                                                // onChange={(event) => {setCompanyName(event.target.value);}}
                                                />
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Email</label>
                                            <input type="email" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                                name="email" required value = {client.email} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Address</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="address"
                                                name="address" required value = {client.address} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Telephone No.</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="tel_no"
                                                name="telNo" required value = {client.tel_no} onChange={onChange}/>
                                         </div> 

                                        <h4 style={{fontFamily:'serif', marginTop:'20px', marginBottom:'20px', color:'grey'}}>Contact Person Details_____</h4>
                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Name</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="contact_person"
                                                name="name" required value = {client.contact_person} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Email</label>
                                            <input type="email" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="personal_email"
                                                name="personalEmail" required value = {client.personal_email} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblClient">Mobile No.</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="mobile_no"
                                                name="mobileNo" required value = {client.mobile_no} onChange={onChange}/>
                                        </div> 
                                    </div>

                                        <div className="col column">
                                        <h4 className="text-center" style={{fontFamily:'serif', marginTop:'20px', marginBottom:'20px', color:'grey'}}>Bank Details_____</h4>
                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Bank Name</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bank_name"
                                                name="bankName" required value = {client.bank_name} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Bank Branch</label>
                                           <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bank_branch"
                                                name="bankBranch" required value = {client.bank_branch} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Bank code</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bank_code"
                                                name="bankCode" required value = {client.bank_code} onChange={onChange}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Account No.</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="account_no"
                                                name="accountNo" required value = {client.account_no} onChange={onChange}/>
                                        </div>
                    
                                    </div>

                                    <div className="row form-group mx-3 formGroup">
                                        <div className='col text-center'>
                                            <button name="Update" value="Update" type="submit" className="btn btn-primary custom-btn4 btnUpdate">UPDATE</button>
                                        <Link to="/clients">
                                        <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn5 btnCancel">CANCEL</button>
                                        </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default EditClient;