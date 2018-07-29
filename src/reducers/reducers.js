import { 
	CREATE_STICKY_NOTE, 
	SELECT_NOTE, 
	NO_SELECT,
	EDIT_NOTE,
	WRITE_NOTE,
	COPY_NOTES,
	PASTE_NOTES,
	REMOVE_NOTES
} from '../constants/actionsConstants'
import {
	MAX_TEXT_SIZE,
	COLORS,
	COPY_POSX,
	COPY_POSY,
	INSTRUCTIONS,
	INSTRUCTIONS_2
}  from '../constants/generalConstants'

export const initialState = {
	notes: [ {
		id: 1,
		text: "Welcome! " + INSTRUCTIONS,
		color: COLORS[1],
		posX: COPY_POSX,
		posY: COPY_POSY,
		active: false,
		removed: false,
		canWrite: false
	}, {
		id: 2,
		text: INSTRUCTIONS_2,
		color: COLORS[2],
		posX: 2*COPY_POSX ,
		posY: 2*COPY_POSY,
		active: false,
		removed: false,
		canWrite: false
	}],
	totalNotesCreated: 2,
	copied: []
}

const isNoteClick = (target) => {
	return target && (isTargetANote(target) || isTargetANote(target.parentNode))
}

const isTargetANote = (target) => {
	const noteid = parseInt(target.getAttribute("noteid"), 10)
	return typeof noteid === 'number' && !Number.isNaN(noteid);
}
 
export const changeNotes = (state=initialState, action={}) => {
	let newNotes = {};
	let id;
	switch(action.type) {
		case CREATE_STICKY_NOTE:
			if (isNoteClick(action.payload.target)) {
				return state;
			}
			id = state.totalNotesCreated + 1; 
			const newNote = {
				id: id,
				text: "",
				color: COLORS[id%COLORS.length],
				posX: action.payload.posX,
				posY: action.payload.posY,
				active: false,
				removed: false,
				canWrite: false
			}
			return { ...state, notes :  [...state.notes, newNote], totalNotesCreated: state.totalNotesCreated + 1}
		case SELECT_NOTE:
			newNotes = state.notes.map( (item, index) => {
		        if (index !== (parseInt(action.payload.id, 10) - 1)) {
		        	if (action.payload.shiftPressed) {
		        		return item;
		        	}
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
		case NO_SELECT:
			if (isNoteClick(action.payload)) {
				return state;
			}
			newNotes = state.notes.map( (item) => {
		        return {
		            ...item,
		            active: false,
		            canWrite: false
		        };
		     });
			return { ...state, notes: newNotes}
		case EDIT_NOTE: 
			newNotes = state.notes.map( (item, index) => {
		        if(index !== (parseInt(action.payload, 10) - 1)) {
		            return item;
		        }
		        return {
		            ...item,
		            canWrite: true
		        };
		     });
			return { ...state, notes: newNotes}
		case WRITE_NOTE:
			newNotes = state.notes.map( (item, index) => {
		        if(index !== (parseInt(action.payload.id, 10) - 1)) {
		            return item;
		        }

		        if (action.payload.text.length <= MAX_TEXT_SIZE) {
		        	return {
			            ...item,
			            text: action.payload.text
			        }
		        } 
		        return item
		     });
			return { ...state, notes: newNotes}
		case COPY_NOTES:
			const copiedNotes = state.notes.filter((item) => {
				return item.active
			});
			return { ...state, copied: copiedNotes}
		case PASTE_NOTES:
			id = state.totalNotesCreated;
			const copied = state.copied.map( (item) => {
				id = id + 1;
				return { ...item, id: id, posX: item.posX + COPY_POSX, posY: item.posY + COPY_POSY};
			});
			newNotes = state.notes.concat(copied);
			return { ...state, copied: [], notes: newNotes, totalNotesCreated: id}
		case REMOVE_NOTES: 
			newNotes = state.notes.map((item) => {
				if (!item.active) {
					return item;
				}
				return { ...item, removed: true}
			});
			return { ...state, notes: newNotes}
		default:
			return state
	}
}
