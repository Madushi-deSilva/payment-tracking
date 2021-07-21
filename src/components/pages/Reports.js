import React, { Component } from "react";
import {Card, CardGroup } from 'react-bootstrap'
// import '../../App.css'
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
                    {/* ---------------reports page------------ */}
                    
                    <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>REPORTS</h1>
                        </div>
                        <div className="row" style={{margin:'10px'}}>
                        <CardGroup>
                            <Card className="mr-2 ml-2" style={{border:'1px', borderRadius:'5px', backgroundColor:'lightblue'}}>
                                <Card.Body>
                                    <Card.Link href="/client-report" style={{color:'black', fontFamily:'Georgia', fontSize:'20px'}}>Client Payment Report</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mr-2" style={{border:'1px', borderRadius:'5px', backgroundColor:'lightgreen'}}>
                                <Card.Body>
                                    <Card.Link href="/due-report" style={{color:'black', fontFamily:'Georgia', fontSize:'20px'}}>Due Payments Report</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mr-2" style={{border:'1px', borderRadius:'5px', backgroundColor:'yellow'}}>
                                <Card.Body>
                                    <Card.Link href="/overdue-report" style={{color:'black', fontFamily:'Georgia', fontSize:'20px'}}>Overdue Payments Report</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mr-2" style={{border:'1px', borderRadius:'5px', backgroundColor:'violet'}}>
                                <Card.Body>
                                    <Card.Link href="/received-report" style={{color:'black', fontFamily:'Georgia', fontSize:'20px'}}>Received Payments Report</Card.Link>
                                </Card.Body>
                            </Card>
                            <Card className="mr-2" style={{border:'1px', borderRadius:'5px', backgroundColor:'orange'}}>
                                <Card.Body>
                                    <Card.Link href="/overall-report" style={{color:'black', fontFamily:'Georgia', fontSize:'20px'}}>Overall Analysis Report</Card.Link>
                                </Card.Body>
                            </Card>
                            </CardGroup>
                            {/* <div className="col">
                            <div className="form-group row formGroup">
                                    <label for="name" className="col-12 col-md-4 col-xl-4 lblRight">Category</label>
                                    <select className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="category">
                                            <option value="client" href="/due-payments">Client payment report</option>
                                            <option value="due">Due payments</option>
                                            <option value="overdue">Overdue payments</option>
                                            <option value="received">Received payments</option>
                                            <option value="overall">Overall analysis</option>
                                    </select>
                                </div>
                            </div> */}
                        
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Reports;