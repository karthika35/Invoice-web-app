import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import config from "../config";

const EditInvoice=()=> {
    const [invoiceNo,setInvoiceNo] =useState(0);
    const [customer,setCustomer] =useState('');
    const [emailAddress,setEmailAddress] =useState('');
    const [invoiceDate,setInvoiceDate] =useState('');
    const [amount,setAmount] =useState(0);
    const [status, setStatus] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();
    useEffect(() => {
        fetchInvoice();
    }, []);

    const fetchInvoice = async () => {
        try {
            const response = await axios.get(config.apiBaseUrl+id);
            setInvoiceNo(response.data.invoiceNo);
            setCustomer(response.data.customer);
            setEmailAddress(response.data.emailAddress);
            setInvoiceDate(response.data.invoiceDate);
            setAmount(response.data.amount);
            setStatus(response.data.status);
        } catch (error) {
            console.error('Error fetching invoices:', error);
        }
    };

    //updating
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response =await axios.put(config.apiBaseUrl+'/'+id,
                {invoiceNo, customer, emailAddress, invoiceDate, amount, status, navigate},
                {
                    headers: {
                        'Content-Type': 'application/json',
                    }
                }  );
            navigate('/')
        }catch (error){
            console.error("Error adding Invoice")
        }

    };

    return (
        <div className="container">
            <h2>Add post</h2>
            <form onSubmit={handleSubmit}>
                <label>Invoice No</label>
                <input
                    type="number" className="form-control"
                    name="=invoiceNo"
                    value={invoiceNo}
                    onChange={(e) => setInvoiceNo(e.target.value)}
                    placeholder="Invoice No"
                    required
                />
                <br/>
                <label>Customer Name</label>
                <input
                    type="text" className="form-control"
                    name="=customer"
                    value={customer}
                    onChange={(e) => setCustomer(e.target.value)}
                    placeholder="Customer Name"
                />
                <br/>
                <label>Email </label>
                <input
                    type="email" className="form-control"
                    name="emailAddress"
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="Email"
                />
                <br/>
                <label>Invoice Date</label>
                <input
                    type="text" className="form-control"
                    name="invoiceDate"
                    value={invoiceDate}
                    onChange={(e) => setInvoiceDate(e.target.value)}
                    placeholder="Invoice Date"
                />
                <br/>
                <label>Status </label>
                <input
                    type="text" className="form-control"
                    name="=status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Status"
                />
                <br/>
                <label>Amount</label>
                <input
                    type="number" className="form-control"
                    name="amont"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="Amount"
                />
                <br/>
                <button type="submit" className="btn btn-success">SAVE</button>
            </form>
        </div>
    )
}
export default EditInvoice;