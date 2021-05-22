import React, { Component } from 'react';
import { Tabs, Tab, TabContent } from 'react-bootstrap';
class Middle extends Component {
    state = {  }
    render() { 
        return (
            <div className="homeDiv col-10" style={{height:'88vh',margin:'0px'}}>
                        <div className="row">
                            <h1>Hiiii</h1>
                        </div>
                        <div className="row">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                            <Tab eventKey="home" title="Home" className="col-6">
                                <TabContent />
                            </Tab>
                            <Tab eventKey="profile" title="Profile" className="col-6">
                                <TabContent />
                            </Tab>
                            </Tabs>
                        </div> 
                    </div>
          );
    }
}
 
export default Middle;