import React, {Component} from 'react';
// import '../../App.css
import Table from 'react-bootstrap/Table'
import HomenavCredit from '../HomenavCredit';

class CreditCollector extends Component {
    render() {
        return ( 
            <div>
                <HomenavCredit/>
                <div>
                    <div className="row text-center">
                        <h1 style={{fontFamily:'serif', padding:'10px'}}>DAILY DUE/ OVERDUE PAYMENTS</h1>
                    </div>
                    <div className="row text-center" style={{margin:'10px'}}>
                        <Table responsive>
                            <thead style={{backgroundColor:'pink', borderTop:'2px solid black'}}> 
                                <tr>
                                    <th>Invoice</th>
                                    <th>Company Name</th>
                                    <th>Address</th>
                                    <th>Telephone No.</th>
                                    <th>Contact Person Name</th>
                                    <th>Mobile No.</th>
                                    <th>Due/ Overdue</th>
                                    <th>Collected</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>001</td>
                                    <td>John Keels Holdings</td>
                                    <td>Colombo, Sri Lanka</td>
                                    <td>011-1832811</td>
                                    <td>Nihal Perera</td>
                                    <td>077-3422811</td>
                                    <td>Due</td>
                                    <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                </tr>
                                <tr>
                                    <td>002</td>
                                    <td>John Keels Holdings</td>
                                    <td>Colombo, Sri Lanka</td>
                                    <td>011-1832811</td>
                                    <td>Nihal Perera</td>
                                    <td>077-3422811</td>
                                    <td>Overdue</td>
                                    <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                </tr>
                                <tr>
                                    <td>003</td>
                                    <td>John Keels Holdings</td>
                                    <td>Colombo, Sri Lanka</td>
                                    <td>011-1832811</td>
                                    <td>Nihal Perera</td>
                                    <td>077-3422811</td>
                                    <td>Due</td>
                                    <td><input type="checkbox" id="" name="" style={{width:'20px', height:'20px'}}/></td>
                                </tr>
                            </tbody>
                        </Table>
                        
                    </div>
                </div>
            </div>
         );
    }
}
 
export default CreditCollector;