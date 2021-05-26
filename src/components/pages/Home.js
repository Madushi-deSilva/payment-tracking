import React, {useState} from 'react';
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
                            <Table responsive>
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
                                    <tr>
                                        <td>D001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>Nihal Perera</td>
                                        <td>077-3422811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>D002</td>
                                        <td>John Keels Holdings</td>
                                        <td>002</td>
                                        <td>Nihal Perera</td>
                                        <td>077-3422811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>20,000.00</td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>D003</td>
                                        <td>John Keels Holdings</td>
                                        <td>005</td>
                                        <td>Nihal Perera</td>
                                        <td>077-3422811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>23,000.00</td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>

                            {/* ----------daily overdue payments---------------- */}
                            <div
                            className={toggleState === 2 ? "content  active-content" : "content"}
                            >
                            <Table responsive>
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
                                    <tr>
                                        <td>OD001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>Nihal Perera</td>
                                        <td>077-3422811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td>
                                            <Link to="/edit-overdue">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>OD002</td>
                                        <td>John Keels Holdings</td>
                                        <td>002</td>
                                        <td>Nihal Perera</td>
                                        <td>077-3422811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>20,000.00</td>
                                        <td>
                                            <Link to="/edit-overdue">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>OD003</td>
                                        <td>John Keels Holdings</td>
                                        <td>005</td>
                                        <td>Nihal Perera</td>
                                        <td>077-3422811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>23,000.00</td>
                                        <td>
                                            <Link to="/edit-overdue">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 ">VIEW</button>
                                            </Link>
                                        </td>
                                    </tr>
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