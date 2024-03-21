import { React, useContext, useEffect, useRef, useState } from "react";
import { FetchNotes } from "../context/Fetch";
import NoteItems from "./NoteItems";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";
function Notes() {
  let navigate = useNavigate();
  const context = useContext(FetchNotes);
  const { notes, getNotes, editnote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
      console.log(getNotes());
    } else {
      navigate("/login");
    }
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setnote] = useState({ etitle: "", edescription: "" });
  const updateNote = (currentNote) => {
    ref.current.click(); //it means initially it is null but when we click the update note button it is set to current element and by calling the click option the modal opens
    setnote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
    });
  };

  const handleClick = (e) => {
    console.log("edititing the note");
    editnote(note.id, note.etitle, note.edescription);
    refClose.current.click();
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <AddNote />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    name="etitle"
                    value={note.etitle}
                  />
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    name="edescription"
                    value={note.edescription}
                  />
                </div>
                <div className="mb-3 form-check"></div>
                <button
                  type="btn"
                  className="btn btn-primary"
                  onClick={handleClick}
                  ref={refClose}
                >
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3" style={{ textAlign: "center" }}>
        {notes.length ? (
          notes.map((element) => {
            return <NoteItems element={element} UpdateNote={updateNote} />;
          })
        ) : (
          <h3>
            {" "}
            <pre> No notes to display.</pre>{" "}
          </h3>
        )}
      </div>
    </div>
  );
}

export default Notes;
