function NoteInputTitle({ title, onTitleChange }) {
  return (
    <input type="text" id="note-title" placeholder="Ini adalah judul..." value={title} onChange={onTitleChange} />
  )
}
export default NoteInputTitle