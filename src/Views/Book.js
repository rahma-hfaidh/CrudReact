import React, { useState } from 'react'
import AddBook from '../Components/AddBook'
import EditBook from '../Components/EditBook'
import ListeBook from '../Components/ListeBook'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';

function Book() {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

 
  
const [books,setBooks]=useState([{id:1,nom:"la misérable",acteur:"Victor Hugo",category:"Roman"},{id:2,nom:"Guerre et Paix",acteur:" Léon Tolstoï",category:"Conte philosophique"},{id:3,nom:"Ma confession",acteur:"Léon Tolstoï",category:"Fiction"}])
const [idtoupdate,setidtoupdate]=useState(null);
  return (
    <div style={{display:'flex',justifyContent:'center',flexDirection:'column',gap:20}}> E-Book
    <div style={{margin:'0px auto'}}>
        <p className='hover' onClick={()=>{setShow(true);console.log(show)}} style={{ backgroundColor: 'brown',
        width: '100px',
        height: '25px'}}>Add Book</p>
        <ListeBook setshow={setShow1} setidtoupdate={setidtoupdate} books={books} setbooks={setBooks}/></div>
        <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><AddBook setshow={setShow} books={books} setbooks={setBooks}/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow(false)}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={show1} onHide={()=>setShow1(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><EditBook setshow={setShow1} books={books} setbooks={setBooks} idtoupdate={idtoupdate}/>
</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setShow1(false)}>
            Close
          </Button>
          <Button variant="primary" >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Book