import React, { useState } from 'react'
import { addbook } from '../Service/BookService';

function AddBook(props) {
    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    const [nom,setNom]=useState('');
    const [acteur,setActeur]=useState('');
    const [category,setCategory]=useState('');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>

  Name :<input onChange={(e)=>setNom(e.target.value)}/>
Author :<input onChange={(e)=>setActeur(e.target.value)}/>
category :<input onChange={(e)=>setCategory(e.target.value)}/>
<p style={{border:'1px solid brown',width:'250px'}} className='hover' onClick={()=>{addbook({id:makeid(5),nom:nom,acteur:acteur,category:category},props.books,props.setbooks);props.setshow(false)}}>Add Book</p>
    </div>
  )
}

export default AddBook