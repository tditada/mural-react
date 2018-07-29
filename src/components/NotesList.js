import React from 'react';
import StickyNote from '../containers/stickyNote/StickyNote';

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