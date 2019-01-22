import React, {Component} from 'react'


class CreateListing extends Component { 

    constructor(props){
        super(props);

        this.state = {
            value:'Title',
            listings: [],
        }
    }

render(){
    return(
    
    <form    > 
        <input type='text' placeholder='title' />
                    <input type='text' placeholder='price' />
                    <input type='text' placeholder='location' />
                    <input type='text' placeholder='description' />

                    <input type='submit' text='submit'/>
                    </form>

    )
}




}

export default CreateListing

