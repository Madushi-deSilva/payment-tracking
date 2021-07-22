import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import Homenav from '../Homenav'
import Sidebar from '../Sidebar'
import './Mail.css';

function ReceivedMail(){
    const [receivedDue, setReceivedDue]= useState({});
    const [receivedOverdue, setReceivedOverdue]= useState({});
    const [ from, setFrom] = useState("");
    const [ to, setTo] = useState("");
    const [ amount, setAmount] = useState(0);

    let params = useParams();

    //view email and amount of received due payment by id
    useEffect(() => {
        console.log("id", params.id)
        axios.get(`http://localhost:3001/receivedpayments/receivedmail/due/${params.id}`)
             .then(response => {                
                 console.log("E data",response.data)
                 setReceivedDue(response.data[0])
                 setTo(response.data[0].email);
                 setAmount(response.data[0].amount);
             })
             .catch((error)=>{
                 console.log(error);
             })
    },[]);

    //view email and amount of received pverdue payment by id
    useEffect(() => {
        console.log("id", params.id)
        axios.get(`http://localhost:3001/receivedpayments/receivedmail/overdue/${params.id}`)
             .then(response => {                
                 console.log("E data",response.data)
                 setReceivedOverdue(response.data[0])
                 setTo(response.data[0].email);
                 setAmount(response.data[0].amount);
             })
             .catch((error)=>{
                 console.log(error);
             })
    },[]);

    //form submit
    const formSubmit = (e) => {
        e.preventDefault();
        let data = {
            from: from,
            to: to,
            amount: amount
        }

        axios.post('http://localhost:3001/receivedpayments/receivedmail', data)
            .then(() => {
                alert("Message has been sent");
                window.location.href = 'http://localhost:3000/received-payments';
            })
            .catch(() => {
                console.log("message not sent");
            })
    }

    return (
        <div>

            {/* ---------home navigation componenet---------- */}
            <Homenav/>

            <div className="row" style={{maxWidth:'100%'}}>

                {/* -------------sidebar componenet------------ */}
                <Sidebar/>
                
                <div className="container shadow mt-6 col-6 mailcontainer">
                    <div className="card mt-4 mailcard">
                        <div className="card-header bg-white">
                            <div className="row">
                                <i className="fa fa-envelope mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                <h3 className="ml-2 my-auto" style={{width:'auto'}}>Send Thanking Note</h3>
                            </div>
                        </div>
                        <div className="card-body">
                            <form className="m-3 row" onSubmit={formSubmit}>
                                
                            <div className="form-group row formGroup ">
                                    <label className="col-12 col-md-4 col-xl-4">From</label>
                                    <input type="email" className="form-control  col-12 col-md-8 col-xl-8" id="from"
                                        name="from" value={from} onChange={(event) => {setFrom(event.target.value);}} required/>
                                
                                </div>
                                <div className="form-group row formGroup ">
                                    <label className="col-12 col-md-4 col-xl-4">To</label>
                                    <input type="email" className="form-control  col-12 col-md-8 col-xl-8" id="to"
                                        name="to" value={to} onChange={(event) => {setTo(event.target.value);}} required/>
                                
                                </div>

                                <div className="form-group row formGroup">
                                    <label className="col-12 col-md-4 col-xl-4">Amount</label>
                                        <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                        name="amount" value={amount} onChange={(event) => {setAmount(event.target.value);}}
                                        />
                                </div>

                                <div className="row form-group mx-3 formGroup">
                                    <div className="btn btnSend">
                                        <button type="submit">Send Email</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReceivedMail;