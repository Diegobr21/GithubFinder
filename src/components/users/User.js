import React, { Fragment, useEffect } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const User = ({user, loading, getUser, getUserRepos, repos, match}) => {

    //Instead of componentDidMount
    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        //eslint-disable-next-line
    }, []);

        const {
            name, 
            avatar_url, 
            location,
            company,
            bio,
            blog, 
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        } = user;


        if (loading) {
            return <Spinner />;

        }
        return (
            <Fragment>
                <Link to='/' className='btn btn-light'>Back to search</Link>
                Hireable {''}
                {hireable ? (<i className='fa fa-check text-success'></i>) : 
                (<i className='fa fa-times-circle text-danger'></i>)}

                <div className='card grid-2'>
                    <div className='all-center'>
                         <img src={avatar_url} className='round-img' alt='' style={{width:'250px'}}></img>
                         {name !== null ? <h1>{name}</h1> : <h1>{login}</h1>}
                         <p>Location: {location}</p>
                    </div>
                    <div>
                        {bio && <Fragment>
                            <h3>Bio</h3>
                            <p>{bio}</p>
                            </Fragment>}
                        <a href={html_url} className='btn btn-dark my-1'>Visit github profile</a>
                        <ul>
                            <li>
                                {login && <Fragment>
                                    <strong>Username: </strong>{login}
                                    </Fragment>}
                            </li>
                            <li>
                                {company && <Fragment>
                                    <strong>Company: </strong>{company}
                                    </Fragment>}
                            </li>
                            <li>
                                {blog && <Fragment>
                                    <strong>Website: </strong>{blog}
                                    </Fragment>}
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='card text-center'>
                    <div className='badge badge-primary'>Followers: {followers} </div>
                    <div className='badge badge-success'>Following: {following} </div>
                    <div className='badge badge-light'>Public repos: {public_repos} </div>
                    <div className='badge badge-dark'>Public gists: {public_gists} </div>  
                   
                </div>
            
            <Repos repos={repos}></Repos>
            </Fragment>
        )
}

User.propTypes = {
    loading: PropTypes.bool.isRequired,
    repos: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired
}

export default User
