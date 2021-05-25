import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css
import Homenav from '../Homenav';
import './EditPayments.css'

class EditDuepayment extends Component {
    render() {
        return ( 
            <div>
                {/* ---------home navigation componenet---------- */}
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    {/* ---------------duepayments------------ */}

                    <div className="homeDiv" >
                        <div className="row text-center">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>EDIT DUE PAYMENT</h1>
                        </div>
                        <div className="row" style={{marginLeft:'10px'}}>
                            <div className="container bg-white editContainer">
                                <form className="m-3 row" enctype="multipart/form-data">
                                        <div className="col colunm">

                                            <div class="form-group row formGroup ">
                                                <label for="name" class="col-12 col-md-4 col-xl-4">Due ID</label>
                                                <input type="text" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="dueID"
                                                    name="dueID"required/>
                                            </div>

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4">Company Name</label>
                                                <input type="text" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="companyName"
                                                    name="companyName" required/>
                                            </div>

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4">Telephone No.</label>
                                                <input type="number" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="telNo"
                                                    name="telNo" required/>
                                            </div> 

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4">Email</label>
                                                <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                                    name="email" required/>
                                            </div>

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4">Payment Mode</label>
                                                <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="payment-mode">
                                                        <option value="cash">Cash</option>
                                                        <option value="cheque">Cheque</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col column">
                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4  lblRight">Invoice</label>
                                                <input type="number" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="invoice"
                                                    name="invoice"required/>
                                            </div>

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4 lblRight">Amount</label>
                                                <input type="number" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                                    name="amount" required/>
                                            </div>

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4 lblRight">Due Date</label>
                                                <input type="date" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="dueDate"
                                                    name="dueDate" required/>
                                            </div> 

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4 lblRight">Note</label>
                                                <textarea type="textarea" rows="3" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="note"
                                                    name="note" required></textarea>
                                            </div>

                                            <div class="form-group row formGroup">
                                                <label for="name" class="col-12 col-md-4 col-xl-4 lblRight">Status</label>
                                                <label className="lblCheck form-control form-control-sm col-12 col-md-8 col-xl-8">
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="radio1">
                                                            <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked/>Ready for payment
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="radio2">
                                                            <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2"/>Not replied
                                                        </label>
                                                    </div>
                                                    <div class="form-check">
                                                        <label class="form-check-label" for="radio3">
                                                            <input type="radio" class="form-check-input" id="radio3" name="optradio" value="option3"/>Request to extend
                                                        </label>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                </form>
                                    <div className='col text-center'>
                                        <Link to="/">
                                            <button name="View" value="View" type="submit" className="btn btn-primary custom-btn3 ml-1">VIEW CLIENT</button>
                                        </Link>
                                        <Link to="/due-payments">
                                            <button name="Update" value="Update" type="submit" className="btn btn-primary custom-btn4 ml-1">UPDATE</button>
                                        </Link>
                                        <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn5 ml-1">CANCEL</button>
                                    </div>
                            </div> 
                           
                        </div> 
                    </div>
                    
                </div>
            </div>
         );
    }
}
 
export default EditDuepayment;