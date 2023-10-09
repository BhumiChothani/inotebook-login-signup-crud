import React, {useContext} from 'react'
import noteContext from '../context/notes/noteContext';

export default function NoteItem(props) {
    const {notes, updateNote} = props;
    const context = useContext(noteContext);
    const {deleteNote} = context;
  return (
    <>
      <div className="col-md-4 col-lg-3">
      <div className="card my-3">
        <div className="card-body text-center">
            <h5 className="card-title">{notes.title}</h5>
            <p className="card-text">{notes.description}</p>
            <div className="d-flex justify-content-center">
                <i className="fa-solid fa-trash mx-2" title="Delete Note" onClick={()=>{deleteNote(notes._id)}}></i>
                <i className="fa-solid fa-pen-to-square mx-2" title="Update note" onClick={()=>{updateNote(notes)}}></i>
            </div>
        </div>
      </div>
     </div>
   </>
  )
}
