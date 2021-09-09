import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React , { Fragment } from  'react' ;
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { About } from './components/pages/About';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => { 

    return (
      <GithubState>
        <AlertState>
      <Router>
      
        <Navbar></Navbar>
        <div className='container'>
          <Alert></Alert>
          <Switch> 
           <Route exact path='/' render={props=> (
            <Fragment>
              <Search />
              <Users></Users>
            </Fragment>
           )}>
             
            </Route> 
            <Route exact path = '/about' component={About} />
            <Route exact path = '/user/:login' component={User} />

          </Switch>
          
        </div>
      
      </Router>
      </AlertState>
      </GithubState>
    );
  
}

export default App;
