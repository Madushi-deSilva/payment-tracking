import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css'
import Homenav from '../Homenav';
import './EditPayments.css'

class EditOverduepayment extends Component {
    render() {
        return ( 
            <div>
                {/* ---------home navigation componenet---------- */}
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    {/* ---------------edit overduepayments------------ */}

                    <div className="homeDiv" >
                <div className="container  bg-white shadow mt-3 col-9 editContainer">
                <div className="card editCard">
                    <div className="card-header bg-white">
                        <div className="row">
                            <i className="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                            <h5 className="ml-2 my-auto" style={{width:'auto'}}>Edit Overdue Payment</h5>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="m-3 row" enctype="multipart/form-data">
                            <input type="hidden" id="id" name="id" />

                            <div className="col colunm">

                                <div className="form-group row formGroup ">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Overdue ID</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="overdueID"
                                        name="overdueID"required/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Company Name</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="companyName"
                                        name="companyName" required/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Telephone No.</label>
                                    <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="telNo"
                                        name="telNo" required/>
                                </div> 

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Email</label>
                                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                        name="email" required/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Payment Mode</label>
                                    <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="payment-mode">
                                            <option value="cash">Cash</option>
                                            <option value="cheque">Cheque</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col column">
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

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Status</label>
                                    <label className="lblCheck form-control form-control-sm col-12 col-md-8 col-xl-8">
                                        <div className="form-check">
                                            <label className="form-check-label" for="radio1">
                                                <input type="radio" className="form-check-input" id="radio1" name="optradio" value="option1" checked/>Replied
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <label className="form-check-label" for="radio2">
                                                <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>Not replied
                                            </label>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="row form-group mx-3 formGroup">
                                <div className='col text-center'>
                                <Link to="/">
                                    <button name="View" value="View" type="submit" className="btn btn-primary custom-btn3 ml-1">VIEW CLIENT</button>
                                </Link>
                                <Link to="/overdue-payments">
                                    <button name="Update" value="Update" type="submit" className="btn btn-primary custom-btn4 ml-1">UPDATE</button>
                                </Link>
                                <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn5 ml-1">CANCEL</button>
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
 
export default EditOverduepayment;