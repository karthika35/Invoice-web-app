import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";
import config from "../config";

const ListInvoice = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        fetchInvoice();
    }, []);

    const fetchInvoice = async () => {
        try {
            const response = await axios.get(config.apiBaseUrl);
            setInvoices(response.data);
        } catch (error) {
            console.error('Error fetching invoices:', error);
        }
    };

    const onDelete = async (id) => {
        try {
            await axios.delete(config.apiBaseUrl+id)
                .then(() =>fetchInvoice());
        } catch (error) {
            console.error('Error deleting invoice:', error);
        }
    };

    return (
        <div className="container">
            <h1>List of Invoices</h1>
            <ul className="list-group">
                {invoices.map((invoice) => (
                    <li className="list-group-item" key={invoice.invoiceNo}>
                        <div className="row align-items-start">

                            <div className="col-lg-1"> {invoice.customer}</div>
                            <div className="col-lg-1"> {invoice.invoiceNo}</div>
                            <div className="col-lg-2"> {invoice.emailAddress}</div>
                            <div className="col-lg-1"> {invoice.invoiceDate}</div>
                            <div className="col-lg-1"> {invoice.amount}</div>
                            <div className="col-lg-1"> {invoice.status}</div>
                            <div className="col-lg-1"></div>
                            <button className="col-lg-1 btn btn-danger btn-sm" onClick={() => onDelete(invoice.invoiceId)}> DELETE</button>
                            &nbsp; &nbsp;
                            <Link className="col-lg-1 btn btn-outline-warning btn-sm" to={`/edit/${invoice.invoiceId}`}>EDIT</Link>
                            &nbsp; &nbsp;
                            <Link className="col-lg-1 btn btn-success btn-sm" to={`/view/${invoice.invoiceId}`}> VIEW</Link>

                        </div>
                    </li>

                ))}
            </ul>
        </div>
    );
};

export default ListInvoice;
