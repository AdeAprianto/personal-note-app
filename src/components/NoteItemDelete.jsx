function NoteItemDelete({ onDeleteNote, id }) {
  return (
    <button id="button-delete" onClick={() => onDeleteNote(id)}>
      Hapus Catatan
    </button>
  )
}
export default NoteItemDelete