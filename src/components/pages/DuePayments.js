import React, {useState,useEffect} from 'react';
import {Button, Modal} from 'react-bootstrap';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
import Homenav from '../Homenav'
import Sidebar from '../Sidebar'
import './Home.css';

function DuePayments() {
    const [show, setShow] = useState(false);
    const [deleteID, setdeleteID] = useState('');
    const [replyStatus, setreplyStatus] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = (id, status) => {
        setShow(true);
        setdeleteID(id)
        setreplyStatus(status)

    }

    //delete payment by id
    const deleteDue = (id, status) =>{
        console.log("Del id",id)
        console.log("Del status",status)
        Axios.delete(`http://localhost:3001/duepayments/delete/${id}`, {
            data: {
                status: status
            }
            
        }).then(() => {
            console.log("deleted");
            window.location.href = 'http://localhost:3000/due-payments';
        });
    };

    const [dueList, setDueList]= useState([]);
    const [filterDate, setDate] = useState([]);

    //get all payments
    useEffect(() => {
    Axios.get('http://localhost:3001/duepayments/alldue')
         .then(response => {
             setDueList(response.data)
         })
         .catch((error)=>{
             console.log(error);
         })
    },[]);
    
    return ( 
        <div>

            {/* ---------home navigation componenet---------- */}
            <Homenav/>

            <div className="row" style={{maxWidth:'100%'}}>

                {/* -------------sidebar componenet------------ */}
                <Sidebar/>

                {/* ---------------duepayments------------ */}
                
                <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                    <div className="row">
                        <h1 style={{fontFamily:'serif', padding:'10px'}}>DUE PAYMENTS</h1>
                    </div>
                    <div className="row" style={{margin:'10px'}}>
                        <div className="col">
                        <div className="form-group row formGroup">
                                <label className="col-6 col-md-6 col-xl-6 " >Filtered By</label>
                                <input type="date" className="form-control form-control-sm col-6 col-md-6 col-xl-6" id="dueDate"
                                    name="dueDate" required onChange={(event) =>{
                                        setDate(event.target.value);
                                    }}/>
                            </div> 
                        </div>
                        <div className="col">
                            <div className="row form-group mx-3 formGroup">
                            <div className='col text-center'>
                                <Link to="/add-new">
                                    <button name="send" value="send" type="submit" className="btn btn-primary ml-1">Add New Payment</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{margin:'10px'}}>
                        <Table responsive hover>
                            <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                <tr>
                                    <th>Due ID</th>
                                    <th>Company Name</th>
                                    <th>Invoice</th>
                                    <th>Due Date</th>
                                    <th>Telephone No.</th>
                                    <th>Company Email</th>
                                    <th>Amount</th>
                                    <th>Collected</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {dueList.filter((val) => {
                                    if (filterDate === ""){
                                        return val
                                    }else if (val.due_date.toLowerCase().includes(filterDate)){
                                        return val
                                    }
                                }).map(val=>{
                                return(
                                <tr key={val.due_ID}>
                                    <td>{val.due_ID}</td>
                                    <td>{val.company_name}</td>
                                    <td>{val.invoice}</td>
                                    <td>{val.due_date}</td>
                                    <td>{val.tel_no}</td>
                                    <td>{val.email}</td>
                                    <td>{val.amount}</td>
                                    <td><input type="checkbox" id="" name="" checked={val.collected_status} style={{width:'20px', height:'20px'}}/></td>
                                    <td>
                                        <Link to={`/edit-due/${val.due_ID}`}>
                                            <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView"><i class="fas fa-eye" data-toggle="tooltip" data-placement="top" title="View"></i></button>
                                        </Link>
                                        <Link to={`/due-mail/${val.due_ID}`}>
                                            <button name="view" value="view" type="submit" className="btn btn-success ml-1 btnView"><i class="fas fa-envelope" data-toggle="tooltip" data-placement="top" title="Send Email"></i></button>
                                        </Link>
                                        <Button variant="danger" onClick={() => handleShow(val.due_ID, val.reply_status)}> <i class="fas fa-trash-alt" data-toggle="tooltip" data-placement="top" title="Delete"></i> </Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Body>Are you want to delete?</Modal.Body>
                                                <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}> No </Button>
                                                <Button variant="primary" onClick={() => deleteDue(deleteID, replyStatus)}> Yes </Button>
                                                </Modal.Footer>
                                            </Modal>
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
    );
    
}
 
export default DuePayments;