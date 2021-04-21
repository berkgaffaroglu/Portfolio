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
var animateCss = require("animate.css")
function App() {
  const websiteUrl = 'http://berkgaffaroglu.com'
  //const websiteUrl = 'http://localhost:8000'

  var current_location = window.location.pathname.substring(0, 8)
  var sticky;
  if (current_location == '/contact') {
    sticky = "fixed-bottom"
    console.log('Sticky?')
  } else {
    sticky = ""
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
            <Route path="/search/:str" component={(props) => <Search websiteUrl={websiteUrl} />} />
            <Route component={Idle} />
          </Switch>
        </div>
        <Footer sticky={sticky} />
      </div>

    </Router>
  );
}

export default App;
