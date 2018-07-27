import { 
	CREATE_STICKY_NOTE, SELECT_NOTE
} from './constants'

const initialState = {
	notes: [],
	totalNotesCreated: 0
}

const isTargetANote = (target) => {
	const noteid = parseInt(target.getAttribute("noteid"), 10)
	return typeof noteid === 'number' && !Number.isNaN(noteid);
}
 
export const changeNotes = (state=initialState, action={}) => {
	switch(action.type) {
		case CREATE_STICKY_NOTE:
			if (isTargetANote(action.payload.target)) {
				return state;
			}
			const newNote = {
				id: state.totalNotesCreated + 1,
				text: "",
				posX: action.payload.posX,
				posY: action.payload.posY,
				active: false
			}
			return { ...state, notes :  [...state.notes, newNote], totalNotesCreated: state.totalNotesCreated + 1}
		case SELECT_NOTE:
			const newNotes = state.notes.map( (item, index) => {
		        if (index !== (parseInt(action.payload.id, 10) - 1)) {
		            return {
		            	...item,
		            	active: false
		            }
		        }
		        return {
		            ...item,
		            active: !item.active
		        };
		     });
			return { ...state, notes: newNotes}
		default:
			return state
	}
}
