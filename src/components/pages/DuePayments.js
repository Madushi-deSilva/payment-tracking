import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css
import Table from 'react-bootstrap/Table'
import Homenav from '../Homenav'
import Sidebar from '../Sidebar'
import './Home.css';

class DuePayments extends Component {
    render() {
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
                            <Table responsive>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Due ID</th>
                                        <th>Company Name</th>
                                        <th>Invoice</th>
                                        <th>Telephone No.</th>
                                        <th>Company Email</th>
                                        <th>Amount</th>
                                        <th>Collected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>D001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <Link to="/home-main">
                                                <button name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>D002</td>
                                        <td>John Keels Holdings</td>
                                        <td>002</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>20,000.00</td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <Link to="/home-main">
                                                <button name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>D003</td>
                                        <td>John Keels Holdings</td>
                                        <td>005</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>23,000.00</td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <Link to="/home-main">
                                                <button name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default DuePayments;