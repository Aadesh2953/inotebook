import { useContext } from 'react'
import React from 'react'
import { FetchNotes} from '../context/Fetch'


function NoteItems(props) {
  const Notes=useContext(FetchNotes)
  const{notes,addnotes,deletenote}=Notes
  // console.log(deletenote)
  // console.log(props)
  return (
    <div className='col-md-3'> 
     <div className="card " style={{width:"18 rem"}} >
  <div className="card-body">
    <h5 className="card-title">{props.element.title}</h5>
    <p className="card-text">{props.element.description}</p>
    
    <p><i className="fa fa-solid fa-trash" onClick={()=>deletenote(props.element._id)}></i>    
     </p>
     {/* <p><i class="fa-regular fa-pen-to-square"></i></p> */}
     <p><button onClick={()=>props.UpdateNote(props.element)}>editnote </button></p>

  </div>
</div>
</div>
   
  )
}

export default NoteItems
