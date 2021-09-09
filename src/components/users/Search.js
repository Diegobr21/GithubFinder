import React, {useState} from 'react'
import PropTypes from 'prop-types'
import { Fragment, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';


const Search = ({ setAlert }) =>  {

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
            {githubContext.users.length > 0 && <button className='btn btn-light btn-block' onClick={githubContext.clearUsers} >Clear</button>}
                
            
            
        </Fragment>
    )
    
}

Search.propTypes = {
    setAlert: PropTypes.func.isRequired
};

export default Search
