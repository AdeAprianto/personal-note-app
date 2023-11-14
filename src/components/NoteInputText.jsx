function NoteInputText({ body, onBodyChange }) {

  return (
    <textarea name="note" id="note-text" cols="30" rows="10" placeholder="Tulis Catatanmu Disini..." value={body} onChange={onBodyChange} >     
    </textarea>
  )
}
export default NoteInputText