import React, { useState } from 'react'
import { editbook } from '../Service/BookService';

function EditBook(props) {
    const [nom,setNom]=useState('');
    const [acteur,setActeur]=useState('');
    const [category,setCategory]=useState('');
  return (
    <div style={{display:'flex',flexDirection:'column',gap:10}}>
        edit book
       <input onChange={(e)=>setNom(e.target.value)}/>
<input onChange={(e)=>setActeur(e.target.value)}/>
<input onChange={(e)=>setCategory(e.target.value)}/>
<p style={{border:'1px solid'}} className="hover" onClick={()=>{editbook({id:props.idtoupdate,nom,acteur:acteur,category:category},props.books,props.setbooks,props.idtoupdate);props.setshow(false)}}>Edit Book</p>
    
    
    </div>
  )
}

export default EditBook