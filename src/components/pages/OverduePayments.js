import React, {useState,useEffect} from 'react';
import {Button, Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Axios from 'axios'
// import '../../App.css
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'
import Table from 'react-bootstrap/Table'
import './Home.css';

function OverduePayments() {
    const [show, setShow] = useState(false);
    const [deleteID, setdeleteID] = useState('');

  const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
const handleShow = (id) => {
    setShow(true);
    setdeleteID(id)

}
//delete payment by id
const deleteOverdue = (id) =>{
    console.log("Del id",id)
    console.log("Del status")
    Axios.delete(`http://localhost:3001/overduepayments/delete/${id}`).then(() => {
        console.log("deleted");
        window.location.href = 'http://localhost:3000/overdue-payments';
    });
};

    const [overdueList, setOverdueList]= useState([]);
  
    //get all overdue payments
    useEffect(() => {
      Axios.get('http://localhost:3001/overduepayments/alloverdue')
           .then(response => {
               setOverdueList(response.data)
           })
           .catch((error)=>{
               console.log(error);
           })
  },[]);

        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                    {/* ---------------overdue payments------------ */}
                    
                    <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>OVERDUE PAYMENTS</h1>
                        </div>
                        <div className="row" style={{margin:'10px'}}>
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Overdue ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th>Collected</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {overdueList.map(val=>{
                                    return(
                                    <tr key={val.overdue_ID}>
                                        <td>{val.overdue_ID}</td>
                                        <td>{val.company_name}</td>
                                        <td>{val.invoice}</td>
                                        <td>{val.tel_no}</td>
                                        <td>{val.email}</td>
                                        <td>{val.amount}</td>
                                        <td><input type="checkbox" checked={val.collected_status} id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to={`/edit-overdue/${val.overdue_ID}`}>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            {/* <Link to="/home-main">
                                                <button name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            </Link> */}
                                            <Button variant="danger" onClick={() => handleShow(val.overdue_ID)}> Delete </Button>
                                            <Modal show={show} onHide={handleClose}>
                                                <Modal.Body>Are you want to delete?</Modal.Body>
                                                <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}> No </Button>
                                                <Button variant="primary" onClick={() => deleteOverdue(deleteID)}> Yes </Button>
                                                </Modal.Footer>
                                            </Modal>
                                        </td>
                                    </tr>
                                  );
                                })} 
                                </tbody>
                            </Table>
                        </div> 
                        <div className="row" style={{margin:'10px'}}>
                            <div className="col">
                                <div className="row form-group mx-3 formGroup">
                                    <Link>
                                        <button name="send" value="send" type="submit" className="btn btn-success ml-1">Send Notification</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
}
 
export default OverduePayments;