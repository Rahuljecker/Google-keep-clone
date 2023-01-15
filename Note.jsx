import React from 'react'
import './Note.css'
import DeleteIcon from '@mui/icons-material/Delete';



function Note(props) {

  const DeleteNote=()=>{
      props.DeleteItem(props.id);
  }
  return (
    <>
        <div className="note">
        
        <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button className='Delete' onClick={DeleteNote}><DeleteIcon /></button>
        
        </div>
    </>
  )
}

export default Note