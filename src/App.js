import react from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React , { useState, Fragment } from  'react' ;
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { About } from './components/pages/About';
import axios from 'axios';

import GithubState from './context/github/GithubState';

const App = () => { 

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  //Get single user
  const getUser = async username => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setUser(res.data);
    setLoading(false);
  }

  // Get user repos
  const getUserRepos = async username => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }

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
            <Route exact path = '/about' component={About}>

            </Route>
            <Route exact path = '/user/:login' render={props =>(
              <User {...props}
              getUser={getUser}
              getUserRepos={getUserRepos}
              user={user}
              repos={repos}
              loading={loading}></User>
            )}>

            </Route>

          </Switch>
          
        </div>
      
      </Router>
      </GithubState>
    );
  
}

export default App;
