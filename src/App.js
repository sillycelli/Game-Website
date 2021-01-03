import './App.css';
import {AboutUs} from './AboutUs';
import {PaiSho} from './PaiSho';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { NavLink } from "react-router-dom";
import {Login} from './Login';
import {getAccounts} from './DatabaseAccessor';

function App() {
  const [accounts, setAccounts] = useState(false);
  useEffect(() => {
    getAccount();
  }, []);

function getAccount() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setAccounts(data);
      });
  }

  return (
    <div className="App">
      <BrowserRouter>
      <h1>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Collapse className="justify-content-center">
            <Nav variant="pills"  defaultActiveKey="/home">
              <Nav.Link as ={NavLink} exact to="/home">Home</Nav.Link>
              <Nav.Link as ={NavLink} exact to="/AboutUs">About Us</Nav.Link>
              <Nav.Link as ={NavLink} exact to="/PaiSho">Pai Sho</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </h1>
        <Switch>
          <Route path="/home">
            <Login/>
          </Route>
          <Route path="/AboutUs">
            <AboutUs/>
          </Route>
          <Route path="/PaiSho">
            <PaiSho/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
