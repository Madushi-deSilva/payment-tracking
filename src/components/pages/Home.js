import React, {Component} from 'react';
// import '../../App.css'
import {Tabs, Tab, TabContent, TabPane,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { CDBNav, CDBTabLink, CDBTabContent, CDBTabPane, CDBContainer } from "cdbreact";
import './Home.css'
import Homenav from '../Homenav';
import Sidebar from '../Sidebar'
// import Middle from '../Middle';

class Home extends Component {
    render() {
        return ( 
            <div>
                <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                    <Sidebar/>
                    <div className="homeDiv col-9" style={{height:'88vh',marginLeft:'20px'}}>
                        <div className="row">
                            <h1>Hiiii</h1>
                        </div>
                        <div className="row">
                            <CDBContainer>
                            <Nav className="nav-tabs mt-5">
                                <Link to="#"
                                // active={this.state.activeItem === "1"}
                                // onClick={this.toggle("1")}
                                role="tab"
                                >
                                Due Payments
                                </Link>

                                <Link to="#"
                                // active={this.state.activeItem === "2"}
                                // onClick={this.toggle("2")}
                                role="tab"
                                >
                                Overdue Payments
                                </Link>
                            </Nav>
                            <TabContent >
                                <TabPane tabId="1" role="tabpanel">
                                <p className="mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Nihil odit magnam minima, soluta doloribus reiciendis
                                    molestiae placeat unde eos molestias. Quisquam aperiam,
                                    pariatur. Tempora, placeat ratione porro voluptate odit
                                    minima.
                                </p>
                                </TabPane>
                                <TabPane tabId="2" role="tabpanel">
                                <p className="mt-2">
                                    Quisquam aperiam, pariatur. Tempora, placeat ratione porro
                                    voluptate odit minima. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Nihil odit magnam minima,
                                    soluta doloribus reiciendis molestiae placeat unde eos
                                    molestias.
                                </p>
                                </TabPane>
                            </TabContent>
                            </CDBContainer>
                        </div> 
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Home;