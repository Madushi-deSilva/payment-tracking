import React, { Component } from 'react';
import axios from 'axios';
import Homenav from '../Homenav'
import Sidebar from '../Sidebar'
import './Mail.css';

class ReceivedMail extends Component {
    state = {
        from:'',
        to: '',
        amount: '',
        sent: false
    }

    //handle inputs
    handleFrom = (e) => {
        this.setState({
            from: e.target.value
        })
    }

    handleTo = (e) => {
        this.setState({
            to: e.target.value
        })
    }

    handleAmount = (e) => {
        this.setState({
            amount: e.target.value
        })
    }

    //form submit - end of handel inputs
    formSubmit = (e) => {
        e.preventDefault();
        let data = {
            from: this.state.from,
            to: this.state.to,
            amount: this.state.amount
        }

        axios.post('http://localhost:3001/receivedpayments/receivedmail', data)
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
            from:'',
            to: '',
            amount: ''
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
                                    <i className="fa fa-envelope mx-2 my-auto fa-2x" style={{width:'auto'}}></i>
                                    <h3 className="ml-2 my-auto" style={{width:'auto'}}>Send Thanking Note</h3>
                                </div>
                            </div>
                            <div className="card-body">
                                <form className="m-3 row" onSubmit={this.formSubmit}>
                                    
                                    <div className="form-group row formGroup ">
                                        <label className="col-12 col-md-4 col-xl-4">From</label>
                                        <input type="email" className="form-control  col-12 col-md-8 col-xl-8" id="from"
                                            name="from" value={this.state.from} onChange={this.handleFrom} required/>
                                    
                                    </div>
                                    <div className="form-group row formGroup ">
                                        <label className="col-12 col-md-4 col-xl-4">To</label>
                                        <input type="email" className="form-control  col-12 col-md-8 col-xl-8" id="to"
                                            name="to" value={this.state.to} onChange={this.handleTo} required/>
                                    
                                    </div>

                                    <div className="form-group row formGroup">
                                        <label className="col-12 col-md-4 col-xl-4">Amount</label>
                                            <input type="text" className="form-control form-control-sm col-12 col-md-8 col-xl-8" id="amount"
                                            name="amount" value={this.state.amount} onChange={this.handleAmount}
                                            />
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

export default ReceivedMail;