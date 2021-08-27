import react from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React , { Component, Fragment } from  'react' ;
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert';
import { About } from './components/pages/About';
import axios from 'axios';

class App extends Component{

  state = {
    users: [],
    loading: false,
    alert:null
  }


  // Search github users
  searchUsers = async text => {
    this.setState({loading: true})

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data.items, loading:false})
  }

  //Clear users from state 
  clearUsers = () => this.setState({users: [], loading:false})

  //Set Alert
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}})
    setTimeout(() => this.setState({alert:null}), 3500 )
  }

  render(){

    const { loading, users} = this.state;

    return (
      <Router>
      
        <Navbar></Navbar>
        <div className='container'>
          <Alert alert={this.state.alert}></Alert>
          <Switch> 
           <Route exact path='/' render={props=> (
            <Fragment>
              <Search 
              searchUsers={this.searchUsers}
              clearUsers={this.clearUsers}
              showClear={users.length > 0 ? true : false}
              setAlert={this.setAlert}/>
              <Users loading={loading} users={users}></Users>
            </Fragment>
           )}>
             
            </Route> 
            <Route exact path = '/about' component={About}>

            </Route>

          </Switch>
          
        </div>
      
      </Router>
    );
  }
  
}

export default App;
