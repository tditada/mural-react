import {  
	SELECT_NOTE,
	EDIT_NOTE ,
	WRITE_NOTE,
} from '../constants/actionsConstants'

export const startWriteNote = (id) => ({ type: EDIT_NOTE, payload: id })
export const selectNote = (id, shiftKey) => ({ type: SELECT_NOTE, payload:  {'id': id, 'shiftPressed': shiftKey} })
export const writeNote = (id,  text) => ({ type: WRITE_NOTE, payload: { 'text': text, 'id': id }})
