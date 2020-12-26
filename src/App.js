import logo from './logo.svg';
import './App.css';
import {AboutUs} from './AboutUs';
import {PaiSho} from './PaiSho';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>
        <nav className="nav">
          <Link to="/Home"style={{ textDecoration: 'none' }}>Home</Link>
          <Link to="/AboutUs"style={{ textDecoration: 'none' }}>About Us</Link>
          <Link to="/PaiSho"style={{ textDecoration: 'none' }}>Pai Sho</Link>
        </nav>
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
