import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom'
// import '../../App.css'
import Homenav from '../Homenav';
import './EditPayments.css'

function EditOverduepayment(props) {
    const [overdue, setOverdue]= useState({});
    const [selectedOption, setselectedOption]= useState("");
    const onValueChange = (e) => {
        setselectedOption(e.target.value)
      }

    const onChange = (e) => {
        setOverdue({...overdue, [e.target.id]: e.target.value})
    }
    let params = useParams();

    //view overdue payment by id
    useEffect(() => {
        Axios.get(`http://localhost:3001/overduepayments/${params.id}`)
             .then(response => {
                 console.log(response.data)
                 setOverdue(response.data[0])
             })
             .catch((error)=>{
                 console.log(error);
             })
    },[]);

     //update overdue payment
     const updateOverdue = (e) =>{
        e.preventDefault();
        let overdueToUpdate = overdue
        overdueToUpdate.reply_status = selectedOption
        Axios.put(`http://localhost:3001/overduepayments/update/${params.id}`,overdueToUpdate).then(() => {
            console.log("success");
            alert("Overduepayment updated successfully");
            window.location.href = 'http://localhost:3000/overdue-payments';
        });
    };
    
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
                        <form className="m-3 row" onSubmit={updateOverdue}>
                            <input type="hidden" id="id" name="id" />

                            <div className="col colunm">

                                <div className="form-group row formGroup ">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Overdue ID</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="overdue_ID"
                                        name="overdue_ID" required value = {overdue.overdue_ID}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Company Name</label>
                                    <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="company_name"
                                        name="company_name" required value = {overdue.company_name}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Telephone No.</label>
                                    <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="tel_no"
                                        name="tel_no" required value = {overdue.tel_no}/>
                                </div> 

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Email</label>
                                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="email"
                                        name="email" required value = {overdue.email}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4">Payment Mode</label>
                                    <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="payment_mode" value = {overdue.payment_mode}>
                                            <option value="cash">Cash</option>
                                            <option value="cheque">Cheque</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col column">
                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4  lblRight">Invoice</label>
                                    <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="invoice"
                                        name="invoice"required value = {overdue.invoice}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Amount</label>
                                    <input type="number" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                        name="amount" required value = {overdue.amount}/>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Due Date</label>
                                    <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="due_date"
                                        name="dueDate" required value = {overdue.due_date}/>
                                </div> 

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Note</label>
                                    <textarea type="textarea" rows="3" class="form-control form-control-sm col-12 col-md-8 col-xl-8" id="note"
                                        name="note" required value = {overdue.note} onChange={onChange}></textarea>
                                </div>

                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Status</label>
                                    <label className="lblCheck form-control form-control-sm col-12 col-md-8 col-xl-8" id="reply_status">
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" id="radio1" name="optradio" value="Replied" 
                                            checked={selectedOption === "Replied" || overdue.reply_status === "Replied"} onChange={onValueChange} />Replied
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input type="radio" className="form-check-input" id="radio2" name="optradio" value={overdue.reply_status}
                                            checked={selectedOption === "Not replied" || overdue.reply_status === "Not replied"} onChange={onValueChange}/>Not replied
                                        </label>
                                    </div>
                                    </label>
                                </div>
                            </div>

                            <div className="row form-group mx-3 formGroup">
                                <div className='col text-center'>
                                <Link to={`/edit-client/${overdue.client_ID}`}>
                                    <button name="View" value="View" type="submit" className="btn btn-primary custom-btn3 ml-1">VIEW CLIENT</button>
                                </Link>
                                    <button name="Update" value="Update" type="submit" className="btn btn-primary custom-btn4 ml-1">UPDATE</button>
                                <Link to="/overdue-payments">
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
 
export default EditOverduepayment;