import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectNote, startWriteNote, writeNote } from './actions';
import './StickyNote.css'
import { MAX_TEXT_SIZE } from './constants'


const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.changeNotes.notes,
    key: ownProps.noteid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNoteClick: (event) => dispatch(selectNote(event.target.getAttribute("noteid"), event.shiftKey)),
    onNoteDoubleClick: (event) => dispatch(startWriteNote(event.target.getAttribute("noteid"))),
    onWriteNote: (event) => dispatch(writeNote(event.target.parentNode.getAttribute("noteid"), event.target.value))
  }
}

class StickyNote extends Component {

	auto_grow (event) {
		const element = event.target;
	 	element.style.height = 'auto';
		element.style.height = element.scrollHeight+'px';
		element.scrollTop = element.scrollHeight;
		window.scrollTo(window.scrollLeft,(element.scrollTop + element.scrollHeight));
	}

	render() { 
		const {noteid, notes, onNoteClick, onNoteDoubleClick, onWriteNote} = this.props;
		const {posX, posY, id, active, canWrite, text, color} = notes[parseInt(noteid, 10) - 1];
		const activeClass = active ? 'active' : '';

		const styles = {
			position: 'absolute',
			top: posY,
			left: posX
		}
		const bgColor = "bg-washed-" + color;

	    return ( 
	    	< div noteid={id} onClick={onNoteClick} onDoubleClick={onNoteDoubleClick} style={styles} className ={'note ' + activeClass + " " + bgColor} >
	    		<p className={canWrite ? 'hidden' : ''}> {text} </p>
    			<textarea maxLength={MAX_TEXT_SIZE} onKeyDown={(event) => this.auto_grow(event)} onChange={onWriteNote} ref={input => input && input.focus()} className={!canWrite ? 'hidden' : ''}></textarea>
	    	</ div>
	    );
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(StickyNote);