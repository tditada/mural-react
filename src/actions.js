import {  
	CREATE_STICKY_NOTE,
	SELECT_NOTE,
	NO_SELECT,
	EDIT_NOTE ,
	WRITE_NOTE,
	COPY_NOTES,
	PASTE_NOTES,
	REMOVE_NOTES
} from './constants'

//Mural
export const createNote = (posX, posY, target) => ({ type: CREATE_STICKY_NOTE, payload: {'posX': posX, 'posY': posY, 'target': target}})
export const noSelect = (target) => ({ type: NO_SELECT, payload: target })
export const copyNotes = () => ({ type: COPY_NOTES })
export const pasteNotes = () => ({ type: PASTE_NOTES})
export const removeNotes = () => ({ type: REMOVE_NOTES })

//Sticky Note
export const startWriteNote = (id) => ({ type: EDIT_NOTE, payload: id })
export const selectNote = (id, shiftKey) => ({ type: SELECT_NOTE, payload:  {'id': id, 'shiftPressed': shiftKey} })
export const writeNote = (id,  text) => ({ type: WRITE_NOTE, payload: { 'text': text, 'id': id }})
