import { 
	CREATE_STICKY_NOTE
} from './constants'

const initialState = {
	notes: [],
	totalNotesCreated: 0
}
 
export const changeNotes = (state=initialState, action={}) => {
	switch(action.type) {
		case CREATE_STICKY_NOTE:
			const newNote = {
				id: state.totalNotesCreated + 1,
				text: "",
				posX: action.payload.posX,
				posY: action.payload.posY,
				active: false,
				canWrite: false
			}
			return { ...state, notes :  [...state.notes, newNote], totalNotesCreated: state.totalNotesCreated + 1}
		default:
			return state
	}
}
