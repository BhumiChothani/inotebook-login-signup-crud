import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
   // const host = "http://localhost:5000";
    const notesInitial = [
        {
            "_id": "1",
            "user": "user1",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509z",
            "__v": 0
        },
        {
            "_id": "2",
            "user": "user1",
            "title": "My Title",
            "description": "Go to shopping",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509z",
            "__v": 0
        },
        {
            "_id": "3",
            "user": "user1",
            "title": "My Title",
            "description": "React js Practice",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509z",
            "__v": 0
        },
        {
            "_id": "4",
            "user": "user1",
            "title": "My Title",
            "description": "Don't forget",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial);

    //get all Notes from API-notesInitial variable ne [] blank kari devo nd then API mathi notes(data) fetch karavva mate aa function 6
    // const getNotes = async()=>{
        //     //api call
        //     const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        //         method: "GET", 
        //         headers: {
        //           "Content-Type": "application/json",
        //           "auth--taken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjZDQ3MzrhMDY2In0sImlhd"
        //         } 
        //       });
        //       const json = await response.json();
        //       console.log(json);
        //       setNotes(json);    
        // }


    //Add a note
    const addNote = async(title, description, tag)=>{
        // //TODO api call
        // const response = await fetch(`${host}/api/notes/addnote`, {
        //     method: "POST", 
        //     headers: {
        //       "Content-Type": "application/json",
        //       "auth--taken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjZDQ3MzrhMDY2In0sImlhd"
        //     },
            
        //     body: JSON.stringify({title, description, tag}), 
        //   });
        //  const note = await response.json();
          
        //logic for adding in client  
        const note = {
            "_id": notes.length + 1,
            "user": "user1",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.509z",
            "__v": 0
        }
        setNotes(notes.concat(note))
        props.displayAlert('success', 'New note Added');
    }

    //delete a note
    const deleteNote = (id)=>{
        //TODO API Call
        //const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            //     method: "DELETE", 
            //     headers: {
            //       "Content-Type": "application/json",
            //       "auth--taken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjZDQ3MzrhMDY2In0sImlhd"
            //     }
            //   });
            //   const json =  response.json(); 
            //  console.log(json); 
       const newNotes = notes.filter((note)=>{return note._id !== id});
       setNotes(newNotes);
       props.displayAlert('success', `note ${id} Deleted`);
    }

    //edit a note
    const editNote = (id, title, description, tag)=>{
        // //TODO API Call
        // const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        //     method: "PUT", 
        //     headers: {
        //       "Content-Type": "application/json",
        //       "auth--taken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjZDQ3MzrhMDY2In0sImlhd"
        //     },
            
        //     body: JSON.stringify({title, description, tag}), 
        //   });
        //   const json =  response.json(); 
        
        
        //logic to edit in client
        let newNotes = JSON.parse(JSON.stringify(notes))    //notes ni copy banavse cz notes state 6 nd state ne direct notes[index].title thi edit na kari shakie
        for(let index=0; index<newNotes.length; index++){
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }  
        }

        setNotes(newNotes);
        props.displayAlert('success', `Note ${id} updated Suceessfully`);
    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;