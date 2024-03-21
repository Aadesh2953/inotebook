import React, { useState } from 'react'
import { useContext } from 'react'
import {FetchNotes} from '../context/Fetch'
function AddNote() 
{
  const Notes1=useContext(FetchNotes)
   const {addnote}=Notes1
  //  console.log(addnote)

  //  console.log('i am addnotes')
    // const [description,setdescription]=useState('')
    //const [title,settitle]=useState
    const [note,setnotes]=useState({title:"",description:""})
    // console.log(note)
    // const titlevalue=(event)=>
    // {
    //     return settitle(event.target.value)
    // }
    // const descriptionvalue=(event)=>
    // {
    //     return setdescription(event.target.value)
    // }
    const change=((e)=>
    {
       e.preventDefault()
       addnote(note.title,note.description)
       setnotes({title:"",description:""})
    })
    const onChange=(e)=>
    {
          setnotes({...note,[e.target.name]:e.target.value})      
    }
    // console.log(note.title)
    
  return (
    <div>
    <form onSubmit={change}
    > 
  <div className="form-group">
    <h3>AddNote</h3>
    <label htmlFor="exampleInputEmail1">Title</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="title" value={note.title} aria-describedby="emailHelp" placeholder="Enter Title" onChange={onChange} minLength={5}  required/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Description</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name="description" value={note.description} placeholder="Description" onChange={onChange} minLength={5} required/>
  </div>
  <button type="submit" className="btn btn-primary"  >AddNote</button>
  
</form>
    </div>
  )
}

export default AddNote
