import React, {Component} from 'react';
import { Link } from 'react-router-dom'
// import '../../App.css
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'
import './Home.css';

class Reports extends Component {
    render() {
        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                    {/* ---------------received payments------------ */}
                    
                    <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>REPORTS</h1>
                        </div>
                        <div className="row" style={{margin:'10px'}}>
                            <div className="col">
                            <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Category</label>
                                    <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="category">
                                            <option value="client">Client payment report</option>
                                            <option value="due">Due payments</option>
                                            <option value="overdue">Overdue payments</option>
                                            <option value="received">Received payments</option>
                                            <option value="overall">Overall analysis</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col reportCol">
                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">From</label>
                                    <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="from"
                                        name="from" required/>
                                </div>
                                <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">To</label>
                                    <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="to"
                                        name="to" required/>
                                </div>
                            </div>
                        
                        </div>
                        <div className="row" style={{margin:'10px', textAlign:'right'}}>
                            <div className="col">
                                <div className="row form-group mx-3 formGroup">
                                    <Link>
                                        <button name="send" value="send" type="submit" className="btn btn-success ml-1 btnPreview">PREVIEW</button>
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
 
export default Reports;