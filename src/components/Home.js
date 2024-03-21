import React,{ useContext } from "react"
import {FetchNotes} from "../context/Fetch"
import NoteItems from "./NoteItems"
import Notes from "./Notes"
function Home()
{
      // const Notes1=useContext(FetchNotes)
      // let {notes,setnotes}=Notes1
      
    // console.log(userNotes)
    // console.log(Notes1.notes.title)
    return (
        <>
      
<Notes/> 
</>
    )
} 
export default Home