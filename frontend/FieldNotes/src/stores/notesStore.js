import { reactive } from 'vue'
import { mockNotes } from '../data/mockNotes'

export const notesState = reactive({
  notes: [...mockNotes]
})

export const findNoteById = (id) => notesState.notes.find((note) => note.id === Number(id))

export const updateNote = (id, payload) => {
  const index = notesState.notes.findIndex((note) => note.id === Number(id))
  if (index === -1) return false

  notesState.notes[index] = {
    ...notesState.notes[index],
    ...payload
  }

  return true
}

export const deleteNote = (id) => {
  const index = notesState.notes.findIndex((note) => note.id === Number(id))
  if (index === -1) return false

  notesState.notes.splice(index, 1)
  return true
}
