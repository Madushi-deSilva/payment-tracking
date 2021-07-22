import React from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CreditCollector from './components/pages/CreditCollector';
import Navbar from './components/Navbar'
import Signup from './components/pages/Signup'
import Edituser from './components/pages/Edituser'
import Home from './components/pages/Home'
import Clients from './components/pages/Clients';
import DuePayements from './components/pages/DuePayments';
import OverduePayments from './components/pages/OverduePayments';
import ReceivedPayments from './components/pages/ReceivedPayments';
import Reports from './components/pages/Reports';
import EditDuepayment from './components/pages/EditDuepayment';
import EditOverduepayment from './components/pages/EditOverduepayment';
import EditClient from './components/pages/EditClient';
import AddNewPayment from './components/pages/AddNewPayment';
import DueMail from './components/pages/DueMail';
import OverdueMail from './components/pages/OverdueMail';
import ReceivedMail from './components/pages/ReceivedMail';
import DuePaymentsReport from './components/reports/duepayments';
import ClientReport from './components/reports/clientreport';
import OverduePaymentsReport from './components/reports/overduepayments';
import ReceivedPaymentsReport from './components/reports/receivedpayments';

function App() {
  return (
    <>
    <Router>
        <Switch>
          <Route path='/credit' exact component={CreditCollector}/>
          <Route path='/home-main' component={Home}/>
          <Route path='/clients' component={Clients}/>
          <Route path='/edit-client/:id' component={EditClient}/>  
          <Route path='/' exact component={Navbar}/>
          <Route path='/sign-up' component={Signup} />
          <Route path='/due-payments' component={DuePayements}/>
          <Route path='/add-new' component={AddNewPayment}/>
          <Route path='/due-mail/:id' component={DueMail}/>
          <Route path='/edit-due/:id' component={EditDuepayment}/>
          <Route path='/overdue-payments' component={OverduePayments}/>
          <Route path='/overdue-mail/:id' component={OverdueMail}/>
          <Route path='/edit-overdue/:id' component={EditOverduepayment}/>
          <Route path='/received-payments' component={ReceivedPayments}/>
          <Route path='/received-mail/:id' component={ReceivedMail}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/edit-user/:id' component={Edituser}/> 
          <Route path='/client-report' component={ClientReport}/>
          <Route path='/due-report' component={DuePaymentsReport}/>
          <Route path='/overdue-report' component={OverduePaymentsReport}/>
          <Route path='/received-report' component={ReceivedPaymentsReport}/>
        </Switch>
    </Router>
        
    </>
  );
}

export default App;

