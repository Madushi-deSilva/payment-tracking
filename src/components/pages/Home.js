import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../../App.css'
import './Home.css'
import Table from 'react-bootstrap/Table'
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'

function Home(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const [dueList, setDueList]= useState([]);
    const [overdueList, setOverdueList]= useState([]);

  //get all due payments
  useEffect(() => {
    Axios.get('http://localhost:3001/duepayments/home/alldue')
         .then(response => {
             setDueList(response.data)
         })
         .catch((error)=>{
             console.log(error);
         })
    },[]);

    //get all overdue payments
  useEffect(() => {
    Axios.get('http://localhost:3001/overduepayments/home/alloverdue')
         .then(response => {
             setOverdueList(response.data)
         })
         .catch((error)=>{
             console.log(error);
         })
    },[]);

    return ( 
        <div>

            {/* ----------navigation bar inserted---------------- */}
            <Homenav/>
            <div className="row" style={{maxWidth:'100%'}}>

                {/* ----------sidebar inserted---------------- */}
                <Sidebar/>
                {/* ---------------home page------------ */}
                <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                    <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>DAILY DUE/ OVERDUE PAYMENTS</h1>
                    </div>
                    <div className="row" style={{margin:'10px', marginTop:'20px'}}>

                        {/* ----------tab headings--------------- */}
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

                            {/* ----------daily due payments---------------- */}
                            <div
                            className={toggleState === 1 ? "content  active-content" : "content"}
                            >
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Due ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Contact Person Name</th>
                                        <th>Mobile No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                {dueList.map(val=>{
                                    return(
                                    <tr key={val.due_ID}>
                                        <td>{val.due_ID}</td>
                                        <td>{val.company_name}</td>
                                        <td>{val.invoice}</td>
                                        <td>{val.contact_person}</td>
                                        <td>{val.mobile_no}</td>
                                        <td>{val.email}</td>
                                        <td>{val.amount}</td>
                                        <td>
                                            <Link to={`/edit-due/${val.due_ID}`}>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1"><i class="fas fa-eye" data-toggle="tooltip" data-placement="top" title="View"></i></button>
                                            </Link>
                                        </td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                            </div>

                            {/* ----------daily overdue payments---------------- */}
                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Overdue ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Contact Person Name</th>
                                        <th>Mobile No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
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
                                        <td>{val.contact_person}</td>
                                        <td>{val.mobile_no}</td>
                                        <td>{val.email}</td>
                                        <td>{val.amount}</td>
                                        <td>
                                            <Link to={`/edit-overdue/${val.overdue_ID}`}>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 "><i class="fas fa-eye" data-toggle="tooltip" data-placement="top" title="View"></i></button>
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

 
export default Home;