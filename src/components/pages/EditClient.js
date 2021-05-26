import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css'
import Homenav from '../Homenav';

class EditClient extends Component {
    render() {
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
         );
    }
}
 
export default EditClient;