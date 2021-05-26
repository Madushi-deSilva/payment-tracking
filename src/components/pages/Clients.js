import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../../App.css'
import './Home.css'
import './Client.css'
import Table from 'react-bootstrap/Table'
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'

function Client(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

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
                                                name="client" placeholder="search for client..."/>
                                            <i className="fas fa-search mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------all client details---------------- */}
                                <Table responsive>
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
                                        <tr>
                                            <td>C001</td>
                                            <td>John Keels Holdings</td>
                                            <td>Colombo, Sri Lanka</td>
                                            <td>011-1832811</td>
                                            <td>Nihal Perera</td>
                                            <td>077-3422811</td>
                                            <td>jkh@gmail.com</td>
                                            <td>
                                                <Link to="/edit-client">
                                                    <button name="view" value="view" type="submit" className="btn btn-primary ml-1">VIEW</button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>C002</td>
                                            <td>John Keels Holdings</td>
                                            <td>Colombo, Sri Lanka</td>
                                            <td>011-1832811</td>
                                            <td>Nihal Perera</td>
                                            <td>077-3422811</td>
                                            <td>jkh@gmail.com</td>
                                            <td>
                                                <Link to="/edit-client">
                                                    <button name="view" value="view" type="submit" className="btn btn-primary ml-1">VIEW</button>
                                                </Link>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>C003</td>
                                            <td>John Keels Holdings</td>
                                            <td>Colombo, Sri Lanka</td>
                                            <td>011-1832811</td>
                                            <td>Nihal Perera</td>
                                            <td>077-3422811</td>
                                            <td>jkh@gmail.com</td>
                                            <td>
                                                <Link to="/edit-client">
                                                    <button name="view" value="view" type="submit" className="btn btn-primary ml-1">VIEW</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>

                            {/* ----------add new payments---------------- */}
                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                                <div className="container  bg-white shadow   editContainer">
                                    <div className="card editCard">
                                        <div className="card-body">
                                            <form className="m-3 row" enctype="multipart/form-data">
                                                <input type="hidden" id="id" name="id" />

                                                <div className="col colunm">

                                                    <div className="form-group row formGroup ">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Code</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="code"
                                                            name="code"required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Company Name</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="companyName"
                                                            name="companyName" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Address</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="address"
                                                            name="address" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Telephone No.</label>
                                                        <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="telNo"
                                                            name="telNo" required/>
                                                    </div> 

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Email</label>
                                                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                                            name="email" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Payment Mode</label>
                                                        <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="payment-mode">
                                                                <option value="cash">Cash</option>
                                                                <option value="cheque">Cheque</option>
                                                        </select>
                                                    </div>

                                                    <h4 style={{fontFamily:'serif', marginTop:'20px', marginBottom:'20px', color:'grey'}}>Contact Person Details_____</h4>
                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Name</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="name"
                                                            name="name" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Mobile No.</label>
                                                        <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="mobileNo"
                                                            name="mobileNo" required/>
                                                    </div> 

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblClient">Email</label>
                                                        <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="personalEmail"
                                                            name="personalEmail" required/>
                                                    </div>
                                                </div>

                                                <div className="col column">
                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Bank Name</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bankName"
                                                            name="bankName" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Bank code</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bankCode"
                                                            name="bankCode" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Account No.</label>
                                                        <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="accountNo"
                                                            name="accountNo" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Bank Branch</label>
                                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="bankBranch"
                                                            name="bankBranch" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4  lblRight">Invoice</label>
                                                        <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="invoice"
                                                            name="invoice"required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Amount</label>
                                                        <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                                            name="amount" required/>
                                                    </div>

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Due Date</label>
                                                        <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="dueDate"
                                                            name="dueDate" required/>
                                                    </div> 

                                                    <div className="form-group row formGroup">
                                                        <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Note</label>
                                                        <textarea type="textarea" rows="3" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="note"
                                                            name="note" required></textarea>
                                                    </div>
                                                </div>

                                                <div className="row form-group mx-3 formGroup">
                                                    <div className='col text-center'>
                                                    <Link>
                                                        <button name="Submit" value="Update" type="submit" className="btn btn-primary custom-btn4 btnSubmit">SUBMIT</button>
                                                    </Link>
                                                    <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn5 btnCancel">CANCEL</button>
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