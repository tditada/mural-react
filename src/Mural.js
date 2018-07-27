import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote, noSelect } from './actions';

import NotesList from './NotesList'

const mapStateToProps = (state) => {
  return {
    notes: state.changeNotes.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onClickMural: (event) => dispatch(noSelect(event.target)),
    onDoubleClickMural: (event) => dispatch(createNote(event.clientX, event.clientY, event.target))
  }
}

class Mural extends Component {

    render() {
    	const {notes, onClickMural, onDoubleClickMural} = this.props;
        return ( 
        	< div onClick={onClickMural} onDoubleClick={onDoubleClickMural} className = 'bg-light-yellow vh-100 dt w-100' >
        		<NotesList notes={notes} />
        	</ div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mural);