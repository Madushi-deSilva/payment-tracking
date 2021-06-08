import React, {useState} from 'react';
import Axios from 'axios'
// import '../../App.css'
import Homenav from '../Homenav';
import './EditPayments.css'
import { Link } from 'react-router-dom';

function AddNewPayment(){
    
    const [ company_code, setCompanyCode] = useState("");
    const [ company_name, setCompanyName] = useState("");
    const [ payment_mode, setPaymentMode] = useState("");
    const [ invoice, setInvoice] = useState("");
    const [ amount, setAmount] = useState(0);
    const [ due_date, setDueDate] = useState(0);
    const [ note, setNote] = useState("");

    //add payment
    const addPayment = () =>{
        Axios.post('http://localhost:3001/duepayments/create', {
            company_code:company_code,
            company_name:company_name,
            payment_mode:payment_mode,
            invoice: invoice,
            amount: amount,
            due_date: due_date,
            note: note,
        }).then(() => {
            console.log("success");
        });
};
        return ( 
            <div>
                {/* ---------home navigation componenet---------- */}
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    {/* ---------------add new payment------------ */}

                    <div className="homeDiv" >
                <div className="container  bg-white shadow mt-3 col-9 editContainer">
                <div className="card editCard">
                    <div className="card-header bg-white">
                        <div className="row">
                            <i className="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                            <h4 className="ml-2 my-auto" style={{width:'auto'}}>Add New Payment</h4>
                        </div>
                    </div>
                    <div className="card-body">
                        <form className="m-3 row" onSubmit={addPayment}>
                            <input type="hidden" id="id" name="id" />

                                <div className="form-group row formGroup ">
                                    <label className="col-12 col-md-2 col-xl-2">Company Code</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="company_code"
                                        name="dueID"required onChange={(event) => {setCompanyCode(event.target.value);}}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-2 col-xl-2">Company Name</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="company_Name"
                                        name="companyName" required onChange={(event) => {setCompanyName(event.target.value);}}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-2 col-xl-2">Payment Mode</label>
                                    <select className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="payment_mode" onChange={(event) => {setPaymentMode(event.target.value);}}>
                                            <option></option>
                                            <option value="cash">Cash</option>
                                            <option value="cheque">Cheque</option>
                                    </select>
                                </div>

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-2 col-xl-2 ">Invoice</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="invoice"
                                        name="invoice"required onChange={(event) => {setInvoice(event.target.value);}}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-2 col-xl-2">Amount</label>
                                    <input type="number" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="amount"
                                        name="amount" required onChange={(event) => {setAmount(event.target.value);}}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-2 col-xl-2">Due Date</label>
                                    <input type="date" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="dueDate"
                                        name="dueDate" required onChange={(event) => {setDueDate(event.target.value);}}/>
                                </div> 

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-2 col-xl-2">Note</label>
                                    <textarea type="textarea" rows="3" className="form-control form-control-sm col-12 col-md-10 col-xl-10" id="note"
                                        name="note" required onChange={(event) => {setNote(event.target.value);}}></textarea>
                                </div>

                            

                            <div className="row form-group mx-3 formGroup">
                                <div className='col text-center'>
                                    <button name="Submit" value="Submit" type="submit" className="btn btn-primary custom-btn4 ml-1">SUBMIT</button>
                                
                                <Link to="/due-payments">
                                    <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn5 ml-1">CANCEL</button>
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
 
export default AddNewPayment;