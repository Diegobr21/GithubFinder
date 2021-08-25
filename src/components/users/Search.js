import React, { Component } from 'react'

export class Search extends Component {
    render() {
        return (
            <div>
                <form className='form'>
                    <input type = 'text' placeholder='Search for users ...' name='text' />
                    <input type = 'submit' className='btn btn-dark btn-block' value='Search' />
                </form>
            </div>
        )
    }
}

export default Search
