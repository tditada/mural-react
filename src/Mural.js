import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote, selectNote } from './actions';

import NotesList from './NotesList'

const mapStateToProps = (state) => {
  return {
    notes: state.changeNotes.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDoubleClickMural: (event) => dispatch(createNote(event.clientX, event.clientY, event.target)),
    onNoteClick: (event) => dispatch(selectNote(event.target.getAttribute("noteid")))
  }
}

class Mural extends Component {

    render() {
    	const {notes, onDoubleClickMural, onNoteClick} = this.props;
        return ( 
        	< div onDoubleClick={onDoubleClickMural} className = 'bg-light-yellow vh-100 dt w-100' >
        		<NotesList onNoteClick={onNoteClick} notes={notes} />
        	</ div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mural);