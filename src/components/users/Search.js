import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';


const Search = ({showClear, clearUsers, setAlert}) =>  {

    const githubContext = useContext(GithubContext);
    const [text, setText] = useState('');


    const onChange = (e) => setText(e.target.value);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === ''){
            setAlert('Please enter something', 'light');
        }else{
            githubContext.searchUsers(text);
            setText('');
        }
        
    }
    
    return (
        <Fragment>
            <form onSubmit={onSubmit} className='form'>
                <input type = 'text' 
                placeholder='Search for users ...'
                name='text'
                value={text}
                onChange={onChange}/>

                <input type = 'submit'
                className='btn btn-dark btn-block'
                value='Search' />
            </form>
            {showClear && <button className='btn btn-light btn-block' onClick={clearUsers} >Clear</button>}
                
            
            
        </Fragment>
    )
    
}

Search.propTypes = {
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

export default Search
