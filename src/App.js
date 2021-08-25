import react from 'react';
import './App.css';
import React , { Component, Fragment } from  'react' ;
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import axios from 'axios';

class App extends Component{

  state = {
    users: [],
    loading: false
  }

  async componentDidMount(){
    this.setState({loading: true})

    const res = await axios.get('https://api.github.com/users');

    this.setState({users: res.data, loading:false})
  }
  render(){

    return (
     <Fragment> 
        <h1>Hello dev!</h1>
        <Navbar></Navbar>
        <div className='container'>
          <Users loading={this.state.loading} users={this.state.users}></Users>
        </div>
        
      </Fragment>
      
      
    );
  }
  
}

export default App;
