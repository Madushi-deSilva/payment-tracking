import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'
import Table from 'react-bootstrap/Table'
import './Home.css';

class OverduePayments extends Component {
    render() {
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
                            <Table responsive>
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
                                    <tr>
                                        <td>OD001</td>
                                        <td>John Keels Holdings</td>
                                        <td>001</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>30,000.00</td>
                                        <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to="/edit-overdue">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <Link to="/home-main">
                                                <button name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>OD002</td>
                                        <td>John Keels Holdings</td>
                                        <td>002</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>20,000.00</td>
                                        <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to="/edit-overdue">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <Link to="/home-main">
                                                <button name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>OD003</td>
                                        <td>John Keels Holdings</td>
                                        <td>005</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>23,000.00</td>
                                        <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to="/edit-overdue">
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
}
 
export default OverduePayments;