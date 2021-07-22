import React, { Component } from "react";
import {Card, CardGroup } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'
import './Home.css';

class Reports extends Component {
    render() {
        return ( 
            <div>
                {/* ----------navigation bar inserted---------------- */}
                <Homenav/>

                <div className="row" style={{maxWidth:'100%'}}>
                    {/* ----------sidebar inserted---------------- */}
                    <Sidebar/>

                    {/* ---------------reports page------------ */}
                    
                    <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row">
                            <h1 style={{fontFamily:'serif', padding:'10px'}}>REPORTS</h1>
                        </div>
                        <div className="row" style={{marginLeft:'10px', marginRight:'10px'}}>
                            <CardGroup>
                                <Card className="mr-2 ml-2" style={{border:'1px', borderRadius:'5px', backgroundColor:'skyblue'}}>
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
                                        <Card.Link href="/reports" style={{color:'black', fontFamily:'Georgia', fontSize:'20px'}}>Overall Analysis Report</Card.Link>
                                    </Card.Body>
                                </Card>
                            </CardGroup>

                            {/* ---------overall report import from power bi --------- */}
                            <iframe className="mt-3" width="1200" height="550" src="https://app.powerbi.com/reportEmbed?reportId=5c5866ba-ee23-4c28-a43d-dd967eef36ff&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                            
                            {/*------- button group -------- */}
                            {/* <div className="row form-group mx-3 mt-2 formGroup">
                                <div className='col text-center'>
                                    <button name="Save" value="Save" type="submit" className="btn btn-primary custom-btn1 ml-1">SAVE</button>
                                    <Link to="/reports">
                                        <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn2 ml-1">CANCEL</button>
                                    </Link>
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