import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom'
import Homenav from '../Homenav';
import './EditPayments.css'

function EditDuepayment(props){

    const [due, setDue]= useState({});
    const [selectedOption, setselectedOption]= useState("");
    const onValueChange = (e) => {
        setselectedOption(e.target.value)
    }

    const onChange = (e) => {
        setDue({...due, [e.target.id]: e.target.value})
    }
    let params = useParams();

    //view due payment by id
    useEffect(() => {
        Axios.get(`http://localhost:3001/duepayments/${params.id}`)
             .then(response => {
                 console.log(response.data)
                 setDue(response.data[0])
             })
             .catch((error)=>{
                 console.log(error);
             })
    },[]);

     //update due payment details
     const updateDue = (e) =>{
        e.preventDefault();
        let dueToUpdate = due
        dueToUpdate.reply_status = selectedOption
        Axios.put(`http://localhost:3001/duepayments/update/${params.id}`,dueToUpdate).then(() => {
            console.log("success");
            alert("Duepayment updated successfully");
            window.location.href = 'http://localhost:3000/due-payments';
        });
    };
    

    return ( 
        <div>

            {/* ---------home navigation componenet---------- */}
            <Homenav/>

            <div className="row" style={{maxWidth:'100%'}}>

                {/* ---------------edit duepayments------------ */}

                <div className="homeDiv" >
                    <div className="container  bg-white shadow mt-3 col-9 editContainer">
                        <div className="card editCard">
                            <div className="card-header bg-white">
                                <div className="row">
                                    <i className="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                    <h4 className="ml-2 my-auto" style={{width:'auto'}}>Edit Due Payment</h4>
                                </div>
                            </div>
                            <div className="card-body">
                                <form className="m-3 row" onSubmit={updateDue}>
                                    <input type="hidden" id="id" name="id" />

                                    <div className="col colunm">

                                        <div className="form-group row formGroup ">
                                            <label className="col-12 col-md-4 col-xl-4">Due ID</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="due_ID"
                                                name="due_ID"required value = {due.due_ID}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4">Company Name</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="company_name"
                                                name="company_name" required value = {due.company_name}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4">Telephone No.</label>
                                            <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="tel_no"
                                                name="tel_no" required value = {due.tel_no}/>
                                        </div> 

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4">Email</label>
                                            <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                                name="email" required value = {due.email}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4">Payment Mode</label>
                                            <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="payment_mode" value = {due.payment_mode}>
                                                    <option value="cash">Cash</option>
                                                    <option value="cheque">Cheque</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col column">
                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4  lblRight">Invoice</label>
                                            <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="invoice"
                                                name="invoice"required value = {due.invoice}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Amount</label>
                                            <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                                name="amount" required value = {due.amount}/>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Due Date</label>
                                            <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="due_date"
                                                name="due_date" required value = {due.due_date} onChange={onChange}/>
                                        </div> 

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Note</label>
                                            <textarea type="textarea" rows="3" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="note"
                                                name="note" required value = {due.note} onChange={onChange}></textarea>
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4 lblRight">Status</label>
                                            <label className="lblCheck form-control form-control-sm col-12 col-md-8 col-xl-8" id="reply_status" >
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" id="radio1" name="optradio" value="Ready for payment" 
                                                        checked={selectedOption === "Ready for payment" || due.reply_status === "Ready for payment"} onChange={onValueChange} />Ready for payment
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Not replied"
                                                        checked={selectedOption === "Not replied" || due.reply_status === "Not replied"} onChange={onValueChange} />Not replied
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <label className="form-check-label">
                                                        <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Request to extend"
                                                        checked={selectedOption === "Request to extend" || due.reply_status === "Request to extend"} onChange={onValueChange} />Request to extend
                                                    </label>
                                                </div>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="row form-group mx-3 formGroup">
                                        <div className='col text-center'>
                                        <Link to={`/edit-client/${due.client_ID}`}>
                                            <button name="View" value="View" type="" className="btn btn-primary custom-btn3 ml-1">VIEW CLIENT</button>
                                        </Link>
                                        <button  name="Update" value="Update" type="submit" className="btn btn-primary custom-btn4 ml-1">UPDATE</button>
                                        <Link to="/due-payments">
                                            <button name="Cancel" value="Cancel" type="" className="btn btn-primary custom-btn5 ml-1">CANCEL</button>
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
 
export default EditDuepayment;