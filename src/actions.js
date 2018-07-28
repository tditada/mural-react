import {  
	CREATE_STICKY_NOTE,
	SELECT_NOTE,
	NO_SELECT,
	EDIT_NOTE ,
	WRITE_NOTE,
	COPY_NOTES,
	PASTE_NOTES
} from './constants'

export const createNote = (posX, posY, target) => ({ type: CREATE_STICKY_NOTE, payload: {'posX': posX, 'posY': posY, 'target': target}})

export const selectNote = (id) => ({ type: SELECT_NOTE, payload: {'id': id} })

export const noSelect = (target) => ({ type: NO_SELECT, payload: target })

export const startWriteNote = (id) => ({ type: EDIT_NOTE, payload: id })

export const writeNote = (id,  text) => ({ type: WRITE_NOTE, payload: { 'text': text, 'id': id }})

export const copyNotes = (ids) => ({ type: COPY_NOTES, payload: ids })

export const pasteNotes = () => ({ type: PASTE_NOTES})