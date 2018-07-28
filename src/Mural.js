import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNote, noSelect, copyNotes, pasteNotes, removeNotes } from './actions';
import './Mural.css';
import NotesList from './NotesList'
import { ESCAPE_CODE } from './constants'

const mapStateToProps = (state) => {
  return {
    notes: state.changeNotes.notes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	onClickMural: (event) => dispatch(noSelect(event.target)),
    onDoubleClickMural: (event) => dispatch(createNote(event.clientX, event.clientY, event.target)),
    onControlC: (event) => dispatch(copyNotes()),
    onControlV: (event) => dispatch(pasteNotes()),
    onEscape: (event) => dispatch(removeNotes())
  }
}

class Mural extends Component {

	keyDownFunction(event){
	    const charCode = String.fromCharCode(event.which).toLowerCase();
	    const { onControlC, onControlV, onEscape } = this.props;  
	    if(event.ctrlKey && charCode === 'c') {
	    	onControlC();
	    } else if(event.ctrlKey && charCode === 'v') {
	    	onControlV();
	    } else if (event.keyCode == ESCAPE_CODE){
	    	onEscape();
	    }
	}

	componentDidMount(){
	    document.addEventListener("keydown", this.keyDownFunction.bind(this), false);
	}
	  
	componentWillUnmount(){
		document.removeEventListener("keydown", this.keyDownFunction, false);
	}

    render() {
    	const {notes, onClickMural, onDoubleClickMural, onControlC} = this.props;
        return ( 
        	< div onClick={onClickMural} onDoubleClick={onDoubleClickMural} onKeyDown={onControlC} className = 'mural' >
        		<NotesList notes={notes} />
        	</ div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Mural);