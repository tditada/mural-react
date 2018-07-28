import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote, startWriteNote, writeNote } from './actions';
import './StickyNote.css'

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.changeNotes.notes,
    key: ownProps.noteid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick: (event) => dispatch(selectNote(event.target.getAttribute("noteid"))),
    onNoteDoubleClick: (event) => dispatch(startWriteNote(event.target.getAttribute("noteid"))),
    onWriteNote: (event) => dispatch(writeNote(event.target.parentNode.getAttribute("noteid"), event.target.value))
  }
}


class StickyNote extends Component {

	render() { 
		const {noteid, notes, onNoteClick, onNoteDoubleClick, onWriteNote} = this.props;
		const {posX, posY, id, active, canWrite, text} = notes[parseInt(noteid, 10) - 1];
		const activeClass = active ? 'active' : '';

		const styles = {
			position: 'absolute',
			top: posY,
			left: posX
		}
	    return ( 
	    	< div noteid={id} onClick={onNoteClick} onDoubleClick={onNoteDoubleClick} style={styles} className ={'bg-washed-green pa3 bn shadow-3 h4 w4 ' + activeClass} >
	    		<p className={canWrite ? 'hidden' : ''}> {text} </p>
    			<textarea onChange={onWriteNote} ref={input => input && input.focus()} className={!canWrite ? 'hidden' : ''}></textarea>
	    	</ div>
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StickyNote);