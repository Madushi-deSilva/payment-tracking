import React, {Component} from 'react';
// import '../../App.css
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'

class OverduePayments extends Component {
    render() {
        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                    
                </div>
            </div>
         );
    }
}
 
export default OverduePayments;