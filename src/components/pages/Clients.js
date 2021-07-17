import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../../App.css'

import './Client.css'
import Table from 'react-bootstrap/Table'
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'

function Client(){

    const [ code, setCode] = useState("");
    const [ company_name, setCompanyName] = useState("");
    const [ email, setEmail] = useState("");
    const [ address, setAddress] = useState("");
    const [ tel_no, setTelNo] = useState(0);
    const [ contact_person, setContactPerson] = useState("");
    const [ personal_email, setPersonalEmail] = useState("");
    const [ mobile_no, setMobileNo] = useState(0);
    const [ bank_name, setBankName] = useState("");
    const [ bank_branch, setBankBranch] = useState("");
    const [ bank_code, setBankCode] = useState(0);
    const [ account_no, setAccountNo] = useState();

    const [clientList, setClientList]= useState([]);
    const [searchClient, setSearch] = useState([]);

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    //add client
    const addClient = () =>{
            Axios.post('http://localhost:3001/clients/create', {
                code: code,
                company_name: company_name,
                email: email,
                address: address,
                tel_no: tel_no,
                contact_person: contact_person,
                personal_email: personal_email,
                mobile_no: mobile_no,
                bank_name: bank_name,
                bank_branch: bank_branch,
                bank_code: bank_code,
                account_no: account_no,
            }).then(() => {
                console.log("success");
                alert("Client added successfully");
            });
    };

    //get all clients
    useEffect(() => {
        Axios.get('http://localhost:3001/clients/allclients')
             .then(response => {
                 setClientList(response.data)
             })
             .catch((error)=>{
                 console.log(error);
             })
    },[]);


    return ( 
        <div>

            {/* ----------navigation bar inserted---------------- */}
            <Homenav/>
            <div className="row" style={{maxWidth:'100%'}}>

                {/* ----------sidebar inserted---------------- */}
                <Sidebar/>

                {/* ---------------home page------------ */}
                <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                    <div className="row">
                        <h1 style={{fontFamily:'serif', padding:'10px'}}>CLIENTS</h1>
                    </div>
                    
                    <div className="row" style={{margin:'10px'}}>

                        {/* ----------tab headings--------------- */}
                        <div className="bloc-tabs">
                            <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                            >
                            <h3>View</h3>
                            </button>
                            <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                            >
                            <h3>Add New</h3>
                            </button>
                            
                        </div>

                        {/* ----------tab content---------------- */}
                        <div className="content-tabs">

                            {/* ----------client details---------------- */}
                            <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                                
                                {/* ----------search bar---------------- */}
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group row ">
                                            <input type="text" className="form-control form-control-sm col-8 col-md-4 col-xl-4" id="client"
                                                name="client" placeholder="search for client..." onChange={(event) =>{
                                                    setSearch(event.target.value);
                                                }}/>
                                            <i className="fas fa-search mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------all client details---------------- */}
                                <Table responsive hover>
                                    <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                        <tr>
                                            <th>Code</th>
                                            <th>Company Name</th>
                                            <th>Address</th>
                                            <th>Telephone No.</th>
                                            <th>Contact Person Name</th>
                                            <th>Mobile No.</th>
                                            <th>Company Email</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {clientList.filter((val) => {
                                        if (searchClient === ""){
                                            return val
                                        }else if (val.company_name.toLowerCase().includes(searchClient)){
                                            return val
                                        }
                                    }).map(val =>{
                                        return(
                                        <tr key={val.client_ID}>
                                            <td>{val.code}</td>
                                            <td>{val.company_name}</td>
                                            <td>{val.address}</td>
                                            <td>{val.tel_no}</td>
                                            <td>{val.contact_person}</td>
                                            <td>{val.mobile_no}</td>
                                            <td>{val.email}</td>
                                            <td>
                                                <Link to={`/edit-client/${val.client_ID}`}>
                                                    <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">
                                                        <i class="fas fa-eye" data-toggle="tooltip" data-placement="top" title="View"></i></button>
                                                </Link>
                                            </td>
                                        </tr> 
                                        );
                                    })} 
                                    </tbody>
                                </Table>
                            </div>

                            {/* ----------add new client---------------- */}
                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                                <div className="container  bg-white shadow   editContainer">
                                    <div className="card editCard">
                                        <div className="card-body">
                                            <form className="m-3 row" onSubmit={addClient}>
                                                <input type="hidden" id="id" name="id" />

                                                <div className="col colunm">

                                                    <div className="form-group row formGroup ">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Code</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="code"
                                                            name="code"required onChange={(event) => {setCode(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Company Name</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="company_name"
                                                            name="companyName" required onChange={(event) => {setCompanyName(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Email</label>
                                                        <input type="email" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                                            name="email" required onChange={(event) => {setEmail(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Address</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="address"
                                                            name="address" required onChange={(event) => {setAddress(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Telephone No.</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="tel_no"
                                                            name="telNo" required onChange={(event) => {setTelNo(event.target.value);}}/>
                                                    </div> 

                                                    <h4 style={{fontFamily:'serif', marginTop:'20px', marginBottom:'20px', color:'grey'}}>Contact Person Details_____</h4>
                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Name</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="contact_person"
                                                            name="name" required onChange={(event) => {setContactPerson(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Email</label>
                                                        <input type="email" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="personal_email"
                                                            name="personalEmail" required onChange={(event) => {setPersonalEmail(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblClient">Mobile No.</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="mobile_no"
                                                            name="mobileNo" required onChange={(event) => {setMobileNo(event.target.value);}}/>
                                                    </div> 
                                                </div>

                                                 <div className="col column">
                                                 <h4 style={{fontFamily:'serif', marginTop:'20px', marginBottom:'20px', color:'grey'}}>Bank Details_____</h4>
                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Bank Name</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bank_name"
                                                            name="bankName" required onChange={(event) => {setBankName(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Bank Branch</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bank_branch"
                                                            name="bankBranch" required onChange={(event) => {setBankBranch(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Bank code</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bank_code"
                                                            name="bankCode" required onChange={(event) => {setBankCode(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Account No.</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="account_no"
                                                            name="accountNo" required onChange={(event) => {setAccountNo(event.target.value);}}/>
                                                    </div>

                                                    {/* <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4  lblRight">Invoice</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="invoice"
                                                            name="invoice"required onChange={(event) => {setInvoice(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Amount</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                                            name="amount" required onChange={(event) => {setAmount(event.target.value);}}/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Due Date</label>
                                                        <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="due_date"
                                                            name="dueDate" required onChange={(event) => {setDueDate(event.target.value);}}/>
                                                    </div> 

                                                    <div className="form-group row formGroup">
                                                        <label className="col-12 col-md-4 col-xl-4 lblRight">Note</label>
                                                        <textarea type="textarea" rows="3" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="note"
                                                            name="note" required onChange={(event) => {setNote(event.target.value);}}></textarea>
                                                    </div> */}
                                                </div>

                                                <div className="row form-group mx-3 formGroup">
                                                    <div className='col text-center'>
                                                        <button name="Submit" value="Submit" type="submit" className="btn btn-primary custom-btn4 btnSubmit">SUBMIT</button>
                                                    <Link to="/home-main">
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
                </div>
            </div>
        </div>
    );
}

 
export default Client;