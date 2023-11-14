import { showFormattedDate } from "../util"

function NoteItemDate({ date }) {
  return (
    <h3 className="note-item-list">
      {showFormattedDate(date)}
    </h3>
  )
}
export default NoteItemDate