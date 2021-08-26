import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Fragment } from 'react';


export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired
    }

    onChange = (e) => this.setState({[e.target.name]: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ''})
    }
    render() {
        const {showClear, clearUsers} = this.props;
        return (
            <Fragment>
                <form onSubmit={this.onSubmit} className='form'>
                    <input type = 'text' 
                    placeholder='Search for users ...'
                    name='text'
                    value={this.state.text}
                    onChange={this.onChange}/>

                    <input type = 'submit'
                    className='btn btn-dark btn-block'
                    value='Search' />
                </form>
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers} >Clear</button>}
                    
                
                
            </Fragment>
        )
    }
}

export default Search
