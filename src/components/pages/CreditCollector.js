import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import './Home.css'
// import '../../App.css
import Table from 'react-bootstrap/Table'
import HomenavCredit from '../HomenavCredit';

function CreditCollector(){

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [dueList, setDueList]= useState([]);
    const [overdueList, setOverdueList]= useState([]);

    const [selected, setselected] = useState([]);

    //get all daily due payments
    function fetchAlldue() {
        Axios.get('http://localhost:3001/duepayments/credit/alldue')
         .then(response => {
             setDueList(response.data)
         })
         .catch((error)=>{
             console.log(error);
         })
        
    }
    //get all daily overdue payments
    function fetchAllOverDUe() {
        Axios.get('http://localhost:3001/overduepayments/credit/alloverdue')
         .then(response => {
             setOverdueList(response.data)
         })
         .catch((error)=>{
             console.log(error);
         })
    }
    //fetch data from usereffect
    useEffect(() => {
            fetchAlldue()
            fetchAllOverDUe()
        }, []);

    //put a tick when due payment received -> checkbox
    const handleCheck = (id) => {
        console.log("id", id)
        let checked = selected;
        if (checked.includes(id)) {
        let filtered = checked.filter((i) => {
            if (i !== id) return true;
        });
        setselected(filtered);
        } else if (selected.length === 0) {
        setselected([id]);
        } else {
        setselected([...selected, id]);
        }
        
        Axios.put(`http://localhost:3001/duepayments/credit/update/${id}`)
         .then(() => {
            fetchAlldue()
         })
         .catch((error)=>{
             console.log(error);
         })
    }

    //put a tick when overdue payment received -> checkbox
    const handleOverdueCheck = (id) => {
        console.log("id", id)
        let checked = selected;
        if (checked.includes(id)) {
        let filtered = checked.filter((i) => {
            if (i !== id) return true;
        });
        setselected(filtered);
        } else if (selected.length === 0) {
        setselected([id]);
        } else {
        setselected([...selected, id]);
        }
        
        Axios.put(`http://localhost:3001/overduepayments/credit/update/${id}`)
         .then(() => {
            fetchAllOverDUe()
         })
         .catch((error)=>{
             console.log(error);
         })
    }

    return ( 
        <div>
            {/* ----------navigation bar inserted---------------- */}
            <HomenavCredit/>
            {/* ---------------main page------------ */}
            <div>
                <div className="row text-center">
                    <h1 style={{fontFamily:'serif', padding:'10px'}}>DAILY DUE/ OVERDUE PAYMENTS</h1>
                </div>
                <div className="row text-center" style={{margin:'10px'}}>
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
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                        <th>Invoice</th>
                                        <th>Company Name</th>
                                        <th>Address</th>
                                        <th>Telephone No.</th>
                                        <th>Contact Person Name</th>
                                        <th>Mobile No.</th>
                                        <th>Amount</th>
                                        <th>Collected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {dueList.map(val=>{
                                    return(
                                    <tr key={val.due_ID}>
                                        <td>{val.invoice}</td>
                                        <td>{val.company_name}</td>
                                        <td>{val.address}</td>
                                        <td>{val.tel_no}</td>
                                        <td>{val.contact_person}</td>
                                        <td>{val.mobile_no}</td>
                                        <td>{val.amount}</td>
                                        <td><input type="checkbox" id="dec" name="dec" onChange={() => handleCheck(val.due_ID)} checked={selected.includes(val.due_ID) || val.credit_collected_status} disabled={selected.includes(val.due_ID) || val.credit_collected_status} style={{width:'20px', height:'20px'}}/></td>
                                    
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                        </div>
                        <div
                        className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                            <Table responsive hover>
                                <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                    <tr>
                                    <th>Invoice</th>
                                    <th>Company Name</th>
                                    <th>Address</th>
                                    <th>Telephone No.</th>
                                    <th>Contact Person Name</th>
                                    <th>Mobile No.</th>
                                    <th>Amount</th>
                                    <th>Collected</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {overdueList.map(val=>{
                                return(
                                    <tr key={val.overdue_ID}>
                                        <td>{val.invoice}</td>
                                        <td>{val.company_name}</td>
                                        <td>{val.address}</td>
                                        <td>{val.tel_no}</td>
                                        <td>{val.contact_person}</td>
                                        <td>{val.mobile_no}</td>
                                        <td>{val.amount}</td>
                                        <td><input type="checkbox" id="" name="" onChange={() => handleOverdueCheck(val.overdue_ID)} checked={selected.includes(val.overdue_ID) || val.credit_collected_status} disabled={selected.includes(val.overdue_ID) || val.credit_collected_status} style={{width:'20px', height:'20px'}}/></td>
                                    </tr>
                                    );
                                })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default CreditCollector;