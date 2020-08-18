import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchAll from './components/FetchAll'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FetchDetails } from './components/FetchDetails';
import Idle from './components/Idle';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Contact from './components/Contact';
import Search from './components/Search';
import Footer from './components/Footer';
import ContactDirect from './components/ContactDirect';
function App() {
  return (

    <Router>
      <div className="App">
        <Navigation />
        <div className='container content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={FetchAll} />
            <Route path="/contact" component={Contact} />
            <Route path="/project-detail/:str" component={FetchDetails} />
            <Route path="/search/:str" component={Search} />
            <Route component={Idle} />
          </Switch>

        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
