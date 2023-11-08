import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit'
const Note =(props)=>{

  const deleteNote =()=>{
   props.deleteItem(props.id);
  }

  const editText =() =>{
    props.editText(props.id);
  }
   return(
    <div className="note-container">
      <div className="note">
        <h1>{props.title}</h1> 

        <p>{props.content}</p>
        <button onClick={deleteNote}>
        <DeleteIcon className="delete-icon"/>
        </button>

        <button onClick={editText}>
        <EditIcon className="edit-icon"/>
        </button>
      </div>
      </div>
   )
}
export default Note;

