import React from 'react';
import { Link } from 'react-router-dom';
import {Card, CardGroup, Container } from 'react-bootstrap'
import Homenav from '../Homenav';
import Sidebar from '../Sidebar';

function ClientReport() {

    //print report
    function createPDF() {
        // get elements of report data
        var cv = document.getElementById("cv").innerHTML;
        var style = "<style>";
        style =
          style + "table {width: 100%;font: 17px Calibri;} body{font-size:12px}";
        style =
          style +
          "table, th, td {border: solid 1px #DDD;color: black ;border-collapse: collapse;";
        style = style + "padding: 2px 3px;text-align: center;}";
        style = style + "</style>";
      
        // CREATE A WINDOW OBJECT.
        var win = window.open("", "", "height=700,width=700");
        win.document.write(
          '<html><head><link rel="stylesheet" href="./css/manager-add-style.css" />'
        );
        win.document.write("<title>Report</title>"); // <title> FOR PDF HEADER.
        win.document.write(style); // ADD STYLE INSIDE THE HEAD TAG.
        win.document.write("</head>");
        win.document.write(cv);
        // THE TABLE CONTENTS INSIDE THE BODY TAG.
        win.document.write("</body></html>");
        win.document.close(); // CLOSE THE CURRENT WINDOW.
        win.print(); // PRINT THE CONTENTS.
      }

    return ( 
        <div>
                {/*-------- Account Officer navigation bar ---------- */}
            <Homenav/>
            <div className="row" style={{maxWidth:'100%'}}>
                {/*---------- load sidebar-------------  */}
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

                        {/* ---------client payments report import from power bi --------- */}
                        <Container fluid id = "cv" >
                            <iframe className="mt-3" width="100%" height="541.25" src="https://app.powerbi.com/reportEmbed?reportId=2bf71ba9-f9ac-4be9-ba4d-0402e6e758db&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
                        </Container>
                        
                        {/*------- button group -------- */}
                        <div className="row form-group mx-3 mt-2 formGroup">
                            <div className='col text-center'>
                                <button name="Save" onClick={createPDF} value="Save" type="submit" className="btn btn-primary custom-btn1 ml-1">SAVE</button>
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