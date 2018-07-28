import { 
	CREATE_STICKY_NOTE, 
	SELECT_NOTE, 
	NO_SELECT,
	EDIT_NOTE,
	WRITE_NOTE,
	MAX_TEXT_SIZE,
	COPY_NOTES,
	PASTE_NOTES,
	COLORS,
	COPY_POSX,
	COPY_POSY
} from './constants'

const initialState = {
	notes: [],
	totalNotesCreated: 0,
	copied: []
}

const isNoteClick = (target) => {
	return isTargetANote(target) || isTargetANote(target.parentNode)
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
				active: false
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
		            	active: false,
		            	canWrite: false
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
		default:
			return state
	}
}
 