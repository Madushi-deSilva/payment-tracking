import React, {useState} from 'react';
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
    // const [dueList, setDueList]= useState([]);
    // const [overdueList, setOverdueList]= useState([]);
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
                            <Table responsive>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Due ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td>
                                            <Link>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">UPDATE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>

                            {/* ---------- overdue payments---------------- */}
                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                            <Table responsive>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Overdue ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td>
                                            <Link>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">UPDATE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                        </div>
                            {/* <Table responsive>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Received ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th>Due/ Overdue</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>R001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td>Due</td>
                                        <td>
                                            <Link>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">UPDATE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>R002</td>
                                        <td>John Keels Holdings</td>
                                        <td>002</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>20,000.00</td>
                                        <td>Overdue</td>
                                        <td>
                                            <Link>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">UPDATE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>R003</td>
                                        <td>John Keels Holdings</td>
                                        <td>005</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>23,000.00</td>
                                        <td>Due</td>
                                        <td>
                                            <Link>
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">UPDATE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table> */}
                        </div> 
                        <div className="row" style={{margin:'10px'}}>
                            <div className="col">
                                <div className="row form-group mx-3 formGroup">
                                    <Link>
                                        <button name="send" value="send" type="submit" className="btn btn-success ml-1">Send Thanking Note</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
}
 
export default ReceivedPayments;