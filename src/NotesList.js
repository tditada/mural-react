import React from 'react';
import StickyNote from './StickyNote';

const NotesList = ({ notes }) => {
	return (
		<div>
		{
			notes.map((note, i)  => {
				return (
					<StickyNote 
						key={note.id} 
						id={note.id} 
						posY={note.posY}
						posX={note.posX}
					/>
				);
			})
		}
		</div>
	);
}

export default NotesList;