import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React , { useState, Fragment } from  'react' ;
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { About } from './components/pages/About';

import GithubState from './context/github/GithubState';

const App = () => { 

  const [alert, setAlert] = useState(null);

  
  //Show Alert
  const showAlert = (msg, type) => {
    setAlert({msg, type});
    setTimeout(() => setAlert(null), 3500 );
  }

    return (
      <GithubState>
      <Router>
      
        <Navbar></Navbar>
        <div className='container'>
          <Alert alert={alert}></Alert>
          <Switch> 
           <Route exact path='/' render={props=> (
            <Fragment>
              <Search
              setAlert={showAlert}/>
              <Users></Users>
            </Fragment>
           )}>
             
            </Route> 
            <Route exact path = '/about' component={About} />
            <Route exact path = '/user/:login' component={User} />

          </Switch>
          
        </div>
      
      </Router>
      </GithubState>
    );
  
}

export default App;
