import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom'
// import '../../App.css
import Table from 'react-bootstrap/Table'
import Homenav from '../Homenav'
import Sidebar from '../Sidebar'
import './Home.css';

function DuePayments() {
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    
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
                            <div className="col">
                            <div className="form-group row formGroup">
                                    <label for="name" className="col-6 col-md-6 col-xl-6 " >Filtered By</label>
                                    <input type="date" className="form-control form-control-sm col-6 col-md-6 col-xl-6" id="dueDate"
                                        name="dueDate" required/>
                                </div> 
                            </div>
                            <div className="col">
                                <div className="row form-group mx-3 formGroup">
                                    <Link>
                                        <button name="send" value="send" type="submit" className="btn btn-success ml-1">Send Notification</button>
                                    </Link>
                                </div>
                            </div>
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
                                        <th></th>
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
                                        <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <button onClick={handleClickOpen} name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Do you want to delete?"}</DialogTitle>
                                                <DialogActions>
                                                <Button onClick={handleClose} color="primary" autoFocus>
                                                    YES
                                                </Button>
                                                <Button onClick={handleClose} color="primary">
                                                    NO
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>D002</td>
                                        <td>John Keels Holdings</td>
                                        <td>002</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>20,000.00</td>
                                        <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <button onClick={handleClickOpen} name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Do you want to delete?"}</DialogTitle>
                                                <DialogActions>
                                                <Button onClick={handleClose} color="primary" autoFocus>
                                                    YES
                                                </Button>
                                                <Button onClick={handleClose} color="primary">
                                                    NO
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>D003</td>
                                        <td>John Keels Holdings</td>
                                        <td>005</td>
                                        <td>011-1832811</td>
                                        <td>jkh@gmail.com</td>
                                        <td>23,000.00</td>
                                        <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                        <td>
                                            <Link to="/edit-due">
                                                <button name="view" value="view" type="submit" className="btn btn-primary ml-1 btnView">VIEW</button>
                                            </Link>
                                            <button onClick={handleClickOpen} name="delete" value="delete" type="submit" className="btn btn-danger ml-1">DELETE</button>
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Do you want to delete?"}</DialogTitle>
                                                <DialogActions>
                                                <Button onClick={handleClose} color="primary" autoFocus>
                                                    YES
                                                </Button>
                                                <Button onClick={handleClose} color="primary">
                                                    NO
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
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
 
export default DuePayments;