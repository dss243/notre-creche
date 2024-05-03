import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Contact from './components/pages/Contact';
import SignupActivtie from './components/pages/SignupActivtie';
import SignUpForwork from './components/pages/SignUpForwork';
import KidsInformations from './components/pages/kidsinformations';
import ProfileManagement from './components/pages/ProfileManagement';
import Map from './components/pages/Map';
function App() {
  return (
    <> 
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-upActivtie' component={SignupActivtie} />
          <Route path='/sign-upForwork' component={SignUpForwork} />
          <Route path='/KidsInformations' component={KidsInformations} />
          <Route path='/profilmanage' component={ProfileManagement} />
          <Route path='/maps' component={Map} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
