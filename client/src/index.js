import React from 'react';
import ReactDOM from 'react-dom';
import AppLogin from './components/AppLogin';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import AppSignup from './components/AppSignup';
import Home from './Home';
import Profile from './Profile'

//Index renders 3 components
// Home on the route '/home'
//AppLogin on the route '/login'
//AppSignup on the route '/signup'

ReactDOM.render(
   <Router>
     <Route path='/home' component={ Home }></Route>
     <Route path='/login' component={ AppLogin }></Route>
     <Route path='/signup' component={ AppSignup }></Route>
     <Route path ='/profile'component={Profile}></Route>
   </Router>,
  document.getElementById('root')
);