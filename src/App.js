import logo from './logo.svg';
import './App.css';
import {AboutUs} from './AboutUs';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="nav">
          <Link to="/Home">Home</Link>
          <Link to="/AboutUs">About Us</Link>
          <Link to="/PaiSho">Pai Sho</Link>
        </nav>
        <Switch>
          <Route path="/AboutUs">
            <AboutUs/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
