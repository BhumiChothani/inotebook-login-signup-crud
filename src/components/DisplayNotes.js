import React, {useContext, useRef, useState} from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote';
import NoteItem from './NoteItem';

export default function DisplayNotes(props) {
  const context = useContext(noteContext)
  const {notes, editNote} = context;
  const [note, setNote] = useState({eid:"", etitle:"", edescription:"", etag:""});
  const ref = useRef(null)
  const refClose = useRef(null)
  // useEffect(()=>{
  //   context.getNotes();
    //eslint-disable-next-line
  // },[])

  const updateNote = (currentNote)=>{
    ref.current.click();
    setNote({
      eid: currentNote._id, etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag
    });
  }
  

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }

  const handleUpdateNoteClick = ()=>{
      editNote(note.eid, note.etitle, note.edescription, note.etag);
      refClose.current.click();
  }
  return (
    <>
      <AddNote/>
    
      <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">Title</label>
                  <input type="text" className="form-control" id="etitle" name="etitle" onChange={onChange} value={note.etitle} aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">Description</label>
                  <input type="text" className="form-control" id="edescription" name="edescription" onChange={onChange} value={note.edescription}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">Tag</label>
                  <input type="text" className="form-control" id="etag" name="etag" onChange={onChange} value={note.etag}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button ref={refClose} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length<5 || note.edescription.length<5} type="button" className="btn btn-primary" onClick={handleUpdateNoteClick}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      <h2>Your Notes are:</h2>
      <div className="container">{notes.length === 0 && 'No notes to display '}</div>
        {notes.map((notes)=>{
          return <NoteItem key={notes._id} notes={notes} updateNote={updateNote}/>     
        })}
      </div>
   </> 
  )
}
