import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
// import '../../App.css
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'
import Table from 'react-bootstrap/Table'
import './Home.css';

function ReceivedPayments(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const [dueList, setDueList]= useState([]);
    const [overdueList, setOverdueList]= useState([]);

    //get all received due payments
    useEffect(() => {
        Axios.get('http://localhost:3001/receivedpayments/allreceiveddue')
            .then(response => {
                setDueList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[]);

    //get all received overdue payments
    useEffect(() => {
        Axios.get('http://localhost:3001/receivedpayments/allreceivedoverdue')
            .then(response => {
                setOverdueList(response.data)
            })
            .catch((error)=>{
                console.log(error);
            })
    },[]);

    //update button in received due payments
    const updateDue=(id)=>{
        Axios.put(`http://localhost:3001/receivedpayments/receiveddue/update/${id}`)
            .then(response => {
                alert("Duepayment updated successfully");
                window.location.href = 'http://localhost:3000/due-payments';
            })
            .catch((error)=>{
                console.log(error);
            })
    }

    //update button in received overdue payments
    const updateOverdue=(id)=>{
        Axios.put(`http://localhost:3001/receivedpayments/receivedoverdue/update/${id}`)
            .then(response => {
                alert("Overduepayment updated successfully");
                window.location.href = 'http://localhost:3000/overdue-payments';
            })
            .catch((error)=>{
                console.log(error);
            })
    }

        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                     {/* ---------------received payments------------ */}
                    
                     <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>RECEIVED PAYMENTS</h1>
                        </div>
                        <div className="row" style={{margin:'10px'}}>
                        <div className="bloc-tabs">
                            <button
                            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}
                            >
                            <h3>Due Payments</h3>
                            </button>
                            <button
                            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                            >
                            <h3>Overdue Payments</h3>
                            </button>
                            
                        </div>
                        {/* ----------tab content---------------- */}
                        <div className="content-tabs">

                            {/* --------- due payments---------------- */}
                            <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Received ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {dueList.map(val=>{
                                    return(
                                    <tr  key={val.receivedDue_ID}>
                                        <td>{val.receivedDue_ID}</td>
                                        <td>{val.company_name}</td>
                                        <td>{val.invoice}</td>
                                        <td>{val.tel_no}</td>
                                        <td>{val.email}</td>
                                        <td>{val.amount}</td>
                                        <td>
                                            <Link>
                                                <button name="view" onClick={() => updateDue(val.due_ID)} value="view" type="submit" className="btn btn-primary ml-1 "><i class="fas fa-edit" data-toggle="tooltip" data-placement="top" title="Update"></i></button>
                                            </Link>
                                            <Link to={`/received-mail/${val.receivedDue_ID}`}>
                                            <button name="view" value="view" type="submit" className="btn btn-success ml-1 btnView"><i class="fas fa-envelope" data-toggle="tooltip" data-placement="top" title="Send Email"></i></button>
                                            </Link>
                                        </td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                            </div>

                            {/* ---------- overdue payments---------------- */}
                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Received ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {overdueList.map(val=>{
                                    return(
                                    <tr key={val.receivedOverdue_ID}>
                                        <td>{val.receivedOverdue_ID}</td>
                                        <td>{val.company_name}</td>
                                        <td>{val.invoice}</td>
                                        <td>{val.tel_no}</td>
                                        <td>{val.email}</td>
                                        <td>{val.amount}</td>
                                        <td>
                                            <Link>
                                                <button name="view" onClick={() => updateOverdue(val.overdue_ID)} value="view" type="submit" className="btn btn-primary ml-1 "><i class="fas fa-edit" data-toggle="tooltip" data-placement="top" title="Update"></i></button>
                                            </Link>
                                            <Link to={`/received-mail/${val.receivedOverdue_ID}`}>
                                            <button name="view" value="view" type="submit" className="btn btn-success ml-1 btnView"><i class="fas fa-envelope" data-toggle="tooltip" data-placement="top" title="Send Email"></i></button>
                                            </Link>
                                        </td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
         );
}
 
export default ReceivedPayments;