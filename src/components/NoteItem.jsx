import NoteItemTitle from "./NoteItemTitle"
import NoteItemDate from "./NoteItemDate"
import NoteItemBody from "./NoteItemBody"
import NoteItemDelete from "./NoteItemDelete"

function NoteItem({ id, title, body, createdAt, archived, onDeleteNote }) {

  return (
    <div className="note-item">
      <NoteItemTitle title={title} />
      <NoteItemDate date={createdAt} />
      <NoteItemBody body={body} />
      <NoteItemDelete onDeleteNote={onDeleteNote} id={id}/>
    </div>
  )
}
export default NoteItem