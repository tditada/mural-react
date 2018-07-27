import React from 'react';
import './StickyNote.css'

const StickyNote = ({ id, posX, posY, onNoteClick, active }) => {
	const styles = {
		position: 'absolute',
		top: posY,
		left: posX
	}
    return ( 
    	< div noteid={id} onClick={onNoteClick} style={styles} className ={'bg-washed-green pa3 bn shadow-3 h4 w4 ' + active} >
    	</ div>
    );
}

export default StickyNote;