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
						noteid={note.id}
					/>
				);
			})
		}
		</div>
	);
}

export default NotesList;