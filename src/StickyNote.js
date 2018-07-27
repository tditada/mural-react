import React from 'react';

const StickyNote = ({ id, posX, posY }) => {
	const styles = {
		position: 'absolute',
		top: posY,
		left: posX
	}
    return ( 
    	< div style={styles} className = 'bg-washed-green pa3 bn shadow-3 h4 w4 ' >
    		<textarea></textarea>
    	</ div>
    );
}

export default StickyNote;