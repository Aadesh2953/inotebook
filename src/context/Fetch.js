import react, { createContext, useState } from "react";
import Home from "../components/Home";
const FetchNotes = createContext();
const Notes = []


function Fetch() {
  const[notes,setNotes]=useState(Notes);
  const getNotes=async()=>
{
 let response=await fetch("http://localhost:3002/api/notes/fetchallnotes/",
 {
  method:'GET',
  headers:{
    'content-type':'application/json',
    'auth-token':localStorage.getItem('token')
  },

 })
 const data=await response.json()
 console.log(data)
 if(data.length==0)
 {
   console.log('i am empty')
 }
 else
 {
 setNotes(notes.concat(data))
 }
//  console.log(data.element[0].date)
// console.log('i am notes')
// console.log(notes)
// console.log(notes)
}
  const addnote=async(title,description)=>
  {
    const response=await fetch(`http://localhost:3002/api/notes/addnote`,{
        method:'POST',
        headers:{
          'content-type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({title,description})
      })
      let note= await response.json()
    setNotes(notes.concat(note))
  }
  const deletenote=async(id)=>
  {
    const response=await fetch(`http://localhost:3002/api/notes/deletenote/${id}`,{
      method:'DELETE',
      headers:{
        'content-type':'application/json',
        'auth-token':localStorage.getItem('token')
      },
      // body:JSON.stringify({title,description})
    })
      const newnotes= notes.filter((note)=>{ return note._id!==id})
       setNotes(newnotes);

  }
  //http://localhost:3002/api/notes/updatenote/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjVjNWFjOGViYTdlNjdmODNkMmEyOWE3In0sImlhdCI6MTcwNzQ1MzU4Mn0.MoAVb_tE5G4wxBR9endHHkYZAbGJVGX7CUuj7ZIb0wU
  const editnote=async (id,title,description)=>
  {
      const response=await fetch(`http://localhost:3002/api/notes/updatenote/${id}`,{
        method:'PUT',
        headers:{
          'content-type':'application/json',
          'auth-token':localStorage.getItem('token')
        },
        body:JSON.stringify({title,description})
      })
      let  data= await response.json()
      console.log(data)
      let newnotes=JSON.parse(JSON.stringify(notes))  
      // console.log(newnotes)
      // console.log(newnotes._id)
      for(let i in newnotes)
      {
         if(i._id===id)
         {
           i.title=title
           i.description=description
           break;
         }
         
      }
      setNotes(newnotes)
  }
  return (
    <>
      <FetchNotes.Provider value={{notes,setNotes,addnote,deletenote,getNotes,editnote}}>
        <Home />
      </FetchNotes.Provider>
    </>
  );
}
export default Fetch;
export { FetchNotes };
