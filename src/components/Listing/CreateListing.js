import React, {Component} from 'react'
import Firebase from '../Firebase'
import { listingRef } from '../Firebase/firebase';

import styles from 'styled-components'

const Button = styles.button`
display:inline-block;
margin: 1rem;
border: 2px solid black;
border-radius: 3px;
cursor:pointer;
`;

const Form  = styles.form`

background-color: lightgrey;
padding: 1rem;

`;

class CreateListing extends Component { 

    createListing(){
console.log('push data to firebase');

        //listingRef.push({       })
        //.then(function() {
        //    console.log("Document successfully written!");
        //})
        //.catch(function(error) {
        //    console.error("Error writing document: ", error);
        //});
        //
        //
    
    }
  
render( ){
    return(
   
    <div className={styles.container}>

        <h2>Post an Ad for a room or apt to rent.</h2>
        <h3>Howneighborly features a simple mobile interface for 
            advertising your available space that also allows both parties to 
            quickly perform background references and send cryptographically
            safe payments.</h3>
           
        <Form>
 
        <label>Create a listing:</label>
        <br />

        <input 
       
        type='text' placeholder='title'  />
        
        <input 
        
         type='text' placeholder='price' />
        
        <input 
        
        type='text' placeholder='location' />
<br />

        <input 
        
         type='text' 
         placeholder='description' 


         />

<br />


<Button onClick={() => this.createListing()}>
Publish
    </Button>
         

         </Form>



         </div>

    )
}
};

export default CreateListing

