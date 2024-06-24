import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import config from "../config";

const ViewInvoice = () => {
    const [invoiceNo,setInvoiceNo] =useState(0);
    const [customer,setCustomer] =useState('');
    const [emailAddress,setEmailAddress] =useState('');
    const [invoiceDate,setInvoiceDate] =useState('');
    const [amount,setAmount] =useState(0);
    const [status, setStatus] = useState('');
    const {id} = useParams();


    useEffect(() => {
        fetchInvoice();
    }, []);

    const fetchInvoice = async () => {
        try {
            const response = await axios.get(config.apiBaseUrl+'/'+id);
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

    return (

        <div className="card" style={{width: '20rem', marginLeft:'40%',marginRight:'40%', marginTop:'5%'}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Customer Name: &nbsp; {customer}</li>
                <li className="list-group-item">Invoice No:  &nbsp; {invoiceNo}</li>
                <li className="list-group-item">Invoice Date: &nbsp;  {invoiceDate}</li>
                <li className="list-group-item">Email : &nbsp;  {emailAddress}</li>
                <li className="list-group-item">Amount:  &nbsp; ${amount}</li>
                <li className="list-group-item">Status:  &nbsp; {status}</li>
            </ul>
        </div>

)

}
export default ViewInvoice