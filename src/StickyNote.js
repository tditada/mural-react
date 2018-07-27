import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote } from './actions';
import './StickyNote.css'

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.changeNotes.notes,
    key: ownProps.noteid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick: (event) => dispatch(selectNote(event.target.getAttribute("noteid")))
  }
}


class StickyNote extends Component {

	render() { 
		const {notes, onNoteClick, noteid} = this.props;
		const {posX, posY, id, active} = notes[parseInt(noteid) - 1];
		const activeClass = active ? 'active' : '';

		const styles = {
			position: 'absolute',
			top: posY,
			left: posX
		}
	    return ( 
	    	< div noteid={id} onClick={onNoteClick} style={styles} className ={'bg-washed-green pa3 bn shadow-3 h4 w4 ' + activeClass} >
	    	</ div>
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StickyNote);