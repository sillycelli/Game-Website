import logo from './logo.svg';
import './App.css';
import {AboutUs} from './AboutUs';
import {PaiSho} from './PaiSho';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>
        <Navbar bg="dark" variant="dark">
          <Navbar.Collapse className="justify-content-center">
            <Nav variant="tabs"  defaultActiveKey="/home">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/AboutUs">About Us</Nav.Link>
              <Nav.Link href="/PaiSho">Pai Sho</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </h1>
        <Switch>
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
