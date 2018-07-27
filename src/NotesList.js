import React from 'react';
import StickyNote from './StickyNote';

const NotesList = ({ notes, onNoteClick }) => {
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
						onNoteClick={onNoteClick}
						active={note.active ? 'active' : ''}
					/>
				);
			})
		}
		</div>
	);
}

export default NotesList;