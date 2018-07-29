import {  
	CREATE_STICKY_NOTE,
	NO_SELECT,
	COPY_NOTES,
	PASTE_NOTES,
	REMOVE_NOTES
} from '../constants/actionsConstants'

export const createNote = (posX, posY, target) => ({ type: CREATE_STICKY_NOTE, payload: {'posX': posX, 'posY': posY, 'target': target}})
export const noSelect = (target) => ({ type: NO_SELECT, payload: target })
export const copyNotes = () => ({ type: COPY_NOTES })
export const pasteNotes = () => ({ type: PASTE_NOTES})
export const removeNotes = () => ({ type: REMOVE_NOTES })