import React from 'react';
import { Link } from 'react-router-dom';
import Homenav from '../Homenav';
import Sidebar from '../Sidebar';

function OverduePaymentsReport() {
        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                    {/* ---------------reports page------------ */}
                    
                    <div className="homeDiv col-10 text-center" style={{height:'88vh'}}>
                        <iframe className="mt-5" width="1200" height="550" src="https://app.powerbi.com/reportEmbed?reportId=354dfb30-426e-46b4-8033-2f4ffed766c9&autoAuth=true&ctid=aa232db2-7a78-4414-a529-33db9124cba7&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
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
            
         );
}
 
export default OverduePaymentsReport;