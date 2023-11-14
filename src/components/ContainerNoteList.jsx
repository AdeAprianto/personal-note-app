import { useState } from "react"
import { getInitialData } from "../util"
import HeaderNoteList from "./HeaderNoteList"
import HeaderNoteAdd from "./HeaderNoteAdd"
import NoteItem from "./NoteItem"
import NoteInputTitle from "./NoteInputTitle"
import NoteInputText from "./NoteInputText"
import NoteAdd from "./NoteAdd"

function ContainerNoteList() {

  const [note, setNote] = useState(getInitialData)
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');


  function onAddNote(e) {
    e.preventDefault();

    setNote([...note, { id: +new Date(), title, body, createdAt: new Date().toLocaleDateString(), archived: false }]);
  }

  function onTitleChange(e) {
    setTitle(e.target.value);
  }

  function onBodyChange(e) {
    setBody(e.target.value);
  }

  function onDeleteNote(id) {
    const deleteNote = note.filter((notes) => notes.id !== id);
    setNote(deleteNote);
  }

  return (
    <>
      <div className="add-note-container">
        <HeaderNoteAdd />
        <NoteInputTitle title={title} onTitleChange={onTitleChange} />
        <NoteInputText body={body} onBodyChange={onBodyChange} />
        <NoteAdd onAddNote={onAddNote} />
      </div>

      <HeaderNoteList />
      <div className="note-list-container">
        <div className="list-item-container">
          {note.length !== 0 ? note.map((notes) => { return <NoteItem key={notes.id} id={notes.id} onDeleteNote={onDeleteNote} {...notes} /> }) : "Tidak Ada Catatan!"}
        </div>
      </div>
    </>
  )
}
export default ContainerNoteList