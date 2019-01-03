import React, { Component } from 'react'


class AddListing extends Component {


    render(){
        return(
            <div>
                <h2>Post a listing:</h2>
                <form>
                    <input type='text' placeholder='title' />
                    <input type='text' placeholder='price' />
                    <input type='text' placeholder='location' />
                    <input type='text' placeholder='description' />

                    <input type='submit' text='submit' />
                    
                </form>


            </div>


        )
    }
}