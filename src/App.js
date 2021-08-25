import react from 'react';
import './App.css';
import React , { Component, Fragment } from  'react' ;
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';

class App extends Component{
  render(){

    return (
     <Fragment> 
        <h1>Hello dev!</h1>
        <Navbar></Navbar>
        <div className='container'>
          <Users></Users>
        </div>
        
      </Fragment>
      
      
    );
  }
  
}

export default App;
