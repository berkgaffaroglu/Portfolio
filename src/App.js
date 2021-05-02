import React from 'react';
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
import Certificate from './components/Certificates';
import AboutPage from './components/AboutPage';
var animateCss = require("animate.css")
function App() {
  var DEBUG = false;
  var HTTPS;
  var websiteUrl;
  if (DEBUG) {
    websiteUrl = 'http://localhost:8000'
  } else {
    websiteUrl = 'https://berkgaffaroglu.com'
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className='container content'>
          <Switch>
            <Route exact path="/" component={(props) => <Home websiteUrl={websiteUrl} />} />
            <Route path="/projects" component={(props) => <FetchAll websiteUrl={websiteUrl} />} />
            <Route path="/contact" component={(props) => <Contact websiteUrl={websiteUrl} />} />
            <Route path="/project-detail/:str" component={(props) => <FetchDetails websiteUrl={websiteUrl} />} />
            <Route path="/certificates" component={(props) => <Certificate websiteUrl={websiteUrl} />} />
            <Route path="/about" component={(props) => <AboutPage websiteUrl={websiteUrl} />} />
            <Route path="/search/:str" component={(props) => <Search websiteUrl={websiteUrl} />} />
            <Route component={Idle} />
          </Switch>
        </div>
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
