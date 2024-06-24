import './App.css';
import AddInvoice from './components/AddInvoice';
import EditInvoice from './components/EditInvoice';
import ListInvoice from './components/ListInvoice';
import ViewInvoice from './components/ViewInvoice';
import {Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                        <Link className="navbar-brand btn btn-secondary active" to="/">Home</Link>
                        <Link className="navbar-brand btn btn-secondary active" to="/add">Add Invoice</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<ListInvoice/>}/>
                    <Route path="/add" element={<AddInvoice/>}/>
                    <Route path="view/:id" element={<ViewInvoice/>}/>
                    <Route path="edit/:id" element={<EditInvoice/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;

