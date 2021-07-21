import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardGroup } from 'react-bootstrap'
import Homenav from '../Homenav';
import Sidebar from '../Sidebar';

function ClientReport() {
        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                    {/* ---------------reports page------------ */}
                    
                    <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <div className="row" style={{margin:'10px'}}>
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
                            <iframe className="mt-3" width="1200" height="550" src="https://app.powerbi.com/reportEmbed?reportId=2bf71ba9-f9ac-4be9-ba4d-0402e6e758db&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                            <div className="row form-group mx-3 mt-2 formGroup">
                                <div className='col text-center'>
                                    <button name="Save" value="Save" type="submit" className="btn btn-primary custom-btn1 ml-1">SAVE</button>
                                    <Link to="/reports">
                                        <button name="Cancel" value="Cancel" type="submit" className="btn btn-primary custom-btn2 ml-1">CANCEL</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
         );
}
 
export default ClientReport;