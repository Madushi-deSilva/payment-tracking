import React, { Component } from 'react';
import axios from 'axios';
import Homenav from '../Homenav'
import Sidebar from '../Sidebar'
import './Mail.css';

class DueMail extends Component {
    state = {
        email: '',
        amount: '',
        duedate: '',
        sent: false
    }

    //handle inputs
    handleEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    handleAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    handleDuedate = (e) => {
        this.setState({
            duedate: e.target.value
        })
    }

    //form submit - end of handel inputs
    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            email: this.state.email,
            amount: this.state.amount,
            duedate: this.state.duedate
        }

        axios.post('http://localhost:3001/duepayments/duemail', data)
            .then(res => {
                this.setState({
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => {
                console.log("message not sent");
            })
    }

    //for resetting initial data
    resetForm = () => {
        this.setState({
            email: '',
            amount: '',
            duedate: ''
        })
        setTimeout(() => {
            this.setState({
                sent: false,
            })
        }, 1000)
    }

    render() {
        return (
            <div>
            {/* ---------home navigation componenet---------- */}
            <Homenav/>
                <div className="row" style={{maxWidth:'100%'}}>
                {/* -------------sidebar componenet------------ */}
                <Sidebar/>
                    <div className="container shadow mt-6 col-6 mailcontainer">
                        <div className="card mt-4 mailcard">
                            <div className="card-header bg-white">
                                <div className="row">
                                    <i className="fas fa-user mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                    <h3 className="ml-2 my-auto" style={{width:'auto'}}>Edit Client</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <form className="m-3 row" onSubmit={this.formSubmit}>
                                    
                                        <div className="form-group row formGroup ">
                                            <label className="col-12 col-md-4 col-xl-4">Email</label>
                                            <input type="email" className="form-control  col-12 col-md-8 col-xl-8" id="email"
                                                name="email" value={this.state.email} onChange={this.handleEmail} required/>
                                        
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4">Amount</label>
                                                <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                                name="amount" value={this.state.amount} onChange={this.handleAmount}
                                                />
                                        </div>

                                        <div className="form-group row formGroup">
                                            <label className="col-12 col-md-4 col-xl-4">Due Date</label>
                                            <input type="date" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="duedate"
                                                name="duedate" value={this.state.duedate} onChange={this.handleDuedate}/>
                                        </div>
                                    <div className="row form-group mx-3 formGroup">
                                    <div className={this.state.sent ? 'msg msgAppear' : 'msg'}>Message has been sent</div>
                                        <div className="btn btnSend">
                                            <button type="submit">Send Email</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DueMail;